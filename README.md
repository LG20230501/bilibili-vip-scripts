# bilibili-vip-scripts

Surge 模块用的两个通用脚本, 配合 Bilibili VIP 模块使用:

- `bilibili-vip-play.js` — PlayViewUnite 请求头换 key。key 不写死在文件里,
  由模块规则的 `argument=` 传入, 脚本里用 `$argument` 读取。
- `bilibili-vip-account.js` — 账号信息接口返回里把 VIP 字段改成大会员
  (只改 App 界面显示, 播放画质靠上面那条请求)。

> 注意: 这两个文件里不含任何账号 key。key 只放在你自己手机本地的
> `.sgmodule` 文件的 `argument=` 参数里, 不要公开分享那个模块文件。
