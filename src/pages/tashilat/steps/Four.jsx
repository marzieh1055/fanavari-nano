import React, { useState } from "react";
import S4bank from "../../../components/requestSteps/S4bank";
import S4Activefacilities from "../../../components/requestSteps/S4Activefacilities";
import S4Activewarranty from "../../../components/requestSteps/S4Activewarranty";
import S4Bills from "../../../components/requestSteps/S4Bills";
import S4AssetsT from "../../../components/requestSteps/S4AssetsT";
import S4AssetsF from "../../../components/requestSteps/S4AssetsF";

export default function Four() {

  return (
    <>
    <S4bank />
    <S4Activefacilities />
    <S4Activewarranty />
    <S4Bills />
    <S4AssetsT />
    <S4AssetsF />
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
    </>
  );
}
