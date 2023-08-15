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
            
        </div>
    )
}
