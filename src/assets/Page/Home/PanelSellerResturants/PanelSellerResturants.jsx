import React from 'react'
import HomeSellerPanel from '../../../Components/PanelSaller/HomeSellerPanel/HomeSellerPanel'
import { Outlet } from 'react-router'
import HomePanel from '../../../Components/PanelSaller/HomeSellerPanel/HomePanel/HomePanel'

export default function PanelSellerResturants() {
  return (
    <div className='bg-slate-200 flex gap-5'>
        <HomeSellerPanel/>
        <HomePanel/>
        <Outlet/>
    </div>
  )
}
