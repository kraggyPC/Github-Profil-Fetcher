import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-18 mx-auto">
      <h1 className=" text-5xl p-3 font-bold text-[#5a8779]">REACT.</h1>
      <ul className="md:flex hidden text-xl">
        <li className="p-4 hover:text-[#74d6b7] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#74d6b7] cursor-pointer">Company</li>
        <li className="p-4 hover:text-[#74d6b7] cursor-pointer">Resources</li>
        <li className="p-4 hover:text-[#74d6b7] cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="mt-3 text-3xl font-bold text-[#5a8779]">REACT.</h1>
        <ul className="pt-12 m-2  uppercase">
          <li className="p-4 border-b border-gray-600 hover:text-[#74d6b7] cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#74d6b7] cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#74d6b7] cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#74d6b7] cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
