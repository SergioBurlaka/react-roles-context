import { z } from 'zod';

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

export const roleDto = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});
export type RoleDto = z.infer<typeof roleDto>;

export const rolesResponseDto = z.object({
  roles: z.array(roleDto),
});
export type RolesResponseDto = z.infer<typeof rolesResponseDto>;
