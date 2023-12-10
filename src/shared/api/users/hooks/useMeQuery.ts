import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { UsersApi } from '../users.api';
import type { UserDto } from '../users.dtos';
import { usersKeys } from '../users.keys';

export const useMeQuery = (): UseQueryResult<UserDto> =>
  useQuery({
    queryKey: usersKeys.me.queryKey,
    queryFn: async () => {
      const { data } = await UsersApi.getMe();

      return data;
    },
    suspense: true,
  });
