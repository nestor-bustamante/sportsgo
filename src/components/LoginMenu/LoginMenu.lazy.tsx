import React, { lazy, Suspense } from 'react';

const LazyLoginMenu = lazy(() => import('./LoginMenu'));

const LoginMenu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLoginMenu {...props} />
  </Suspense>
);

export default LoginMenu;
