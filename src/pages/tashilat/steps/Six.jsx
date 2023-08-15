import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../../contexts/UserData.Provider";
import UploadDocs from "../../../components/UploadDocs/UploadDocs";
import UpDoc from "../../../components/UploadDocs/UpDoc";
import axios from "axios";
import Loader from '../../../components/Loader/Loader'
import { Validation } from "../../../helper/validation";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import UploadDocs_f from "../../../components/UploadDocs/UploadDocs_f";


export default function Six() {
  const { userDatas } = useContext(UserDataContext)

  const values = queryString.parse(location.search);

  const [isLoading, setIsLoading] = useState(false)
  const [showNavigate, setShowNavigate] = useState(false)
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});
  const [showErr, setShowErr] = useState({});

  const [document, setDocment] = useState({
    facilities_id : parseInt(values.last_id),
    file1: null,
    file2: null,
    file3: null,
    licenses: null, // inja
    // user_id : userDatas.user.id,
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
      const token = localStorage.getItem('token');
      const isLoggedIn = token ? true : false;
      axios.post("/api/v1/fileFacilities", document ,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(isLoggedIn && {
              Authorization: `Bearer ${JSON.parse(token)}`
          })
        }
      }
      ).then(res => {
        console.log(res)
        setIsLoading(false)
        setShowNavigate(true)
        setTimeout(() => {
          navigate(`/panel/Tashilat/confirm?last_id=${parseInt(values.last_id)}`)
        } , 3000)
      }
      ).catch(err => {
        console.log(err)
        toast("خطا در ارسال درخواست")
        if (typeof(err.response.data.message) === "string") {
          toast(err.response.data.message)
        } else {
          Object.keys(err.response.data.message).map((item) => {
            toast(err.response.data.message[item][0])
          })
        }
        
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
  
  return (
    <div className="px-5">
      <div className=" py-6">
        {showNavigate ? 
          <p className="text-xl text-blue-700 font-extrabold">درحال انتقال به صفحه تایید...</p> :
          <div className="flex justify-between items-center px-2">
            <p className="text-xl font-extrabold">لطفا پس از پر کردن تمام فیلد ها روی ذخیره کلیک کنید</p>
            <button onClick={oploaddoc} className="w-1/5 h-1/2  rounded-lg bg-blue-700  text-white p-3 font-medium text-xs">
              ذخیره{" "}
            </button>
          </div>
        }
      </div>
      <ToastContainer />
      <div className="flex">
        <UploadDocs_f document={document} changeHandler={changeHandler} errors={errors} showErr={showErr} />
        <UpDoc document={document} changeHandler={docChangeFile} errors={errors} showErr={showErr} />
        {isLoading && <Loader />}
      </div>
    </div>
  );
}