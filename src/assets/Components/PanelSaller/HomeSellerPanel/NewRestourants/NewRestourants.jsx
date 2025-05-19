import React, { useState } from "react";

export default function NewRestourants() {
  const [titleNewRestourants, setTitleNewRestourants] = useState("");
  const [locationNewRestorants, setLocationNewRestorants] = useState("");
  const [descriptionsNewRestorants, setDescriptionsNewRestorants] =
    useState("");
  const [profailNewRestorants, setProfailNewRestorants] = useState(null);
  const [provinceRestorunts,setProvinceRestorunts] = useState("")
   

  const createdNewRestorants = (e) => {
    e.preventDefault();
    const bodyNewRestorants = {
      name: titleNewRestourants,
      rating: 4.5,
      distance: 2.0,
      tags: ["مرغ", "کوبیده"],
      menu: [
        {
          name: "ایرانی",
          price: 258000,
          ingredients: ["برنج", "کباب", "قیمه"],
          available: true,
        },
      ],
      city: locationNewRestorants,
      address: provinceRestorunts,
      image: profailNewRestorants,
    };
    console.log(bodyNewRestorants);

    fetch(`http://localhost:4444/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyNewRestorants),
    }).then((res) => console.log(res));
  };

  return (
    <div className="flex flex-col container-foods w-[100vh]">
      <div className=" pt-5 pb-5 mt-2 flex items-center   text-white pr-5 pl-5 bg-green-700 rounded-md h-[12vh]">
        <div className="flex justify-between w-full">
          <span className="text-base">ثبت رستوران جدید</span>
          <svg className="w-5 h-5 3xs:w-6 3xs:h-6 cursor-pointer">
            <use href="#pencil-square"></use>
          </svg>
        </div>
      </div>
      <div className=" mt-10 flex flex-col ">
        <span className="text-sm 3xs:text-lg border-b-2 font-bold 3xs:border-b-3 pb-2 border-red-600 border-solid w-[154px] 3xs:w-56 ">
          مشخصات رستوران جدید
        </span>
        <div className="bg-white p-5 flex flex-col gap-5 rounded-md mt-5">
          <div className="  rounded-md grid grid-cols-1 3xs:grid-cols-2 gap-3 ">
            <div className="flex flex-col gap-2">
              <span className="text-sm 3xs:text-base">نام رستوران</span>
              <input
                onChange={(e) => setTitleNewRestourants(e.target.value)}
                className="text-sm h-10  bg-slate-100 outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                type="text"
                placeholder="نام رستوران را وارد نمایید...."
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm 3xs:text-base">شهر رستوران</span>
              <input
                onChange={(e) => setLocationNewRestorants(e.target.value)}
                className="bg-slate-100 h-10 text-sm outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                type="text"
                placeholder="مکان رستوران را وارد نمایید...."
              />
            </div>
             <div className="flex flex-col gap-2">
              <span className="text-sm 3xs:text-base">استان رستوران</span>
              <input
                onChange={(e) => setProvinceRestorunts(e.target.value)}
                className="bg-slate-100 text-sm  h-10 outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                type="text"
                placeholder="استان رستوران را وارد نمایید...."
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col  gap-2 w-full">
            <span className="text-sm 3xs:text-base">توضحات تکمیلی رستوران</span>
            <textarea
              onChange={(e) => setDescriptionsNewRestorants(e.target.value)}
              className="bg-slate-100  text-sm  outline-green-500 mr-5 ml-5 w-full rounded-sm pt-1 pb-1 pr-3 pl-3"
              type="text"
              placeholder="توضیحات تکمیلی رستوران را وارد نمایید...."
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm 3xs:text-base">URL رستوران را وارد نمایید</span>
            <input
              onChange={(e) => setProfailNewRestorants(e.target.value)}
              className="bg-slate-100 text-sm h-10  outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
              type="text"
              placeholder="عکس رستوران ...."
            />
          </div>
          <div className="float-end">
            <div className="group overflow-hidden w-full relative 3xs:w-40 flex items-center justify-center bg-teal-600 text-white pt-2 pb-2 rounded-sm float-end cursor-pointer">
              <button
                onClick={(e) => createdNewRestorants(e)}
                className="z-20 text-sm 3xs:text-base cursor-pointer w-full group-hover:text-white"
              >
                ثبت رستوران
              </button>
              <span className="w-10 h-full rounded-full group-hover:w-full transition-all group-hover:rounded-sm group-hover:opacity-100  -right-5 bg-green-500 opacity-60 z-10 absolute"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
