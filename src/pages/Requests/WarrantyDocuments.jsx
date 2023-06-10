import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";

const WarrantyDocuments = () => {
  const reqId = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    Axios.get(`/api/v1/request/${reqId.id}`).then(async (res) => {
      console.log(res.data);

    })
  } , [])
  return (
    <form className="bg-white rounded-3xl mt-3 p-3">
      <div style={{display:"flex" , justifyContent:"space-between"}}>
        <p className="text-xl font-bold p-4 py-6">اطلاعات کاربر</p>
         <span onClick={() => navigate(-1)} className="text-xl p-4 py-6" style={{fontSize:"15px" , cursor:"pointer"}}>بازگشت</span>
      </div>
      <hr className="border-dashed" />

      <div className="px-5">
      <div className="flex">
        <div className="w-1/2 px-2">
          <div className=" bg-c-4 rounded-xl p-5 mt-5">
            <div className=" pb-4">
              <p className=" font-bold"> مدارک اصلی </p>
            </div>
            <hr className="border-dashed border-gray-300" />
            <p className="text-xs py-3">
              <span className="text-green-400"> توضیحات :</span> فایل را از حالت
              فشرده خارج کنید و هر فرم را پر کنید سپس در جای مناست بارگذاری کنید
            </p>
            <button className="w-full border rounded-lg border-green-400 text-green-400 p-2 font-bold text-sm">
              بارگیری فایل مدارک اصلی
            </button>
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
        </div>
        <div className="w-1/2 px-2">
          <div className=" bg-c-4 rounded-xl p-5 mt-5">
          <div className=" pb-4">
              <p className=" font-bold"> اسناد </p>
            </div>
              <hr className="border-dashed border-gray-300" />

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
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default WarrantyDocuments;
