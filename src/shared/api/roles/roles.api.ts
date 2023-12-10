import { axiosInstance } from '../../lib';
import type { PageableParamsType } from '../api.types.shared';
import type { RolesResponseDto } from './roles.dtos';

export const RolesApi = {
  async getRoles(params: PageableParamsType) {
    return axiosInstance.get<RolesResponseDto>('/roles', { params });
  },
};
