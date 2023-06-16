import React from "react";
import { FcDocument } from "react-icons/fc";

export default function SiteGuide() {
  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">راهنمای سایت </p>
      </div>
      <FcDocument className=" text-4xl" />
      <div className="">
        <p className="font-bold text-lg my-3">
          شرایط و قوانین استفاده از سرویس‌ها و خدمات دیجی‌کالا
        </p>
        <p className="text-gray-600 justify-items-stretch">
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

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>قوانین عمومی</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 justify-items-stretch">
              توجه داشته باشید کلیه اصول و رویه‏‌های دیجی‌کالا منطبق با قوانین
              جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق
              مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با
              کاربر است. در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های
              دیجی‌کالا تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و به روز
              رسانی می شود و شما توافق می‏‌کنید که استفاده مستمر شما از سایت به
              معنی پذیرش هرگونه تغییر است.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>راهنمای درخواست ضمانتنامه</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 justify-items-stretch"></p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>راهنمای درخواست تسهیلات</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 justify-items-stretch"></p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
          >
            <span>راهنمای کار با سایت </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 justify-items-stretch"></p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
          >
            <span>سیاست‏‌های رعایت حریم شخصی</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 justify-items-stretch"></p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-6">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-6"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-6"
          >
            <span>پرسش و پاسخ </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-6"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-6"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 justify-items-stretch"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
