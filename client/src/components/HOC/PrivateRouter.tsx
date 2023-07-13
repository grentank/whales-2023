import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouterProps = {
  isAllowed: boolean;
  redirectPath?: string;
  children?: JSX.Element;
};

export default function PrivateRouter({
  isAllowed,
  redirectPath = '/',
  children,
}: PrivateRouterProps): JSX.Element {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return children || <Outlet />;
}
