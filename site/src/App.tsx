import { lazy, Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback={<div>...</div>}>
    </Suspense>
  )
}