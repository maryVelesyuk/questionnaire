import s from "./Button.module.css";

const Button = (props) => {
  const { text, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={s.button}>
      {props.text}
    </button>
  );
};

export default Button;
