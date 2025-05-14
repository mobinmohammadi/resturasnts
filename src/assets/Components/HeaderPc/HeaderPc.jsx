import React from "react";
import Topbar from "../Topbar/Topbar";
import SearchBoxPc from "../SearchBoxPc/SearchBoxPc";
import SliderHeader from "../SliderHeader/SliderHeader";
import EasyAddress from "../EasyAddress/EasyAddress";

export default function HeaderPc() {
  return (
    <>
      <div className="font-Dana bg-white ">
        <Topbar />
        <EasyAddress />
      </div>
      <SearchBoxPc />
      <SliderHeader />
    </>
  );
}
