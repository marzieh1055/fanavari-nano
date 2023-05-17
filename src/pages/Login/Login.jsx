import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { Validation } from "../../helper/validation";
import axios from "axios";


const Login = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [errRes, setErrRes] = useState(false);
  const [showResp, setShowResp] = useState(false);

  const [userData, setUserData] = useState({ username: "", password: "" })
  const [showPass, setShowPass] = useState(false);
  const changeHandler = (event) => {

    if (event.target.name === "checkbox") {
      setUserData({
        ...userData, [event.target.name]: event.target.checked
      })
    } else {
      setUserData({
        ...userData, [event.target.name]: event.target.value
      })
    }
  }

  // Validation

  const [errors, setErrors] = useState({});
  const [showErr, setShowErr] = useState({});

  const focusHandler = e => {
    if (e.target.name !== "checkbox") {
      setShowErr({ ...showErr, [e.target.name]: true })

    }

  }
  const nextPage = useNavigate()
  const subHandler = e => {
    e.preventDefault();
    console.log(errors);
    if (!Object.keys(errors).length) {
      setIsLoading(true)
      setErrRes(false)
      const apiLogin = (datas) => {
        axios.post('/api/v1/login', datas, {
          headers: {
            Authorization: "token",
            'Access-Control-Allow-Origin': "http://localhost:5173"
          }
        })
          .then(response => {
            console.log(response.data);
            window.localStorage.accessToken = response.data.authorisation.token
            nextPage("/panel/dashboard")

            // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<---------------------------------------------------------------
            setIsLoading(false)

          })
          .catch(error => {
            setIsLoading(false)
            setErrRes(true)
          });
      }
      apiLogin(userData)
    } else {
      setShowErr({
        username: true,
        password: true,
      })

    }
  }
  useEffect(() => {
    setErrors(Validation(userData, 'login'))
  }, [userData])

  const showPassHandler = (e) => {
    e.preventDefault();
    setShowPass(!showPass)
  }
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/3 bg-cover bg-center bg-no-repeat">
          <h1 className="mt-c-15 mb-c-20">
            <img className="mx-auto" src="/src/assets/imges/Login/logofarsi.png" alt="" style={{
              width: "80px",
              height: "110px"
            }} />
          </h1>
          <form className="w-5/6 mx-auto flex flex-col gap-6">
            <Input
              lable={" نام کاربری (کد ملی یا شناسه ملی شرکت)*"}
              src="/src/assets/imges/account.png"
              type="text"
              value={userData.username}
              changeHandler={changeHandler}
              name="username"
              onFocus={focusHandler}
            />
            {errors.username && showErr.username && <span style={{ color: '#e88f19' }}>{errors.username}</span>}
            <div className="relative">
              <label for="form-2" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                گذرواژه*
              </label>
              <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src="/src/assets/imges/locked-computer.png" alt="" />
              <input style={{paddingRight: "45px"}} onFocus={focusHandler} onChange={changeHandler} value={userData.password} name='password' id="form-2" className="border border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 px-c-20" type={showPass ? "text" : "password"} />
              <button onClick={showPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
                <img className="w-full h-full" src={showPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
              </button>
            </div>
            {errors.password && showErr.password && <span style={{ color: '#e88f19' }}>{errors.password}</span>}
            {/* <div className="flex gap-6 items-center">
              <div className="relative w-3/4">
                <label for="form-3" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                  کد امنیتی*
                </label>
                <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src="/src/assets/imges/locked-computer.png" alt="" />
                <input id="form-3" className="border border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 pr-c-20 pl-c-23" type="text" />
                <button className="absolute h-full left-0 w-c-22">
                  <img className="w-full h-full" src="/src/assets/imges/login/capcha.png" alt="" />
                </button>
              </div>
              <button className="w-6 h-6">
                <img className="w-full h-full" src="/src/assets/imges/refresh.png" alt="" />
              </button>
            </div> */}
            <button onClick={subHandler} className="text-sm bg-c-17 text-white px-4 py-2 transition-colors hover:bg-c-18">ورود</button>
            {isLoading && <span style={{ color: '#e88f19' }}>در حال ارسال اطلاعات...</span>}
            {errRes && <span style={{ color: '#a73c36' }}>اطلاعات وارد شده مطابقت ندارد</span>}
            {showResp && <span style={{ color: '#e88f19' }}>درحال انتقال به صفحه ورود...</span>}
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <p className="text-sm">بخاطر بسپار</p>
              </div>
              <div className="">
                <a className="text-c-22 text-sm" href="/auth/forgotpassword">
                  گذرواژه را فراموش کردم
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1 h-px bg-c-21"></div>
              <div className="text-sm px-2.5">چنانچه عضو نیستید</div>
              <div className="flex-1 h-px bg-c-21"></div>
            </div>
            <Link to={'/auth/register'} className="text-sm text-center bg-c-19 text-white px-4 py-2 transition-colors hover:bg-c-20">ثبت نام</Link>
          </form>
        </div>
        <div className="w-2/3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/imges/Login/background.889c334e8255dfcd19f2.jpg)' }}></div>
      </div>
    </>
  )
};

export default Login;
