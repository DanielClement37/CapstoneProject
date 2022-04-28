import { actionTypes } from "../actionTypes";

export const initialState = {
  classList: [],
};

export const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLASS:
      return {
        ...state,
        classList: action.payload
      };
    case actionTypes.GET_CLASSES:
      return{
        ...state,
        classList: action.payload
      }
      default:
          break
  }
}
