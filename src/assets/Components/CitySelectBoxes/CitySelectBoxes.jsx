import React from "react";

export default function CitySelectBoxes({city}) {
  return (
    <li className="">
      <svg className="w-5 h-5 sm:w-6 sm:h-6">
        <use href="#map-pin"></use>
      </svg>
      <span className="leading-3 mt-0.5 text-sm sm:text-base">
        {city}
      </span>
    </li>
  );
}
