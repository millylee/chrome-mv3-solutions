// 发送频率低于 30s 的消息
setInterval(() => {
  chrome.runtime.sendMessage({ type: 'keepalive' });
}, 25 * 1000)