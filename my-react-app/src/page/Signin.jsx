import Logo from '../assets/signin/asset 0.png'
import Bgimg from '../assets/signin/asset 1.jpeg'

export default function Signin(){
    return(
        <>
       <div className="h-screen flex justify-between">

            <div className="text-center flex absolute">
               <div className="grid col-span-2 ps-28 pt-16" >
                <img src={Logo} alt=""/>
               </div>
            </div>
        <div className='absolute ps-36 pt-52 font-medium text-3xl'>
           <p>We Offer The Best Product</p>
        </div>

        <div className=''>
           <img src={Bgimg} className='h-screen' alt="" />
        </div>

        <div className='pt-64 pl-56'>
           <p className='font-bold text-3xl'>Sign in to eTrade </p>
           <p className='text-slate-400 pt-3'>Enter your details below</p>
         
       <div className='relative mt-8'>
           <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9 text-sm  '>Email</label>
           <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-900 text-sm type-text' placeholder='annie@example.com'></input>
       </div>

       <div className='relative mt-8'>
          <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9 text-sm  '>Password</label>
          <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-800 text-sm type-text' placeholder=''></input>
       </div>

      <div  className='relative mt-8 flex' >
          <button className='text-white bg-blue-500 rounded-lg top-[-5px] left-[20px]   pt-3 pb-3 pl-10 pr-10  text-lg font-bold  '>Sign in</button>
           <div className="text-blue-600 hover: ml-32 mt-3 font-normal text-sm hover:text-gray-600 ">Forget Password? </div> 
      </div>
 
    
  </div>
        <div className='text-center'>
            <div className='mt-10 mr-16'>
            
                <a 
                href ='#'
                className='relative  font-bold bg-[#3577F0] text-white pt- pb- pr- pl- rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-32
                                                before:py-5
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '
                     >
                      Add to Cart
                    </a>


             </div>
        </div>
   </div>  
        </>
    )

}