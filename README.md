# PainRadar — Find startup ideas from real Reddit pain points

Dự án này là một ứng dụng React chạy trực tiếp trên trình duyệt sử dụng React, ReactDOM và Babel Standalone qua CDN. Ứng dụng không yêu cầu quá trình build phức tạp nhưng cần chạy qua một local web server để tránh lỗi CORS khi tải các file `.jsx` nội bộ.

---

## Hướng dẫn cách chạy dự án dưới Local

### Cách 1: Sử dụng Node.js (Khuyên dùng)
Nếu máy bạn đã cài đặt Node.js (và các package manager như `npm`, `yarn` hoặc `pnpm`):

1. **Sử dụng `npx` (mặc định đi kèm npm):**
   ```bash
   npx serve -l 3000
   ```

2. **Sử dụng `pnpm`:**
   ```bash
   pnpm dlx serve -l 3000
   ```

3. **Sử dụng `yarn`:**
   ```bash
   yarn dlx serve -l 3000
   ```

Sau khi chạy lệnh, hãy mở trình duyệt và truy cập: [http://localhost:3000/raw-ui/PainRadar.html](http://localhost:3000/raw-ui/PainRadar.html)

---

### Cách 2: Sử dụng Python
Nếu máy bạn có sẵn Python (macOS thường cài sẵn):

1. Mở terminal tại thư mục dự án và chạy:
   * Đối với **Python 3**:
     ```bash
     python3 -m http.server 3000
     ```
   * Đối với **Python 2**:
     ```bash
     python -m SimpleHTTPServer 3000
     ```

2. Truy cập trình duyệt tại: [http://localhost:3000/raw-ui/PainRadar.html](http://localhost:3000/raw-ui/PainRadar.html)

---

### Cách 3: Sử dụng Live Server trong VS Code
Nếu bạn dùng VS Code làm Editor:

1. Cài đặt extension **Live Server** (của Ritwick Dey).
2. Click chuột phải vào file `raw-ui/PainRadar.html` chọn **Open with Live Server** (hoặc click nút `Go Live` ở góc dưới cùng bên phải màn hình VS Code).
3. Trình duyệt sẽ tự động mở trang web.

---

## Cấu trúc thư mục dự án
* `raw-ui/`: Thư mục chứa project raw ban đầu dùng làm tham khảo giao diện (UI).
  * `PainRadar.html`: Điểm khởi đầu (entrypoint) của ứng dụng raw, nạp React, Babel qua CDN.
  * `styles.css`: CSS style chính cho ứng dụng.
  * `data.js`: Dữ liệu tĩnh.
  * Các file `.jsx`: Các component React.
* `.gitignore`: Cấu hình Git để loại trừ các file không cần thiết.
