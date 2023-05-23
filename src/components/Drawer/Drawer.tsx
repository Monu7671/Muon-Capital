import { useDispatch, useSelector } from "react-redux";
import { setIsVisible } from "../../reducers/visibilityReducers";
import back from "./../../assets/icons/back.webp";
import { anotherType } from "../../types/types";
import { useEffect, useState } from "react";
import { updateTodo } from "../../reducers/todoReducers";

const Drawer = () => {
  const dispatch = useDispatch();
  const { secondReducer } = useSelector((state) => state) as anotherType;
  const [title, setTitle] = useState(secondReducer.todoId?.title);
  const [description, setDescription] = useState(
    secondReducer.todoId?.description
  );

  

  useEffect(() => {
    setDescription(secondReducer.todoId?.description);
    setTitle(secondReducer.todoId?.title);
  }, [secondReducer.todoId]);

  const handleEdit = (e: any) => {
    e.preventDefault();

    if (secondReducer.todoId) secondReducer.todoId.title = title;
    if (secondReducer.todoId) secondReducer.todoId.description = description;

    dispatch(
      updateTodo(
        secondReducer.todoId?.title,
        secondReducer.todoId?.description,
        secondReducer.todoId?.todoId
      )
    );
    dispatch(setIsVisible(false, -1, -1));
  };

  return (
    <div className="w-1/4">
      <div className="flex my-[21px] ml-[24px] gap-[17px]">
        <button onClick={() => dispatch(setIsVisible(false, -1, -1))}>
          <img src={back} alt="back" width="11px" />
        </button>
        <h5 className="text-[18px] font-medium">Edit Todo</h5>
      </div>

      <form className="px-[15px]" onSubmit={handleEdit}>
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="px-[17px] py-[12px] bg-[#242731] text-[#A6A6A6] text-[20px] w-full focus:outline-none rounded-[12px] font-bold"
        />

        <textarea
          className="p-[19px] text-[14px] text-[#808191] w-full bg-[#242731] resize-none focus:outline-none rounded-[12px] mt-[8px] font-medium"
          rows={5}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <div className="text-center">
          <input
            type="submit"
            value="Save"
            className="mt-[27px] px-[33px] py-[5px] bg-[#3772FF] rounded-[10px] cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Drawer;
