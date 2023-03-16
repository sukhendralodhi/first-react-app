import React from "react";

const Header = () => {
  return (
    <section className="bg-gray-200 px-12 h-20">
      <nav className="flex justify-between items-center h-20">

        <div className="flex justify-around items-center w-96">
          <section className="text-2xl font-bold">TextUtils</section>
          <ul className="flex">
            <li className="w-20 hover:text-red-400 hover:underline cursor-pointer">Home</li>
            <li className="w-20 hover:text-red-400 hover:underline cursor-pointer">About</li>
          </ul>
        </div>

        <section>
          <input
            className="border rounded outline-none px-2 "
            type="text"
            placeholder="Search"
          />
          <button className="px-2 bg-red-400 rounded ml-2 text-white hover:bg-white hover:text-red-400">Search</button>
        </section>
      </nav>
    </section>
  );
};

export default Header;
