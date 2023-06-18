import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../contexts/UserData.Provider";
import UploadDocs from "../components/UploadDocs/UploadDocs";
import UpDoc from "../components/UploadDocs/UpDoc";
import axios from "axios";
import { Validation } from "../helper/validation";

export default function UploadDoc() {
  const { userDatas } = useContext(UserDataContext)
  const [type_w, settype_w] = useState("")

  const [errors, setErrors] = useState({});
  const [showErr, setShowErr] = useState({});

  const [document, setDocment] = useState({
    request_id: 6,
    type: "Warranty",
    title: "",
    type_w: type_w,
    file1: null,
    file2: null,
    file3: null,
    licenses: null, // inja
    register_doc: null,
    signatory: null,
    knowledge: null,
    resume: null,
    loans: null,
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
      const formData = new FormData();
      console.log(document);
      formData.append('user_id', document.request_id)
      formData.append('type', 'Warranty')
      formData.append('title', document.title)
      formData.append('type_w', "prepayment")
      formData.append('file1', document.file1)
      formData.append('file2', document.file2)
      formData.append('file3', document.file3)
      formData.append('licenses', document.licenses)
      formData.append('register_doc', document.register_doc)
      formData.append('signatory', document.signatory)
      formData.append('knowledge', document.knowledge)
      formData.append('resume', document.resume)
      formData.append('loans', document.loans)
      formData.append('statements', document.statements)
      formData.append('balances', document.balances)
      formData.append('catalogs', document.catalogs)
      formData.append('insurances', document.insurances)
      formData.append('invoices', document.invoices)
      formData.append('bills', document.bills)
  
      axios.post("/api/v1/request", formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then(res => {
        console.log(formData)
        console.log(res)
        if (res.data.success === true) {
          // toast("درخواست با موفقیت ثبت شد")
        }
        else (
          console.log("Ddd")
        )
      }
      ).catch(err => {
        console.log(err)
        // toast("خطا در ارسال درخواست")
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
      filesList.push(filesEvent[i])
    }
    setDocment({
      ...document,
      [e.target.name]: filesList
    });
    console.log(document);
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
        <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک درخواست ضمانت نامه</p>
      </div>

      <div style={{display: "flex" , alignItems: "center" }} className="flex w-full">
        <div className="w-1/2 p-2">
          <input
            type="text"
            name="title"
            value={document.title}
            onChange={changeHandler}
            className="w-full my-3 p-3 bg-transparent rounded-2xl  border-b border-gray-400 "
            placeholder="اسم درخواست و توضیحات (توضیحات اختیاری است)"
            onFocus={focusHandler}
          />
          {errors.title && showErr.title && <span style={{ color: '#e88f19' }}>{errors.title}</span>}
        </div>
        <div  className="w-1/2 p-2">
          <div class="relative">
            <select value={document.type_w} onFocus={focusHandler} onChange={handleChange} class="block appearance-none w-full bg-transparent border-b border-gray-400  my-3 p-3.5 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
              <option value="" disabled selected>  نوع ضمانت نامه درخواست شده را انتخاب کنید</option>
              <option value="hosn-anjam-kar">حسن انجام کار </option>
              <option value="hosn-anjam-tahod">حسن انجام تعهدات</option>
              <option value="kosor-vajh">کسور وجه الضمان</option>
              <option value="pishpardakht">پیش پرداخت</option>
              <option value="tahodpardakht">تعهد پرداخت</option>
              <option value="shrkt-monaghese">شرکت در مناقصه</option>
              <option value="had-etebari">حد اعتباری</option>

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
      </div>
    </div>
  );
}
