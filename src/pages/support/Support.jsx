import React, { useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";


export default function Support() {
  const [datas , setDatas] = useState([])
  const reqId = useParams()
  const navigate = useNavigate()

  
  const formData = new FormData();
  const [replayDatas , setReplayDatas] = useState({
    body: "",
    file:""
  })

  const [isLoading, setIsLoading] = useState(true)
  const [pageUpdate, setPageUpdate] = useState(0)


  useEffect(() => {
    Axios.get(`/api/v1/ticket/${reqId.ticket_route_id}`).then(async (res) => {
      console.log("ghadimi");
      console.log(res.data);
      const oldMessage = res.data.message.reverse()
      const newData = res.data;
      newData.message = oldMessage;
      console.log("jadid");
      console.log(newData);

      setDatas(res.data)
      setIsLoading(false)
    })
  },[pageUpdate])

  const changeHandler = (e) => {
    if (e.target.name === "file") {
      setReplayDatas({
        ...replayDatas , [e.target.name] : e.target.files[0]
      })
    } else {
      setReplayDatas({
        ...replayDatas , [e.target.name] : e.target.value
      })
    }
    console.log(replayDatas);
  }
  const replayReq = () => {
    formData.append("body" , replayDatas.body)
    formData.append("file" , replayDatas.file)
    setIsLoading(true)
    Axios.put(`/api/v1/ticket/${reqId.ticket_route_id}` , formData).then(async (res) => {
      console.log(res.data);
      setReplayDatas({
        body: "",
        file:""
      })
      setPageUpdate((pre) => pre + 1 )
      setIsLoading(false)
    }).catch((err) => console.log(err))
  }
  return (
    <div>
      <div className=" p-6">
        <p className="text-xl font-extrabold">پشتیبانی</p>
      </div>
      <div style={{display: "flex" , justifyContent: "space-between"}} className="bg-white rounded-t-2xl p-6 shadow-xl z-10 ">

        <p className=" font-bold ">{`مشاهده تیکت ${datas.id ? datas.id : ""}#`}</p>
        <p onClick={() => navigate(-1)} style={{color : "#e88f19" , cursor: "pointer"}}>بازگشت</p>

      </div>
      <div className="relative bg-white h-[60vh] overflow-auto rounded-b-2xl">
        <div className="scrollable-content-chat">
          {isLoading && <Loader />}
            {
              datas.message && datas.message.map(item => {
                return(
                  <div  key={item.id} style={item.user_id === datas.user_id ? {display : "flex" , justifyContent: "flex-start"} : {display : "flex" , justifyContent: "flex-end"}}>
                    <div className={item.user_id === datas.user_id ? "bg-c w-2/5 m-4 p-4 rounded-2xl" :"bg-cremi w-2/5 m-4 p-4 rounded-2xl" }>
                      <p className="text-sm">
                        {item.body}
                      </p>
                      <div className="flex justify-between mt-4 ">
                        <p className="text-sm">{item.updated_at.split("T")[1].slice(0,5)}</p>
                        <p className="text-sm">IP: 164.213549.789</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
        
      <div className="absolute bottom-0 flex input-chat w-full p-5">
        <div className="aaa w-4/5 rounded-2xl bg-white px-2">
          <input
            value={replayDatas.body}
            name="body"
            onChange={changeHandler}
            className=" w-full in placeholder:text-xs placeholder:p-3   "
            placeholder="برای تسریع در بارگذاری سعی کنید در یک قاب پیام خود را بنویسید..."
          />
        </div>
        
        <label htmlFor="upload" className={replayDatas.file === "" ? "lable-chat w-1/6 rounded-2xl mx-1" : "lable-chat-por w-1/6 rounded-2xl mx-1"}>{replayDatas.file === "" ? "آپلود فایل" : "✓"}</label>
        <input
          onChange={changeHandler}
          type="file"
          name="file"
          id="upload"
          className="upload-file-chat"
        />
        

        <button onClick={replayReq} className="w-1/6 rounded-2xl mx-1 bg-blue-800 text-white">ارسال</button>
      </div>
      </div>
    </div>
  );
}
