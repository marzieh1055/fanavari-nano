import React, { useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import Support from "../support/Support";
import Loading from "../../components/Loading/Loading";


export default function ViewTickets() {

  const [isLoading, setIsLoading] = useState(true)
  const [tickets, setTickets] = useState([])
  const [showSupport , setShowSupport] = useState(false)
  
  const [supportData , setSupportData] = useState({})


  useEffect(() => {
    const getTicket = () => {
      Axios.get("/api/v1/ticket").then(async (res) => {
        console.log(res.data);
        
        setTickets(res.data)
        setIsLoading(false)
      })
    }
    getTicket()
  }, [])

  const supportHandler = (event) => {
    setSupportData(event)
    setShowSupport(true)
  } 

  if (showSupport) return <Support datas={supportData} close={setShowSupport} />
  return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold">مشاهده تیکت ها</p>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        <table className="w-full ">
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3 rounded-r-xl ">شناسه </th>
              <th className="bg-white p-3 ">عنوان تیکت </th>
              <th className="bg-white p-3 ">وضعیت</th>
              <th className="bg-white p-3 ">بازشده در تاریخ </th>
              <th className="bg-white p-3 rounded-l-xl">اعمال </th>
            </tr>
          </thead>
            {isLoading && <Loading />}
          <tbody>
            {tickets && tickets.map((item) => {
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
                    <button className="text-green-600 border border-green-600 rounded-xl p-2 px-3">✓{item.status}</button>
                  </td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                    {item.created_at}
                  </td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                    <div className="flex">

                      <button onClick={() => supportHandler(item)} className="text-blue-700 border border-blue-700 rounded-xl p-2 px-3">
                        مشاهده
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}


          </tbody>
        </table>
      </div>
      <hr />
      <div className="flex justify-between py-4 text-gray-600 items-center">
        <div className="">نمایش 21-31 از 80 مورد</div>
        <div className="">
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {"<"}
          </button>
          <button className="text-gray-800 text-lg font-bold mx-2">6</button>
          <button className="text-gray-800 text-lg font-bold mx-2">5</button>
          <button className="text-gray-800 text-lg font-bold mx-2">4</button>
          <button className="text-gray-800 text-lg font-bold mx-2">3</button>
          <button className="text-gray-800 text-lg font-bold mx-2">2</button>
          <button className="text-gray-800 text-lg font-bold mx-2">1</button>
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {" "}
            {">"}{" "}
          </button>
        </div>
        <div className="flex">
          <button className="text-blue-700   p-2 font-bold text-sm">
            <span className="text-3xl">+</span> اضافه کردن کارشناس
          </button>
        </div>
      </div>
    </div>
  );
}
