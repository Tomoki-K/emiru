import * as React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.StatelessComponent<React.Props<{}> & ButtonProps> = (props) => {
  const { onClick, children, className, disabled } = props;

  return(
    <button
      onClick={onClick}
      className={['Button', className].join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
