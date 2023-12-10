import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { NotificationEntityType, NotificationsConstants } from '../../../constants';
import type { UserDto } from '../index';
import { UsersApi } from '../users.api';
import { usersKeys } from '../users.keys';
import type { UpdateUserBodyType } from '../users.types';

type VariablesType = {
  userId: string | number;
  body: UpdateUserBodyType;
};

export const useUpdateUserMutation = (): UseMutationResult<UserDto, Error, VariablesType> => {
  const queryClient = useQueryClient();

  return useMutation<UserDto, Error, VariablesType>({
    mutationKey: usersKeys.updateUser.queryKey,
    mutationFn: async ({ userId, body }) => {
      const { data } = await UsersApi.updateUser(userId, body);

      return data;
    },
    onSuccess: async (user) => {
      await Promise.all([
        queryClient.invalidateQueries(usersKeys.allUsers._def),
        queryClient.invalidateQueries(usersKeys.user(`${user?.id}`).queryKey),
      ]);

      notification.success({
        message: NotificationsConstants.UPDATE_SUCCESS_MESSAGE(NotificationEntityType.USER),
      });
    },
  });
};
