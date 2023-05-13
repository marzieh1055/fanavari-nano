import React from "react";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const Verification = () => {
    return (
        <>
            <div className="h-screen flex">
                <div className="w-1/3 bg-cover bg-center bg-no-repeat">
                    <h1 className="mt-c-15 mb-c-20">
                        <img className="mx-auto" src="/src/assets/imges/Login/logofarsi.png" alt="" style={{
                            width: "80px",
                            height: "110px"
                        }} />
                    </h1>
                    <form className="w-5/6 mx-auto flex flex-col gap-4">
                        <h2 className="text-c-16 text-sm">
                            تایید شماره موبایل :

                        </h2>
                        <h2 className="text-justify text-c-16  text-sm">
                            به جهت ارسال و دریافت اطلاعات حساس از طریق سامانه پیام کوتاه،
                            نیاز به تایید شماره موبایل شما می باشد.
                        </h2>
                        <h2 className="text-justify text-c-16  text-sm">

                        لطفا کد ارسالی به شماره موبایل خود را وارد نمایید:
                        </h2>

                        <input type="text" id="floating_outlined" class="block py-2.5 px-0 w-full text-sm text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder="کد ارسال شده را وارد کنید " />

                        <button className="text-sm bg-c-17 text-white px-4 py-2 transition-colors hover:bg-c-18">تایید</button>
                    </form>
                </div>
                <div className="w-2/3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/imges/Login/background.889c334e8255dfcd19f2.jpg)' }}></div>
            </div>
        </>
    )
};

export default Verification;
