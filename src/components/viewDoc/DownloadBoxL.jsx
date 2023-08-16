import React from 'react'

export default function DownloadBoxL({ item , i }) {
  return (
    <div className="flex flex-col rounded-lg p-2 border text-gray-400 text-xs mt-4">
      <p className="mb-2 text-gray-500">
        {
          // console.log(i)
        }
        {
          i === "f_catalog" ? "مشخصات فنی و کاتالوگ محصول / خدمات" :
          
          i === "f_bills" ? "تصویر قرارداد اجاره یا سند مالکیت محل استقرار شرکت" : 
          i === "f_registration" ? " مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین تغییرات ثبتی شرکت/پروانه و جواز تاسیس" :
          i === "f_signatory" ? "تصویر مدارک هویتی اعضای هیئت مدیره  شرکت که صاحب امضا می باشند (تصویر کارت ملی و شناسنامه)" :
          i === "f_statement" ? "اظهارنامه مالیاتی سال 1399 , 1400 , 1401" :
          i === "f_balance" ? " اسکن گزارش معدل تمام حساب های فعال شرکت برای حداقل یک سال گذشته" :
          i === "f_insurance" ? "آخرین لیست بیمه کارکنان شرکت" :
          i === "f_knowledge" ? "مستندات قرارداد ها (فروش محصول به مشتریان) و فروش فصلی سال 1401" :
          i === "f_resume" ? "معدل حساب های فعال شرکت و گردش حساب خلاصه سال 1401" :
          i === "f_loans" ? "لیست تسهیلات و وام های اخذ شده شرکت" :
          i === "f_proforma" ? "پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح" :
          i === "f_license" ? "تصویر آخرین مجوز ها و گواهی نامه های اخذ شده توسط شرکت" :
          
          i === "license" ? "تصویر آخرین مجوز ها و گواهی نامه های اخذ شده توسط شرکت" :
          i === "registration_doc" ? " مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین تغییرات ثبتی شرکت/پروانه و جواز تاسیس" :
          i === "signatory" ? "تصویر مدارک هویتی اعضای هیئت مدیره  شرکت که صاحب امضا می باشند (تصویر کارت ملی و شناسنامه)" :
          i === "knowledge" ? "مستندات قرارداد ها (فروش محصول به مشتریان) و فروش فصلی سال 1401" :
          i === "resume" ? "معدل حساب های فعال شرکت و گردش حساب خلاصه سال 1401" :
          i === "loans" ? "لیست تسهیلات و وام های اخذ شده شرکت" :
          i === "statement" ? "اظهارنامه مالیاتی سال 1399 , 1400 , 1401" :
          i === "balance" ? " اسکن گزارش معدل تمام حساب های فعال شرکت برای حداقل یک سال گذشته" :
          i === "catalog" ? "مشخصات فنی و کاتالوگ محصول / خدمات" :
          i === "insurance" ? "آخرین لیست بیمه کارکنان شرکت" :
          i === "proforma" ? "پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح" :
          i === "bills" ? "تصویر قرارداد اجاره یا سند مالکیت محل استقرار شرکت" : ""

        }
      </p>
      {item[i].map((box , index) => {
        return(
          <div key={index}>
            <span className="ml-2">نام فایل : {box.file_name}</span>
            <a href={`https://backend.nanotf.ir/${box.path}`} className="text-blue-500 text-xs" target='_blank'>
              دانلود
            </a>
          </div>
        )
      })}
    </div>
  )
}
