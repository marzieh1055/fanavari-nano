import React from 'react'

export default function UPBox({SelectDocument , changeHandler , InputName , titleText , errors , showErr }) {
  return (
    <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
        <p className="">
            {titleText}
        </p>
        {
            SelectDocument === null ?
                <label htmlFor={InputName} className="text-blue-400 text-xs w-full justify-center">
                برای بارگذاری کلیک کنید
                </label> :
                <div>
                    {
                        SelectDocument && SelectDocument.map((item , keyNum)=> {
                            return (
                                <p key={keyNum} className="text-blue-400 text-xs w-full m-1 justify-center">
                                {
                                    `نام فایل : ${item.file.name}`
                                }
                                </p>
                            )
                        })
                    }
                
                    <label htmlFor={InputName} className="text-yellow-400 m-1 text-xs w-full justify-center">
                        انتخاب دوباره
                    </label>
                </div>

}
        <input style={{ display: "none" }} id={InputName} className="text-blue-400 text-xs " onChange={(e) => changeHandler(e)} type="file" name={InputName} multiple />
        <br />
        {errors && showErr && <span className="text-red-500 text-xs ">*{errors}</span>}
    </div>
  )
}
