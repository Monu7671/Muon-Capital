
import { useDispatch } from "react-redux";
import moneyBag from "./../../assets/icons/money-bag.webp";
import pen from "./../../assets/icons/pen.webp";
import { setIsVisible } from "../../reducers/visibilityReducers";
import { useState } from "react";
import { deleteTodo } from "../../reducers/todoReducers";
import deleteIcon from "./../../assets/icons/delete-icon.webp";

const ListItem = ({ todo, todoId, itemId, name }: any) => {
  const dispatch = useDispatch();
 
  const [barVisible, setBarVisible] = useState(false);
  

  return (
    <li
      className="bg-[#191B20] py-[19px] px-[14px] rounded-[16px] list-none relative"
      
      onMouseEnter={() => setBarVisible(true)}
      onMouseLeave={() => setBarVisible(false)}
    >
      {barVisible && (
        <div className="bg-[#000AFF] w-[4px] h-full absolute left-0 top-0 bottom-0 m-auto transition-all duration-700"></div>
      )}
      <div className="flex items-start justify-between">
        <div className="flex gap-[7.5px] items-center text-[18px] font-bold">
          <img src={moneyBag} className="w-[24px] h-[24px]" alt="" />
          {todo.title}
        </div>

        <input
          type="submit"
          id="pen"
          value=""
          alt="pen"
          className="cursor-pointer w-[27px] h-[27px]"
          onClick={() => dispatch(setIsVisible(true, todoId, itemId))}
          style={{
            backgroundImage: `url(${pen})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="flex justify-between">
        <p className="w-10/12">{todo.description}</p>
        <button
          className="text-red-700"
          onClick={() => dispatch(deleteTodo(todo))}
        >
          <img src={deleteIcon} className="w-3 mr-2 " alt="" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
