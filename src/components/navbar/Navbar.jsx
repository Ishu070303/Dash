import "./navbar.scss";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  const url = localStorage.getItem("imageUrl");
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="heading">
          <h1>Dashboard</h1>
        </div>
        <div className="items">
          <div className="item search">
            <input type="text" placeholder="Search..." />
            <AiOutlineSearch style={{ color: "#B0B0B0" }} />
          </div>
          <div className="item">
            <AiOutlineBell className="icon" />
          </div>
          <div className="item">
            <img
              src={url}
              alt="/"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
