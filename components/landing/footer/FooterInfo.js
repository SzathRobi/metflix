import React from "react";

function FooterInfo({ infos = [] }) {
  return (
    <div>
      {infos.map((info, index) => (
        <p key={index}>{info}</p>
      ))}
    </div>
  );
}

export default FooterInfo;
