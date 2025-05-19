import React, { useEffect, useState } from "react";
import Topbar from "../Topbar/Topbar";
import FooterPc from "../FooterPc/FooterPc";
import HeaderRestorant from "./HeaderRestorant/HeaderRestorant";
import MoreFoodsRestorant from "../MoreFoodsRestorant/MoreFoodsRestorant";
import MoreFoodsBoxes from "../MoreFoodsRestorant/MoreFoodsBoxes/MoreFoodsBoxes";
import CommentsSections from "./CommentsSections/CommentsSections";
import AddressRestorant from "./AddressRestorant/AddressRestorant";
import { useParams } from "react-router";
import MenuSinglePageRestorant from "./MenuSinglePageRestorant/MenuSinglePageRestorant";
import SinglePageRestorantMenu from "./SinglePageRestorantMenus/SinglePageRestorantMenus";
import SwalBox from "../SwalBox/SwalBox";


export default function SinglePageRestorant() {
  const paramsID = useParams();
  let [dataSingleResturants, setDataSingleResturants] = useState({});
  const [allComments , setAllComments] = useState([])
  const [arrayUserBasket , setArrayUserBasket] = useState([])
  


  useEffect(() => {
    fetch(`http://localhost:4444/restaurants/${paramsID.ResoruntID}`)
      .then((res) => res.json())
      .then((data) => setDataSingleResturants(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4444/restaurants/${paramsID.ResoruntID}/comments`)
    .then(res => res.json())
    .then(result => setAllComments(result))
  },[])

  const [statusMenuShow, setStatusMenuShow] = useState("resturants-menu");
  return (
    <div className="">
      <Topbar  arrayUserBasket={arrayUserBasket} />
      <HeaderRestorant {...dataSingleResturants} allComments={allComments} />
      <div className="flex flex-col bg-white justify-between pt-5 pr-4 pl-4 xs:pr-12 xs:pl-12">
        <div className="w-[20rem]  ">
          <ul className="flex  & > *:cursor-pointer justify-between pt-5 pr-3 pl-3 pb-3 items-center ">
            <MenuSinglePageRestorant
              setStatusMenuShow={setStatusMenuShow}
              statusMenuShow={statusMenuShow}
              keys="resturants-menu"
              value=""
              active
              title="منوی رستوران"
            />
            <MenuSinglePageRestorant
              setStatusMenuShow={setStatusMenuShow}
              statusMenuShow={statusMenuShow}
              keys="resturants-comments"
              value=""
              title="نظرات کاربران"
            />
            <MenuSinglePageRestorant
              setStatusMenuShow={setStatusMenuShow}
              statusMenuShow={statusMenuShow}
              keys="resturants-infos"
              value=""
              title="اطلاعات کلی"
            />
          </ul>
        </div>
      </div>
      {statusMenuShow == "resturants-comments" ? <CommentsSections {...dataSingleResturants} /> : null}
      {statusMenuShow == "resturants-menu" ? (
        <SinglePageRestorantMenu arrayUserBasket={arrayUserBasket} setArrayUserBasket={setArrayUserBasket} dataSingleResturants={dataSingleResturants}/>
      ) : null}
      {statusMenuShow == "resturants-infos" ? <AddressRestorant /> : null}

      <div className="mt-2">
        <FooterPc />
      </div>
    </div>
  );
}
