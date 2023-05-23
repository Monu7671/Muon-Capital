import React from "react";
import logo from "./../../assets/images/logo.webp";
import bars from "./../../assets/icons/bars.webp";
import category from "./../../assets/icons/category.webp";
import shareNodes from "./../../assets/icons/share-nodes.webp";
import stats from "./../../assets/icons/stats.webp";
import hamburger from "./../../assets/icons/hamburger.webp";
import language from "./../../assets/icons/language.webp";
import darkToggle from "./../../assets/icons/dark-toggle.webp";

const Navbar = (props: { fullNavbar: Boolean; setFullNavbar: Function }) => {
 
  const { fullNavbar, setFullNavbar } = props;

  const listItem = [
    {
      icon: category,
      text: "Home",
    },
    {
      icon: stats,
      text: "Section 1",
    },
    {
      icon: bars,
      text: "Section 2",
    },
    {
      icon: shareNodes,
      text: "Section 8",
    },
    {
      icon: shareNodes,
      text: "Section 8",
    },
  ];

  return (
    <div
      className={`${
        fullNavbar ? "w-[18%] h-full" : "w-[4%] h-screen"
      } text-white border-r-[2px] border-[#242731] px-[9px] py-[33.5px] transition-all`}
    >
      <div className="flex flex-col justify-between gap-[373px] relative">
        <div className="h-10/12">
          <div className="flex justify-between px-[17px]">
            <div
              className={`${
                fullNavbar ? "flex gap-[8px] items-center" : "overflow-visible"
              }`}
            >
              <img
                src={logo}
                className={`${fullNavbar ? "w-[29px] h-[29px]" : "w-[9rem]"}`}
                alt=""
              />
              {fullNavbar && (
                <h2 className="text-[23.56px] font-semibold">Name</h2>
              )}
            </div>
            <input
              type="checkbox"
              name="check"
              id="check"
              className="hidden"
              onChange={(e) => setFullNavbar(e.target.checked)}
            />
            <label htmlFor="check">
              <img
                src={hamburger}
                className={`
                cursor-pointer
                  ${
                    fullNavbar
                      ? "w-[20px] h-[16px]"
                      : "rotate-180 w-[20px] h-[16px] absolute -right-1 top-3"
                  }
                `}
                alt=""
              />
            </label>
          </div>

          <ul className="mt-[36px] flex flex-col gap-[24px]">
            {listItem.map(({ icon, text }, key) => (
              <li
                key={key}
                className="flex items-center gap-[23px] hover:bg-[#353945] py-[9px] px-[15px] rounded-[12px] leading-[24px] cursor-pointer"
              >
                <img src={icon} className="w-[20px]" alt="" />
                {fullNavbar && <h5>{text}</h5>}
              </li>
            ))}
          </ul>
        </div>
        {fullNavbar && (
          <div className="h-2/12">
            <div className="px-[12px] flex gap-[6.66px]">
              <button className="px-[15px] py-[7.5px] rounded-[10px] bg-[#353945] flex items-center justify-between gap-[6px]">
                <img src={logo} alt="Logo" />
                <h2 className="text-[14px] font-semibold">$0.90</h2>
              </button>
              <button className="px-[15px] py-[7.5px] rounded-[10px] bg-[#A3E3FF] text-[#3772FF] font-semibold flex items-center justify-between">
                Buy $XYZ
              </button>
            </div>

            <div className="flex gap-[13px] mt-[21px] items-center px-[12px]">
              <img src={language} alt="" className="w-[20px] h-[21px]" />
              <img src={darkToggle} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
