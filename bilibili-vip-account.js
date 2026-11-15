// Bilibili VIP 显示伪装 - 账号信息接口返回里把 VIP 字段改成大会员
// 注意: 这个脚本只改 App 界面显示 (头像旁边的"大会员"标识、我的页面)
// 真正的播放画质由 PlayViewUnite 那条请求决定, 不靠这个脚本
let body = $response.body;
try {
  const obj = JSON.parse(body);
  if (obj && obj.data) {
    if (obj.data.vip) {
      obj.data.vip.type = 2;                 // 2 = 年度大会员
      obj.data.vip.status = 1;               // 1 = 有效
      obj.data.vip.due_date = 4102444800000; // 到期日 2100-01-01 (毫秒时间戳)
      obj.data.vip.vip_pay_type = 1;
      if (obj.data.vip.label) {
        obj.data.vip.label.text = '年度大会员';
      }
    }
    if ('vip_type' in obj.data) {
      obj.data.vip_type = 2;
    }
  }
  body = JSON.stringify(obj);
} catch (e) {
  // 解析失败就原样返回, 不影响正常使用
}
$done({ body: body });
