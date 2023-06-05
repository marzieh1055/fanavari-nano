import React from "react";
import { RiPencilFill } from "react-icons/ri";

const ViewLegalDetailUser = ({ details, close }) => {
    return (
        <form className="bg-white rounded-3xl mt-3 p-3">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-xl font-bold p-4 py-6">اطلاعات کاربر</p>
                <span onClick={() => close(false)} className="text-xl p-4 py-6" style={{ fontSize: "15px", cursor: "pointer" }}>بازگشت</span>
            </div>
            <hr className="border-dashed" />

                <div className="flex mt-6 items-center">
                    <img src="/./src/assets/imges/user.png" alt="" className="w-16" />
                    <div className=" pr-4">
                        <p className="font-bold">باتیس سهامی عام</p>
                        <p className="text-gray-500 text-xs">عکس پروفایل </p>
                    </div>

                </div>
                <div className="flex flex-wrap">
                    <div className="relative mt-3 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">نام شرکت</p>
                        <input
                            type="text"
                            placeholder={`${details.company_name}`}
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5">
                            <RiPencilFill />
                        </div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">محل ثبت</p>
                        <input
                            type="text"
                            placeholder="فارس / شیراز / ..."
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5">

                        </div>
                    </div>
                    <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">نوع شخصیت حقوقی</p>
                        <input
                            type="text"
                            placeholder="مدیر عامل"
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5">
                            <RiPencilFill />
                        </div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">شناسه ملی</p>
                        <input
                            type="text"
                            placeholder="024165058410"
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>
                    <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">تاریخ تاسیس</p>
                        <input
                            type="text"
                            placeholder="1401/2/13"
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">دارندگان حق امضا</p>
                        <input
                            type="text"
                            placeholder="پریا رامین فر / پریا رامین فر "
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>
                    <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">سرمایه اولیه(ریال)</p>
                        <input
                            type="text"
                            placeholder="321514687/97"
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">سرمایه فعلی(ریال)</p>
                        <input
                            type="text"
                            placeholder="316554941634"
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>
                    <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">موضوع فعالیت</p>
                        <input
                            type="text"
                            placeholder="نانو تکنولوژی"
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">نام و نام خانوادگی نماینده شرکت</p>
                        <input
                            type="text"
                            placeholder="روشانا بابایی"
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>
                    <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">تلفن همراه</p>
                        <input
                            type="text"
                            placeholder={`${details.phone}`}
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">تلفن ثابت</p>
                        <input
                            type="text"
                            placeholder="32549464"
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>
                    <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                        <p className="font-bold text-xs">پست الکتریک</p>
                        <input
                            type="text"
                            placeholder="bbb@gmail.com"
                            className="outline-none placeholder:text-xs border-0 w-full"
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>{" "}
                    <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
                        <p className="font-bold text-xs">وب سایت</p>
                        <input
                            type="text"
                            placeholder="bbb@gmail.com"
                            className="outline-none placeholder:text-xs border-0 w-full   "
                        />
                        <div className="absolute top-7 left-5"></div>
                    </div>
                </div>
        </form>
    );
};



export default ViewLegalDetailUser;
