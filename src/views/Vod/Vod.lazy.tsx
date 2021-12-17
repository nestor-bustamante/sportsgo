import React, { lazy, Suspense } from 'react';

const LazyVod = lazy(() => import('./Vod'));

const Vod = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVod {...props} />
  </Suspense>
);

export default Vod;
