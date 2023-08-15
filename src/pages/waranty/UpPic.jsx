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
                        sendData.file6 === null ?
                        <label htmlFor='file6' className="text-blue-400 text-xs mt-3 w-full justify-center">
                            برای بارگذاری کلیک کنید
                        </label> :
                        <div>
                            <div className='w-full flex justify-center'>
                                <img className='w-[400px] h-[250px] rounded' src={URL.createObjectURL(sendData.file6)} alt="عکس فیش" />
                            </div>
                            <p className="text-blue-400 text-xs w-full m-1 justify-center">
                            {
                                `نام فایل : ${sendData.file6.name}`
                            }
                            </p>
                            <label htmlFor='file6' className="text-yellow-400 m-1 mt-3 text-xs w-full justify-center">
                            برای تغییر کلیک کنید
                            </label>
                        </div>

                    }
                    <input style={{ display: "none" }} id='file6' className="text-blue-400 text-xs " accept="image/*" type="file" onChange={changeHandler} name="file6" />
                    <br />
                    {errors.file6 && showErr.file6 && <span className="text-red-500 text-xs ">*{errors.file6}</span>}
                </div>
            </div>
        </div>
    )
}
