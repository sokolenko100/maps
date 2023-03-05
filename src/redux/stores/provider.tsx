import type {FC, ReactNode} from 'react';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';

interface IProps {
  children?: ReactNode;
}

const AppStoreProvider: FC<IProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;
