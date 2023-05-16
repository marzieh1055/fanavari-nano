import React, { useState } from "react";

const Topbar = ({ avatar }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex items-center justify-between w-full h-c-6 rounded-3xl bg-c-2 px-7 relative">
      <form className="flex items-center w-c-7 h-14 p-4 gap-4 bg-white rounded-c border border-c-7">
        <div>
          <img
            className="w-3.5 h-3.5"
            src="/src/assets/imges/Vector3.png"
            alt=""
          />
        </div>
        <div className="flex-1 h-full">
          <input
            placeholder="جست و جو..."
            className="w-full h-full focus:outline-none"
          ></input>
        </div>
      </form>
      <div className="flex gap-10">
        <button className="flex items-center gap-4">
          <div className="relative">
            <img
              className="w-c-4 h-c-4"
              src="/src/assets/imges/Vector4.png"
              alt=""
            />
            <img
              className="absolute top-0 right-0"
              src="/src/assets/imges/Vector5.png"
              alt=""
            />
          </div>
          <div>
            <h2>اعلانات</h2>
          </div>
        </button>
        <div>
          <button className="flex items-center gap-4">
            <div>
              <img
                className="w-10 h-10"
                src={avatar}
                alt="avatar"
              />
            </div>
            <div>
              <img src="/src/assets/imges/Vector6.png" alt="" onClick={() => setShowModal(true)}/>
            </div>
            {showModal && (
              <div onClick={() => setShowModal(false)}
                class="absolute w-80 h-c-9 py-4 px-6 left-7 top-full bg-white z-10 rounded-lg flex flex-col gap-4">
                <div class="text-center bg-c-2 rounded-lg py-3">
                  <img class="w-16 h-16 mx-auto" src="css/assets/img/user.png" alt="" />
                  <h2 class="font-bold my-3 mb-1">محمد رنجبر</h2>
                  <a class="text-xs text-c-8 font-semibold">asd@gmail.com</a>
                </div>
                <div class="flex items-center gap-4">
                  <div>
                    <img src="css/assets/img/Vector.png" alt="" />
                  </div>
                  <a class="text-xs flex-1">
                    متن
                  </a>
                </div>
                <div class="flex items-center gap-4">
                  <div>
                    <img src="css/assets/img/Vector (1).png" alt="" />
                  </div>
                  <a class="text-xs flex-1">
                    متن
                  </a>
                </div>
                <div class="flex items-center gap-4">
                  <div>
                    <img src="css/assets/img/Vector (2).png" alt="" />
                  </div>
                  <a class="text-xs flex-1 text-c-9">
                    متن
                  </a>
                </div>
              </div>

            )}
          </button>
          {/* <div
            className="absolute w-80 h-c-9 py-4 px-6 left-7 top-full bg-white z-10 rounded-lg flex flex-col gap-4"
            style={{ display: "none" }}
          >
            <div className="text-center bg-c-2 rounded-lg py-3">
              <img
                className="w-16 h-16 mx-auto"
                src={avatar}
                alt="avatar"
              />
              <h2 className="font-bold my-3 mb-1">محمد رنجبر</h2>
              <a className="text-xs text-c-8 font-semibold">asd@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/src/assets/imges/Vector.png" alt="" />
              </div>
              <a className="text-xs flex-1">متن</a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/src/assets/imges/Vector (1).png" alt="" />
              </div>
              <a className="text-xs flex-1">متن</a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src="/src/assets/imges/Vector (2).png" alt="" />
              </div>
              <a className="text-xs flex-1 text-c-9">متن</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
