const express = require('express'); // 引入 Express
const app = express(); // 建立 Express 應用程式
const port = 3000; // 設定伺服器監聽的埠號

// 允許 Express 處理 JSON
app.use(express.json());

// 根路由
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// 簡單的 JSON API
app.get('/api/message', (req, res) => {
    res.json({ message: '這是一個 Express API 回應' });
});

// 處理 POST 請求
app.post('/api/data', (req, res) => {
    const receivedData = req.body; // 取得用戶發送的 JSON 資料
    res.json({ message: '收到資料', data: receivedData });
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Express 伺服器運行中：http://localhost:${port}`);
});
