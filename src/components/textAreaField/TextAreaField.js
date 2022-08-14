import { Component } from "react";
import s from "./TextAreaField.module.css";

class TextAreaField extends Component {
  render() {
    const { value, onChange, label, ...textAreaProps } = this.props;
    return (
      <label className={s.label}>
        {label}
        <textarea
          {...textAreaProps}
          className={s.textarea}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </label>
    );
  }
}

export default TextAreaField;
