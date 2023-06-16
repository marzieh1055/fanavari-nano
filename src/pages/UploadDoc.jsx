import React, { useContext, useState } from "react";
import { UserDataContext } from "../contexts/UserData.Provider";
import UploadDocs from "../components/UploadDocs/UploadDocs";
import UpDoc from "../components/UploadDocs/UpDoc";
import axios from "axios";

export default function UploadDoc() {
  const { userDatas } = useContext(UserDataContext)
  const [type_w, settype_w] = useState("")

  const [document, setDocment] = useState({
    request_id: 6,
    type: "Warranty",
    title: "",
    type_w: type_w,
    file1: null,
    file2: null,
    file3: null,
    licenses: [], // inja
    // register_doc: [],
    // signatory: [],
    // knowledge: [],
    // resume: [],
    // loans: [],
    // statements: [],
    // balances: [],
    // catalogs: [],
    // insurances: [],
    // invoices: [],
    // bills: [],
  })

  const oploaddoc = () => {
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
    // formData.append('register_doc', document.register_doc)
    // formData.append('signatory', document.signatory)
    // formData.append('knowledge', document.knowledge)
    // formData.append('resume', document.resume)
    // formData.append('loans', document.loans)
    // formData.append('statements', document.statements)
    // formData.append('balances', document.balances)
    // formData.append('catalogs', document.catalogs)
    // formData.append('insurances', document.insurances)
    // formData.append('invoices', document.invoices)
    // formData.append('bills', document.bills)
    axios.post("/api/v1/request", formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then(res => {
      console.log(formData)
      console.log(res)
      if (res.data.success == true) {
        toast("درخواست با موفقیت ثبت شد")
      }
      else (
        console.log("Ddd")
      )
    }
    ).catch(err => {
      console.log(err)
      toast("خطا در ارسال درخواست")
    })
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
    const keyy = e.target.name
    setDocment(prevState => ({
      ...prevState,
      [e.target.name]: [e.target.files[0] , e.target.files[0]]
    }));
    console.log(document);
  }

  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک درخواست ضمانت نامه</p>
      </div>

      <div className="flex w-full">
        <div className="w-1/2 p-2">
          <input
            type="text"
            name="title"
            value={document.title}
            onChange={changeHandler}
            className="w-full my-3 p-3 bg-transparent rounded-2xl  border-b border-gray-400 "
            placeholder="اسم درخواست و توضیحات (توضیحات اختیاری است)"
          />
        </div>
        <div className="w-1/2 p-2">
          <div class="relative">
            <select value={document.type_w} onChange={handleChange} class="block appearance-none w-full bg-transparent border-b border-gray-400  my-3 p-3.5 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
              <option value="" disabled selected>  نوع ضمانت نامه درخواست شده را انتخاب کنید</option>
              <option value="hosn-anjam-kar">حسن انجام کار </option>
              <option value="hosn-anjam-tahod">حسن انجام تعهدات</option>
              <option value="kosor-vajh">کسور وجه الضمان</option>
              <option value="pishpardakht">پیش پرداخت</option>
              <option value="tahodpardakht">تعهد پرداخت</option>
              <option value="shrkt-monaghese">شرکت در مناقصه</option>
              <option value="had-etebari">حد اعتباری</option>

            </select>
          </div>
        </div>

      </div>
    
      <div className="flex">
        <UploadDocs document={document} changeHandler={changeHandler} />
        <UpDoc document={document} changeHandler={docChangeFile} />
        {/* <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> اسناد </p>
              <p className="text-xs text- gray-400 my-1 ">
                حداکثر بارگذاری برای هر فرم 5 فایل میباشد .{" "}
              </p>
            </div>

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوزها و گواهی نامه های اخذ شده توسط شرکت{" "}
              </p>
              {
                document.licenses === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.licenses.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs" type="file" onChange={changeHandler} name="licenses" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین
                تغییرات ثبتی شرکت{" "}
              </p>
              {
                document.register_doc === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.register_doc.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs" type="file" onChange={changeHandler} name="register_doc" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">•	تصویر مدارک هویتی اعضای هیئت مدیره  شرکت که صاحب امضا می باشند (تصویر کارت ملی و شناسنامه) </p>
              {
                document.signatory === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.signatory.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs" type="file" onChange={changeHandler} name="signatory" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">گواهی دانش بنیان شرکت </p>
              {
                document.knowledge === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.knowledge.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="knowledge" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">رزومه شرکت به همراه مستندات قرارداد های مشابه </p>
              {
                document.resume === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.resume.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="resume" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">لیست تسهیلات و وامهای اخذ شده شرکت </p>
              {
                document.loans === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.loans.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="loans" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">اظهارنامه مالیاتی سال 1398 ، 1399 و 1400 (در صورتی که فروش شرکت بیش از 8 میلیارد تومان بوده گزارش حسابرسی نیز باید ارسال شود)</p>
              {
                document.statements === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.statements.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="statements" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className=""> تراز آزمایشی منتهی به تاریخ 30/11/1400 به همراه معین کلیه حسابها</p>
              {
                document.balances === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.balances.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="balances" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">مشخصات فنی و کاتالوگ محصول / خدمات </p>
              {
                document.catalogs === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.catalogs.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="catalogs" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                آخرین لیست بیمه شرکت به همراه فیش بیمه پرداختی در وجه تامین
                اجتماعی{" "}
              </p>
              {
                document.insurances === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.insurances.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="insurances" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4 ">
              <p className="">
                پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح{" "}
              </p>
              {
                document.invoices === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.invoices.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="invoices" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs my-4">
              <p className="">
                قبوض اب و برق و قرداد اجاره محل اجرای طرح(در صورت استیجاری بودن){" "}
              </p>
              {
                document.bills === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.bills.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs"
                type="file" onChange={changeHandler} name="bills" />
            </div>
            <button className="w-full  rounded-lg bg-blue-700  text-white p-3 font-bold text-xs">
              ذخیره{" "}
            </button>
          </div>
        </div> */}
      </div>
        <button onClick={oploaddoc} className="w-full  rounded-lg bg-blue-700  text-white p-3 font-bold text-xs">
          ذخیره{" "}
        </button>
    </div>
  );
}
