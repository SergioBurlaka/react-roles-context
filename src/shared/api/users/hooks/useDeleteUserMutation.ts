import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { NotificationEntityType, NotificationsConstants } from '../../../constants';
import { UsersApi } from '../users.api';
import { usersKeys } from '../users.keys';

type VariablesType = {
  userId: string | number;
};

export const useDeleteUserMutation = (): UseMutationResult<unknown, Error, VariablesType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: usersKeys.deleteUser.queryKey,
    mutationFn: async ({ userId }) => UsersApi.deleteUser(userId),
    onSuccess: async () => {
      await queryClient.invalidateQueries(usersKeys.allUsers._def);
      notification.success({
        message: NotificationsConstants.DELETE_SUCCESS_MESSAGE(NotificationEntityType.USER),
      });
    },
  });
};
