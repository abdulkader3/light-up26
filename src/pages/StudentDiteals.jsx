import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const StudentDetails = () => {
  const tamnna = useSelector((state) => state.prity.value);

  return (
    <>
      <div className="w-full h-[729px] flex justify-end gap-6 items-center">
        <div className="w-full ml-5 h-[600px] bg-white rounded-3xl flex items-center">
          <div className="w-[500px] h-full">
            <img
              src={tamnna.image}
              alt={tamnna.name}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="w-full h-[599px]">
            <h1 className="text-[100px] pl-10 font-bold "> {tamnna.name} </h1>
            <p className=" text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Rule No:{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {tamnna.rule_number}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Home Address :{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {tamnna.home_address}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Previous School :{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {tamnna.previous_school}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Next Exam:{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {tamnna.next_exam_date}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Current Class :{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {tamnna.current_class}
              </span>{" "}
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default StudentDetails;
