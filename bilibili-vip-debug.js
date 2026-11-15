// Bilibili 调试脚本: 只发一条通知, 证明规则命中、MITM 生效、脚本真的跑起来了
// 不改任何请求/响应, 只是为了定位问题
if (typeof $notification !== 'undefined' && $notification.post) {
    $notification.post('BiliBili调试', '脚本已执行', $request ? ($request.url || 'request') : 'response');
}
$done({});
