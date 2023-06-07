import React, { useContext, useState } from "react";
import { UserDataContext } from "../contexts/UserData.Provider";

export default function UploadDoc() {
  const { userDatas } = useContext(UserDataContext)
  const [titleText, setTitleText] = useState("")
  const [type_w, settype_w] = useState("")

  const [document, setDocment] = useState({
    request_id: userDatas.id,
    type: "Warranty",
    title: titleText,
    type_w: type_w,
    file1: null,
    file2: null,
    file3: null,
    licenses: null,
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

  const oploaddoc = () => {
    const formData = new FormData();
    console.log(document);
    formData.append('user_id', document.user.id)
    formData.append('type', 'Warranty')
    formData.append('title', titleText)
    formData.append('type_w', type_w)
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
    axios.post("/api/v1/reqest", formData,
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
      const file = ev.target.files[0];
      setDocment(file);
      console.log(document)
    }
  };


  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک درخواست ضمانت نامه</p>
      </div>

      <div className="flex w-full">
        <div className="w-1/2 p-2">
          <input
            type="text"
            name="titleText"
            value={titleText}
            onChange={changeHandler}
            className="w-full my-3 p-3 bg-transparent rounded-2xl  border-b border-gray-400 "
            placeholder="اسم درخواست و توضیحات (توضیحات اختیاری است)"
          />
        </div>
        <div className="w-1/2 p-2">
          <div class="relative">
            <select name="type_w" onChange={changeHandler} class="block appearance-none w-full bg-transparent border-b border-gray-400  my-3 p-3.5 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
              <option value="" disabled selected>  نوع ضمانت نامه درخواست شده را انتخاب کنید</option>
              <option value={type_w} name="hosn-anjam-kar">حسن انجام کار </option>
              <option value={type_w} name="hosn-anjam-tahod">حسن انجام تعهدات</option>
              <option value={type_w} name="kosor-vajh">کسور وجه الضمان</option>
              <option value={type_w} name="pishpardakht">پیش پرداخت</option>
              <option value={type_w} name="tahodpardakht">تعهد پرداخت</option>
              <option value={type_w} name="shrkt-monaghese">شرکت در مناقصه</option>
              <option value={type_w} name="had-etebari">حد اعتباری</option>

            </select>
          </div>
        </div>

      </div>

      <div className="flex">
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> مدارک اصلی </p>
            </div>
            <hr className="border-dashed border-gray-300" />
            <p className="text-xs py-3">
              <span className="text-green-400"> توضیحات :</span> فایل را از حالت
              فشرده خارج کنید و هر فرم را پر کنید سپس در جای مناسب بارگذاری کنید
            </p>
            <button
              className="w-full border rounded-lg border-green-400 text-green-400 p-2 font-bold text-sm">
              بارگیری فایل مدارک اصلی
            </button>
            <hr className="border-dashed border-gray-300" />

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                اجازه نامه تکمیل شده استعلام رفتار اعتباری اشخاص حقیقی به تعداد اعضای هیئت مدیره
              </p>
              {
                document.file1 === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.file1.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }}  className="text-blue-400 text-xs " type="file" onChange={changeHandler} name="file1" />
            </div>

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                اجازه نامه تکمیل شده استعلام رفتار اعتباری اشخاص حقوقی به نام شرکت
              </p>
              {
                document.file2 === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.file2.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs" type="file" onChange={changeHandler} name="file2" />
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                کاربرگ تکمیل شده
              </p>
              {
                document.file3 === null ?
                  <label className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    <p className="text-blue-400 text-xs w-full m-1 justify-center">
                      {
                        `نام فایل : ${document.file3.name}`
                      }
                    </p>
                    <label className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} className="text-blue-400 text-xs" type="file" onChange={changeHandler} name="file3" />
            </div>
            {/* <button className="w-full  rounded-lg bg-blue-700  text-white p-3 font-bold text-xs">
              ذخیره{" "}
            </button> */}
          </div>
        </div>
        <div className="w-1/2 px-2">
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
        </div>
      </div>
    </div>
  );
}
