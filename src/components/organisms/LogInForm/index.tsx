import React from 'react';
import { ErrorIcon } from '../../atoms/ErrorIcon';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { Header1, Header2 } from '../../atoms/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import './style.scss';
import cn from 'classnames';

interface IFormInputs {
  userName: string;
  password: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

export const LogInForm: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormInputs>();

  const userNameInputclasses = cn('input', {
    invalid: errors.userName,
  });

  const passwordInputclasses = cn('input', {
    invalid: errors.password,
  });

  return (
    <div className="login-form-container">
      <Logo type="login-logo" />
      <Header1>
        Welcome to <span className="header-blue">Chatty</span>
        <span className="header-grey">!</span>
      </Header1>
      <Header2>Please, authorize yourself</Header2>
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>
            <span className="form-field__label">User name</span>
            <div className="form-field__input">
              <input
                {...register('userName', { required: true, minLength: 3 })}
                className={userNameInputclasses}
                placeholder="Input user name"
              />
              {errors.userName ? <ErrorIcon /> : null}
            </div>
          </label>
          <span className="form-field__error">
            {errors.userName &&
              'This field should be minimum 3 characters long'}
          </span>
        </div>

        <div className="form-field">
          <label>
            <span className="form-field__label">Password</span>
            <div className="form-field__input">
              <input
                {...register('password', { required: true, minLength: 8 })}
                className={passwordInputclasses}
                placeholder="Input password"
              />
              {errors.password ? <ErrorIcon /> : null}
            </div>
          </label>
          <span className="form-field__error">
            {errors.password &&
              'This field should be minimum 8 characters long'}
          </span>
        </div>

        <Button type="submit" isFormValid={isValid}>
          Log in
        </Button>
      </form>
    </div>
  );
};
