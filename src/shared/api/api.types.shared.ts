import type { UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/react-query';

type Optional<T, Keys extends keyof T> = Partial<Pick<T, Keys>> & Omit<T, Keys>;

type QueryType<TData, TParams> = {
  params: TParams;
  options?: UseQueryOptions<TData, Error, TData>;
};

type InfiniteType<TData, TParams> = {
  params: TParams;
  options?: Omit<UseInfiniteQueryOptions<TData, Error, TData, TData>, 'getNextPageParam'>;
};

export type PageableParamsType = {
  page: number;
  itemsPerPage: number;
};

export type SeoEventUrlBodyType = {
  title: string;
  description?: string;
  dateOfEvent?: Date;
};

export type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, unknown> extends { [P in K]: T[K] } ? never : K;
}[keyof T];

export type QueryParamsType<TData, TParams> = RequiredKeys<TParams> extends Record<string, never>
  ? Optional<QueryType<TData, TParams | undefined>, 'params'>
  : QueryType<TData, TParams>;

export type InfiniteQueryParamsType<TData, TParams> = RequiredKeys<Omit<TParams, 'page'>> extends Record<string, never>
  ? Optional<InfiniteType<TData, Omit<TParams, 'page'> | undefined>, 'params'>
  : InfiniteType<TData, Omit<TParams, 'page'>>;
