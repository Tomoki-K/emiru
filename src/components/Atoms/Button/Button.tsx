import * as React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button: React.StatelessComponent<React.Props<{}> & ButtonProps> = (props) => {
  const { onClick, children, className } = props;

  return(
    <button
      onClick={onClick}
      className={['button', className].join(' ')}
    >
      {children}
    </button>
  );
};
