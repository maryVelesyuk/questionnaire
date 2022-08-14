import { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button type={this.props.type} className={s.button}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
