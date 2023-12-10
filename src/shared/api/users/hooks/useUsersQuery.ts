import { useQuery } from '@tanstack/react-query';

import type { PageableParamsType, QueryParamsType } from '../../api.types.shared';
import { UsersApi } from '../users.api';
import type { PaginatedUsersDto } from '../users.dtos';
import { usersKeys } from '../users.keys';

export const useUsersQuery = ({ params, options }: QueryParamsType<PaginatedUsersDto, PageableParamsType>) =>
  useQuery({
    queryKey: usersKeys.allUsers(params).queryKey,
    queryFn: async () => {
      const { data } = await UsersApi.getUsers(params);
      return data;
    },
    ...options,
  });
