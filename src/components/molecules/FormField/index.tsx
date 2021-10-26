import React from 'react';
import './style.scss';
import { Input } from '../../atoms/Input';
import { ErrorIcon } from '../../atoms/ErrorIcon';

type FormFieldProps = {
  isValid: boolean;
  label: string;
  error?: string;
  name?: string;
  placeholder?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  isValid,
  name,
  placeholder,
}) => {
  return (
    <div className="form-field">
      <label>
        <span className="form-field__label">{label}</span>
        <div className="form-field__input">
          <Input placeholder={placeholder} name={name} isValid={isValid} />
          {error ? <ErrorIcon /> : null}
        </div>
      </label>
      {error ? <span className="form-field__error">{error}</span> : null}
    </div>
  );
};
