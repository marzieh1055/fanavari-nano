import React from 'react'
import { dateConversion } from '../../../helper/dateConversion.cjs'
import { Link } from 'react-router-dom'

export default function ItemInTesttikets({item}) {
  return (
    <tr
        key={item.id}
        id={item.id}
        >
        <td className="p-4 text-xs text-gray-400 font-bold">{item.id}</td>
        <td className="p-4 text-xs text-gray-400 font-bold">
            {item.title}
        </td>
        <td className="p-4 text-xs text-gray-400 font-bold">
            <button className={
            item.status === "open" ? "text-green-600 border border-green-600 rounded-xl p-2 px-3" :
            item.status === "waiting" ? "text-yellow-400 border border-yellow-400 rounded-xl p-2 px-3" :
            item.status === "closed" ? "text-red-400 border border-green-400 rounded-xl p-2 px-3" :
            item.status === "resolved" ? "text-green-600 border border-green-600 rounded-xl p-2 px-3" : ""

            }>{
            item.status === "open" ? "باز" :
            item.status === "waiting" ? "در انتظار پاسخ" :
            item.status === "closed" ? "بسته" :
            item.status === "resolved" ? "پاسخ داده شد" : ""
            }</button>
        </td>
        <td className="p-4 text-xs text-gray-400 font-bold">
            {dateConversion(item.updated_at)}
        </td>
        <td className="p-4 text-xs text-gray-400 font-bold">
            <div className="flex">

            <Link to={`/panel/suport/${item.id}`} className="text-blue-700 border border-blue-700 rounded-xl p-2 px-3">
                مشاهده
            </Link>
            </div>
        </td>
    </tr>
  )
}
