import { createQueryKeys } from '@lukemorales/query-key-factory';

import type { PageableParamsType } from '../api.types.shared';

export const usersKeys = createQueryKeys('users', {
  allUsers: (params: PageableParamsType) => [params],
  deleteUser: null,
  updateUser: null,
  user: (userId: string | number) => [userId],
});
