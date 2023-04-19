import { ReactNode } from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

export const createContextSelector = <T,>(useHook: () => T) => {
  const context = createContext({} as T);

  const useContext = <Selected,>(selector: (value: T) => Selected) =>
    useContextSelector<T, Selected>(context, selector);

  const Provider = ({ children }: { children: ReactNode }) => {
    const value = useHook();
    return <context.Provider value={value}>{children}</context.Provider>;
  };

  return { useContext, Provider };
};
