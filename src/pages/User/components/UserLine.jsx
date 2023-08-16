import React from 'react'
import { onlyDateConversion } from '../../../helper/dateConversion.cjs'
import user from "../../../assets/imges/user.png"

export default function UserLine({GenuineUser , setShowMore}) {
    console.log(GenuineUser);
  return (
    <tr
        key={GenuineUser.id}
        id={GenuineUser.id}
    >
        <td>
        {" "}
        <img
            className="w-10 h-10"
            src={user}
            alt=""
        />
        </td>
        <td className="p-4 text-xs text-gray-400 font-bold">{GenuineUser.name}</td>
        <td className="p-4 text-xs text-gray-400 font-bold">{GenuineUser.family}</td>
        <td className="p-4 text-xs text-gray-400 font-bold">
        {onlyDateConversion(GenuineUser.created_at)}
        </td>
        <td className="p-4 text-xs text-gray-400 font-bold">
        <button onClick={() => setShowMore(GenuineUser)} className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
            بیشتر
        </button>
        </td>
    </tr>
  )
}
