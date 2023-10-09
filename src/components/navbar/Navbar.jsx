import "./navbar.scss";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
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
              src="https://lh3.googleusercontent.com/-ndtbkpvy4VU/AAAAAAAAAAI/AAAAAAAAAAA/AN6ncHjYOyBPEJWDWDGmcx6VIm6L8PbMCQ/photo.jpg?sz=46"
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
