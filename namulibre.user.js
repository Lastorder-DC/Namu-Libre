// ==UserScript==
// @name         NamuWiki Libre-like theme
// @downloadURL  https://raw.githubusercontent.com/Lastorder-DC/Namu-Libre/master/namulibre.user.js
// @version      1.0.2
// @description  NamuWiki Libre-like theme by DCinside Lastorder
// @author       Lastorder-DC
// @match        http://namu.wiki/*
// @match        https://namu.wiki/*
// @match        http://no-ssl.namu.wiki/*
// @match        https://no-ssl.namu.wiki/*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      cdn.rawgit.com
// ==/UserScript==
/* jshint -W097 */
'use strict';

function insertCSS(url) {
  GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(res) {
      GM_addStyle(res.responseText);
    }
  });
}

$("td").each(function(index) {
    var $style = $(this).attr("style");
    var $html = $(this).html();
    if(typeof $style !== "undefined" && $style.toLowerCase().indexOf("background-color:#00a495")>=0) {
        $(this).attr("style",$(this).attr("style").toLowerCase().replace("00a495","0074d9"));
    }
});

$("table[bordercolor='#00a495']").each(function(index) {
    $(this).attr("bordercolor","#0074d9");
});

$("span.wiki-color").each(function(index) {
    var $style = $(this).attr("style");
    if(typeof $style !== "undefined" && $style.toLowerCase().indexOf("#00a495")>=0) {
        $(this).attr("style",$(this).attr("style").toLowerCase().replace("00a495","0074d9"));
    }
});

$("div").each(function(index) {
    var $style = $(this).attr("style");
    if(typeof $style !== "undefined" && $style.toLowerCase().indexOf("#00a495")>=0) {
        $(this).attr("style",$style.toLowerCase().replace("00a495","0074d9"));
    }
});

insertCSS("https://cdn.rawgit.com/Lastorder-DC/Namu-Libre/1.0.2/namulibre.user.css");
