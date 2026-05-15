import React from 'react'
import { Container } from '../Layout/Container'
import Logo from '../../assets/Image/Logo.webp'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router';
export const SearchBar = () => {
  return (
    <>
    <Container>
        <div className='flex h-[85px] w-full bg-white justify-between items-center font-san'>
            <div>
               <Link to='/'><img src={Logo} alt="Logo" /> </Link> 
            </div>
            <div className=' flex items-center '>
                <div className=' flex items-center border border-[#F0F0F0] p-3'>
                All <IoIosArrowDown  className='ml-8'/>
                </div>
                <div className='items-center border border-[#F0F0F0] p-3'>
                    <input className='w-[680px]  outline-0 ' type="text"  placeholder='Search by product name'/>
                    <button className='cursor-pointer'> <IoSearchOutline className='text-4'/> </button>
                </div>
            </div>
 
            <div className='text-[12px]'><IoIosGitCompare  className='text-[22px] ml-3 mb-2' />Compare</div>
            <div className='text-[12px]'><FaRegHeart className='text-[22px] ml-2 mb-2' />Whislist</div>
            <div className='text-[12px]'><GrCart className='text-[22px] mb-2'/>Cart</div>
        </div>

    </Container>
    
    </>
  )
}
