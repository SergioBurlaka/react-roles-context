import { useQuery } from '@tanstack/react-query';

import type { QueryParamsType } from '../../api.types.shared';
import type { UserResponseDto } from '../index';
import { UsersApi } from '../users.api';
import { usersKeys } from '../users.keys';

type UserType = {
  userId: string | number;
};

export const useUserQuery = ({ params: { userId } }: QueryParamsType<UserResponseDto['user'], UserType>) =>
  useQuery({
    queryKey: usersKeys.user(userId).queryKey,
    queryFn: async () => {
      const { data } = await UsersApi.getUser(userId as string);

      return data;
    },
    enabled: !!userId,
  });
