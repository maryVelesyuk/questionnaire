import { Component } from "react";
import Button from "../button/Button";
import ButtonsBlock from "../buttonsBlock/ButtonsBlock";
import CustomForm from "../customForm/CustomForm";
import InputField from "../inputField/InputField";
import TextAreaField from "../textAreaField/TextAreaField";
import Title from "../title/Title";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomForm>
          <Title title="Создание анкеты" />
          <InputField label="Имя" type="text" placeholder="введите ваше имя" />
          <InputField
            label="Фамилия"
            type="text"
            placeholder="введите вашу фамилию"
          />
          <InputField
            label="Дата рождения"
            type="date"
            placeholder="введите вашу дату рождения"
          />
          <InputField
            label="Телефон"
            type="tel"
            placeholder="введите номер телефона"
          />
          <InputField label="Сайт" type="url" placeholder="введите сайт" />
          <TextAreaField
            label="О себе"
            placeholder="расскажите немного о себе"
            rows="7"
          />
          <TextAreaField
            label="Стек технологий"
            placeholder="опишите используемые вами технологии"
            rows="7"
          />
          <TextAreaField
            label="Описание последнего проекта"
            placeholder="опишите ваш последний проект"
            rows="7"
          />
          <ButtonsBlock>
            <Button text="Отмена" />
            <Button text="Сохранить" />
          </ButtonsBlock>
        </CustomForm>
      </div>
    );
  }
}

export default App;
