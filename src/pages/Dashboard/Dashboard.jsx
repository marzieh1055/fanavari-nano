import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Counter from "../../components/Counter/Counter";
import User from "../../components/User/User";
import Axios from "../../../axiosinstancs";
import ViewDetailExpert from "../Expert/ViewDetailExpert";
import Loading from "../../components/Loading/Loading";

const Dashboard = () => {
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
    getExpert();
  }, []);
  const detailsHandler = (e) => {
    setSelectItemE(e)
    setShowDetailsUser(true)

  }

  if (showDetailsUser) return <ViewDetailExpert close={setShowDetailsUser} details={selectItemE} />
  return (
    <>
      <div className="p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">دسترسی سریع</h2>
        <div className="flex gap-6 text-white">
          <div className="w-1/3 h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <div>مشاهده درخواست ها</div>
            <div>
              <img
                className="absolute left-0 inset-y-0"
                src="/src/assets/imges/Ellipse 2.png"
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src="/src/assets/imges/Ellipse 1.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/3 h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <div>مشاهده کارشناسان</div>
            <div>
              <img
                className="absolute left-1 inset-y-0"
                src="/src/assets/imges/Ellipse 4.png"
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src="/src/assets/imges/Ellipse 3.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/3 h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <div>مشاهده کاربران</div>
            <div>
              <img
                className="absolute left-1 inset-y-0"
                src="/src/assets/imges/Ellipse 6.png"
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src="/src/assets/imges/Ellipse 5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-6">
        <div className="shadow-c rounded-2xl w-1/2 bg-white p-3.5 flex flex-col gap-7 z-10">
          <div className="p-2 flex justify-between items-center">
            <div className="text-lg font-bold">وضعیت کارشناسان</div>
            <img
              className="w-c-4 h-c-4"
              src="/src/assets/imges/ViewRequests/Vectorx.png"
              alt=""
            />
          </div>
          {
            Expert ? Expert.map(i => <div key={i.id} onClick={() => detailsHandler(i)}><User avatar="/src/assets/imges/user.png" date="1378/12/21" name={`${i.name} ${i.family}`}/></div> ) : <Loading />
          }
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <Counter
            logo="/src/assets/imges/ViewRequests/Vectora.png"
            number={allRequest ? allRequest : ""}
            title="تعداد درخواست"
          />
          <Counter
            logo="/src/assets/imges/ViewRequests/Vectora.png"
            number={allExpert ? allExpert : ""}
            title="تعداد کارشناس"
          />
          <Counter
            logo="/src/assets/imges/ViewRequests/Vectora.png"
            number={allUser ? allUser : ""}
            title="تعداد کاربر"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
