import React from "react";
import PropTypes from 'prop-types'


const Header = (props) => {
  return (
    <section className="bg-gray-200 px-12 h-20">
      <nav className="flex justify-between items-center h-20">

        <div className="flex justify-around items-center w-96">
          <section className="text-2xl font-bold">{props.title}</section>
          <ul className="flex">
            <li className="w-20 hover:text-red-400 hover:underline cursor-pointer">Home</li>
            <li className="w-20 hover:text-red-400 hover:underline cursor-pointer">{props.aboutText}</li>
          </ul>
        </div>

        <section>
          <input
            className="border rounded outline-none px-2 "
            type="text"
            placeholder="Search"
          />
          <button className="px-2 bg-red-400 rounded ml-2 text-white hover:bg-white hover:text-red-400">{props.btnText}</button>
        </section>
      </nav>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  btnText: PropTypes.string
}

Header.defaultProps = {
  title: "logo goes here",
  btnText: "Search"
}

export default Header;
