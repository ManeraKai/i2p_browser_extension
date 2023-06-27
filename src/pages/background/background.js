browser.proxy.onRequest.addListener(
    (requestInfo) => {
        const url = new URL(requestInfo.url)
        if (url.hostname.endsWith('.i2p')) {
            return { type: "http", host: "127.0.0.1", port: 4444 };
        }
        return { type: "direct" };
    },
    { urls: ["<all_urls>"] }
);
