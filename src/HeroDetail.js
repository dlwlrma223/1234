import React from "react";
import { useParams, Link } from "react-router-dom";
import MiddleBar from "./MiddleBar";

export default function HeroDetail() {
  let params = useParams();

  return (
    <div>
      <MiddleBar mainTitle={params.id} />
      <Link to="/">Back</Link>
    </div>
  );
}
