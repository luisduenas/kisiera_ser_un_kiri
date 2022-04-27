import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto bg-white bg-opacity-75 p-4">
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "DatoCmsImageBlock") {
            return <GatsbyImage image={record.image.gatsbyImageData} />;
          }
          return (
            <>
              <p>Don't know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          );
        }}
      />
    </div>
  );
}
