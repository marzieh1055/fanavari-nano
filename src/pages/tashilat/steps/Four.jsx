import React, { useContext , useState } from "react";
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

export default function Four() {
  const navigate = useNavigate();
  const location = useLocation();
  const values = queryString.parse(location.search);

  const {stepFour, setStepFour} = useContext(TashilatContext)

  const [isLoading, setIsLoading] = useState(false)

  useState(() => {
    setStepFour((prev) => {
      return ({
        ...prev,
        facilities_id : parseInt(values.last_id),
      })
    })
  } , [])
  
  const sendHandler = () => {
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
    })
  }

  if (isLoading) return <Loader />
  return (
    <>
    <S4bank />
    <S4Activefacilities />
    <S4Activewarranty />
    <S4Bills />
    <S4AssetsT />
    <S4AssetsF />
        <div className=" text-left mt-2">
          <button onClick={sendHandler} className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
    </>
  );
}
