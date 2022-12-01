import React from 'react'
import {Outlet} from 'react-router-dom'

import { MyNavbar } from "./Navbar";
import { Footer } from "./Footer";

const Container = () => {
  return (
    <>
    <MyNavbar /> 
    <Outlet />
    <Footer /> 
    </>
  )
}

export default Container