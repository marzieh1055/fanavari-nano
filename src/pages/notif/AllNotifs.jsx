import React, { useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import Loader from "../../components/Loader/Loader";
export default function AllNotifs() {
  const [IsLoading, setIsLoading] = useState(true);
  const [allnotif, setAllnotif] = useState(null);
  const [unreadNotif, setUnreadNotif] = useState([
    // {
    //   created_at: "2023-05-30T10:00:04.000000Z",
    //   data: {message: 'شما یک تیکت جدید دارید'},
    //   id: "dee891e6-0068-46de-ac9d-c9d05f7538a3",
    //   notifiable_id: 8,
    //   notifiable_type: "App\\Models\\User",
    //   read_at : null,
    //   type :  "App\\Notifications\\Notificate",
    //   updated_at : "2023-05-30T10:00:04.000000Z",
    // },
    // {
    //   created_at: "2023-05-30T06:29:52.000000Z",
    //   data: {message: 'یک درخواست حذف درخواست دارید!!'},
    //   id: "3e55df36-d8fe-46a3-9f57-0b63a4a7c542",
    //   notifiable_id: 8,
    //   notifiable_type: "App\\Models\\User",
    //   read_at: "2023-06-22T08:35:41.000000Z",
    //   type: "App\\Notifications\\Notificate",
    //   updated_at: "2023-06-22T08:35:41.000000Z",
    // }
  ]);
  
  useEffect(() => {
    getAllnotification()

  }, []);

  const getAllnotification = () => {
    Axios.get(`/api/v1/get_all_notification`).then(async res => {
      console.log(res.data)
      setAllnotif(res.data)
      setIsLoading(false)
    }
    ).catch(err => {
      console.log(err)
      setIsLoading(false)
    }
    )
    Axios.get(`/api/v1/get_unread_notification`).then(async res => {
      console.log(res.data)
      setUnreadNotif(res.data)
      setIsLoading(false)
    }
    ).catch(err => {
      console.log(err)
      setIsLoading(false)
    }
    )
  }

  // پیدا کردن عناصر مشترک
  const commonElements = allnotif && unreadNotif ? unreadNotif.filter(item1 => allnotif.some(item2 => item1.id === item2.id)) : []

  // حذف عناصر مشترک از آرایه دوم
  const filteredArray2 = allnotif && unreadNotif ? allnotif.filter(item2 => !commonElements.some(item1 => item1.id === item2.id)) : []
  if (IsLoading) return <Loader />
  return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-xl font-extrabold">مشاهده اعلانات</p>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        <table className="w-full ">
          <thead>
            <tr className=" top-0   ">
              <th className="bg-white p-3 rounded-r-xl ">فرستنده </th>
              <th className="bg-white p-3 ">توضیحات </th>
              <th className="bg-white p-3 ">تاریخ ارسال</th>
            </tr>
          </thead>
          <tbody >
            {unreadNotif && unreadNotif.map((notif) => {
              return (
                <tr
                  key={notif.id}
                  id={notif.id}
                >                  
                <td className="p-4 text-xs text-red-400 font-bold">{notif.data.sender}</td>

                  <td className="p-4 text-xs text-red-400 font-bold">{notif.data.message}</td>
                  <td className="p-4 text-xs text-red-400 font-bold">{onlyDateConversion(notif.created_at)} </td>

                </tr>
              );
            })}
            </tbody>
            <tbody >

            {filteredArray2 && filteredArray2.map((notif) => {
              return (
                <tr
                  key={notif.id}
                  id={notif.id}
                >                  
                <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.sender}</td>

                  <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.message}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold">{onlyDateConversion(notif.created_at)} </td>

                </tr>
              );
            })}
          </tbody>
        </table>
          { allnotif && allnotif.length === 0 &&
            <div style={{display: "flex" , justifyContent : "center"}} className="w-full"><p className="p-5">اعلانی وجود ندارد</p></div>
          }
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
          <select
            dir="ltr"
            name=""
            id=""
            className="rounded outline-none w-20 text-gray-800 border ml-4"
          >
            <option value="10">10</option>
            <option value="10">15</option>
            <option value="10">20</option>
          </select>
          <p>تعداد کاربر در هر صفحه</p>
        </div>
      </div> */}
    </div>
  );
}
