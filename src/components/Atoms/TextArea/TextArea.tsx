import * as React from 'react';

interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  className?: string;
}

export const TextArea: React.StatelessComponent<TextAreaProps> = (props) => {
  const { onChange, value, placeholder, className } = props;

  return (
    <textarea
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={['TextArea', className].join(' ')}
    />
  );
};
