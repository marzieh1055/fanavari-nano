import React from 'react'
import DownloadBoxL from '../../../components/viewDoc/DownloadBoxL'

export default function WboxLUp({document , setDocment , reqData}) {
  const changeHandler = (e) => {
    const filesEvent = e.target.files;
    const filesList = []
    for (let i = 0 ; i < filesEvent.length ; i++) {
      filesList.push(filesEvent[i])
    }
    setDocment({
      ...document,
      [e.target.name]: filesList
    });
    console.log(document);
  }
  return (
    <div className=" bg-c-4 rounded-xl p-5 mt-3">
        <div className=" pb-4">
            <p className=" font-bold"> اسناد </p>
        </div>
        <hr className="border-dashed border-gray-300" />
        {
            reqData.warranty && reqData.warranty.map((item) => {
              return Object.keys(item).map(( i , index ) => {
                if (
                  ["balance", "bills", "catalog", "insurance", "knowledge", "license", "loans", "proforma", "registration_doc", "resume", "signatory", "statement"].includes(i) &&
                  item[i].length > 0
                ) {
                    return(
                        <div key={index}>
                          <DownloadBoxL key={index} item={item} i={i} />
                          {
                            document[i] === undefined ?
                              <label htmlFor={i} className="text-yellow-400 text-xs w-full justify-center">
                                برای بروزرسانی کلیک کنید
                              </label> :
                              <div>
                                {
                                    document[i] && document[i].map((item , keyNum)=> {
                                        return (
                                            <p key={keyNum} className="text-blue-400 text-xs w-full m-1 justify-center">
                                            {
                                                `نام فایل : ${item.name}`
                                            }
                                            </p>
                                        )
                                    })
                                }
                                <label htmlFor={i} className="text-yellow-400 m-1 text-xs w-full justify-center">
                                  برای تغییر کلیک کنید
                                </label>
                              </div>

                          }
                          <input style={{ display: "none" }} id={i} className="text-blue-400 text-xs " accept="application/pdf" type="file"  multiple onChange={changeHandler} name={i} />
                          <br />
                        </div>
                        
                      )
                  } 
                }
              )
            })
          }
    </div>
  )
}