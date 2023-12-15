import { createQueryKeys } from '@lukemorales/query-key-factory';

import type { GetClientParamsType, GetClientsParamsType } from './clients.types';

export const clientsKeys = createQueryKeys('clients', {
  all: (params: GetClientsParamsType) => [params],
  create: null,
  updateById: null,
  getById: (params: GetClientParamsType) => [params],
  deleteById: null,

  allInfinite: (infiniteParams: Omit<GetClientsParamsType, 'page'>) => [infiniteParams],
});
