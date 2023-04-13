import React from "react";

import "../../App.css";

const styles = {
  descriptionContainer: {
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
  },
};

export default function About() {
  return (
    <>
      <h4 className="header-text-color font-semibold text-lg mb-3">
        Who am I?
      </h4>
      <div className="p-4" style={styles.descriptionContainer}>
        <div className="description-text-color text-sm">
          An experienced software developer with over 8 years of experience in
          web and mobile application development. Proven track record of
          delivering high-quality, user-centric solutions to clients. Technical
          expertise combined with an above-average understanding of design and
          attention to detail allows for creating products that not only
          function well but also look great. Passionate about work and always
          striving to stay ahead of the latest industry trends and technologies.
          A professional who is committed to delivering results that exceed
          expectations
        </div>
      </div>
    </>
  );
}
