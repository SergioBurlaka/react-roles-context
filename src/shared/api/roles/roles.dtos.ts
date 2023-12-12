
export enum DefaultUserRoles {
  ROLE_USER = 'ROLE_USER',
}

export enum UserRoles {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_MANAGER = 'ROLE_MANAGER',
  ROLE_SUPER_USER = 'ROLE_SUPER_USER',
}

export type AllUserRolesType = DefaultUserRoles | UserRoles;

export const userRoles = [DefaultUserRoles.ROLE_USER, UserRoles.ROLE_SUPER_USER];
