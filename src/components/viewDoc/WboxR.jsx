import React from 'react'
import DownloadBoxR from './DownloadBoxR';

export default function WboxR({ path1 , path2 , path3 , fn1 , fn2 , fn3 }) {
  return (
    <div className=" bg-c-4 rounded-xl p-5 mt-3">
        <div className=" pb-4">
            <p className=" font-bold"> مدارک اصلی </p>
        </div>
        <hr className="border-dashed border-gray-300" />
        {path1 && fn1 && <DownloadBoxR path={path1} fn={fn1} title={"تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت"} />}
        {path2 && fn2 && <DownloadBoxR path={path2} fn={fn2} title={"تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت"} />}
        {path3 && fn3 && <DownloadBoxR path={path3} fn={fn3} title={"تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت"} />}
    </div>
  )
}
