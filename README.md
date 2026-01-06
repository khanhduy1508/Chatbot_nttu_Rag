# Chatbot NTTU — RAG (Retrieval-Augmented Generation)

Một chatbot dạng RAG (Retrieval-Augmented Generation) cho mục đích nghiên cứu / demo. Tập trung vào việc kết hợp truy vấn dữ liệu (retrieval) và sinh ngôn ngữ (generation) để cung cấp câu trả lời chính xác hơn dựa trên tài liệu nguồn.

## Mô tả ngắn
Dự án này triển khai một chatbot kết hợp bộ nhớ vector / bộ tìm kiếm tài liệu với mô hình ngôn ngữ để trả lời câu hỏi người dùng dựa trên dữ liệu đã được nạp trước. README này là phiên bản cơ bản, không dùng icon, trình bày rõ ràng, dễ đọc và dễ chỉnh sửa.

## Tính năng chính
- Truy vấn tài liệu đã nạp (document retrieval)
- Kết hợp kết quả truy vấn với mô hình sinh ngôn ngữ để tạo câu trả lời (generation)
- Giao diện dòng lệnh đơn giản để thử nghiệm
- Cấu trúc dễ mở rộng cho nhiều nguồn dữ liệu và mô hình

## Yêu cầu
- Python 3.8+
- Một số thư viện phổ biến (ví dụ: numpy, scikit-learn, faiss, transformers) — dựa vào file requirements.txt trong repo
- Tùy thuộc vào cấu hình: GPU để chạy mô hình lớn nhanh hơn

## Cài đặt nhanh
1. Clone repository:
```
git clone https://github.com/khanhduy1508/Chatbot_nttu_Rag.git
cd Chatbot_nttu_Rag
```

2. Tạo môi trường ảo và cài dependencies:
```
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
```

Nếu chưa có file `requirements.txt`, hãy tạo hoặc cài theo nhu cầu:
```
pip install numpy scikit-learn faiss-cpu transformers
```

## Cấu hình
- Kiểm tra/Điền thông tin cấu hình ở file tương ứng (ví dụ `config.py`, `.env` hoặc `settings.json`) nếu repo có.
- Các thông số cần để cấu hình thường bao gồm:
  - Đường dẫn tới dữ liệu/tài liệu nguồn
  - Tham số vector store (kích thước vector, index type)
  - Thiết lập mô hình (tên model hoặc đường dẫn tới checkpoint)
  - Cấu hình môi trường (CPU/GPU)

## Cách chạy
- Chuẩn chạy thử (ví dụ):
```
python main.py
```
- Nếu có CLI cụ thể:
```
python run_chatbot.py --mode interactive
```
- Nếu có notebook demo:
  - Mở `notebooks/demo.ipynb` và chạy từng ô.

Thay `main.py` / `run_chatbot.py` bằng file entrypoint tương ứng trong repo nếu khác.

## Ví dụ sử dụng
1. Nạp dữ liệu:
```
python ingest.py --data ./data --index ./index
```
2. Chạy chatbot:
```
python chat.py --index ./index
```
(Thay tên script bằng thực tế trong repo.)

## Cấu trúc thư mục gợi ý
- data/                — nơi chứa tài liệu nguồn
- src/ hoặc app/       — mã nguồn chính
- notebooks/           — notebook minh họa
- requirements.txt     — danh sách phụ thuộc
- README.md            — tài liệu này
- LICENSE              — (nếu có)

Điều chỉnh theo cấu trúc thực tế của repository.

## Góp phần
- Mọi đóng góp đều hoan nghênh. Mở issue hoặc gửi pull request với mô tả rõ ràng.
- Trước khi gửi PR, chạy unit tests (nếu có) và đảm bảo lint pass.

## License
- Nếu repo có license, vui lòng thêm file `LICENSE` và cập nhật ở đây.
- Nếu chưa có, cân nhắc dùng MIT hoặc một license phù hợp cho dự án.

## Liên hệ
- Tác giả: khanhduy1508 (github.com/khanhduy1508)
- Nếu cần hỗ trợ hoặc muốn mình điều chỉnh README theo nội dung thực tế của dự án (ví dụ liệt kê các file script, mô tả các module cụ thể, hoặc thêm hướng dẫn cài đặt chi tiết), hãy gửi thêm thông tin hoặc nói rõ các file chính trong repo — mình sẽ cập nhật README sao cho phù hợp.
