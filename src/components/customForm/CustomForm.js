import s from "./CustomForm.module.css";

const CustomForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={s.form} noValidate>
      {props.children}
    </form>
  );
};

export default CustomForm;
