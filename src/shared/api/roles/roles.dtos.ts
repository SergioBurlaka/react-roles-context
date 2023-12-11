
export enum DefaultUserRoles {
  ROLE_USER = 'ROLE_USER',
}

export enum UserRoles {
  ROLE_CLIENT_SUPERVISOR = 'ROLE_CLIENT_SUPERVISOR',
  ROLE_CLIENT_MANAGER = 'ROLE_CLIENT_MANAGER',
  ROLE_SEO_MANAGER = 'ROLE_SEO_MANAGER',
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN',
}

export type AllUserRolesType = DefaultUserRoles | UserRoles;

export const clientUserRoles = [UserRoles.ROLE_CLIENT_MANAGER, UserRoles.ROLE_CLIENT_SUPERVISOR];

