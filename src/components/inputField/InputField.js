import { Component } from "react";
import s from "./InputField.module.css";

class InputField extends Component {
  render() {
    const { label, errorMessage, ...inputProps } = this.props;

    return (
      <label className={s.label}>
        {label}
        <input {...inputProps} className={s.input} />
        {errorMessage && <div className={s.error}>{errorMessage}</div>}
      </label>
    );
  }
}

export default InputField;
