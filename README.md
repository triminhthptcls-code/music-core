# SOUNDWAVE — 10 TRANG THEO ĐỀ (BẢN DỰA TRÊN INDEX CỦA BẠN)

## Đã làm gì?
- `index.html`: Giữ nội dung trang chủ bạn gửi: video MONO, Hero, 5 bài hát, Indie/Lo-Fi/EDM/Acoustic, Premium. Sửa 1 lỗi thiếu đóng `div.hero-content` và thêm liên kết sang các trang.
- `index.css`: Bản CSS trang chủ từ cuộc trò chuyện của bạn, phối màu Midnight Violet (đen tím), có bổ sung menu 10 trang.
- Chín file HTML còn lại: bám các mục trong đề, mỗi trang có Header + Menu + Footer, HTML semantic.
- `pages.css`: CSS dùng cho 9 trang còn lại (đừng đổi tên nếu không sửa link trong HTML).
- `script.js`: bộ lọc tìm kiếm, chuyển kiểu lưới/danh sách, follow demo, player demo, form demo.
- `assets`: ảnh bìa và ảnh minh họa thành viên (SVG tự tạo).

## HƯỚNG DẪN COPY VÀO VS CODE
1. Mở thư mục `SoundWave_Theo_Code_Cua_Ban`.
2. Kiểm tra các file HTML nằm cùng cấp với `index.css`, `pages.css`, `script.js`.
3. Mở `index.html` bằng Live Server; từ menu vào các trang còn lại.
4. Nếu bạn đã tự chỉnh `index.css` nhiều hơn sau khi gửi, bạn có thể dùng lại CSS của chính mình. Chỉ giữ phần bổ sung `header nav` cuối file nếu cần.
5. Trong HTML các trang mới: `<link rel="stylesheet" href="pages.css">` và `<script src="script.js" defer></script>`.
6. Không cần cài Node, React hay thư viện ngoài.

## LƯU Ý QUAN TRỌNG
- **Video thương mại MONO KHÔNG được đóng gói**. Vui lòng giữ video mà bạn đã có trong thư mục `video/` với đúng tên: `MONO - 'Chăm Hoa' (Official Music Video).mp4`. Chỉ sử dụng/tải lên GitHub nếu bạn có quyền sử dụng và phát hành video; bản nộp công khai nên thay bằng video được cấp phép hoặc video do bạn tự tạo.
- Năm, lượt nghe, nhạc sĩ, album, ca sĩ mẫu, giải thưởng, thông tin dịch vụ trong 9 trang là **dữ liệu demo minh họa**, không phải thông tin xác minh về nghệ sĩ ngoài đời. Trang chủ của bạn dùng các tên ca khúc thật, nhưng Top 5 là giả định, không phải bảng xếp hạng chính thức.
- Trình phát chỉ thay đổi trạng thái nút và thông tin bài hát, **không phát âm thanh**. Không có backend để gửi biểu mẫu hay tạo tài khoản Premium.
- Email, hotline, địa điểm trên contact là minh họa. Bản đồ là vị trí mẫu Hồ Gươm (không phải trụ sở thật).
- 9 trang mới đang dùng thư viện bài hát **hư cấu** để minh họa luồng Ca sĩ → Nhạc sĩ → Album. Nếu muốn đồng bộ hoàn toàn với các ca khúc thật trong trang chủ, cần bổ sung thông tin tín dụng và album chính xác trước khi gắn trực tiếp.
- `about.html` có [Tên thành viên...] để thay tên thật của nhóm, không để nguyên khi nộp.

## 10 TRANG BẮT BUỘC
1. index.html — Hero + 2 nút + Top Charts + 4 thể loại.
2. search.html — ô tìm kiếm, lọc thể loại, năm, sắp xếp, đếm kết quả, chuyển Grid/List.
3. song-detail.html — banner bìa, ca sĩ, nhạc sĩ, album, lượt nghe, nút player, lời do dự án tự viết, sidebar.
4. artist-songs.html — tiểu sử, followers, theo dõi, danh sách ca khúc.
5. composer-songs.html — phong cách sáng tác, giải thưởng demo, các tác phẩm và ca sĩ thể hiện.
6. album-songs.html — ảnh bìa, ngày phát hành, số bài, tổng thời lượng, tracklist.
7. detail.html — bài chuyên sâu / tin âm nhạc.
8. about.html — sứ mệnh, đội ngũ, chức danh, liên kết mạng xã hội mẫu.
9. contact.html — form và Google Maps minh họa.
10. policy-terms.html — bản quyền / DMCA, riêng tư, Premium.

## ĐĂNG GITHUB PAGES
- Đặt tên repo `SoundWave_MusicApp_[HoTen]_[MSSV]`, public.
- Upload toàn bộ file và thư mục `assets` vào nhánh `main`, giữ cấu trúc.
- `Settings > Pages > Deploy from a branch > main > /(root) > Save`.
- Kiểm tra đủ 10 trang và quay video giới thiệu ngắn theo đề.
