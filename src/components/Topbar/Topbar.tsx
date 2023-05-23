import React from "react";
import wallet from "./../../assets/icons/wallet.webp";

const Topbar = () => {
  return (
    <div className="pt-[27.5px] pl-[50px] pb-[14px] border-b-[4px] border-[#242731] flex justify-between">
      <span className="text-[18px] border-b-[2px] pb-[7px] border-[#3772FF]">
        Section
      </span>

      <div className="bg-[#191B20] mr-[16.31px] px-[13px] flex items-center gap-[16.58px] rounded-[12.2549px]">
        <div className="flex gap-[6.6px]">
          <img src={wallet} alt="" width="20px" height="14px" />
          <h5 className="text-[16px] font-medium">0.2 $XYZ</h5>
        </div>

        <div>
          <button className="px-[15px] py-[7.5px] rounded-[10px] bg-[#A3E3FF] text-[#3772FF] font-semibold flex items-center justify-between">
            Tier 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
