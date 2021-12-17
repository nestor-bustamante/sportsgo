import React, { lazy, Suspense } from 'react';

const LazyForgetPass = lazy(() => import('./ForgetPass'));

const ForgetPass = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyForgetPass {...props} />
  </Suspense>
);

export default ForgetPass;
