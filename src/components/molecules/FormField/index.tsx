import React from 'react';
import './style.scss';
import cn from 'classnames';
import Input from '../../atoms/Input';
import ErrorIcon from '../../atoms/ErrorIcon';
import { InputProps } from '../../atoms/Input';

type FormFieldProps = {
  className?: string;
  label: string;
  error?: string;
} & Omit<InputProps, 'className'>;

const FormField = (props: FormFieldProps) => {
  const { className, label, error, ...otherProps } = props;
  const classes = cn(className, {
    invalid: error,
  });

  return (
    <div className="form-field">
      <label>
        <span className="form-field__label">{label}</span>
        <div className="form-field__input">
          <Input className={classes} {...otherProps} />
          {error ? <ErrorIcon /> : null}
        </div>
      </label>
      {error ? <span className="form-field__error">{error}</span> : null}
    </div>
  );
};

export default FormField;
