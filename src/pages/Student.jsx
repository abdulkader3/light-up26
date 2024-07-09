import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Love } from "../Slices/Shanto";

const Student = () => {
  const [data, update] = useState([]);
  const ghoraghori = useNavigate();
  const bostha = useDispatch();
  const next = (jui) => {
    ghoraghori("/sdetails");
    bostha(Love(jui));
  };
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/66881a3fe41b4d34e40d87c4")
      .then((API) => {
        update(API.data.record);
      });
  });

  return (
    <>
      <div className="w-full  h-[729px] flex justify-end gap-6 items-center">
        <div className="w-full ml-5 h-full flex flex-wrap gap-10 rounded-3xl">
          <div className=" w-full mb-10 "></div>

          {data.map((prity, ex) => (
            <div
              key={ex}
              className=" flex flex-col items-center w-[300px] h-[300px] mt-5 bg-gradient-to-b from-[#f65050] rounded-3xl to-[#fea034] "
            >
              <div className=" h-[150px] w-[150px] rounded-full mt-5 ">
                <img className=" rounded-md " src={prity.image} alt="profile" />
                <div className="w-full flex flex-col items-center "></div>
              </div>
              <div className=" w-full ">
                <div className="w-full flex flex-col items-center justify-center mt-5 mb-2">
                  <h2 className=" text-white text-2xl font-semibold ">
                    {" "}
                    {prity.name}{" "}
                  </h2>
                  <p className="text-[#565656]">
                    <span className=" text-[19px] text-white font-semibold ">
                      Current class :
                    </span>{" "}
                    {prity.current_class}
                  </p>
                  <div className="w-full flex justify-center mt-3 h-full">
                    <button
                      onClick={() => next(prity)}
                      className=" w-[100px] h-[25px] text-white rounded-md bg-gradient-to-b from-[#17d1ff] to-[#ff9b70]"
                    >
                      {" "}
                      Details{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Navbar />
      </div>
    </>
  );
};

export default Student;
