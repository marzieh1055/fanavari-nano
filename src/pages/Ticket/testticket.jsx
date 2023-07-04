import React, { useContext, useState } from "react";
import Axios from "../../../axiosinstancs";
import { useEffect } from "react";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import DeleteUser from "../../components/modal/DeleteUser";
import ItemInTesttikets from "./Comp/ItemInTesttikets";



export default function Testticket() {
    const { userDatas } = useContext(UserDataContext)
    const [isPerson, setIsPerson] = useState(true);
    const [archiveticket, setarchiveticket] = useState([]);
    const [unresolvedticket, setunresolvedticket] = useState(null);
    const [openedticket, setopenedticket] = useState([]);
    const [Allticket, setAllticket] = useState([]);
    const [selectedItem, setSelectedItem] = useState("all");
    const [IsLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(null);

    useEffect(() => {
        getAllticket()
        getarchiveticket()
        getopenedticket()
        getunresolvedticket()
    }, [showDelete]);

    console.log(selectedItem);
    // نمایش تیکت های بسته شده
    const getarchiveticket = () => {
        Axios.get("/api/admin/archive_ticket").then(async res => {
            // console.log(res.data)
            setarchiveticket(res.data)
            setIsLoading(false)
        }
        ).catch(err => {
            console.log(err)
            setIsLoading(false)
        }
        )
    }
    // مشاهده تیکت های باز

    const getopenedticket = () => {
        Axios.get("/api/admin/opened_ticket").then(async res => {
            // console.log(res.data)
            setopenedticket(res.data)
            setIsLoading(false)
        }
        ).catch(err => {
            console.log(err)
            setIsLoading(false)
        }
        )
    }
    // مشاهده تیکت های پاسخ داده نشده

    const getunresolvedticket = () => {
        Axios.get("/api/admin/unresolved_ticket").then(async res => {
            // console.log(res.data)
            setunresolvedticket(res.data)
            setIsLoading(false)
        }
        ).catch(err => {
            console.log(err)
            setIsLoading(false)
        }
        )
    }
    const getAllticket = () => {
        Axios.get("/api/admin/ticket_admin").then(async res => {
            console.log(res.data)
            setAllticket(res.data)
            setIsLoading(false)
        }
        ).catch(err => {
            console.log(err)
            setIsLoading(false)
        }
        )
    }

    const changeHandler = (e) => {
        console.log(e.target.value);
        setSelectedItem(e.target.value)
    }
    
    if (IsLoading) return <Loader />
    if (userDatas && userDatas && (userDatas.user.type === "admin" || userDatas.user.type === "Admin")) return (
        <div>
        <div className=" py-6">
          <p className="text-xl font-extrabold">مشاهده تیکت ها</p>
        </div>
        <div className="flex item-center p-3">
            <select name="select" className="border-gray-300 rounded-xl  text-xm mx-1" onChange={changeHandler}>
                <option value="all">همه</option>
                <option value="open">تیکت های باز</option>
                <option value="archive">تیکت های بسته شده</option>
                <option value="unresolved">تیکت های پاسخ داده نشده</option>
            </select>

            <p className="p-3">تعداد تیکت ها : {   selectedItem === "all" ? Allticket.length :
                                    selectedItem === "open" ? openedticket.length :
                                    selectedItem === "archive" ? archiveticket.length :
                                    selectedItem === "unresolved" ? unresolvedticket.length : ""
            }</p>
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
              {selectedItem === "all" && Allticket && Allticket.map((item , index) => {
                if (Allticket) return <ItemInTesttikets key={index} item={item}/>
              })}
              {selectedItem === "open" && openedticket && openedticket.map((item , index) => {
                if (openedticket) return <ItemInTesttikets key={index} item={item}/>
              })}
              {selectedItem === "archive" && archiveticket && archiveticket.map((item , index) => {
                if (archiveticket) return <ItemInTesttikets key={index} item={item}/>
              })}
              {selectedItem === "unresolved" && unresolvedticket.map((item , index) => {
                if (unresolvedticket) return <ItemInTesttikets key={index} item={item}/>
              })}
  
  
            </tbody>
          </table>
        </div>
      </div>
    );
}