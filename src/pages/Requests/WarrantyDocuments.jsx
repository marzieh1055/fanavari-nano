import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import WboxR from "../../components/viewDoc/WboxR";
import { useState } from "react";
import WboxL from "../../components/viewDoc/WboxL";
import Loader from "../../components/Loader/Loader"

const WarrantyDocuments = () => {
  const reqId = useParams()
  const navigate = useNavigate()
  
  const [isLoading , setIsLoading] = useState(true)
  const [errore , setErrore] = useState(false)

  const [reqData , setReqData] = useState([])
  useEffect(() => {
    Axios.get(`/api/v1/request/${reqId.id}`)
    .then(async (res) => {
      console.log(res.data);
      setReqData(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      setErrore(true)
      navigate(`/panel/404`)
    })
  } , [])

  if (isLoading) return <Loader />
  return (
    <form className="bg-white rounded-3xl mt-3 p-3">
      <div className="flex justify-between items-center">
        <p className=" font-bold p-4 py-6">مشاهده مدارک</p>
         <p onClick={() => navigate(-1)} className="cursor-pointer hover:bg-blue-700 transition-all hover:text-white p-2 rounded-lg">بازگشت</p>
      </div>
      <hr className="border-dashed" />
      
      <div className="px-5">
        <div className="flex">
          {Boolean(reqData.warranty[0]) && <p className="text-ms font-bold p-4 py-4">عنوان درخواست : <span className="text-gray-500 font-normal mr-1">{reqData.warranty[0].title}</span></p>}
          <p className="text-ms font-bold p-4 py-4">
            نوع درخواست : 
            {Boolean(reqData.warranty[0]) && <span className="text-gray-500 font-normal mr-2">
              {
                reqData.warranty[0].type_w === "job" ? "حسن انجام کار" :
                reqData.warranty[0].type_w === "commitments" ? "حسن انجام تعهدات" :
                reqData.warranty[0].type_w === "deduction" ? "کسور وجه الضمان" :
                reqData.warranty[0].type_w === "prepayment" ? "پیش پرداخت" :
                reqData.warranty[0].type_w === "commitment_pay" ? "تعهد پرداخت" :
                reqData.warranty[0].type_w === "tender_offer" ? "شرکت در مناقصه" :
                reqData.warranty[0].type_w === "credit" ? "حد اعتباری" : ""
              }
            </span>
            }
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2 px-2">
            {reqData.warranty && reqData.warranty.map((item , index) => {
              return(
                <WboxR 
                  key={index}
                  path1={item.path1}
                  path2={item.path2}
                  path3={item.path3}
                  fn1={item.file_name1}
                  fn2={item.file_name2}
                  fn3={item.file_name3}
                />
              )
            })
            }
          </div>
          <div className="w-1/2 px-2">
            {reqData.warranty && <WboxL reqData={reqData} />}
          </div>
        </div>
    </div>
    </form>
  );
};

export default WarrantyDocuments;
