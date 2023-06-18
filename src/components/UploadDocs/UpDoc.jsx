import React from 'react'
import UPBox from './UPBox'

export default function UpDoc({document , changeHandler, errors , showErr }) {
  return (
    <div className="w-1/2 px-2">
        <div className=" bg-white rounded-xl p-5">
          <div className=" pb-4">
            <p className=" font-bold"> اسناد </p>
            <p className="text-xs text- gray-400 my-1 ">
              حداکثر بارگذاری برای هر فرم 5 فایل میباشد .{" "}
            </p>
            <p className="text-xs gray-400 my-1 ">
              فایل ها را به صورت یکجا انتخاب کرده و وارد کنید .{" "}
            </p>
          </div>
          <UPBox 
            SelectDocument={document.licenses}
            changeHandler={changeHandler}
            InputName="licenses"
            titleText={"اجازه نامه تکمیل شده استعلام رفتار اعتباری اشخاص حقیقی به تعداد اعضای هیئت مدیره"}
            errors={errors.licenses}
            showErr={showErr.licenses}
          />
          <UPBox 
            SelectDocument={document.register_doc}
            changeHandler={changeHandler}
            InputName="register_doc"
            titleText={"مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین تغییرات ثبتی شرکت"}
            errors={errors.register_doc}
            showErr={showErr.register_doc}
          />
          <UPBox 
            SelectDocument={document.signatory}
            changeHandler={changeHandler}
            InputName="signatory"
            titleText={"تصویر مدارک هویتی اعضای هیئت مدیره  شرکت که صاحب امضا می باشند (تصویر کارت ملی و شناسنامه)"}
            errors={errors.signatory}
            showErr={showErr.signatory}
          />
          <UPBox 
            SelectDocument={document.knowledge}
            changeHandler={changeHandler}
            InputName="knowledge"
            titleText={"گواهی دانش بنیان شرکت"}
            errors={errors.knowledge}
            showErr={showErr.knowledge}
          />
          <UPBox 
            SelectDocument={document.resume}
            changeHandler={changeHandler}
            InputName="resume"
            titleText={"رزومه شرکت به همراه مستندات قرارداد های مشابه"}
            errors={errors.resume}
            showErr={showErr.resume}
          />
          <UPBox 
            SelectDocument={document.loans}
            changeHandler={changeHandler}
            InputName="loans"
            titleText={"لیست تسهیلات و وامهای اخذ شده شرکت"}
            errors={errors.loans}
            showErr={showErr.loans}
          />
          <UPBox 
            SelectDocument={document.statements}
            changeHandler={changeHandler}
            InputName="statements"
            titleText={"اظهارنامه مالیاتی سال 1398 ، 1399 و 1400 (در صورتی که فروش شرکت بیش از 8 میلیارد تومان بوده گزارش حسابرسی نیز باید ارسال شود)"}
            errors={errors.statements}
            showErr={showErr.statements}
          />
          <UPBox 
            SelectDocument={document.balances}
            changeHandler={changeHandler}
            InputName="balances"
            titleText={" تراز آزمایشی منتهی به تاریخ 30/11/1400 به همراه معین کلیه حسابها"}
            errors={errors.balances}
            showErr={showErr.balances}
          />
          <UPBox 
            SelectDocument={document.catalogs}
            changeHandler={changeHandler}
            InputName="catalogs"
            titleText={"مشخصات فنی و کاتالوگ محصول / خدمات"}
            errors={errors.catalogs}
            showErr={showErr.catalogs}
          />
          <UPBox 
            SelectDocument={document.insurances}
            changeHandler={changeHandler}
            InputName="insurances"
            titleText={"آخرین لیست بیمه شرکت به همراه فیش بیمه پرداختی در وجه تامین اجتماعی"}
            errors={errors.insurances}
            showErr={showErr.insurances}
          />
          <UPBox 
            SelectDocument={document.invoices}
            changeHandler={changeHandler}
            InputName="invoices"
            titleText={"پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح"}
            errors={errors.invoices}
            showErr={showErr.invoices}
          />
          <UPBox 
            SelectDocument={document.bills}
            changeHandler={changeHandler}
            InputName="bills"
            titleText={"قبوض اب و برق و قرداد اجاره محل اجرای طرح(در صورت استیجاری بودن)"}
            errors={errors.bills}
            showErr={showErr.bills}
          />
        </div>
    </div>
  )
}
