import {createContext, useContext, createRef} from 'react';

import type {
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/core';

const navigationRef =
  createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

const resetNavigation = (index: number, name: string) => {
  navigationRef.current?.reset({
    index,
    routes: [
      {
        name,
      },
    ],
  });
};

const navigateTo = (name: string, params: ParamListBase) => {
  navigationRef.current?.navigate(name, params);
};

const RootNavigationContext = createContext();

const RootNavigationProvider = RootNavigationContext.Provider;

const useRootNavigation = () => useContext(RootNavigationContext);

export {
  resetNavigation,
  navigateTo,
  RootNavigationProvider,
  useRootNavigation,
  navigationRef,
};
