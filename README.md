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


## Liên hệ
- Tác giả: khanhduy1508 (github.com/khanhduy1508)
- Nếu cần hỗ trợ hoặc muốn mình điều chỉnh README theo nội dung thực tế của dự án (ví dụ liệt kê các file script, mô tả các module cụ thể, hoặc thêm hướng dẫn cài đặt chi tiết), hãy gửi thêm thông tin hoặc nói rõ các file chính trong repo — mình sẽ cập nhật README sao cho phù hợp.
