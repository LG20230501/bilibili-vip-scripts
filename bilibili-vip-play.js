// Bilibili VIP - PlayViewUnite 换 key (通用版)
// key 不写死在文件里, 由 Surge 模块规则的 argument= 传入, 脚本里用 $argument 读取
// 作用: 把播放请求的 authorization 头里的 access_key 换成会员号的 key,
// 让没开会员的号也能拿到大会员的播放地址和画质
const VIP_ACCESS_KEY = (typeof $argument === 'string' ? $argument : '').trim();
const headers = $request.headers;
const auth = headers['authorization'] || headers['Authorization'];
if (auth && VIP_ACCESS_KEY) {
  const m = auth.match(/^(\S+)\s+\S+/);
  if (m) {
    headers['authorization'] = m[1] + ' ' + VIP_ACCESS_KEY;
  } else {
    headers['authorization'] = 'identify_v1 ' + VIP_ACCESS_KEY;
  }
  delete headers['Authorization'];
}
$done({ headers: headers });
