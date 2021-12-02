import React from 'react';
import './style.scss';
import { ErrorIcon } from '../../atoms/ErrorIcon';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { Header1, Header2 } from '../../atoms/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useState } from 'react';
import cn from 'classnames';
import refreshCaptchaIcon from '../../../images/refresh-captcha-icon.svg';
import axios from 'axios';

import { useAuth } from '../../../hooks';

interface LogInInputs {
  login: string;
  password: string;
  captcha: string;
}

export const LogInForm: React.FC = () => {
  const [dateNow, setDateNow] = useState<number>(Date.now);
  const auth = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LogInInputs>();

  const loginInputclasses = cn('input', {
    invalid: errors.login,
  });

  const passwordInputclasses = cn('input', {
    invalid: errors.password,
  });

  const captchaInputclasses = cn('captcha-input', {
    invalid: errors.captcha,
  });

  const history = useHistory();
  const onSubmit: SubmitHandler<LogInInputs> = async (data) => {
    const formData = new FormData();
    formData.append('login', data.login);
    formData.append('password', data.password);
    formData.append('captcha', data.captcha);
    try {
      const response = await axios.post<string>(
        'http://109.194.37.212:93/api/auth/login',
        formData
      );

      if (response.status !== 400) {
        const data = response.data;
        auth.logIn(data);
        if (auth.isAuth()) {
          history.replace('./chat');
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data);
      }
    }
  };

  const src = `http://109.194.37.212:93/api/auth/captcha?t=${dateNow}`;
  const handleCaptchaRefresh = () => {
    setDateNow(Date.now());
  };

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
                {...register('login', { required: true })}
                className={loginInputclasses}
                placeholder="Input user name"
              />
              {errors.login ? <ErrorIcon /> : null}
            </div>
          </label>
          <span className="form-field__error">
            {errors.login && 'Login is required'}
          </span>
        </div>

        <div className="form-field">
          <label>
            <span className="form-field__label">Password</span>
            <div className="form-field__input">
              <input
                {...register('password', { required: true })}
                className={passwordInputclasses}
                placeholder="Input password"
                type="password"
              />
              {errors.password ? <ErrorIcon /> : null}
            </div>
          </label>
          <span className="form-field__error">
            {errors.password && 'Password is required'}
          </span>
        </div>

        <div className="form-field">
          <div className="form-field__captcha">
            <div className="input-container">
              <label>
                <span className="form-field__label">Security code</span>
                <div className="form-field__input">
                  <input
                    {...register('captcha', { required: true })}
                    className={captchaInputclasses}
                    placeholder="Security code"
                  />
                  {errors.captcha ? <ErrorIcon /> : null}
                </div>
              </label>
              <span className="form-field__error">
                {errors.captcha && 'Captcha is wrong'}
              </span>
            </div>
            <div className="captcha-container">
              <img src={src} className="captcha" alt="captcha" />
              <img
                className="refresh-icon"
                src={refreshCaptchaIcon}
                alt="refresh captcha icon"
                onClick={handleCaptchaRefresh}
              />
            </div>
          </div>
        </div>

        <Button type="submit">Log in</Button>
        <Button type="button" direction="registration">
          Registration
        </Button>
      </form>
    </div>
  );
};
