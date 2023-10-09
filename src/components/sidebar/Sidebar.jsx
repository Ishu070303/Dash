import "./sidebar.scss";

import { BiSolidPieChartAlt2, BiUserCircle } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Board.</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <li>
            <BiSolidPieChartAlt2 className="icon" />
            <span style={{ fontWeight: "700" }}>Dashboard</span>
          </li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineLocalOffer className="icon" />
              <span>Transactions</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SlCalender className="icon" />
              <span>Schedules</span>
            </li>
          </Link>
          <li>
            <BiUserCircle className="icon" />
            <span>Users</span>
          </li>
          <li>
            <AiOutlineSetting className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom center">
        <ul>
          <li style={{ marginTop: ".5rem" }}>Help</li>
          <li style={{ marginTop: ".5rem" }}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
