import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a motivated B.Tech student at Vishwakarma Institute of Information
          Technology, Pune, with a GPA of 9.1. During my tenure at MACCROS LLP,
          I honed my skills in web development, focusing on frontend and backend
          technologies. I led the development of Natours-App, a travel platform,
          and NewsMonkey, a React-based news app. Proficient in languages like
          JavaScript, Python, and frameworks like React.js. I'm also passionate
          about competitive programming and robotics, with achievements in
          Leetcode and participation in the e-Yantra Robotics Competition
          2022-23. Eager to contribute to innovative tech projects.
        </p>

        <br />

        <p className="text-xl">
          My fascination with AWS and cloud computing stems from a desire to
          explore the limitless possibilities they offer in terms of
          scalability, reliability, and cost-effectiveness. I am eager to delve
          deeper into cloud architecture, leveraging AWS services to design and
          deploy robust, scalable systems that meet modern technological
          demands.
        </p>
      </div>
    </div>
  );
};

export default About;
