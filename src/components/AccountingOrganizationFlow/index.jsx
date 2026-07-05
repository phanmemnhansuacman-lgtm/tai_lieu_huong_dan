import React from "react";
import "./style.css";

export default function AccountingOrganizationFlow() {
  const leftItems = [
    "Lựa chọn thông tư chế độ kế toán phù hợp",
    "Khai báo đầy đủ thông tin chung của doanh nghiệp",
    "Thiết lập hệ thống các tài khoản chi tiết, sổ chi tiết",
    "Thiết lập danh mục, mã quản lý",
    "Thiết lập nguyên tắc phân bổ tài sản, tính giá hàng tồn kho",
  ];

  const rightItems = [
    "Thiết lập hệ thống sổ kế toán và báo cáo quản trị",
    "Thiết lập hệ thống thông tin nhân sự và cơ chế lương",
    "Kết nối dữ liệu hóa đơn điện tử, ngân hàng, chữ ký số",
    "Thiết lập phân quyền người dùng",
    "Thiết lập kết chuyển tự động để tổng hợp chính xác số liệu, lập báo cáo tài chính và báo cáo thuế",
  ];

  return (
    <div className="organization-flow">

      <div className="flow-column">
        {leftItems.map((item, index) => (
          <div className="flow-card" key={index}>
            ✓ {item}
          </div>
        ))}
      </div>

      <div className="flow-center">
        <div className="center-circle">
          Nội dung tổ chức
          <br />
          công tác kế toán
          <br />
          trên phần mềm
        </div>
      </div>

      <div className="flow-column">
        {rightItems.map((item, index) => (
          <div className="flow-card" key={index}>
            ✓ {item}
          </div>
        ))}
      </div>

    </div>
  );
}