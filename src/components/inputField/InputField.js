import { Component } from "react";
import s from "./InputField.module.css";

class InputField extends Component {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <label className={s.label}>
        {label}
        <input type={type} placeholder={placeholder} className={s.input} />
      </label>
    );
  }
}

export default InputField;
