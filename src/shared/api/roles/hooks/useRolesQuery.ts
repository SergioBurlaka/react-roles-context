import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '../../../constants';
import type { PageableParamsType, QueryParamsType } from '../../api.types.shared';
import { RolesApi } from '../roles.api';
import type { RolesResponseDto } from '../roles.dtos';

export const useRolesQuery = ({ params }: QueryParamsType<RolesResponseDto['roles'], PageableParamsType>) =>
  useQuery({
    queryKey: [QueryKeys.ROLES, params],
    queryFn: async () => {
      const { data } = await RolesApi.getRoles(params);

      return data.roles;
    },
  });
