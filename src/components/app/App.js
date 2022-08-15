import { Component } from "react";
import Button from "../button/Button";
import CustomForm from "../customForm/CustomForm";
import InputField from "../inputField/InputField";
import Questionnaire from "../questionnaire/Questionnaire";
import TextAreaField from "../textAreaField/TextAreaField";
import Title from "../title/Title";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    lastName: "",
    birthDate: "",
    site: "",
    tel: "",
    description: "",
    technologies: "",
    lastProjectDescription: "",
    errors: {},
    isSubmitted: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFocus = (e) => {
    let name = e.target.name;
    let errors = this.state.errors;
    errors[name] = "";
    this.setState({ errors });

    if (!this.state.site && name === "site") {
      this.setState({ site: "https://" });
    }
  };

  handleBlur = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let { errors } = this.state;
    switch (name) {
      case "name":
        errors.name = this.validateName(value);
        break;
      case "lastName":
        errors.lastName = this.validateName(value);
        break;
      case "birthDate":
        errors.birthDate = this.validateBirthDate(value);
        break;
      case "site":
        errors.site = this.validateSite(value);
        break;
      case "tel":
        errors.tel = this.validateTel(value);
        break;
      case "description":
        errors.description = this.validateText(value);
        break;
      case "technologies":
        errors.technologies = this.validateText(value);
        break;
      case "lastProjectDescription":
        errors.lastProjectDescription = this.validateText(value);
        break;
      default:
        break;
    }
    this.setState({ errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validateAllField();
    if (this.isValid(errors)) {
      this.setState({ isSubmitted: true });
    } else {
      let s1 = { ...this.state };
      s1.errors = errors;
      this.setState(s1);
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      lastName: "",
      birthDate: "",
      site: "",
      tel: "",
      description: "",
      technologies: "",
      lastProjectDescription: "",

      errors: {},
    });
  };

  isValid = (errors) => {
    //errors должны иметь ключи и не пустые значения
    let keys = Object.keys(errors);
    let count = keys.reduce(
      (sum, currentValue) => (errors[currentValue] ? sum + 1 : sum),
      0
    );
    return count === 0;
  };

  validateAllField = () => {
    let {
      name,
      lastName,
      birthDate,
      site,
      tel,
      description,
      technologies,
      lastProjectDescription,
    } = this.state;
    let errors = {};
    errors.name = this.validateName(name);
    errors.lastName = this.validateName(lastName);
    errors.birthDate = this.validateBirthDate(birthDate);
    errors.site = this.validateSite(site);
    errors.tel = this.validateTel(tel);
    errors.description = this.validateText(description);
    errors.technologies = this.validateText(technologies);
    errors.lastProjectDescription = this.validateText(lastProjectDescription);
    return errors;
  };

  validateName = (name) => {
    let nameStr = name.trim();
    if (!nameStr) {
      return "Поле пустое. Заполните, пожалуйста";
    }
    if (nameStr.length < 2) {
      return "Имя должно содержать 2 символа и более";
    }
    if (!/^[A-ZА-Я]/.test(nameStr)) {
      return "Имя должно начинаться с большой буквы";
    }
    return "";
  };

  validateTel = (tel) => {
    let telStr = tel.trim();
    if (!telStr) {
      return "Поле Телефон пустое. Заполните, пожалуйста";
    }
    if (!telStr.length === 12) {
      return "Телефон должен содержать 12 символов, включая -";
    }
    if (!/^\d-\d\d\d\d-\d\d-\d\d$/.test(telStr)) {
      return "Телефон должен быть в формате 7-7777-77-77";
    }
    return "";
  };

  validateBirthDate = (birthDate) => {
    let birthDateStr = birthDate.toString().trim();
    if (!birthDateStr) {
      return "Поле пустое. Заполните, пожалуйста";
    }
    return "";
  };

  validateSite = (site) => {
    let siteStr = site.trim();
    if (!siteStr) {
      return "Поле пустое. Заполните, пожалуйста";
    }
    if (!/^https:\/\//.test(siteStr)) {
      return "Название сайта должно начинаться с https://";
    }
    if (!/\./.test(siteStr)) {
      return "Название сайта должно содержать .";
    }
    return "";
  };

  validateText = (text) => {
    let textStr = text.trim();
    if (!textStr) {
      return "Поле пустое. Заполните, пожалуйста";
    }
    if (textStr.length > 600) {
      return "Превышен лимит симолов в поле";
    }
    return "";
  };

  render() {
    let {
      name,
      lastName,
      birthDate,
      site,
      tel,
      description,
      technologies,
      lastProjectDescription,
      errors,
      isSubmitted,
    } = this.state;
    return (
      <div className="App">
        {!isSubmitted ? (
          <CustomForm onSubmit={this.handleSubmit}>
            <Title title="Создание анкеты" />
            <InputField
              name="name"
              label="Имя"
              type="text"
              placeholder="введите ваше имя"
              value={name}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.name}
            />
            <InputField
              label="Фамилия"
              name="lastName"
              type="text"
              placeholder="введите вашу фамилию"
              value={lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.lastName}
            />
            <InputField
              label="Дата рождения"
              name="birthDate"
              type="date"
              placeholder="введите вашу дату рождения"
              value={birthDate}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.birthDate}
            />
            <InputField
              label="Телефон"
              name="tel"
              type="tel"
              placeholder="введите номер телефона 7-7777-77-77"
              value={tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.tel}
            />
            <InputField
              label="Сайт"
              name="site"
              type="url"
              placeholder="введите сайт https://"
              value={site}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.site}
            />
            <TextAreaField
              label="О себе"
              name="description"
              placeholder="расскажите немного о себе"
              rows="7"
              value={description}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.description}
            />
            <TextAreaField
              label="Стек технологий"
              name="technologies"
              placeholder="опишите используемые вами технологии"
              rows="7"
              value={technologies}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.technologies}
            />
            <TextAreaField
              label="Описание последнего проекта"
              name="lastProjectDescription"
              placeholder="опишите ваш последний проект"
              rows="7"
              value={lastProjectDescription}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errorMessage={errors.lastProjectDescription}
            />
            <div className="buttonsBlock">
              <Button text="Отмена" type="reset" onClick={this.handleReset} />
              <Button text="Сохранить" type="submit" />
            </div>
          </CustomForm>
        ) : (
          <Questionnaire
            name={name}
            lastName={lastName}
            birthDate={birthDate}
            site={site}
            tel={tel}
            description={description}
            technologies={technologies}
            lastProjectDescription={lastProjectDescription}
          />
        )}
      </div>
    );
  }
}

export default App;
