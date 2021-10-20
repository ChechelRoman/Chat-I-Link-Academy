import './style.scss';
import cn from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, type = 'button', ...otherProps } = props;

  const classes = cn(className, 'button');

  return <button className={classes} type={type} {...otherProps} />;
};

export default Button;
