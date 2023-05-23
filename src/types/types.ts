export type TodoType = {
  title: String;
  description: String;
  name: String;
};

export type TodoList = {
  id: String;
  todo: TodoType[];
}[];



export type anotherType = {
  firstReducer: {
    id: String;
    todo: { title: String; description: String; name: String }[];
  }[];

  secondReducer: {
    visibility: Boolean;
    todoId: {
      description: string;
      name: String;
      title: string;
      todoId: number;
    };
  };
};
