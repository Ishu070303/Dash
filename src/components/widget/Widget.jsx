import "./widget.scss";

import { MdOutlineLocalOffer } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiExchangeDollarLine } from "react-icons/ri";

const Widget = ({ item }) => {
  let data = {
    title: "",
    isMoney: false,
    icon: "",
  };
  switch (item.type) {
    case "user":
      data = {
        title: "Total User",
        isMoney: false,
        icon: (
          <FiUsers className="icon" style={{ backgroundColor: "#A9B0E5" }} />
        ),
      };
      break;
    case "transaction":
      data = {
        title: "Total Transaction",
        isMoney: false,
        icon: (
          <MdOutlineLocalOffer
            style={{ backgroundColor: "#DEBF85" }}
            className="icon"
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Total Revenues",
        isMoney: true,
        icon: (
          <RiExchangeDollarLine
            style={{ backgroundColor: "#7FCD93" }}
            className="icon"
          />
        ),
      };
      break;
    case "like":
      data = {
        title: "Total Likes",
        isMoney: false,
        icon: (
          <LuThumbsUp className="icon" style={{ backgroundColor: "#ECA4A4" }} />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="right">{data?.icon}</div>
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && "$"} {item.value}
        </span>
      </div>
    </div>
  );
};

export default Widget;
