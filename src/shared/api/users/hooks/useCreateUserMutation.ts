import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { NotificationEntityType, NotificationsConstants } from '../../../constants';
import { UsersApi } from '../users.api';
import type { UserDto } from '../users.dtos';
import { usersKeys } from '../users.keys';
import type { CreateUserBodyType } from '../users.types';

export const useCreateUserMutation = (): UseMutationResult<UserDto, Error, CreateUserBodyType> => {
  const queryClient = useQueryClient();

  return useMutation<UserDto, Error, CreateUserBodyType>({
    mutationKey: [],
    mutationFn: async (body) => {
      const { data } = await UsersApi.createUser(body);

      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(usersKeys.allUsers._def);
      notification.success({
        message: NotificationsConstants.CREATE_SUCCESS_MESSAGE(NotificationEntityType.USER),
      });
    },
  });
};
