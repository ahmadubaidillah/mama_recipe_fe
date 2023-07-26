const initialState = {
  food: [],

  isLoading: false,
  isError: false,
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PENDING":
      return { ...state, isLoading: true };
    case "ADD_FULFILLED":
      return { ...state, isLoading: false, myFood: action.payload.data };
    case "ADD_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_FOOD_PENDING":
      return { ...state, isLoading: true };
    case "GET_FOOD_FULFILLED":
      return { ...state, isLoading: false, food: action.payload.data };
    case "GET_FOOD_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_FOOD_BY_ID_PENDING":
      return { ...state, isLoading: true };
    case "GET_FOOD_BY_ID_FULFILLED":
      return { ...state, isLoading: false, foodId: action.payload.data };
    case "GET_FOOD_BY_ID_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "EDIT_FOOD_PENDING":
      return { ...state, isLoading: true };
    case "EDIT_FOOD_FULFILLED":
      return { ...state, isLoading: false, food: action.payload.data };
    case "EDIT_FOOD_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default foodReducer;
