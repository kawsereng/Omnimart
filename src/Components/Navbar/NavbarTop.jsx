import { useState ,useRef} from 'react'
import { Container } from '../../Layout/Container'
import { IoLocationOutline } from "react-icons/io5";
import { GrFormDown } from "react-icons/gr";
import { Link } from 'react-router';
import {useOutside} from '../../Hooks/OutSide'

export const NavbarTop = () => {
  let [taka,setTaka]=useState(false)
  let droptakaRef = useRef(null)
   useOutside (droptakaRef,()=>setTaka(false),taka)
  return (
    <>
    <div className='bg-[#FF6A00] max-w-full h-[45px]'>   
    
    <Container>
      <div className='flex pt-[10px] font-san text-[16px] font-[500] text-white justify-between '>
        <div className='flex items-center gap-x-1 cursor-pointer'> <IoLocationOutline  className='text-[16px]  '/>Track Order</div>
        <div  className='flex  cursor-pointer'> 
          <p className='flex items-center' onClick={()=> setTaka(!taka)} ref={droptakaRef}>Currency<GrFormDown className='text-[16px]' /> 
                {taka &&
                    <div className="absolute top-[45px] bg-white text-black py-2 px-6 ">
                          <ul>
                            <li>BDT</li>
                            <li>CH</li>
                            <li>EH</li>
                          </ul>
                    </div> 
                  }
        
        </p>  
 

        <Link to='/Login' className='ml-5'>Login</Link>
        </div>
      </div>
    
    </Container>
    </div>
    </>
  )
}

