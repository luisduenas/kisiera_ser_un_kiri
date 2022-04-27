import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Intro() {
  return (
    <section className="flex justify-center mt-16 mb-16 md:mb-12 mx-auto">
      <StaticImage
        src="../images/Kisiera_serunlogo.png"
        placeholder="tracedSVG"
        alt="Logo"
        width={512}
        backgroundColor="white"
      />
    </section>
  );
}
