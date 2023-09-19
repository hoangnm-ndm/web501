# B1: Cài đặt nvm:

- windown: https://github.com/coreybutler/nvm-windows/releases
- macos:

Xong thì kiểm tra:
`nvm -v`

# B2: Dùng nvm để cài node và npm

`nvm use v18`
`nvm install v18`

# B3: Kiểm tra đã cài thành công chưa?

`node -v`
`npm -v`

# B5: Cài vitejs

`npm create vite@latest my_project_name -- --template vanilla`

```
cd my_project_name
npm i
npm run dev
```

# Cài đặt json-server

`npm i json-server`

- create file db.json
- add data in db.json:

```json
products: [
  { "id": "123", "name": "san pham A", "price": 200 },
  { "id": "222", "name": "san pham B", "price": 240 },
]
```

- Cài đặt và cấu hình concurrently:
  `npm i concurrently`
- Sử dụng: vào package.json thêm script:
  ```json
  "dev": ""concurrently \"npm run dev\" \"json-server --watch db.json --port 3000\""
  ```
