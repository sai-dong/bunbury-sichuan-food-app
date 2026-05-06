# 推荐部署路线：先 GitHub Pages

这个 App 现在是纯静态网页：`index.html` + `styles.css` + `app.js`。最适合先放 GitHub Pages。

## 为什么先 GitHub，不先 Vercel

- GitHub 以后最常用：存代码、备份、版本记录、分享项目，工作里也常见。
- GitHub Pages 对这种静态 App 已经够用，不需要服务器。
- 以后如果要 AI 后端、登录、数据库，再用 Vercel 从 GitHub 导入同一个项目即可，不浪费。

## 第一次部署步骤

1. 注册 GitHub：打开 `https://github.com`，创建账号。
2. 新建 repository：
   - Repository name: `bunbury-sichuan-food-app`
   - Public
   - 不用勾选 README，因为本地已经有。
3. 进入新仓库，点 `uploading an existing file` 或 `Add file` -> `Upload files`。
4. 上传这些文件：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `DEPLOY.md`
   - `.nojekyll`
5. 点 `Commit changes`。
6. 打开仓库 `Settings` -> `Pages`。
7. Source 选 `Deploy from a branch`。
8. Branch 选 `main`，folder 选 `/root`，保存。
9. 等 1-3 分钟，GitHub 会给你一个网址，通常像：
   `https://你的用户名.github.io/bunbury-sichuan-food-app/`

## 怎么分享给老婆

把 GitHub Pages 网址发给她。她打开后会看到同一个 App。

如果没有配置云同步，数据会保存在各自浏览器里。推荐直接用 Supabase，同步码会比 JSON 适合两个人长期用：

1. 按 `SUPABASE_SETUP.md` 创建 Supabase 项目并运行 SQL。
2. 把 Project URL 和 anon public key 填进 `sync-config.js`。
3. 把 `sync-config.js` 和新文件一起上传到 GitHub。
4. 你在 App 里点“创建同步码” -> “保存到云端”。
5. 她打开网站，粘贴同步码，点“连接”。

## 以后什么时候用 Vercel

当你想做这些功能时再接 Vercel：

- App 直接联网生成 AI 菜谱
- 用户登录、权限和更复杂的家庭账号
- 自动备份云端数据

到那时，Vercel 可以直接从 GitHub 仓库导入这个项目。
