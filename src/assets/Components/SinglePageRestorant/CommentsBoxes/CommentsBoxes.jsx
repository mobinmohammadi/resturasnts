import React from "react";

export default function CommentsBoxes({name , text}) {

  return (
    <>
      <div className="border-t-1  border-[#dddddd] border-b-1 pt-4 pb-4 pr-5">
        <div className="flex justify-between pl-5">
          <div className="">
            <div className="flex gap-2 ">
              <img
                className="w-12 h-12 rounded-3xl"
                src="https://secure.gravatar.com/avatar/7cc3744776786e69ba44033e063546ca?s=96&d=mm&r=g"
                alt=""
              />
              <div className="flex flex-col gap-[3px] items-right justify-center">
                <span className="text-zinc-700 font-bold text-sm">
                  {name}
                </span>
                <div className="text-x flex text-zinc-400">
                  <span className="">24</span>
                  <span>ساعت گذشته</span>
                </div>
              </div>
            </div>
          </div>
          <i>😍</i>
        </div>
        <span className="inline-block mr-5 mt-5">{text}</span>
        <div className="flex gap-3">
          <div className="flex w-30 mt-4 border-1 gap-2 rounded-3xl pt-[5px] pb-[5px] pr-2 pl-2 border-[#dddddd] justify-center items-center">
            <span className="text-xs">چیز برگر</span>
            <div className="flex gap-[2px] items-center border-r-1 pr-2  border-[#dddddd]">
              <span className="text-sm mt-1">3.5</span>
              <svg className="text-amber-400 w-4 h-4">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
          <div className="flex w-30 mt-4 border-1 gap-2 rounded-3xl pt-[5px] pb-[5px] pr-2 pl-2 border-[#dddddd] justify-center items-center">
            <span className="text-xs  ">سیب زمینی</span>
            <div className="flex gap-[2px] items-center border-r-1 pr-2  border-[#dddddd]">
              <span className="text-sm mt-1">5</span>
              <svg className="text-amber-400 w-4 h-4">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
