import React from "react";
import locationIconOrenge from  "../assets/locationIconOrenge.svg";

import callIconOrenge from  "../assets/callIconOrenge.svg"
import watchIconOrenge from  "../assets/watchIconOrenge.svg"

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? "" : "hidden"}`}>
      <nav
        id="sidenav-1"
        style={{ height: "-webkit-fill-available" }}
        className="absolute bg-[#252525] left-0 mt-10 z-[1035]  w-[50%] sm:w-[40%] md:w-[35%]  lg:hidden -translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
      >
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          <div className="bg-[#363636] rounded-[20px] w-full py-5 pl-6 pr-12 gap-5 flex flex-col">
            <div className="font-poppins font-semibold text-3xl text-[#E5B638] ml-3">
              Alberta
            </div>
            <div className="flex items-center gap-[10px]">
            <img src={locationIconOrenge} alt="locationIcon" />

              <span className="font-poppins font-normal text-sm text-[#fff]">
                1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
                  <img src={callIconOrenge} alt="locationIcon" />
                                  
              <span className="font-poppins font-normal text-sm text-[#fff]">
                (248) 676 7890
              </span>
            </div>
            <div className="flex items-start gap-[10px]">
            <img src={watchIconOrenge} alt="locationIcon" />

              <div className="font-poppins font-normal text-sm text-[#fff]">
                <div className="flex gap-[10px]">
                  Mon - Fri <span>10am - 9pm</span>
                </div>
                <div className="flex gap-[10px]">
                  Sat - Sun <span>10am - 11pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-[10%] flex flex-col gap-[10px]">
            <div className="font-poppins font-normal text-4xl leading-[46px] text-[#fff] px-10">
              Menu
            </div>
            <div className="flex flex-col">
              <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                All
              </div>
              <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                North Indian Dishes
              </div>
              <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                South Indian Dishes
              </div>
              <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                Beverages
              </div>
              <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                Deserts
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
