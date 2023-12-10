import type { UserRoles } from '../roles';

export type CreateUserBodyType = {
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRoles[];
  client?: string;
};

export type UpdateUserBodyType = CreateUserBodyType;
