import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  const { label, nav } = data;
  return (
    <Link to={nav}>
      <div className="card">
        <h5>{label}</h5>
      </div>
    </Link>
  );
};
