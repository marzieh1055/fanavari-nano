import React, { useContext, useState } from "react";
import Axios from "../../../axiosinstancs";
import { useEffect } from "react";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import DeleteUser from "../../components/modal/DeleteUser";



export default function testticket() {
    const { userDatas } = useContext(UserDataContext)
    const [isPerson, setIsPerson] = useState(true);
    const [archiveticket, setarchiveticket] = useState(null);
    const [unresolvedticket, setunresolvedticket] = useState(null);
    const [openedticket, setopenedticket] = useState(null);
    const [Allticket, setAllticket] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(null);

    useEffect(() => {
        getUserGenuine();
        getUserLegal();
    }, [showDelete]);

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
            console.log(res.data)
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
            console.log(res.data)
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
    // const deleteUserHandler = (userId) => {
    //   axios.delete(`/user/${userId}` , {headers : ["Access-Control-Allow-Origin"] })
    //     .then((res) => console.log(res))
    // }
    if (IsLoading) return <Loader />
    if (userDatas && userDatas && (userDatas.user.type === "admin" || userDatas.user.type === "Admin")) return (
        <div>

        </div>
    );
}