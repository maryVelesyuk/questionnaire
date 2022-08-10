import { Component } from "react";
import s from "./TextAreaField.module.css";

class TextAreaField extends Component {
  render() {
    const { label, placeholder, rows } = this.props;
    return (
      <label className={s.label}>
        {label}
        <textarea
          placeholder={placeholder}
          rows={rows}
          className={s.textarea}
        />
      </label>
    );
  }
}

export default TextAreaField;
