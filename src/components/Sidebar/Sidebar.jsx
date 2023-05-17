import React from "react";
import Dropdown from "./Dropdown";

const Sidebar = ({objects}) => {
  
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
<<<<<<< HEAD
        {
          objects && objects.map((item , index) => <Dropdown title={item.title} itemsList={item.drop} />)
        }

=======
      <Dropdown title="کارشناسان" itemsList={[" مشاهده کارشناس ها" , "اضافه کردن کارشناس"]} />
      <Dropdown title="مشاهده کاربران" itemsList={[" مشاهده کارشناس ها" , "اضافه کردن کارشناس"]}/>
      <Dropdown title="پشتیبانی" itemsList={["مشاهده تیکت ها" , "راهنما" ]} />
      <Dropdown title="مشاهده درخواست ها" itemsList={["مشاهده درخواست ها" ]} />
>>>>>>> 69293139666e8b7d21902ab20c9eb8c3d3e46128
    </section>
  );
};

export default Sidebar;
