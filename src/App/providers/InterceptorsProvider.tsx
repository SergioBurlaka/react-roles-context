import { FC, ReactElement } from 'react';

import { App } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useEffectOnce } from '@shared/hooks/useEffectOnce';
import { setupInterceptors } from '@shared/lib';

export const InterceptorsProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const navigate = useNavigate();
  const { notification } = App.useApp();

  useEffectOnce(() => {
    setupInterceptors({
      navigate,
      notification,
    });
  });

  return children;
};
