import { NotificationInstance } from 'antd/lib/notification/interface';
import axios from 'axios';
import queryString from 'query-string';
import type { NavigateFunction } from 'react-router-dom';

import { AppRoutes } from '@shared/constants';

const  VITE_API_URL  = 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    patch: {
      'Content-Type': 'application/merge-patch+json',
    },
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, {
      skipEmptyString: true,
      skipNull: true,
    }),
});

type Props = {
  navigate: NavigateFunction;
  notification: NotificationInstance;
};

export const setupInterceptors = ({ navigate, notification }: Props): void => {
  apiClient.interceptors.request.use(async (config) => {
    const newConfig = { ...config };

    const  token  = 'my-super-token'

    if (typeof token === 'string') {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  });

  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {

        navigate(AppRoutes.admin.path);

        return;
      }

      notification.error({
        message: error.response?.data?.message ?? error.response?.data?.['hydra:title'] ?? 'Unknown error occurred',
        description: error?.response?.data?.['hydra:description'],
      });
    },
  );
};

export { apiClient };
