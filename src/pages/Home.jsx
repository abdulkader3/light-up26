import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="w-full  h-[729px] flex justify-end gap-6 items-center">
        <div className="w-[1200px] flex justify-end h-[600px] bg-gradient-to-b from-[#f65050] rounded-3xl to-[#fea034]">
          <div className="w-[800px] h-[600px] bg-white rounded-3xl">
            <h2 className="text-[200px]">home</h2>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
