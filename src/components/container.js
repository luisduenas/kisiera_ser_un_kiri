import React from "react";

export default function Container({ children }) {
  return (
    <div className={`container mx-auto px-5 bg-huellitas bg-contain bg-fixed`}>
      {children}
    </div>
  );
}
