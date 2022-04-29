import { actionTypes } from "../actionTypes";

export const initialState = {
  classList: [],
  updated: false
};

export const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLASS:
      return {
        ...state,
        updated: false
      };
    case actionTypes.GET_CLASSES:
      return{
        ...state,
        classList: action.payload,
        updated: true
      }
      default:
          break
  }
}
