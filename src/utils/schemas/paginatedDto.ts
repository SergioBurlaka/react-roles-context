import * as z from 'zod';

export const paginatedDto = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    'hydra:member': z.array(schema),
    'hydra:totalItems': z.number(),
  });
