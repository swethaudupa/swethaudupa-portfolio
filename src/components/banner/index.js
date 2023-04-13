import React from "react";

import Typewriter from "typewriter-effect";

import "../../App.css";

export default function Banner() {
  return (
    <div className="container-fluid">
      <div className="md:p-20 h-auto flex-col mb-8 bannerContainer xs:p-1 xs:h-80 xs:flex xs:items-center xs:mt-24 md:mt-0 xs:justify-center md:items-start">
        <div className="relative">
          <h3 className="mb-4 text-xl font-extrabold leading-none tracking-tight xs:text-4xl md:text-5xl lg:text-5xl header-text-color ">
            Hello
            <br />
            I'm Swetha Udupa!
          </h3>
          <p className="flex mb-6 text-lg font-normal lg:text-xl header-text-color">
            <div className="header-text-color">
              &lt;<i style={{ color: "#ffc107" }}>code</i>&gt;
            </div>
            <div className="xs:flex">
              &nbsp;I build&nbsp;
              <Typewriter
                options={{
                  strings: ["Web Apps", "Mobile Apps"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="header-text-color">
              &nbsp;&lt;/<i style={{ color: "#ffc107" }}>code</i>&gt;
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
