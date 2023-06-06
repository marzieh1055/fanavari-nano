import React, { useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
export default function AllNotifs() {
  const [allnotif, setAllnotif] = useState(null);

  useEffect(() => {
    getAllnotification()
  }, []);

  const getAllnotification = () => {
    Axios.get("/api/v1/get_all_notification").then(async res => {
      console.log(res.data)
      setAllnotif(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-xl font-extrabold">مشاهده کاربران</p>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        <table className="w-full ">
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3 rounded-r-xl ">فرستنده </th>
              <th className="bg-white p-3 ">توضیحات </th>
              <th className="bg-white p-3 ">تاریخ ارسال</th>
            </tr>
          </thead>
          <tbody>
            {allnotif && allnotif.map((notif) => {
              return (
                <tr
                  key={notif.id}
                  id={notif.id}
                >                  
                <td className="p-4 text-xs text-gray-400 font-bold">کارشناس 2 </td>

                  <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.message}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold">{onlyDateConversion(notif.created_at)} </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="flex justify-between py-4 text-gray-600 items-center">
        <div className="">نمایش 21-31 از 80 مورد</div>
        <div className="">
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {"<"}
          </button>
          <button className="text-gray-800 text-lg font-bold mx-2">6</button>
          <button className="text-gray-800 text-lg font-bold mx-2">5</button>
          <button className="text-gray-800 text-lg font-bold mx-2">4</button>
          <button className="text-gray-800 text-lg font-bold mx-2">3</button>
          <button className="text-gray-800 text-lg font-bold mx-2">2</button>
          <button className="text-gray-800 text-lg font-bold mx-2">1</button>
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {" "}
            {">"}{" "}
          </button>
        </div>
        <div className="flex">
          <select
            dir="ltr"
            name=""
            id=""
            className="rounded outline-none w-20 text-gray-800 border ml-4"
          >
            <option value="10">10</option>
            <option value="10">15</option>
            <option value="10">20</option>
          </select>
          <p>تعداد کاربر در هر صفحه</p>
        </div>
      </div>
    </div>
  );
}
