import { Component } from "react";
import s from "./CustomForm.module.css";

class CustomForm extends Component {
  render() {
    return <form className={s.form}>{this.props.children}</form>;
  }
}

export default CustomForm;
