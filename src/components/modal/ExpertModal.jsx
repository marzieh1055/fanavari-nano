import React from 'react'

export default function ExpertModal({expertData , close}) {
  if (expertData === null ) {
    return (
      <div onClick={() => close(false)} className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
        <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
            <p className="text-center font-bold my-3 mb-1">کارشناسی برای این درخواست درنظر گرفته نشده</p>
            <button onClick={() => close(false)}>بستن</button>
        </div>
    </div>  
    )
  }
  return (
    <div onClick={() => close(false)} className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
        <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
            <div 
                className="bg-white z-10 rounded-lg flex flex-col gap-4">
                <div className="text-center bg-c-2 rounded-lg py-3">
                    <img className="w-16 h-16 mx-auto" src="/src/assets/imges/account.png" alt="" />
                    <h2 className="font-bold my-3 mb-1">{`${expertData.name} ${expertData.family}`}</h2>
                    <a className="text-xs text-c-8 font-semibold">{expertData.email}</a>
                </div>
                <button onClick={() => close(false)}>بستن</button>
            </div>
        </div>
    </div>
  )
}
