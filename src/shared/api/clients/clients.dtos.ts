import { z } from 'zod';

import { paginatedDto } from '@utils/schemas';

import { BaseProjectDto, baseProjectDto } from '../projects/projects.dtos';

export const clientsOrderFields = ['id', 'name'] as const;

export const baseClientDto = z.object({
  '@id': z.string(),
  '@type': z.string(),
  name: z.string(),
});
export type BaseClientDto = z.infer<typeof baseClientDto>;

export type ClientDto = {
  id: number;
  projects: BaseProjectDto[];
} & BaseClientDto;

export const clientDto: z.ZodType<ClientDto> = z.lazy(() =>
  z
    .object({
      id: z.number(),
      projects: z.array(baseProjectDto),
    })
    .and(baseClientDto),
);

export const paginatedClientsDto = paginatedDto(clientDto);
export type PaginatedClientsDto = z.infer<typeof paginatedClientsDto>;
