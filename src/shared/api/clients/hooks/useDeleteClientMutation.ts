import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { NotificationEntityType, NotificationsConstants } from '../../../constants';
import { projectsKeys } from '../../projects/projects.keys';
import { ClientsApi } from '../clients.api';
import { clientsKeys } from '../clients.keys';

type VariablesType = {
  clientId: string;
};

export const useDeleteClientMutation = (): UseMutationResult<unknown, Error, VariablesType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: clientsKeys.deleteById.queryKey,
    mutationFn: async ({ clientId }) => ClientsApi.deleteClient(clientId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries(clientsKeys.all._def),
        queryClient.invalidateQueries(clientsKeys.allInfinite._def),
        // TODO: Invalidate by clientId when we will allow clients delete
        queryClient.invalidateQueries(clientsKeys.getById._def),
        queryClient.invalidateQueries(projectsKeys.projectsAll._def),
        queryClient.invalidateQueries(projectsKeys.allInfiniteProjects._def),
      ]);

      notification.success({
        message: NotificationsConstants.DELETE_SUCCESS_MESSAGE(NotificationEntityType.CLIENT),
      });
    },
  });
};
