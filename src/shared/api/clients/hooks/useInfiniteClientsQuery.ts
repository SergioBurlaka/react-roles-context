import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import type { InfiniteQueryParamsType } from '../../api.types.shared';
import { ClientsApi } from '../clients.api';
import type { ClientDto } from '../clients.dtos';
import { clientsKeys } from '../clients.keys';
import type { GetClientsParamsType } from '../clients.types';

export const useInfiniteClientsQuery = ({
  params,
  options = {},
}: InfiniteQueryParamsType<ClientDto[], GetClientsParamsType>): UseInfiniteQueryResult<ClientDto[]> =>
  useInfiniteQuery({
    queryKey: clientsKeys.allInfinite(params).queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await ClientsApi.getClients({
        ...params,
        page: pageParam,
      });

      return data?.['hydra:member'];
    },
    getNextPageParam: (lastPage, all) => {
      if (lastPage.length < params.itemsPerPage) {
        return;
      }
      return all.length + 1;
    },
    ...options,
  });
