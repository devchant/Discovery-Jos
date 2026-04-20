'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type LoaderContextType = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

function LoaderProviderInner({ stopLoading }: { stopLoading: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Automatically stop loading when the route finishes changing
  useEffect(() => {
    stopLoading();
  }, [pathname, searchParams, stopLoading]);

  return null;
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      <Suspense fallback={null}>
        <LoaderProviderInner stopLoading={stopLoading} />
      </Suspense>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
}
