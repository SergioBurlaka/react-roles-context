import { OrderParamsType } from '@types';

import type { PageableParamsType } from '../api.types.shared';
import type { ClientDto } from './clients.dtos';
import { clientsOrderFields } from './clients.dtos';

export type GetClientsParamsType = PageableParamsType & {
  name?: string;
} & OrderParamsType<typeof clientsOrderFields>;

export type GetClientParamsType = {
  clientId: string;
};

export type CreateClientBodyType = Pick<ClientDto, 'name'>;

export type UpdateClientBodyType = Pick<ClientDto, 'name'>;
