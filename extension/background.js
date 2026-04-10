let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
  handleTabChange(activeInfo.tabId);
});

async function handleTabChange(tabId) {
  const now = Date.now();
  
  if (activeTabId && startTime) {
    const duration = (now - startTime) / 1000; // in seconds
    const tab = await chrome.tabs.get(activeTabId);
    if (tab && tab.url) {
      logActivity(tab.url, duration);
    }
  }

  activeTabId = tabId;
  startTime = now;
}

async function logActivity(url, duration) {
  // Sync with NovaOS Backend
  try {
    const { token } = await chrome.storage.local.get(['token']);
    if (!token) return;

    await fetch('http://localhost:5000/api/v1/coding/extension-log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ url, duration })
    });
  } catch (err) {
    console.error('Failed to sync activity:', err);
  }
}
