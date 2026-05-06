# 云同步设置：GitHub Pages + Supabase

你现在的网站还是 GitHub Pages，不需要换到 Vercel。Supabase 只负责存一份家庭共享数据，你和老婆用同一个同步码访问。

## 第一次配置

1. 打开 `https://supabase.com`，注册并创建一个 free project。
2. 进入项目后，打开左侧 `SQL Editor`。
3. 新建 query，把 `supabase-setup.sql` 里的内容整段粘贴进去，点 `Run`。
4. 打开 `Project Settings` -> `API`。
5. 复制两个东西：
   - Project URL
   - anon public key
6. 回到本地项目，打开 `sync-config.js`，填成这样：

```js
window.APP_SYNC_CONFIG = {
  supabaseUrl: "https://你的项目.supabase.co",
  supabaseAnonKey: "你的 anon public key",
};
```

7. 把更新后的文件上传到 GitHub 仓库：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `sync-config.js`
   - `supabase-setup.sql`
   - `SUPABASE_SETUP.md`
   - `README.md`
   - `DEPLOY.md`
   - `.nojekyll`

GitHub Pages 更新后，刷新网站即可看到家庭云端区域。

## 你和老婆怎么用

1. 你先打开线上网站，不要在本地 `file://` 页面创建链接。
2. 点 `设置/同步`。
3. 点 `创建家庭云端链接`。
4. App 会自动保存当前计划到 Supabase，并复制一个带 `#sync=...` 的家庭链接。
5. 把这个链接发给老婆。
6. 她打开链接一次，app 会自动连接云端；以后她正常打开同一个网站也会保留连接。
7. 两个人之后改计划、点“不想吃”、勾购物清单，都会自动保存到云端。
8. 如果刚好没刷新到最新，可以点 `设置/同步` -> `立即刷新`。

## 现在的同步逻辑

- Supabase 是主数据源。
- 浏览器本地只当缓存，用来让页面打开得快。
- 打开页面、切回页面、每 30 秒会自动检查云端有没有更新。
- 本机做了改动后，会自动保存到云端。
- 如果两个人同时改同一项，目前是后保存的人覆盖前一个；这个 app 先按家庭协作的简单模式处理。

## 安全说明

`anon public key` 放在网页里是 Supabase 的正常用法。真正要保密的是同步码；不要把同步码发到公开网页或群里。

这个版本没有账号登录，所以家庭链接里的同步码相当于你们家的钥匙。以后如果想做更正式的登录、个人账号、历史版本，再考虑 Vercel 或 Supabase Auth。
