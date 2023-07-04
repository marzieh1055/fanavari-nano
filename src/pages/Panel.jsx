import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../components/Topbar/Topbar'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { UserDataContext } from '../contexts/UserData.Provider'
import SidebarUser from '../components/Sidebar/sidebarUser/SidebarUser'
import user2 from "../assets/imges/user-(2).png"

export default function Panel() {
  const {userDatas} = useContext(UserDataContext)
  const navigate = useNavigate();
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
            drop : [ "لیست درخواست ها"],
            links : [ "/panel/requests" ]
          },
          {title : "پشتیبانی",
            drop : ["مشاهده تیکت ها" ],
            links : ["/panel/testtikets"  ]
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
        drop : ["پروفایل کاربری"  ],
        links : ["/panel/genuineUserInfo" ]
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
        drop : ["پروفایل کاربری"  ],
        links : ["/panel/legaluserInfo" ]
        },

      ]} /> }


      { userDatas && (userDatas.user.type === "expert") && <SidebarUser objects={[
          {title : "درخواست ها",
            drop : ["درخواست های جاری"],
            links : ["/panel/expertViewAllRequest"]
          },
          {title : "پشتیبانی",
            drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" ],
            links : ["/panel/ViewTicketsExpert" , "/panel/addTicketE"]
          },
          {title : "اطلاعات کاربری",
            drop : [ "پروفایل کاربری"  ],
            links : [ "/panel/userInfo" ]
          },
      ]} /> }

    {/* Left section */}
    {/* Left section */}

    <section className="w-c-2 bg-c">
      <Topbar avatar={user2} />
      <Outlet />
    </section>
  </div>
  )
}
