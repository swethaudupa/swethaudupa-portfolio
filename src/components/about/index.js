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
          Born and raised in Bangalore, a full-stack web developer with over 8
          years of experience in web and mobile application development.
          <br />
          <br />
          My career began in a non-technical role, but I quickly transitioned to
          a technical position after being given the opportunity to build a
          website using any technology of my choice at the start of my career.
          This experience sparked my interest in the web technologies, including
          Angular, ReactJS, Ionic, and React native, among others.
          <br />
          <br />
          I thrive in fast-paced, challenging environments and have honed my
          skills through self-directed learning and on-the-job experience. My
          attention to detail and design sensibility allow me to produce
          pixel-perfect applications.
          <br />
          <br />
          When I'm not coding, I enjoy learning about history and space,
          traveling, cooking, and playing PC/mobile games.
        </div>
      </div>
    </>
  );
}
