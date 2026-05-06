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

GitHub Pages 更新后，刷新网站即可看到云同步区域。

## 你和老婆怎么用

1. 你打开网站，点 `创建同步码`。
2. 点 `保存到云端`。
3. 把同步码发给老婆。
4. 她打开同一个网站，把同步码粘贴进去，点 `连接`。
5. 她之后可以点 `从云端加载`，也可以打开 `自动同步`。

## 安全说明

`anon public key` 放在网页里是 Supabase 的正常用法。真正要保密的是同步码；不要把同步码发到公开网页或群里。

这个版本没有账号登录，所以同步码相当于你们家的钥匙。以后如果想做更正式的登录、个人账号、历史版本，再考虑 Vercel 或 Supabase Auth。
