import { TodoType } from "./../types/types";


const ADD_TODO = "ADD_TODO";
const ADD_TODO_LIST = "ADD_TODO_LIST";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = [
  {
    itemId: 0,
    id: "Things To Buy",
    todo: [
      {
        todoId: 0,
        title: "Grocerys",
        description: "To buy Grocerys",
        name: "Things To Buy",
      },
      {
        todoId: 1,
        title: "Mobile Phone",
        description: "Mobile Phone makes communication easier.",
        name: "Things To Buy",
      },
    ],
  },
  {
    itemId: 1,
    id: "Things To Sell",
    todo: [
      {
        todoId: 0,
        title: "Grocerys",
        description: "To buy Grocerys",
        name: "Things To Buy",
      },
      {
        todoId: 1,
        title: "Mobile Phone",
        description: "Mobile Phone makes communication easier.",
        name: "Things To Buy",
      },
    ],
  },
];

export const addTodo = (Todo: TodoType, name: String) => ({
  type: ADD_TODO,
  payload: { Todo, name },
});

export const addList = (id: String) => ({
  type: ADD_TODO_LIST,
  payload: { id },
});

export const updateTodo = (title: String, description: String, id: Number) => ({
  type: EDIT_TODO,
  payload: { title, description, id },
});

export const deleteTodo = (todo: Object) => ({
  type: DELETE_TODO,
  payload: todo,
});

export const todoReducer = (
  state = initialState,
  action: {
    type: String;
    payload: {
      itemId: number;
      Todo: {
        title: string;
        description: string;
        name: string;
        todoId: number;
      };
      editedTodo: {
        title: String;
        name: String;
        description: String;
        todoId: number;
      };
      id: string;
      name: String;
      todoId: number;
    };
  }
) => {
  if (action.type === ADD_TODO) {
    const found = state.filter((st) => st.id === action.payload.Todo.name);

    if (found) {
      found[0].todo.push(action.payload.Todo);

      return [...state, found[0]];
    }
  } else if (action.type === ADD_TODO_LIST) {
    const { id } = action.payload;
    const data = {
      id,
      todo: [],
    };

    
    return [...state, data];
  } else if (action.type === EDIT_TODO) {
    
    return state;
  } else if (action.type === DELETE_TODO) {
    const selectedList = state.find((item) => item.id === action.payload.name);

    
    const filteredItem = selectedList?.todo.filter(
      (item) => item.todoId !== action.payload.todoId
    );

    filteredItem &&
      selectedList?.todo.splice(0, selectedList?.todo.length, ...filteredItem);
    return state;
  } else {
    return state;
  }
};
