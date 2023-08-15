import React from 'react'
import DownloadBoxL from '../../../components/viewDoc/DownloadBoxL'

export default function WboxLUp({document , setDocment , reqData}) {
  const changeHandler = (e) => {
    const filesEvent = e.target.files;
    const filesList = []
    for (let i = 0 ; i < filesEvent.length ; i++) {
      filesList.push({file : filesEvent[i]})
    }
    setDocment({
      ...document,
      [e.target.name]: filesList
    });
    console.log(document);
  }
  return (
    <div>
      <div className=" bg-c-4 rounded-xl p-5 mt-3">
          <div className=" pb-4">
              <p className=" font-bold"> محل تصاویر مدارک ثبتی و حقوقی </p>
          </div>
          <hr className="border-dashed border-gray-300" />
          {
              reqData.warranty && reqData.warranty.map((item) => {
                return Object.keys(item).map(( i , index ) => {
                    let ii = i === "balance" ? "balances" :
                    i === "bills" ? "bills" :
                    i === "registration_doc" ? "register_doc" :
                    i === "signatory" ? "signatory" :""
                  if (
                    ["bills", "registration_doc","signatory"].includes(i) &&
                    item[i].length > 0
                  ) {
                    return(
                      <div key={index}>
                            <DownloadBoxL key={index} item={item} i={i} />
                            {
                              document[ii] === undefined ?
                                <label htmlFor={ii} className="text-yellow-400 text-xs w-full justify-center cursor-pointer">
                                  برای بروزرسانی کلیک کنید
                                </label> :
                                <div>
                                  {
                                    document[ii] && document[ii].map((item , keyNum)=> {
                                          return (
                                              <p key={keyNum} className="text-blue-400 text-xs w-full m-1 justify-center">
                                              {
                                                `نام فایل جدید : ${item.file.name}`
                                              }
                                              </p>
                                          )
                                      })
                                  }
                                  <label htmlFor={ii} className="text-yellow-400 m-1 text-xs w-full justify-center cursor-pointer">
                                    برای تغییر کلیک کنید
                                  </label>
                                </div>

                            }
                            <input style={{ display: "none" }} id={ii} className="text-blue-400 text-xs " accept="application/pdf" type="file"  multiple onChange={changeHandler} name={ii} />
                            <br />
                          </div>
                          
                        )
                    } 
                  }
                )
              })
            }
      </div>
      <div className=" bg-c-4 rounded-xl p-5 mt-3">
          <div className=" pb-4">
              <p className=" font-bold"> محل تصاویر مدارک مالی </p>
          </div>
          <hr className="border-dashed border-gray-300" />
          {
              reqData.warranty && reqData.warranty.map((item) => {
                return Object.keys(item).map(( i , index ) => {
                    let ii = i === "balance" ? "balances" :
                    i === "insurance" ? "insurances" :
                    i === "knowledge" ? "knowledge" :
                    i === "loans" ? "loans" :
                    i === "proforma" ? "invoices" :
                    i === "resume" ? "resume" :
                    i === "statement" ? "statements" : ""
                  if (
                    ["balance", "insurance", "knowledge", "loans", "proforma", "resume", "statement"].includes(i) &&
                    item[i].length > 0
                  ) {
                    return(
                      <div key={index}>
                            <DownloadBoxL key={index} item={item} i={i} />
                            {
                              document[ii] === undefined ?
                                <label htmlFor={ii} className="text-yellow-400 text-xs w-full justify-center cursor-pointer">
                                  برای بروزرسانی کلیک کنید
                                </label> :
                                <div>
                                  {
                                    document[ii] && document[ii].map((item , keyNum)=> {
                                          return (
                                              <p key={keyNum} className="text-blue-400 text-xs w-full m-1 justify-center">
                                              {
                                                `نام فایل جدید : ${item.file.name}`
                                              }
                                              </p>
                                          )
                                      })
                                  }
                                  <label htmlFor={ii} className="text-yellow-400 m-1 text-xs w-full justify-center cursor-pointer">
                                    برای تغییر کلیک کنید
                                  </label>
                                </div>

                            }
                            <input style={{ display: "none" }} id={ii} className="text-blue-400 text-xs " accept="application/pdf" type="file"  multiple onChange={changeHandler} name={ii} />
                            <br />
                          </div>
                          
                        )
                    } 
                  }
                )
              })
            }
      </div>
      <div className=" bg-c-4 rounded-xl p-5 mt-3">
          <div className=" pb-4">
              <p className=" font-bold"> محل تصاویر سایر مدارک  </p>
          </div>
          <hr className="border-dashed border-gray-300" />
          {
              reqData.warranty && reqData.warranty.map((item) => {
                return Object.keys(item).map(( i , index ) => {
                    let ii = i === "balance" ? "balances" :
                    i === "catalog" ? "catalogs" :
                    i === "license" ? "licenses" : ""
                  if (
                    ["catalog","license"].includes(i) &&
                    item[i].length > 0
                  ) {
                    return(
                      <div key={index}>
                            <DownloadBoxL key={index} item={item} i={i} />
                            {
                              document[ii] === undefined ?
                                <label htmlFor={ii} className="text-yellow-400 text-xs w-full justify-center cursor-pointer">
                                  برای بروزرسانی کلیک کنید
                                </label> :
                                <div>
                                  {
                                    document[ii] && document[ii].map((item , keyNum)=> {
                                          return (
                                              <p key={keyNum} className="text-blue-400 text-xs w-full m-1 justify-center">
                                              {
                                                `نام فایل جدید : ${item.file.name}`
                                              }
                                              </p>
                                          )
                                      })
                                  }
                                  <label htmlFor={ii} className="text-yellow-400 m-1 text-xs w-full justify-center cursor-pointer">
                                    برای تغییر کلیک کنید
                                  </label>
                                </div>

                            }
                            <input style={{ display: "none" }} id={ii} className="text-blue-400 text-xs " accept="application/pdf" type="file"  multiple onChange={changeHandler} name={ii} />
                            <br />
                          </div>
                          
                        )
                    } 
                  }
                )
              })
            }
      </div>
    </div>
  )
}