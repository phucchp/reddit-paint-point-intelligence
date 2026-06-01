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

Sau khi chạy lệnh, hãy mở trình duyệt và truy cập: [http://localhost:3000/PainRadar.html](http://localhost:3000/PainRadar.html)

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

2. Truy cập trình duyệt tại: [http://localhost:3000/PainRadar.html](http://localhost:3000/PainRadar.html)

---

### Cách 3: Sử dụng Live Server trong VS Code
Nếu bạn dùng VS Code làm Editor:

1. Cài đặt extension **Live Server** (của Ritwick Dey).
2. Click chuột phải vào file `PainRadar.html` chọn **Open with Live Server** (hoặc click nút `Go Live` ở góc dưới cùng bên phải màn hình VS Code).
3. Trình duyệt sẽ tự động mở trang web.

---

## Cấu trúc thư mục dự án
* `PainRadar.html`: Điểm khởi đầu (entrypoint) của ứng dụng, nạp React, Babel qua CDN và các component.
* `styles.css`: CSS style chính cho toàn bộ ứng dụng.
* `data.js`: Chứa dữ liệu tĩnh (pain points, competitor reports, v.v.).
* Các file `.jsx`: Chứa code component React (landing, dashboard, detail, ideas, v.v.).
* `.gitignore`: Cấu hình Git để loại trừ các file không cần thiết.
