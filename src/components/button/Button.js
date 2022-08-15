import { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    const { text, ...buttonProps } = this.props;
    return (
      <button {...buttonProps} className={s.button}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
