import { actionTypes } from "../actionTypes";

export const initialState = {
  className: "",
  addClassModalOpen: false,
  editClassModalOpen: false,
  deleteClassModalOpen: false
};

export const classroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLASS:
      return {};
      default:
          break
  }
}
