import React from "react";
import AboutIntro from "./Header";
import ImageCards from "./ImageCards";
import OurMembers from "./OurMembers";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";
import Register from "./Register";

const AboutScreen: React.FC = () => {
  return (
    <div>
      <AboutIntro />
      <ImageCards />
      <OurStory />
      <OurMembers />
      <OurTeam />
      <OurValues />
      <Register />
    </div>
  );
};

export default AboutScreen;
