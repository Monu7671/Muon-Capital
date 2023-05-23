import React from "react";
import moneyBag from "./../../assets/icons/money-bag.webp";
import pen from "./../../assets/icons/pen.webp";

const Todo = (props: { title: String; description: String }) => {
  const { title, description } = props;

  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex gap-[7.5px] items-center text-[18px] font-bold">
          <img src={moneyBag} className="w-[24px] h-[24px]" alt="" />
          {title}
        </div>

        <input
          type="submit"
          id="pen"
          value=""
          alt="pen"
          className="cursor-pointer w-[27px] h-[27px]"
          style={{
            backgroundImage: `url(${pen})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div>{description}</div>
    </>
  );
};

export default Todo;
