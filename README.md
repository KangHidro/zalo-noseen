# Zalo Hide-Me (a.k.a Zalo No-seen)

Chromium extensition: Created for Zalo Web: No Seen/Typing/Delivered

## Update: Chặn luôn bằng các Adblocker, không cần cài extension nữa...

Bạn chỉ cần thêm các Rule này vào bộ filter adblock đang dùng là được.
```
||chat.zalo.me/*/typing*
||chat.zalo.me/*/seen*
||chat.zalo.me/*/delivered*
||chat.zalo.me/keepalive*
||chat.zalo.me/*/ping*
```


P/s: Nếu có ai dùng tính năng Side-panel của Microsoft EDGE (gần giống tính năng chia đôi màn hình ấy) thì các extension sẽ không hoạt động trên panel này được, nên nếu muốn block seen Zalo thì phải dùng Adguard PC/Mac và add custom rule này vào là ok nhé. Block seen facebook trên panel này cũng vậy, nếu có ai cần thì nhắn mình để mình viết hướng dẫn khác nhé...

## Tiện ích mở rộng cho trình duyệt lõi Chromium: Zalo Ẩn Thân Chi Thuật

Chặn "seen" tin nhắn, trạng thái "đang gõ" tin nhắn và trạng thái "Đã nhận" ở phía đối phương.
Thích hợp cho việc "theo dõi" người ấy, đọc tin nhắn trước mà không bị phát hiện là tin nhắn đã bị đọc.

## Cài đặt

1. Tải về bản mới nhất tại https://github.com/KangHidro/zalo-noseen/releases
2. Giải nén Source code
3. Mở trang chrome://extensions (Trang quản lý Tiện ích mở rộng của trình duyệt)
4. Bật chế độ dành cho nhà phat triển (Developer mode)
5. Chọn "Load unpacked", chọn thư mục source code vừa giải nén
6. Tải lại trang Zalo
7. Xong! Chúc bạn thành công!

## Báo lỗi

Nếu có lỗi gì thì đăng tại https://github.com/KangHidro/zalo-noseen/issues nhé!

Share with <3

## Có thể bạn thừa biết

Trong `Cài đặt` > `Quyền riêng tư` có mục "Hiển thị trạng thái 'Đã xem'", chức năng là gì thì bạn biết rồi đấy ;) Nhưng nó hoạt động không giống tiện ích mở rộng này nhé!

Tiện ích này có thể chặn cả trạng thái "Vừa mới truy cập" nhưng nó hoạt động không hoàn chỉnh, có lẽ khi gọi một API nào đó của Zalo (bắt buộc phải gọi) thì trạng thái này tự động được cập nhật. Nếu bạn muốn ẩn luôn trạng thái này thì hãy vào `Cài đặt` > `Quyền riêng tư`.
