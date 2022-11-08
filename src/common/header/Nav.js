import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/">Эхлэл</Link>
      </li>

      <li>
        <Link to="/news">Мэдээ</Link>
      </li>

      <li>
        <Link to="/pricing">Захиалга</Link>
      </li>
      <li>
        <Link to="/contact">Холбоо барих</Link>
      </li>
    </ul>
  );
};
export default Nav;
