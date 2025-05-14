import React, { useState } from "react";

export default function SeeMoreBoxes() {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleMore = () => {
    setIsShowMore(true);
    setTimeout(() => {
      setIsShowMore(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center pb-5 pt-5 ">
      <svg className="hidden">
        <symbol
          id="refresh"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.2"
          stroke="currentColor"
        >
          <path
            d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 12C2 17.52 6.48 22 12 22"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="3 3"
          ></path>
        </symbol>
      </svg>
        
      <div onClick={() => handleMore()} className="w-48 gap-2 cursor-pointer text-white bg-green-600 rounded-[4px] flex justify-center items-center pt-2 pb-2 pl-6 pr-6">
        {isShowMore ? (
          <svg className="w-6 h-6 animate-spin animate-reverse">
            <use href="#refresh"></use>
          </svg>
        ) : (
          ""
        )}

        <span >مشاهده بیشتر</span>
      </div>
    </div>

  );
}
