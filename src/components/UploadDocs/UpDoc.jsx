import React from 'react'

export default function UpDoc({document , changeHandler}) {
  return (
    <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> اسناد </p>
              <p className="text-xs text- gray-400 my-1 ">
                حداکثر بارگذاری برای هر فرم 5 فایل میباشد .{" "}
              </p>
            </div>

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                اجازه نامه تکمیل شده استعلام رفتار اعتباری اشخاص حقیقی به تعداد اعضای هیئت مدیره
              </p>
              {
                document.licenses ?
                  <label htmlFor='licenses' className="text-blue-400 text-xs w-full justify-center">
                    برای بارگذاری کلیک کنید
                  </label> :
                  <div>
                    {
                        document.licenses && document.licenses.map(item => {
                            return (
                                <p className="text-blue-400 text-xs w-full m-1 justify-center">
                                {
                                    `نام فایل : ${item.name}`
                                }
                                </p>
                            )
                        })
                    }
                    
                    <label htmlFor='licenses' className="text-yellow-400 m-1 text-xs w-full justify-center">
                      برای تغییر کلیک کنید
                    </label>
                  </div>

              }
              <input style={{ display: "none" }} id='licenses' className="text-blue-400 text-xs " onChange={(e) => changeHandler(e)} type="file" name="licenses" />
            </div>
            
        </div>
    </div>
  )
}
