import React from "react";
import PhotoCard from "./photo-card";

export default function HeroPost({
  title,
  coverImage,
  date,
  slug,
}) {
  return (
    <section>
      <div className="flex justify-center mb-8 md:mb-16">
        <PhotoCard
          image={{ title: title, fluid: coverImage.large, slug: slug }}
          title={title}
          date={date}
        />
      </div>
    </section>
  );
}
