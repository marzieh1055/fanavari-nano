import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

export const UserDataContext = React.createContext()

export default function UserDataProvider({children}) {
  const [up , setUp] = useState(0)

    const datasLoc = window.localStorage.getItem("userData")
    const isLoggedIn = datasLoc ? true : false;

    const [userDatas , setUserDatas] = useState(isLoggedIn ? JSON.parse(datasLoc) : null)
    const [isLoading, setIsLoading] = useState(false);
    const [errRes, setErrRes] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    

    const [rememberStory , setRememberStory] = useState(false)
    const nextPage = useNavigate()

    // LOGIN
    const apiLogin = (datas) => {
      axios.post('/api/v1/login', datas, {
        headers: {
          Authorization: "token",
          // 'Access-Control-Allow-Origin': "http://localhost:5173"
        }
      })
        .then(response => {
          console.log(response.data);
          window.localStorage.setItem("token" , JSON.stringify(response.data.authorisation.token))
          window.localStorage.setItem("userData" , JSON.stringify(response.data))
          // setUserDatas(response.data)
          setUp((prev) => prev + 1)
          if (rememberStory) {
            window.localStorage.setItem("remember" , JSON.stringify(datas))
          }
          // inja badan mitoonim moshakhas konim age user bood bre too dashboard khodehs age karshenas bood bre to Dashboard khodesh
          setUserDatas(response.data)
          console.log(response.data.user.type);
          setIsLoading(false)
          setShowLogin(true)
          setTimeout(() => {
            if (response.data.user.type === "genuine" || response.data.user.type === "legal") {
              setShowLogin(false)
              nextPage("/panel/dashboarduser")
            } else if (response.data.user.type === "Admin" || response.data.user.type === "admin") {
              setShowLogin(false)
              nextPage("/panel/dashboard")
            } else if (response.data.user.type === "expert") {
              setShowLogin(false)
              nextPage("/panel/dashboardexpert")
            }
          } , 2000)

          // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<---------------------------------------------------------------

        })
        .catch(error => {
          setIsLoading(false)
          setErrRes(true)
        });
    }
  return (
    <>
    

    <UserDataContext.Provider value={{ showLogin , isLoading, setIsLoading , errRes, setErrRes , userDatas , apiLogin , rememberStory , setRememberStory}}>
        {children}
    </UserDataContext.Provider>
    </>
  )
}
