import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Verification = ({ datas }) => {
    const nextPage = useNavigate()
    const [formData, setFormData] = useState({
        phone: datas.phone,
        code: ""
    })


    const [isLoading, setIsLoading] = useState(false);
    const [errRes, setErrRes] = useState(false);

    const changeHandler = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const subHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setErrRes(false)
        const verifyTwo = (data) => {
            let datasVerify = {
                "phone": data.phone,
                "code": data.code
            }
            console.log(datasVerify);
            axios.post('/api/v1/confirm_verify', datasVerify, {
                headers: {
                    Authorization: "token",
                    'Access-Control-Allow-Origin': "http://localhost:5173"
                }
            })
                .then(response => {
                    console.log(response.data);
                    nextPage("/panel/dashboard")
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                    setErrRes(true)
                });
        }
        verifyTwo(formData)
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
                    <form className="w-5/6 mx-auto flex flex-col gap-4">
                        <h2 className="text-c-16 text-sm">
                            تایید شماره موبایل :

                        </h2>
                        <h2 className="text-justify text-c-16  text-sm">
                            به جهت ارسال و دریافت اطلاعات حساس از طریق سامانه پیام کوتاه،
                            نیاز به تایید شماره موبایل شما می باشد.
                        </h2>
                        <h2 className="text-justify text-c-16  text-sm">

                            لطفا کد ارسالی به شماره موبایل خود را وارد نمایید:
                        </h2>

                        <input onChange={changeHandler} value={formData.code} name="code" type="text" id="floating_outlined" class="block py-2.5 px-0 w-full text-sm text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder="کد ارسال شده را وارد کنید " />

                        <button onClick={subHandler} className="text-sm bg-c-17 text-white px-4 py-2 transition-colors hover:bg-c-18">تایید</button>
                        {isLoading && <span style={{ color: '#e88f19' }}>در حال ارسال اطلاعات...</span>}
                        {errRes && <span style={{ color: '#a73c36' }}>کد وارد شده صحیح نمی باشد</span>}
                    </form>
                </div>
                <div className="w-2/3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/imges/Login/background.889c334e8255dfcd19f2.jpg)' }}></div>
            </div>
        </>
    )
};

export default Verification;
