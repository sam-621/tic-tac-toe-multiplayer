import { FC, PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/store/rootState';

export const AppConfigWrapper: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

type Props = PropsWithChildren;
