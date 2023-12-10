import { apiClient } from '../../lib';
import type { PageableParamsType } from '../api.types.shared';
import type { PaginatedUsersDto, UserDto } from './users.dtos';
import type { CreateUserBodyType, UpdateUserBodyType } from './users.types';

export const UsersApi = {

  async getUsers(params: PageableParamsType) {
    return apiClient.get<PaginatedUsersDto>('/users', { params });
  },

  async getUser(userId: string | number) {
    return apiClient.get<UserDto>(`/users/${userId}`);
  },

  async updateUser(userId: string | number, body: UpdateUserBodyType) {
    return apiClient.put<UserDto>(`/users/${userId}`, body);
  },

  async deleteUser(userId: string | number) {
    return apiClient.delete<unknown>(`/users/${userId}`);
  },

  async createUser(body: CreateUserBodyType) {
    return apiClient.post<UserDto>('/users', body);
  },
};
