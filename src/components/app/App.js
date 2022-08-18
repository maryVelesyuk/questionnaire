import { useState } from "react";
import Button from "../button/Button";
import CustomForm from "../customForm/CustomForm";
import InputField from "../inputField/InputField";
import Questionnaire from "../questionnaire/Questionnaire";
import TextAreaField from "../textAreaField/TextAreaField";
import Title from "../title/Title";
import Notification from "../notification/Notification";
import validation from "../../utilities/validation";
import { personalInfoInitialState } from "../../constants/initialState";
import "./App.css";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(personalInfoInitialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "tel") {
      value = value.replace(/[^\d-]/g, "");

      if (value.length === 1 || value.length === 6 || value.length === 9) {
        value = value + "-";
      }
      if (value.length >= 12) {
        value = value.slice(0, 12);
      }
    }

    setPersonalInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFocus = (e) => {
    let name = e.target.name;
    let errors = {};
    errors[name] = "";
    setErrors((prevState) => {
      return { ...prevState, ...errors };
    });

    if (!personalInfo.site && name === "site") {
      setPersonalInfo((prevState) => {
        return { ...prevState, site: "https://" };
      });
    }
  };

  const handleBlur = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let errors = {};
    errors[name] = validation(name, value);
    setErrors((prevState) => {
      return { ...prevState, ...errors };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    for (let key in personalInfo) {
      if (key !== "errors" && key !== "isSubmitted") {
        errors[key] = validation(key, personalInfo[key]);
      }
    }
    if (!Object.values(errors).filter((value) => value).length) {
      setIsSubmitted(true);
      setIsShowPopUp(true);
    } else {
      setErrors(errors);
    }
  };

  const handleReset = () => {
    setPersonalInfo(personalInfoInitialState);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <CustomForm onSubmit={handleSubmit}>
          <Title title="Создание анкеты" />
          <InputField
            name="name"
            label="Имя"
            type="text"
            placeholder="введите ваше имя"
            value={personalInfo.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.name}
          />
          <InputField
            label="Фамилия"
            name="lastName"
            type="text"
            placeholder="введите вашу фамилию"
            value={personalInfo.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.lastName}
          />
          <InputField
            label="Дата рождения"
            name="birthDate"
            type="date"
            placeholder="введите вашу дату рождения"
            value={personalInfo.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.birthDate}
          />
          <InputField
            label="Телефон"
            name="tel"
            type="tel"
            placeholder="введите номер телефона 7-7777-77-77"
            value={personalInfo.tel}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.tel}
          />
          <InputField
            label="Сайт"
            name="site"
            type="url"
            placeholder="введите сайт https://"
            value={personalInfo.site}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.site}
          />
          <TextAreaField
            label="О себе"
            name="description"
            placeholder="расскажите немного о себе"
            rows="7"
            value={personalInfo.description}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.description}
          />
          <TextAreaField
            label="Стек технологий"
            name="technologies"
            placeholder="опишите используемые вами технологии"
            rows="7"
            value={personalInfo.technologies}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.technologies}
          />
          <TextAreaField
            label="Описание последнего проекта"
            name="lastProjectDescription"
            placeholder="опишите ваш последний проект"
            rows="7"
            value={personalInfo.lastProjectDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            errorMessage={errors.lastProjectDescription}
          />
          <div className="buttonsBlock">
            <Button text="Отмена" type="reset" onClick={handleReset} />
            <Button text="Сохранить" type="submit" />
          </div>
        </CustomForm>
      ) : (
        <Questionnaire personalInfo={personalInfo} />
      )}
      <Notification
        isShowPopUp={isShowPopUp}
        setIsShowPopUp={setIsShowPopUp}
        notificationText="Данные сохранены"
      />
    </div>
  );
};

export default App;
