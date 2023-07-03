import React, { useContext, useState } from "react";
import Axios from "../../../axiosinstancs";
import { useEffect } from "react";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import DeleteUser from "../../components/modal/DeleteUser";




export default function ViewUsers() {
  const {userDatas} = useContext(UserDataContext)
  const [isPerson, setIsPerson] = useState(true);
  const [allGenuineUser, setAllGenuineUser] = useState(null);
  const [allLegalUser, setAllLegalUser] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(null);

  useEffect(() => {
    getUserGenuine();
    getUserLegal();
  }, [showDelete]);
  const getUserGenuine = () => {
    Axios.get("/api/admin/get_genuine").then(async res => {
      // console.log(res.data)
      setAllGenuineUser(res.data)
      setIsLoading(false)
    }
    ).catch(err => {
      console.log(err)
      setIsLoading(false)
    }
    )
  }
  const getUserLegal = () => {
    Axios.get("/api/admin/get_legal").then(async res => {
      console.log(res.data)
      setAllLegalUser(res.data)
      setIsLoading(false)
    }
    ).catch(err => {
      console.log(err)
      setIsLoading(false)
    }
    )
  }
  // const deleteUserHandler = (userId) => {
  //   axios.delete(`/user/${userId}` , {headers : ["Access-Control-Allow-Origin"] })
  //     .then((res) => console.log(res))
  // }
  if (IsLoading) return <Loader />
  if (userDatas && userDatas && (userDatas.user.type === "admin" || userDatas.user.type === "Admin")) return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-xl font-extrabold" >مشاهده کاربران</p>
        <div className="flex bg-white rounded-xl">
          <button
            className={`${!isPerson && " bg-blue-600 text-white "
              } p-3 ml-4 rounded-xl`}
            onClick={() => {
              setIsPerson(!isPerson);
            }}
          >
            حقوقی
          </button>
          <button
            className={`${isPerson && " bg-blue-600 text-white "
              } rounded-xl p-3 `}
            onClick={() => {
              setIsPerson(!isPerson);
            }}
            >
            حقیقی
          </button>
        </div>
      </div>
            {showDelete !== null && <DeleteUser close={setShowDelete} userDataaa={showDelete} />}
      <div className="max-h-[60vh] overflow-y-scroll">
        {isPerson ? (
          <table className="w-full ">
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3 rounded-r-xl ">نمایه </th>
              <th className="bg-white p-3 ">نام </th>
              <th className="bg-white p-3 ">نام خانوادگی</th>
              <th className="bg-white p-3 ">تاریخ ثبت نام کاربر </th>
              <th className="bg-white p-3 rounded-l-xl">اعمال </th>
            </tr>
            {allGenuineUser && allGenuineUser.map((GenuineUser) => {
              return (
                <tr
                  key={GenuineUser.id}
                  id={GenuineUser.id}
                  
                  className={
                    selectedItem?.id === GenuineUser.id
                    ? console.log(GenuineUser.id)
                    : null
                  }
                  >
                  <td>
                    {" "}
                    <img
                      className="w-10"
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
                    <div className="flex">
                      <button onClick={() => setShowDelete(GenuineUser)} className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                        حذف کاربر
                      </button>
                      <Link to={`/panel/Viewdetailuser/${GenuineUser.id}`} className="text-blue-700 border rounded-2xl p-2 ">
                        اطلاعات بیشتر
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (

          <table className="w-full ">
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3 rounded-r-xl ">نام شرکت </th>
              <th className="bg-white p-3 ">نام ونام خانوادگی نماینده </th>
              <th className="bg-white p-3 ">شناسه مالی شرکت</th>
              <th className="bg-white p-3 rounded-l-xl">اعمال </th>
            </tr>
            {allLegalUser && allLegalUser.map((LegalUser) => {
              return (
                <tr
                key={LegalUser.id}
                id={LegalUser.id}
                
                className={
                  selectedItem?.id === LegalUser.id
                    ? console.log(LegalUser.id)
                    : null
                }
              >
                  <td className="p-4 text-xs text-gray-400 font-bold">{LegalUser.company_name}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold">{LegalUser.name}{LegalUser.family}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold">{LegalUser.national_company}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                    <div className="flex">
                      <button onClick={() => setShowDelete(LegalUser)} className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                        حذف کاربر
                      </button>
                      <Link to={`/panel/Viewdetailuser/${LegalUser.id}`} className="text-blue-700 border rounded-2xl p-2 ">
                        اطلاعات بیشتر
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}

          </table>
        )}
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
      </div>
    </div>
  );
}
