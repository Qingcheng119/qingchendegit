# 青城技术社区 - 登录系统

完整的用户登录和注册系统，包含前端和后端实现。

## 📁 项目结构

```
├── login.html          # 登录/注册页面
├── index.html          # 主页（技术文章页面）
├── server.js           # 后端认证服务器
├── package.json        # 项目依赖配置
├── .env                # 环境变量配置
└── .gitignore          # Git忽略文件
```

## 🚀 快速开始

### 前置要求
- Node.js (v14 或更高版本)
- npm

### 安装依赖
```bash
npm install
```

### 启动服务器
```bash
npm start
```

或者开发模式（自动重启）：
```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动

### 访问应用
在浏览器中打开：
```
http://localhost:3000/login.html
```

## 👤 演示账户

- **用户名**: `demo`
- **密码**: `password123`

## 🔐 功能特性

### 登录页面 (login.html)
- ✅ 用户注册功能
- ✅ 用户登录功能
- ✅ 实时表单验证
- ✅ 错误提示
- ✅ 加载状态显示
- ✅ JWT Token存储

### 主页面 (index.html)
- 📚 技术文章显示
- 👤 用户资料卡片
- 🏷️ 分类标签
- 🔥 热门文章榜单
- 🎨 CSDN风格界面

### 后端 (server.js)
- 📝 用户注册 (`POST /api/register`)
- 🔑 用户登录 (`POST /api/login`)
- ✔️ Token验证 (`GET /api/verify`)
- 💚 健康检查 (`GET /api/health`)

## 🔒 安全特性

- 🔐 bcryptjs 密码哈希
- 🎫 JWT Token认证
- ✅ 输入验证
- 🚫 CORS防护
- 📌 密码最少8位
- 🔤 用户名仅英文字母

## 📝 API 文档

### 注册
```javascript
POST /api/register
Content-Type: application/json

{
  "username": "newuser",
  "password": "password123"
}

Response (201):
{
  "message": "注册成功",
  "username": "newuser"
}
```

### 登录
```javascript
POST /api/login
Content-Type: application/json

{
  "username": "demo",
  "password": "password123"
}

Response (200):
{
  "message": "登录成功",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "demo"
}
```

### 验证Token
```javascript
GET /api/verify
Authorization: Bearer {token}

Response (200):
{
  "message": "token有效",
  "username": "demo"
}
```

## 📋 使用说明

### 用户注册流程
1. 打开 `login.html`
2. 点击"立即注册"链接
3. 填写用户名（英文字母，最多16位）
4. 设置密码（最少8位）
5. 确认密码
6. 点击注册按钮

### 用户登录流程
1. 打开 `login.html`
2. 输入用户名和密码
3. 点击登录按钮
4. 成功后自动跳转到 `index.html`

### 浏览文章
1. 登录后进入主页
2. 左侧显示个人资料和分类
3. 中间显示完整文章内容
4. 按空格键可切换"摸鱼模式"查看隐藏内容

## ⚙️ 环境配置

编辑 `.env` 文件配置：
```
JWT_SECRET=your-secret-key
PORT=3000
```

## 🛠️ 开发建议

### 生产环境优化
1. 将内存用户存储替换为数据库（MySQL/MongoDB）
2. 使用 HTTPS
3. 添加速率限制防止暴力攻击
4. 使用环境变量管理敏感信息
5. 添加日志系统

### 前端增强
1. 添加密码强度验证
2. 实现"忘记密码"功能
3. 添加邮箱验证
4. 用户头像上传功能
5. 个人资料编辑页面

## 📦 依赖说明

- **express** - Web框架
- **cors** - 跨域资源共享
- **jsonwebtoken** - JWT令牌生成和验证
- **bcryptjs** - 密码加密
- **mysql2** - MySQL数据库驱动（待集成）
- **dotenv** - 环境变量管理
- **nodemon** - 开发工具（自动重启）

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License © 2025 Qingcheng119
