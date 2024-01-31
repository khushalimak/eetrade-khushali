import React from "react"
import Logo from '../assets/resetpass/asset 0.png'
import Bgimg from '../assets/resetpass/asset 1.jpeg'

export default function Reset(){
    return(
        <>
           <div className="h-screen flex justify-between">

       <div className="text-center flex absolute">
           <div className="grid col-span-2 ps-28 pt-16" >
             <img src={Logo} alt=""/>
          </div>
      </div>

      <div className='absolute ps-36 pt-52 font-medium text-3xl'>
           <p>We Offer The Best Prodect</p>
        </div>

        <div className=''>
           <img src={Bgimg} className='h-screen' alt="" />
        </div> 

        <div className='pt-64 pr-40'>
           <p className='font-bold text-3xl'>Reset Password </p>

           <div className='relative mt-8'>
           <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9 text-sm text-gray-500  '>New Password</label>
           <input  className='w-96 h-16 border mt-2 rounded-lg  focus:outline-none px-6 pb-3 text-gray-950   text-4xl '  placeholder='.....'></input>
       </div>

       <div className='relative mt-8'>
           <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9 text-sm text-slate-500  '>Confirm Password</label>
           <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none   px-6 text-gray-700  type-text text-4xl pb-3' placeholder='.......'></input>
       </div>
       <div  className='relative mt-8 flex' >
          <button className='text-white bg-blue-500 rounded-lg top-[-5px] left-[20px]   pt-3 pb-3 pl-10 pr-10  text-lg font-bold font-sans '>Reset Password</button>
        </div> 

       </div>


     <div className='text-center'>
            <div className='pe-28 pt-16'>
                 <div className='flex'>
                     <p className= 'pt-2 text-sm font-semibold'>Already a Member?</p>
                     <button type='button' className='pt-2 text-sm font-semibold hover:text-blue-700'>Sign in</button>
                 </div>
             </div>
        </div>

</div>
        </>
    )
}