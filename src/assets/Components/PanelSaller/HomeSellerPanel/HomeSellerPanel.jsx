import React from "react";
import { Link } from "react-router";

export default function HomeSellerPanel() {
  return (
    <div className="bg-white w-[30%] h-[100vh] rounded-l-xl shadow-2xl ">
      <div className="flex justify-between h-full flex-col">
        <div className="">
          <div className="flex gap-2 items-center pt-5 pr-3 pb-5 pl-3 bg-zinc-800 text-white justify-center">
            <svg className="w-7 h-7 mt-2 ">
              <use href="#dashboard"></use>
            </svg>
            <span className="flex pt-2">به پنل کاربری خود خوش آمدید</span>
          </div>
          <div className="text-white flex-col gap-[1px] bg-white & > *:justify-between & > *:w-full & > *:flex & > *:pt-4 & > *:pb-4 & > *:pr-3 & > *:pl-3 & > *:cursor-pointer flex justify-between & > *:transition-all & > *:hover:bg-red-800 & > *:bg-red-500 ">
            <div className="">
              <Link to="/sallerpanel/newrestorants" className="text-sm">ثبت رستوران جدید</Link>
              <svg className="w-5 h-5">
                <use href="#resturants"></use>
              </svg>
            </div>
            <div className="">
              <span className="text-sm">مشاهده کامنت های ثبت شده</span>
              <svg className="w-5 h-5">
                <use href="#chat-bubble-bottom-center-text"></use>
              </svg>
            </div>
            <div className="">
              <span className="text-sm">مشاهده مکان رستوران</span>
              <svg className="w-5 h-5">
                <use href="#map"></use>
              </svg>
            </div>{" "}
            <div className="">
              <span className="text-sm">مشاهده غذا های رستوران من</span>
              <svg className="w-5 h-5">
                <use href="#adjustments-horizontal"></use>
              </svg>
            </div>{" "}
            <div className="">
              <span className="text-sm">مشاهده کامنت های ثبت شده</span>
              <svg className="w-5 h-5">
                <use href="#resturants"></use>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-white gap-2 cursor-pointer  text-xs flex justify-center items-center bg-sky-600 hover:bg-sky-800 transition-all w-full h-12">
          <svg className="w-6 h-6">
            <use href="#power"></use>
          </svg>
          <span className="">خروج از حساب</span>
        </div>
      </div>
    </div>
  );
}
