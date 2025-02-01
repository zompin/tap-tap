let hosts = [];

browser.storage.local.get('hosts').then((data) => {
    hosts = data.hosts || [];
});

browser.storage.onChanged.addListener((data) => {
    hosts = data.hosts.newValue;
});

browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (!changeInfo.url) {
        return;
    }

    const host = new URL(changeInfo.url).host;
    const newUrl = `/restrict.html?url=${changeInfo.url}`;

    if (hosts.some((h) => host.indexOf(h) !== -1)) {
        browser.tabs.update(tabId, { url: newUrl, loadReplace: true });
    }
});
