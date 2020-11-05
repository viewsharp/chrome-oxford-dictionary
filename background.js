// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.contextMenus.create({
    id: "chrome-oxford-dictionary",
    title: "Show in Oxford Dictionary",
    contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    const query = info.selectionText.toLowerCase().replace(/ /g, '-')

    chrome.tabs.create({
        url: `https://www.oxfordlearnersdictionaries.com/definition/english/${query}`,
        // url: chrome.extension.getURL('popup.html'),
        active: false
    }, function(tab) {
        // After the tab has been created, open a window to inject the tab
        chrome.windows.create({
            tabId: tab.id,
            type: 'popup',
            focused: true
        });
    });
});