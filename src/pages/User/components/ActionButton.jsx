import React from 'react'
import { Link } from 'react-router-dom'

function ActionButton({GenuineUser, setShowDelete , close}) {
    // console.log(GenuineUser);
    return (
        <div  className="bg-gradient-to-b from-[#33333344] to-transparent fixed inset-0 flex items-center justify-center">
            <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
                <p className="text-xl font-bold text-center">کاربر : {`${GenuineUser.name} ${GenuineUser.family}`}</p>
                <div className='w-full flex'>
                    <button onClick={() => setShowDelete(GenuineUser)} className="w-1/2 text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کاربر
                    </button>
                    <Link to={`/panel/Viewdetailuser/${GenuineUser.id}`} className="w-1/2 text-blue-700 text-center border-2 border-blue-700 rounded-2xl p-2 ">
                    اطلاعات بیشتر
                    </Link>
                </div>
                <div className='flex'>
                    <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
                </div>
            </div>
        </div> 
    )

}
export default ActionButton