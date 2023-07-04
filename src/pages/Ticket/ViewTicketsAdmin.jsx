import React, { useContext, useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import Loader from "../../components/Loader/Loader";
import { dateConversion } from "../../helper/dateConversion.cjs";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";

export default function ViewTicketsAdmin() {
  const {userDatas} = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)
  const [tickets, setTickets] = useState([])
  
  useEffect(() => {
    const getTicket = () => {
      Axios.get("/api/admin/ticket_admin").then(async (res) => {
        console.log(res.data);
        const oldMessage = res.data.reverse()

        setTickets(oldMessage)
        setIsLoading(false)
      })
    }
    getTicket()
  }, [])

  
  //public
  if (isLoading) return <Loader />
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
              );
            })}


          </tbody>
        </table>
      </div>
      <hr />
      {/* <div className="flex justify-between py-4 text-gray-600 items-center">
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
      </div> */}
    </div>
  );
}
