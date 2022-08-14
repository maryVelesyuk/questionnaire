import { Component } from "react";
import s from "./InputField.module.css";

class InputField extends Component {
  render() {
    const { label, value, onChange, ...inputProps } = this.props;
    return (
      <label className={s.label}>
        {label}
        <input
          {...inputProps}
          className={s.input}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </label>
    );
  }
}

export default InputField;
