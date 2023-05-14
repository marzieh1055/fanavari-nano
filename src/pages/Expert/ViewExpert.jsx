import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function viewExpert() {
  return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold">وضعیت کارشناسان</p>

        <div className="flex items-center pt-2">
          <AiOutlineInfoCircle className="text-blue-400" />
          <p className="text-xs  text-gray-600 px-2">
            برای مشاهده درخواست های جاری هر کارشناس روی کارشناس مربوطه کلیک کنید
          </p>
        </div>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        <table className="w-full ">
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3 rounded-r-xl ">نمایه </th>
              <th className="bg-white p-3 ">نام </th>
              <th className="bg-white p-3 ">نام خانوادگی</th>
              <th className="bg-white p-3 ">تاریخ ثبت نام کارشناس </th>
              <th className="bg-white p-3 rounded-l-xl">اعمال </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                {" "}
                <img
                  className="w-10"
                  src="/./src/assets/imges/user.png"
                  alt=""
                />
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">امیر حسین</td>
              <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                1400/12/13
              </td>
              <td className="p-4 text-xs text-gray-400 font-bold">
                <div className="flex">
                  <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    حذف کارشناس
                  </button>
                  <button className="text-blue-700 border rounded-2xl p-2 ">
                    اطلاعات بیشتر
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="flex justify-between py-4 text-gray-600 items-center">
        <div className="">نمایش 21-31 از 80 مورد</div>
        <div className="">
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {"<"}
          </button>
          <button className="text-gray-800 text-lg font-bold mx-2">6</button>
          <button className="text-gray-800 text-lg font-bold mx-2">5</button>
          <button className="text-gray-800 text-lg font-bold mx-2">4</button>
          <button className="text-gray-800 text-lg font-bold mx-2">3</button>
          <button className="text-gray-800 text-lg font-bold mx-2">2</button>
          <button className="text-gray-800 text-lg font-bold mx-2">1</button>
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {" "}
            {">"}{" "}
          </button>
        </div>
        <div className="flex">
          <button className="text-blue-700   p-2 font-bold text-sm">
            <span className="text-3xl">+</span> اضافه کردن کارشناس
          </button>
        </div>
      </div>
    </div>
  );
}
