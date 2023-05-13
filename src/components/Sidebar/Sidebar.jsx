import React from "react";

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
      <div className="mr-6">
        <div className="flex items-center gap-4 h-12">
          <img
            className="w-c-4 h-c-4"
            src="/src/assets/imges/Vector1.png"
            alt=""
          />
          <a className="flex-1" href="">
            کارشناسان
          </a>
        </div>
        <div className="-mr-6 px-6 rounded-3xl bg-c-4">
          <button className="w-full flex items-center justify-between h-12">
            <div className="flex items-center gap-4">
              <img
                className="w-c-4 h-c-4"
                src="/src/assets/imges/Vector1.png"
                alt=""
              />
              <span className="text-c-5" href="">
                کارشناسان
              </span>
            </div>
            <img src="/src/assets/imges/Vector2.png" alt="" />
          </button>
          <div className="flex flex-col">
            <a className="h-12 flex items-center" href="">
              کارشناسان
            </a>
            <a className="h-12 flex items-center" href="">
              کارشناسان
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 h-12">
          <img
            className="w-c-4 h-c-4"
            src="/src/assets/imges/Vector1.png"
            alt=""
          />
          <a className="flex-1" href="">
            کارشناسان
          </a>
        </div>
        <div className="flex items-center gap-4 h-12">
          <img
            className="w-c-4 h-c-4"
            src="/src/assets/imges/Vector1.png"
            alt=""
          />
          <a className="flex-1" href="">
            کارشناسان
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
