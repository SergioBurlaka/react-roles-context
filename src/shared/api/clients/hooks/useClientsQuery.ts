import { useQuery } from '@tanstack/react-query';

import type { QueryParamsType } from '../../api.types.shared';
import { ClientsApi } from '../clients.api';
import type { PaginatedClientsDto } from '../clients.dtos';
import { clientsKeys } from '../clients.keys';
import type { GetClientsParamsType } from '../clients.types';

export const useClientsQuery = ({ params }: QueryParamsType<PaginatedClientsDto, GetClientsParamsType>) =>
  useQuery<PaginatedClientsDto>({
    queryKey: clientsKeys.all(params).queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getClients(params);

      return data;
    },
  });
