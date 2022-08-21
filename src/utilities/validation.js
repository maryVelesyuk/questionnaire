export const validation = (name, value) => {
  let valueStr = value.trim();
  switch (name) {
    case "name":
    case "lastName":
      if (!valueStr) {
        return "Поле пустое. Заполните, пожалуйста";
      }
      if (valueStr.length < 2) {
        return "Имя должно содержать 2 символа и более";
      }
      if (!/^[A-ZА-Я]/.test(valueStr)) {
        return "Имя должно начинаться с большой буквы";
      }
      return "";

    case "birthDate":
      if (!valueStr) {
        return "Поле пустое. Заполните, пожалуйста";
      }
      return "";

    case "site":
      if (!valueStr) {
        return "Поле пустое. Заполните, пожалуйста";
      }
      if (!/^https:\/\//.test(valueStr)) {
        return "Название сайта должно начинаться с https://";
      }
      //
      if (!/^https:\/\/(www\.)?(.*)?\/?(.)*/.test(valueStr)) {
        return "Введите корректный адрес";
      }
      return "";

    case "tel":
      if (!valueStr) {
        return "Поле Телефон пустое. Заполните, пожалуйста";
      }
      if (!valueStr.length === 12) {
        return "Телефон должен содержать 12 символов, включая -";
      }
      if (!/^\d-\d\d\d\d-\d\d-\d\d$/.test(valueStr)) {
        return "Телефон должен быть в формате 7-7777-77-77";
      }
      return "";

    case "description":
    case "technologies":
    case "lastProjectDescription":
      if (!valueStr) {
        return "Поле пустое. Заполните, пожалуйста";
      }
      if (valueStr.length > 600) {
        return "Превышен лимит симолов в поле";
      }
      return "";

    default:
      break;
  }
};

export const addPhoneMask = (value) => {
  value = value.replace(/[^\d-]/g, "");
  if (value.length === 1 || value.length === 6 || value.length === 9) {
    return value + "-";
  }
  if (value.length >= 12) {
    return (value = value.slice(0, 12));
  }
  return value;
};
