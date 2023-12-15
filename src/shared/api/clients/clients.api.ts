import { validateApiResponse } from '@utils/schemas';

import { apiClient } from '../../lib';
import { ClientDto, clientDto, paginatedClientsDto } from './clients.dtos';
import type {
  CreateClientBodyType,
  GetClientParamsType,
  GetClientsParamsType,
  UpdateClientBodyType,
} from './clients.types';

export const ClientsApi = {
  async getClients(params: GetClientsParamsType) {
    const res = await apiClient.get('/clients', { params });

    return validateApiResponse(res, paginatedClientsDto);
  },

  async getClient(params: GetClientParamsType) {
    return apiClient.get<ClientDto>(`/clients/${params.clientId}`);
  },

  async createClient(body: CreateClientBodyType) {
    return apiClient.post<ClientDto>(`/clients`, body);
  },

  async updateClient(clientId: string, body: UpdateClientBodyType) {
    const res = await apiClient.put(`/clients/${clientId}`, body);

    return validateApiResponse(res, clientDto);
  },

  // TODO: Add return type when deleting clients will be allowed
  async deleteClient(clientId: string) {
    return apiClient.delete(`/clients/${clientId}`);
  },
};
