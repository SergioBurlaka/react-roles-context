import { AllUserRolesType, DefaultUserRoles, UserRoles } from '@shared/api/roles';

export const getRoleLabel = (role: AllUserRolesType): string =>
  ({
    [UserRoles.ROLE_SUPER_ADMIN]: 'Super admin',
    [UserRoles.ROLE_ADMIN]: 'Admin',
    [UserRoles.ROLE_SEO_MANAGER]: 'SEO manager',
    [UserRoles.ROLE_CLIENT_MANAGER]: 'Client manager',
    [UserRoles.ROLE_CLIENT_SUPERVISOR]: 'Client supervisor',

    [DefaultUserRoles.ROLE_USER]: 'User',
  })[role];
