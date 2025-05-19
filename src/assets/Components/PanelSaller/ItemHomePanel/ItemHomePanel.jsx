import { Gauge } from "@mui/x-charts";
import React from "react";

export default function ItemHomePanel() {
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex justify-between items-center">
        <span>فروش کل</span>
        <svg className="w-8 h-8 bg-red-400">
          <use href="#cube-transparent"></use>
        </svg>
      </div>
      <div className="flex justify-between items-center">
        <Gauge
          value={75}
          startAngle={0}
          endAngle={360}
          innerRadius="80%"
          outerRadius="70%"
          // ...
        />
        <div className="">
        <span>فروش امروز</span>
        <span>257</span>

        </div>
      </div>
    </div>
  );
}
