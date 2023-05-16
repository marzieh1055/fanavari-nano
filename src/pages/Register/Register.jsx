import React, { useState , useEffect } from 'react'
import Input from "../../components/Input/Input";
import axios from 'axios';
// Validation
import { Validation } from '../../helper/validation';
// api 
import { verify } from '../../services/apireq';
import Verification from './Verification';
import { Link } from 'react-router-dom';

const Register = () => {

  const [selectedOption, setSelectedOption] = useState("genuine");
  

  const [isLoading, setIsLoading] = useState(false);
  const [errRes, setErrRes] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  
  const [showPass, setShowPass] = useState(false);
  const [showComPass, setComShowPass] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Validation
  const [genuine , setGenuine] = useState({
    type:"genuine",
    name:"",
    family:"",
    phone:"",
    password:"",
    password_confirmation:"",
    is_confirmed:false,
    national_code:"",
    email:""
})
  const [legal , setLegal] = useState({
    type:"legal",
    company_name:"",
    name:"",
    family: "",
    national_company:"",
    phone:"",
    password:"",
    password_confirmation:"",
    is_confirmed:false,
    email:""
})





  const [errors , setErrors] = useState({});
  const [showErr , setShowErr] = useState({});

  const changeHandler = event => {

      if (event.target.name === "is_confirmed") {

        if (selectedOption === "genuine") {
          setGenuine({
            ...genuine , [event.target.name] : event.target.checked
          })
        } else if (selectedOption === "legal") {
          setLegal({
            ...legal , [event.target.name] : event.target.checked
          })
        }
      } else {
        if (selectedOption === "genuine") {
          setGenuine({
            ...genuine , [event.target.name] : event.target.value
          })
        } else if (selectedOption === "legal") {
          setLegal({
            ...legal , [event.target.name] : event.target.value
          })
        }
      }

    }
  const focusHandler = e => {
      if (e.target.name !== "is_confirmed") {
          setShowErr({...showErr , [e.target.name] : true})

      }
     
  }
  const subHandler = async e => {
    e.preventDefault();

    if (!Object.keys(errors).length) {
      setIsLoading(true)
      setErrRes(false)
      if (selectedOption === "genuine") {
        
        const singup = (userData) => {
          let datas = {}
          if (userData.type == "genuine") {
              datas = {
                  "type":"genuine",
                  "name":userData.name,
                  "family":userData.family,
                  "phone":userData.phone,
                  "password":userData.password,
                  "password_confirmation":userData.password_confirmation,
                  "is_confirmed":true,
                  "national_code":userData.national_code,
                  "email":""
              }
          }
          console.log(datas);
          axios.post('/api/v1/register', datas , {
              headers: {
                  Authorization:"token",
                  'Access-Control-Allow-Origin': "http://localhost:5173"
              }
          })
          .then(response => {
              console.log(response.data);
              window.localStorage.accessToken = response.data.authorisation.token
              setShowVerify(!showVerify)

              // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<-------------------------------------------
              verify({
                type : "genuine",
                phone : genuine.phone
              })
              setUserResponse(res)
              setErrRes(false)
              setIsLoading(false)              
          })
          .catch(error =>{
            setErrRes(true)
            setIsLoading(false)
          })

        }
        singup(genuine)
      } else if (selectedOption === 'legal') {

        const singup = (userData) => {
          let datas = {}
          if (userData.type == "legal") {
              datas = {
                  "type":"legal",
                  "company_name":userData.company_name,
                  "name":userData.name,
                  "family":userData.name + "ei",
                  "national_company":userData.national_company,
                  "phone":userData.phone,
                  "password":userData.password,
                  "password_confirmation":userData.password_confirmation,
                  "is_confirmed":true,
                  "email":""
              }
          }
          
          console.log(datas);
          axios.post('/api/v1/register', datas , {
              headers: {
                  Authorization:"token",
                  'Access-Control-Allow-Origin': "http://localhost:5173"
              }
          })
          .then(response => {
              console.log(response.data);
              window.localStorage.accessToken = response.data.authorisation.token
              setShowVerify(!showVerify)
              // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<-------------------------------------------
              verify({
                type : "legal",
                phone : legal.phone
              })
              setUserResponse(res)
              setErrRes(false)
              setIsLoading(false)
          })
          .catch(error =>{
            setErrRes(true)
            setIsLoading(false)
          })
        }
        singup(legal)
      }
    } else {
      if (selectedOption === "genuine") {
        setShowErr({
          name:true,
          family:true,
          phone:true,
          password:true,
          password_confirmation:true,
          is_confirmed:true,
          national_code:true,
        })
      } else if (selectedOption === 'legal') {
        setShowErr({
          company_name:true,
          name:true,
          national_company:true,
          phone:true,
          password:true,
          password_confirmation:true,
          is_confirmed:true,
        })
      }
        
        
    }
  }
  useEffect(() => {
    if (selectedOption === "genuine") {
      setErrors(Validation(genuine , 'singup'))
    } else if (selectedOption === "legal") {
      setErrors(Validation(legal , 'singup'))
    }
  } , [ genuine , legal , selectedOption ])

  const showPassHandler = (e) => {
    e.preventDefault();
      setShowPass(!showPass)
  }
  const showComPassHandler = (e) => {
    e.preventDefault();
      setComShowPass(!showComPass)
  }



  
  
  
  {if (showVerify) return <Verification datas={selectedOption === "genuine" ? genuine : legal} />}  
  return (
    <div class="flex">
      <div class="w-1/3 bg-cover bg-center bg-no-repeat">
        <h1 class="mt-c-19 mb-c-20">
          <img className="mx-auto" src="/src/assets/imges/Login/logofarsi.png" alt="" style={{
            width: "80px",
            height: "110px"
          }} />      </h1>
        <form class="w-5/6 mx-auto flex flex-col gap-6 pb-6">
          <div class="flex flex-col gap-2">
            <h2 class="text-c-16 text-sm">
              نوع کاربری
            </h2>
            <div class="flex justify-start">
              <div class="mr-4 inline-block pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="genuine"
                  onClick={handleChange} checked />
                  
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="inlineRadio1"
                >حقیقی</label
                >
              </div>
              <div class=" mr-4 inline-block  pl-2">
                <input
                  class="relative float-left ml-8 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="legal"
                  onClick={handleChange} />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="inlineRadio2"
                  >حقوقی</label
                >
              </div>
            </div>
          </div>
          
          

          {selectedOption === "genuine" ? (
            <>
              <h2 class="text-sm">
                اطلاعات شخصی
              </h2>
              <Input
                lable={" نام*"}
                src="/src/assets/imges/account.png"
                type="text"
                changeHandler={changeHandler}
                value={genuine.name}
                name="name"
                onFocus={focusHandler}
                />
                {errors.name && showErr.name && <span style={{color:'#e88f19'}}>{errors.name}</span>}
              <Input
                lable={"نام خانوادگی*"}
                src="/src/assets/imges/account.png"
                type="text"
                changeHandler={changeHandler}
                value={genuine.family}
                name="family"
                onFocus={focusHandler}
              />
              {errors.family && showErr.family && <span style={{color:'#e88f19'}}>{errors.family}</span>}
              <Input
                lable={" کدملی*"}
                src="/src/assets/imges/card.png"
                type="text"
                changeHandler={changeHandler}
                value={genuine.national_code}
                name='national_code'
                onFocus={focusHandler}
              />
              {errors.national_code && showErr.national_code && <span style={{color:'#e88f19'}}>{errors.national_code}</span>}
              <Input
                lable={"شماره موبایل*"}
                src="/src/assets/imges/phone.png"
                type="text"
                changeHandler={changeHandler}
                value={genuine.phone}
                name="phone"
                onFocus={focusHandler}
                
              />
              {errors.phone && showErr.phone && <span style={{color:'#e88f19'}}>{errors.phone}</span>}
              
              {/* passwords */}
              <div className="relative">
                <label for="form-2" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                گذرواژه*
                </label>
                <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src="/src/assets/imges/locked-computer.png" alt="" />
                <input onFocus={focusHandler} onChange={changeHandler} value={genuine.password} name='password' id="form-2" className="border border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 px-c-20" type={showPass ? "text" : "password"} />
                <button onClick={showPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
                  <img className="w-full h-full" src={showPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
                </button>
              </div>
              {errors.password && showErr.password && <span style={{color:'#e88f19'}}>{errors.password}</span>}
              <div className="relative">
                <label for="form-2" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                تکرار گذرواژه*
                </label>
                <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src="/src/assets/imges/locked-computer.png" alt="" />
                <input onFocus={focusHandler} onChange={changeHandler} value={genuine.password_confirmation} name='password_confirmation' id="form-2" className="border border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 px-c-20" type={showComPass ? "text" : "password"} />
                <button onClick={showComPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
                  <img className="w-full h-full" src={showComPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
                </button>
              </div>

              {errors.password_confirmation && showErr.password_confirmation && <span style={{color:'#e88f19'}}>{errors.password_confirmation}</span>}
            </>
          ) : (
            <>
              <h2 class="text-sm">
                اطلاعات شرکت
              </h2>

              <Input
                lable={" نام شرکت*"}
                src="/src/assets/imges/building.png"
                type="text"
                changeHandler={changeHandler}
                value={legal.company_name}
                name="company_name"
                onFocus={focusHandler}
                />
                {errors.company_name && showErr.company_name && <span style={{color:'#e88f19'}}>{errors.company_name}</span>}
              <Input
                lable={"شناسه مالی شرکت*"}
                src="/src/assets/imges/building.png"
                type="text"
                changeHandler={changeHandler}
                value={legal.national_company}
                name="national_company"
                onFocus={focusHandler}
              />
              {errors.national_company && showErr.national_company && <span style={{color:'#e88f19'}}>{errors.national_company}</span>}
              {/* passwords */}
              <div className="relative">
                <label for="form-2" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                گذرواژه*
                </label>
                <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src="/src/assets/imges/locked-computer.png" alt="" />
                <input onFocus={focusHandler} onChange={changeHandler} value={legal.password} name='password' id="form-2" className="border border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 px-c-20" type={showPass ? "text" : "password"} />
                <button onClick={showPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
                  <img className="w-full h-full" src={showPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
                </button>
              </div>
              {errors.password && showErr.password && <span style={{color:'#e88f19'}}>{errors.password}</span>}
              <div className="relative">
                <label for="form-2" className="absolute top-0 -translate-y-1/2 right-3 bg-white text-sm text-c-16 px-1">
                تکرار گذرواژه*
                </label>
                <img className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6" src="/src/assets/imges/locked-computer.png" alt="" />
                <input onFocus={focusHandler} onChange={changeHandler} value={legal.password_confirmation} name='password_confirmation' id="form-2" className="border border-gray-300 focus-within:outline-none focus-within:border-black bg-white w-full py-4 px-c-20" type={showComPass ? "text" : "password"} />
                <button onClick={showComPassHandler} className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6">
                  <img className="w-full h-full" src={showComPass ? "/src/assets/imges/view.png" : "/src/assets/imges/hide.png"} alt="" />
                </button>
              </div>

              {errors.password_confirmation && showErr.password_confirmation && <span style={{color:'#e88f19'}}>{errors.password_confirmation}</span>}
              <h2 class="text-sm">
                اطلاعات رابط
              </h2>
              <Input
                lable={"نام رابط (شما)*"}
                src="/src/assets/imges/account.png"
                type="text"
                changeHandler={changeHandler}
                value={legal.name}
                name="name"
                onFocus={focusHandler}
                />
                {errors.name && showErr.name && <span style={{color:'#e88f19'}}>{errors.name}</span>}
              <Input
                lable={"شماره موبایل (شما)*"}
                src="/src/assets/imges/phone.png"
                type="text"
                changeHandler={changeHandler}
                value={legal.phone}
                name="phone"
                onFocus={focusHandler}
                
              />
              {errors.phone && showErr.phone && <span style={{color:'#e88f19'}}>{errors.phone}</span>}
            </>
          )}

          <div class="flex gap-3 items-center">
            {/* <span class="border-2 border-black rounded w-4 h-4"></span> */}
            <input 
                        type="checkbox" 
                        name='is_confirmed' 
                        value={selectedOption === 'genuine' ? genuine.is_confirmed : legal.is_confirmed} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        
            <p class="text-sm">با <span className='text-c-orange' >   قوانین و مقررات </span>سامانه موافقم </p>
          </div>
            {errors.is_confirmed && showErr.is_confirmed && <span style={{color:'#e88f19' , fontSize: "13px"}}>{errors.is_confirmed}</span>}
          <button  onClick={subHandler} class="text-sm bg-c-17 text-white px-4 py-2 transition-colors hover:bg-c-18">
            ورود
          </button>
          {isLoading && <span style={{color:'#e88f19'}}>در حال ارسال اطلاعات...</span>}
          {errRes && <span style={{color:'#a73c36'}}>اطلاعات به درستی وارد نشده اند و یا کاربر دیگری با این اطلاعات موجود میباشد</span>}
          <p class="text-xs text-center">
            اگر قبلا حساب کاربری دارید<Link to="/auth/login" className='text-c-orange'> وارد </Link>شوید!
          </p>
        </form>
      </div>
      <div class="h-screen w-2/3 bg-cover bg-center bg-no-repeat sticky top-0" style={{ backgroundImage: 'url(/src/assets/imges/Login/background.889c334e8255dfcd19f2.jpg)' }}></div>
    </div>
  )
}

export default Register