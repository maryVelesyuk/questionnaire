import { Component } from "react";
import s from "./CustomForm.module.css";

class CustomForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className={s.form}>
        {this.props.children}
      </form>
    );
  }
}

export default CustomForm;
