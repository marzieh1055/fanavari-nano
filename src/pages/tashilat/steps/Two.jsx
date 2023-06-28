import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
import S2TarkibHeyatmodire from "../../../components/requestSteps/S2TarkibHeyatmodire";
import S2Residences from "../../../components/requestSteps/S2Residences";
import S2Manpowers from "../../../components/requestSteps/S2Manpowers";
import S2Educational from "../../../components/requestSteps/S2Educational";
import S2Shareholders from "../../../components/requestSteps/S2Shareholders";
import queryString from "query-string";
import Axios from "../../../../axiosinstancs";
import { UserDataContext } from "../../../contexts/UserData.Provider";
import Loader from "../../../components/Loader/Loader";

export default function Two() {  
  // url
  const navigate = useNavigate()
  const location = useLocation();
  const values = queryString.parse(location.search);

  // context
  const { userDatas } = useContext(UserDataContext)
  const {stepTwo, setStepTwo} = useContext(TashilatContext)
  // is loading
  const [isLoading, setIsLoading] = useState(false)

  const dateYear = new Date().getFullYear()
  const dateMouth = new Date().getMonth()
  const dateDay = new Date().getDate()

  useState(() => {
    setStepTwo((prev) => {
      return ({
        ...prev,
        facilities_id : parseInt(values.last_id),
        date : `${dateYear}-${dateMouth}-${dateDay}`
      })
    })
  } , [])
  
  const sendHandler = () => {
    setIsLoading(true)
    Axios.post("/api/v1/shareholder", stepTwo)
        .then((res) => {
          console.log(res.data)
          navigate(`/panel/Tashilat/3?last_id=${parseInt(values.last_id)}`)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
  }
  if (isLoading) return <Loader />
  return (
    <>
      <S2Shareholders />
      {/* ای پی آی نداشت باید اضافه شه */}
      {/* <S2TarkibHeyatmodire /> */}
      <S2Residences />
      <S2Manpowers />
      <S2Educational />

        <div className=" text-left mt-2">
          <button onClick={sendHandler} className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
    </>
  );
}