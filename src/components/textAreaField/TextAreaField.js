import s from "./TextAreaField.module.css";

const TextAreaField = (props) => {
  const { label, value, errorMessage, ...textAreaProps } = props;
  let count = value.length;
  return (
    <label className={s.label}>
      {label}
      <div className={s.container}>
        <textarea value={value} {...textAreaProps} className={s.textarea} />
        {count <= 600 ? (
          <div className={s.counter}>{count}/600</div>
        ) : (
          <div className={s.counterError}>Превышен лимит символов в поле</div>
        )}
      </div>
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </label>
  );
};

export default TextAreaField;
