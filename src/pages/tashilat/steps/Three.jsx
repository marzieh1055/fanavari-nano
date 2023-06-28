import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
import Axios from "../../../../axiosinstancs";

export default function Three() {
  const { stepThree, setStepThree } = useContext(TashilatContext)
  const [serviceInfo, setServiceInfo] = useState([]);

  const changeHandler = (e) => {
    setStepThree(prevState => {
      const updatedPlaces = prevState.products.map((item, index) => {
        if (index === parseInt(e.target.id)) {
          return {
            ...item,
            [e.target.name]: e.target.value
          };
        }
        return item;
      });
      return {
        ...prevState,
        products: updatedPlaces
      };
    });
    console.log(stepThree.products[e.target.id]);
  }
  
  Axios.post("/api/v1/product", stepThree)
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

  return (
    <>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          مشخصات محصولات/ خدمات اصلی شرکت{" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام محصول/خدمت </th>
              <th className="bg-white p-3  ">مشتریان اصلی </th>
              <th className="bg-white p-3  ">مشخصات و کاربرد محصول/خدمت </th>
              <th className="bg-white p-3  ">رقبای اصلی در رابطه با محصول </th>
              <th className="bg-white p-3  ">
                میزان فروش یک سال گذشت (میلیون ریال){" "}
              </th>
              <th className="bg-white p-3  ">تأییدیه دانش بنیان؟ </th>
            </tr>
          </thead>
          <tbody>
            {stepThree.products.length > 0 &&
              stepThree.products.map((item, index) => {
                return (
                  <tr key={index} className="bg-white  border-b">
                    <td className="p-4 text-xs text-gray-800 font-bold">
                      {index}
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepThree.products[index].name}
                        name="name"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepThree.products[index].customer}
                        name="customer"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepThree.products[index].specifications}
                        name="specifications"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepThree.products[index].competitor}
                        name="competitor"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="!"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepThree.products[index].sales_amount}
                        name="sales_amount"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold text-center">
                      <input
                        type="checkbox"
                        className="border border-gray-300 rounded-xl "
                        onChange={changeHandler}
                        value={stepThree.products[index].is_confirmation}
                        name="is_confirmation"
                        id={index}
                      />
                    </td>
                  </tr>
                )
              })
            }







            {/* {
              serviceInfo.length > 0 &&
              serviceInfo.map((item, index) => (
                <tr key={index} className="bg-white  border-b">
                  <td className="p-4 text-xs text-gray-800 font-bold">
                    {index + 2}
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="!"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold text-center">
                    <input
                      type="checkbox"
                      className="border border-gray-300 rounded-xl "
                    />
                  </td>
                </tr>
              ))
            } */}

            <tr className="">
              <td className="bg-white" colSpan="9">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  // onClick={() => {
                    
                  //   setServiceInfo([...serviceInfo, "example"]);
                  // }}
                  onClick={() => {
                    setStepThree(prev => (
                        {
                            ...prev ,
                            products : [
                                ...prev.products,
                                {
                                    name:"",
                                    customer:"",
                                    specifications:"",
                                    competitor:"",
                                    sales_amount:"",
                                    is_confirmation:""
                                },
                            ]
                        }
                    ));
                }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/panel/Tashilat/4">
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
      </Link>
    </>
  );
}