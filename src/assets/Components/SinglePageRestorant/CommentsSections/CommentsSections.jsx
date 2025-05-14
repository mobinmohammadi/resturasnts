import React, { useEffect, useState } from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";
import CommentsBoxes from "../CommentsBoxes/CommentsBoxes";
import { useParams } from "react-router";
import SeeMoreBoxes from "../../SeeMoreBoxes/SeeMoreBoxes";
// import CkEditor from "../../CkEditor/CkEditor"

export default function CommentsSections({ name }) {
  const [visibleComments, setVisibleComments] = useState(3);
  const inCrement = 2;
  const [allComments, setAllComments] = useState([]);

  const modePage = useParams().ResoruntID;

  useEffect(() => {
    fetch(`http://localhost:4444/restaurants/${modePage}/comments`)
      .then((res) => res.json())
      .then((dataComments) => setAllComments(dataComments));
  }, []);

  const addToVisibleComments = () => {
    setVisibleComments(prev => prev + inCrement )
  };

  const allFoodsCommentToShown = visibleComments >= allComments.length
  console.log(allFoodsCommentToShown);
   
  const productsToShow = allComments.slice(0, visibleComments);
  return (
    <>
      <svg className="hidden">
        <symbol
          id="chat-bubble-bottom-center-text"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </symbol>

        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd"
          />
        </symbol>
      </svg>
      <div className="bg-white pb-5">
        <div className="flex items-center  justify-between mr-6 ml-6 bg-green-600 text-white pl-3 pr-3 mt-5 rounded-md">
          <div className="flex items-center justify-center mt-5 ">
            <span className=" block pl-3  text-[18px] pb-5 pr-5  font-bold">
              نظر کاربران درباره رستوران {name}
            </span>
          </div>
          <div className="flex gap-1 h-full rounded-sm cursor-pointer justify-center items-center bg-zinc-700 pr-3 pl-3 pt-4 pb-4">
            <span className="text-xs">ثبت کامنت</span>
            <svg className="w-4 h-4">
              <use href="#chat-bubble-bottom-center-text"></use>
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-10 pb-10 ">
          <div className="flex gap-.5 pb-3">
            <svg className="w-7 h-7 text-slate-300">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-slate-300">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-yellow-500">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-yellow-500">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-yellow-500">
              <use href="#star"></use>
            </svg>
          </div>
          <div className="flex mb-2 gap-2 items-center  border-1 pt-1 pb-1 pr-3 pl-3 rounded-4xl border-[#dddddd]">
            <span className="text-zinc-800 text-sm font-bold">3.8</span>
            <div className="text-slate-400 text-x">
              <span>( 8 </span>
              <span>نظر)</span>
            </div>
          </div>
          <div className="">
            <div>
              <i></i>
              <ProgressBar value={"70"} icons="😊" count="7" />
              <ProgressBar value={"30"} icons="😐" count="4" />
              <ProgressBar value={"10"} icons="😡" count="2" />
            </div>
          </div>
        </div>
        {productsToShow.map((comments) => (
          <CommentsBoxes {...comments} />
        ))}
        <div className="" onClick={() => setTimeout(() => {
          addToVisibleComments()
          console.log("visibleComments ===> " , visibleComments);
          
        }, 2000)}>
          
          {allFoodsCommentToShown ? <span className="w-[97%] mx-auto cursor-cell pt-3 pb-3 bg-red-500 mt-3 border-b-3 rounded-md border-solid border-b-sky-800 text-white flex items-center justify-center">اتمام کامنت های ثبت شده</span> :  <SeeMoreBoxes />}
          
        </div>
        {/* <CkEditor/> */}
      </div>
    </>
  );
}
