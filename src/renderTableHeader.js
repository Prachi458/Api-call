import React from "react";

const RenderTableHeader = (props) => {
  return Object.keys(props.users[0]).map((attr) => (
    <th className="row-class" key={attr}>
      {attr.toUpperCase()}
    </th>
  ));
};

export default RenderTableHeader;
