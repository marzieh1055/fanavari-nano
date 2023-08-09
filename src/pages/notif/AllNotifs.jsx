import React, { useContext, useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";
export default function AllNotifs() {
  const {userDatas} = useContext(UserDataContext)

  const [IsLoading, setIsLoading] = useState(true);
  const [allnotif, setAllnotif] = useState(null);
  const [unreadNotif, setUnreadNotif] = useState([]);
  
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
              <th className="bg-white p-3 ">درخواست</th>
              <th className="bg-white p-3 ">تاریخ ارسال</th>
            </tr>
          </thead>
          <tbody >
            {unreadNotif && unreadNotif.map((notif) => {
              if (notif.data.request_id && userDatas.user.type === "genuine" || userDatas.user.type === "legal") {
                return (
                  <tr
                  key={notif.id}
                  id={notif.id}
                  >
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.sender}</td>
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.message}</td>
                    <Link to={`/panel/viewRequest/${notif.data.request_id}`}>
                      <button className="p-2 bg-blue-500 text-white rounded">مشاهده</button>
                    </Link>       
                      <td className="p-4 text-xs text-blue-400 font-bold">{onlyDateConversion(notif.created_at)}
                    </td>  
                  </tr>
                );
              } if (notif.data.request_id && userDatas.user.type === "expert") {
                return (
                  <tr
                    key={notif.id}
                    id={notif.id}
                  >
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.sender}</td>
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.message}</td>
                    <Link to={`/panel/expertCheckRequest/${notif.data.request_id}`}>
                    <button className="p-2 bg-blue-500 text-white rounded">مشاهده</button>
                    </Link>       
                      <td className="p-4 text-xs text-blue-400 font-bold">{onlyDateConversion(notif.created_at)}
                    </td>  
                  </tr>
                );
              } if (notif.data.request_id && userDatas.user.type === "admin") {
                return (
                  <tr
                  key={notif.id}
                  id={notif.id}
                  >
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.sender}</td>
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.message}</td>
                    <Link to={`/panel/AdminCheckRequest/${notif.data.request_id}`}>
                      <button className="p-2 bg-blue-500 text-white rounded">مشاهده</button>
                    </Link>    
                      <td className="p-4 text-xs text-blue-400 font-bold">{onlyDateConversion(notif.created_at)}
                    </td>  
                  </tr>
                );
              } else {
                return (
                  <tr
                      key={notif.id}
                      id={notif.id}
                    >                  
                    <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.sender}</td>
    
                      <td className="p-4 text-xs text-blue-400 font-bold">{notif.data.message}</td>
                      <button className="p-2 bg-gray-500 text-white rounded">مشاهده</button>
                      <td className="p-4 text-xs text-blue-400 font-bold">{onlyDateConversion(notif.created_at)} 
                    </td>
                  </tr>
                )
              }
            })}
            </tbody>
            <tbody >

            {filteredArray2 && filteredArray2.map((notif) => {
              if (notif.data.request_id && userDatas.user.type === "genuine" || userDatas.user.type === "legal") {
                return (
                  <tr
                  key={notif.id}
                  id={notif.id}
                  >
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.sender}</td>
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.message}</td>
                    <Link to={`/panel/viewRequest/${notif.data.request_id}`}>
                      <button className="p-2 bg-blue-500 text-white rounded">مشاهده</button>
                    </Link>       
                      <td className="p-4 text-xs text-gray-400 font-bold">{onlyDateConversion(notif.created_at)}
                    </td>  
                  </tr>
                );
              } if (notif.data.request_id && userDatas.user.type === "expert") {
                return (
                  <tr
                    key={notif.id}
                    id={notif.id}
                  >
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.sender}</td>
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.message}</td>
                    <Link to={`/panel/expertCheckRequest/${notif.data.request_id}`}>
                    <button className="p-2 bg-blue-500 text-white rounded">مشاهده</button>
                    </Link>       
                      <td className="p-4 text-xs text-gray-400 font-bold">{onlyDateConversion(notif.created_at)}
                    </td>  
                  </tr>
                );
              } if (notif.data.request_id && userDatas.user.type === "admin") {
                return (
                  <tr
                  key={notif.id}
                  id={notif.id}
                  >
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.sender}</td>
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.message}</td>
                    <Link to={`/panel/AdminCheckRequest/${notif.data.request_id}`}>
                      <button className="p-2 bg-blue-500 text-white rounded">مشاهده</button>
                    </Link>    
                      <td className="p-4 text-xs text-gray-400 font-bold">{onlyDateConversion(notif.created_at)}
                    </td>  
                  </tr>
                );
              } else {
                console.log(Boolean(notif.data.request_id));
                console.log(notif.data.message);
                return (
                  <tr
                      key={notif.id}
                      id={notif.id}
                    >                  
                    <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.sender}</td>
    
                      <td className="p-4 text-xs text-gray-400 font-bold">{notif.data.message}</td>
                      <button className="p-2 bg-gray-500 text-white rounded">مشاهده</button>
                      <td className="p-4 text-xs text-gray-400 font-bold">{onlyDateConversion(notif.created_at)} 
                    </td>
                  </tr>
                )
              }
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
