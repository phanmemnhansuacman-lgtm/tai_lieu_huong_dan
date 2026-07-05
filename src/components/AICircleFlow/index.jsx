import React from "react";
import "./style.css";

export default function AICircleFlow() {
  const items = [
    { icon: "📝", text: "Giảm thủ công" },
    { icon: "⚡", text: "Tăng tốc xử lý" },
    { icon: "🛡️", text: "Giảm sai sót" },
    { icon: "📊", text: "Báo cáo tức thời" },
    { icon: "📈", text: "Nâng cao quản trị" },
  ];

  const radius = 205;

  return (
    <div className="circle-wrapper">
      {/* Trung tâm */}
      <div className="center-circle">
        <div className="center-icon">🤖</div>
        <div className="center-title">AI KẾ TOÁN</div>
      </div>

      {/* Các node */}
      {items.map((item, index) => {
        const angle = (360 / items.length) * index - 90;

        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={index}
            className="circle-item"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <div className="icon">{item.icon}</div>
            <div className="text">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}