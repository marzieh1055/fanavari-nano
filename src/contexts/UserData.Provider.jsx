import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserDataContext = React.createContext()

export default function UserDataProvider({children}) {
  // برای تست اینو پر کردم بعدا باید بشه []
    const [userDatas , setUserDatas] = useState(
      {user : {
        company_name
        : 
        null,
        created_at
        : 
        "2023-04-12T04:25:59.000000Z",
        email
        : 
        null,
        family
        : 
        "testi",
        id
        : 
        6,
        is_confirmed
        : 
        1,
        name
        : 
        "tset",
        national_code
        : 
        "1293100890",
        national_company
        : 
        null,
        password_confirmation
        : 
        "$2y$10$oZ/j05SHFTYU/YAwPXsai.KiimYvAJWg1va9zIwacDvHBlH/In9W6",
        phone
        : 
        "09123596789",
        type
        : 
        "admin",
        updated_at
        : 
        "2023-04-12T04:25:59.000000Z",
      }}
    )
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
          if (response.data.user.type === "genuine" || response.data.user.type === "legal") {
            nextPage("/panel/dashboarduser")
          } else if (response.data.user.type === "Admin" || response.data.user.type === "admin") {
            nextPage("/panel/dashboard")
          } else if (response.data.user.type === "expert") {
            nextPage("/panel/dashboardexpert")
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
