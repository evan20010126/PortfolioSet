const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 使用 CORS 中間件來允許跨域請求
app.use(cors());

// 提供靜態文件
app.use(express.static(path.join(__dirname)));

// 設置路由來處理請求
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
