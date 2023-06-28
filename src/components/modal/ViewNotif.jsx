import React, { useEffect, useState } from 'react'
import bellAlert from '../../assets/svg/bellAlert.svg'
import Bell from '../../assets/svg/Bell.svg'
import back from '../../assets/svg/back.svg'
import trash from '../../assets/svg/trash.svg'
import { Link } from 'react-router-dom'
import Axios from '../../../axiosinstancs'


export default function ViewNotif({unreadNotif , trashHandler , close}) {

  return (
    <div class="relative left-1/2 top-8">
      <div class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            {
              unreadNotif.length !== 0 ? unreadNotif.map((item , index) => {
                return (
                  <div key={index} class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" src={bellAlert} alt="" />
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">
                        اسم کاربر
                        <span class="absolute inset-0"></span>
                      </p>
                      <p class="mt-1 text-gray-600">{item.data.message}</p>
                    </div>
                  </div>
                )
              }) : 
              <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <p class="mt-1 text-gray-600">اعلان جدیدی وجود ندارد</p>
              </div>
            }
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <Link to={'/panel/allNotifs'} onClick={() => close(false)} class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
              <img src={Bell} alt="" class="h-5 w-5 flex-none text-gray-400" />
              همه اعلان ها
            </Link>
            <p onClick={() => trashHandler([])} class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
              <img src={trash} alt="" class="h-5 w-5 flex-none text-gray-400" />
              پاک کردن همه
            </p>
          </div>
          <div class="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
            <p onClick={() => close(false)} class="flex w-full items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
              <img src={back} alt="" class="h-5 w-5 flex-none text-gray-400" />
              بستن
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
