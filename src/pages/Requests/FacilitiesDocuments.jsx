import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import { useState } from "react";
import Loader from "../../components/Loader/Loader"
import S1Places from "../../components/modal/ViewDocFModals/S1Places";
import { dateConversion } from "../../helper/dateConversion.cjs";
import S2ViewShareholder from "../../components/modal/ViewDocFModals/S2ViewShareholder";
import { itemTitle } from "../../helper/itemTitle";
import S2Part2View from "../../components/modal/ViewDocFModals/S2Part2View";
import S2residenceView from "../../components/modal/ViewDocFModals/S2residenceView";
import S2manpowerView from "../../components/modal/ViewDocFModals/S2manpowerView";
import S2educationalView from "../../components/modal/ViewDocFModals/S2educationalView";
import S3productView from "../../components/modal/ViewDocFModals/S3productView";
import S4bankView from "../../components/modal/ViewDocFModals/S4bankView";
import S4active_fView from "../../components/modal/ViewDocFModals/S4active_fView";
import S4active_wView from "../../components/modal/ViewDocFModals/S4active_wView";
import S4benefitView from "../../components/modal/ViewDocFModals/S4benefitView";
import S4AssetView from "../../components/modal/ViewDocFModals/S4AssetView";
import S5approvalsV from "../../components/modal/ViewDocFModals/S5approvalsV";
import S5contractV from "../../components/modal/ViewDocFModals/S5contractV";
import S5pledgeV from "../../components/modal/ViewDocFModals/S5pledgeV";
import S5estateV from "../../components/modal/ViewDocFModals/S5estateV";
import S1introductionV from "../../components/modal/ViewDocFModals/S1introductionV";

const FacilitiesDocuments = () => {
  const reqId = useParams()
  const navigate = useNavigate()
  
  const [isLoading , setIsLoading] = useState(true)
  const [errore , setErrore] = useState(false)
  const [showDoc , setShowDoc] = useState(null)

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
         <p onClick={() => navigate(-1)} className="cursor-pointer h-fit hover:bg-blue-700 transition-all hover:text-white p-2 rounded-lg">بازگشت</p>
      </div>
      <hr className="border-dashed" />
      
      <div className="px-5">
        <div className="flex">
          {Boolean(reqData.facilities[0]) && <p className="text-ms font-bold p-4 py-4">عنوان درخواست : <span className="text-gray-500 font-normal mr-1">{reqData.facilities[0].title}</span></p>}
          <p className="text-ms font-bold p-4 py-4">
            نوع درخواست : 
            {Boolean(reqData.facilities[0]) && <span className="text-gray-500 font-normal mr-2">
              {/* باید عوض شه */}
              {
                reqData.facilities[0].type_f === "job" ? "حسن انجام کار" :
                reqData.facilities[0].type_f === "commitments" ? "حسن انجام تعهدات" :
                reqData.facilities[0].type_f === "deduction" ? "کسور وجه الضمان" :
                reqData.facilities[0].type_f === "prepayment" ? "پیش پرداخت" :
                reqData.facilities[0].type_f === "commitment_pay" ? "تعهد پرداخت" :
                reqData.facilities[0].type_f === "tender_offer" ? "شرکت در مناقصه" :
                reqData.facilities[0].type_f === "credit" ? "حد اعتباری" : ""
              }
            </span>
            }
          </p>
        </div>
        { showDoc !== null &&  showDoc.select === "place" ? <S1Places data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "shareholder" ? <S2ViewShareholder data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "part2" ? <S2Part2View data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "residence" ? <S2residenceView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "manpower" ? <S2manpowerView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "educational" ? <S2educationalView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "product" ? <S3productView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "bank" ? <S4bankView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "active_f" ? <S4active_fView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "active_w" ? <S4active_wView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "benefit" ? <S4benefitView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "asset" ? <S4AssetView data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "approvals" ? <S5approvalsV  data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "contract" ? <S5contractV  data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "pledge" ? <S5pledgeV  data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "estate" ? <S5estateV  data={showDoc.data} close={setShowDoc} /> : "" }
        { showDoc !== null &&  showDoc.select === "introduction" ? <S1introductionV  data={showDoc.data} close={setShowDoc} /> : "" }
        <div className="">
          <ul role="list" className="divide-y divide-gray-100">
            {
              reqData.facilities && reqData.facilities.map((obj) => {
                return Object.keys(obj).map((keyss , index) => {
                  // console.log(keyss);
                  if (["approvals" , "asset" , "bank" , "benefit" , "contract" , "educational" , "estate" , "finish" , "introduction" , "manpower" , "part2" , "place" , "pledge" , "product" , "residence" , "shareholder" , "active_f" , "active_w" ,].includes(keyss) && obj[keyss].length > 0) {
                    return (
                      <li key={index} onClick={() => setShowDoc({select : keyss , data : obj[keyss]})}  className="flex justify-between gap-x-6 rounded-2xl py-5 p-2 hover:bg-gray-200">
                        <div className="flex gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{itemTitle(keyss)}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">تعداد اسناد : {obj[keyss].length} عدد</p>
                          </div>
                        </div>
                        <div className=" sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">بارگذاری شده در : {dateConversion(obj[keyss][0].created_at)}</p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">آخرین تغییرات : {dateConversion(obj[keyss][0].updated_at)}</p>
                        </div>
                      </li>
                      
                    )
                  }
                })
              })
            }
          </ul>
        </div>
    </div>
    </form>
  );
};

export default FacilitiesDocuments;
