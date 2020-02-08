import React from "react";
import "./Work.css";

type WorkProps = {
  title: string;
};

const Work: React.FC<WorkProps> = ({ title }) => (
  <div className="Work">
    <div className="title">{title}</div>
  </div>
);

export default Work;
