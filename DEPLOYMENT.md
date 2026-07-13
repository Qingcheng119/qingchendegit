# Vercel 部署指南

完成以下步骤即可在 Vercel 上部署你的项目。

## 📋 部署步骤

### 1️⃣ 访问 Vercel 官网
打开 https://vercel.com

### 2️⃣ 用 GitHub 账号登录
- 点击 "Sign Up"
- 选择 "Continue with GitHub"
- 授权 Vercel 访问你的 GitHub 账户

### 3️⃣ 导入项目
- 点击 "New Project"
- 选择 "qingchendegit" 仓库
- 点击 "Import"

### 4️⃣ 配置项目
在项目设置页面：

**Framework**: Node.js (自动检测)

**Environment Variables** (环境变量)：
添加以下变量：
- 名称：`JWT_SECRET`
- 值：`your-secret-key-change-in-production`（你可以改成任意强密码）

或者使用默认值（不添加，系统会使用 server.js 中的默认值）

### 5️⃣ 部署
- 点击 "Deploy"
- 等待部署完成（通常 1-2 分钟）

---

## 🎉 部署完成！

部署成功后，你会获得一个 Vercel URL，例如：
```
https://qingchendegit.vercel.app
```

### 访问你的应用：
- 登录页面：`https://qingchendegit.vercel.app/login.html`
- 主页面：`https://qingchendegit.vercel.app/index.html`
- API 健康检查：`https://qingchendegit.vercel.app/api/health`

### 测试账号：
- **用户名**: `demo`
- **密码**: `password123`

---

## 📝 常见问题

### Q: 部署后可以自动更新吗？
A: 是的！Vercel 会自动监听你的 GitHub 仓库，每次 push 时自动重新部署。

### Q: 数据会被保存吗？
A: 目前使用内存存储，部署后重启会清空数据。建议后续连接数据库（MySQL/MongoDB）实现持久化。

### Q: 如何修改环境变量？
A: 
1. 打开 Vercel Dashboard
2. 进入项目
3. 点击 "Settings" → "Environment Variables"
4. 修改或添加变量
5. 重新部署（或自动重新部署）

### Q: 如何自定义域名？
A: 
1. 在 "Settings" → "Domains"
2. 添加你的自定义域名
3. 按照指示修改 DNS 记录

---

## 🔗 后续集成建议

为了实现数据持久化，建议后续：

1. **连接数据库**（任选一个）
   - MySQL（阿里云、腾讯云）
   - MongoDB Atlas（免费云数据库）
   - Supabase（PostgreSQL）

2. **修改 server.js** 使用数据库而不是内存存储

3. **添加更多功能**
   - 用户头像上传
   - 邮箱验证
   - 密码重置
   - 用户资料编辑

---

## 🆘 需要帮助？

部署过程中遇到问题？

1. 查看 Vercel Dashboard 中的 "Deployments" 日志
2. 检查 "Logs" 中的错误信息
3. 确保 package.json 中的依赖都已安装

---

**祝部署顺利！🚀**
