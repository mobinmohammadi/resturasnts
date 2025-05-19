import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Form } from "react-router";
import * as Yup from "yup";
import Data from "../../../../../Data";

export default function NewRestourants() {
  const [titleNewRestourants, setTitleNewRestourants] = useState("");
  const [locationNewRestorants, setLocationNewRestorants] = useState("");
  const [descriptionsNewRestorants, setDescriptionsNewRestorants] =
    useState("");
  const [profailNewRestorants, setProfailNewRestorants] = useState(null);
  const [provinceRestorunts, setProvinceRestorunts] = useState("");
  const [TageFoods, setTageFoods] = useState([]);
  const [titleByTag , setTitleByTag] = useState("")

  console.log(TageFoods);

  const handelForTagFoods = (e) => {
    console.log(e.target.value);
    setTitleByTag(e.target.value)
  };

  const postTagFoodsHandler = () => {
    if(titleByTag.length == 0){
        setTageFoods(prev => [...prev])
    }
    else{
      setTageFoods((prev) => [
        ...prev,
        { id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1, titleByTag },
      ]);
      setTitleByTag("")
      
    }
  };
  const deleteByTage = (tagID) => {
    // console.log(tagID);
    const resultAfterDeleteTag = TageFoods.filter(tag => tag.id !== tagID)
    console.log(resultAfterDeleteTag);
    setTageFoods(resultAfterDeleteTag)
    
    
  }
  const eroreHandler = Yup.object().shape({
    restorantsName: Yup.string()
      .min(4, "خیلی کوتاه است")
      .max(10, "خیلی  طولانی است")
      .required("نام رستوران نباید خالی باشد 😒!"),
    cityRestorants: Yup.string().required("شهر رستوران نباید خالی باشد 😐 !"),
    capitalRestorants: Yup.string().required(
      "استان رستوران نباید خالی باشد 😑 !"
    ),
    discriptionsRestorants: Yup.string()
      .min(10, "خیلی کم است")
      .max(20, "داستان مینویسی ؟! 😐")
      .required("توضیحات رستوران نباید خالی باشد 😣✏ !"),
    imageRestorants: Yup.string().required("عکس نباید خالی باشد 📸 !"),
  });
  const createdNewRestorants = (e, values) => {
    console.log(values);

    Swal.fire({
      title: "آیا از ثبت این رستوران اطمینان دارید؟",
      text: "رستوران رازینه",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله ثبتش کن",
      cancelButtonText: "منصرف شدم",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "رستوران با موفقیت ایجاد شد",
          icon: "success",
        });
        e.preventDefault();
        // cityRestorants: "",
        // capitalRestorants: "",
        const bodyNewRestorants = {
          name: values.restorantsName,
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
          city: cityRestorants,
          address: provinceRestorunts,
          image: imageRestorants,
        };
        console.log(bodyNewRestorants);

        fetch(`http://localhost:4444/restaurants`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyNewRestorants),
        }).then((res) => console.log(res));
      }
    });
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
          <Formik
            initialValues={{
              restorantsName: "",
              cityRestorants: "",
              capitalRestorants: "",
              discriptionsRestorants: "",
              imageRestorants: "",
            }}
            validationSchema={eroreHandler}
            onSubmit={(values) => console.log(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <form action="#" onSubmit={handleSubmit}>
                <div className="  rounded-md grid grid-cols-1 3xs:grid-cols-2 gap-3 ">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm 3xs:text-base">نام رستوران</span>
                    <Field
                      name="restorantsName"
                      value={values.restorantsName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="text-sm h-10  bg-slate-100 outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                      type="text"
                      placeholder="نام رستوران را وارد نمایید...."
                    />
                    {errors.restorantsName && touched.restorantsName ? (
                      <span className="errors-panelAdmin">
                        {errors.restorantsName}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm 3xs:text-base">شهر رستوران</span>

                    <Field
                      name="cityRestorants"
                      value={values.cityRestorants}
                      onChange={handleChange}
                      className="bg-slate-100 h-10 text-sm outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                      type="text"
                      placeholder="شهر رستوران را وارد نمایید...."
                    />
                    {errors.cityRestorants && touched.cityRestorants ? (
                      <span className=" errors-panelAdmin">
                        {errors.cityRestorants}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm 3xs:text-base">استان رستوران</span>
                    <Field
                      name="capitalRestorants"
                      value={values.capitalRestorants}
                      onChange={handleChange}
                      className="bg-slate-100 text-sm  h-10 outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                      type="text"
                      placeholder="استان رستوران را وارد نمایید...."
                    />
                    {errors.capitalRestorants && touched.capitalRestorants ? (
                      <span className=" errors-panelAdmin">
                        {errors.capitalRestorants}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col  gap-2 w-full">
                  <span className="text-sm 3xs:text-base">
                    توضحات تکمیلی رستوران
                  </span>
                  <Field
                    name="discriptionsRestorants"
                    value={values.discriptionsRestorants}
                    onChange={handleChange}
                    className="bg-slate-100  text-sm  outline-green-500 mr-5 ml-5 w-full rounded-sm pt-1 pb-1 pr-3 pl-3"
                    type="text"
                    placeholder="توضیحات تکمیلی رستوران را وارد نمایید...."
                  />
                  {errors.discriptionsRestorants &&
                  touched.discriptionsRestorants ? (
                    <span className=" errors-panelAdmin">
                      {errors.discriptionsRestorants}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm 3xs:text-base">
                    URL رستوران را وارد نمایید
                  </span>

                  <Field
                    name="imageRestorants"
                    value={values.imageRestorants}
                    onChange={handleChange}
                    className="bg-slate-100 text-sm h-10 w-full  outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3"
                    type="text"
                    placeholder="عکس رستوران ...."
                  />
                  {errors.imageRestorants && touched.imageRestorants ? (
                    <span className=" errors-panelAdmin w-full">
                      {errors.imageRestorants}
                    </span>
                  ) : null}
                </div>
                <div className="mt-2">
                  <span className="text-sm 3xs:text-base ">تگ غذا ها</span>
                  
                  <div className="relative bg-slate-100 mt-2 text-sm h-10 w-full  outline-0 rounded-sm pt-1 pb-1 pr-3 pl-3">
                    <input
                      onChange={(e) => handelForTagFoods(e)}
                      value={titleByTag}
                      type="text"
                      className="outline-0 w-full h-full"
                      placeholder="نام تگ غذا را وارد نمایید"
                    />
                    <div
                      onClick={() => postTagFoodsHandler()}
                      className="bg-green-600  left-0 flex items-center justify-center w-10 rounded-sm cursor-pointer text-white top-0 h-full absolute "
                    >
                      <svg className="w-6 h-6 font-bold  ">
                        <use href="#plus"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-4 gap-3 mt-8 pt-2 pr-3 pb-3 ">
                    {TageFoods.map((tag) => (
                      <div onClick={() => deleteByTage(tag.id)} className="flex cursor-pointer  relative justify-center bg-slate-300 gap-2 items-center rounded-sm pt-1 pb-1 w-26 h-8">
                        <svg className="w-7 h-7 absolute bg-red-600 rounded-full  -top-2 -right-2 text-white">
                          <use href="#x-circle"></use>
                        </svg>
                        <span className="text-sm text-center ">{tag.titleByTag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="float-end mt-5">
                  {!errors.capitalRestorants &&
                  !errors.cityRestorants &&
                  !errors.discriptionsRestorants &&
                  !errors.imageRestorants &&
                  !errors.restorantsName ? (
                    <div className="group overflow-hidden w-full relative 3xs:w-40 flex items-center justify-center bg-teal-600 text-white pt-2 pb-2 rounded-sm float-end cursor-pointer">
                      <button
                        onClick={(e) => createdNewRestorants(e, values)}
                        className="z-20 text-sm 3xs:text-base cursor-pointer w-full group-hover:text-white"
                      >
                        ثبت رستوران
                      </button>
                    </div>
                  ) : (
                    <div className=" overflow-hidden w-full relative 3xs:w-40 flex items-center justify-center bg-slate-400 text-white pt-2 pb-2 rounded-sm float-end">
                      <span className="z-20 text-center text-sm 3xs:text-base">
                        ثبت رستوران
                      </span>
                    </div>
                  )}
                  <span className="w-10 h-full rounded-full group-hover:w-full transition-all group-hover:rounded-sm group-hover:opacity-100  -right-5 bg-green-500 opacity-60 z-10 absolute"></span>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
