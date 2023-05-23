const initialState = {
  visible: false,
};

export const setIsVisible = (
  visibility: Boolean,
  todoId: Number,
  itemId: Number
) => ({
  type: Boolean,
  payload: visibility,
  todoId: todoId,
  itemId: itemId,
});

export const EDIT_TODO = "EDIT_TODO";

export const visibilityReducer = (
  state = initialState,
  action: {
    type: String;
    payload: Boolean;
    todoId: Number;
    itemId: Number;
  }
) => {
  return {
    visibility: action.payload,
    todoId: action.todoId,
    itemId: action.itemId,
  };
};
