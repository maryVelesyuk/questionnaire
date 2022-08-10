import { Component } from "react";
import s from "./ButtonsBlock.module.css";

class ButtonsBlock extends Component {
  render() {
    return <div className={s.buttonsBlock}>{this.props.children}</div>;
  }
}

export default ButtonsBlock;
