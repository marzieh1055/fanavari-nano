import React from "react";



export default function Support({datas , close}) {
  console.log(datas);
  const { message } = datas
  console.log(message);
  return (
    <div>
      <div className=" p-6">
        <p className="text-xl font-extrabold">پشتیبانی</p>
      </div>
      <div style={{display: "flex" , justifyContent: "space-between"}} className="bg-white rounded-t-2xl p-6 shadow-xl z-10 ">

        <p className=" font-bold ">{`مشاهده تیکت ${message[0].ticket_id}`}</p>
        <p onClick={() => close(false)} style={{color : "#a73c36" , cursor: "pointer"}}>بازگشت</p>

      </div>
      <div className="relative bg-white h-[60vh] overflow-y-auto rounded-b-2xl">
        {
          message && message.map(item => {
            return(
              <div key={item.id} className=" bg-c w-2/5 m-4 p-4 rounded-2xl">
                <p className="text-sm">
                  {item.body}
                </p>
                <div className="flex justify-between mt-4 ">
                  <p className="text-sm">{item.updated_at.split("T")[1].slice(0,5)}</p>
                  <p className="text-sm">IP: 164.213549.789</p>
                </div>
              </div>
            )
          })
        }
        
      <div className="absolute bottom-0 flex w-full p-5">
        <div className="relative w-4/5 pt-8 pb-3 rounded-2xl border bg-white px-2">
          <p className="absolute top-0 p-3">پیام خود را بنویسید...</p>
          <input
            type="text"
            className=" w-full  placeholder:text-xs placeholder:p-3 outline-none  "
            placeholder="برای تسریع در بارگذاری سعی کنید در یک قاب پیام خود را بنویسید"
          />
        </div>
        <button className="w-1/6 rounded-2xl mx-1 border border-green-600 text-green-600">پیوست </button>
        <button className="w-1/6 rounded-2xl mx-1 bg-blue-800 text-white">ارسال</button>
      </div>
      </div>
    </div>
  );
}
