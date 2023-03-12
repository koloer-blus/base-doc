import { lazy } from "react";
const Button = lazy(() => import("@base-uicomponents\buttonREADME.mdx"));
const Input = lazy(() => import("@base-uicomponentsinputREADME.mdx"));
export const routeList = [
  { path: "Button", element: <Button /> },
  { path: "Input", element: <Input /> },
];
