import { Component } from "react";
import s from "./Title.module.css";

class Title extends Component {
  render() {
    return <h1 className={s.title}>{this.props.title}</h1>;
  }
}
export default Title;
