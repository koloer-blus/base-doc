import { lazy } from "react"

const Home = lazy(() => import('@/docs/index.mdx'));
const Question = lazy(() => import('@/docs/question.mdx'));
const QuickStart = lazy(() => import('@/docs/quick-start.mdx'));

export const routesList = [
  {
    index: 'home',
    element: <Home />
  }
]