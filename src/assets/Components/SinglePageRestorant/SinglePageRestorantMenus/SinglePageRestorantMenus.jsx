import React, { useEffect, useState } from "react";
import MoreFoodsBoxes from "../../MoreFoodsRestorant/MoreFoodsBoxes/MoreFoodsBoxes";

export default function SinglePageRestorantMenu() {

  const [menusResturants , setMenusResturants] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4444/restaurants`)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setMenusResturants(result)
    }
    )
  },[])
  return (
    <div className="flex container-custom pb-5 flex-col items-center">
      <div className="flex w-full relative mr-4 ml-4 xs:mr-12 xs:ml-12  items-center pt-2 pb-2 pr-2 rounded-sm mt-5 mb-5 bg-white">
        <input
          className="border-0 w-full outline-0"
          type="text"
          placeholder="جستوجو در منو ..."
        />
        <svg className="cursor-pointer absolute  left-3 w-5 h-5">
          <use href="#magnifying-glass"></use>
        </svg>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2   xl:grid-cols-3 gap-3">
        {menusResturants.map(menu => (

        <MoreFoodsBoxes {...menu}/>
        ))}
      </div>
    </div>
  );
}
