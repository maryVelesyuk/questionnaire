import React, { Component } from "react";
import Title from "../title/Title";
import s from "./Questionnaire.module.css";

class Questionnaire extends Component {
  render() {
    const {
      name,
      lastName,
      birthDate,
      site,
      tel,
      description,
      technologies,
      lastProjectDescription,
    } = this.props;
    return (
      <div className={s.questionnaire}>
        <Title title="Анкета" />
        <ul>
          <li>Имя: {name}</li>
          <li>Фамилия: {lastName}</li>
          <li> Дата рождения: {birthDate}</li>
          <li>Сайт: {site}</li>
          <li>Телефон: {tel}</li>
          <li>О себе: {description}</li>
          <li>Стек технологий: {technologies}</li>
          <li>Описание последнего проекта: {lastProjectDescription}</li>
        </ul>
      </div>
    );
  }
}

export default Questionnaire;
