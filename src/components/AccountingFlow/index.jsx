import React, { useMemo, useState } from "react";
import "./style.css";

import { nodes, step1, step2, step3 } from "./data";
import { layoutNodes, createNodeMap } from "./layout";

import Node from "./Node";
import Arrow from "./Arrow";
import Toolbar from "./Toolbar";

export default function AccountingFlow() {
  const [step, setStep] = useState(0);

  // Tính layout
  const layout = useMemo(() => layoutNodes(nodes), []);

  // Map id -> node
  const nodeMap = useMemo(() => createNodeMap(layout), [layout]);

  return (
    <div className="flow">
      <Toolbar
        step={step}
        setStep={setStep}
      />

      <svg
        className="diagram"
        viewBox="0 0 1300 850"
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path
              d="M0 0 L8 5 L0 8 Z"
              fill="#263593"
            />
          </marker>
        </defs>

        <text
          x="650"
          y="45"
          className="title"
          textAnchor="middle"
        >
          NHẬT KÝ CHUNG
        </text>
        {/* STEP 1 */}

        {step >= 1 &&
          step1.map(([fromId, toId], index) => {
            const from = nodeMap[fromId];
            const to = nodeMap[toId];

            if (!from || !to) return null;

            return (
              <Arrow
                key={`s1-${index}`}
                from={from}
                to={to}
                type="thin"
              />
            );
          })}

        {/* STEP 2 */}

        {step >= 2 &&
          step2.map(([fromId, toId], index) => {
            const from = nodeMap[fromId];
            const to = nodeMap[toId];

            if (!from || !to) return null;

            return (
              <Arrow
                key={`s2-${index}`}
                from={from}
                to={to}
                type="thick"
              />
            );
          })}

        {/* STEP 3 */}

        {step >= 3 &&
          step3.map(([fromId, toId], index) => {
            const from = nodeMap[fromId];
            const to = nodeMap[toId];

            if (!from || !to) return null;

            return (
              <Arrow
                key={`s3-${index}`}
                from={from}
                to={to}
                type="double"
                bidirectional
              />
            );
          })}

        {/* Nodes */}

        {layout.map((node) => (
          <Node
            key={node.id}
            node={node}
            active={step > 0}
          />
        ))}
      </svg>
    </div>
  );
}
