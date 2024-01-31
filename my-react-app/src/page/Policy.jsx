import React from "react"
import Line from '../assets/policy/asset 24.png'
import Footer2 from "../component/footer2"
import { AllTopBar } from "../component/Hometopbar/dropdown"
import Navbar from "../component/navbar"
import alexa from '../assets/policy/asset 2.png'



export default function Policy(){
    return(
        <>
        <div>
          <AllTopBar/>
        </div>
        <div className="sticky top-0 z-50">
          <Navbar/>
        </div>
    
     <div className="">   
       {/* <........header-section start....> */}
      <div className='header-section  pt-'>
           <img src={Line}  alt="" />
      </div>
      {/* <Line..........header-section end.......> */}

      {/* <.....main-section start.....> */}
      
   
      <div className="FIRST-PART flex bg-[#f8f8f8] justify-between px-20 py-14 ">
        <div className="mx-16">
          <p className="text-gray-400 font-semibold">
            Home | <span className="text-blue-500">My Account</span>
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-5">Privacy policy</h1>
        </div>
        <div className="mx-16 relative z-10">
          <span className="before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full 
          before:-top-3 before:right-16 before:-z-10"></span>
          <img className="" src={alexa}></img>
        </div>
      </div>

     <div className="px-32">
        <p className=" pt-20 text-2xl font-semibold border-b-4 border-blue-500 w-[628px] pb-3">
            This Privecy policy was published on February 26th, 2022.
        </p>
        <p className=" pt-24 font-medium  text-2xl">GDPR compliance</p>
        <p className=" pt-8 text-gray-500  text- ">Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus<br></br>
         vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci,<br></br>
          ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue<br></br> neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
          
          <p className=" pt-10 font-medium text-2xl">About eTrade</p>
          <p className="  pt-6 text-gray-500 ">In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus, dapibus volutpat<br></br>
          est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus imperdiet.<span className="text-blue-600">hello@etrade.store</span></p>
     
          <p className=" pt-10 font-medium text-2xl">When we collect personal data about you</p>

          <ul className="list-disc">
            <li  className=" pt-5 text-gray-500"> Email is a crucial channel in any marketing.</li>
            <li className=" pt-3 text-gray-500">Curious what to say? How to say it?</li>
            <li className=" pt-3 text-gray-500 ">Whether you’re kicking off a new campaign</li>
            <li className=" pt-3 text-gray-500 ">Habitasse per feugiat aliquam luctus accumsan curae</li>
          </ul>

          <p className=" pt-10 font-medium text-2xl">Why we collect and use personal data</p>
          <p className=" pt-4 text-gray-500 ">Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus<br></br> vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci,<br></br> ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue<br></br> neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>

          <ul>
            <li className=" pt-3 text-gray-500">Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros.</li>
            <li className=" pt-3 text-gray-500">Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>
            <li className=" pt-3 text-gray-500">Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>
            <li className=" pt-3 text-gray-500">Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac molestie ipsum ullamcorper a.</li>
            <li className=" pt-3 text-gray-500">Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>
           
          </ul>
          <p className="pt-10 font-medium text-2xl"> Type of personal data collected</p>

          <p className=" pt-4 text-gray-500 ">In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque<br></br> metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
     
          <p className=" pt-10 font-medium text-2xl ">Information we collect automatically</p>

          
          <p className=" pt-4 text-gray-500">Etiam vel mi vel neque mattis iaculis. Proin vitae consequat augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia. Praesent ac diam id odio<br></br> elementum efficitur. Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla, interdum <br></br>vitae rhoncus at, pretium id arcu. Etiam sodales lectus at convallis vestibulum. Quisque non neque augue. Nullam condimentum nulla felis, nec<br></br> suscipit augue congue ac.</p>
     
           <p className=" pt-10 font-medium text-2xl ">The use of cookies and web beacons</p>  

          <p className=" pt-4 text-gray-500"> We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. Cookies help us make our Site and<br></br> your visit better.</p>
    
         <p className=" pt-4 text-gray-500">We may log information using digital images called web beacons on our Site or in our emails. </p>
    
         <p className=" pt-4 text-gray-500">This information is used to make our Site work more efficiently, as well as to provide business and marketing info0rmation to the <br></br>owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the<br></br> purposes of understanding how visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as to <br></br>detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify you.</p>
    
          <p className=" pt-10 font-medium text-2xl ">How long we keep your data</p>

          <p className=" pt-4 text-gray-500">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering <br></br>our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend <br></br>to any legal claims/complaints, and for safeguarding purposes</p>
 
          <p className=" pt-4 text-gray-500">This means that we may retain your personal data for a reasonable period after your last interaction with us. When the personal data that<br></br> we have collected is no longer required, we will delete it securely. We may process data for statistical purposes, but in such cases, data will be<br></br> anonymized</p>

          <p className="pt-10 font-medium text-2xl ">Your rights to your personal data</p>

          <p className=" pt-4 text-gray-500">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering<br></br> our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend<br></br> to any legal claims/complaints, and for safeguarding purposes.</p>
     
          <p className="pt-10 font-medium text-2xl ">Hotjar’s privacy policy</p>

          <p className=" pt-4 text-gray-500">Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque sed purus id massa consequat consectetur eu vel lorem.<br></br> Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit. Quisque viverra<br></br> risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci, aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at mattis imperdiet,<br></br> diam augue tempor diam, sed porttitor odio elit ut ante. In posuere mi at mi pellentesque ornare sit amet gravida nisi. Praesent ac blandit odio. <br /> Curabitur iaculis ante elit, et imperdiet leo mollis at.</p>
   
         <p className=" pt-10 font-medium text-2xl ">Changes to this Privacy Policy</p>

         <p className=" pt-4 text-gray-500">Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed consectetur <br /> ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus. Nam tristique <br /> ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque, ullamcorper enim vel, molestie ipsum.</p>
     </div>
  </div>
  <div>
    <Footer2/>
  </div> 
        </>
    )
}