import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../components/Topbar/Topbar'
import { Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { UserDataContext } from '../contexts/UserData.Provider'
import SidebarUser from '../components/Sidebar/sidebarUser/SidebarUser'
import user2 from "../assets/imges/user-(2).png"
import AccessError from './404/AccessError'
import { userRouts , expertRouts , adminRouts , publicRouts } from '../auth/authRoutes'

export default function Panel() {
  const {userDatas} = useContext(UserDataContext)
  const navigate = useNavigate();
  let { pathname: pass } = useLocation();
  const [loc , setLoc] = useState(pass.split("/")[2])

  const datasLoc = window.localStorage.getItem("userData")
  const parsData = JSON.parse(datasLoc)
  
  console.log(loc);
  useEffect(() => {
    setLoc(pass.split("/")[2])
  } , [pass])
  useEffect(() => {
    if (!userDatas) {
      navigate("/auth/login")
    }
  } , [])
  return (
    <div className="w-full max-w-c mx-auto bg-c flex p-6 gap-6">
    {/* Sidebar section */}
      { userDatas && (userDatas.user.type === "admin" || userDatas.user.type === "Admin") && <SidebarUser objects={[
          {title : "کارشناسان",
            drop : ["لیست کارشناسان" , "اضافه کردن کارشناس"],
            links : ["/panel/viewExpert" , "/panel/Addexpert" ]
          },
          {title : "کاربران",
            drop : [ "لیست کاربران" ],
            links : ["/panel/viewUsers"   ]
          },
          {title : "درخواست ها",
            drop : [ "لیست درخواست ها" , "درخواست های حذف"],
            links : [ "/panel/requests" , "/panel/ViewDeleteReqs"]
          },
          {title : "پشتیبانی",
            drop : ["مشاهده تیکت ها" ],
            links : ["/panel/Testticket"  ]
          },
          {title : "اطلاعات کاربری",
            drop : [" پروفایل کاربری" ],
            links : ["/panel/userInfo"  ]
          },
          
      ]} /> }
      { userDatas && (userDatas.user.type === "genuine") && <SidebarUser objects={[
        {title : "خدمات",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات" , "درخواست های جاری" ,],
          links : ["/panel/guarantee" , "/panel/tashilat/1" , "/panel/openedRequests" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" ,   "اعلانات"],
          links : ["/panel/viewTickets" , "/panel/addTicket"  , "/panel/allNotifs" ]
        },
        {title : "راهنمای سایت",
        drop : [  "راهنمای سایت" ],
        links : ["/panel/siteGuide"  ]
        },
        {title : "اطلاعات کاربری",
        drop : ["پروفایل کاربری" , "تغییر رمز عبور" ],
        links : ["/panel/genuineUserInfo" , "/panel/changePass" ]
        },

      ]} /> }

      { userDatas && (userDatas.user.type === "legal") && <SidebarUser objects={[
        {title : "خدمات",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات" , "درخواست های جاری" ,],
          links : ["/panel/guarantee" , "/panel/tashilat/1" , "/panel/openedRequests" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" ,  "اعلانات"],
          links : ["/panel/viewTickets" , "/panel/addTicket" ,  "/panel/allNotifs" ]
        },
        {title : "راهنمای سایت",
        drop : [  "راهنمای سایت" ],
        links : ["/panel/siteGuide"  ]
      },
        {title : "اطلاعات کاربری",
        drop : ["پروفایل کاربری" , "تغییر رمز عبور"  ],
        links : ["/panel/legaluserInfo" , "/panel/changePass"]
        },

      ]} /> }


      { userDatas && (userDatas.user.type === "expert") && <SidebarUser objects={[
          {title : "درخواست ها",
            drop : ["درخواست های جاری"],
            links : ["/panel/expertViewAllRequest"]
          },
          {title : "پشتیبانی",
            drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" ],
            links : ["/panel/TestticketExpert" , "/panel/addTicketE"]
          },
          {title : "اطلاعات کاربری",
            drop : [ "پروفایل کاربری" ],
            links : [ "/panel/expertInfo" ]
          },
      ]} /> }

    {/* Left section */}
    {/* Left section */}

    <section className="w-c-2 bg-c">
      <Topbar avatar={user2} />
      {
        // if dataLoc ---------------------------------------------------------------------------------
        datasLoc ?
          // USER
          ((parsData.user.type === "genuine" || parsData.user.type === "legal") && userRouts.includes(loc)) ?
            <Outlet /> :

          // EXPERT
          ((parsData.user.type === "expert") && expertRouts.includes(loc)) ?
            <Outlet /> :

          // ADMIN
          ((parsData.user.type === "admin") && adminRouts.includes(loc)) ?
            <Outlet /> :
          
          // PUBLIC
          (publicRouts.includes(loc)) ?
            <Outlet /> 
            :
          // NO ACCSESS
          <Navigate to={"/panel/accesserror"} />

        // if dataLoc === null ------------------------------------------------------------------------
        :
          // USER
          (userDatas && (userDatas.user.type === "genuine" || userDatas.user.type === "legal") && userRouts.includes(loc)) ?
            <Outlet /> :

          // EXPERT
          (userDatas && (userDatas.user.type === "expert") && expertRouts.includes(loc)) ?
            <Outlet /> :

          // ADMIN
          (userDatas && (userDatas.user.type === "admin") && adminRouts.includes(loc)) ?
            <Outlet /> :
          
          // PUBLIC
          userDatas && (publicRouts.includes(loc)) ?
            <Outlet /> 
            :
          // NO ACCSESS
          <Navigate to={"/panel/accesserror"} />
      }
    </section>
  </div>
  )
}
