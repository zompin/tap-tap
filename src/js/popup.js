const textarea = document.querySelector('textarea');

browser.storage.local.get('hosts').then(({ hosts }) => {
    if (!Array.isArray(hosts)) {
        return;
    }

    textarea.innerHTML = hosts.join('\n');
});

textarea?.addEventListener('keyup', (e) => {
    const hosts = e.target.value
        .split('\n')
        .map((v) => v.trim())
        .filter(Boolean);

    browser.storage.local.set({ hosts });
});
