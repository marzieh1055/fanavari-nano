import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { UserDataContext } from '../contexts/UserData.Provider'
import SidebarUser from '../components/Sidebar/sidebarUser/SidebarUser'


export default function Panel() {
  const {userDatas} = useContext(UserDataContext)
  
  return (
    <div className="w-full max-w-c mx-auto bg-c flex p-6 gap-6">
    {/* Sidebar section */}
    
    {/* {
      location.pathname === "/panel/dashboardUser" && <Sidebar objects={[
        {title : "خدمات",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات"],
          links : ["/panel/guarantee" , "/panel/addFacilities" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" , "درخواست های جاری" , "راهنمای سایت"],
          links : ["/panel/viewTickets" , "/panel/addTicket" , "/panel/openedRequests" , "/panel/siteGuide" ]
        },
        {title : "اطلاعات کاربری",
          drop : [],
        },

      ]} /> 
    }
    {
      location.pathname === "/panel/dashboardExpert" && <Sidebar objects={[
        {title : "خدمات",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات"],
          links : ["/panel/guarantee" , "/panel/addFacilities" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "ثبت تیکت جدید" , "درخواست های جاری" , "راهنما"],
          links : ["/panel/viewTickets" , "/panel/addTicket" , "/panel/openedRequests" , "/panel/siteGuide" ]
        },
        {title : "اطلاعات کاربری",
          drop : [],
          links : ["/panel/addTicket"]
        },

      ]} /> 
    }
    {
      location.pathname === "/panel/dashboard" && <Sidebar objects={[
        {title : "کارشناسان",
          drop : ["لیست کارشناسان" , "اضافه کردن کارشناس"],
          links : ["/panel/viewExpert" , "/panel/Addexpert" ]
        },
        {title : "کاربران",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات"],
          links : ["/panel/guarantee" , "/panel/addFacilities" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "لیست درخواست ها"],
          links : ["/panel/viewTickets" , "/panel/requests" ]
        },
        {title : "اطلاعات کاربری",
          drop : [],
        },

      ]} /> 
    } */}
    {/* <Sidebar /> */}

    { <SidebarUser objects={[
        {title : "خدمات",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات" , "درخواست های جاری" ,],
          links : ["/panel/guarantee" , "/panel/addFacilities" , "/panel/openedRequests" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" ,  "راهنمای سایت"],
          links : ["/panel/viewTickets" , "/panel/addTicket" , "/panel/siteGuide" ]
        },
        {title : "اطلاعات کاربری",
        drop : ["پروفایل کاربری"  ],
        links : ["/panel/userInfo" ]
        },

      ]} />}
      
    {/* { (userDatas.user.type === "genuine" || userDatas.user.type === "legal") && <SidebarUser objects={[
        {title : "خدمات",
          drop : ["درخواست ضمانت نامه" , "درخواست تسهیلات"],
          links : ["/panel/guarantee" , "/panel/addFacilities" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "ثبت تیکت ها" , "درخواست های جاری" , "راهنمای سایت"],
          links : ["/panel/viewTickets" , "/panel/addTicket" , "/panel/openedRequests" , "/panel/siteGuide" ]
        },
        {title : "اطلاعات کاربری",
          drop : [],
        },

      ]} />} */}
      {/* {Inja bayad avvvvvaaaazzz Beshe Nesbat Be Naghsh Karbar} */}

{/* {// ||  ||} */}

          {/* { (userDatas.user.type === "expert") && <SidebarUser objects={[
        {title : "کارشناسان",
          drop : ["لیست کارشناسان" , "اضافه کردن کارشناس"],
          links : ["/panel/viewExpert" , "/panel/Addexpert" ]
        },
        {title : "کاربران",
          drop : [ "لیست کاربران" , "درخواست ضمانت نامه" , "درخواست تسهیلات"],
          links : ["/panel/viewUsers" ,"/panel/guarantee" , "/panel/addFacilities" ]
        },
        {title : "پشتیبانی",
          drop : ["مشاهده تیکت ها" , "لیست درخواست ها"],
          links : ["/panel/viewTickets" , "/panel/requests" ]
        },
        {title : "اطلاعات کاربری",
          drop : [],
        },

      ]} /> } */}
    {/* Left section */}
    {/* Left section */}

    <section className="w-c-2 bg-c">
      <Topbar avatar="/src/assets/imges/user-(2).png" />
      <Outlet />
    </section>
  </div>
  )
}
