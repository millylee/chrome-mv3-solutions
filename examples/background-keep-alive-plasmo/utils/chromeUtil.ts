/**
 * Create keep alive offscreen document
 */
export const createKeepAliveOffscreen = async () => {
  try {
    await chrome.offscreen.createDocument({
      url: chrome.runtime.getURL('tabs/keepalive.html'),
      reasons: [chrome.offscreen.Reason.BLOBS],
      justification: 'keep service worker running',
    });
  } catch (err) {
    console.error(err)
  }
};