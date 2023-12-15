import { useQuery } from '@tanstack/react-query';

import type { QueryParamsType } from '../../api.types.shared';
import { ClientsApi } from '../clients.api';
import type { ClientDto } from '../clients.dtos';
import { clientsKeys } from '../clients.keys';
import type { GetClientParamsType } from '../clients.types';

export const useClientQuery = ({ params }: QueryParamsType<ClientDto, GetClientParamsType>) =>
  useQuery({
    queryKey: clientsKeys.getById(params).queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getClient(params);

      return data;
    },
    enabled: !!params?.clientId,
  });
