import React from "react";

function About({ image, about }) {
  const imageSrc = image || "https://via.placeholder.com/215";
  const aboutText = about || "About this blog";

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
