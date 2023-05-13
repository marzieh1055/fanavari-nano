import React , { useEffect , useState} from "react";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { Validation } from "../../helper/validation";
// api
import { forgotPassword } from "../../services/apireq";

const Forgotpassword = () => {

    // Validation
    const [data , setData] = useState({
      phone : "",
    })
    const [errors , setErrors] = useState({});
    const [showErr , setShowErr] = useState({});
  
    const changeHandler = event => {
  
        if (event.target.name === "checkbox") {
            setData({
                ...data , [event.target.name] : event.target.checked
            })
        } else {
            setData({
                ...data , [event.target.name] : event.target.value
            })
        }
        
    }
    const focusHandler = e => {
        if (e.target.name !== "checkbox") {
            setShowErr({...showErr , [e.target.name] : true})
  
        }
       
    }
    const subHandler = e => {
      e.preventDefault();
      forgotPassword(data)
      if (!Object.keys(errors).length) {
      } else {
          setShowErr({
            phone : true,
          })
          
      }
    }
    useEffect(() => {
        setErrors(Validation(data , 'forgotpass'))
    } , [data ])

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
          <h2 class="text-c-16 text-sm">
              ارسال کد بازیابی گذرواژه : 
            </h2>
            
            <Input
                lable={"شماره موبایل خود را وارد کنید"}
                src="/src/assets/imges/phone.png"
                type="text"
                changeHandler={changeHandler}
                value={data.phone}
                name="phone"
                onFocus={focusHandler}
                
              />
              {errors.number && showErr.number && <span style={{color:'#e88f19'}}>{errors.number}</span>}
            <button onClick={subHandler} className="text-sm bg-c-17 text-white px-4 py-2 transition-colors hover:bg-c-18">ارسال از طریق پیام کوتاه</button>

            <Link to={'/auth/login'} className="text-sm text-center bg-c-19 text-white px-4 py-2 transition-colors hover:bg-c-20">بازگشت</Link>
          </form>
        </div>
        <div className="w-2/3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/imges/Login/background.889c334e8255dfcd19f2.jpg)' }}></div>
      </div>
    </>
  )
};

export default Forgotpassword;
