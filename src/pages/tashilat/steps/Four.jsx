import React , { useContext , useState } from "react";
import S4bank from "../../../components/requestSteps/S4bank";
import S4Activefacilities from "../../../components/requestSteps/S4Activefacilities";
import S4Activewarranty from "../../../components/requestSteps/S4Activewarranty";
import S4Bills from "../../../components/requestSteps/S4Bills";
import S4AssetsT from "../../../components/requestSteps/S4AssetsT";
import S4AssetsF from "../../../components/requestSteps/S4AssetsF";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
import Axios from "../../../../axiosinstancs";
import Loader from "../../../components/Loader/Loader";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Four() {
  const navigate = useNavigate();
  const location = useLocation();
  const values = queryString.parse(location.search);

  const {stepFour, setStepFour} = useContext(TashilatContext)

  const [isLoading, setIsLoading] = useState(false)
  const [showAllErr , setShowAllErr] = useState(false)
  const [sendAccept , setSendAccept] = useState({
    banks : [{name : ""}] ,
    active_facilities : [{name : ""}] ,
    active_warranty : [{name : ""}] ,
    // bills : [{name : ""}] ,
    // assets : [{name : ""}] ,
  })

  console.log(stepFour);
  const [ok , setOk] = useState(false)

  useEffect(() => {
    setStepFour((prev) => {
      return ({
        ...prev,
        facilities_id : parseInt(values.last_id),
      })
    })
  } , [])
  
  // V
  useEffect(() => {
    let yesNumber = 0
    Object.keys(sendAccept).map(i => {
      sendAccept[i].map(j => {
        if (Object.keys(j).length > 0) {
          setOk(false)
          yesNumber += 1
        }
      })
    })
    console.log(yesNumber);
    if (yesNumber === 0) {
      setOk(true)
    }
  } , [sendAccept])

  const sendHandler = (e) => {
    e.preventDefault()
    setIsLoading(true)
    Axios.post("/api/v1/bank", stepFour)
    .then((res) => {
      console.log(res.data)
      navigate(`/panel/Tashilat/5?last_id=${parseInt(values.last_id)}`)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
      toast("مشکلی در ارسال اطلاعات پیش آمده لطفا تمام فیلد هارا کامل نمایید")
    })
  }

  if (isLoading) return <Loader />
  return (
    <>
    <ToastContainer />
    <S4bank showAllErr={showAllErr} setSendAccept={setSendAccept} />
    <S4Activefacilities showAllErr={showAllErr} setSendAccept={setSendAccept} />
    <S4Activewarranty showAllErr={showAllErr} setSendAccept={setSendAccept} />
    <S4Bills showAllErr={showAllErr} setSendAccept={setSendAccept} />
    <S4AssetsT showAllErr={showAllErr} setSendAccept={setSendAccept} />
    <S4AssetsF showAllErr={showAllErr} setSendAccept={setSendAccept} />
        <div className=" text-left mt-2">
        {
          ok ? 
          <button onClick={sendHandler} type="submit" className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button> :
          <button onClick={() => setShowAllErr(true)}  className="bg-gray-500  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
            
        }
        </div>
    </>
  );
}
