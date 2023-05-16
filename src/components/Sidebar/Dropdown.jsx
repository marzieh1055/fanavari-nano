import React from 'react'
import './Dropdown.css'
import { useState } from 'react'
export default function Dropdown({title , itemsList}) {
  const [showOption , setShowOption] = useState(false)
  return (
    <div  className={showOption ? "-mr-6 px-6 rounded-3xl bg-c-4" : "flex items-center gap-4 h-12"} >
          <button onClick={() => setShowOption(!showOption)} className="w-full flex items-center justify-between h-12">
            <div className="flex items-center gap-4">
              <img
                className="w-c-4 h-c-4"
                src="/src/assets/imges/Vector1.png"
                alt=""
              />
              <span className="text-c-5" href="">
                {title}
              </span>
            </div>
            <img src="/src/assets/imges/Vector2.png" alt="" />
          </button>
          <div className={showOption ? "flex flex-col" : "hidden"}>
            {/* Shayad Badan Nesbat Be data haye Api Inja Avazzz Beshe */}
            {itemsList.map(i => <a className="h-12 flex items-center" href="">{i}</a>)}
            
          </div>
    </div>
  )
}
