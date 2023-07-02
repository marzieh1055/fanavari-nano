import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-yellow-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">خطا</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">متاسفانه پردازش اطلاعات با خطا مواجه شد!</p>
        <p className="mt-6 text-base leading-7 text-gray-600">چنانچه مشکل با امتحان دوباره رفع نشد مجددا به سامانه ورود نمایید ویا با پشتیبانی تماس حاصل فرمایید</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button onClick={() => navigate(-1)} className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">امتحان دوباره</button>
          <Link to={`/panel/addTicket`} className="text-sm font-semibold text-gray-900">تماس با پشتیبانی</Link>
        </div>
      </div>
    </main>
  )
}
