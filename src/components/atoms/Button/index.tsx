import './style.scss';
import cn from 'classnames';

type ButtonProps = {
  children: React.ReactNode | React.ReactNode[];
  isValid: boolean;
};

const Button = ({ children, isValid }: ButtonProps) => {
  const classes = cn({
    button: true,
    inactive: !isValid,
  });

  return (
    <button className={classes} type="submit">
      {children}
    </button>
  );
};

export default Button;
