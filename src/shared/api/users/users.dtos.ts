import { z } from 'zod';

import { paginatedDto } from '@utils/schemas';

import { DefaultUserRoles, UserRoles } from '../roles';

export const userDto = z.object({
  id: z.number(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  roles: z.array(z.nativeEnum({ ...UserRoles, ...DefaultUserRoles })),
  privacyPolicyFlag: z.number(),
  email_verified_at: z.string().nullable(),
  registeredAt: z.date(),
  active: z.boolean(),
  updated_at: z.string().nullable(),
  client: z.object({ name: z.string() }).nullable(),
  client_id: z.number().nullable(),
  projects: z.array(z.object({})),
});
export type UserDto = z.infer<typeof userDto>;

export const paginatedUsersDto = paginatedDto(userDto);
export type PaginatedUsersDto = z.infer<typeof paginatedUsersDto>;

export const userResponseDto = z.object({
  user: userDto,
});
export type UserResponseDto = z.infer<typeof userResponseDto>;
