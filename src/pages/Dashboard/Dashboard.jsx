import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Counter from "../../components/Counter/Counter";
import User from "../../components/User/User";

const Dashboard = () => {
  return (
    <div className="w-full max-w-c mx-auto bg-c flex p-6 gap-6">
      {/* Sidebar section */}
      <Sidebar />
      {/* Left section */}
      <section className="w-c-2 bg-c">
        <Topbar avatar="/src/assets/imges/user.png" />
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
            <User
              avatar="/src/assets/imges/user.png"
              date="1378/12/21"
              name="مرضیه محمدی"
            />
            <User
              avatar="/src/assets/imges/user.png"
              date="1377/03/15"
              name="متین موسوی"
            />
            <User
              avatar="/src/assets/imges/user.png"
              date="1371/04/09"
              name="محمد رنجبر"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-6">
            <Counter
              logo="/src/assets/imges/ViewRequests/Vectora.png"
              number={648}
              title="تعداد درخواست"
            />
            <Counter
              logo="/src/assets/imges/ViewRequests/Vectora.png"
              number="1.2k"
              title="تعداد کارشناس"
            />
            <Counter
              logo="/src/assets/imges/ViewRequests/Vectora.png"
              number="14k"
              title="تعداد کاربر"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
