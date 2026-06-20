const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },

    {
      type: 'category',
      label: 'SÁCH KẾ TOÁN MÁY THỜI ĐẠI SỐ',
      items: [

        {
          type: 'category',
          label: 'PHẦN I - TỔNG QUAN',
          items: [
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.1-khai-niem',
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.2-vai-tro-pmkt',
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.3-su-phat-trien',
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.4-nguyen-ly-hoat-dong',
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.5-quy-dinh-pl',
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.6-xu-huong-kt-so',
            'Sach_ke_toan_may_thoi_dai_so/phan-1-tong-quan/1.7-tcctkt',
          ],
        },

        {
          type: 'category',
          label: 'PHẦN II - HƯỚNG DẪN SỬ DỤNG ACMAN 9.1',
          items: [

            {
              type: 'category',
              label: '2.1. Cài đặt và các thiết lập căn bản ACMan 9.1',
              items: [
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.1-cai-dat-va-cac-thiet-lap-can-ban/2.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1',
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.1-cai-dat-va-cac-thiet-lap-can-ban/2.1.2-thiet-lap-co-so-du-lieu-ke-toan',

                {
                  type: 'category',
                  label: '2.1.3. Phân quyền và quản trị dữ liệu',
                  items: [
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.1-cai-dat-va-cac-thiet-lap-can-ban/2.1.3-phan-quyen-va-quan-tri-du-lieu/2.1.3.1-quan-ly-nguoi-su-dung',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.1-cai-dat-va-cac-thiet-lap-can-ban/2.1.3-phan-quyen-va-quan-tri-du-lieu/2.1.3.2-thay-doi-mat-khau',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.1-cai-dat-va-cac-thiet-lap-can-ban/2.1.3-phan-quyen-va-quan-tri-du-lieu/2.1.3.3-nhat-ky-lam-viec',
                  ],
                },

                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.1-cai-dat-va-cac-thiet-lap-can-ban/2.1.4-tro-giup',
              ],
            },

            {
              type: 'category',
              label: '2.2 Thiết lập danh mục trên phần mềm',
              items: [
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.1-danh-muc-phim-tat',
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.2-danh-muc-khach-hang',
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.3-danh-muc-ncc',

                {
                  type: 'category',
                  label: '2.2.4 Thiết lập chung',
                  items: [
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.4-thiet-lap-chung/2.2.4.1-thiet-lap-danh-so-chung-tu-tu-dong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.4-thiet-lap-chung/2.2.4.2-thiet-lap-ket-chuyen-tu-dong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.4-thiet-lap-chung/2.2.4.3-thiet-lap-dong-bo-ma',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.2-thiet-lap-danh-muc-tren-phan-mem/2.2.4-thiet-lap-chung/2.2.4.4-thiet-lap-xuat-gia-von',
                  ],
                },
              ],
            },

            {
              type: 'category',
              label: '2.3 Nguyên tắc nhập liệu trên phần mềm kế toán ACMan 9.1',
              link: {
             type: 'doc',
              id: 'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3-index',
       },
              items: [
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.1-so-du-dau-ky',
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.2-cap-nhat-chung-tu-phat-sinh',

                {
                  type: 'category',
                  label: '2.3.3 Nghiệp vụ tự động',
                  items: [
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.1-xuat-kho-tu-dong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.2-phan-bo-chi-phi-chung',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.3-khau-hao-tscd',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.4-phan-bo-cccd',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.5-tinh-gia-thanh',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.6-ket-chuyen-tu-dong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.3-nghiep-vu-tu-dong-tren-pm/2.3.3.7-kiem-soat-so-lieu',
                  ],
                },

                {
                  type: 'category',
                  label: '2.3.4 Chứng từ, sổ kế toán và báo cáo',
                  items: [
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.4-chung-tu-so-ke-toan/2.3.4.1-in-chung-tu-ke-toan',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.4-chung-tu-so-ke-toan/2.3.4.2-phat-hanh-so-ke-toan',
                  ],
                },

                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.5-bao-cao-tai-chinh',
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.6-to-khai-thue',
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.3-nguyen-tac-nhap-lieu/2.3.7-cac-ham-thong-minh',
              ],
            },

            {
              type: 'category',
              label: '2.4 Hệ thống phần mềm tích hợp',
              items: [
                'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.1-pm-hddt',

                {
                  type: 'category',
                  label: '2.4.2 Phần mềm tải, import hóa đơn và sao kê ngân hàng',
                  items: [
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.2-tai-va-ip-hoadon/2.4.2.1-tai-va-ip-hoadon-tct',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.2-tai-va-ip-hoadon/2.4.2.2-tai-va-ip-hoadon-website',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.2-tai-va-ip-hoadon/2.4.2.3-ip-sao-ke-ngan-hang',
                  ],
                },

                {
                  type: 'category',
                  label: '2.4.3 Phần mềm nhân sự và tiền lương',
                  items: [
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.1-co-che-chinh-sach',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.2-mo-ta-cong-viec',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.3-thong-tin-nhan-su',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.4-thiet-lap-chinh-sach-tien-luong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.5-bang-cham-cong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.6-bang-tinh-luong',
                    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.4-he-thong-pm-tich-hop/2.4.3-pm-nhan-su/2.4.3.7-tai-khoan-tich-hop-luong',
                  ],
                },
              ],
            },
            {
  type: 'category',
  label: '2.5 Phần mềm ACMan khác',
  items: [
    'Sach_ke_toan_may_thoi_dai_so/phan-2-huong-dan-su-dung/2.5-phan-mem-acman-khac',
  ],
},

          ],
        },

        {
          type: 'category',
          label: 'PHẦN III - THỰC HÀNH QUA BÀI TẬP MẪU',
          items: [
            'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.1-de-bai',
            'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.2-dinh-khoan',

            {
              type: 'category',
              label: '3.3 Thực hành qua bài tập mẫu',
              items: [
                'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.3-thuc-hanh-qua-bt-mau/3.3.1-tao-co-so-du-lieu',
                'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.3-thuc-hanh-qua-bt-mau/3.3.2-nhap-sodu-dau-ky',
                'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.3-thuc-hanh-qua-bt-mau/3.3.3-nhap-nghiep-vu-phat-sinh',
              ],
            },

            {
              type: 'category',
              label: '3.4 Phát hành sổ kế toán',
              items: [
                'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.4-phat-hanh/3.4.1-in-so-ketoan',
                'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.4-phat-hanh/3.4.2-phat-hanh-sokt',
              ],
            },

            'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.5-phat-hanh-bctc',
            'Sach_ke_toan_may_thoi_dai_so/phan-3-thuc-hanh/3.6-in-bao-cao-thue',
          ],
        },

        {
          type: 'category',
          label: 'PHẦN IV - THỰC HÀNH THEO MÔ HÌNH DOANH NGHIỆP',
          items: [
            'Sach_ke_toan_may_thoi_dai_so/phan-4-thuc-hanh-mo-hinh-doanh-nghiep/4.1-bt-dn-xaydung',
            'Sach_ke_toan_may_thoi_dai_so/phan-4-thuc-hanh-mo-hinh-doanh-nghiep/4.2-bt-dn-thuongmai',
            'Sach_ke_toan_may_thoi_dai_so/phan-4-thuc-hanh-mo-hinh-doanh-nghiep/4.3-bt-dn-dichvu',
          ],
        },

        {
          type: 'category',
          label: 'PHẦN V - CÂU HỎI ÔN TẬP',
          items: [
            'Sach_ke_toan_may_thoi_dai_so/phan-5-cau-hoi-on-tap/cau-hoi',
          ],
        },

        {
          type: 'category',
          label: 'PHẦN VI - XỬ LÝ LỖI',
          items: [
            'Sach_ke_toan_may_thoi_dai_so/phan-6-xu-ly-loi/xu-ly-loi',
          ],
        },

      ],
    },
  ],
};

module.exports = sidebars;