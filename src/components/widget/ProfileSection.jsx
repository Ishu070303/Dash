import React, { useState } from "react";

import { GrAdd } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";

import "./ProfileSection.scss";

export default function ProfileSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState("Basic");
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [contactDetails, setContactDetails] = useState({
    instagram: "",
    youtube: "",
  });

  const toggleFunction = () => {
    setIsVisible(!isVisible);
    setState("Basic");
  };
  return (
    <div
      className="widget"
      style={{
        minHeight: "240px",
        minWidth: "350px",
        width: "480px",
        height: "256px",
        display: "flex",
      }}
    >
      {basicDetails.name === "" &&
      basicDetails.email === "" &&
      basicDetails.number === "" ? (
        <div style={{ margin: "auto", textAlign: "center" }}>
          <GrAdd className="icn" onClick={toggleFunction} />
          <h6>Add Profile</h6>
        </div>
      ) : (
        <div>
          <h2 className="addpich2">{basicDetails.name}</h2>
          <div
            style={{
              display: "flex",
              marginLeft: "2rem",
              width: "70%",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                textAlign: "center",
                height: "30%",
                width: "40%",
              }}
            >
              <FaWhatsapp
                className="icnic"
                style={{ background: "#E9F9EB", color: "#3CC952" }}
              />
              <h5 className="addpich5">{basicDetails.number}</h5>
            </div>
            <div
              style={{ display: "flex", textAlign: "center", height: "30%", width: '35%'  }}
              
            >
              <BsInstagram
                className="icnic"
                style={{ background: "#FFE9EC", color: "#FF4E64" }}
              />
              <h5 className="addpich5">{contactDetails.instagram}</h5>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "2rem",
              width: "70%",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <div
              style={{ display: "flex", textAlign: "center", height: "30%",  width: '40%'  }}
            >
              <MdOutlineEmail
                className="icnic"
                style={{ background: "#EBE6F9", color: "#5C33CF" }}
              />
              <h5 className="addpich5">{basicDetails.email}</h5>
            </div>
            <div
              style={{ display: "flex", textAlign: "center", height: "30%", width: '35%' }}
            >
              <AiOutlineYoutube
                className="icnic"
                style={{ background: "#FFE9E9", color: "#FF0000"}}
              />
              <h5 className="addpich5">{contactDetails.youtube}</h5>
            </div>
          </div>
        </div>
      )}
      {isVisible && (
        <div className="ppver">
          <div
            className="pp-cntent"
            style={{
              width: "544px",
              height: `${state === "Contact" ? "463px" : "553px"}`,
            }}
          >
            <div className="pp-div">
              <h3>Add New Profile</h3>
              <RxCross1
                style={{
                  color: "#999CA0",
                  width: "13.5px",
                  height: "13.5px",
                  cursor: "pointer",
                }}
                onClick={toggleFunction}
              />
            </div>
            <div className="pp-div1">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="typ-div">
                  <h5 className="typ">Basic</h5>
                  <div
                    style={{
                      height: "4px",
                      background: `${
                        state === "Basic" ? "#3F84F8" : "#D9D9D9"
                      }`,
                    }}
                  ></div>
                </div>
                <div className="typ-div">
                  <h5 className="typ">Contact</h5>
                  <div
                    style={{
                      height: "4px",
                      background: `${
                        state === "Contact" ? "#3F84F8" : "#D9D9D9"
                      }`,
                    }}
                  ></div>
                </div>
              </div>
              {state === "Basic" ? (
                <>
                  <form>
                    <h6 className="h6">Enter Name *</h6>
                    <input
                      className="input1"
                      type="text"
                      value={basicDetails.name}
                      onChange={(e) =>
                        setBasicDetails({
                          ...basicDetails,
                          name: e.target.value,
                        })
                      }
                      placeholder="Eg. John Doe"
                    />{" "}
                    <br />
                    <h6 className="h6">Enter Email *</h6>
                    <input
                      className="input1"
                      type="email"
                      value={basicDetails.email}
                      onChange={(e) =>
                        setBasicDetails({
                          ...basicDetails,
                          email: e.target.value,
                        })
                      }
                      placeholder="Eg. John@xyz.com"
                    />{" "}
                    <br />
                    <h6 className="h6">Enter Phone *</h6>
                    <input
                      className="input1"
                      type="text"
                      value={basicDetails.number}
                      onChange={(e) =>
                        setBasicDetails({
                          ...basicDetails,
                          number: e.target.value,
                        })
                      }
                      placeholder="Eg. 9123456789"
                    />{" "}
                    <br />
                  </form>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      className="button1"
                      onClick={() => setState("Contact")}
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <form>
                    <h6 className="h6">
                      Instagram Link <span>(Optional)</span>
                    </h6>
                    <input
                      className="input1"
                      type="text"
                      value={contactDetails.instagram}
                      onChange={(e) =>
                        setContactDetails({
                          ...contactDetails,
                          instagram: e.target.value,
                        })
                      }
                      placeholder="Eg. John Doe"
                    />{" "}
                    <br />
                    <h6 className="h6">
                      Youtube Link <span>(Optional)</span>
                    </h6>
                    <input
                      className="input1"
                      type="email"
                      value={contactDetails.youtube}
                      onChange={(e) =>
                        setContactDetails({
                          ...contactDetails,
                          youtube: e.target.value,
                        })
                      }
                      placeholder="Eg. John@xyz.com"
                    />
                    <br />
                  </form>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      className="button1"
                      onClick={() => setState("Basic")}
                      style={{
                        border: "1px solid #999CA0",
                        color: "black",
                        background: "white",
                      }}
                    >
                      Prev
                    </button>
                    <button
                      className="button1"
                      onClick={toggleFunction}
                    >
                      Done
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
