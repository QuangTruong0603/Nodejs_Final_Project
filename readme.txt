Danh sách thành viên
- Bùi Quang Thịnh - MSSV: 52100584
- Kiều Cao Minh Kiệt - MSSV: 52100811
- Trần Hữu Quang Trường - MSSV: 52100941

Phân công
- Bùi Quang Thịnh
	Thiết kế giao diện
	Thiết kế database
	Xây dựng chức năng đăng nhập, đặt hàng
- Kiều Cao Minh Kiệt
	Xây dựng chức năng quản lý sản phẩm
	Viết báo cáo
	Quản lý khách hàng
- Trần Hữu Quang Trường
	Demo Video
	Quản lý nhân viên
	Quản lý thống kê


Hướng dẫn chạy demo

#Yêu cầu:
- Node.js 20.x.x
- MongoDB 7.0
- MongoDB 7.0 Command Line Database Tools (https://www.mongodb.com/try/download/database-tools)

#Các bước chạy demo:
- Bước 1: Truy cập vào thư mục 'source, chạy terminal và cài các node modules cần thiết với câu lệnh:
	npm install
- Bước 2: Đảm bảo rằng tiến trình mongod đang chạy. Nếu mongod chưa chạy, chạy tiến trình mongod với câu lệnh terminal:
	mongod
hoặc
	"C:\Program Files\MongoDb\Server\7.0\bin\mongod.exe".
Đảm bảo rằng thư mục "C:\data\db" tồn tại để chứa database. 
- Bước 3: Thay đổi connection string của MongoDB trong file .env nếu connection string ở máy hiện tại khác so với mặc định. (Connection string mặc định là "mongodb://127.0.0.1:27017/NodeJSFinal")
- Bước 4: Ở thư mục 'source', import database với câu lệnh:
	mongorestore -d NodeJSFinal_52100584 ./data/NodeJSFinal
	Lưu ý: Để chạy được lệnh trên, thêm đường dẫn của thư mục cài MongoDB Command Line Database Tools vào biến môi trường (Environment variable) PATH.
- Bước 5: Vẫn ở thư mục 'source', chạy ứng dụng với câu lệnh:
	npm start
- Bước 6: Truy cập trang web ứng dụng tại địa chỉ:
	localhost:3000
#Tài khoản 
- Quản trị viên: 
	Tên đăng nhập: admin
	Mật khẩu: admin
- Nhân viên bán hàng:
	Tên đăng nhập: thinhdhqb
	Mật khẩu: 123
Link deploy: https://nodejs-final-iu8e.onrender.com/
Link demo: https://drive.google.com/file/d/1gSFj2aUq423eCBs2h46GlUxqOA6amNhL/view?usp=sharing