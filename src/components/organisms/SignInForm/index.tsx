import React, { useEffect, useState } from 'react';
import './style.scss';
import { ErrorIcon } from '../../atoms/ErrorIcon';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { Header1, Header2 } from '../../atoms/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';
import { capitalize } from './utils';
import dropdownArrow from '../../../images/dropdown-arrow.png';
import refreshCaptchaIcon from '../../../images/refresh-captcha-icon.png';
import cn from 'classnames';
import axios from 'axios';

interface SignInFormInputs {
  login: string;
  password: string;
  password_confirm: string;
  name: string;
  gender_id: string;
  captcha: string;
}

interface Gender {
  id: string;
  gender: string;
}

interface ResponseGender {
  genders: Gender[];
}

export const SignInForm: React.FC = () => {
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [genderList, setGenderList] = useState<Gender[]>([]);
  const [selectValue, setSelectValue] = useState<string>('');
  const [selectText, setSelectText] = useState<string>('');
  const [dateNow, setDateNow] = useState<number>(Date.now);

  useEffect(() => {
    axios
      .get<ResponseGender>('http://109.194.37.212:93/api/auth')
      .then((response) => setGenderList(response.data.genders));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormInputs>();

  const loginInputclasses = cn('input', {
    invalid: errors.login,
  });

  const passwordInputclasses = cn('input', {
    invalid: errors.password,
  });

  const confirmInputclasses = cn('input', {
    invalid: errors.password_confirm,
  });

  const nameInputclasses = cn('input', {
    invalid: errors.name,
  });

  const selectPlaceholderClasses = cn('placeholder-container', {
    invalid: selectText === 'Your gender',
  });

  const firstOptionClasses = cn('option first-option', {
    dropped: isDropped,
  });

  const secondOptionClasses = cn('option second-option', {
    dropped: isDropped,
  });

  const captchaInputclasses = cn('captcha-input', {
    invalid: errors.captcha,
  });

  const handleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    const value = target.getAttribute('data-value');
    setSelectText(value as string);
    if (value === 'male' || value === 'female') {
      const currentGender = genderList.filter((item) => item.gender === value);
      setSelectValue(currentGender[0].id);
    }

    setIsDropped(!isDropped);
  };

  const history = useHistory();
  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    const formData = new FormData();
    formData.append('login', data.login);
    formData.append('password', data.password);
    formData.append('password_confirm', data.password_confirm);
    formData.append('name', data.name);
    formData.append('gender_id', selectValue);
    formData.append('captcha', data.captcha);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://109.194.37.212:93/api/auth/register',
        data: formData,
      });

      const data: boolean | string = response.data;

      if (data === true) {
        history.push('/login');
      }
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  const src = `http://109.194.37.212:93/api/auth/captcha?t=${dateNow}`;
  const handleCaptchaRefresh = () => {
    setDateNow(Date.now());
  };

  return (
    <div className="sign-form-container">
      <Logo type="login-logo" />
      <Header1>
        Sign Up to <span className="header-blue">Chatty</span>
        <span className="header-grey">!</span>
      </Header1>
      <Header2>Registration</Header2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>
            <span className="form-field__label">Create user name</span>
            <div className="form-field__input">
              <input
                {...register('login', { required: true, maxLength: 50 })}
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
            <span className="form-field__label">Create password</span>
            <div className="form-field__input">
              <input
                {...register('password', { required: true })}
                className={passwordInputclasses}
                placeholder="Create password"
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
          <label>
            <span className="form-field__label">Password confirmation</span>
            <div className="form-field__input">
              <input
                {...register('password_confirm', { required: true })}
                className={confirmInputclasses}
                placeholder="Password confirmation"
                type="password"
              />
              {errors.password_confirm ? <ErrorIcon /> : null}
            </div>
          </label>
          <span className="form-field__error">
            {errors.password_confirm && 'Passwords do not match'}
          </span>
        </div>

        <div className="form-field">
          <label>
            <span className="form-field__label">Nickname</span>
            <div className="form-field__input">
              <input
                {...register('name', { required: true, maxLength: 50 })}
                className={nameInputclasses}
                placeholder="Nickname"
              />
              {errors.name ? <ErrorIcon /> : null}
            </div>
          </label>
          <span className="form-field__error">
            {errors.name && 'Name is required'}
          </span>
        </div>

        <div className="form-field">
          <label>
            <span className="form-field__label">Your gender</span>
            <div className="select-container">
              <div
                className={selectPlaceholderClasses}
                onClick={handleDropdown}
                data-value="Your gender">
                {selectValue === '' ? (
                  <div className="placeholder" data-value="Your gender">
                    Your gender
                  </div>
                ) : (
                  <div className="placeholder set" data-value="Your gender">
                    {capitalize(selectText)}
                  </div>
                )}
                <img
                  className="dropdown-arrow"
                  src={dropdownArrow}
                  alt="dropdown arrow"
                  data-value="Your gender"
                />
              </div>
              <div
                className={firstOptionClasses}
                data-value="male"
                onClick={handleDropdown}>
                Male
              </div>
              <div
                className={secondOptionClasses}
                data-value="female"
                onClick={handleDropdown}>
                Female
              </div>
            </div>
          </label>
          <span className="form-field__error">
            {selectText === 'Your gender' ? 'Choose your gender' : ''}
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
              <img src={src} alt="captcha" />
            </div>
            <img
              className="refresh-icon"
              src={refreshCaptchaIcon}
              alt="refresh captcha icon"
              onClick={handleCaptchaRefresh}
            />
          </div>
        </div>

        <Button type="submit">Register</Button>
        <Button type="button" direction="login">
          Log in
        </Button>
      </form>
    </div>
  );
};
