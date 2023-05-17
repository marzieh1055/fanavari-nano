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
      <Dropdown title="کارشناسان" itemsList={[" مشاهده کارشناس ها" , "اضافه کردن کارشناس"]} />
      <Dropdown title="مشاهده کاربران" itemsList={[" مشاهده کارشناس ها" , "اضافه کردن کارشناس"]}/>
      <Dropdown title="پشتیبانی" itemsList={["مشاهده تیکت ها" , "راهنما" ]} />
      <Dropdown title="مشاهده درخواست ها" itemsList={["مشاهده درخواست ها" ]} />
    </section>
  );
};

export default Sidebar;
