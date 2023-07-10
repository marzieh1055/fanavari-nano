import React , { useState , useContext } from "react";
import S5Approvals from "../../../components/requestSteps/S5Approvals";
import S5contracts from "../../../components/requestSteps/S5contracts";
import S5pledges from "../../../components/requestSteps/S5pledges";
import S5estates from "../../../components/requestSteps/S5estates";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
import Axios from "../../../../axiosinstancs";
import Loader from "../../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";

export default function Five() {
  const navigate = useNavigate();
  const location = useLocation();
  const values = queryString.parse(location.search);

  const {stepFive, setStepFive} = useContext(TashilatContext)

  const [isLoading, setIsLoading] = useState(false)

  useState(() => {
    setStepFive((prev) => {
      return ({
        ...prev,
        facilities_id : parseInt(values.last_id),
      })
    })
  } , [])
  const sendHandler = () => {
    setIsLoading(true)
    Axios.post("/api/v1/approvals", stepFive)
    .then((res) => {
      console.log(res.data)
      navigate(`/panel/Tashilat/confirm?last_id=${parseInt(values.last_id)}`)
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
      <S5Approvals />
      <S5contracts />
      <S5pledges />
      <S5estates />
        <div className=" text-left mt-2">
          <button onClick={sendHandler} className="bg-blue-700 text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
    </>
  );
}
