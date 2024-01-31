import logo from '../assets/signup/asset 0.png'
import signup from '../assets/signup/asset 1.jpeg'  

export default function Signup() {
  return (
    <>
       <div className="SIGN-UP-SECTION flex h-screen">
      <div className="IMAGE-SECTION h-full w-[700px] relative">
        <span className="absolute ps-10 pt-10">
          <a href="">
            <img className="h-10 ml-16 mt-4 cursor-pointer" src={logo} alt="" />
          </a>
          <h1 className="text-3xl text-gray-900 font-semibold mt-24 ml-16">
            We Offer the Best <br />
            Products
          </h1>
        </span>
        <img className="w-[490px] h-[900px] overflow-hidden fixed -z-10 object-cover" src={signup} alt=""></img>
      </div>

      <div className="FORM-SECTION w-full">
        <div className="flex justify-end mr-24 mt-10">
          <p className="mr-7 mt-5">Already a member?</p>
          <button
            className="border bg-[#ff497c] px-10 py-4 rounded-lg text-white text-lg cursor-pointer"
            type="text"
          >
            Sign In
          </button>
        </div>

        <div className="flex flex-col justify-center mt-28 ml-72">
          <h1 className=" font-semibold text-gray-800 text-3xl ">
            I'm New Here{" "}
          </h1>
          <form action="">
            <div className="text-gray-400 mt-4 text-sm ">
              Enter your details below
            </div>
          </form>

          <form action="">
            <div className="relative mt-8">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                User Name
              </label>
              <input
                class="w-96 h-16 border mt-2 rounded-lg focus:outline-none focus:border-blue-500 px-6 text-gray-500 text-sm "
                type="text"
                placeholder="anniemario"
              ></input>
            </div>

            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Email
              </label>
              <input
                className="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="annieexample@gmail.com"
              ></input>
            </div>

            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Password
              </label>
              <input
                class="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="......."
              ></input>
            </div>
            
            <button className="border px-10 py-4 mt-8 rounded-md bg-blue-600 text-white font-semibold cursor-pointer">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
 
    </>

  )
}



