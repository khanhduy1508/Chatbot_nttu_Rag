# Chatbot NTTU — RAG (Retrieval-Augmented Generation)

Một chatbot dạng RAG (Retrieval-Augmented Generation) cho mục đích nghiên cứu / demo. Tập trung vào việc kết hợp truy vấn dữ liệu (retrieval) và sinh ngôn ngữ (generation) để cung cấp câu trả lời chính xác hơn dựa trên tài liệu nguồn.

## Mô tả ngắn
Dự án này triển khai một chatbot kết hợp bộ nhớ vector / bộ tìm kiếm tài liệu với mô hình ngôn ngữ để trả lời câu hỏi người dùng dựa trên dữ liệu đã được nạp trước.

## Tính năng chính
- Truy vấn tài liệu đã nạp (document retrieval)
- Kết hợp kết quả truy vấn với mô hình sinh ngôn ngữ để tạo câu trả lời (generation)
- Giao diện dòng lệnh đơn giản để thử nghiệm
- Cấu trúc dễ mở rộng cho nhiều nguồn dữ liệu và mô hình

## Yêu cầu
- Python 3.8+
- Một số thư viện phổ biến (ví dụ: numpy, scikit-learn, faiss, transformers) 
- Tùy thuộc vào cấu hình: GPU để chạy mô hình lớn nhanh hơn


## Góp phần
- Mọi đóng góp đều hoan nghênh. Mở issue hoặc gửi pull request với mô tả rõ ràng.
- Trước khi gửi PR, chạy unit tests (nếu có) và đảm bảo lint pass.


 ## Một số hình ảnh về dự án
 
<img width="466" height="277" alt="{CC87B94C-FAAB-4C34-AB93-A859B25EAABE}" src="https://github.com/user-attachments/assets/301051b7-7af6-48b3-a2be-a7d57fcb0aeb" />
<img width="466" height="277" alt="{BCC1B453-4748-4BB7-9F33-5BA2FEEC7383}" src="https://github.com/user-attachments/assets/2efff876-71ed-48fa-a2b3-464b2dc930b6" />
<img width="466" height="277" alt="{B64682F8-C0F8-4187-805D-0886413CED43}" src="https://github.com/user-attachments/assets/42299469-365c-4bc5-807e-7e669692f286" />
<img width="466" height="277" alt="{C072696F-26E3-427F-BB30-061B0281A7FF}" src="https://github.com/user-attachments/assets/b835d3da-9382-461d-a7ba-5ce34ba71be6" />

## Liên hệ
- Tác giả: khanhduy1508 (github.com/khanhduy1508)
- Nếu cần hỗ trợ hoặc muốn mình điều chỉnh README theo nội dung thực tế của dự án (ví dụ liệt kê các file script, mô tả các module cụ thể, hoặc thêm hướng dẫn cài đặt chi tiết), hãy gửi thêm thông tin hoặc nói rõ các file chính trong repo — mình sẽ cập nhật README sao cho phù hợp.
