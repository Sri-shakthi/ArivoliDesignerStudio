import React, { createContext, useContext, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: ReactNode;
  lenis: Lenis | null;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children, lenis }) => {
  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};

