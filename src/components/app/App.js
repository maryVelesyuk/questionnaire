import { Component } from "react";
import Button from "../button/Button";
import CustomForm from "../customForm/CustomForm";
import InputField from "../inputField/InputField";
import TextAreaField from "../textAreaField/TextAreaField";
import Title from "../title/Title";
import "./App.css";

const initialState = {
  name: "",
  lastName: "",
  birthDate: "",
  tel: "",
  description: "",
  technologies: "",
  lastProjectDescription: "",

  errors: {},
};

class App extends Component {
  state = initialState;

  handleChange = (e) => {
    // let person = this.state.person;
    // person[e.target.name] = e.target.value;
    // this.setState(person);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.person);
  };
  render() {
    return (
      <div className="App">
        <CustomForm onSubmit={this.handleSubmit}>
          <Title title="Создание анкеты" />
          <InputField
            name="name"
            label="Имя"
            type="text"
            placeholder="введите ваше имя"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <InputField
            label="Фамилия"
            name="lastName"
            type="text"
            placeholder="введите вашу фамилию"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <InputField
            label="Дата рождения"
            name="birthDate"
            type="date"
            placeholder="введите вашу дату рождения"
            value={this.state.birthDate}
            onChange={this.handleChange}
          />
          <InputField
            label="Телефон"
            name="tel"
            type="tel"
            placeholder="введите номер телефона"
            value={this.state.tel}
            onChange={this.handleChange}
          />
          <InputField
            label="Сайт"
            name="site"
            type="url"
            placeholder="введите сайт"
            value={this.state.site}
            onChange={this.handleChange}
          />
          <TextAreaField
            label="О себе"
            name="description"
            placeholder="расскажите немного о себе"
            rows="7"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <TextAreaField
            label="Стек технологий"
            name="technologies"
            placeholder="опишите используемые вами технологии"
            rows="7"
            value={this.state.technologies}
            onChange={this.handleChange}
          />
          <TextAreaField
            label="Описание последнего проекта"
            name="lastProjectDescription"
            placeholder="опишите ваш последний проект"
            rows="7"
            value={this.state.lastProjectDescription}
            onChange={this.handleChange}
          />
          <div className="buttonsBlock">
            <Button text="Отмена" type="reset" />
            <Button text="Сохранить" type="submit" />
          </div>
        </CustomForm>
      </div>
    );
  }
}

export default App;
