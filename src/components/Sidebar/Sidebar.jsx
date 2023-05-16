import React from "react";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  return (
    <section className="w-c-3 bg-c-2 h-c-5 sticky top-6 p-6 rounded-3xl">
      <div className="mb-6">
        <img className="mx-auto" src="/src/assets/imges/image 2.png" alt="" />
      </div>
      <div className="mb-6">
        <img className="mx-auto" src="/src/assets/imges/Line 1.png" alt="" />
      </div>
      <div className="mb-6">
        <h1 className="font-bold text-center">داشبورد</h1>
      </div>
      <Dropdown title="کارشناسان" itemsList={["کارشناس دوم" , "کارشناس اول"]} />
      <Dropdown title="مشاهده کاربران" itemsList={["کاربر اول" , "کاربر دوم"]} />
      <Dropdown title="پشتیبانی" itemsList={["مشاهده تیکت ها" , "راهنما"]} />
      <Dropdown title="مشاهده درخواست ها" itemsList={["مشاهده تیکت ها" , "راهنما"]} />
    </section>
  );
};

export default Sidebar;
