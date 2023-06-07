import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Expert from "../../components/Expert/Expert";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import ExpertList from "../../components/modal/ExpertList";
import Loader from "../../components/Loader/Loader";

const Requests = () => {

  const [requests, setRequests] = useState([])
  const [showDetails, setShowDetails] = useState(null)
  const [showExpertList, setShowExpertList] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [updatePage, setUpdatePage] = useState(0)

  console.log(updatePage);
  useEffect(() => {
    setIsLoading(true)
    Axios.get("/api/admin/view_all_request").then(async (res) => {
      const newData = res.data.reverse()
      setRequests(newData)
      // console.log(res.data);
      // console.log(res.data[0].expert_assignment.created_at);
      setIsLoading(false)
    })
  }, [updatePage])
  const detailsHandler = (ev) => {
    if (showDetails === null) {
      setShowDetails(ev)
    } else {
      setShowDetails(null)
    }
  }
  return (
    <>
      <div className="pr-6 py-6 flex justify-between items-center w-c-13">
        <h2 className="text-2xl font-bold">مشاهده درخواست‌ها</h2>
        <div className="flex gap-6">
          <button className="relative">
            <div className="flex gap-2 items-center px-4 py-2 rounded-lg border border-c-7 bg-white">
              <img
                className="w-c-10 h-c-11"
                src="/src/assets/imges/ViewRequests/Vector.png"
                alt=""
              />
              <div className="font-bold">مرتب کردن</div>
              <img
                className="w-1.5 h-c-12"
                src="/src/assets/imges/ViewRequests/Vector (1).png"
                alt=""
              />
            </div>
            <div
              className="absolute bg-white inset-x-0 top-full p-4 rounded-lg flex flex-col items-center gap-4"
              style={{ display: "none" }}
            >
              <div className="flex gap-2">
                <img
                  className="w-4 h-4"
                  src="/src/assets/imges/ViewRequests/check box.png"
                  alt=""
                />
                <div className="font-bold">جدیدترین</div>
              </div>
              <div>
                <img
                  className="w-20"
                  src="/src/assets/imges/ViewRequests/Line 1.png"
                  alt=""
                />
              </div>
              <div className="flex gap-2">
                <img
                  className="w-4 h-4"
                  src="/src/assets/imges/ViewRequests/check box.png"
                  alt=""
                />
                <div className="font-bold">جدیدترین</div>
              </div>
            </div>
          </button>
          <button className="relative">
            <div className="flex gap-2 items-center px-4 py-2 rounded-lg border border-c-7 bg-white">
              <img
                className="w-c-10 h-c-11"
                src="/src/assets/imges/ViewRequests/Vector.png"
                alt=""
              />
              <div className="font-bold">مرتب کردن</div>
              <img
                className="w-1.5 h-c-12"
                src="/src/assets/imges/ViewRequests/Vector (1).png"
                alt=""
              />
            </div>
            <div
              className="absolute bg-white inset-x-0 top-full p-4 rounded-lg flex flex-col items-center gap-4"
              style={{ display: "none" }}
            >
              <div className="flex gap-2">
                <img
                  className="w-4 h-4"
                  src="/src/assets/imges/ViewRequests/check box.png"
                  alt=""
                />
                <div className="font-bold">جدیدترین</div>
              </div>
              <div>
                <img
                  className="w-20"
                  src="/src/assets/imges/ViewRequests/Line 1.png"
                  alt=""
                />
              </div>
              <div className="flex gap-2">
                <img
                  className="w-4 h-4"
                  src="/src/assets/imges/ViewRequests/check box.png"
                  alt=""
                />
                <div className="font-bold">جدیدترین</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      {
        isLoading && <Loader />
      }
      <ul className="w-c-13 flex flex-col gap-c-14 whitespace-nowrap border-b border-c-11 relative">
        {
          showExpertList !== null ? <ExpertList setUpdatePage={setUpdatePage} close={setShowExpertList} reqId={showExpertList.id} type={showExpertList.type} /> : ""
        }
        <li className="text-sm flex gap-3.5 rounded-2xl bg-c-2 py-3.5">
          <a className="w-1/6 text-center" href="">
            شناسه
          </a>
          <a className="w-1/6 text-center" href="">
            درخواست‌دهنده
          </a>
          <a className="w-1/6 text-center pr-8" href="">
            نوع درخواست
          </a>
          <a className="w-1/6 text-center pr-8" href="">
            تاریخ ثبت  درخواست
          </a>
          <a className="w-1/6 text-center pr-5" href="">
            تاریخ اختصاص به کارشناس
          </a>

          <a className="w-1/6 text-center pr-8" href="">
            اعمال
          </a>
        </li>
        {
          requests && requests.map((item) => {
            if (item.id === showDetails) {
              console.log(item);
              return (
                <li key={item.id} className="flex justify-between gap-3.5 p-3.5 bg-white rounded-xl text-c-3 font-bold text-xs">
                  <div className="flex flex-col gap-7">
                    <div>
                      شناسه درخواست: <a href="">{item.shenaseh}</a>
                    </div>
                    <div>
                      نوع درخواست: <a href="">{item.type === "facilities" ? "تسهیلات" : "ضمانت نامه"}</a>
                    </div>
                    <div>
                      نام کارشناس: <a href="">{item.expert_assignment !== null ? `${item.expert_assignment.expert.name} ${item.expert_assignment.expert.name}` : "فاقد کارشناس"} </a>
                    </div>
                    <div>
                      درخواست‌دهنده: <a href="">{`${item.user.name} ${item.user.family}`}</a>
                    </div>

                  </div>
                  <div className="flex flex-col gap-7">
                    <div>
                      تاریخ ثبت درخواست: <a href="">{onlyDateConversion(item.created_at)}</a>
                    </div>
                    <div>
                      تاریخ ثبت کارشناس: <a href="">{item.expert_assignment !== null ? `${onlyDateConversion(item.expert_assignment.created_at)}` : "فاقد کارشناس"}</a>
                    </div>
                    <div>
                      شماره همراه کارشناس: <a href="">{item.expert_assignment !== null ? `${item.expert_assignment.expert.phone}` : "فاقد کارشناس"} </a>
                    </div>
                    {/* 
                    <div>
                      امضای کارشناس: <a href="">محمد</a>
                    </div> */}
                    {
                      <button
                        href=""
                        className="p-2 rounded-xl border border-c-7 text-c-9"
                        onClick={() => setShowExpertList({ id: item.id, type: "change" })}
                      >
                        تغییر کارشناس
                      </button>
                    }
                  </div>

                  <button onClick={() => detailsHandler(null)} className="flex justify-center items-center gap-2 p-2 border border-c-7 rounded-xl bg-c h-c-15">
                    <div className="text-c-5">کوچک کن</div>
                    <div>
                      <img
                        className="w-1.5 h-c-12 rotate-180"
                        src="/src/assets/imges/ViewRequests/VectorAZ.png"
                        alt=""
                      />
                    </div>
                  </button>
                </li>
              )
            } else {
              return (
                <li key={item.id} className="flex items-center gap-3.5 py-3.5 text-c-10 text-xs">
                  <a className="w-1/6 text-center" href="">
                    {item.shenaseh}
                  </a>
                  <a className="w-1/6 text-center" href="">
                    {`${item.user.name} ${item.user.family}`}
                  </a>
                  <a className="w-1/6 text-center" href="">
                    {item.type === "facilities" ? "تسهیلات" : "ضمانت نامه"}
                  </a>
                  <a className="w-1/6 text-center" href="">
                    {onlyDateConversion(item.created_at)}
                  </a>
                  {/* اینجا باید تاریخ اختصاص درخواست به کارشناس باشه */}
                   <a className="w-1/6 text-center text-sm text-c-3" href="">
                  {item.expert_assignment !== null ? `${onlyDateConversion(item.expert_assignment.created_at)}` : "فاقد کارشناس"} 
                  </a>  
                  {
                    item.expert_assignment !== null ?
                      <button onClick={() => detailsHandler(item.id)} className=" text-center border border-c-7 rounded-xl flex gap-2">
                        <div className="flex justify-center items-center gap-2 p-2 rounded-xl border border-c-7">
                          <div className="text-c-5">مدیریت</div>
                          <div>
                            <img
                              className="w-1.5 h-c-12"
                              src="/src/assets/imges/ViewRequests/VectorAZ.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </button>

                      :

                      <button onClick={() => setShowExpertList({ id: item.id, type: "assign" })} className=" text-center border border-c-9 rounded-xl flex gap-2">
                        <div className="flex justify-center items-center gap-2 p-2 rounded-xl border border-c-7">
                          <div className="border-c-7 text-c-9">مدیریت</div>
                          <div>
                            <img
                              className="w-1.5 h-c-0"
                              src="/src/assets/imges/ViewRequests/x.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </button>
                  }
                </li>
              )
            }
          })
        }


      </ul>
      <div className="p-3.5 w-c-13 flex justify-between items-center">
        <div className="text-xs font-bold text-c-8">
          <p>نمایش مورد فلان از فلان</p>
        </div>
        <div className="">
          <ul className="font-bold flex gap-7">
            <li>
              <a href="">
                <img
                  className="rotate-180"
                  src="/src/assets/imges/ViewRequests/Left.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="text-c-12">6</a>
            </li>
            <li>
              <a href="text-c-12">5</a>
            </li>
            <li>
              <a href="text-c-12">4</a>
            </li>
            <li>
              <a href="text-c-12">3</a>
            </li>
            <li>
              <a href="text-c-12">2</a>
            </li>
            <li>
              <a className="text-c-5" href="">
                1
              </a>
            </li>
            <li>
              <a href="">
                <img
                  className=""
                  src="/src/assets/imges/ViewRequests/Left.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xs font-bold flex gap-3.5 items-center">
          <button className="flex items-center gap-2 p-2 border border-c-7 rounded-xl font-bold">
            <div>
              <img
                className="w-1.5 h-c-12"
                src="/src/assets/imges/ViewRequests/Vector (1).png"
                alt=""
              />
            </div>
            <span>10</span>
          </button>
          <p className="text-c-8">تعداد در خواست در هر صفحه</p>
        </div>
      </div>
    </>
  );
};

export default Requests;
