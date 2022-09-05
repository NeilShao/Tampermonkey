// ==UserScript==
// @name         CSND复制代码
// @version      0.1
// @description  CSND复制代码
// @author       Neil
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const codeDivs = [...document.getElementsByTagName("code")];
    codeDivs.forEach((codeDiv) => {
        codeDiv.contentEditable = "true";
    })
})();