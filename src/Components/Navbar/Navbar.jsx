import React from 'react'
import { Container } from '../Layout/Container'
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  return (
   <>
   <div className='border-y border-solid border-[#e7e7e7]'>
   <Container>
        <div className='flex items-center'>
            <div className='flex items-center py-4 pl-3 pr-[163px] gap-2  bg-[#FF6A00] text-white font-san text-[18px] font-medium '><FiMenu className=''/>Categories</div>
            <div className='ml-[35px]'>
                <ul className='flex gap-[35px] font-san text-[16px] font-medium text-[#505050]'>
                    <li className='text-[#FF6A00] cursor-pointer '>Home</li>
                    <li className='hover:text-[#FF6A00] cursor-pointer'>Shop</li>
                    <li className='hover:text-[#FF6A00] cursor-pointer'>Campaign</li>
                    <li className='hover:text-[#FF6A00] cursor-pointer'>Blog</li>
                    <li className='flex items-center hover:text-[#FF6A00] cursor-pointer'>Pages <IoIosArrowDown/> </li>
                    <li className='hover:text-[#FF6A00] cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
   </Container>
   </div>
   </>
  )
}
