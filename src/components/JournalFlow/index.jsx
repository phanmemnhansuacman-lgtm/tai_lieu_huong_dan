import React from "react";
import "./style.css";

export default function JournalFlow() {
  const steps = [
    {
      icon: "📝",
      title: "NHẬP DỮ LIỆU",
      text: "Nhập dữ liệu đầu vào theo chứng từ kế toán phát sinh.",
      color: "blue",
    },
    {
      icon: "⚙️",
      title: "XỬ LÝ DỮ LIỆU",
      text: "Hệ thống tự động xử lý và hạch toán dữ liệu.",
      color: "green",
    },
    {
      icon: "📚",
      title: "CẬP NHẬT SỔ KẾ TOÁN",
      text: "Tự động cập nhật sổ kế toán tổng hợp và chi tiết.",
      color: "orange",
    },
    {
      icon: "📊",
      title: "LẬP BÁO CÁO",
      text: "Tự động lập báo cáo tài chính và báo cáo quản trị.",
      color: "purple",
    },
  ];

  return (
    <div className="journal-flow">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`flow-box ${step.color}`}>
            <div className="flow-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>

          {index < steps.length - 1 && (
            <div className="flow-arrow">↓</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}