import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { NotificationEntityType, NotificationsConstants } from '../../../constants';
import { ClientsApi } from '../clients.api';
import { ClientDto } from '../clients.dtos';
import { clientsKeys } from '../clients.keys';
import type { CreateClientBodyType } from '../clients.types';

export const useCreateClientMutation = (): UseMutationResult<ClientDto, Error, CreateClientBodyType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: clientsKeys.create.queryKey,
    mutationFn: async (body) => {
      const { data } = await ClientsApi.createClient(body);

      return data;
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries(clientsKeys.all._def),
        queryClient.invalidateQueries(clientsKeys.allInfinite._def),
      ]);

      notification.success({
        message: NotificationsConstants.CREATE_SUCCESS_MESSAGE(NotificationEntityType.CLIENT),
      });
    },
    onError: () => {
      notification.error({
        message: NotificationsConstants.CREATE_ERROR_MESSAGE(NotificationEntityType.CLIENT),
      });
    },
  });
};
