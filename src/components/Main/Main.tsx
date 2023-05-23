import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../Topbar/Topbar";
import moneyBag from "./../../assets/icons/money-bag.webp";
import plus from "./../../assets/icons/plus.webp";
import { anotherType } from "../../types/types";
import ListItem from "../ListItem/ListItem";
import { addTodo, addList } from "../../reducers/todoReducers";
import Drawer from "../Drawer/Drawer";
import GetTodos from "../../constant";


const Main = (props: { fullNavbar: Boolean }) => {
  const { fullNavbar } = props;

  

  const todos = GetTodos() as {
    firstReducer: {
      itemId: Number;
      id: String;
      todo: {
        todoId: Number;
        title: String;
        description: String;
        name: String;
      }[];
    }[];
  };
  const dispatch = useDispatch();
  const { secondReducer } = useSelector((state) => state) as anotherType;
  const { firstReducer } = useSelector((state) => state) as anotherType;
  const { visibility } = secondReducer;

  

  const addTodoForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const todo = {
      todoId: firstReducer.length,
      title: e.currentTarget.todoTitle.value,
      description: e.currentTarget.todoDescription.value,
      name: target.name,
    };

    

    if (e.currentTarget.todoTitle.value.length < 3) {
      alert("Invalid Title");
    } else if (e.currentTarget.todoDescription.value.length < 3) {
      alert("Invalid Description");
    } else {
      
      dispatch(addTodo(todo, "jksjklfjkd"));

      e.currentTarget.reset();
    }
  };

  function removeDuplicates(arr: {}[]) {
    let uniqueSet = new Set(arr);
    let uniqueArr = Array.from(uniqueSet);
    
    return uniqueArr;
  }
  
  const uniqueArray = removeDuplicates(
    todos.firstReducer
  ) as anotherType["firstReducer"];

  const handleTodoListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (e.currentTarget.todoListName.value) {
      dispatch(addList(target.todoListName.value));
      e.currentTarget.reset();
    }
  };

  
  return (
    <div
      className={`transition ${
        fullNavbar ? "w-[82%] text-white" : "w-[96%] text-white"
      }`}
    >
      <Topbar />

      <div className="flex">
        <div
          className={`
            ${visibility ? "w-3/4" : "w-full"}
           h-screen grid grid-cols-3 gap-[13px] border-r-[5px] border-[#242731] p-[18px]`}
        >
          {uniqueArray.map((item, i, id) => (
            <section key={i}>
              <h1 className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px]">
                {item.id}
              </h1>
              <form
                className="bg-[#191B20] p-[13px] rounded-[16px]"
                onSubmit={addTodoForm}
                id="form"
                name={item.id?.split(" ").join(" ")}
              >
                <div className="flex items-start justify-between relative">
                  <div className="flex gap-[7.5px] items-center">
                    <img src={moneyBag} className="w-[24px] h-[24px]" alt="" />
                    <input
                      type="text"
                      placeholder="Add Todo"
                      name="todoTitle"
                      className="bg-transparent px-[32px] focus:outline-none placeholder:font-bold placeholder:text-[18px] absolute w-full h-full"
                    />
                  </div>

                  <input
                    type="submit"
                    id="plus"
                    value=""
                    alt="plus"
                    className="cursor-pointer w-[27px] h-[27px] relative"
                    style={{
                      backgroundImage: `url(${plus})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <textarea
                  className="bg-transparent w-full resize-none placeholder:text-[#808191] focus:outline-none mt-[13px]"
                  name="todoDescription"
                  placeholder="Add Todo Description"
                  id=""
                  rows={2}
                ></textarea>
              </form>
              <div className="mt-[15px] flex flex-col gap-[7px]">
                {item.todo?.map((todo, id) => (
                  <ListItem
                    todo={todo}
                    key={id}
                    todoId={todo}
                    name={todo.name}
                  />
                ))}
              </div>
            </section>
          ))}

          <section>
            <form
              onSubmit={handleTodoListSubmit}
              className="bg-[#242731] p-[15px] rounded-[12px] text-[16px] font-semibold mb-[3px] text-[#6C6C6C] flex justify-between"
            >
              <input
                type="text"
                placeholder="Add Todo List"
                name="todoListName"
                className="bg-transparent focus:outline-none text-white placeholder:text-[#6C6C6C]"
              />
              <input
                type="submit"
                id="plus"
                value=""
                alt="plus"
                className="cursor-pointer w-[27px] h-[27px]"
                style={{
                  backgroundImage: `url(${plus})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </form>
          </section>
        </div>
        {visibility && <Drawer />}
      </div>

      
    </div>
  );
};

export default Main;
