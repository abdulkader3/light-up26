import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lovely } from "../Slices/Shanto";

const Prodact = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()





  const porerPage = (offo)=>{
    navigate('/prodactd')
    dispatch(lovely(offo))
  }

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/6688042bacd3cb34a861b8d0')
      .then((response) => {
        setData(response.data.record);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <div className="w-full h-full flex justify-end gap-6 items-center">
      <div className="w-full ml-5 h-full flex gap-10 flex-wrap rounded-3xl">
        <div className="w-full mb-40"></div>

        {data.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[300px] h-full mt-5 bg-gradient-to-b from-[#f65050] rounded-3xl to-[#fea034]"
          >
            <div className="w-full h-full flex-col flex items-center">
              <div className="w-[150px] h-[150px] mt-3">
                <img
                  className="rounded-md"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="w-full">
                <h2 className="text-[17px] text-white font-medium pl-4">
                  Name: {product.name}
                </h2>
                <h2 className="text-[17px] text-white font-medium pl-4">
                  Brand: {product.brand}
                </h2>
                <h2 className="text-[17px] text-white font-medium pl-4">
                  OS: {product.operating_system}
                </h2>
                <h2 className="text-[17px] text-white font-medium pl-4">
                  RAM: {product.ram}
                </h2>
                <h2 className="text-[17px] text-white font-medium pl-4">
                  Color: {product.color}
                </h2>
                <h2 className="text-[17px] text-white font-medium pl-4">
                  Price: {product.price}
                </h2>
                <div className="w-full flex justify-center">
                  <button onClick={()=>porerPage(product)} className="mb-5 p-3 rounded-lg hover:shadow-2xl hover:bg-transparent hover:border-[2px] active:scale-125 transition-all bg-white">
                    <Link to="#">Add to cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navbar />
    </div>
  );
};

export default Prodact;
