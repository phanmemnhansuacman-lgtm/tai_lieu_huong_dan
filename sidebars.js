// Hàm dùng chung để tạo cấu trúc sidebar cho từng loại hình doanh nghiệp,
// chỉ cần đổi `folder` (tên thư mục trong docs/) và `label` (tên hiển thị PHẦN I)
function buildSidebar(folder, groupLabel) {
  return [
    {
      type: 'category',
      label: groupLabel,
      items: [

        {
          type: 'category',
          label: 'PHẦN I - THIẾT LẬP CHUNG',
          items: [

            {
              type: 'category',
              label: '1.1. Cài đặt và các thiết lập căn bản ACMan 9.1',
              items: [
                `${folder}/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1`,
                `${folder}/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.2-thiet-lap-co-so-du-lieu-ke-toan`,

                {
                  type: 'category',
                  label: '1.1.3. Phân quyền và quản trị dữ liệu',
                  items: [
                    `${folder}/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.3-phan-quyen-va-quan-tri-du-lieu/1.1.3.1-quan-ly-nguoi-su-dung`,
                    `${folder}/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.3-phan-quyen-va-quan-tri-du-lieu/1.1.3.2-thay-doi-mat-khau`,
                    `${folder}/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.3-phan-quyen-va-quan-tri-du-lieu/1.1.3.3-nhat-ky-lam-viec`,
                  ],
                },

                `${folder}/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.4-tro-giup`,
              ],
            },

            {
              type: 'category',
              label: '1.2. Thiết lập danh mục trên phần mềm',
              items: [
                `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.1-danh-muc-phim-tat`,
                `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.2-danh-muc-khach-hang`,
                `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.3-danh-muc-ncc`,

                {
                  type: 'category',
                  label: '1.2.4. Thiết lập chung',
                  items: [
                    `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.1-thiet-lap-danh-so-chung-tu-tu-dong`,
                    `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.2-thiet-lap-ket-chuyen-tu-dong`,
                    `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.3-thiet-lap-dong-bo-ma`,
                    `${folder}/phan-1-thiet-lap-chung/1.2-thiet-lap-danh-muc-tren-phan-mem/1.2.4-thiet-lap-chung/1.2.4.4-thiet-lap-xuat-gia-von`,
                  ],
                },
              ],
            },

            {
              type: 'category',
              label: '1.3. Nguyên tắc nhập liệu trên phần mềm kế toán ACMan 9.1',
              link: {
                type: 'doc',
                id: `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3-index`,
              },
              items: [
                `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.1-so-du-dau-ky`,
                `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.2-cap-nhat-chung-tu-phat-sinh`,

                {
                  type: 'category',
                  label: '1.3.3 Nghiệp vụ tự động',
                  items: [
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.1-xuat-kho-tu-dong`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.2-phan-bo-chi-phi-chung`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.3-khau-hao-tscd`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.4-phan-bo-cccd`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.5-tinh-gia-thanh`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.6-ket-chuyen-tu-dong`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.3-nghiep-vu-tu-dong-tren-pm/1.3.3.7-kiem-soat-so-lieu`,
                  ],
                },

                {
                  type: 'category',
                  label: '1.3.4. Chứng từ, sổ kế toán và báo cáo',
                  items: [
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.4-chung-tu-so-ke-toan/1.3.4.1-in-chung-tu-ke-toan`,
                    `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.4-chung-tu-so-ke-toan/1.3.4.2-phat-hanh-so-ke-toan`,
                  ],
                },

                `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.5-bao-cao-tai-chinh`,
                `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.6-to-khai-thue`,
                `${folder}/phan-1-thiet-lap-chung/1.3-nguyen-tac-nhap-lieu/1.3.7-cac-ham-thong-minh`,
              ],
            },

            {
              type: 'category',
              label: '1.4. Hệ thống phần mềm tích hợp',
              items: [
                `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.1-pm-hddt`,

                {
                  type: 'category',
                  label: '1.4.2. Phần mềm tải, import hóa đơn và sao kê ngân hàng',
                  items: [
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.2-tai-va-ip-hoadon/1.4.2.1-tai-va-ip-hoadon-tct`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.2-tai-va-ip-hoadon/1.4.2.2-tai-va-ip-hoadon-website`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.2-tai-va-ip-hoadon/1.4.2.3-ip-sao-ke-ngan-hang`,
                  ],
                },

                {
                  type: 'category',
                  label: '1.4.3. Phần mềm nhân sự và tiền lương',
                  items: [
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.1-co-che-chinh-sach`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.2-mo-ta-cong-viec`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.3-thong-tin-nhan-su`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.4-thiet-lap-chinh-sach-tien-luong`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.5-bang-cham-cong`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.6-bang-tinh-luong`,
                    `${folder}/phan-1-thiet-lap-chung/1.4-he-thong-pm-tich-hop/1.4.3-pm-nhan-su/1.4.3.7-tai-khoan-tich-hop-luong`,
                  ],
                },
              ],
            },

            {
              type: 'category',
              label: '1.5. Phần mềm ACMan khác',
              link: {
                type: 'doc',
                id: `${folder}/phan-1-thiet-lap-chung/1.5-phan-mem-acman-khac`,
              },
              items: [],
            },

          ],
        },

        {
          type: 'category',
          label: 'PHẦN II - HƯỚNG DẪN NHẬP LIỆU VÀ HẠCH TOÁN',
          items: [
            `${folder}/phan-2-thuc-hanh/2.1-dinh-khoan`,

            {
              type: 'category',
              label: '2.2 Hướng dẫn nhập liệu và hạch toán',
              items: [
                `${folder}/phan-2-thuc-hanh/2.2-huong-dan-nhap-lieu/2.2.1-tao-co-so-du-lieu`,
                `${folder}/phan-2-thuc-hanh/2.2-huong-dan-nhap-lieu/2.2.2-nhap-sodu-dau-ky`,
                `${folder}/phan-2-thuc-hanh/2.2-huong-dan-nhap-lieu/2.2.3-nhap-nghiep-vu-phat-sinh`,
              ],
            },

            {
              type: 'category',
              label: '2.3. Phát hành sổ kế toán',
              items: [
                `${folder}/phan-2-thuc-hanh/2.3-phat-hanh/2.3.1-in-so-ketoan`,
                `${folder}/phan-2-thuc-hanh/2.3-phat-hanh/2.3.2-phat-hanh-sokt`,
              ],
            },

            `${folder}/phan-2-thuc-hanh/2.4-phat-hanh-bctc`,
            `${folder}/phan-2-thuc-hanh/2.5-in-bao-cao-thue`,
          ],
        },

        {
          type: 'doc',
          id: `${folder}/phan-3-xu-ly-loi/xu-ly-loi`,
          label: 'PHẦN III - XỬ LÝ LỖI',
        },

        {
          type: 'category',
          label: 'PHẦN IV - HỆ THỐNG TÀI KHOẢN',
          items: [
            `${folder}/phan-4-he-thong-tai-khoan/4.1-hd-tra-cuu-tai-khoan-khi-hach-toan`,
            `${folder}/phan-4-he-thong-tai-khoan/4.2-bang-tai-khoan-tt99`,
          ],
        },

      ],
    },
  ];
}

const sidebars = {
  tutorialSidebar: buildSidebar('doanh_nghiep_thuong_mai', 'DOANH NGHIỆP THƯƠNG MẠI'),
  sanXuatSidebar: buildSidebar('doanh_nghiep_san_xuat', 'DOANH NGHIỆP SẢN XUẤT'),
  xayDungSidebar: buildSidebar('doanh_nghiep_xay_dung', 'DOANH NGHIỆP XÂY DỰNG'),
  dichVuSidebar: buildSidebar('doanh_nghiep_dich_vu', 'DOANH NGHIỆP DỊCH VỤ'),
};

module.exports = sidebars;