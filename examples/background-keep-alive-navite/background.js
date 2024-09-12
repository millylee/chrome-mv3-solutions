const main = async () => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'keepalive') {
      console.log('[BGSW] keeplive received');
    }
    return true;
  })

  await chrome.offscreen.createDocument({
    url: chrome.runtime.getURL('keepalive.html'),
    reasons: [chrome.offscreen.Reason.BLOBS],
    justification: 'keep service worker running',
  });
}

main();