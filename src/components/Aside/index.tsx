import { ReactNode } from 'react';
import './index.scss';
export const Aside = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <aside className={className}>{children}</aside>;
};
