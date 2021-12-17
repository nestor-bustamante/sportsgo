import React, { lazy, Suspense } from 'react';

const LazyUserMenu = lazy(() => import('./UserMenu'));

const UserMenu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserMenu {...props} />
  </Suspense>
);

export default UserMenu;
