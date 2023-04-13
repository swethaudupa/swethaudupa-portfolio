import React, { useState } from "react";

import InfoBar from "./components/infoBar/InfoBar";
import MenuBarMobile from "./components/infoBar/MenuBarMobile";
import Banner from "./components/banner";
import About from "./components/about";
import Experience from "./components/workExperience";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="flex p-4 main-bg-background">
        <MenuBarMobile setter={setShowSidebar} />
        <InfoBar show={showSidebar} setter={setShowSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen md:ml-4 xs:ml-0 overflow-auto h-screen">
          <Banner />
          <About />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default App;
