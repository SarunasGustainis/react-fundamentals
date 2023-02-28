import React from "react";

function ChildrenWithTitle({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default ChildrenWithTitle;
