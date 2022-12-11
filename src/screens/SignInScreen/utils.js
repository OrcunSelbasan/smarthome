export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_IS_ERROR = "SET_IS_ERROR";
export const SET_ERROR_MESSAGE_HEADER = "SET_ERROR_MESSAGE_HEADER";
export const SET_ERROR_MESSAGE_BODY = "SET_ERROR_MESSAGE_BODY";
export const SET_LOADING_MESSAGE = "SET_LOADING_MESSAGE";

export const initialLogin = {
  isLoading: false,
  email: "",
  password: "",
  isError: false,
  errorMessageHeader: "",
  errorMessageBody: "",
  loadingMessage: "Trying to log in...",
};

export const reducer = (state = initialLogin, action) => {
  switch (action.type) {
    case SET_EMAIL:
      state.email = action.email;
      break;
    case SET_ERROR_MESSAGE_BODY:
      state.errorMessageBody = action.errorMessageBody;
      break;
    case SET_ERROR_MESSAGE_HEADER:
      state.errorMessageHeader = action.errorMessageHeader;
      break;
    case SET_IS_ERROR:
      state.isError = action.isError;
      break;
    case SET_IS_LOADING:
      state.isLoading = action.isLoading;
      break;
    case SET_LOADING_MESSAGE:
      state.loadingMessage = action.loadingMessage;
      break;
    case SET_PASSWORD:
      state.password = action.password;
      break;
    default:
      break;
  }
};
