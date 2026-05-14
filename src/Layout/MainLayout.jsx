import React from 'react'
import { Outlet } from 'react-router'
import { NavbarTop } from '../Components/Navbar/NavbarTop'

export const MainLayout = () => {
  return (
    <>
    <NavbarTop></NavbarTop>
    <Outlet></Outlet>
    </>
  )
}
