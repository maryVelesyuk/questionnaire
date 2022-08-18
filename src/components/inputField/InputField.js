import s from "./InputField.module.css";

const InputField = (props) => {
  const { label, errorMessage, ...inputProps } = props;

  return (
    <label className={s.label}>
      {label}
      <input {...inputProps} className={s.input} />
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </label>
  );
};

export default InputField;
