import * as React from 'react';

interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  className?: string;
  autoGrow?: boolean;
}

export const TextArea: React.StatelessComponent<TextAreaProps> = (props) => {
  const { onChange, value, placeholder, className, autoGrow } = props;

  const TextInput = React.createRef<HTMLTextAreaElement>();
  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!autoGrow) { return; }
    const element = TextInput.current;
    element.style.height = '5px';
    element.style.height = `${element.scrollHeight}px`;
  };
  return (
    <textarea
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      placeholder={placeholder}
      className={['TextArea', className].join(' ')}
      ref={TextInput}
    />
  );
};
