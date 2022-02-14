// ==UserScript==
// @name         ar25iv
// @namespace    https://github.com/tao-shen/ar25iv
// @homepage     https://github.com/tao-shen/ar25iv
// @version      1.0
// @author       tao.shen
// @description  An Arxiv Jumper to Ar5iv
// @include      /^https?://(.*\.)?arxiv\.org/.*/
// @run-at       document-end
// @license      MIT License
// ==/UserScript==
window.onload=function () {
    let h0 = document.querySelector('#abs-outer > div.extra-services > div.full-text > ul');
    let h1 = document.querySelector('#abs-outer > div.extra-services > div.full-text > ul > li:nth-child(1)');
    let h2 = h1.cloneNode(h1);
    h2.children[0].text='Ar5iv';
    h2.children[0].href = h2.children[0].href.replace('arxiv','ar5iv');
    //h0.appendChild(h2);
    h0.insertBefore(h2,h0.children[0]);
}();
