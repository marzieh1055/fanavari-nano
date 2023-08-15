import React from 'react'

export default function UpPic({sendData , setSendData , errors , showErr}) {
    const changeHandler = (ev) => {
        if (ev.target.type === "file") {
            setSendData({
                ...sendData , [ev.target.name] : ev.target.files[0]
            });
        }
        console.log(sendData)
    };
    return (
        <div className='w-full mt-7 flex px-2 '>
            <div className="w-full bg-white rounded-xl p-5">
                <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                    <p className="mb-3">
                        آپلود فیش واریزی
                    </p>
                    {
                        sendData.path4 === null ?
                        <label htmlFor='path4' className="text-blue-400 text-xs mt-3 w-full justify-center">
                            برای بارگذاری کلیک کنید
                        </label> :
                        <div>
                            <img className='w-full h-[250px] rounded' src={URL.createObjectURL(sendData.path4)} alt="عکس فیش" />
                            <p className="text-blue-400 text-xs w-full m-1 justify-center">
                            {
                                `نام فایل : ${sendData.path4.name}`
                            }
                            </p>
                            <label htmlFor='path4' className="text-yellow-400 m-1 mt-3 text-xs w-full justify-center">
                            برای تغییر کلیک کنید
                            </label>
                        </div>

                    }
                    <input style={{ display: "none" }} id='path4' className="text-blue-400 text-xs " accept="image/*" type="file" onChange={changeHandler} name="path4" />
                    <br />
                    {errors.path4 && showErr.path4 && <span className="text-red-500 text-xs ">*{errors.path4}</span>}
                </div>
            </div>
        </div>
    )
}
