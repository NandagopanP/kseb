import Router, { useRouter } from 'next/router';
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { Child } from '@app/types';
import { surakshaAPI } from '@app/config';

interface IAuth {
  isUserLoading: boolean;
  data: Record<string, any> | null;
  setUserData: React.Dispatch<Record<string, any> | null>;
  isAuth: boolean;
}

export const AuthCtx = createContext({} as IAuth);

const PROTECTED_PATHS = ['/dashboard/todo', '/dashboard', '/dashboard/users'];

export const AuthCtxWrapper = ({ children }: Child) => {
  const [isUserLoading, setUserLoading] = useState<boolean>(false);
  const [data, setUserData] = useState<Record<string, any> | null>(null);
  const session = useSessionContext();
  const router = useRouter();
  const { doesSessionExist } = session as any;

  // derived type
  const isAuth = !!data;

  // listening for route change events
  Router.events.on('routeChangeStart', () => {
    // when route change loading screen popup
    setUserLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setUserLoading(false);
  });

  const getData = async () => {
    try {
      setUserLoading(true);
      const { data: response } = await surakshaAPI.get('/officials');
      if (!response.success) {
        throw new Error();
      }

      if (response.success && response.data === null) {
        localStorage.removeItem('isWizardCompleted');
        router.push('/dashboard/profile');
      }
      if (response.success && response.data) {
        // setting the info about the wizard in localstorage so that we can access it in supertokens redirection
        setUserData(response.data);
        localStorage.setItem('isWizardCompleted', 'YES');
        router.push('/dashboard');
      }
    } catch {
      router.push('/auth');
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    if (doesSessionExist) {
      getData();
    } else {
      setUserLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doesSessionExist]);

  useEffect(() => {
    const path = router.pathname;
    if (!isAuth && PROTECTED_PATHS.includes(path)) {
      router.push('/dashboard/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, router.pathname]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const values = useMemo(() => ({ isUserLoading, data, setUserData, isAuth }), [isUserLoading]);

  return <AuthCtx.Provider value={values}>{children}</AuthCtx.Provider>;
};