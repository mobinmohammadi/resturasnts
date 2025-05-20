import React from "react";
import ItemHomePanel from "../../ItemHomePanel/ItemHomePanel";
import ItemLineProgress from "./ItemLineProgress/ItemLineProgress";

export default function HomePanel() {
  return (
    <div className="w-full mr-3 ml-3">
      <div className=" grid grid-cols-1 xs:grid-cols-2 2xs:grid-cols-3 3xs:grid-cols-4  gap-2 ">
        <ItemHomePanel
          title="فروش ها"
          value="80"
          des="مجموع فروش امروز"
          count="127"
        />
        <ItemHomePanel
          title="بازخورد ها"
          value="77"
          des="مجموع بارخورد ها"
          count="3574"
        />
        <ItemHomePanel
          title="تخفیف ها"
          value="22"
          des="تخفیف امروز"
          count="20%"
        />
        <ItemHomePanel
          title="غذا های امروز"
          value="50"
          des="تعداد غذا های امروز"
          count="75"
        />
      </div>
      <div className="mt-5 gap-2 grid grid-cols-2">
        <ItemLineProgress title="تعداد فروش" percent="70%" count="3600"  desc="تعداد سفارشات بعد از تخفیفات" colors="bg-green-500" bgProgress="bg-green-200"/> 
        <ItemLineProgress title="تعداد رستوران ها" percent="20%" count="18"  desc="تعداد رستوران های ثبت شده" colors="bg-sky-500" bgProgress="bg-sky-200"/> 
        <ItemLineProgress title="تعداد غذا ها" percent="35%" count="137"  desc="تعداد غذا های موجود" colors="bg-pink-600" bgProgress="bg-pink-200"/> 
        <ItemLineProgress title=" فروش این ماه" percent="23%" count="9637"  desc="تعداد سفارش های این ماه" colors="bg-zinc-600" bgProgress="bg-zinc-300"/> 
      </div>
    </div>
  );
}
