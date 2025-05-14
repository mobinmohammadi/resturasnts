import React, { useRef } from "react";
import "./UserBasket.css"
export default function UserBasket({cancelAction}) {

    const userBasket = useRef()
    const handelShowBasket = () => {
        console.log(userBasket.current)

        userBasket.current.transitions = "all .5s ease"
    }
  return (
    <>
      <svg className="hidden">
        <symbol
          id="x-mark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </symbol>
        <symbol
          id="banknotes"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </symbol>
        <symbol
          id="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </symbol>
      </svg>
      <div onClick={() => cancelAction()}  className="userBasket pt-3 transition-all left-0 flex flex-col justify-between pr-3 pl-3 pb-2 w-[300px] fixed top-0  z-50 h-[100vh] bg-white">
        <div>
        <div className="flex border-b-2  pb-[17px] border-[#dddddd] items-center justify-between text-zinc-700">
          <span className="text-sm font-bold">سبد خرید من</span>
          <svg className="w-5 h-5 close-User__basket cursor-pointer">
            <use href="#x-mark"></use>
          </svg>
        </div>
        <div className="flex flex-col mt-3 gap-3">
          <div className="flex gap-2 border-b-1 border-[#dddddd] pb-3">
            <img
              className="w-30 rounded-sm"
              src="./images/foods/papular-foods/3.jpg"
              alt=""
            />
            <div className="flex justify-between flex-col">
              <span className="text-xs leading-4">
                پولوشرت مردانه آستین بلند دو خط محتوا
              </span>
              <div className="text-xs flex gap-1">
                <span>۲.۵۰۰.۰۰۰</span>
                <span>تومان</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 border-b-1 border-[#dddddd] pb-3">
            <img
              className="w-30 rounded-sm"
              src="./images/foods/papular-foods/3.jpg"
              alt=""
            />
            <div className="flex justify-between flex-col">
              <span className="text-xs leading-4">
                پولوشرت مردانه آستین بلند دو خط محتوا
              </span>
              <div className="text-xs flex gap-1">
                <span>۲.۵۰۰.۰۰۰</span>
                <span>تومان</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="flex items-center gap-5 flex-col">
          <div className="flex gap-6">
            <div className="flex gap-1 items-center">
              <svg className="w-5 h-5">
                <use href="#banknotes"></use>
              </svg>
              <span className="text-sm">مجموع هزینه:</span>
            </div>
            <div className="flex text-sm items-center gap-1">
              <span>5,000,000</span>
              <span>میلیون تومان</span>
            </div>
          </div>
          <button className="cursor-pointer bg-[#2EC4B6] text-white flex gap-1 w-full items-center justify-center p-3 rounded-xl">
            <span className="">تسویه حساب</span>
            <svg className="w-5 h-5">
              <use href="#arrow-left"></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
