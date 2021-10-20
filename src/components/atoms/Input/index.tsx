import './style.scss';
import cn from 'classnames';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const { className, ...otherProps } = props;

  const classes = cn(className, 'input');
  return <input className={classes} {...otherProps} />;
};

export default Input;
