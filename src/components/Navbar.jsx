import React from "react";
import { Link } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className=" w-[90px] h-[500px] rounded-full mr-10  bg-white ">
        <ul className="flex flex-col items-center justify-center h-full gap-20">
          <li>
            <Link to="/">
              {" "}
              <MdOutlineHome className=" text-[30px] text-[#fea621] " />{" "}
            </Link>
          </li>
          <li>
            <Link to="/student">
              {" "}
              <PiStudentBold className=" text-[30px] text-[#fea621] " />{" "}
            </Link>
          </li>
          <li>
            <Link to="/prodact">
              {" "}
              <FaBoxOpen className=" text-[30px] text-[#fea621] " />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
