import React from 'react'
import DownloadBoxL from './DownloadBoxL'

export default function WboxL({reqData}) {
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
                        <DownloadBoxL key={index} item={item} i={i} />
                      )
                  } 
                }
              )
            })
          }
    </div>
  )
}