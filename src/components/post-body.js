import React from "react";

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto bg-white bg-opacity-75 p-4 text-xl w-4xl">
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        itemProp="articleBody"
      />
    </div>
  );
}
