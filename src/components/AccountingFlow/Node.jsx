import React, { useState } from "react";

export default function Node({ node, active = false }) {
  const [hover, setHover] = useState(false);

  const {
    x,
    y,
    width,
    height,
    text,
  } = node;

  const lines = text.split("\n");

  return (
    <g
      transform={`translate(${x},${y})`}
      className={`flow-node ${active ? " active" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Shadow */}
      <rect
        className="node-shadow"
        x="4"
        y="4"
        width={width}
        height={height}
        rx="8"
      />

      {/* Box */}
      <rect
        className={hover ? "node-box hover" : "node-box"}
        width={width}
        height={height}
        rx="8"
      />

      {/* Text */}
      {lines.map((line, index) => (
        <text
          key={index}
          x={width / 2}
          y={
            lines.length === 1
              ? height / 2 + 6
              : height / 2 - 8 + index * 20
          }
          textAnchor="middle"
          className="node-label"
        >
          {line}
        </text>
      ))}
    </g>
  );
}