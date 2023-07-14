{<S1Places />}
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import { useState } from "react";
import Loader from "../../components/Loader/Loader"
import S1Places from "../../components/modal/ViewDocFModals/S1Places";
import { dateConversion } from "../../helper/dateConversion.cjs";
import S2ViewShareholder from "../../components/modal/ViewDocFModals/S2ViewShareholder";
import { itemTitle } from "../../helper/itemTitle";
import S1PlacesUp from "./components/S1PlacesUp";
import { ToastContainer, toast } from "react-toastify";
import S2ResidencesUp from "./components/S2ResidencesUp";
import S2ShareholdersUp from "./components/S2ShareholdersUp";
import S2ManpowersUp from "./components/S2ManpowersUp";
import S2BoardsUp from "./components/S2BoardsUp";
import S3 from "./components/S3";
import S2EducationalUP from "./components/S2EducationalUP";

const UpdateFact = () => {
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
      setIsLoading(false)
      setErrore(true)
      navigate(`/panel/404`)
    })
  } , [showDoc])

  if (isLoading) return <Loader />
  return (
    <form className="bg-white rounded-3xl mt-3 p-3">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <p className=" font-bold p-4 py-6">مشاهده و تغییر مدارک</p>
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
        { showDoc !== null &&  showDoc.select === "place" ? <S1PlacesUp close={setShowDoc} data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} /> : "" }
        { showDoc !== null &&  showDoc.select === "residence" ? <S2ResidencesUp close={setShowDoc} data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} /> : "" }
        { showDoc !== null &&  showDoc.select === "shareholder" ? <S2ShareholdersUp close={setShowDoc} data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} /> : "" }
        { showDoc !== null &&  showDoc.select === "manpower" ? <S2ManpowersUp close={setShowDoc} data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} /> : "" }
        { showDoc !== null &&  showDoc.select === "board" ? <S2BoardsUp close={setShowDoc} data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} /> : "" }
        {/* این بورد رو باید توی ویو برا مدیرم بزاریم نزاشته بود */}
        
        {/* { showDoc !== null &&  showDoc.select === "shareholder" ? <S2ViewShareholder data={showDoc.data} close={setShowDoc} /> : "" }
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
        { showDoc !== null &&  showDoc.select === "introduction" ? <S1introductionV  data={showDoc.data} close={setShowDoc} /> : "" } */}
        { showDoc !== null &&  showDoc.select === "product" ? <S3 close={setShowDoc} data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} /> : "" }
        { showDoc !== null &&  showDoc.select === "educational" ? <S2EducationalUP data={showDoc.data} id={reqData.facilities[0].request_id} toast={toast} />: "" }

        <div className="">
          <ul role="list" className="divide-y divide-gray-100">
            {
              reqData.facilities && reqData.facilities.map((obj) => {
                return Object.keys(obj).map((keyss , index) => {
                  // console.log(keyss);
                  if (["board" , "approvals" , "asset" , "bank" , "benefit" , "contract" , "educational" , "estate" , "finish" , "introduction" , "manpower" , "part2" , "place" , "pledge" , "product" , "residence" , "shareholder" , "active_f" , "active_w" ,].includes(keyss) && obj[keyss].length > 0) {
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

export default UpdateFact;
