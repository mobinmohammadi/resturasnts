import React from 'react'
import Header from '../../Components/HeaderPc/HeaderPc'
import PapularCategury from '../../Components/PapularCategury/PapularCategury'
import AroundMe from '../../Components/AroundMe/BoxesAroundMeFood'
import FooterPc from '../../Components/FooterPc/FooterPc'
import EasyAddress from '../../Components/EasyAddress/EasyAddress'
import UserBasket from '../../Components/UserBasket/UserBasket'
import NewFoods from '../../Components/NewFoods/NewFoods'

export default function Home() {
  return (
    <div className='dark:bg-zinc-600'>
      {/* <UserBasket/> */}
        <Header/>
        <div className="container-custom">
        <PapularCategury/>
        <AroundMe/>
        <NewFoods/>
        </div>
        <FooterPc/>
        {/* <div className='bg-zinc-700 w-full h-full z-40 fixed top-0'>s</div> */}
    </div>
  )
}
