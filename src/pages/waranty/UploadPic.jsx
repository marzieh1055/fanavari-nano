import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

export default function UploadPic() {
    const navigate = useNavigate()
    const [sendData , setSendData] = useState({
        deposit : null
    })
    const [isLoading , setIsLoading] = useState(false)
    const [err , setErr] = useState(false)

    const sendHandler = () => {
        setErr(false)
        setIsLoading(true)    
        if (sendData.deposit) {
            const token = localStorage.getItem('token');
            const isLoggedIn = token ? true : false;
            axios.post("/api/v1/receipt", sendData ,
            {
                headers: {
                "Content-Type": "multipart/form-data",
                ...(isLoggedIn && {
                    Authorization: `Bearer ${JSON.parse(token)}`
                })
                }
            }
            ).then(res => {
                console.log(res);
                setIsLoading(false)
                navigate("/panel/oploadDoc")

            }
            ).catch(err => {
                console.log(err);
                setIsLoading(false)
                toast("!ارسال اطلاعات با خطا مواجه شد")
            })
        } else {
            setErr(true)
        }
    }
    const changeHandler = (ev) => {
        if (ev.target.type === "file") {
            setSendData({
                ...sendData , [ev.target.name] : ev.target.files[0]
            });
        }
        console.log(sendData)
    };

    return (
        <div className='p-3 flex flex-col'>
            {isLoading && <Loader />}
            <ToastContainer />
            <p className="text-xl font-extrabold">آپلود عکس فیش واریزی</p>
            <div className='w-full mt-7 flex justify-center'>
                <div className="w-1/2 bg-white rounded-xl p-5">
                    <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                        <p className="mb-3">
                            آپلود فیش واریزی
                        </p>
                        {
                            sendData.deposit === null ?
                            <label htmlFor='deposit' className="text-blue-400 text-xs mt-3 w-full justify-center">
                                برای بارگذاری کلیک کنید
                            </label> :
                            <div>
                                <img className='w-full h-[250px] rounded' src={URL.createObjectURL(sendData.deposit)} alt="عکس فیش" />
                                <p className="text-blue-400 text-xs w-full m-1 justify-center">
                                {
                                    `نام فایل : ${sendData.deposit.name}`
                                }
                                </p>
                                <label htmlFor='deposit' className="text-yellow-400 m-1 mt-3 text-xs w-full justify-center">
                                برای تغییر کلیک کنید
                                </label>
                            </div>

                        }
                        <input style={{ display: "none" }} id='deposit' className="text-blue-400 text-xs " accept="image/*" type="file" onChange={changeHandler} name="deposit" />
                        <br />
                        {err && <span className="text-red-500 text-xs ">*فایلی انتخاب نشده</span>}
                    </div>
                    <button onClick={sendHandler} className="w-full  rounded-lg bg-blue-700 mt-2   text-white p-3 font-bold text-xs">ثبت</button>
                </div>
                
            </div>
        </div>
    )
}
