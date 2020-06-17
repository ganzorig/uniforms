import classnames from 'classnames';
import React, { HTMLProps, Ref } from 'react';
import { connectField, filterDOMProps, Override } from 'uniforms';

export type TextFieldProps = Override<
  HTMLProps<HTMLDivElement>,
  {
    className?: string;
    disabled: boolean;
    error: unknown;
    errorMessage: string;
    icon?: string;
    iconLeft?: string;
    iconProps?: object;
    id: string;
    inputRef?: Ref<HTMLInputElement>;
    label: string;
    name: string;
    onChange(value?: string): void;
    placeholder: string;
    required?: boolean;
    showInlineError: boolean;
    type?: string;
    value?: string;
    wrapClassName?: string;
  }
>;

function Text({
  className,
  disabled,
  error,
  errorMessage,
  icon,
  iconLeft,
  iconProps,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  showInlineError,
  type,
  value,
  wrapClassName,
  ...props
}: TextFieldProps) {
  return (
    <div
      className={classnames(className, { disabled, error, required }, 'field')}
      {...filterDOMProps(props)}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <div
        className={classnames(
          'ui',
          wrapClassName,
          { left: iconLeft, icon: icon || iconLeft },
          'input',
        )}
      >
        <input
          disabled={disabled}
          id={id}
          name={name}
          onChange={event => onChange(event.target.value)}
          placeholder={placeholder}
          ref={inputRef}
          type={type}
          value={value ?? ''}
        />

        {(icon || iconLeft) && (
          <i className={`${icon || iconLeft} icon`} {...iconProps} />
        )}
      </div>

      {!!(error && showInlineError) && (
        <div className="ui red basic pointing label">{errorMessage}</div>
      )}
    </div>
  );
}

Text.defaultProps = { type: 'text' };

export default connectField(Text, { kind: 'leaf' });
