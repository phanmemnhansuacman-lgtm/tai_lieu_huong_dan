import React from "react";

export default function Arrow({
  from,
  to,
  type = "thin",
  bidirectional = false,
}) {
  if (!from || !to) return null;

  let start;
  let end;

  // ===== Xác định điểm nối =====

  // bên phải
  if (to.center.x > from.center.x + 50) {
    start = from.right;
    end = to.left;
  }
  // bên trái
  else if (to.center.x < from.center.x - 50) {
    start = from.left;
    end = to.right;
  }
  // bên dưới
  else if (to.center.y > from.center.y) {
    start = from.bottom;
    end = to.top;
  }
  // bên trên
  else {
    start = from.top;
    end = to.bottom;
  }

  // ==========================
  // Tạo đường gấp khúc 90°
  // ==========================

  let d = "";

  // Nếu nối ngang
  if (Math.abs(start.y - end.y) < 15) {

    const midX = (start.x + end.x) / 2;

    d = `
      M ${start.x} ${start.y}
      L ${midX} ${start.y}
      L ${midX} ${end.y}
      L ${end.x} ${end.y}
    `;

  }

  // Nếu nối dọc
  else {

    const midY = (start.y + end.y) / 2;

    d = `
      M ${start.x} ${start.y}
      L ${start.x} ${midY}
      L ${end.x} ${midY}
      L ${end.x} ${end.y}
    `;

  }

  return (
    <path
      d={d}
      className={`arrow ${type}`}
      fill="none"
      markerEnd="url(#arrow)"
      markerStart={bidirectional ? "url(#arrow)" : undefined}
    />
  );
}