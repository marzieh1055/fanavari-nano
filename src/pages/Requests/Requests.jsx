import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Expert from "../../components/Expert/Expert";

const Requests = () => {
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
      <ul className="w-c-13 flex flex-col gap-c-14 whitespace-nowrap border-b border-c-11 relative">
        <div className="absolute shadow-c rounded-2xl w-c-17 top-12 text-sm right-1/2 translate-x-1/2 bg-white p-3.5 flex flex-col gap-2">
          <div className="p-2 flex justify-between">
            <div>لیست کارشناسان</div>
            <Button type="close" />
          </div>
          <Expert name="متین موسوی" avatar="/src/assets/imges/user.png" />
          <Expert name="مرضیه محمدی" avatar="/src/assets/imges/user.png" />
          <Expert name="محمد رنجبر" avatar="/src/assets/imges/user.png" />
        </div>
        <li className="text-sm flex gap-3.5 rounded-2xl bg-c-2 py-3.5">
          <a className="w-1/6 text-center" href="">
            شناسه
          </a>
          <a className="w-1/6 text-center" href="">
            درخواست
          </a>
          <a className="w-1/6 text-center" href="">
            درخواست‌دهنده
          </a>
          <a className="w-1/6 text-center" href="">
            شناکارشناس مربوطه
          </a>
          <a className="w-1/6 text-center" href="">
            تاریخ ثبت نام کارشناس
          </a>
          <a className="w-1/6 text-center" href="">
            اعمال
          </a>
        </li>
        <li className="flex items-center gap-3.5 py-3.5 text-c-10 text-xs">
          <a className="w-1/6 text-center" href="">
            12355
          </a>
          <a className="w-1/6 text-center" href="">
            ضمانت نامه
          </a>
          <a className="w-1/6 text-center" href="">
            امیرک
          </a>
          <a className="w-1/6 text-center text-sm text-c-3" href="">
            محمد
          </a>
          <a className="w-1/6 text-center" href="">
            1400/12/2
          </a>
          <button className="w-1/6 text-center border border-c-7 rounded-xl flex gap-2">
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
        </li>
        <li className="flex justify-between gap-3.5 p-3.5 bg-white rounded-xl text-c-3 font-bold text-xs">
          <div className="flex flex-col gap-7">
            <div>
              کارشناس: <a href="">محمد</a>
            </div>
            <div>
              متقاضی: <a href="">محمد</a>
            </div>
            <div>
              شناسه: <a href="">محمد</a>
            </div>
            <div>
              تاریخ بت درخواست: <a href="">محمد</a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              نوع درخواست: <a href="">محمد</a>
            </div>
            <div>
              تاریخ عضویت درخواست: <a href="">محمد</a>
            </div>
            <div>
              امضای کارشناس: <a href="">محمد</a>
            </div>
            <button
              href=""
              className="p-2 rounded-xl border border-c-7 text-c-9"
            >
              تغییر کارنشاس
            </button>
          </div>
          <button className="flex justify-center items-center gap-2 p-2 border border-c-7 rounded-xl bg-c h-c-15">
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
