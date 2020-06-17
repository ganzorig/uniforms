import classnames from 'classnames';
import React, { HTMLProps, Ref } from 'react';
import { connectField, filterDOMProps, Override } from 'uniforms';

export type LongTextFieldProps = Override<
  HTMLProps<HTMLDivElement>,
  {
    className?: string;
    disabled: boolean;
    error: unknown;
    errorMessage: string;
    id: string;
    inputRef?: Ref<HTMLTextAreaElement>;
    label: string;
    name: string;
    onChange(value?: string): void;
    placeholder: string;
    required?: boolean;
    showInlineError: boolean;
    value?: string;
  }
>;

function LongText({
  className,
  disabled,
  error,
  errorMessage,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  showInlineError,
  value,
  ...props
}: LongTextFieldProps) {
  return (
    <div
      className={classnames(className, { disabled, error, required }, 'field')}
      {...filterDOMProps(props)}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <textarea
        disabled={disabled}
        id={id}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        ref={inputRef}
        value={value ?? ''}
      />

      {!!(error && showInlineError) && (
        <div className="ui red basic pointing label">{errorMessage}</div>
      )}
    </div>
  );
}

export default connectField(LongText, { kind: 'leaf' });
