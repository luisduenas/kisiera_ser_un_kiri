import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link to="/" className="hover:underline">
        <StaticImage
          src="../images/Kisiera_serunlogo.png"
          placeholder="tracedSVG"
          alt="Logo"
          width={200}
          backgroundColor="white"
        />
      </Link>
    </h2>
  );
}
