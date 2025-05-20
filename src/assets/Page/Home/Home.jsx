import React from "react";
import Header from "../../Components/HeaderPc/HeaderPc";
import PapularCategury from "../../Components/PapularCategury/PapularCategury";
import AroundMe from "../../Components/AroundMe/BoxesAroundMeFood";
import FooterPc from "../../Components/FooterPc/FooterPc";
import EasyAddress from "../../Components/EasyAddress/EasyAddress";
import UserBasket from "../../Components/UserBasket/UserBasket";
import NewFoods from "../../Components/NewFoods/NewFoods";

export default function Home() {
  return (
    <div className="dark:bg-zinc-600 relative">
      {/* <UserBasket/> */}
      <Header />
      <div className="container-custom">
        <PapularCategury />
        <AroundMe />
        <NewFoods />
      </div>
      <FooterPc />
      {/* <div className="bg-slate-200 w-full h-full absolute top-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-center items-center pt-5 pb-3 border-b-2 border-sky-600 border-solid ">
            <span>شهر خود را انتخاب کنید</span>
          </div>
          <div className="grid grid-cols-5 gap-2 & > *:text-center mt-5 & > *:rounded-xs & > *:cursor-pointer & > *:hover:bg-black/10 & > *:transition-all justify-between & > *:bg-white & > * :w-full">
            <span>ارومیه</span>
            <span>مهاباد</span>
            <span>پیرانشهر</span>
            <span>تهران</span>
            <span>مهاباد</span>
            <span>ارومیه</span>
            <span>تبریز</span>
            <span>تهران</span>
          </div>
        </div>
      </div> */}
      {/* <div className='bg-zinc-700 w-full h-full z-40 fixed top-0'>s</div> */}
    </div>
  );
}
