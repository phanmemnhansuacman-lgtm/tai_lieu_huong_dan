import React from "react";
import "./style.css";

export default function AccountingFeatureCircle() {

  const items = [
    { icon: "🧾", text: "Hóa đơn điện tử" },
    { icon: "🏦", text: "Kết nối ngân hàng điện tử" },
    { icon: "📂", text: "Tự động nhập liệu chứng từ" },
    { icon: "🗄️", text: "Quản lý dữ liệu tập trung" },
    { icon: "📊", text: "Phân tích báo cáo tài chính" },
    { icon: "🤖", text: "Ứng dụng AI hỗ trợ xử lý nghiệp vụ kế toán" },
  ];

  return (
    <div className="feature-wrapper">
      {items.map((item,index)=>(
        <div className={`feature-circle item-${index}`} key={index}>
          <div className="feature-icon">{item.icon}</div>
          <div className="feature-text">{item.text}</div>
          <div className="feature-check">✓</div>
        </div>
      ))}
    </div>
  );
}