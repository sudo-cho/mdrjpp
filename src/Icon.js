import React from "react";
import icons from "@react95/icons";

export default ({ name }) => (
  <img src={icons[name]} alt={`icon-${icons[name]}`} />
);
