import React, { useState , useEffect } from "react";
import WarrantyDocuments from "./WarrantyDocuments";
import { useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
export default function ExpertCheckRequest() {
  const reqId = useParams()
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailsdoc, setShowDetailsdoc] = useState(false);

  const handleSelectRow =()=> {
    // setSelectedItem(item);
    setShowDetailsdoc(true)
    console.log("item");
  };
  useEffect(() => {
    Axios.get(`/api/admin/check_document/${reqId.id}`).then(async (res) => {
      console.log(res);
      
    })
    // Axios.get(`/api/v1/get_all_status/${reqId.id}`).then(async (res) => {
    //   console.log(res);
    //   setReqStatus({
    //     check: res.data.check,
    //     assessment: res.data.assessment,
    //     report: res.data.report,
    //     commite: res.data.commite,
    //     credit: res.data.credit,
    //   })
    //   setIsLoading(false)
    // })
  }, [])
  if (showDetailsdoc) return <WarrantyDocuments close={setShowDetailsdoc} details={selectedItem} />

  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بررسی درخواست </p>
      </div>
      <div className=" flex  items-center">
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              1
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm" >بررسی مدارک</p>
          </div>
          <div className="w-10 px-2">
            <div className="border-t border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " >
              2
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm" >شروع ارزیابی و جلسه</p>
          </div>
          <div className="w-10 px-2">
            <div className="border-t border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              3
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm" >گزارش ارزیابی</p>
          </div>
          <div className="w-10 px-2">
            <div className="border-t border-2 border-blue-800 h-full rounded" ></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " >
              4
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm" >کمیته</p>
          </div>
          <div className="w-10 px-2">
            <div className="border-t border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " >
              5
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm" >تایید مدیر</p>
          </div>
          <div className="w-10 px-2">
            <div className="border-t border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " >
              6
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">اعلام اعتبار</p>
          </div>
        </div>
      </div>
      <div className="flex py-6">
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
            </div>
            <hr className="border-dashed border-gray-300" />

            <hr className="border-dashed border-gray-300" />
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
          </div>

          <div className=" bg-white rounded-xl p-5 mt-2">
            <div className=" pb-4">
              <p className=" font-bold">آپلود 3 فایل نهایی  </p>
            </div>
            <hr className="border-dashed border-gray-300" />

            <hr className="border-dashed border-gray-300" />
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
          </div>

        </div>
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
            </div>
            <hr className="border-dashed border-gray-300" />
            {/* <p className="text-xs text- gray-400 my-1 ">
                حداکثر بارگذاری برای هر فرم 5 فایل میباشد .{" "}
              </p> */}

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>

          </div>
          <div className="pt-4">

            <button className="w-1/2  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
            گزارش ناقصی در مدارک{" "}
            </button>
            <button onClick={() => handleSelectRow()} className="w-1/2  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
              مشاهده مدارک{" "}
            </button>
            <button className="w-full  rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">
            ثبت{" "}
            </button>
          </div>

          {/* <div className="flex">
              <button className="w-full  rounded-lg bg-blue-700   text-white p-3 font-bold text-xs">
                ارسال فایل 1{" "}
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
}
