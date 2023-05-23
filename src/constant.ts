import { useSelector } from "react-redux";

const GetTodos = () => {
  const todos = useSelector((state) => state);
  return todos;
};

export default GetTodos;
