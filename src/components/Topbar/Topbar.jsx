import React, { useContext, useEffect, useState, version } from "react";
import Vector from '../../assets/imges/Vector.png'
import Vector3 from '../../assets/imges/Vector3.png'
import Vector4 from '../../assets/imges/Vector4.png'
import Vector5 from '../../assets/imges/Vector5.png'
import user from "../../assets/imges/user.png"

import Vector6 from '../../assets/imges/Vector6.png'
import AccImg from '../../assets/imges/account.png'
import ViewNotif from '../../components/modal/ViewNotif'
import Bell from '../../assets/svg/Bell.svg'

import cc from '../../assets/imges/Vector (1).png'
import c2 from '../../assets/imges/Vector (2).png'
import { UserDataContext } from "../../contexts/UserData.Provider";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../axiosinstancs";

const Topbar = ({ avatar }) => {
  const {userDatas} = useContext(UserDataContext)
  const [showModal, setShowModal] = useState(false)
  const [showUnreade, setShowUnreade] = useState(false)
  const [details , setDetails] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    Axios.get("/api/v1/profile_genuine")
    .then((res) => {
      console.log(res);
      const newA = res.data
      newA.map((item) => {
        if(item.user.id === userDatas.user.id) {
          setDetails(item)
          console.log(item);
        }
      })
    })
    .catch((err) => {
     console.log(err); 
    })
  } , [])
  const [unreadNotif, setUnreadNotif] = useState([])
  useEffect(() => {
    Axios.get(`/api/v1/get_unread_notification`).then(async res => {
        console.log(res.data)
        setUnreadNotif(res.data)
      }
    ).catch(err => {
      console.log(err)
    }
    )
  }, [])
  const exitHandler = () => {
    localStorage.removeItem('userData')
    navigate("/auth/login")
  }
  return (
    <div className="flex items-center justify-between w-full h-c-6 rounded-3xl bg-c-2 px-7 relative">
        <div className="flex">
          {/* <p className="p-1 font-bold">کاربر عزیز </p> */}
          {userDatas && <p className="p-1 font-bold">{`${userDatas.user.name} ${userDatas.user.family}`} </p>}
          <p className="p-1 font-bold">گرامی </p>

        </div>
      <div className="flex gap-10">
        <button onClick={() => setShowUnreade(!showUnreade)} className="flex items-center gap-4">
          <div className="relative">
            <img
              className="w-c-4 h-c-4"
              src={Vector4}
              alt=""
            />
            {
              unreadNotif.length !== 0 && <img className="absolute top-0 right-0" src={Vector5} alt=""/>
            }
          </div>
          <div>
            <h2>اعلانات</h2>
          </div>
        </button>
        {showUnreade && <ViewNotif unreadNotif={unreadNotif} trashHandler={setUnreadNotif} close={setShowUnreade} />}
        <div>
          <button className="flex items-center gap-4" onClick={() => setShowModal(!showModal)}>
            <div>
            {
              details && details.image && <img style={{borderRadius : "50%"}} src={`https://backend.nanotf.ir/${details.image}`} alt="عکس پروفایل" className="w-16 h-16" />
            }
            {(!details || !details.image) && <img src={avatar}  alt="" className="w-16 h-16 " />}
              {/* <img
                className="w-10 h-10"
                src={avatar}
                alt="avatar"
              /> */}
            </div>
            <div>
              <img src={Vector6} alt="" />
            </div>
          </button>
            {showModal && (
              <div onClick={() => setShowModal(!showModal)}
                class="absolute w-80 h-c-9 py-4 px-6 left-7 top-full bg-white z-10 rounded-lg flex flex-col gap-4">
                <div class="text-center bg-c-2 rounded-lg py-3">
                {
              details && details.image && <img style={{borderRadius : "50%"}} src={`https://backend.nanotf.ir/${details.image}`} alt="عکس پروفایل" className="w-16 h-16 mx-auto" />
            }
            {(!details || !details.image) && <img src={AccImg}  alt="" className="w-16 h-16 mx-auto" />}
                  {/* <img class="w-16 h-16 mx-auto" src={AccImg} alt="" /> */}
                  <h2 class="font-bold my-3 mb-1">{`${userDatas.user.name} ${userDatas.user.family}`}</h2>
                  <a class="text-xs text-c-8 font-semibold">{userDatas.user.email !== null && userDatas.user.email !== "" ? userDatas.user.email : "فاقد پست الکترونیکی"}</a>
                </div>
                <div class="flex items-center gap-4">
                  <div>
                    <img style={{width : "15px" , height : "15px"}} src={Bell} alt="" />
                  </div>
                  <Link to="/panel/allNotifs" class="text-xs flex-1">
                    اعلانات
                  </Link>
                </div>
                <div class="flex items-center gap-4">
                  <div>
                    <img src={cc} alt="" />
                  </div>
                  <Link to={userDatas.user.type === "genuine" ? "/panel/genuineUserInfo" : userDatas.user.type === "legal" ? "/panel/legaluserInfo" : userDatas.user.type === "admin"? "/panel/userInfo" :"" } class="text-xs flex-1">
                    اطلاعات کاربری
                  </Link>
                </div>
                <div class="flex items-center gap-4">
                  <div>
                    <img src={c2} alt="" />
                  </div>
                  <button onClick={exitHandler} class="text-xs flex-1 text-c-9 text-right">
                    خروج
                  </button>
                </div>
              </div>

            )}
          {/* <div
            className="absolute w-80 h-c-9 py-4 px-6 left-7 top-full bg-white z-10 rounded-lg flex flex-col gap-4"
            style={{ display: "none" }}
          >
            <div className="text-center bg-c-2 rounded-lg py-3">
              <img
                className="w-16 h-16 mx-auto"
                src={avatar}
                alt="avatar"
              />
              <h2 className="font-bold my-3 mb-1">محمد رنجبر</h2>
              <a className="text-xs text-c-8 font-semibold">asd@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/src/assets/imges/Vector.png" alt="" />
              </div>
              <a className="text-xs flex-1">متن</a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/src/assets/imges/Vector (1).png" alt="" />
              </div>
              <a className="text-xs flex-1">متن</a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/src/assets/imges/Vector (2).png" alt="" />
              </div>
              <a className="text-xs flex-1 text-c-9">متن</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
