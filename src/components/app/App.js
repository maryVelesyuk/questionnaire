import { Component } from "react";
import Button from "../button/Button";
import CustomForm from "../customForm/CustomForm";
import InputField from "../inputField/InputField";
import Questionnaire from "../questionnaire/Questionnaire";
import TextAreaField from "../textAreaField/TextAreaField";
import Title from "../title/Title";
import validation from "../../utilities/validation";
import { formInitialState } from "../../constants/initialState";
import "./App.css";

class App extends Component {
  state = formInitialState;

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //будет заменять введенные не числа и не "-" на пустую строку
    if (name === "tel") {
      value = value.replace(/[^\d-]/g, "");
    }

    this.setState({ [name]: value });
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
    errors[name] = validation(name, value);
    this.setState({ errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //Здесь перебираю стейт и на каждое его поле вызываю validation().Наверное не очень хорошее решение, так как плохо расширяемое из-за проверки if key!=, но как сделать по другому я не придумала)
    let errors = {};
    for (let key in this.state) {
      if (key !== "errors" && key !== "isSubmitted") {
        errors[key] = validation(key, this.state[key]);
      }
    }
    if (!Object.values(errors).filter((value) => value).length) {
      this.setState({ isSubmitted: true });
    } else {
      this.setState({ errors });
    }
  };

  handleReset = () => {
    //если я передаю в setstate просто formInitialState, сбрасываются только введенные данные, а errors не сбрасываются. это потому что errors объект и он ссылается все равно на errors из стейта?
    this.setState({ ...formInitialState, errors: {} });
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
          <Questionnaire {...this.state} />
        )}
      </div>
    );
  }
}

export default App;
