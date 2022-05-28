import React from "react";
import CoverImage from "./cover-image";
import Date from "./date";
import { Link } from "gatsby";

export default function PhotoCard({ image, title, date }) {
  return (
    <Link to={`/posts/${image.slug}`} aria-label={title}>
      <div className="bg-white border-4 border-black p-8 text-2xl text-pink-500">
        <CoverImage title={image.title} fluid={image.fluid} />
        <div>{title}</div>
        <Date dateString={date} />
      </div>
    </Link>
  );
}
