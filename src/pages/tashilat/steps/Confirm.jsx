import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";

export default function Confirm() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    price: "",
    title: "",
    tamin: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();

    confirmAlert({
      overlayClassName: "tashilat-submit-form",
      customUI: ({ onClose }) => {
        return (
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center bg-gray-600 bg-opacity-50">
            <div
              dir="rtl"
              className="  mx-auto w-1/2  first-letter: p-4 bg-gray-700 rounded-2xl text-white"
            >
              <h1 className="text-3xl text-yellow-300 font-medium">
                درخواست تسهیلات{" "}
              </h1>
              <p className="my-5">
                اینجانب {userInfo.name} مدیرعامل شرکت ضمن اعالم موافقت و قبول
                شرایط آن صندوق، درخواست مبلغ {userInfo.price}
                ریال به عنوان تسهیالت {userInfo.title} به منظور تأمین
                {userInfo.tamin} را دارم و کلیه برگه های تكمیل شده و اسناد
                تعهدآور ارائه شده را مورد تائید قرار داده و اعالم میدارم که
                اطالعات تكمیلی بر اساس آخرین تغییرات ثبتی مندرج در روزنامه رسمی
                ارائه شده و با امضاء این برگه مسئولیت هرگونه مغایرت یا خطا و یا
                کشف سوءاستفاده احتمالی را به عهده میگیرم. همچنین صندوق توسعه
                فناوری نانو اختیار دارد نسبت به پرداخت یا عدم پرداخت تسهیالت
                مذکور تصمیم گیری نماید.{" "}
              </p>
              <button
                onClick={() => {
                  onClose();
                }}
                className="bg-purple-400 p-2 rounded ml-2"
              >
                امضاء
              </button>
              <button onClick={onClose} className=" bg-[#6272A4] p-2 rounded">
                انصراف
              </button>
            </div>
          </div>
        );
      },
    });
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        action=" "
        className="tashilat-submit-form flex flex-col w-1/3 items-center mx-auto my-6 bg-white rounded-xl p-6"
      >
        <span className="font-semibold text-sm text-gray-600    ">
          نام و نام خانوادگی مدیر عامل
        </span>
        <input
          onChange={(e) => {
            setUserInfo((perv) => ({
              ...perv,
              name: e.target.value,
            }));
          }}
          value={userInfo.name}
          type="text"
          className="rounded-2xl bg-transparent border-0 border-b border-gray-600 my-2 shadow-lg   "
        />
        <span className="font-semibold text-sm text-gray-600    ">
          مبلغ درخواستی{" "}
        </span>
        <input
          onChange={(e) => {
            setUserInfo((perv) => ({
              ...perv,
              price: e.target.value,
            }));
          }}
          value={userInfo.price}
          type="number"
          className="rounded-2xl bg-transparent border-0 border-b border-gray-600 my-2 shadow-lg   "
        />
        <span className="font-semibold text-sm text-gray-600    ">
          عنوان تسهیلات
        </span>
        <input
          onChange={(e) => {
            setUserInfo((perv) => ({
              ...perv,
              title: e.target.value,
            }));
          }}
          value={userInfo.title}
          type="text"
          className="rounded-2xl bg-transparent border-0 border-b border-gray-600 my-2 shadow-lg   "
        />
        <span className="font-semibold text-sm text-gray-600    ">
          منظور از درخواست
        </span>
        <input
          onChange={(e) => {
            setUserInfo((perv) => ({
              ...perv,
              tamin: e.target.value,
            }));
          }}
          value={userInfo.tamin}
          type="text"
          className="rounded-2xl bg-transparent border-0 border-b border-gray-600 my-2 shadow-lg   "
        />
        <input
          type="submit"
          className="rounded-2xl bg-blue-700 text-white p-2 text-center mt-8 shadow-lg  w-40 cursor-pointer  "
          value="ثبت اطلاعات"
        />
      </form>
    </>
  );
}
