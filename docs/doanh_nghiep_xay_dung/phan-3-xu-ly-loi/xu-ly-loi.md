---
title: 1.7. Tổ chức công tác kế toán trên phần mềm kế toán
hide_title: true
---

Trong quá trình thực hành trên phần mềm kế toán ACMan 9.1, người học có thể gặp một số sai sót làm ảnh hưởng đến tính chính xác của sổ sách kế toán, báo cáo quản trị và báo cáo tài chính. Phần lớn các lỗi phát sinh không phải do phần mềm mà xuất phát từ việc thiết lập dữ liệu ban đầu, tổ chức hệ thống mã chi tiết, nhập liệu chứng từ hoặc thực hiện các bước xử lý cuối kỳ chưa đầy đủ.  
Nội dung này giúp người học nhận biết nguyên nhân, phương pháp kiểm tra và hướng xử lý các lỗi thường gặp trong quá trình thực hành.  
## 3.1. Khi nhập số dư đầu kỳ
Các lỗi thường gặp:  
•	Nhập sót số dư đầu kỳ hoặc nhập sai số liệu, dẫn đến số dư tài khoản không chính xác, mất cân đối giữa bên Nợ và bên Có.  
•	Lựa chọn đăng ký chi tiết không đúng loại chi tiết theo quy định (Loại 1 đến Loại 9), làm cho sổ kế toán chi tiết phản ánh sai đối tượng theo dõi hoặc không đúng bản chất nghiệp vụ kinh tế phát sinh.  
•	Tổ chức hệ thống nhóm và mã chi tiết chưa khoa học như:  
o	Trùng mã đối tượng.  
o	Một đối tượng được khai báo nhiều mã khác nhau.  
o	Phân nhóm khách hàng, nhà cung cấp, vật tư hàng hóa không thống nhất.  
o	Đặt tên mã khó quản lý, khó tra cứu.  
Hậu quả:  
•	Sai số dư đầu kỳ.  
•	Sai sổ chi tiết công nợ, vật tư hàng hóa.  
•	Sai báo cáo quản trị và báo cáo tài chính.  
•	Khó khăn trong việc đối chiếu và kiểm tra số liệu.  
Người học sẽ được hướng dẫn:  
•	Kiểm tra tính cân đối của số dư đầu kỳ.  
•	Kiểm tra và hiệu chỉnh đăng ký chi tiết tài khoản.  
•	Phương pháp xây dựng hệ thống nhóm và mã chi tiết khoa học, dễ quản lý.  
•	Quy trình rà soát và điều chỉnh dữ liệu đầu kỳ.  
## 3.2. Khi nhập các nghiệp vụ phát sinh
Các lỗi thường gặp:  
•	Nhập sót chứng từ hoặc nhập sai số tiền phát sinh.  
•	Hạch toán sai tài khoản kế toán.  
•	Nhập sai ngày chứng từ hoặc ngày hạch toán.  
•	Nhập sai đối tượng công nợ khách hàng, nhà cung cấp.  
•	Nhập sai mã vật tư, hàng hóa hoặc đối tượng tập hợp chi phí.  
•	Tự ý tạo thêm mã chi tiết mới trong khi đối tượng đã tồn tại trên hệ thống.  
Hậu quả:  
•	Sổ quỹ tiền mặt, tiền gửi ngân hàng bị sai số dư hoặc phát sinh âm quỹ.  
•	Công nợ khách hàng, nhà cung cấp không chính xác.  
•	Tồn kho không đúng thực tế.  
•	Dữ liệu bị phân tán do một đối tượng tồn tại nhiều mã khác nhau.  
•	Sai lệch giữa sổ chi tiết và sổ tổng hợp.  
Người học sẽ được hướng dẫn:  
•	Phương pháp kiểm tra chứng từ phát sinh.  
•	Đối chiếu số liệu tiền mặt, tiền gửi, công nợ và hàng tồn kho.  
•	Truy tìm nguyên nhân sai lệch từ chứng từ gốc.  
•	Quy trình điều chỉnh dữ liệu phát sinh.  

## 3.3. Khi tải và import hóa đơn
Các lỗi phát sinh trong quá trình:  
-	Tải dữ liệu hóa đơn điện tử  
-	Import dữ liệu hóa đơn vào phần mềm   
-	Nhận diện sai thông tin hóa đơn  
-	Trùng hóa đơn hoặc thiếu hóa đơn  
-	Sai mã số thuế, thuế suất hoặc thông tin người mua – người bán  
-	Không tạo được chứng từ kế toán từ dữ liệu hóa đơn  
Người học sẽ được hướng dẫn:  
-	Kiểm tra dữ liệu hóa đơn đầu vào  
-	Kiểm tra định dạng file import  
-	Đối chiếu thông tin hóa đơn điện tử  
-	Xử lý lỗi import và kiểm tra dữ liệu sau import  
## 3.4. Khi thực hiện kết chuyển tự động
Các lỗi thường gặp:  
•	Chưa thiết lập chức năng kết chuyển tự động.  
•	Thiết lập thiếu các bút toán kết chuyển.  
•	Lỗi sai thiết lập TK kết chuyển (ví dụ hạch toán TK 7111 nhưng ở phần thiết lập là TK 711)  
•	Không kết chuyển các tài khoản tập hợp chi phí sản xuất như 1540, 1541, 1542, 1543.  
•	Không kết chuyển hết các TK đầu 6 chi phí (do mất mã đối tượng)  
•	Kết chuyển về TK 154 dư Có (do hạch toán giá vốn nhiều hơn chi phí)  
•	Không kết chuyển hết doanh thu (nguyên nhân có thể do bút toán giảm doanh thu)  
•	Không kết chuyển đầy đủ các tài khoản đầu 5,6,7,8,9 để xác định kết quả kinh doanh cuối kỳ.  

Hậu quả:  
•	Giá vốn không được tính đúng.  
•	Chi phí không được tập hợp đầy đủ.  
•	Kết quả hoạt động kinh doanh không chính xác.  
•	Báo cáo tài chính bị sai lệch.  
Người học sẽ được hướng dẫn:  
•	Thiết lập hệ thống kết chuyển tự động trên ACMan 9.1.  
•	Kiểm tra danh sách các tài khoản cần kết chuyển.  
•	Kiểm tra kết quả sau khi thực hiện kết chuyển.  
•	Xử lý các trường hợp kết chuyển thiếu hoặc sai.  
## 3.5. Khi kết xuất dữ liệu sang phần mềm HTKK
Các lỗi thường gặp:  
•	Không kết xuất được dữ liệu.  
•	HTKK báo lỗi khi nhận dữ liệu.  
•	Chỉ tiêu trên tờ khai không lên số liệu.  
•	Sai mã số thuế, thông tin doanh nghiệp hoặc kỳ kê khai.  
•	Sai định dạng dữ liệu theo yêu cầu của HTKK.  
•	Chênh lệch số liệu giữa phần mềm kế toán và tờ khai thuế.  
Hậu quả:  
•	Không nộp được hồ sơ khai thuế đúng thời hạn.  
•	Tờ khai thuế không chính xác.  
•	Phải kiểm tra và điều chỉnh nhiều lần.  
Người học sẽ được hướng dẫn:  
•	Kiểm tra dữ liệu trước khi kết xuất.  
•	Kiểm tra các điều kiện bắt buộc của HTKK.  
•	Xử lý các lỗi thường gặp khi import dữ liệu vào HTKK.  
•	Đối chiếu số liệu giữa phần mềm kế toán và hồ sơ kê khai thuế.  
## 3.6. Hướng dẫn kiểm tra và xử lý dữ liệu kế toán
Ngoài việc xử lý từng lỗi riêng lẻ, người học cần hình thành kỹ năng kiểm tra dữ liệu kế toán tổng thể nhằm đảm bảo tính chính xác và minh bạch của hệ thống kế toán doanh nghiệp.  
Nội dung bao gồm:  
	Quy trình kiểm tra dữ liệu kế toán  
	Kỹ năng rà soát chứng từ  
	Đối chiếu số liệu kế toán  
	Kiểm tra tính hợp lý của báo cáo tài chính  
	Phương pháp phát hiện sai lệch dữ liệu  
	Kỹ năng sao lưu và bảo vệ dữ liệu kế toán  
Việc xây dựng quy trình kiểm tra dữ liệu thường xuyên sẽ giúp doanh nghiệp hạn chế rủi ro về kế toán, thuế và quản trị tài chính trong quá trình vận hành thực tế.
