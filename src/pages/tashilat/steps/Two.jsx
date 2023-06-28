import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
import S2TarkibSahamdaran from "../../../components/requestSteps/S2TarkibSahamdaran";

export default function Two() {
  const [tarkibModir, setTarkibModir] = useState([]);
  
  const [modirHome, setModirHome] = useState([]);
  const [kilidi, setKilidi] = useState([]);
  const [history, setHistory] = useState([]);

  const {stepTwo, setStepTwo} = useContext(TashilatContext)
  

  return (
    <>
      <S2TarkibSahamdaran />
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">ترکیب اعضای هیئت مدیره </p>
      </div>
      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام و نام خانوادگي</th>
              <th className="bg-white p-3  ">نوع شخصيت </th>
              <th className="bg-white p-3  ">سمت</th>
              <th className="bg-white p-3  ">شماره ملي</th>
              <th className="bg-white p-3  ">تاريخ تولد</th>
              <th className="bg-white p-3  ">سطح تحصيالات</th>
              <th className="bg-white p-3  ">رشته تحصيلي</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">1</td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl w-24 text-xs"
                >
                  <option value="مالک">حقیقی</option>
                  <option value="حقوقی">حقوقی</option>
                </select>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
            </tr>
            {tarkibModir.length > 0 &&
              tarkibModir.map((item, index) => (
                <tr className="bg-white  border-b">
                  <td className="p-4 text-xs text-gray-800 font-bold">
                    {index + 2}
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-20"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <select
                      name=""
                      id=""
                      className="border-gray-300 rounded-xl w-24 text-xs"
                    >
                      <option value="مالک">حقیقی</option>
                      <option value="حقوقی">حقوقی</option>
                    </select>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            <tr className="">
              <td className="bg-white" colSpan="8">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setTarkibModir([...tarkibModir, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          آدرس محل سكونت اعضای هیئت مدیره فعلي شرکت :{" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden text-center">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام و نام خانوادگي</th>
              <th className="bg-white p-3  ">سمت </th>
              <th className="bg-white p-3  ">نشاني محل سکونت</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">1</td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-28"
                />
              </td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-28 text-left"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <textarea
                    type="text"
                    className="border border-gray-300 rounded-xl w-full"
                  />
                </div>
              </td>
            </tr>
            {modirHome.length > 0 &&
              modirHome.map((item, index) => (
                <tr className="bg-white  border-b">
                  <td className="p-4 text-xs text-gray-800 font-bold">
                    {index + 2}
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-28"
                    />
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-28 text-left"
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <textarea
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            <tr className="">
              <td className="bg-white text-right" colSpan="4">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setModirHome([...modirHome, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">مشخصات نیروی انساني شرکت </p>
        <p className="text-sm font-bold mt-2 text-gray-600">
          خالصه رزومه افراد کلیدی شرکت به شرح زیر است:{" "}
        </p>
      </div>
      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام و نام خانوادگي</th>
              <th className="bg-white p-3  ">سمت</th>
              <th className="bg-white p-3  ">سطح تحصيالات</th>
              <th className="bg-white p-3  ">رشته تحصيلي</th>
              <th className="bg-white p-3  ">نوع قرارداد </th>
              <th className="bg-white p-3  ">سابقه کار مرتبط (سال)</th>
              <th className="bg-white p-3  ">اهم سوابق کاري</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">1</td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl w-32 text-xs"
                >
                  <option value="مالک">تمام وقت </option>
                  <option value="حقوقی">پاره وقت</option>
                </select>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
            </tr>
            {kilidi.length > 0 &&
              kilidi.map((item, index) => (
                <tr className="bg-white  border-b">
                  <td
                    key={index}
                    className="p-4 text-xs text-gray-800 font-bold"
                  >
                    {(index = 2)}
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-20"
                    />
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <select
                      name=""
                      id=""
                      className="border-gray-300 rounded-xl w-32 text-xs"
                    >
                      <option value="مالک">تمام وقت </option>
                      <option value="حقوقی">پاره وقت</option>
                    </select>
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="number"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            <tr className="">
              <td className="bg-white" colSpan="8">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setKilidi([...kilidi, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          سوابق تحصیلی، علمی، تخصصی و اجرایی مدیرعامل و اعضاء هیئت مدیره{" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام و نام خانوادگی </th>
              <th className="bg-white p-3  ">دانشگاه </th>
              <th className="bg-white p-3  ">رشته و مدرک تحصیلی </th>
              <th className="bg-white p-3  ">سمت در شرکت </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">1</td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
            </tr>

            <tr className="bg-white  border-b">
              <td>سوابق:</td>
              <td colSpan="5" className="p-2">
                <textarea
                  className="w-full h-16 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            {history.length > 0 &&
              history.map((item, index) => (
                <>
                  <tr className="bg-white  border-b">
                    <td className="p-4 text-xs text-gray-800 font-bold">
                      {index + 2}
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                      />
                    </td>
                  </tr>

                  <tr className="bg-white  border-b">
                    <td>سوابق:</td>
                    <td colSpan="5" className="p-2">
                      <textarea
                        className="w-full h-16 border border-gray-300 rounded-xl my -2"
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </td>
                  </tr>
                </>
              ))}

            <tr className="">
              <td className="bg-white" colSpan="9">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setHistory([...history, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to="/panel/Tashilat/3">
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
      </Link>
    </>
  );
}