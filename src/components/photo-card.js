import React from "react";
import CoverImage from "./cover-image";
import Date from "./date"

export default function PhotoCard({image, title, date}) {
  return (
    <div className="bg-white border-4 border-black p-8 text-2xl text-pink-500 transform -rotate-12">
      <CoverImage title={image.title} fluid={image.fluid} slug={image.slug} />
      <div>{title}</div>
      <Date dateString={date} />
    </div>
  );
}
