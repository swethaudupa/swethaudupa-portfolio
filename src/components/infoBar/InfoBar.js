import React from "react";

import profile_pic from "../../assets/images/profile.png";
import CircularProgress from "./CircularProgress";

import { FaFileDownload, FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

import { infoTableData, langSkillsData, hardSkillsData } from "../../data";

import "../../App.css";

export default function InfoBar({ show, setter }) {
  const className =
    "info-bar-bg overflow-auto h-screen md:w-[350px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40 xs:w-4/5";
  const appendClass = show ? " ml-0" : " ml-[-400px] md:ml-0";

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  const onButtonClick = () => {
    fetch("swetha_resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "swetha_resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="sticky top-0 p-2 flex flex-col items-center content-center p-7 info-card-color">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={profile_pic}
            alt="avatar"
          />
          <div className="header-text-color font-semibold text-sm mb-1 mt-3">
            Swetha Udupa
          </div>
          <span className="description-text-color text-xs mb-2">
            Front-end Developer
          </span>
        </div>

        <div>
          <div className="py-3 px-12">
            {infoTableData?.map((val, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <div className="header-text-color font-semibold text-sm">
                    {val.name}:
                  </div>
                  <span className="description-text-color text-xs">
                    {val.value}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="h-px opacity-30 divider-color ml-7 mr-7"></div>

          <div className="px-4 my-6 mx-3">
            {hardSkillsData?.map((val, index) => {
              return (
                <div className="mt-6" key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="header-text-color font-semibold text-sm">
                      {val.stack}
                    </span>
                    <span className="description-text-color text-xs ">
                      {val.percentage}
                    </span>
                  </div>
                  <div className="w-full main-bg-background rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="progress-bar-active h-1 rounded-full"
                      style={{ width: `${val.percentage}` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-px opacity-30 divider-color ml-7 mr-7"></div>

          <div className="flex items-center justify-evenly pt-7 pb-3 mb-3">
            {langSkillsData?.map((val, index) => {
              return (
                <div key={index} className="flex-col">
                  <CircularProgress
                    size={55}
                    strokeWidth={3}
                    percentage={val.percentage}
                    color="#FFC107"
                  />
                  <div className="header-text-color font-semibold text-sm mt-4 pl-1">
                    {val.language}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-px opacity-30 divider-color ml-7 mr-7"></div>

          <div className="flex items-center py-4 pl-8">
            <button className="flex" onClick={onButtonClick}>
              <span className="description-text-color uppercase text-xs font-bold">
                Download CV
              </span>
              <FaFileDownload color="#8c8c8e" size={"0.8em"} className="ml-2" />
            </button>
          </div>

          <div className="p-5 info-card-color flex items-center sticky bottom-0 justify-evenly">
            <a href="https://www.linkedin.com/in/swetharanig/" target="_blank">
              <FaLinkedin color="#8c8c8e" size={"0.8em"} />
            </a>
            <a href="https://github.com/swethaudupa" target="_blank">
              <FaGithub color="#8c8c8e" size={"0.8em"} />
            </a>
            <a href="mailto:swethaudupag@gmail.com" target="_blank">
              <FaGoogle color="#8c8c8e" size={"0.8em"} />
            </a>
          </div>
        </div>
      </div>

      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
