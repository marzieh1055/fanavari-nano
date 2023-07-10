import React, { useState , useRef, useContext  } from "react";
import { confirmAlert } from "react-confirm-alert";
import SignatureCanvas from 'react-signature-canvas';
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Loader from "../../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
 

export default function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const values = queryString.parse(location.search);

  const {confirm, setConfirm} = useContext(TashilatContext)
  const signatureRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false)

  useState(() => {
    setConfirm((prev) => {
      return ({
        ...prev,
        facilities_id : parseInt(values.last_id),
      })
    })
  } , [])

  const handleSave = () => {
    const dataUrl = signatureRef.current.toDataURL();
    console.log(dataUrl);
    const byteString = atob(dataUrl.split(",")[1]);
    const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    console.log(blob);
    setConfirm((prev) => {
      return({
        ...prev ,
        signature : blob
      })
    })

  };

  const changeHandler = (e) => {
    setConfirm((prev) => {
      return({
        ...prev ,
        [e.target.name] : e.target.value
      })
    })
    console.log(confirm);
  }
  const sendHandler = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData();
    formData.append("facilities_id", 20)
    formData.append("name", confirm.name)
    formData.append("amount", confirm.amount)
    formData.append("title", confirm.title)
    formData.append("supply", confirm.supply)
    formData.append("signature", confirm.signature)

    const token = localStorage.getItem('token');
    const isLoggedIn = token ? true : false;

    axios.post("/api/v1/finish", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(isLoggedIn && {
            Authorization: `Bearer ${JSON.parse(token)}`
        })
      }
    })
      .then(async (res) => {
        console.log(res);
        setIsLoading(false)
        navigate("/panel/openedRequests")
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
        toast("مشکلی در ارسال اطلاعات پیش آمده لطفا تمام فیلد هارا کامل نمایید")
      })
  }

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
              <p className="my-5 text-justify	">
                اینجانب {confirm.name} مدیرعامل شرکت ضمن اعلام موافقت و قبول
                شرایط آن صندوق، درخواست مبلغ {confirm.amount}
                ریال به عنوان تسهیلات {confirm.title} به منظور تأمین
                {confirm.supply} را دارم و کلیه برگه های تكمیل شده و اسناد
                تعهدآور ارائه شده را مورد تائید قرار داده و اعلام می دارم که
                اطلاعات تكمیلی بر اساس آخرین تغییرات ثبتی مندرج در روزنامه رسمی
                ارائه شده و با امضاء این برگه مسئولیت هرگونه مغایرت یا خطا و یا
                کشف سوءاستفاده احتمالی را به عهده می گیرم. همچنین صندوق توسعه
                فناوری نانو اختیار دارد نسبت به پرداخت یا عدم پرداخت تسهیلات
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

  if (isLoading) return <Loader />
  return (
    <>
      <form
        onSubmit={submitHandler}
        action=" "
        className="tashilat-submit-form flex flex-col w-1/3 items-center mx-auto my-6 bg-white rounded-xl p-6"
      >
        <ToastContainer />
        <span className="font-semibold text-sm text-gray-600    ">
          نام و نام خانوادگی مدیر عامل
        </span>
        <input
          onChange={changeHandler}
          value={confirm.name}
          name="name"
          type="text"
          className="rounded-2xl bg-transparent  border-b border-gray-600 my-2 shadow-lg "
        />
        <span className="font-semibold text-sm text-gray-600    ">
          مبلغ درخواستی{" "}
        </span>
        <input
          onChange={changeHandler}
          value={confirm.amount}
          name="amount"
          type="text"
          className="rounded-2xl bg-transparent border-b border-gray-600 my-2 shadow-lg"
        />
        <span className="font-semibold text-sm text-gray-600    ">
          عنوان تسهیلات
        </span>
        <input
          onChange={changeHandler}
          value={confirm.title}
          name="title"
          type="text"
          className="rounded-2xl bg-transparent border-b border-gray-600 my-2 shadow-lg   "
        />
        <span className="font-semibold text-sm text-gray-600    ">
          منظور از درخواست
        </span>
        <input
          onChange={changeHandler}
          value={confirm.supply}
          name="supply"
          type="text"
          className="rounded-2xl bg-transparent  border-b border-gray-600 my-2 shadow-lg   "
        />
            <div>
      <SignatureCanvas ref={signatureRef} />
      <button onClick={handleSave} className="text-center">ذخیره امضا</button>
    </div>
        <input
          type="submit"
          className="rounded-2xl bg-blue-700 text-white p-2 text-center mt-8 shadow-lg  w-40 cursor-pointer  "
          value="ثبت اطلاعات"
          onClick={sendHandler}
        />
      </form>
    </>
  );
}
