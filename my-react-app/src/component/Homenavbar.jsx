import React from 'react'
import logo from '../assets/Homepage/asset 0.png'
import '../component/Homenavbar.css'
import { Link ,NavLink} from 'react-router-dom'


const HomeNavBar = () => {
  
    return (
        <div className='container w-[1300px]  mx-auto'>

            <div className='flex justify-around px-3 py-3 items-center bg-white rounded-lg shadow-sm '>
                {/* logo  */}
                <div>
                    <img src={logo} alt="" />
                </div>

                {/* navbar list  */}
                <div className='grid grid-cols-6 gap-x-10'>
                        <div className='home-dropdown'>
                            <Link  to='/' className='font-semibold underline decoration-[2px] underline-offset-4 h-24 '><span className='text-gray-800 hover:text-black'>Home</span><i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></Link>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                    <li><Link to='/'  className='text-[#ff497c]' href="">Home-Electronics</Link></li>
                                    <li><Link to='/'  className='hover:text-[#ff497c]' href="">Home-NFT</Link></li>
                                    <li><Link to='/'  className='hover:text-[#ff497c]' href="">Home-Fashion</Link></li>
                                    <li><Link to='/'  className='hover:text-[#ff497c]' href="">Home-Jewellery</Link></li>
                                    <li><Link to='/' className='hover:text-[#ff497c]' href="">Home-Furniture</Link></li>
                                    <li><Link to='/'  className='hover:text-[#ff497c]' href="">Home-Multipurpose</Link></li>
                                    <li><Link to='/'  className='hover:text-[#ff497c]' href="">RTL Version</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800 '>
                            <Link className='navbar-button font-semibold h-24'>Shop</Link>
                            <i className="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                    <li><Link to='/shopsliderbar'  className='hover:text-[#ff497c]' href="">Shop With Sidebar</Link></li>
                                    <li><Link to="/shopnoslider"  className='hover:text-[#ff497c]' href="">Shop No Sidebar</Link></li>
                                    <li><Link to='/variation1'  className='hover:text-[#ff497c]' href="">Product Variation 1</Link></li>
                                    <li><Link to='/variation2'  className='hover:text-[#ff497c]' href="">Product Variation 2</Link></li>
                                    <li><Link to='/variation3'  className='hover:text-[#ff497c]' href="">Product Variation 3</Link></li>
                                    <li><Link to='/variation4 ' className='hover:text-[#ff497c]' href="">Product Variation 4</Link></li>
                                    <li><Link to='/variation5'  className='hover:text-[#ff497c]' href="">Product Variation 5</Link></li>
                                    <li><Link to='/variation6'  className='hover:text-[#ff497c]' href="">Product Variation 6</Link></li>
                                    <li><Link to='/variation7'  className='hover:text-[#ff497c]' href="">Product Variation 7</Link></li>
                                    <li><Link to='/variation8' className='hover:text-[#ff497c]' href="">Product Variation 8</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <Link className='navbar-button font-semibold h-24'>Pages</Link>
                            <i classname="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                   <li><Link to='/wishlist' className='hover:text-[#ff497c]' href="">Wishlist</Link></li>
                                    <li><Link to='/cart' className='hover:text-[#ff497c]' href="">Cart</Link></li>
                                    <li><Link to='/chechout' className='hover:text-[#ff497c]' href="">Checkout</Link></li>
                                    <li><Link to='/account' className='hover:text-[#ff497c]' href="">Account</Link></li>
                                    <li><Link to='/signup' className='hover:text-[#ff497c]' href="">Sign Up</Link></li>
                                    <li><Link to='/signin' className='hover:text-[#ff497c]' href="">Sign In</Link></li>
                                    <li><Link to='/forget' className='hover:text-[#ff497c]' href="">Forgot Password</Link></li>
                                    <li><Link to='/reset' className='hover:text-[#ff497c]' href="">Reset Password</Link></li>
                                    <li><Link to='/privacy' className='hover:text-[#ff497c]' href="">Privacy Policy</Link></li>
                                    <li><Link to='/comingsoon' className='hover:text-[#ff497c]' href="">Coming Soon</Link></li>
                                    <li><Link to='/error' className='hover:text-[#ff497c]' href="">404 Error</Link></li>
                                    <li><Link to='/typography' className='hover:text-[#ff497c]' href="">Typography</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <Link to='/about' className='navbar-button font-semibold h-24'>About</Link>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <Link className='navbar-button font-semibold h-24'>Blog</Link>
                            <i classname="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i>
                            <div className='home-content'>
                                <ul className='list bg-white rounded-md'>
                                <li><Link to='bloglist' className='hover:text-[#ff497c]' href="">Blog List</Link></li>
                                <li><Link to='bloggrid' className='hover:text-[#ff497c]' href="">Blog Grid</Link></li>
                                <li><Link to='standard' className='hover:text-[#ff497c]' href="">Standard Post</Link></li>
                                <li><Link to='gallery' className='hover:text-[#ff497c]' href="">Gallery Post</Link></li>
                                <li><Link to='video' className='hover:text-[#ff497c]' href="">Video Post</Link></li>
                                <li><Link to='audio' className='hover:text-[#ff497c]' href="">Audio Post</Link></li>
                                <li><Link to='quote' className='hover:text-[#ff497c]' href="">Quote Post</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-dropdown text-gray-800'>
                            <Link to='contact' className='navbar-button font-semibold h-24'>Contact</Link>
                        </div>

                    </div>

                {/* nav icon  */}
                <div className='text-2xl text-gray-600 flex justify-between w-[160px] h-10'>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'>
                        <i class="ri-search-line "></i>
                        </li>
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'>
                        <i class="ri-heart-line "></i>
                        </li>
              
                    </ul>
                   

                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                  
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'>
                        <i class="ri-shopping-cart-line "></i>
                        </li>
                       
                   
                    </ul>
                    <ul className='flex justify-between w-[20px] btn-hover hover:text-slate-100'>
                        <li className='nav-icon h-10 w-10 flex justify-center items-center rounded-full'><i class="ri-user-3-line "></i></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default HomeNavBar





