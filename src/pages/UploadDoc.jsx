import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../contexts/UserData.Provider";
import UploadDocs from "../components/UploadDocs/UploadDocs";
import UpDoc from "../components/UploadDocs/UpDoc";
import axios from "axios";
import Loader from '../components/Loader/Loader'
import { Validation } from "../helper/validation";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export default function UploadDoc() {
  const { userDatas } = useContext(UserDataContext)

  const [type_w, settype_w] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showNavigate, setShowNavigate] = useState(false)
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});
  const [showErr, setShowErr] = useState({});

  const [document, setDocment] = useState({
    // request_id: 6,
    type: "Warranty",
    title: "",
    type_w: type_w,
    file1: null,
    file2: null,
    file3: null,
    licenses: null, // inja
    user_id : 6,
    register_doc: null,
    signatory: null,
    knowledge: null,
    resume: null,
    loans: null, // ta inja felan mish
    statements: null,
    balances: null,
    catalogs: null,
    insurances: null,
    invoices: null,
    bills: null,
  })
  
  useEffect(() => {
    setErrors(Validation(document , "upDoc"))
    console.log(errors);
  } , [ document ])

  const oploaddoc = () => {
    const showE = {}
    Object.keys(document).map((item) => {

      if (document[item] === null) {
        console.log(item);
        showE[item] = true
        console.log(showErr);
      }
    })
    setShowErr(showE)
    
    if (!Object.keys(errors).length) {


      setIsLoading(true)
      // const formData = new FormData();
      // Object.keys(document).map(item => {
      //   console.log(item);
      //   if (item === "type" || item === "title" | item === "type_w" || item === "user_id" || item === "type")
      // })
      axios.post("/api/v1/request", document ,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then(res => {
        console.log(res)
        setIsLoading(false)
        toast("درخواست با موفقیت ثبت شد")
        setShowNavigate(true)
        setTimeout(() => {
          navigate("/panel/openedRequests")
        } , 3000)
      }
      ).catch(err => {
        console.log(err)
        toast("خطا در ارسال درخواست")
        setIsLoading(false)
      })
    }
  }
  const changeHandler = (ev) => {
    if (ev.target.type === "radio") {
      setDocment({
        ...document,
        [ev.target.name]: ev.target.value,
      });
    } else if (ev.target.type === "text") {
      setDocment({
        ...document,
        [ev.target.name]: ev.target.value,
      });
    } else if (ev.target.type === "file") {
      setDocment({
        ...document , [ev.target.name] : ev.target.files[0]
      });
    }
    console.log(document)
  };

  const handleChange = (e) => {
    setDocment({...document , type_w : e.target.value})
  }

  const docChangeFile = (e) => {
    const filesEvent = e.target.files;
    const filesList = []
    for (let i = 0 ; i < filesEvent.length ; i++) {
      filesList.push({file : filesEvent[i]})
    }
    setDocment({
      ...document,
      [e.target.name]: filesList
    });
    console.log(document);
    // setDocment({
    //   ...document , [e.target.name] : e.target.files[0]
    // });
  }
  
  const focusHandler = e => {
      if (e.target.localName === "select") {
        setShowErr({ ...showErr, type_w : true })  
      } else if (e.target.type === "text") {
        setShowErr({ ...showErr, [e.target.name]: true })
      }
      console.log(showErr);
      console.log(errors);
  }
  return (
    <div className="px-5">
      <div className=" py-6">
        {showNavigate ? 
          <p className="text-xl text-blue-700 font-extrabold">درحال انتقال به درخواست های جاری...</p> :
          <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک درخواست ضمانت نامه</p>
        }
      </div>
      <ToastContainer />
      <div style={{display: "flex" , alignItems: "center" }} className="flex w-full">
        <div className="w-1/2 p-2">
          <input
            type="text"
            name="title"
            value={document.title}
            onChange={changeHandler}
            className="w-full my-3 p-3 bg-transparent rounded-2xl  border-b border-gray-400 "
            placeholder="اسم درخواست و توضیحات (توضیحات الزامی است)"
            onFocus={focusHandler}
          />
          {errors.title && showErr.title && <span style={{ color: '#e88f19' }}>{errors.title}</span>}
        </div>
        <div  className="w-1/2 p-2">
          <div class="relative">
          {/* 'job','commitments','deduction','prepayment','commitment_pay','tender_offer','credit' */}
            <select value={document.type_w} onFocus={focusHandler} onChange={handleChange} class="block appearance-none w-full bg-transparent border-b border-gray-400  my-3 p-3.5 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
              <option value="" disabled selected>  نوع ضمانت نامه درخواست شده را انتخاب کنید</option>
              <option value="job">حسن انجام کار </option>
              <option value="commitments">حسن انجام تعهدات</option>
              <option value="deduction">کسور وجه الضمان</option>
              <option value="prepayment">پیش پرداخت</option>
              <option value="commitment_pay">تعهد پرداخت</option>
              <option value="tender_offer">شرکت در مناقصه</option>
              <option value="credit">حد اعتباری</option>

            </select>
            {errors.type_w && showErr.type_w && <span style={{ color: '#e88f19' }}>{errors.type_w}</span>}
          </div>
        </div>
        <button onClick={oploaddoc} className="w-1/5 h-1/2  rounded-lg bg-blue-700  text-white p-3 font-bold text-xs">
          ذخیره{" "}
        </button>
      </div>
    
      <div className="flex">
        <UploadDocs document={document} changeHandler={changeHandler} errors={errors} showErr={showErr} />
        <UpDoc document={document} changeHandler={docChangeFile} errors={errors} showErr={showErr} />
        {isLoading && <Loader />}
      </div>
    </div>
  );
}
