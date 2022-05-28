import React from "react";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";


export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author?.name} picture={author?.picture} />
      </div>
      <div className="flex justify-center mb-8 md:mb-16 -mx-5 sm:mx-0">
        <div className="bg-white border-4 border-black p-8 text-2xl text-pink-500">
          <CoverImage title={title} fluid={coverImage?.gatsbyImageData} />
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
