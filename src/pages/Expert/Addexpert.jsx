import React, { useState, useEffect, useContext } from "react";
import Axios from '../../../axiosinstancs'
import { Validation } from "../../helper/validation";
import { UserDataContext } from "../../contexts/UserData.Provider";

const Addexpert = () => {
  const [bcInput, setBcInput] = useState(true)
  const [showPass, setShowPass] = useState(false);
  const [showComPass, setComShowPass] = useState(false);

  const showPassHandler = (e) => {
    e.preventDefault();
    setShowPass(!showPass)
  }
  const showComPassHandler = (e) => {
    e.preventDefault();
    setComShowPass(!showComPass)
  }
  const [userDatas, setUserData] = useState({
    name: "",
    family: "",
    national_code: "", //10
    phone: "", //11
    email: "",
    password: "",
    father_name: "",
    number_certificate: "",
    birth_day: "",
    place_issue: "",
    gender: "",
    marital: "",
    residential: "",
    education: "",
    study: "",
    job: "",
    address: "",
    postal_code: "",
    home_number: "", //11
    nationality: "",
    password_confirmation: "",
    // series_certificate:"" ,
    // work_address: "",
    // work_phone:"" ,
    // work_postal_code:"" ,
  })

  const [errors, setErrors] = useState({});
  const [showErr, setShowErr] = useState({});

  useEffect(() => {
    setErrors(Validation(userDatas, 'addExpert'))
  }, [userDatas])


  const changeHandler = (ev) => {
    if (ev.target.type === "radio") {
      setUserData({
        ...userDatas, [ev.target.name]: ev.target.value
      })
    } else if (ev.target.type === "text") {
      setUserData({
        ...userDatas, [ev.target.name]: ev.target.value
      })
    }
    console.log(userDatas);
  }

  const addHandler = (event) => {
    event.preventDefault()
    Axios.post("/api/admin/expert", userDatas).then(async (res) => {
      console.log(res);
    })
  }
  return (
    <form className="bg-white rounded-3xl mt-3 p-3">
      <p className="text-xl font-bold p-4 py-6">اضافه کردن کارشناس</p>
      <hr className="border-dashed" />

      <div className="flex flex-wrap">
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام</p>
          <input
            type="text"
            placeholder="امیر حسین"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.name}
            name="name"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام خانوادگی</p>
          <input
            type="text"
            placeholder="عابدی"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.family}
            name="family"
          />
        </div>

        <div className="box-input mt-3 w-96 border rounded-2xl mx-3 p-2 ">
          <p className="font-bold text-sm">کد ملی</p>
          <input
            type="text"
            placeholder="1234567890"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.national_code}
            name="national_code"
          />
          {/* {errors.national_code && <span style={{ color: '#e88f19' }}>{errors.national_code}</span>} */}
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">شماره تلفن</p>
          <input
            type="text"
            placeholder="09123456789"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.phone}
            name="phone"
          />
        </div>
        {/* <div className="box-input mt-3 w-96 border rounded-2xl mx-3 p-2">
          <p className="font-bold text-sm">رمز عبور</p>
          <input
            type="text"
            placeholder="09110911aa"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.password}
            name="password"
          />
        </div> */}
        <div className="box-input mt-3 w-96 border rounded-2xl mx-3 p-2">
          <p className="font-bold text-sm"> رمز عبور</p>
          <div className="relative">
            <input
              onChange={changeHandler}
              value={userDatas.password}
              name='password'
              className="w-full border-none outline-none placeholder:text-sm focus:border-none "
              type={showPass ? "text" : "password"}
            />
            <button onClick={showPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
              <img className="w-full h-full" src={showPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
            </button>
          </div>
          {errors.password && showErr.password && <span style={{ color: '#e88f19' }}>{errors.password}</span>}

        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تایید رمز عبور</p>
          <div className="relative">

            <input onChange={changeHandler} value={userDatas.password_confirmation} name='password_confirmation' id="form-2" className="w-full border-none outline-none placeholder:text-sm" type={showComPass ? "text" : "password"} />
            <button onClick={showComPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
              <img className="w-full h-full" src={showComPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
            </button>
          </div>

          {errors.password_confirmation && showErr.password_confirmation && <span style={{ color: '#e88f19' }}>{errors.password_confirmation}</span>}
          {/* <input
            type="text"
            placeholder="09110911aa"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.password_confirmation}
            name="password_confirmation"
          /> */}
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام پدر</p>
          <input
            type="text"
            placeholder="حسین"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.father_name}
            name="father_name"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">شماره شناسنامه</p>
          <input
            type="text"
            placeholder=""
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.number_certificate}
            name="number_certificate"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تاریخ تولد</p>
          <input
            type="text"
            placeholder="00/02/14"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.birth_day}
            name="birth_day"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">محل صدور</p>
          <input
            type="text"
            placeholder="تهران"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.place_issue}
            name="place_issue"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">پست الکترونیکی</p>
          <input
            type="text"
            placeholder="amir@mail.com"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.emali}
            name="email"
          />
        </div>
        {/* <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">سریال شناسنامه</p>
          <input
            type="text"
            placeholder=""
            className="outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.series_certificate}
            name="series_certificate"
          />
        </div> */}
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">کشور</p>
          <input
            type="text"
            placeholder=""
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.nationality}
            name="nationality"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">میزان تحصیلات</p>
          <input
            type="text"
            placeholder="لیسانس"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.education}
            name="education"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">رشته تحصیلی</p>
          <input
            type="text"
            placeholder="مهندسی برق"
            className="w-full border-none outline-none placeholder:text-sm"
            onChange={changeHandler}
            value={userDatas.study}
            name="study"
          />
        </div>
        <div className="flex flex-wrap">
          <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
            <p className="font-bold text-sm">شغل</p>
            <input
              type="text"
              placeholder="برنامه نویس وب"
              className="w-full border-none outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.job}
              name="job"
            />
          </div>

          <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
            <p className="font-bold text-sm">آدرس</p>
            <input
              type="text"
              placeholder="تهران"
              className="w-full border-none outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.address}
              name="address"
            />
          </div>
          <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
            <p className="font-bold text-sm">کد پستی</p>
            <input
              type="text"
              placeholder=""
              className="w-full border-none outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.postal_code}
              name="postal_code"
            />
          </div>
          <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
            <p className="font-bold text-sm">تلفن ثابت</p>
            <input
              type="text"
              placeholder="********021"
              className="w-full border-none outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.home_number}
              name="home_number"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="flex w-96 items-center m-3">
          <p className="font-bold text-sm">جنسیت:</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
            value="male"
            onClick={changeHandler}
          />
          <p className="font-bold text-sm">مرد</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 rounded h-full"
            value="female"
            onClick={changeHandler}
          />
          <p className="font-bold text-sm">زن</p>
        </div>
        <div className="flex w-96 items-center m-3">
          <p className="font-bold text-sm">وضعیت تاهل:</p>
          <input
            type="radio"
            name="marital"
            id=""
            className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
            value="single"
            onClick={changeHandler}
          />
          <p className="font-bold text-sm">مجرد</p>
          <input
            type="radio"
            name="marital"
            id=""
            className="relative overflow-hidden mx-2 w-5 rounded h-full"
            value="married"
            onClick={changeHandler}
          />
          <p className="font-bold text-sm">متاهل</p>
        </div>
        <div className="flex w-96 items-center m-3">
          <p className="font-bold text-sm">وضعیت اقامت :</p>
          <input
            type="radio"
            name="residential"
            id=""
            className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
            value="resident"
            onClick={changeHandler}
          />
          <p className="font-bold text-sm">مقیم</p>
          <input
            type="radio"
            name="residential"
            id=""
            className="relative overflow-hidden mx-2 w-5 rounded h-full"
            value="non_resident"
            onClick={changeHandler}
          />
          <p className="font-bold text-sm">غیر مقیم</p>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <button onClick={addHandler} className="w-full p-3 py-2 text-white bg-blue-700 border border-blue-700 rounded-lg">
          ثبت
        </button>
      </div>

    </form>
  );
};

export default Addexpert;


{/* <div className="w-4/6">
            <p className="font-bold text-sm">تاحصیلات :</p>
          <div className="flex justify-between">
            <p className="text-sm font-bold">سیکل</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="سیکل"
              onClick={changeHandler}
            />
            <p className="text-sm font-bold">دیپلم</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="دیپلم"
              onClick={changeHandler}
            />
            <p className="text-sm font-bold">کادانی</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="کاردانی"
              onClick={changeHandler}
            />
            <p className="text-sm font-bold">لیسانس</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="لیسانس"
              onClick={changeHandler}
            />
            <p className="text-sm font-bold">فوق لیسانس</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="فوق لیسانس"
              onClick={changeHandler}
            />
            <p className="text-sm font-bold">دکتری</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="دکتری"
              onClick={changeHandler}
            />
            <p className="text-sm font-bold">فوق دکتری</p>
            <input
              type="radio"
              name="education"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
              value="فوق دکتری"
              onClick={changeHandler}
            />
          </div>
        </div> */}
{/* <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
            <p className="font-bold text-sm">آدرس محل کار</p>
            <input
              type="text"
              placeholder="تهران"
              className="outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.work_address}
              name="work_address"
            />
          </div>
          <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
            <p className="font-bold text-sm">تلفن محل کار</p>
            <input
              type="text"
              placeholder="********021"
              className="outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.work_phone}
              name="work_phone"
            />
          </div> */}
{/* <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
            <p className="font-bold text-sm">کدپستی محل کار</p>
            <input
              type="text"
              placeholder=""
              className="outline-none placeholder:text-sm"
              onChange={changeHandler}
              value={userDatas.work_postal_code}
              name="work_postal_code"
            />
          </div> */}