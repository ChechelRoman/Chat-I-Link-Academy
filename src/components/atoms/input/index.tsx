import './style.scss';

type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ id, name, placeholder, value, handler }: InputProps) => {
  return (
    <input
      type="text"
      className="input"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  );
};

export default Input;
