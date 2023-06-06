import React from 'react'
import './DropdownUser.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function DropdownUser({route , title , itemsList}) {
  const [showOption , setShowOption] = useState(false)
  return (
    <div style={{marginBottom : "10px"}}  className={showOption ? "-ml-4 -mr-4 px-6 rounded-3xl bg-c-4" : "flex items-center gap-4 h-12"} >
          <button onClick={() => setShowOption(!showOption)} className="w-full flex items-center justify-between h-12">
            <div className="flex items-center gap-4">
              <img
                className="w-c-4 h-c-4"
                src="/src/assets/imges/customer.png"
                alt=""
                width={20}
              />
              <span className="text-c-5" href="">
                {title}
              </span>
            </div>
            <img src="/src/assets/imges/Vector2.png" alt="" />
          </button>
          <div className={showOption ? "flex flex-col" : "hidden"}>
            {/* Shayad Badan Nesbat Be data haye Api Inja Avazzz Beshe */}
            {itemsList.map((i , index) => <Link to={route[index]} key={index} className="h-12 flex items-center">{i}</Link>)}
          </div>
    </div>
  )
}
