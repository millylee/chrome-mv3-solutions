export default defineBackground(() => {
  browser.offscreen.createDocument({
    url: '/offscreen.html',
    reasons: [browser.offscreen.Reason.BLOBS],
    justification: 'keep service worker running',
  });
});
