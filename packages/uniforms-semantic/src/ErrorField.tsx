import classnames from 'classnames';
import React, { HTMLProps } from 'react';
import { connectField, filterDOMProps, Override } from 'uniforms';

export type ErrorFieldProps = Override<
  HTMLProps<HTMLDivElement>,
  {
    error?: boolean;
    errorMessage?: string;
  }
>;

function Error({
  children,
  className,
  error,
  errorMessage,
  ...props
}: ErrorFieldProps) {
  return !error ? null : (
    <div
      className={classnames('ui', className, 'error message')}
      {...filterDOMProps(props)}
    >
      {children ? children : <div className="header">{errorMessage}</div>}
    </div>
  );
}

export default connectField(Error, { initialValue: false, kind: 'leaf' });
