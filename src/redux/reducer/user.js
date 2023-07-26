const initialState = {
  user: [],

  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, isLoading: true };
    case "LOGIN_FULFILLED":
      return { ...state, isLoading: false, myUser: action.payload.data };
    case "LOGIN_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "REGISTER_PENDING":
      return { ...state, isLoading: true };
    case "REGISTER_FULFILLED":
      return { ...state, isLoading: false, regUser: action.payload.data };
    case "REGISTER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_LIST_USER_PENDING":
      return { ...state, isLoading: true };
    case "GET_LIST_USER_FULFILLED":
      return { ...state, isLoading: false, user: action.payload.data };
    case "GET_LIST_USER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "EDIT_USER_PENDING":
      return { ...state, isLoading: true };
    case "EDIT_USER_FULFILLED":
      return { ...state, isLoading: false, user: action.payload.data };
    case "EDIT_USER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default userReducer;
