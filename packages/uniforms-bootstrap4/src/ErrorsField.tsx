import classnames from 'classnames';
import React, { HTMLProps } from 'react';
import { filterDOMProps, Override, useForm } from 'uniforms';

export type ErrorsFieldProps = Override<
  HTMLProps<HTMLDivElement>,
  {
    name: string;
  }
>;

const ErrorsField = ({
  children,
  className,
  name,
  ...props
}: ErrorsFieldProps) => {
  const { error, schema } = useForm();

  return !error && !children ? null : (
    <div
      className={classnames('card border-danger mb-3 text-danger', className)}
      {...filterDOMProps(props)}
    >
      <div className="card-body">
        {children}

        {schema.getErrorMessages(error).map((message, index) => (
          <div key={index} className="disabled">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ErrorsField;
