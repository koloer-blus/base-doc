import { lazy, Suspense } from 'react';

const Button = lazy(() => import('@base-ui/components/button/README.mdx'));
const Input = lazy(() => import('@base-ui/components/input/README.mdx'));

export const App = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <Button />
      <Input />
    </Suspense>
  )
}