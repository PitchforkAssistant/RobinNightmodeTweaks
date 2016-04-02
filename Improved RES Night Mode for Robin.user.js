// ==UserScript==
// @name         Improved RES Night Mode for Robin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tweaks RES night mode to work better with Robin.
// @author       /u/PitchforkAssistant
// @match        https://*.reddit.com/robin/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.res-nightmode .robin-chat--header h1,.res-nightmode .robin-chat--sidebar .robin--username,.res-nightmode .robin-chat--vote-label,.res-nightmode .robin-message--message,.res-nigthmode .robin-message{color:#ddd}.res-nightmode .robin-chat--notification-widget,.res-nightmode .robin-message--timestamp,.res-nightmode .text-counter{color:#999}.res-nightmode .robin-chat--body{height:76vh}.res-nightmode .robin-chat--header h1 span{color:#eee}.res-nightmode .robin-room-participant.robin--presence-class--away .robin--username{color:#555}.res-nightmode .robin-chat,.res-nightmode .robin-chat--sidebar{background-color:#222}.res-nightmode .robin-chat--notification-widget label{display:block;margin-left:4px}.res-nightmode .robin-chat--notification-widget label input[type=checkbox]{width:13px;vertical-align:bottom;position:relative;top:-1px}.res-nightmode .robin-chat--vote{background-color:#111}.res-nightmode .robin-chat--vote.robin--active{background-color:#333;outline:0}.res-nightmode .robin-chat--vote:hover{background-color:#151515;outline:0}.res-nightmode .content{border:1px solid #333!important}.res-nightmode .robin-chat--report{text-align:center}.res-nightmode .robin-chat--sidebar{border-left:1px solid #333}.res-nightmode #header{border-bottom:none}.res-nightmode .robin-chat--header,.res-nightmode .robin-chat--sidebar-widget{border-bottom:1px solid #333}.res-nightmode .robin-chat--message-list{margin-left:7px}.res-nightmode .content ::-webkit-scrollbar{background-color:#222;visibility:hidden}.res-nightmode .content ::-webkit-scrollbar-thumb{visibility:visible;background-color:#111;box-shadow:0 1px 2px 0 rgba(0,0,0,.2);border-radius:2px}.res-nightmode .content ::-webkit-scrollbar-thumb:hover{background-color:#151515}.res-nightmode .content ::-webkit-scrollbar-corner{display:none}.res-nightmode .robin--user-class--self .robin--username{color:#ccc!important;font-weight:700}.res-nightmode .robin--flair-class--flair-0 .robin--username{color:#e00}.res-nightmode .robin--flair-class--flair-1 .robin--username{color:#f50}.res-nightmode .robin--flair-class--flair-2 .robin--username{color:#dd0}.res-nightmode .robin--flair-class--flair-3 .robin--username{color:#0c0}.res-nightmode .robin--flair-class--flair-4 .robin--username{color:#08f}.res-nightmode .robin--flair-class--flair-5 .robin--username{color:#b3d}');
