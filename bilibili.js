// ==UserScript==
// @name         bilibili
// @version      0.1
// @description  delete unuse content
// @author       Neil
// @match        https://www.bilibili.com/video/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const deleteClass = ["rec-list", "pop-live-small-mode", "ad-report", "slide_ad"]

    const deleteDivs = (list) => {
        list.forEach((element) => {
            element.remove();
        });
    };

    let emptyTimes = 0;
    const interval = setInterval(() => {
        let deleteDivsNow = []
        deleteClass.forEach((className) => {
            deleteDivsNow = deleteDivsNow.concat([...document.getElementsByClassName(className)]);
        })

        if (deleteDivsNow.length == 0)
        {
            emptyTimes += 0;
        }

        if (emptyTimes >= 10)
        {
            clearInterval(interval);
        }

        deleteDivs(deleteDivsNow);
    }, 1000)

})();
