import React from "react";
import S5Approvals from "../../../components/requestSteps/S5Approvals";

export default function Five() {
  return (
    <>
      <S5Approvals />
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
    </>
  );
}
