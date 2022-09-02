import React from "react";
import AboutIntro from "./Header";
import ImageCards from "./ImageCards";
import OurMembers from "./OurMembers";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

const AboutScreen: React.FC = () => {
  return (
    <div>
      <AboutIntro />
      <ImageCards />
      <OurStory />
      <OurMembers />
      <OurTeam />
    </div>
  );
};

export default AboutScreen;
