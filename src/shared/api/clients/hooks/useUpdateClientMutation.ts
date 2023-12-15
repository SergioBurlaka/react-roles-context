import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { NotificationEntityType, NotificationsConstants } from '../../../constants';
import { ClientsApi } from '../clients.api';
import type { ClientDto } from '../clients.dtos';
import { clientsKeys } from '../clients.keys';
import type { UpdateClientBodyType } from '../clients.types';

type VariablesType = {
  clientId: string;
  body: UpdateClientBodyType;
};

export const useUpdateClientMutation = (): UseMutationResult<ClientDto, Error, VariablesType> => {
  const queryClient = useQueryClient();

  return useMutation<ClientDto, Error, VariablesType>({
    mutationKey: clientsKeys.updateById.queryKey,
    mutationFn: async ({ clientId, body }) => {
      const { data } = await ClientsApi.updateClient(clientId, body);

      return data;
    },
    onSuccess: async (newClient) => {
      queryClient.setQueryData(
        clientsKeys.getById({
          clientId: `${newClient.id}`,
        }).queryKey,
        newClient,
      );
      await Promise.all([
        queryClient.invalidateQueries(clientsKeys.all._def),
        queryClient.invalidateQueries(clientsKeys.allInfinite._def),
      ]);

      notification.success({
        message: NotificationsConstants.UPDATE_SUCCESS_MESSAGE(NotificationEntityType.CLIENT),
      });
    },
  });
};
