import React, { useRef, useState } from "react";
import CitySelectBoxes from "../CitySelectBoxes/CitySelectBoxes";
import OptionsSelect from "../OptionsSelect/OptionsSelect";

export default function EasyAddress() {
  const [selectBoxheader, setSelectBoxHeader] = useState("neighborhood");
  const [isShowLayer, setIsShowLayer] = useState(false);
  const boxesSealectedUsers = useRef();
  const [citySelected, setCitySelected] = useState("ایران");

  const openBoxesSelectedDetailsCity = () => {
    boxesSealectedUsers.current.style.display = "flex";
    boxesSealectedUsers.current.style.top = "78px";
    boxesSealectedUsers.current.className += "transition-all";
    console.log(boxesSealectedUsers.current.className);

    setIsShowLayer(true);
  };

  const closeBoxesSelectedDetailsCity = () => {
    boxesSealectedUsers.current.style.display = "none";
    boxesSealectedUsers.current.style.top = "30px";
    boxesSealectedUsers.current.style.transition = "all .5 ease";
  };

  const selectChangeHandler = (e) => {
    console.log(e.target.value);
    setCitySelected(e.target.value);
  };

  return (
    <div className="relative flex pt-3 pb-3 sm:pt-5 sm:pb-5 text-2xl gap-1 items-center justify-center ">
      <div className="flex pb-1 text-xs sm:text-2xl items-center justify-center gap-1">
        <svg className="w-4 h-4 sm:w-8 sm:h-8">
          <use href="#map-pin"></use>
        </svg>
        <span>درمحدوده</span>
        <div
          onClick={() => openBoxesSelectedDetailsCity()}
          className="flex Dana-bold hover:border-b text-red-500 items-center cursor-pointer gap-1 justify-center "
        >
          <span className="leading-8  text-md">ارومیه</span>
          <svg className="w-5 h-5 ">
            <use href="#chevron-down"></use>
          </svg>
        </div>
      </div>
      <>
        <div
          ref={boxesSealectedUsers}
          className={` hidden absolute w-[20rem] sm:w-[40rem]  rounded-lg  gap-2 z-20 top-[30px]  bg-slate-100  flex flex-col   ${
            selectBoxheader == "neighborhood" ? "h-[600px] " : "sm:h-[200px]"
          } `}
        >
          <div className="morabba"></div>
          <div
            onClick={() => setIsShowModalCity(false)}
            className=" flex justify-between items-center bg-white pt-3 pr-4 pl-4 pb-5"
          >
            <div
              onClick={() => setSelectBoxHeader("neighborhood")}
              className="w-[50%] flex justify-center cursor-pointer"
            >
              <span
                className={`w-full flex text-xs sm:text-base justify-center pb-3  ${
                  selectBoxheader == "neighborhood" ? "active-addeares" : ""
                }`}
              >
                انتخاب محله
              </span>
            </div>
            <div
              onClick={() => setSelectBoxHeader("my-addeares")}
              className="w-[50%] flex justify-center cursor-pointer"
            >
              <span
                className={`w-full pb-3 text-xs sm:text-base flex justify-center ${
                  selectBoxheader == "my-addeares" ? "active-addeares" : ""
                } `}
              >
                آدرس های من
              </span>
            </div>
          </div>

          {selectBoxheader == "my-addeares" ? (
            <div className="  bg-white flex items-center justify-center flex-col gap-5 p-5 ">
              <span className="text-[#686b73] leading-7  text-base font-bold">
                شما هنوز آدرسی وارد نکرده اید😥
              </span>
              <div className=" hover:bg-[#ef4123] hover:text-white cursor-pointer transithion-all text-[#f15f46] flex items-center justify-center gap-2 pt-1 pb-1 pr-4 pl-4 rounded-lg overflow-hidden border border-[#ef4123]">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                  <use href="#pencil-square"></use>
                </svg>
                <buttom className="text-sm">افزودن آدرس جدید</buttom>
              </div>
            </div>
          ) : (
            <>
              <div className="  flex items-center justify-betweeen gap-2 sm:gap-5 pr-5 pl-5">
                <div className="flex w-full  relative mt-2 mb-2 p-3 bg-white w-full p-2">
                  <svg className="absolute left-2 w-4 h-4 sm:w-7 sm:h-7">
                    <use href="#funnel"></use>
                  </svg>
                  <input
                    className="w-full text-xs sm:text-base focus:outline-0"
                    type="text"
                    placeholder={`جستوجوی نام محله در ${citySelected} ...`}
                  />
                </div>
                <select
                  onChange={(e) => selectChangeHandler(e)}
                  className="w-[80px] h-10 text-xs p-3 flex items-center justify-center shadow-md  & > *:w-full & > *:p-3  rounded-md top-14 left-0 bg-white  & > *:hover:bg-slate-100 "
                >
                  <OptionsSelect title="ارومیه" />
                  <OptionsSelect title="آذربایجان غربی " />
                  <OptionsSelect title="آذبایجان شرقی" />
                  <OptionsSelect title="تبریز" />
                  <OptionsSelect title="کرمانشاه" />
                  <OptionsSelect title="قم" />
                </select>
              </div>
              <div className="bg-white mx-h-[200px] overflow-auto">
                <ul className="& > *:flex & > *:gap-1  & > *:items-center & > *:p-3 & > *:sm:p-5 & > *:cursor-pointer & > *:hover:bg-slate-300 ">
                  <li className="">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6">
                      <use href="#map-pin"></use>
                    </svg>
                    <span className="leading-3 mt-0.5 text-sm sm:text-base">
                      جاده میاندوآب
                    </span>
                  </li>

                  <CitySelectBoxes city="ارومیه" />
                  <CitySelectBoxes city="مهاباد" />
                  <CitySelectBoxes city="سقز" />
                  <CitySelectBoxes city="سردشت" />
                </ul>
              </div>
            </>
          )}
        </div>
        {isShowLayer ? (
          <div
            onClick={() => {
              closeBoxesSelectedDetailsCity();
              setIsShowLayer(false);
              setIsShowModalDetailsAddreasUser(false);
            }}
            className="fixed w-full h-full bg-black/20  top-0 z-10"
          ></div>
        ) : null}
      </>
    </div>
  );
}
