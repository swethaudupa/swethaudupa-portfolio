import React from "react";

import "../../App.css";

import { workExpData } from "../../data";

export default function Experience() {
  return (
    <div className="py-8 md:py-4">
      <h4 className="header-text-color font-semibold text-lg mb-3">
        My Work Experience
      </h4>
      <div className="relative mt-3 flex w-full flex-col lg:w-2/3">
        <span className="left-1/2 absolute top-10 bottom-0 marginLeft30 hidden w-px progress-bar-active md:block"></span>
        {workExpData?.map((val, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex flex-col text-center md:flex-row md:text-left"
            >
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0 description-text-color mt-1 text-center header-text-color font-semibold">
                    <a
                      className="flex flex-col justify-center items-center"
                      href={val.companyLink}
                      target="_blank"
                    >
                      <img
                        src={val.companyLogo}
                        className="h-24 w-24 mb-1 object-contain"
                        alt="company logo"
                      />
                      <span className="block w-32">{val.name}</span>
                    </a>
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute left-0 -right-20 top-14 h-px -translate-y-1/2 transform progress-bar-active"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-24 top-12 hidden h-4 w-4 rounded-full border-2 progress-bar-active bg-white md:block"></span>

                  <div className="mt-12 flex">
                    <div className="md:-mt-1 md:pl-32 expContainer">
                      <span className="block font-body font-normal header-text-color">
                        {val.date}
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase header-text-color">
                        {val.designation}
                      </span>
                      <div className="pt-2">
                        {val.experience?.map((exp, index) => {
                          return (
                            <ul key={index} class="list-disc">
                              <li className="block pt-4 pb-1 font-body font-bold description-text-color">
                                {exp.projectName}
                              </li>
                              {exp.description?.map((exp, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="ml-4 xs:text-left font-body description-text-color"
                                  >
                                    {exp}
                                  </li>
                                );
                              })}
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden h-px opacity-30 divider-color mt-8 ml-7 mr-7"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
