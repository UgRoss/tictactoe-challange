import React from 'react';

interface ButtonProps {
  children: React.ReactChildren | string;
  size?: 'base' | 'md';
  type?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ children, size = 'base', type = 'primary' }) => {
  return <button className={`button button--${size} button--${type}`}>{children}</button>;
};

export default Button;
