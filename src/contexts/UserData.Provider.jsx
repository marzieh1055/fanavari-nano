import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserDataContext = React.createContext()

export default function UserDataProvider({children}) {
    const [userDatas , setUserDatas] = useState([])
    const nextPage = useNavigate()

    const apiLogin = (datas) => {
      axios.post('/api/v1/login', datas, {
        headers: {
          Authorization: "token",
          'Access-Control-Allow-Origin': "http://localhost:5173"
        }
      })
        .then(response => {
          console.log(response.data);
          window.localStorage.accessToken = response.data.authorisation.token
          setUserDatas(response.data)
          // inja badan mitoonim moshakhas konim age user bood bre too dashboard khodehs age karshenas bood bre to Dashboard khodesh
          nextPage("/panel/dashboard")

          // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<---------------------------------------------------------------
          setIsLoading(false)

        })
        .catch(error => {
          setIsLoading(false)
          setErrRes(true)
        });
    }
  return (
    <UserDataContext.Provider value={{ userDatas , apiLogin }}>
        {children}
    </UserDataContext.Provider>
  )
}
