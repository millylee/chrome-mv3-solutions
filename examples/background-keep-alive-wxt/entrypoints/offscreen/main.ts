// 发送频率低于 30s 的消息
setInterval(() => {
  browser.runtime.sendMessage({ type: 'keepalive' });
}, 25 * 1000)