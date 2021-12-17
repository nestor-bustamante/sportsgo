import React, { lazy, Suspense } from 'react';

const LazyLive = lazy(() => import('./Live'));

const Live = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLive {...props} />
  </Suspense>
);

export default Live;
