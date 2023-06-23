import React, { useState, useEffect, useContext } from "react";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { Validation } from "../../helper/validation";
import { UserDataContext } from "../../contexts/UserData.Provider";
import logo from "../../assets/imges/Login/logofarsi.png"
import account from "../../assets/imges/account.png"
// /src/assets/imges/account.png
import lockedcomputer from "../../assets/imges/locked-computer.png"
import view from "../../assets/imges/view.png"
import hide from "../../assets/imges/hide.png"
import "./Login.css"

// /src/assets/imges/locked-computer.png
const Login = () => {

  const [mountPage , setMountPage] = useState(true)
  const [bcInput , setBcInput] = useState(true)


  const { apiLogin , isLoading, setIsLoading , errRes, setErrRes ,rememberStory , setRememberStory } = useContext(UserDataContext)

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
      setBcInput(false)
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
  const subHandler = e => {
    e.preventDefault();
    if (!Object.keys(errors).length) {

      setIsLoading(true)
      setErrRes(false)
      
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
    if (mountPage) {
      const storage = window.localStorage.getItem("remember")
      storage && setUserData(JSON.parse(storage))
      setMountPage(false)
      !storage && setBcInput(false)
    }
    
  }, [userData])

  const showPassHandler = (e) => {
    e.preventDefault();
    setShowPass(!showPass)
  }

  const rememberChange = (e) => {
    setRememberStory(e.target.checked)
  }
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/3 bg-cover bg-center bg-no-repeat">
          <h1 className="mt-c-15 mb-c-20">
            <img className="mx-auto" src={logo} alt="" style={{
              width: "80px",
              height: "110px"
            }} />
          </h1>
          <form className="w-5/6 mx-auto flex flex-col gap-6">
            {/* <Input
              lable={" نام کاربری (کد ملی یا شناسه ملی شرکت)*"}
              src="/src/assets/imges/account.png"
              type="text"
              value={userData.username}
              changeHandler={changeHandler}
              name="username"
              onFocus={focusHandler}
              
            /> */}

                <div class="relative">
                    <label for="form-1"  className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                        {" نام کاربری (کد ملی یا شناسه ملی شرکت)*"}
                    </label>
                    <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src={account} alt="" />
                    <input style={bcInput === true && userData.password ? {paddingRight: "45px" , backgroundColor: "#f6e8c2"} : {paddingRight: "45px"}} onFocus={focusHandler} onChange={changeHandler} value={userData.username} name="username" id="form-1" className="border rounded-md border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 pl-3.5 pr-c-20" type="text" />       
                    
                </div>
            {errors.username && showErr.username && <span style={{ color: '#e88f19' }}>{errors.username}</span>}
            <div className="relative">
              <label for="form-2" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                گذرواژه*
              </label>
              <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src={lockedcomputer} alt="" />
              <input style={bcInput === true && userData.password ? {paddingRight: "45px" , backgroundColor: "#f6e8c2"} : {paddingRight: "45px"}} onFocus={focusHandler} onChange={changeHandler} value={userData.password} name='password' id="form-2" className="border rounded-md border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 px-c-20" type={showPass ? "text" : "password"} />
              <span onClick={showPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
                <img className="w-full h-full" src={showPass ? view : hide} alt="" />
              </span>
            </div>
            {errors.password && showErr.password && <span style={{ color: '#e88f19' }}>{errors.password}</span>}

            <button onClick={subHandler} className="text-sm bg-c-17 text-white px-4 py-2 transition-colors hover:bg-c-18">ورود</button>
            {isLoading && <span style={{ color: '#e88f19' }}>در حال ارسال اطلاعات...</span>}
            {errRes && <span style={{ color: '#a73c36' }}>اطلاعات وارد شده مطابقت ندارد</span>}
            {showResp && <span style={{ color: '#e88f19' }}>درحال انتقال به صفحه ورود...</span>}
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <input onClick={rememberChange} type="checkbox" />
                <p className="text-sm">بخاطر بسپار</p>
              </div>
              <Link to={`/auth/forgotpassword`}>

              <div className="">
                <a className="text-c-22 text-sm"> 
                {/* href="/auth/forgotpassword */}
                  گذرواژه را فراموش کردم
                </a>
              </div>
              </Link>

            </div>
            <div className="flex items-center">
              <div className="flex-1 h-px bg-c-21"></div>
              <div className="text-sm px-2.5">چنانچه عضو نیستید</div>
              <div className="flex-1 h-px bg-c-21"></div>
            </div>
            <Link to={'/auth/register'} className="text-sm text-center bg-c-19 text-white px-4 py-2 transition-colors hover:bg-c-20">ثبت نام</Link>
          </form>
        </div>
        <div className="w-2/3 bg-cover bg-center bg-no-repeat ff" ></div>
      </div>
    </>
  )
};

export default Login;
// style={{ backgroundImage:"url(../../assets/imges/aa.jpg)" }}