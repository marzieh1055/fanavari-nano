import React, { useContext, useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Counter from "../../components/Counter/Counter";
import User from "../../components/User/User";
import Axios from "../../../axiosinstancs";
import ViewDetailExpert from "../Expert/ViewDetailExpert";
import Loading from "../../components/Loading/Loading";

import {UserDataContext} from "../../contexts/UserData.Provider";
import Ellipse2 from "../../assets/imges/Ellipse 2.png"
import Ellipse1 from "../../assets/imges/Ellipse 1.png"
import Ellipse4 from "../../assets/imges/Ellipse 4.png"
import Ellipse3 from "../../assets/imges/Ellipse 3.png"
import Ellipse6 from "../../assets/imges/Ellipse 6.png"
import Ellipse5 from "../../assets/imges/Ellipse 5.png"
const DashboardUser = () => {
  const {userDatas} = useContext(UserDataContext)


  const [allRequest, setAllRequest] = useState(null);
  const [allExpert, setAllExpert] = useState(null)
  const [allUser, setAllUser] = useState(null)
  const [Expert, setExpert] = useState(null)
  
  
  const [showDetailsUser, setShowDetailsUser] = useState(false)
  const [selectItemE, setSelectItemE] = useState(null)


  const getAllexpert = () => {
    Axios.get("/api/admin/count_experts").then(async res => {
      console.log(res)
      setAllExpert(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  const getAllrequest = () => {
    Axios.get("/api/admin/count_requests").then(async res => {
      console.log(res)
      setAllRequest(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  const getAllUser = () => {
    Axios.get("/api/admin/count_users").then(async res => {
      console.log(res)
      setAllUser(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  // const getExpert = () => {
  //   Axios.get("/api/admin/expert").then(async res => {
  //     console.log(res)
  //     setAllExpert(res.data)
  //   }
  //   ).catch(err => {
  //     console.log(err)
  //   }
  //   )
  // }
  const getExpert = () => {
    Axios.get("/api/admin/expert").then(async res => {
      console.log(res)
      setExpert(res.data)

    }
    ).catch(err => {
      console.log(err)
    }
    )
  }

  useEffect(() => {
    getAllUser();
    getAllexpert();
    getAllrequest();
    getExpert()
  }, []);
  const detailsHandler = (e) => {
    setSelectItemE(e)
    setShowDetailsUser(true)

  }

  if (showDetailsUser) return <ViewDetailExpert close={setShowDetailsUser} details={selectItemE} />
  if (userDatas.user.type === "genuine" || userDatas.user.type === "legal" ) return (
    <>
      <div className="p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">دسترسی سریع</h2>
        <div className="flex gap-6 text-white">
          <div className="w-1/3 h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <div>مشاهده درخواست ها</div>
            <div>
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse2}
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse1}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/3 h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <div>مشاهده کارشناسان</div>
            <div>
              <img
                className="absolute left-1 inset-y-0"
                src={Ellipse4}
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse3}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/3 h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <div>مشاهده کاربران</div>
            <div>
              <img
                className="absolute left-1 inset-y-0"
                src={Ellipse6}
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-6">
        
       
      </div>
    </>
  );
};

export default DashboardUser;
