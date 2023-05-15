import React from "react";
import { FcDocument } from "react-icons/fc";
import { MdPayment } from "react-icons/md";

export default function Guarantee() {
  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">راهنمای سایت </p>
      </div>
      <FcDocument className=" text-4xl" />
      <div className="">
        <p className="font-bold text-lg my-3">
          شرایط و قوانین استفاده از سرویس‌ها و خدمات نانوفان{" "}
        </p>
        <p className="text-gray-600 justify-items-stretch py-2">
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و
          برنامه‌‏های کاربردی دیجی‌کالا به دقت ملاحظه فرمایید.ورود کاربران به
          وب‏‌سایت دیجی‌کالا هنگام استفاده از پروفایل شخصی، طرح‏‌های تشویقی،
          ویدئوهای رسانه تصویری دیجی‌کالا و سایر خدمات ارائه شده توسط دیجی‌کالا
          به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه استفاده از
          سرویس‌‏ها و خدمات دیجی‌کالا است. توجه داشته باشید که ثبت سفارش نیز در
          هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین دیجی‌کالا از سوی
          کاربر است. لازم به ذکر است شرایط و قوانین مندرج، جایگزین کلیه
          توافق‏‌های قبلی محسوب می‏‌شود.
        </p>
      </div>
      <div className="border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله اول : </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          توجه داشته باشید کلیه اصول و رویه‏‌های دیجی‌کالا منطبق با قوانین
          جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف
          کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است.
          در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های دیجی‌کالا تغییراتی
          در آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می شود و شما
          توافق می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر
          است.
        </p>
      </div>
      <div className=" border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله دوم : </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          توجه داشته باشید کلیه اصول و رویه‏‌های دیجی‌کالا منطبق با قوانین
          جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف
          کننده است و متعاقبا کاربر نیز موظف به رعایت .
        </p>
      </div>
      <div className=" border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله سوم </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          توجه داشته باشید کلیه اصول و رویه‏‌های دیجی‌کالا منطبق با قوانین
          جمهوری اسلامی ایران، قانون
        </p>
      </div>
      <div className="border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله چهارم </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          توجه داشته باشید کلیه اصول و رویه‏‌های دیجی‌کالا منطبق با قوانین
          جمهوری اسلامی ایران، قانون
        </p>
      </div>
      <button className="flex bg-blue-800 text-white rounded-xl p-3 my-3 w-full justify-center items-center  ">
        <MdPayment className="text-2xl ml-2"/>

      انتقال به درگاه بانکی
      </button>
    </div>
  );
}
