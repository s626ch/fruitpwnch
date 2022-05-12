// open page upon install instructing users how to use this piece of shit
// https://stackoverflow.com/questions/5745822/open-a-help-page-after-chrome-extension-is-installed-first-time/24429523#24429523
chrome.runtime.onInstalled.addListener(function (object) {
    let internalUrl = chrome.runtime.getURL("instructions.html");

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: internalUrl }, function (tab) {
            console.log("New tab launched with instructions.");
        });
    }
});
