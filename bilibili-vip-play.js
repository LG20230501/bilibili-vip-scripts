// Bilibili VIP - PlayViewUnite 身份替换 (通用版)
// argument 格式: key|mid|buvid|ticket, 由模块的 argument= 传入, 脚本里用 $argument 读取
// 只换 authorization 里的 key 不够, 服务器还会认 x-bili-mid、buvid 和 x-bili-ticket,
// 四个都换成会员号的, 服务器才认这是大会员账号
// 注意: ticket 是有时效的 JWT, 过期后要换新的
const parts = (typeof $argument === 'string' ? $argument : '').split('|');
const VIP_ACCESS_KEY = (parts[0] || '').trim();
const VIP_MID = (parts[1] || '').trim();
const VIP_BUVID = (parts[2] || '').trim();
const VIP_TICKET = (parts[3] || '').trim();
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
if (VIP_MID) {
  headers['x-bili-mid'] = VIP_MID;
}
if (VIP_BUVID) {
  headers['buvid'] = VIP_BUVID;
}
if (VIP_TICKET) {
  headers['x-bili-ticket'] = VIP_TICKET;
}
$done({ headers: headers });
