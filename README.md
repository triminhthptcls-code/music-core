# 🎵 SoundWave – Website Khám Phá Âm Nhạc

## 1. Giới thiệu dự án

**SoundWave** là website giới thiệu và khám phá âm nhạc được xây dựng bằng HTML, CSS và JavaScript thuần.

Dự án hướng đến việc tạo ra một giao diện âm nhạc hiện đại, dễ sử dụng, hỗ trợ người dùng khám phá bài hát, nghệ sĩ, album và các thông tin liên quan đến âm nhạc.

Website sử dụng phong cách **Dark Mode**, kết hợp màu tím làm điểm nhấn và thiết kế responsive để phù hợp với nhiều kích thước màn hình.

## 2. Công nghệ sử dụng

- **HTML5:** Xây dựng cấu trúc và nội dung trang web.
- **CSS3:** Thiết kế giao diện, bố cục, màu sắc, hiệu ứng và responsive.
- **JavaScript:** Xử lý tương tác, tìm kiếm, lọc bài hát, sắp xếp và các chức năng mô phỏng.
- **CSS Flexbox và Grid:** Sắp xếp các thành phần giao diện.

Dự án không yêu cầu backend hoặc cơ sở dữ liệu.

## 3. Các trang của website

| STT | Tên file | Chức năng |
|---|---|---|
| 1 | `index.html` | Trang chủ |
| 2 | `search.html` | Tìm kiếm và lọc bài hát |
| 3 | `song-detail.html` | Thông tin chi tiết bài hát |
| 4 | `artist-songs.html` | Thông tin và bài hát của ca sĩ |
| 5 | `composer-songs.html` | Thông tin tác giả, nhạc sĩ |
| 6 | `album-songs.html` | Thông tin album |
| 7 | `detail.html` | Nội dung tin tức âm nhạc |
| 8 | `about.html` | Giới thiệu SoundWave |
| 9 | `contact.html` | Trang liên hệ |
| 10 | `policy-terms.html` | Điều khoản và chính sách |

Các trang được thiết kế với hệ thống điều hướng và phong cách giao diện thống nhất.

## 4. Các chức năng chính

### Trang chủ

- Giới thiệu website SoundWave.
- Hiển thị các bài hát nổi bật.
- Hiển thị danh sách thể loại âm nhạc.
- Giới thiệu các nội dung âm nhạc.
- Điều hướng đến các trang khác.

### Tìm kiếm bài hát

- Tìm bài hát theo tên hoặc nghệ sĩ.
- Lọc theo thể loại: Indie, Lo-Fi, EDM, Acoustic.
- Lọc theo năm phát hành.
- Sắp xếp theo lượt nghe, năm phát hành hoặc tên bài hát.
- Chuyển đổi cách hiển thị giữa danh sách và lưới.
- Hiển thị số lượng kết quả phù hợp.
- Thông báo khi không tìm thấy bài hát.

### Trang thông tin chi tiết

- Hiển thị tên bài hát, ca sĩ và các thông tin liên quan.
- Hiển thị hình ảnh minh họa.
- Cung cấp các liên kết điều hướng đến nội dung liên quan.

### Thanh phát nhạc mô phỏng

- Hiển thị tên bài hát và nghệ sĩ được chọn.
- Hiển thị ảnh bìa bài hát.
- Có các nút điều khiển Play/Pause, Previous và Next.
- Mô phỏng trạng thái phát nhạc trên giao diện.

**Lưu ý:** Thanh Player hiện chủ yếu mô phỏng giao diện và tương tác, chưa phải hệ thống phát nhạc trực tuyến hoàn chỉnh.

## 5. Thiết kế giao diện

Website sử dụng phong cách hiện đại với các đặc điểm:

- Nền tối (Dark Mode).
- Màu tím làm màu chủ đạo.
- Thanh điều hướng dùng chung giữa các trang.
- Bố cục kết hợp Flexbox và CSS Grid.
- Các hiệu ứng hover và transition.
- Thẻ bài hát và album có hình ảnh minh họa.
- Thanh Player cố định ở phía dưới màn hình.
- Hỗ trợ responsive cho máy tính, máy tính bảng và điện thoại.

## 6. Cấu trúc dự án

Các thành phần chính của dự án gồm:

- `index.html` – Trang chủ.
- `search.html` – Trang tìm kiếm.
- Các file `.html` còn lại – Những trang nội dung.
- `index.css` – CSS dành cho trang chủ.
- `pages.css` – CSS dùng cho các trang của website.
- `script.js` – JavaScript xử lý các chức năng tương tác.
- `assets/` – Thư mục chứa hình ảnh và tài nguyên minh họa.
- `video/` – Thư mục chứa video sử dụng trong dự án.
- `README.md` – File giới thiệu và hướng dẫn dự án.

## 7. Hướng dẫn chạy dự án

### Cách 1: Mở trực tiếp

1. Tải hoặc sao chép toàn bộ mã nguồn về máy.
2. Giải nén nếu dự án ở định dạng ZIP.
3. Mở thư mục dự án.
4. Nhấp đúp vào file `index.html`.
5. Website sẽ được mở bằng trình duyệt.

### Cách 2: Sử dụng Visual Studio Code

1. Mở thư mục dự án bằng Visual Studio Code.
2. Cài đặt extension **Live Server** nếu chưa có.
3. Nhấp chuột phải vào `index.html`.
4. Chọn **Open with Live Server**.
5. Trình duyệt sẽ hiển thị website.

Cần giữ nguyên đường dẫn tương đối giữa các file HTML, CSS, JavaScript, hình ảnh và video để tài nguyên được tải chính xác.

## 8. Giới hạn của dự án

Đây là dự án frontend phục vụ học tập và thực hành nên có một số giới hạn:

- Dữ liệu bài hát được khai báo sẵn.
- Chưa kết nối cơ sở dữ liệu.
- Chưa tích hợp hệ thống tài khoản.
- Chưa có backend xử lý dữ liệu.
- Một số trang chi tiết sử dụng nội dung minh họa chung.
- Chức năng Player mang tính mô phỏng, chưa hỗ trợ phát toàn bộ bài hát thực tế.

## 9. Hướng phát triển

Trong tương lai, dự án có thể được mở rộng với các chức năng:

- Đăng ký và đăng nhập tài khoản.
- Lưu danh sách bài hát yêu thích.
- Tạo và quản lý playlist cá nhân.
- Tích hợp trình phát âm thanh thực tế.
- Kết nối API hoặc cơ sở dữ liệu bài hát.
- Phát triển chức năng tìm kiếm nâng cao.
- Cải thiện khả năng truy cập và trải nghiệm người dùng.

## 10. Mục đích học tập

Dự án SoundWave giúp thực hành và củng cố các kiến thức:

- Xây dựng cấu trúc trang web bằng HTML5.
- Sử dụng Semantic HTML.
- Thiết kế giao diện bằng CSS3.
- Áp dụng Flexbox và Grid.
- Thiết kế responsive bằng Media Queries.
- Sử dụng CSS Variables.
- Thao tác DOM bằng JavaScript.
- Xử lý sự kiện và tương tác người dùng.
- Tổ chức mã nguồn frontend theo nhiều trang.

---

**SoundWave – Feel the Music, Explore the Sound.**

*Dự án được xây dựng phục vụ mục đích học tập và thực hành phát triển website.*
