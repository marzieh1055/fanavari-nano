import React from 'react'
// Components
import Expert from '../Expert/Expert'
import Button from '../Button/Button'

export default function KarshenasList({names , hidde}) {
  return (
    <div className="absolute shadow-c rounded-2xl w-c-17 top-12 text-sm right-1/2 translate-x-1/2 bg-white p-3.5 flex flex-col gap-2">
            <div className="p-2 flex justify-between">
              <div>لیست کارشناسان</div>
              <div onClick={() => hidde()}>
                <Button type="close" />
              </div>
            </div>
            {names.map(i => <Expert name={i} avatar="/src/assets/imges/user.png" />)}
    </div>
  )
}
