import React from "react";

const Media = ({ d }) => {
  let data = [
    { name: "movies 01" },
    { name: "music 01" },
    { name: "apps 01" },
    { name: "software 01" },
  ];
  return <div>{data[d].name}</div>;
};

export default Media;
