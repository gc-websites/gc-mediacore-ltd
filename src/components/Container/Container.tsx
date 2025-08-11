import { ReactNode } from 'react';
import './Container.scss';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
