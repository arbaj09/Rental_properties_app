import "./Navbr.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {

  const[toggle,setToggle]=useState(false)
  const SignInHadler = () => {
    
  }
  const togleHandler = () => {
    if (!toggle) {
      setToggle(true);
    }
    if (toggle) {
      setToggle(false);
    }

  }



  return (
    <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
    
      <span className="font-bold">Rental</span>
    </div>
   {toggle ?( <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <Link
            to=""
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>):

(<div className=" flex flex-col">
<ul className="flex space-x-8 ">
  <li>
    <Link
      to=""
      className="text-sm font-semibold text-gray-800 hover:text-gray-900"
    >
      Home
    </Link>
  </li>
  <li>
    <a
      href="#"
      className="text-sm font-semibold text-gray-800 hover:text-gray-900"
    >
      About
    </a>
  </li>
  <li>
    <a
      href="#"
      className="text-sm font-semibold text-gray-800 hover:text-gray-900"
    >
      Contact
    </a>
  </li>
</ul>
</div>)}



  



    <div className="hidden lg:block">
     <Link

     to="/sign-up"
           ><button

      onClick={SignInHadler}
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Sign Up
      </button></Link>
    </div>
    <div className="lg:hidden"
    onClick={togleHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
    
      
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

  );
};
export default Navbar;
