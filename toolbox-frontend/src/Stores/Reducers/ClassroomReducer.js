import { actionTypes } from "../actionTypes";

export const initialState = {
  classes: [{}]
};

export const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLASS:
      return {};
      default:
          break
  }
}
