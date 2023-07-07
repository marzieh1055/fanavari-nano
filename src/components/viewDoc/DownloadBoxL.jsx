import React from 'react'

export default function DownloadBoxL({ item , i }) {
  return (
    <div className="flex flex-col rounded-lg p-2 border text-gray-400 text-xs mt-4">
      <p className="mb-2 text-gray-500">
        {
          i === "license" ? "اجازه نامه تکمیل شده استعلام رفتار اعتباری اشخاص حقیقی به تعداد اعضای هیئت مدیره" :
          i === "registration_doc" ? "مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین تغییرات ثبتی شرکت" :
          i === "signatory" ? "تصویر مدارک هویتی اعضای هیئت مدیره  شرکت که صاحب امضا می باشند (تصویر کارت ملی و شناسنامه)" :
          i === "knowledge" ? "گواهی دانش بنیان شرکت" :
          i === "resume" ? "رزومه شرکت به همراه مستندات قرارداد های مشابه" :
          i === "loans" ? "لیست تسهیلات و وامهای اخذ شده شرکت" :
          i === "statement" ? "اظهارنامه مالیاتی سال 1398 ، 1399 و 1400 (در صورتی که فروش شرکت بیش از 8 میلیارد تومان بوده گزارش حسابرسی نیز باید ارسال شود)" :
          i === "balance" ? " تراز آزمایشی منتهی به تاریخ 30/11/1400 به همراه معین کلیه حسابها" :
          i === "catalog" ? "مشخصات فنی و کاتالوگ محصول / خدمات" :
          i === "insurance" ? "آخرین لیست بیمه شرکت به همراه فیش بیمه پرداختی در وجه تامین اجتماعی" :
          i === "invoices" ? "پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح" :
          i === "bills" ? "قبوض اب و برق و قرداد اجاره محل اجرای طرح(در صورت استیجاری بودن)" : ""
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
