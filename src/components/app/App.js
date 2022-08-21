import Button from "../button/Button";
import CustomForm from "../customForm/CustomForm";
import InputField from "../inputField/InputField";
import Questionnaire from "../questionnaire/Questionnaire";
import TextAreaField from "../textAreaField/TextAreaField";
import Title from "../title/Title";
import Notification from "../notification/Notification";
import { validation, addPhoneMask } from "../../utilities/validation";
import { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";
import { ACTION_TYPES } from "../../constants/actionTypes";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "tel") {
      value = addPhoneMask(value);
    }

    dispatch({
      type: ACTION_TYPES.CHANGE_INPUT,
      payload: { name: name, value: value },
    });
  };

  const handleFocus = (e) => {
    dispatch({
      type: ACTION_TYPES.FOCUS_INPUT,
      payload: { name: e.target.name },
    });
  };

  const handleBlur = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let error = {};
    error[name] = validation(name, value);
    dispatch({
      type: ACTION_TYPES.BLUR_INPUT,
      payload: { error: error },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    for (let key in state.personalInfo) {
      errors[key] = validation(key, state.personalInfo[key]);
    }
    if (!Object.values(errors).filter((value) => value).length) {
      dispatch({ type: ACTION_TYPES.SUBMIT_FORM });
    } else {
      dispatch({ type: ACTION_TYPES.SHOW_ERRORS, payload: { errors: errors } });
    }
  };

  const handleReset = () => {
    dispatch({ type: ACTION_TYPES.RESET_FORM });
  };

  return (
    <div className="App">
      {!state.isSubmitted ? (
        <CustomForm onSubmit={handleSubmit}>
          <Title title="Создание анкеты" />
          <InputField
            name="name"
            label="Имя"
            type="text"
            placeholder="введите ваше имя"
            value={state.personalInfo.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.name}
          />
          <InputField
            label="Фамилия"
            name="lastName"
            type="text"
            placeholder="введите вашу фамилию"
            value={state.personalInfo.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.lastName}
          />
          <InputField
            label="Дата рождения"
            name="birthDate"
            type="date"
            placeholder="введите вашу дату рождения"
            value={state.personalInfo.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.birthDate}
          />
          <InputField
            label="Телефон"
            name="tel"
            type="tel"
            placeholder="введите номер телефона 7-7777-77-77"
            value={state.personalInfo.tel}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoComplete="off"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            errorMessage={state.errors.tel}
          />
          <InputField
            label="Сайт"
            name="site"
            type="url"
            placeholder="введите сайт https://"
            value={state.personalInfo.site}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.site}
          />
          <TextAreaField
            label="О себе"
            name="description"
            placeholder="расскажите немного о себе"
            rows="7"
            value={state.personalInfo.description}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.description}
          />
          <TextAreaField
            label="Стек технологий"
            name="technologies"
            placeholder="опишите используемые вами технологии"
            rows="7"
            value={state.personalInfo.technologies}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.technologies}
          />
          <TextAreaField
            label="Описание последнего проекта"
            name="lastProjectDescription"
            placeholder="опишите ваш последний проект"
            rows="7"
            value={state.personalInfo.lastProjectDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={state.errors.lastProjectDescription}
          />
          <div className="buttonsBlock">
            <Button text="Отмена" type="reset" onClick={handleReset} />
            <Button text="Сохранить" type="submit" />
          </div>
        </CustomForm>
      ) : (
        <Questionnaire personalInfo={state.personalInfo} />
      )}
      {/* нормально ли в компонент передовать dispatch??? */}
      <Notification
        isShowPopUp={state.isShowPopUp}
        dispatch={dispatch}
        notificationText="Данные сохранены"
      />
    </div>
  );
};

export default App;
