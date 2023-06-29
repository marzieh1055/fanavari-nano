import React from "react";
import S5Approvals from "../../../components/requestSteps/S5Approvals";
import S5contracts from "../../../components/requestSteps/S5contracts";
import S5pledges from "../../../components/requestSteps/S5pledges";
import S5estates from "../../../components/requestSteps/S5estates";

export default function Five() {
  return (
    <>
      <S5Approvals />
      <S5contracts />
      <S5pledges />
      <S5estates />
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
    </>
  );
}
