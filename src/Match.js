import React from "react";
import Menu from "./Menu";
import MiddleBar from "./MiddleBar";
import FinallyBar from "./FinallyBar";

export default function Match() {
  return (
    <div>
      <Menu />
      <MiddleBar mainTitle="Match" />
      Match
      <FinallyBar />
    </div>
  );
}
