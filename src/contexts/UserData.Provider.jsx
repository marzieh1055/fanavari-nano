import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserDataContext = React.createContext()

export default function UserDataProvider({children}) {
    const [userDatas , setUserDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [errRes, setErrRes] = useState(false);

    const [showVerify, setShowVerify] = useState(false);

    const [rememberStory , setRememberStory] = useState(false)
    const nextPage = useNavigate()

    // SINGIN
    const singupG = (userData) => {
      let datas = {}
      if (userData.type == "genuine") {
          datas = {
              "type":"genuine",
              "name":userData.name,
              "family":userData.family,
              "phone":userData.phone,
              "password":userData.password,
              "password_confirmation":userData.password_confirmation,
              "is_confirmed":true,
              "national_code":userData.national_code,
              "email":""
          }
      }
      console.log(datas);
      axios.post('/api/v1/register', datas , {
          headers: {
              Authorization:"token",
              'Access-Control-Allow-Origin': "http://localhost:5173"
          }
      })
      .then(response => {
          console.log(response.data);
          window.localStorage.accessToken = response.data.authorisation.token
          setShowVerify(!showVerify)

          // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<-------------------------------------------
          verify({
            type : "genuine",
            phone : genuine.phone
          })
          setUserResponse(res)
          setErrRes(false)
          setIsLoading(false)              
      })
      .catch(error =>{
        setErrRes(true)
        setIsLoading(false)
      })

    }

    const singupL = (userData) => {
      let datas = {}
      if (userData.type == "legal") {
          datas = {
              "type":"legal",
              "company_name":userData.company_name,
              "name":userData.name,
              "family":userData.name + "ei",
              "national_company":userData.national_company,
              "phone":userData.phone,
              "password":userData.password,
              "password_confirmation":userData.password_confirmation,
              "is_confirmed":true,
              "email":""
          }
      }
      
      console.log(datas);
      axios.post('/api/v1/register', datas , {
          headers: {
              Authorization:"token",
              'Access-Control-Allow-Origin': "http://localhost:5173"
          }
      })
      .then(response => {
          console.log(response.data);
          window.localStorage.accessToken = response.data.authorisation.token
          setShowVerify(!showVerify)
          // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<-------------------------------------------
          verify({
            type : "legal",
            phone : legal.phone
          })
          setUserResponse(res)
          setErrRes(false)
          setIsLoading(false)
      })
      .catch(error =>{
        setErrRes(true)
        setIsLoading(false)
      })
    }

    // LOGIN
    const apiLogin = (datas) => {
      axios.post('/api/v1/login', datas, {
        headers: {
          Authorization: "token",
          'Access-Control-Allow-Origin': "http://localhost:5173"
        }
      })
        .then(response => {
          console.log(response.data);
          window.localStorage.setItem("token" , JSON.stringify(response.data.authorisation.token))
          setUserDatas(response.data)
          if (rememberStory) {
            window.localStorage.setItem("remember" , JSON.stringify(datas))
          }
          // inja badan mitoonim moshakhas konim age user bood bre too dashboard khodehs age karshenas bood bre to Dashboard khodesh
          console.log(response.data.user.type);
          setIsLoading(false)
          if (response.data.user.type === "genuine") {
            nextPage("/panel/dashboarduser")
          } else if (response.data.user.type === "legal") {
            nextPage("/panel/dashboard")
          }

          // badan inja bayad etelaato bedim be CONTEXT    <<<<<<<<<<<<---------------------------------------------------------------

        })
        .catch(error => {
          setIsLoading(false)
          setErrRes(true)
        });
    }
  return (
    <UserDataContext.Provider value={{ showVerify, setShowVerify , singupG , singupL , isLoading, setIsLoading , errRes, setErrRes , userDatas , apiLogin , rememberStory , setRememberStory}}>
        {children}
    </UserDataContext.Provider>
  )
}
