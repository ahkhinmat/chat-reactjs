# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


HoleTex đã ghim
HoleTex
3 tuần trước (đã chỉnh sửa)
Mình thấy nhiều bạn bị lỗi tương tự như này khi đăng nhập bằng facebook từ localhost
"Facebook đã phát hiện chat-app không sử dụng kết nối bảo mật để truyền thông tin.
Chỉ khi nào chat-app cập nhật cài đặt bảo mật thì bạn mới có thể đăng nhập vào ứng dụng này qua Facebook."

Nguyên nhân: Do localhost không có ssl nên Facebook cảnh báo là kết nối không bảo mật 
Cách khắc phục: Các bạn thêm ssl cho localhost theo hướng dẫn ở đây:

B1. Cài đặt mkcert tool
Tham khảo link mkcert (https://github.com/FiloSottile/mkcert) để cài đặt cho từng hệ điều hành
brew install mkcert

B2. Thiết lập mkcert trên máy tính của bạn (Tạo một CA)
mkcert -install

B3. Vào thư mục gốc của dự án, tạo thư mục .cert nếu chưa có
mkdir -p .cert

B4. Tạo một certificate (chạy từ thư mục root của dự án)
mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"

B5. Cập nhật lại start script trong package.json thành 
 "start": "set HTTPS=true&&set SSL_CRT_FILE=./.cert/cert.pem SSL_KEY_FILE=./.cert/key.pem&&react-scripts start"

B6. Chạy lệnh npm run start để mở localhost.
