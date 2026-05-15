import React from 'react'
import { Outlet } from 'react-router'
import { NavbarTop } from './../Navbar/NavbarTop'
import { SearchBar } from '../Navbar/SearchBar'
import { Navbar } from '../Navbar/Navbar'

export const MainLayout = () => {
  return (
    <>
    <NavbarTop/>
    <SearchBar/>
    <Navbar/>
    <Outlet></Outlet>
    </>
  )
}
