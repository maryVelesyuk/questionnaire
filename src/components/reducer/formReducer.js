import { personalInfoInitialState } from "../../constants/initialState";

export const initialState = {
  personalInfo: personalInfoInitialState,
  errors: {},
  isSubmitted: false,
  isShowPopUp: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.payload.name]: action.payload.value,
        },
      };
    case "FOCUS_INPUT":
      return {
        ...state,
        errors: { ...state.errors, [action.payload.name]: "" },
      };
    case "BLUR_INPUT":
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload.error,
        },
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
        isShowPopUp: true,
      };
    case "SHOW_ERRORS":
      return {
        ...state,
        errors: action.payload.errors,
      };
    case "RESET_FORM":
      return {
        ...state,
        personalInfo: initialState.personalInfo,
        errors: {},
      };
    case "CLOSE_POPUP":
      return {
        ...state,
        isShowPopUp: false,
      };
    default:
      return state;
  }
};
