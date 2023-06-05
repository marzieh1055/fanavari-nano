import React, { useState } from "react";
import Axios from "../../../axiosinstancs";
import axios from "axios";
import { useEffect } from "react";
export default function ViewRequestExpert() {
    const [isPerson, setIsPerson] = useState(true);
    const [CurrentRequests, setCurrentRequests] = useState([]);
    const [AllRequests, setAlltRequests] = useState([]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [showDetailsUser, setShowDetailsUser] = useState(false);
    const [selectUser, setSelectUser] = useState({});

    useEffect(() => {
        getAllRequests();
        getCurrentRequests();
    }, []);
    const getCurrentRequests = () => {
        Axios.get(`/api/admin/get_current_requests/${id}`).then(async res => {
            console.log(res.data)
            setCurrentRequests(res.data)
        }
        ).catch(err => {
            console.log(err)
        }
        )
    }
    const getAllRequests = () => {
        Axios.get(`/api/admin/get_request_with_expert/${id}`).then(async res => {
            console.log(res.data)
            setAlltRequests(res.data)
        }
        ).catch(err => {
            console.log(err)
        }
        )
    }



    const handleSelectRow = (item) => {
        setSelectedItem(item);
        setShowDetailsUser(true)
        // console.log(item);
    };


    // if (showDetailsUser) return <ViewRequestExpert close={setShowDetailsUser} details={selectedItem} />
    return (
        <div>
            <div className="flex justify-between py-6">
                <div className="flex bg-white rounded-xl">
                    <button
                        className={`${!isPerson && " bg-blue-600 text-white "
                            } p-3 ml-4 rounded-xl`}
                        onClick={() => {
                            isPerson(!isPerson);
                        }}
                    >
                        جاری
                    </button>
                    <button
                        className={`${isPerson && " bg-blue-600 text-white "
                            } rounded-xl p-3 `}
                        onClick={() => {
                            setIsPerson(!isPerson);
                        }}
                    >
                        کل
                    </button>
                </div>
            </div>
            <div className="max-h-[60vh] overflow-y-scroll">
                {isPerson ? (
                    <table className="w-full ">
                        <tr className=" sticky top-0   ">
                            <th className="bg-white p-3 ">درخواست دهنده </th>
                            <th className="bg-white p-3 ">نوع درخواست</th>
                            <th className="bg-white p-3 ">تاریخ ثبت درخواست  </th>
                        </tr>
                        {CurrentRequests && CurrentRequests.map((CurrentRequest) => {
                            return (
                                <tr
                                    key={CurrentRequest.id}
                                    id={CurrentRequest.id}

                                    className={
                                        selectedItem?.id === CurrentRequest.id
                                            ? console.log(CurrentRequest.id)
                                            : null
                                    }
                                >
                                    <td className="p-4 text-xs text-gray-400 font-bold">{CurrentRequest.user.name}</td>
                                    <td className="p-4 text-xs text-gray-400 font-bold">{CurrentRequest.Request.type}</td>
                                    <td className="p-4 text-xs text-gray-400 font-bold">
                                        {CurrentRequest.Request.created_at}
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                ) : (
                    <table className="w-full ">
                        <tr className=" sticky top-0   ">
                            <th className="bg-white p-3 ">درخواست دهنده </th>
                            <th className="bg-white p-3 ">نوع درخواست</th>
                            <th className="bg-white p-3 ">تاریخ ثبت درخواست  </th>
                        </tr>
                        {AllRequests && AllRequests.map((AllRequests) => {
                            return (
                                <tr
                                    //  className="p-4 text-xs text-gray-400 font-bold"
                                    id={AllRequests.id}
                                    className={selectedItem?.id === AllRequests.id
                                        ? console.log(AllRequests.id)
                                        : "p-4 text-xs text-gray-400 font-bold"
                                    }
                                >

                                    <td className="p-4 text-xs text-gray-400 font-bold">{CurrentRequests.user.name}</td>
                                    <td className="p-4 text-xs text-gray-400 font-bold">{CurrentRequests.Request.type}</td>
                                    <td className="p-4 text-xs text-gray-400 font-bold">
                                        {CurrentRequests.Request.created_at}
                                    </td>
                                </tr>
                            );
                        })}

                    </table>
                )}
            </div>
            <hr />
        </div>
    );
}
