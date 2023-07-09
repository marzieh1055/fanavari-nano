import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

import React, { useState , useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillFolder, AiOutlineDownload } from "react-icons/ai";
import { UserDataContext } from "../../contexts/UserData.Provider";

export default function AddFacilities() {  
  const {userDatas} = useContext(UserDataContext)
  console.log(userDatas);
  const formDataFile = new FormData();
  const [file , setFile] = useState(null)
  const [titleText , setTitleText] = useState("")
  
  const textChangeHandler = (event) => {
    setTitleText(event.target.value)
  }
  
  const addFacilitiesReq = () => {
    console.log(file)
    formDataFile.append('user_id', userDatas.user.id)
    formDataFile.append('type', 'facilities')
    formDataFile.append('title', "titleText")
    formDataFile.append('file', file)
    
    axios.post("/api/v1/request", formDataFile, 
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    ).then(res => {
      console.log(res)
      if(res.data.success == true ){
        toast("درخواست با موفقیت ثبت شد")
      }
      else(
        console.log("Ddd")
        )
      }
    ).catch(err => {
      console.log(err)
      toast("خطا در ارسال درخواست")
    })
  }
  
  const notify = ()=>{
    toast("Here is the toast notification!");
}

const fileHandler = (e) => {
  // const selectFile = e.files[0];
  // setFile(selectFile)
  // fileReq = new File([selectFile] , "form.pdf" ,{ type: 'application/pdf'})
  // formDataFile.append('file' , fileReq)

    const temp = e.target.files[0];
    console.log(temp)
    setFile(temp)

    // const formData = new FormData();
    // formData.append("FactorFile", files[0]);


    // const newFile = new File([file], "form.pdf", { type: "application/pdf" })
    //   console.log(newFile);

  }
  

  return (
    <div className="px-5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <div className=" py-6">
        <p className="text-xl font-extrabold">درخواست تسهیلات </p>
      </div>
      <input
        type="text"
        onChange={textChangeHandler}
        value={titleText}
        className="w-full p-4 bg-transparent rounded-2xl border-0 border-b border-gray-400  outline-none "
        placeholder="اسم درخواست و توضیحات (توضیحات اختیاری است)"
      />
      <div className="flex p-4">
        <div className="w-1/4   ">
          <div className="bg-white rounded-xl p-4">
            <p className="text-lg font-bold">توضیحات:</p>
            <p className="text-sm font-semibold py-2 text-gray-600">
              1-فرم را دانلود کنید
            </p>
            <p className="text-sm font-semibold py-2 text-gray-600">
              2-فرم را با دقت پر کنید
            </p>
            <p className="text-sm font-semibold py-2 text-gray-600">
              3-فرم پر شده را آپلود کنید
            </p>
            <p className="text-lg font-bold">روش ها:</p>
            <p className="text-sm font-semibold py-2 text-gray-600">
              1-دانلود و آپلود به روش قدیمی
            </p>
            <p className="text-sm font-semibold py-2 text-gray-600">
              2-دانلود و آپلود به روش ما !
            </p>
          </div>
          <button className="flex bg-blue-800 text-white rounded-xl p-3 my-3 w-full justify-center items-center  ">
            <AiOutlineDownload className="text-2xl ml-2" />
            دانلود فایل{" "}
          </button>{" "}
        </div>
        <div className="w-3/4">
          <div className="flex p-6 mx-3 relative justify-center  bg-white rounded-xl ">
            <div className="flex flex-col w-full bg-c py-16  justify-center items-center rounded-xl relative border-[3px] border-gray-300 border-dashed">
              <AiFillFolder className="text-3xl mt-2 text-blue-800" />
              <p className="text-sm my-2">
                فایل پر شده را بکشید و اینجا رها کنید
              </p>
              <div className="flex w-40 justify-center items-center">
                <hr className="w-full border-gray-400" />
                <p className="px-1">یا</p>
                <hr className="w-full border-gray-400" />
              </div>
              <p className="p-3 px-12 my-3 rounded-xl text-white bg-blue-800">
                انتخاب فایل
              </p>
              <input
                type="file"
                accept="application/pdf"
                name=""
                id=""
                onChange={fileHandler}
                className="opacity-0 w-full h-full absolute top-0"
              />
            </div>
            {/* <div className="absolute rounded-b-xl w-60 h-6 -bottom-6 bg-white p-2  shadow-sm">
                <div className="rounded-full bg-c w-full h-full overflow-hidden " dir="ltr">
                    <div className="bg-blue-600 w-1/2 h-full"></div>
                </div>
            </div> */}
          </div>
        </div>
      </div>
                <button onClick={() => addFacilitiesReq({file : file , user_id : "2" , title : titleText })} style={{width: "95%" }} className="flex bg-blue-800 text-white rounded-xl p-3 my-3 w-full justify-center items-center mx-auto">ارسال</button>
    </div>
  );
}
