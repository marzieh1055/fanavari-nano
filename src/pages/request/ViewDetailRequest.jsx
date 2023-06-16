import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import Axios from "../../../axiosinstancs";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ExpertModal from "../../components/modal/ExpertModal";

export default function ViewDetailRequest() {
  const reqId = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [expertData, setExpertData] = useState(null)
  const [reqStatus, setReqStatus] = useState({})



  useEffect(() => {
    Axios.get(`/api/v1/request/${reqId.id}`).then(async (res) => {
      console.log(res);
      if (res.data.expert_assignment !== null && res.data.expert_assignment !== "null") {
        setExpertData(res.data.expert_assignment.expert)
      }
    })
    Axios.get(`/api/v1/get_all_status/${reqId.id}`).then(async (res) => {
      console.log(res);
      setReqStatus({
        check: res.data.check,
        assessment: res.data.assessment,
        report: res.data.report,
        commite: res.data.commite,
        credit: res.data.credit,
      })
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بررسی درخواست </p>
      </div>
      {isLoading && <Loader />}
      {
        !isLoading &&
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <p className={reqStatus.check ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              1
            </p>
            <p className={reqStatus.check ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>بررسی مدارک</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.assessment ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.assessment ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              2
            </p>
            <p className={reqStatus.assessment ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>شروع ارزیابی و جلسه با مشاور فنی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.report ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.report ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              3
            </p>
            <p className={reqStatus.report ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>گزارش ارزیابی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.commite ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.commite ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              4
            </p>
            <p className={reqStatus.commite ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>کمیته</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.credit ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.credit ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              5
            </p>
            <p className={reqStatus.credit ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>اعلام حد اعتباری</p>
          </div>
        </div>
      }


      <div className="flex pt-4">
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> مدارک اصلی </p>
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
            <div className="rounded-lg p-2 border text-gray-400 text-xs my-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
          </div>
          {
            showModal && <ExpertModal expertData={expertData ? expertData : null} close={setShowModal} />
          }
          <div className="pt-4">
            <div className="flex">
              <button onClick={() => setShowModal(true)} className="w-full  rounded-lg bg-blue-700 mt-2 ml-2  text-white p-3 font-bold text-xs">
                اطلاعات کارشناس{" "}
              </button>
              <button className="w-full  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
                لغو درخواست{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> اسناد </p>
              <p className="text-xs text- gray-400 my-1 ">
                حداکثر بارگذاری برای هر فرم 5 فایل میباشد .{" "}
              </p>
            </div>

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین
                تغییرات ثبتی شرکت{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">تصویر کارت ملی و شناسنامه اعضای هیت مدیره </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر کارت ملی و شناسنامه اعضای هیت مدیره که صاحب امضا باشند{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">گواهی دانش بنیان شرکت </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">رزومه شرکت به همراه مستندات قرارداد های مشابه </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">لیست تسهیلات و وامهای اخذ شده شرکت </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">اظهارنامه مالیاتی سال 1398/1399/1400 </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">مشخصات فنی و کاتالوگ محصول / خدمات </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                آخرین لیست بیمه شرکت به همراه فیش بیمه پرداختی در وجه تامین
                اجتماعی{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4 ">
              <p className="">
                پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs my-4">
              <p className="">
                قبوض اب و برق و قرداد اجاره محل اجرای طرح(در صورت استیجاری بودن){" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <button className="w-full  rounded-lg bg-blue-700  text-white p-3 font-bold text-xs">
              ذخیره{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
