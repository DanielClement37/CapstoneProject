import { actionTypes } from "../actionTypes";

export const initialState = {
  classList: [],
  studentList: [],
  currentClass: "",
  updated: false
};

export const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLASS:
      return {
        ...state,
        updated: false,
      };
    case actionTypes.ADD_STUDENT:
      return {
        ...state,
        updated: false,
      };
    case actionTypes.GET_CLASSES:
      return {
        ...state,
        classList: action.payload,
        updated: true,
      };
    case actionTypes.GET_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
        updated: true,
      };
    case actionTypes.UPDATE_CURRENT:
      return {
        ...state,
        currentClass: action.payload,
        updated: false,
      };
    default:
      break;
  }
}
