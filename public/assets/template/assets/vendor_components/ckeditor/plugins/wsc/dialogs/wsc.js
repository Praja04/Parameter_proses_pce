﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function () {
  function z(a) {
    return a && a.domId && a.getInputElement().$
      ? a.getInputElement()
      : a && a.$
        ? a
        : !1;
  }
  function I(a) {
    if (!a)
      throw "Languages-by-groups list are required for construct selectbox";
    var c = [],
      d = "",
      e;
    for (e in a)
      for (var g in a[e]) {
        var f = a[e][g];
        "en_US" == f ? (d = f) : c.push(f);
      }
    c.sort();
    d && c.unshift(d);
    return {
      getCurrentLangGroup: function (c) {
        a: {
          for (var e in a)
            for (var d in a[e])
              if (d.toUpperCase() === c.toUpperCase()) {
                c = e;
                break a;
              }
          c = "";
        }
        return c;
      },
      setLangList: (function () {
        var c = {},
          e;
        for (e in a) for (var d in a[e]) c[a[e][d]] = d;
        return c;
      })(),
    };
  }
  var f = (function () {
      var a = function (a, b, e) {
        e = e || {};
        var g = e.expires;
        if ("number" == typeof g && g) {
          var f = new Date();
          f.setTime(f.getTime() + 1e3 * g);
          g = e.expires = f;
        }
        g && g.toUTCString && (e.expires = g.toUTCString());
        b = encodeURIComponent(b);
        a = a + "\x3d" + b;
        for (var h in e)
          (b = e[h]), (a += "; " + h), !0 !== b && (a += "\x3d" + b);
        document.cookie = a;
      };
      return {
        postMessage: {
          init: function (a) {
            window.addEventListener
              ? window.addEventListener("message", a, !1)
              : window.attachEvent("onmessage", a);
          },
          send: function (a) {
            var b = Object.prototype.toString,
              e = a.fn || null,
              g = a.id || "",
              f = a.target || window,
              h = a.message || { id: g };
            a.message &&
              "[object Object]" == b.call(a.message) &&
              (a.message.id ? a.message.id : (a.message.id = g),
              (h = a.message));
            a = window.JSON.stringify(h, e);
            f.postMessage(a, "*");
          },
          unbindHandler: function (a) {
            window.removeEventListener
              ? window.removeEventListener("message", a, !1)
              : window.detachEvent("onmessage", a);
          },
        },
        hash: { create: function () {}, parse: function () {} },
        cookie: {
          set: a,
          get: function (a) {
            return (a = document.cookie.match(
              new RegExp(
                "(?:^|; )" +
                  a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                  "\x3d([^;]*)",
              ),
            ))
              ? decodeURIComponent(a[1])
              : void 0;
          },
          remove: function (c) {
            a(c, "", { expires: -1 });
          },
        },
        misc: {
          findFocusable: function (a) {
            var b = null;
            a &&
              (b = a.find(
                "a[href], area[href], input, select, textarea, button, *[tabindex], *[contenteditable]",
              ));
            return b;
          },
          isVisible: function (a) {
            var b;
            (b = 0 === a.offsetWidth || 0 == a.offsetHeight) ||
              (b =
                "none" ===
                (document.defaultView && document.defaultView.getComputedStyle
                  ? document.defaultView.getComputedStyle(a, null).display
                  : a.currentStyle
                    ? a.currentStyle.display
                    : a.style.display));
            return !b;
          },
          hasClass: function (a, b) {
            return !(
              !a.className ||
              !a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"))
            );
          },
        },
      };
    })(),
    a = a || {};
  a.TextAreaNumber = null;
  a.load = !0;
  a.cmd = { SpellTab: "spell", Thesaurus: "thes", GrammTab: "grammar" };
  a.dialog = null;
  a.optionNode = null;
  a.selectNode = null;
  a.grammerSuggest = null;
  a.textNode = {};
  a.iframeMain = null;
  a.dataTemp = "";
  a.div_overlay = null;
  a.textNodeInfo = {};
  a.selectNode = {};
  a.selectNodeResponce = {};
  a.langList = null;
  a.langSelectbox = null;
  a.banner = "";
  a.show_grammar = null;
  a.div_overlay_no_check = null;
  a.targetFromFrame = {};
  a.onLoadOverlay = null;
  a.LocalizationComing = {};
  a.OverlayPlace = null;
  a.sessionid = "";
  a.LocalizationButton = {
    ChangeTo_button: {
      instance: null,
      text: "Change to",
      localizationID: "ChangeTo",
    },
    ChangeAll: { instance: null, text: "Change All" },
    IgnoreWord: { instance: null, text: "Ignore word" },
    IgnoreAllWords: { instance: null, text: "Ignore all words" },
    Options: {
      instance: null,
      text: "Options",
      optionsDialog: { instance: null },
    },
    AddWord: { instance: null, text: "Add word" },
    FinishChecking_button: {
      instance: null,
      text: "Finish Checking",
      localizationID: "FinishChecking",
    },
    Option_button: {
      instance: null,
      text: "Options",
      localizationID: "Options",
    },
    FinishChecking_button_block: {
      instance: null,
      text: "Finish Checking",
      localizationID: "FinishChecking",
    },
  };
  a.LocalizationLabel = {
    ChangeTo_label: {
      instance: null,
      text: "Change to",
      localizationID: "ChangeTo",
    },
    Suggestions: { instance: null, text: "Suggestions" },
    Categories: { instance: null, text: "Categories" },
    Synonyms: { instance: null, text: "Synonyms" },
  };
  var J = function (b) {
      var c, d, e;
      for (e in b) {
        if ((c = a.dialog.getContentElement(a.dialog._.currentTabId, e)))
          c = c.getElement();
        else if (b[e].instance)
          c =
            b[e].instance.getElement().getFirst() || b[e].instance.getElement();
        else continue;
        d = b[e].localizationID || e;
        c.setText(a.LocalizationComing[d]);
      }
    },
    K = function (b) {
      var c, d, e;
      for (e in b)
        (c = a.dialog.getContentElement(a.dialog._.currentTabId, e)),
          c || (c = b[e].instance),
          c.setLabel &&
            ((d = b[e].localizationID || e),
            c.setLabel(a.LocalizationComing[d] + ":"));
    },
    t,
    A;
  a.framesetHtml = function (b) {
    return (
      "\x3ciframe id\x3d" +
      a.iframeNumber +
      "_" +
      b +
      ' frameborder\x3d"0" allowtransparency\x3d"1" style\x3d"width:100%;border: 1px solid #AEB3B9;overflow: auto;background:#fff; border-radius: 3px;"\x3e\x3c/iframe\x3e'
    );
  };
  a.setIframe = function (b, c) {
    var d;
    d = a.framesetHtml(c);
    var e = a.iframeNumber + "_" + c;
    b.getElement().setHtml(d);
    d = document.getElementById(e);
    d = d.contentWindow
      ? d.contentWindow
      : d.contentDocument.document
        ? d.contentDocument.document
        : d.contentDocument;
    d.document.open();
    d.document.write(
      '\x3c!DOCTYPE html\x3e\x3chtml\x3e\x3chead\x3e\x3cmeta charset\x3d"UTF-8"\x3e\x3ctitle\x3eiframe\x3c/title\x3e\x3cstyle\x3ehtml,body{margin: 0;height: 100%;font: 13px/1.555 "Trebuchet MS", sans-serif;}a{color: #888;font-weight: bold;text-decoration: none;border-bottom: 1px solid #888;}.main-box {color:#252525;padding: 3px 5px;text-align: justify;}.main-box p{margin: 0 0 14px;}.main-box .cerr{color: #f00000;border-bottom-color: #f00000;}\x3c/style\x3e\x3c/head\x3e\x3cbody\x3e\x3cdiv id\x3d"content" class\x3d"main-box"\x3e\x3c/div\x3e\x3ciframe src\x3d"" frameborder\x3d"0" id\x3d"spelltext" name\x3d"spelltext" style\x3d"display:none; width: 100%" \x3e\x3c/iframe\x3e\x3ciframe src\x3d"" frameborder\x3d"0" id\x3d"loadsuggestfirst" name\x3d"loadsuggestfirst" style\x3d"display:none; width: 100%" \x3e\x3c/iframe\x3e\x3ciframe src\x3d"" frameborder\x3d"0" id\x3d"loadspellsuggestall" name\x3d"loadspellsuggestall" style\x3d"display:none; width: 100%" \x3e\x3c/iframe\x3e\x3ciframe src\x3d"" frameborder\x3d"0" id\x3d"loadOptionsForm" name\x3d"loadOptionsForm" style\x3d"display:none; width: 100%" \x3e\x3c/iframe\x3e\x3cscript\x3e(function(window) {var ManagerPostMessage \x3d function() {var _init \x3d function(handler) {if (document.addEventListener) {window.addEventListener("message", handler, false);} else {window.attachEvent("onmessage", handler);};};var _sendCmd \x3d function(o) {var str,type \x3d Object.prototype.toString,fn \x3d o.fn || null,id \x3d o.id || "",target \x3d o.target || window,message \x3d o.message || { "id": id };if (o.message \x26\x26 type.call(o.message) \x3d\x3d "[object Object]") {(o.message["id"]) ? o.message["id"] : o.message["id"] \x3d id;message \x3d o.message;};str \x3d JSON.stringify(message, fn);target.postMessage(str, "*");};return {init: _init,send: _sendCmd};};var manageMessageTmp \x3d new ManagerPostMessage;var appString \x3d (function(){var spell \x3d parent.CKEDITOR.config.wsc.DefaultParams.scriptPath;var serverUrl \x3d parent.CKEDITOR.config.wsc.DefaultParams.serviceHost;return serverUrl + spell;})();function loadScript(src, callback) {var scriptTag \x3d document.createElement("script");scriptTag.type \x3d "text/javascript";callback ? callback : callback \x3d function() {};if(scriptTag.readyState) {scriptTag.onreadystatechange \x3d function() {if (scriptTag.readyState \x3d\x3d "loaded" ||scriptTag.readyState \x3d\x3d "complete") {scriptTag.onreadystatechange \x3d null;setTimeout(function(){scriptTag.parentNode.removeChild(scriptTag)},1);callback();}};}else{scriptTag.onload \x3d function() {setTimeout(function(){scriptTag.parentNode.removeChild(scriptTag)},1);callback();};};scriptTag.src \x3d src;document.getElementsByTagName("head")[0].appendChild(scriptTag);};window.onload \x3d function(){loadScript(appString, function(){manageMessageTmp.send({"id": "iframeOnload","target": window.parent});});}})(this);\x3c/script\x3e\x3c/body\x3e\x3c/html\x3e',
    );
    d.document.close();
    a.div_overlay.setEnable();
  };
  a.setCurrentIframe = function (b) {
    a.setIframe(a.dialog._.contents[b].Content, b);
  };
  a.setHeightBannerFrame = function () {
    var b = a.dialog.getContentElement("SpellTab", "banner").getElement(),
      c = a.dialog.getContentElement("GrammTab", "banner").getElement(),
      d = a.dialog.getContentElement("Thesaurus", "banner").getElement();
    b.setStyle("height", "90px");
    c.setStyle("height", "90px");
    d.setStyle("height", "90px");
  };
  a.setHeightFrame = function () {
    document.getElementById(
      a.iframeNumber + "_" + a.dialog._.currentTabId,
    ).style.height = "240px";
  };
  a.sendData = function (b) {
    var c = b._.currentTabId,
      d = b._.contents[c].Content,
      e,
      g;
    a.previousTab = c;
    a.setIframe(d, c);
    var f = function (h) {
      c = b._.currentTabId;
      h = h || window.event;
      h.data.getTarget().is("a") &&
        c !== a.previousTab &&
        ((a.previousTab = c),
        (d = b._.contents[c].Content),
        (e = a.iframeNumber + "_" + c),
        a.div_overlay.setEnable(),
        d.getElement().getChildCount()
          ? E(a.targetFromFrame[e], a.cmd[c])
          : (a.setIframe(d, c),
            (g = document.getElementById(e)),
            (a.targetFromFrame[e] = g.contentWindow)));
    };
    b.parts.tabs.removeListener("click", f);
    b.parts.tabs.on("click", f);
  };
  a.buildSelectLang = function (a) {
    var c = new CKEDITOR.dom.element("div"),
      d = new CKEDITOR.dom.element("select");
    a = "wscLang" + a;
    c.addClass("cke_dialog_ui_input_select");
    c.setAttribute("role", "presentation");
    c.setStyles({
      height: "auto",
      position: "absolute",
      right: "0",
      top: "-1px",
      width: "160px",
      "white-space": "normal",
    });
    d.setAttribute("id", a);
    d.addClass("cke_dialog_ui_input_select");
    d.setStyles({ width: "160px" });
    c.append(d);
    return c;
  };
  a.buildOptionLang = function (b, c) {
    var d = document.getElementById("wscLang" + c),
      e = document.createDocumentFragment(),
      g,
      f,
      h = [];
    if (0 === d.options.length) {
      for (g in b) h.push([g, b[g]]);
      h.sort();
      for (var n = 0; n < h.length; n++)
        (g = document.createElement("option")),
          g.setAttribute("value", h[n][1]),
          (f = document.createTextNode(h[n][0])),
          g.appendChild(f),
          e.appendChild(g);
      d.appendChild(e);
    }
    for (e = 0; e < d.options.length; e++)
      d.options[e].value == a.selectingLang &&
        (d.options[e].selected = "selected");
  };
  a.buildOptionSynonyms = function (b) {
    b = a.selectNodeResponce[b];
    var c = z(a.selectNode.Synonyms);
    a.selectNode.Synonyms.clear();
    for (var d = 0; d < b.length; d++) {
      var e = document.createElement("option");
      e.text = b[d];
      e.value = b[d];
      c.$.add(e, d);
    }
    a.selectNode.Synonyms.getInputElement().$.firstChild.selected = !0;
    a.textNode.Thesaurus.setValue(
      a.selectNode.Synonyms.getInputElement().getValue(),
    );
  };
  var B = function (a) {
      var c = document,
        d = a.target || c.body,
        e = a.id || "overlayBlock",
        g = a.opacity || "0.9";
      a = a.background || "#f1f1f1";
      var f = c.getElementById(e),
        h = f || c.createElement("div");
      h.style.cssText =
        "position: absolute;top:30px;bottom:41px;left:1px;right:1px;z-index: 10020;padding:0;margin:0;background:" +
        a +
        ";opacity: " +
        g +
        ";filter: alpha(opacity\x3d" +
        100 * g +
        ");display: none;";
      h.id = e;
      f || d.appendChild(h);
      return {
        setDisable: function () {
          h.style.display = "none";
        },
        setEnable: function () {
          h.style.display = "block";
        },
      };
    },
    L = function (b, c, d) {
      var e = new CKEDITOR.dom.element("div"),
        g = new CKEDITOR.dom.element("input"),
        f = new CKEDITOR.dom.element("label"),
        h = "wscGrammerSuggest" + b + "_" + c;
      e.addClass("cke_dialog_ui_input_radio");
      e.setAttribute("role", "presentation");
      e.setStyles({ width: "97%", padding: "5px", "white-space": "normal" });
      g.setAttributes({
        type: "radio",
        value: c,
        name: "wscGrammerSuggest",
        id: h,
      });
      g.setStyles({ float: "left" });
      g.on("click", function (b) {
        a.textNode.GrammTab.setValue(b.sender.getValue());
      });
      d ? g.setAttribute("checked", !0) : !1;
      g.addClass("cke_dialog_ui_radio_input");
      f.appendText(b);
      f.setAttribute("for", h);
      f.setStyles({
        display: "block",
        "line-height": "16px",
        "margin-left": "18px",
        "white-space": "normal",
      });
      e.append(g);
      e.append(f);
      return e;
    },
    F = function (a) {
      a = a || "true";
      null !== a && "false" == a && u();
    },
    w = function (b) {
      var c = new I(b);
      b = "wscLang" + a.dialog.getParentEditor().name;
      b = document.getElementById(b);
      var d,
        e = a.iframeNumber + "_" + a.dialog._.currentTabId;
      a.buildOptionLang(c.setLangList, a.dialog.getParentEditor().name);
      if ((d = c.getCurrentLangGroup(a.selectingLang))) v[d].onShow();
      F(a.show_grammar);
      b.onchange = function (b) {
        b = c.getCurrentLangGroup(this.value);
        var d = a.dialog._.currentTabId;
        v[b].onShow();
        F(a.show_grammar);
        a.div_overlay.setEnable();
        a.selectingLang = this.value;
        d = a.cmd[d];
        (b && v[b] && v[b].allowedTabCommands[d]) ||
          (d = v[b].defaultTabCommand);
        for (var h in a.cmd)
          if (a.cmd[h] == d) {
            a.previousTab = h;
            break;
          }
        f.postMessage.send({
          message: {
            changeLang: a.selectingLang,
            interfaceLang: a.interfaceLang,
            text: a.dataTemp,
            cmd: d,
          },
          target: a.targetFromFrame[e],
          id: "selectionLang_outer__page",
        });
      };
    },
    M = function (b) {
      var c,
        d = function (b) {
          b =
            a.dialog.getContentElement(a.dialog._.currentTabId, b) ||
            a.LocalizationButton[b].instance;
          b.getElement().hasClass("cke_disabled")
            ? b.getElement().setStyle("color", "#a0a0a0")
            : b.disable();
        };
      c = function (b) {
        b =
          a.dialog.getContentElement(a.dialog._.currentTabId, b) ||
          a.LocalizationButton[b].instance;
        b.enable();
        b.getElement().setStyle("color", "#333");
      };
      "no_any_suggestions" == b
        ? ((b = "No suggestions"),
          (c =
            a.dialog.getContentElement(
              a.dialog._.currentTabId,
              "ChangeTo_button",
            ) || a.LocalizationButton.ChangeTo_button.instance),
          c.disable(),
          (c =
            a.dialog.getContentElement(a.dialog._.currentTabId, "ChangeAll") ||
            a.LocalizationButton.ChangeAll.instance),
          c.disable(),
          d("ChangeTo_button"),
          d("ChangeAll"))
        : (c("ChangeTo_button"), c("ChangeAll"));
      return b;
    },
    O = {
      iframeOnload: function (b) {
        b = a.dialog._.currentTabId;
        E(a.targetFromFrame[a.iframeNumber + "_" + b], a.cmd[b]);
      },
      suggestlist: function (b) {
        delete b.id;
        a.div_overlay_no_check.setDisable();
        C();
        w(a.langList);
        var c = M(b.word),
          d = "";
        c instanceof Array && (c = b.word[0]);
        d = c = c.split(",");
        a.textNode.SpellTab.setValue(d[0]);
        b = z(A);
        A.clear();
        for (c = 0; c < d.length; c++) {
          var e = document.createElement("option");
          e.text = d[c];
          e.value = d[c];
          b.$.add(e, c);
        }
        p();
        a.div_overlay.setDisable();
      },
      grammerSuggest: function (b) {
        delete b.id;
        delete b.mocklangs;
        C();
        w(a.langList);
        var c = b.grammSuggest[0];
        a.grammerSuggest.getElement().setHtml("");
        a.textNode.GrammTab.reset();
        a.textNode.GrammTab.setValue(c);
        a.textNodeInfo.GrammTab.getElement().setHtml("");
        a.textNodeInfo.GrammTab.getElement().setText(b.info);
        b = b.grammSuggest;
        for (var c = b.length, d = !0, e = 0; e < c; e++)
          a.grammerSuggest.getElement().append(L(b[e], b[e], d)), (d = !1);
        p();
        a.div_overlay.setDisable();
      },
      thesaurusSuggest: function (b) {
        delete b.id;
        delete b.mocklangs;
        C();
        w(a.langList);
        a.selectNodeResponce = b;
        a.textNode.Thesaurus.reset();
        var c = z(a.selectNode.Categories),
          d = 0;
        a.selectNode.Categories.clear();
        for (var e in b)
          (b = document.createElement("option")),
            (b.text = e),
            (b.value = e),
            c.$.add(b, d),
            d++;
        c = a.selectNode.Categories.getInputElement().getChildren().$[0].value;
        a.selectNode.Categories.getInputElement().getChildren().$[0].selected =
          !0;
        a.buildOptionSynonyms(c);
        p();
        a.div_overlay.setDisable();
      },
      finish: function (b) {
        delete b.id;
        N();
        b = a.dialog
          .getContentElement(a.dialog._.currentTabId, "BlockFinishChecking")
          .getElement();
        b.removeStyle("display");
        b.removeStyle("position");
        b.removeStyle("left");
        b.show();
        a.div_overlay.setDisable();
      },
      settext: function (b) {
        delete b.id;
        a.dialog.getParentEditor().getCommand("checkspell");
        var c = a.dialog.getParentEditor();
        if (c.scayt && c.wsc.isSsrvSame) {
          var d = c.wsc.udn;
          d
            ? c.wsc.DataStorage.setData("scayt_user_dictionary_name", d)
            : c.wsc.DataStorage.setData("scayt_user_dictionary_name", "");
        }
        try {
          c.focus();
        } catch (e) {}
        c.setData(b.text, function () {
          a.dataTemp = "";
          c.unlockSelection();
          c.fire("saveSnapshot");
          a.dialog.hide();
        });
      },
      ReplaceText: function (b) {
        delete b.id;
        a.div_overlay.setEnable();
        a.dataTemp = b.text;
        a.selectingLang = b.currentLang;
        (b.cmd = "0" !== b.len && b.len)
          ? a.div_overlay.setDisable()
          : window.setTimeout(function () {
              try {
                a.div_overlay.setDisable();
              } catch (b) {}
            }, 500);
        J(a.LocalizationButton);
        K(a.LocalizationLabel);
      },
      options_checkbox_send: function (b) {
        delete b.id;
        b = {
          osp: f.cookie.get("osp"),
          udn: f.cookie.get("udn"),
          cust_dic_ids: a.cust_dic_ids,
        };
        f.postMessage.send({
          message: b,
          target:
            a.targetFromFrame[a.iframeNumber + "_" + a.dialog._.currentTabId],
          id: "options_outer__page",
        });
      },
      getOptions: function (b) {
        var c = b.DefOptions.udn;
        a.LocalizationComing = b.DefOptions.localizationButtonsAndText;
        a.show_grammar = b.show_grammar;
        a.langList = b.lang;
        a.bnr = b.bannerId;
        a.sessionid = b.sessionid;
        if (b.bannerId) {
          a.setHeightBannerFrame();
          var d = b.banner;
          a.dialog
            .getContentElement(a.dialog._.currentTabId, "banner")
            .getElement()
            .setHtml(d);
        } else a.setHeightFrame();
        "undefined" == c &&
          (a.userDictionaryName
            ? ((c = a.userDictionaryName),
              (d = {
                osp: f.cookie.get("osp"),
                udn: a.userDictionaryName,
                cust_dic_ids: a.cust_dic_ids,
                id: "options_dic_send",
                udnCmd: "create",
              }),
              f.postMessage.send({
                message: d,
                target: a.targetFromFrame[void 0],
              }))
            : (c = ""));
        f.cookie.set("osp", b.DefOptions.osp);
        f.cookie.set("udn", c);
        f.cookie.set("cust_dic_ids", b.DefOptions.cust_dic_ids);
        f.postMessage.send({ id: "giveOptions" });
      },
      options_dic_send: function (b) {
        b = {
          osp: f.cookie.get("osp"),
          udn: f.cookie.get("udn"),
          cust_dic_ids: a.cust_dic_ids,
          id: "options_dic_send",
          udnCmd: f.cookie.get("udnCmd"),
        };
        f.postMessage.send({
          message: b,
          target:
            a.targetFromFrame[a.iframeNumber + "_" + a.dialog._.currentTabId],
        });
      },
      data: function (a) {
        delete a.id;
      },
      giveOptions: function () {},
      setOptionsConfirmF: function () {},
      setOptionsConfirmT: function () {
        t.setValue("");
      },
      clickBusy: function () {
        a.div_overlay.setEnable();
      },
      suggestAllCame: function () {
        a.div_overlay.setDisable();
        a.div_overlay_no_check.setDisable();
      },
      TextCorrect: function () {
        w(a.langList);
      },
    },
    G = function (a) {
      a = a || window.event;
      if ((a = window.JSON.parse(a.data)) && a.id) O[a.id](a);
    },
    E = function (b, c, d, e) {
      c = c || CKEDITOR.config.wsc_cmd;
      d = d || a.dataTemp;
      f.postMessage.send({
        message: {
          customerId: a.wsc_customerId,
          text: d,
          txt_ctrl: a.TextAreaNumber,
          cmd: c,
          cust_dic_ids: a.cust_dic_ids,
          udn: a.userDictionaryName,
          slang: a.selectingLang,
          interfaceLang: a.interfaceLang,
          reset_suggest: e || !1,
          sessionid: a.sessionid,
        },
        target: b,
        id: "data_outer__page",
      });
      a.div_overlay.setEnable();
    },
    v = {
      superset: {
        onShow: function () {
          a.dialog.showPage("Thesaurus");
          a.dialog.showPage("GrammTab");
          q();
        },
        allowedTabCommands: { spell: !0, grammar: !0, thes: !0 },
        defaultTabCommand: "spell",
      },
      usual: {
        onShow: function () {
          x();
          u();
          q();
        },
        allowedTabCommands: { spell: !0 },
        defaultTabCommand: "spell",
      },
      rtl: {
        onShow: function () {
          x();
          u();
          q();
        },
        allowedTabCommands: { spell: !0 },
        defaultTabCommand: "spell",
      },
      spellgrammar: {
        onShow: function () {
          x();
          a.dialog.showPage("GrammTab");
          q();
        },
        allowedTabCommands: { spell: !0, grammar: !0 },
        defaultTabCommand: "spell",
      },
      spellthes: {
        onShow: function () {
          a.dialog.showPage("Thesaurus");
          u();
          q();
        },
        allowedTabCommands: { spell: !0, thes: !0 },
        defaultTabCommand: "spell",
      },
    },
    H = function (b) {
      var c = new (function (a) {
        var b = {};
        return {
          getCmdByTab: function (c) {
            for (var f in a) b[a[f]] = f;
            return b[c];
          },
        };
      })(a.cmd).getCmdByTab(CKEDITOR.config.wsc_cmd);
      p();
      b.selectPage(c);
      a.sendData(b);
    },
    x = function () {
      a.dialog.hidePage("Thesaurus");
    },
    u = function () {
      a.dialog.hidePage("GrammTab");
    },
    q = function () {
      a.dialog.showPage("SpellTab");
    },
    p = function () {
      var b = a.dialog
        .getContentElement(a.dialog._.currentTabId, "bottomGroup")
        .getElement();
      b.removeStyle("display");
      b.removeStyle("position");
      b.removeStyle("left");
      b.show();
    },
    N = function () {
      var b = a.dialog
          .getContentElement(a.dialog._.currentTabId, "bottomGroup")
          .getElement(),
        c = document.activeElement,
        d;
      b.setStyles({ display: "block", position: "absolute", left: "-9999px" });
      setTimeout(function () {
        b.removeStyle("display");
        b.removeStyle("position");
        b.removeStyle("left");
        b.hide();
        a.dialog._.editor.focusManager.currentActive.focusNext();
        d = f.misc.findFocusable(a.dialog.parts.contents);
        if (
          f.misc.hasClass(c, "cke_dialog_tab") ||
          f.misc.hasClass(c, "cke_dialog_contents_body") ||
          !f.misc.isVisible(c)
        )
          for (var e = 0, g; e < d.count(); e++) {
            if (((g = d.getItem(e)), f.misc.isVisible(g.$))) {
              try {
                g.$.focus();
              } catch (k) {}
              break;
            }
          }
        else
          try {
            c.focus();
          } catch (h) {}
      }, 0);
    },
    C = function () {
      var b = a.dialog
          .getContentElement(a.dialog._.currentTabId, "BlockFinishChecking")
          .getElement(),
        c = document.activeElement,
        d;
      b.setStyles({ display: "block", position: "absolute", left: "-9999px" });
      setTimeout(function () {
        b.removeStyle("display");
        b.removeStyle("position");
        b.removeStyle("left");
        b.hide();
        a.dialog._.editor.focusManager.currentActive.focusNext();
        d = f.misc.findFocusable(a.dialog.parts.contents);
        if (
          f.misc.hasClass(c, "cke_dialog_tab") ||
          f.misc.hasClass(c, "cke_dialog_contents_body") ||
          !f.misc.isVisible(c)
        )
          for (var e = 0, g; e < d.count(); e++) {
            if (((g = d.getItem(e)), f.misc.isVisible(g.$))) {
              try {
                g.$.focus();
              } catch (k) {}
              break;
            }
          }
        else
          try {
            c.focus();
          } catch (h) {}
      }, 0);
    };
  CKEDITOR.dialog.add("checkspell", function (b) {
    function c(a) {
      var c = parseInt(b.config.wsc_left, 10),
        e = parseInt(b.config.wsc_top, 10),
        d = parseInt(b.config.wsc_width, 10),
        f = parseInt(b.config.wsc_height, 10),
        l = CKEDITOR.document.getWindow().getViewPaneSize();
      a.getPosition();
      var m = a.getSize(),
        r = 0;
      if (!a._.resized) {
        var r =
            m.height -
            a.parts.contents.getSize(
              "height",
              !(
                CKEDITOR.env.gecko ||
                CKEDITOR.env.opera ||
                (CKEDITOR.env.ie && CKEDITOR.env.quirks)
              ),
            ),
          D = m.width - a.parts.contents.getSize("width", 1);
        if (d < g.minWidth || isNaN(d)) d = g.minWidth;
        d > l.width - D && (d = l.width - D);
        if (f < g.minHeight || isNaN(f)) f = g.minHeight;
        f > l.height - r && (f = l.height - r);
        m.width = d + D;
        m.height = f + r;
        a._.fromResizeEvent = !1;
        a.resize(d, f);
        setTimeout(function () {
          a._.fromResizeEvent = !1;
          CKEDITOR.dialog.fire("resize", { dialog: a, width: d, height: f }, b);
        }, 300);
      }
      a._.moved ||
        ((r = isNaN(c) && isNaN(e) ? 0 : 1),
        isNaN(c) && (c = (l.width - m.width) / 2),
        0 > c && (c = 0),
        c > l.width - m.width && (c = l.width - m.width),
        isNaN(e) && (e = (l.height - m.height) / 2),
        0 > e && (e = 0),
        e > l.height - m.height && (e = l.height - m.height),
        a.move(c, e, r));
    }
    function d() {
      b.wsc = {};
      (function (a) {
        var b = {
            separator: "\x3c$\x3e",
            getDataType: function (a) {
              return "undefined" === typeof a
                ? "undefined"
                : null === a
                  ? "null"
                  : Object.prototype.toString.call(a).slice(8, -1);
            },
            convertDataToString: function (a) {
              return this.getDataType(a).toLowerCase() + this.separator + a;
            },
            restoreDataFromString: function (a) {
              var b = a,
                c;
              a = this.backCompatibility(a);
              if ("string" === typeof a)
                switch (
                  ((b = a.indexOf(this.separator)),
                  (c = a.substring(0, b)),
                  (b = a.substring(b + this.separator.length)),
                  c)
                ) {
                  case "boolean":
                    b = "true" === b;
                    break;
                  case "number":
                    b = parseFloat(b);
                    break;
                  case "array":
                    b = "" === b ? [] : b.split(",");
                    break;
                  case "null":
                    b = null;
                    break;
                  case "undefined":
                    b = void 0;
                }
              return b;
            },
            backCompatibility: function (a) {
              var b = a,
                c;
              "string" === typeof a &&
                ((c = a.indexOf(this.separator)),
                0 > c &&
                  ((b = parseFloat(a)),
                  isNaN(b) &&
                    ("[" === a[0] && "]" === a[a.length - 1]
                      ? ((a = a.replace("[", "")),
                        (a = a.replace("]", "")),
                        (b = "" === a ? [] : a.split(",")))
                      : (b = "true" === a || "false" === a ? "true" === a : a)),
                  (b = this.convertDataToString(b))));
              return b;
            },
          },
          c = {
            get: function (a) {
              return b.restoreDataFromString(window.localStorage.getItem(a));
            },
            set: function (a, c) {
              var d = b.convertDataToString(c);
              window.localStorage.setItem(a, d);
            },
            del: function (a) {
              window.localStorage.removeItem(a);
            },
            clear: function () {
              window.localStorage.clear();
            },
          },
          e = {
            expiration: 31622400,
            get: function (a) {
              return b.restoreDataFromString(this.getCookie(a));
            },
            set: function (a, c) {
              var d = b.convertDataToString(c);
              this.setCookie(a, d, { expires: this.expiration });
            },
            del: function (a) {
              this.deleteCookie(a);
            },
            getCookie: function (a) {
              return (a = document.cookie.match(
                new RegExp(
                  "(?:^|; )" +
                    a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "\x3d([^;]*)",
                ),
              ))
                ? decodeURIComponent(a[1])
                : void 0;
            },
            setCookie: function (a, b, c) {
              c = c || {};
              var d = c.expires;
              if ("number" === typeof d && d) {
                var e = new Date();
                e.setTime(e.getTime() + 1e3 * d);
                d = c.expires = e;
              }
              d && d.toUTCString && (c.expires = d.toUTCString());
              b = encodeURIComponent(b);
              a = a + "\x3d" + b;
              for (var f in c)
                (b = c[f]), (a += "; " + f), !0 !== b && (a += "\x3d" + b);
              document.cookie = a;
            },
            deleteCookie: function (a) {
              this.setCookie(a, null, { expires: -1 });
            },
            clear: function () {
              for (
                var a = document.cookie.split(";"), b = 0;
                b < a.length;
                b++
              ) {
                var c = a[b],
                  d = c.indexOf("\x3d"),
                  c = -1 < d ? c.substr(0, d) : c;
                this.deleteCookie(c);
              }
            },
          },
          d = window.localStorage ? c : e;
        a.DataStorage = {
          getData: function (a) {
            return d.get(a);
          },
          setData: function (a, b) {
            d.set(a, b);
          },
          deleteData: function (a) {
            d.del(a);
          },
          clear: function () {
            d.clear();
          },
        };
      })(b.wsc);
      b.wsc.operationWithUDN = function (b, c) {
        f.postMessage.send({
          message: { udn: c, id: "operationWithUDN", udnCmd: b },
          target:
            a.targetFromFrame[a.iframeNumber + "_" + a.dialog._.currentTabId],
        });
      };
      b.wsc.getLocalStorageUDN = function () {
        var a = b.wsc.DataStorage.getData("scayt_user_dictionary_name");
        if (a) return a;
      };
      b.wsc.getLocalStorageUD = function () {
        var a = b.wsc.DataStorage.getData("scayt_user_dictionary");
        if (a) return a;
      };
      b.wsc.addWords = function (a, c) {
        var d =
            b.config.wsc.DefaultParams.serviceHost +
            b.config.wsc.DefaultParams.ssrvHost +
            "?cmd\x3ddictionary\x26format\x3djson\x26customerid\x3d1%3AncttD3-fIoSf2-huzwE4-Y5muI2-mD0Tt-kG9Wz-UEDFC-tYu243-1Uq474-d9Z2l3\x26action\x3daddword\x26word\x3d" +
            a +
            "\x26callback\x3dtoString\x26synchronization\x3dtrue",
          e = document.createElement("script");
        e.type = "text/javascript";
        e.src = d;
        document.getElementsByTagName("head")[0].appendChild(e);
        e.onload = c;
        e.onreadystatechange = function () {
          "loaded" === this.readyState && c();
        };
      };
      b.wsc.cgiOrigin = function () {
        var a = b.config.wsc.DefaultParams.serviceHost.split("/");
        return a[0] + "//" + a[2];
      };
      b.wsc.isSsrvSame = !1;
    }
    var e = function (c) {
        this.getElement().focus();
        a.div_overlay.setEnable();
        c = a.dialog._.currentTabId;
        var d = a.iframeNumber + "_" + c,
          e = a.textNode[c].getValue(),
          g = this.getElement().getAttribute("title-cmd");
        f.postMessage.send({
          message: { cmd: g, tabId: c, new_word: e },
          target: a.targetFromFrame[d],
          id: "cmd_outer__page",
        });
        ("ChangeTo" != g && "ChangeAll" != g) || b.fire("saveSnapshot");
        "FinishChecking" == g &&
          b.config.wsc_onFinish.call(CKEDITOR.document.getWindow().getFrame());
      },
      g = { minWidth: 560, minHeight: 444 },
      k = !1;
    return {
      title: b.config.wsc_dialogTitle || b.lang.wsc.title,
      minWidth: g.minWidth,
      minHeight: g.minHeight,
      buttons: [CKEDITOR.dialog.cancelButton],
      onLoad: function () {
        a.dialog = this;
        x();
        u();
        q();
        b.plugins.scayt && d();
      },
      onShow: function () {
        a.dialog = this;
        b.lockSelection(b.getSelection());
        a.TextAreaNumber = "cke_textarea_" + b.name;
        f.postMessage.init(G);
        a.dataTemp = b.getData();
        a.OverlayPlace = a.dialog.parts.tabs.getParent().$;
        if (CKEDITOR && CKEDITOR.config) {
          a.wsc_customerId = b.config.wsc_customerId;
          a.cust_dic_ids = b.config.wsc_customDictionaryIds;
          a.userDictionaryName = b.config.wsc_userDictionaryName;
          a.defaultLanguage = CKEDITOR.config.defaultLanguage;
          var d =
              "file:" == document.location.protocol
                ? "http:"
                : document.location.protocol,
            d =
              b.config.wsc_customLoaderScript ||
              d +
                "//www.webspellchecker.net/spellcheck31/lf/22/js/wsc_fck2plugin.js";
          c(this);
          CKEDITOR.scriptLoader.load(d, function (c) {
            if (c)
              if (k) a.onLoadOverlay.setEnable();
              else {
                CKEDITOR.config &&
                CKEDITOR.config.wsc &&
                CKEDITOR.config.wsc.DefaultParams
                  ? ((a.serverLocationHash =
                      CKEDITOR.config.wsc.DefaultParams.serviceHost),
                    (a.logotype = CKEDITOR.config.wsc.DefaultParams.logoPath),
                    (a.loadIcon = CKEDITOR.config.wsc.DefaultParams.iconPath),
                    (a.loadIconEmptyEditor =
                      CKEDITOR.config.wsc.DefaultParams.iconPathEmptyEditor),
                    (a.LangComparer =
                      new CKEDITOR.config.wsc.DefaultParams._SP_FCK_LangCompare()))
                  : ((a.serverLocationHash = DefaultParams.serviceHost),
                    (a.logotype = DefaultParams.logoPath),
                    (a.loadIcon = DefaultParams.iconPath),
                    (a.loadIconEmptyEditor = DefaultParams.iconPathEmptyEditor),
                    (a.LangComparer = new _SP_FCK_LangCompare()));
                a.pluginPath = CKEDITOR.getUrl(b.plugins.wsc.path);
                a.iframeNumber = a.TextAreaNumber;
                a.templatePath = a.pluginPath + "dialogs/tmp.html";
                a.LangComparer.setDefaulLangCode(a.defaultLanguage);
                a.currentLang =
                  b.config.wsc_lang ||
                  a.LangComparer.getSPLangCode(b.langCode) ||
                  "en_US";
                a.interfaceLang = b.config.wsc_interfaceLang;
                a.selectingLang = a.currentLang;
                a.div_overlay = new B({
                  opacity: "1",
                  background: "#fff url(" + a.loadIcon + ") no-repeat 50% 50%",
                  target: a.OverlayPlace,
                });
                var d = a.dialog.parts.tabs.getId(),
                  d = CKEDITOR.document.getById(d);
                d.setStyle("width", "97%");
                d.getElementsByTag("DIV").count() ||
                  d.append(a.buildSelectLang(a.dialog.getParentEditor().name));
                a.div_overlay_no_check = new B({
                  opacity: "1",
                  id: "no_check_over",
                  background:
                    "#fff url(" + a.loadIconEmptyEditor + ") no-repeat 50% 50%",
                  target: a.OverlayPlace,
                });
                c && (H(a.dialog), a.dialog.setupContent(a.dialog));
                b.plugins.scayt &&
                  (b.wsc.isSsrvSame = (function () {
                    var a = CKEDITOR.config.wsc.DefaultParams.serviceHost
                        .replace("lf/22/js/../../../", "")
                        .split("//")[1],
                      c = CKEDITOR.config.wsc.DefaultParams.ssrvHost,
                      d = b.config.scayt_srcUrl,
                      e,
                      f,
                      g,
                      h,
                      n;
                    window.SCAYT &&
                      window.SCAYT.CKSCAYT &&
                      ((g = SCAYT.CKSCAYT.prototype.basePath),
                      g.split("//"),
                      (h = g.split("//")[1].split("/")[0]),
                      (n =
                        g.split(h + "/")[1].replace("/lf/scayt3/ckscayt/", "") +
                        "/script/ssrv.cgi"));
                    !d ||
                      g ||
                      b.config.scayt_servicePath ||
                      (d.split("//"),
                      (e = d.split("//")[1].split("/")[0]),
                      (f =
                        d
                          .split(e + "/")[1]
                          .replace("/lf/scayt3/ckscayt/ckscayt.js", "") +
                        "/script/ssrv.cgi"));
                    return (
                      "//" + a + c ===
                      "//" +
                        (b.config.scayt_serviceHost || h || e) +
                        "/" +
                        (b.config.scayt_servicePath || n || f)
                    );
                  })());
                if (window.SCAYT && b.wsc && b.wsc.isSsrvSame) {
                  var e = b.wsc.cgiOrigin();
                  b.wsc.syncIsDone = !1;
                  c = function (a) {
                    a.origin === e &&
                      ((a = JSON.parse(a.data)),
                      a.ud && "undefined" !== a.ud
                        ? (b.wsc.ud = a.ud)
                        : "undefined" === a.ud && (b.wsc.ud = void 0),
                      a.udn && "undefined" !== a.udn
                        ? (b.wsc.udn = a.udn)
                        : "undefined" === a.udn && (b.wsc.udn = void 0),
                      b.wsc.syncIsDone ||
                        (f(b.wsc.ud), (b.wsc.syncIsDone = !0)));
                  };
                  var f = function (c) {
                    c = b.wsc.getLocalStorageUD();
                    var d;
                    c instanceof Array && (d = c.toString());
                    void 0 !== d &&
                      "" !== d &&
                      setTimeout(function () {
                        b.wsc.addWords(d, function () {
                          H(a.dialog);
                          a.dialog.setupContent(a.dialog);
                        });
                      }, 400);
                  };
                  window.addEventListener
                    ? addEventListener("message", c, !1)
                    : window.attachEvent("onmessage", c);
                  setTimeout(function () {
                    var a = b.wsc.getLocalStorageUDN();
                    void 0 !== a && b.wsc.operationWithUDN("restore", a);
                  }, 500);
                }
              }
            else k = !0;
          });
        } else a.dialog.hide();
      },
      onHide: function () {
        var c = CKEDITOR.plugins.scayt,
          d = b.scayt;
        b.unlockSelection();
        c && d && c.state[b.name] && d.setMarkupPaused(!1);
        a.dataTemp = "";
        a.sessionid = "";
        f.postMessage.unbindHandler(G);
        if (b.plugins.scayt && b.wsc && b.wsc.isSsrvSame) {
          var c = b.wsc.udn,
            e = b.wsc.ud,
            g,
            k;
          b.scayt
            ? (c
                ? (b.wsc.DataStorage.setData("scayt_user_dictionary_name", c),
                  b.scayt.restoreUserDictionary(c))
                : (b.wsc.DataStorage.setData("scayt_user_dictionary_name", ""),
                  b.scayt.removeUserDictionary()),
              e &&
                setTimeout(function () {
                  g = e.split(",");
                  for (k = 0; k < g.length; k += 1)
                    b.scayt.addWordToUserDictionary(g[k]);
                }, 200),
              e || b.wsc.DataStorage.setData("scayt_user_dictionary", []))
            : (c
                ? b.wsc.DataStorage.setData("scayt_user_dictionary_name", c)
                : b.wsc.DataStorage.setData("scayt_user_dictionary_name", ""),
              e &&
                ((g = e.split(",")),
                b.wsc.DataStorage.setData("scayt_user_dictionary", g)));
        }
      },
      contents: [
        {
          id: "SpellTab",
          label: "SpellChecker",
          accessKey: "S",
          elements: [
            {
              type: "html",
              id: "banner",
              label: "banner",
              style: "",
              html: "\x3cdiv\x3e\x3c/div\x3e",
            },
            {
              type: "html",
              id: "Content",
              label: "spellContent",
              html: "",
              setup: function (b) {
                b = a.iframeNumber + "_" + b._.currentTabId;
                var c = document.getElementById(b);
                a.targetFromFrame[b] = c.contentWindow;
              },
            },
            {
              type: "hbox",
              id: "bottomGroup",
              style: "width:560px; margin: 0 auto;",
              widths: ["50%", "50%"],
              className: "wsc-spelltab-bottom",
              children: [
                {
                  type: "hbox",
                  id: "leftCol",
                  align: "left",
                  width: "50%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol1",
                      widths: ["50%", "50%"],
                      children: [
                        {
                          type: "text",
                          id: "ChangeTo_label",
                          label: a.LocalizationLabel.ChangeTo_label.text + ":",
                          labelLayout: "horizontal",
                          labelStyle: "font: 12px/25px arial, sans-serif;",
                          width: "140px",
                          default: "",
                          onShow: function () {
                            a.textNode.SpellTab = this;
                            a.LocalizationLabel.ChangeTo_label.instance = this;
                          },
                          onHide: function () {
                            this.reset();
                          },
                        },
                        {
                          type: "hbox",
                          id: "rightCol",
                          align: "right",
                          width: "30%",
                          children: [
                            {
                              type: "vbox",
                              id: "rightCol_col__left",
                              children: [
                                {
                                  type: "text",
                                  id: "labelSuggestions",
                                  label:
                                    a.LocalizationLabel.Suggestions.text + ":",
                                  onShow: function () {
                                    a.LocalizationLabel.Suggestions.instance =
                                      this;
                                    this.getInputElement().setStyles({
                                      display: "none",
                                    });
                                  },
                                },
                                {
                                  type: "html",
                                  id: "logo",
                                  html: "",
                                  setup: function (b) {
                                    this.getElement().$.src = a.logotype;
                                    this.getElement()
                                      .getParent()
                                      .setStyles({ "text-align": "left" });
                                  },
                                },
                              ],
                            },
                            {
                              type: "select",
                              id: "list_of_suggestions",
                              labelStyle: "font: 12px/25px arial, sans-serif;",
                              size: "6",
                              inputStyle: "width: 140px; height: auto;",
                              items: [["loading..."]],
                              onShow: function () {
                                A = this;
                              },
                              onChange: function () {
                                a.textNode.SpellTab.setValue(this.getValue());
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "hbox",
                  id: "rightCol",
                  align: "right",
                  width: "50%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol_col__left",
                      widths: ["50%", "50%", "50%", "50%"],
                      children: [
                        {
                          type: "button",
                          id: "ChangeTo_button",
                          label: a.LocalizationButton.ChangeTo_button.text,
                          title: "Change to",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "ChangeTo",
                            );
                            a.LocalizationButton.ChangeTo_button.instance =
                              this;
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "ChangeAll",
                          label: a.LocalizationButton.ChangeAll.text,
                          title: "Change All",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                            a.LocalizationButton.ChangeAll.instance = this;
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "AddWord",
                          label: a.LocalizationButton.AddWord.text,
                          title: "Add word",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                            a.LocalizationButton.AddWord.instance = this;
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "FinishChecking_button",
                          label:
                            a.LocalizationButton.FinishChecking_button.text,
                          title: "Finish Checking",
                          style: "width: 100%;margin-top: 9px;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "FinishChecking",
                            );
                            a.LocalizationButton.FinishChecking_button.instance =
                              this;
                          },
                          onClick: e,
                        },
                      ],
                    },
                    {
                      type: "vbox",
                      id: "rightCol_col__right",
                      widths: ["50%", "50%", "50%"],
                      children: [
                        {
                          type: "button",
                          id: "IgnoreWord",
                          label: a.LocalizationButton.IgnoreWord.text,
                          title: "Ignore word",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                            a.LocalizationButton.IgnoreWord.instance = this;
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "IgnoreAllWords",
                          label: a.LocalizationButton.IgnoreAllWords.text,
                          title: "Ignore all words",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                            a.LocalizationButton.IgnoreAllWords.instance = this;
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "Options",
                          label: a.LocalizationButton.Options.text,
                          title: "Option",
                          style: "width: 100%;",
                          onLoad: function () {
                            a.LocalizationButton.Options.instance = this;
                            "file:" == document.location.protocol &&
                              this.disable();
                          },
                          onClick: function () {
                            this.getElement().focus();
                            "file:" == document.location.protocol
                              ? alert(
                                  "WSC: Options functionality is disabled when runing from file system",
                                )
                              : ((y = document.activeElement),
                                b.openDialog("options"));
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "hbox",
              id: "BlockFinishChecking",
              style: "width:560px; margin: 0 auto;",
              widths: ["70%", "30%"],
              onShow: function () {
                this.getElement().setStyles({
                  display: "block",
                  position: "absolute",
                  left: "-9999px",
                });
              },
              onHide: p,
              children: [
                {
                  type: "hbox",
                  id: "leftCol",
                  align: "left",
                  width: "70%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol1",
                      setup: function () {
                        this.getChild()[0].getElement().$.src = a.logotype;
                        this.getChild()[0]
                          .getElement()
                          .getParent()
                          .setStyles({ "text-align": "center" });
                      },
                      children: [{ type: "html", id: "logo", html: "" }],
                    },
                  ],
                },
                {
                  type: "hbox",
                  id: "rightCol",
                  align: "right",
                  width: "30%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol_col__left",
                      children: [
                        {
                          type: "button",
                          id: "Option_button",
                          label: a.LocalizationButton.Options.text,
                          title: "Option",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                            "file:" == document.location.protocol &&
                              this.disable();
                          },
                          onClick: function () {
                            this.getElement().focus();
                            "file:" == document.location.protocol
                              ? alert(
                                  "WSC: Options functionality is disabled when runing from file system",
                                )
                              : ((y = document.activeElement),
                                b.openDialog("options"));
                          },
                        },
                        {
                          type: "button",
                          id: "FinishChecking_button_block",
                          label:
                            a.LocalizationButton.FinishChecking_button_block
                              .text,
                          title: "Finish Checking",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "FinishChecking",
                            );
                          },
                          onClick: e,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "GrammTab",
          label: "Grammar",
          accessKey: "G",
          elements: [
            {
              type: "html",
              id: "banner",
              label: "banner",
              style: "",
              html: "\x3cdiv\x3e\x3c/div\x3e",
            },
            {
              type: "html",
              id: "Content",
              label: "GrammarContent",
              html: "",
              setup: function () {
                var b = a.iframeNumber + "_" + a.dialog._.currentTabId,
                  c = document.getElementById(b);
                a.targetFromFrame[b] = c.contentWindow;
              },
            },
            {
              type: "vbox",
              id: "bottomGroup",
              style: "width:560px; margin: 0 auto;",
              children: [
                {
                  type: "hbox",
                  id: "leftCol",
                  widths: ["66%", "34%"],
                  children: [
                    {
                      type: "vbox",
                      children: [
                        {
                          type: "text",
                          id: "text",
                          label: "Change to:",
                          labelLayout: "horizontal",
                          labelStyle: "font: 12px/25px arial, sans-serif;",
                          inputStyle: "float: right; width: 200px;",
                          default: "",
                          onShow: function () {
                            a.textNode.GrammTab = this;
                          },
                          onHide: function () {
                            this.reset();
                          },
                        },
                        {
                          type: "html",
                          id: "html_text",
                          html: "\x3cdiv style\x3d'min-height: 17px; line-height: 17px; padding: 5px; text-align: left;background: #F1F1F1;color: #595959; white-space: normal!important;'\x3e\x3c/div\x3e",
                          onShow: function (b) {
                            a.textNodeInfo.GrammTab = this;
                          },
                        },
                        {
                          type: "html",
                          id: "radio",
                          html: "",
                          onShow: function () {
                            a.grammerSuggest = this;
                          },
                        },
                      ],
                    },
                    {
                      type: "vbox",
                      children: [
                        {
                          type: "button",
                          id: "ChangeTo_button",
                          label: "Change to",
                          title: "Change to",
                          style: "width: 133px; float: right;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "ChangeTo",
                            );
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "IgnoreWord",
                          label: "Ignore word",
                          title: "Ignore word",
                          style: "width: 133px; float: right;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "IgnoreAllWords",
                          label: "Ignore Problem",
                          title: "Ignore Problem",
                          style: "width: 133px; float: right;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              this.id,
                            );
                          },
                          onClick: e,
                        },
                        {
                          type: "button",
                          id: "FinishChecking_button",
                          label:
                            a.LocalizationButton.FinishChecking_button.text,
                          title: "Finish Checking",
                          style: "width: 133px; float: right; margin-top: 9px;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "FinishChecking",
                            );
                          },
                          onClick: e,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "hbox",
              id: "BlockFinishChecking",
              style: "width:560px; margin: 0 auto;",
              widths: ["70%", "30%"],
              onShow: function () {
                this.getElement().setStyles({
                  display: "block",
                  position: "absolute",
                  left: "-9999px",
                });
              },
              onHide: p,
              children: [
                {
                  type: "hbox",
                  id: "leftCol",
                  align: "left",
                  width: "70%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol1",
                      children: [
                        {
                          type: "html",
                          id: "logo",
                          html: "",
                          setup: function () {
                            this.getElement().$.src = a.logotype;
                            this.getElement()
                              .getParent()
                              .setStyles({ "text-align": "center" });
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "hbox",
                  id: "rightCol",
                  align: "right",
                  width: "30%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol_col__left",
                      children: [
                        {
                          type: "button",
                          id: "FinishChecking_button_block",
                          label:
                            a.LocalizationButton.FinishChecking_button_block
                              .text,
                          title: "Finish Checking",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "FinishChecking",
                            );
                          },
                          onClick: e,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "Thesaurus",
          label: "Thesaurus",
          accessKey: "T",
          elements: [
            {
              type: "html",
              id: "banner",
              label: "banner",
              style: "",
              html: "\x3cdiv\x3e\x3c/div\x3e",
            },
            {
              type: "html",
              id: "Content",
              label: "spellContent",
              html: "",
              setup: function () {
                var b = a.iframeNumber + "_" + a.dialog._.currentTabId,
                  c = document.getElementById(b);
                a.targetFromFrame[b] = c.contentWindow;
              },
            },
            {
              type: "vbox",
              id: "bottomGroup",
              style: "width:560px; margin: -10px auto; overflow: hidden;",
              children: [
                {
                  type: "hbox",
                  widths: ["75%", "25%"],
                  children: [
                    {
                      type: "vbox",
                      children: [
                        {
                          type: "hbox",
                          widths: ["65%", "35%"],
                          children: [
                            {
                              type: "text",
                              id: "ChangeTo_label",
                              label:
                                a.LocalizationLabel.ChangeTo_label.text + ":",
                              labelLayout: "horizontal",
                              inputStyle: "width: 160px;",
                              labelStyle: "font: 12px/25px arial, sans-serif;",
                              default: "",
                              onShow: function (b) {
                                a.textNode.Thesaurus = this;
                                a.LocalizationLabel.ChangeTo_label.instance =
                                  this;
                              },
                              onHide: function () {
                                this.reset();
                              },
                            },
                            {
                              type: "button",
                              id: "ChangeTo_button",
                              label: a.LocalizationButton.ChangeTo_button.text,
                              title: "Change to",
                              style: "width: 121px; margin-top: 1px;",
                              onLoad: function () {
                                this.getElement().setAttribute(
                                  "title-cmd",
                                  "ChangeTo",
                                );
                                a.LocalizationButton.ChangeTo_button.instance =
                                  this;
                              },
                              onClick: e,
                            },
                          ],
                        },
                        {
                          type: "hbox",
                          children: [
                            {
                              type: "select",
                              id: "Categories",
                              label: a.LocalizationLabel.Categories.text + ":",
                              labelStyle: "font: 12px/25px arial, sans-serif;",
                              size: "5",
                              inputStyle: "width: 180px; height: auto;",
                              items: [],
                              onShow: function () {
                                a.selectNode.Categories = this;
                                a.LocalizationLabel.Categories.instance = this;
                              },
                              onChange: function () {
                                a.buildOptionSynonyms(this.getValue());
                              },
                            },
                            {
                              type: "select",
                              id: "Synonyms",
                              label: a.LocalizationLabel.Synonyms.text + ":",
                              labelStyle: "font: 12px/25px arial, sans-serif;",
                              size: "5",
                              inputStyle: "width: 180px; height: auto;",
                              items: [],
                              onShow: function () {
                                a.selectNode.Synonyms = this;
                                a.textNode.Thesaurus.setValue(this.getValue());
                                a.LocalizationLabel.Synonyms.instance = this;
                              },
                              onChange: function (b) {
                                a.textNode.Thesaurus.setValue(this.getValue());
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "vbox",
                      width: "120px",
                      style: "margin-top:46px;",
                      children: [
                        {
                          type: "html",
                          id: "logotype",
                          label: "WebSpellChecker.net",
                          html: "",
                          setup: function () {
                            this.getElement().$.src = a.logotype;
                            this.getElement()
                              .getParent()
                              .setStyles({ "text-align": "center" });
                          },
                        },
                        {
                          type: "button",
                          id: "FinishChecking_button",
                          label:
                            a.LocalizationButton.FinishChecking_button.text,
                          title: "Finish Checking",
                          style: "width: 100%; float: right; margin-top: 9px;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "FinishChecking",
                            );
                          },
                          onClick: e,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "hbox",
              id: "BlockFinishChecking",
              style: "width:560px; margin: 0 auto;",
              widths: ["70%", "30%"],
              onShow: function () {
                this.getElement().setStyles({
                  display: "block",
                  position: "absolute",
                  left: "-9999px",
                });
              },
              children: [
                {
                  type: "hbox",
                  id: "leftCol",
                  align: "left",
                  width: "70%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol1",
                      children: [
                        {
                          type: "html",
                          id: "logo",
                          html: "",
                          setup: function () {
                            this.getElement().$.src = a.logotype;
                            this.getElement()
                              .getParent()
                              .setStyles({ "text-align": "center" });
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "hbox",
                  id: "rightCol",
                  align: "right",
                  width: "30%",
                  children: [
                    {
                      type: "vbox",
                      id: "rightCol_col__left",
                      children: [
                        {
                          type: "button",
                          id: "FinishChecking_button_block",
                          label:
                            a.LocalizationButton.FinishChecking_button_block
                              .text,
                          title: "Finish Checking",
                          style: "width: 100%;",
                          onLoad: function () {
                            this.getElement().setAttribute(
                              "title-cmd",
                              "FinishChecking",
                            );
                          },
                          onClick: e,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  });
  var y = null;
  CKEDITOR.dialog.add("options", function (b) {
    var c = null,
      d = {},
      e = {},
      g = null,
      k = null;
    f.cookie.get("udn");
    f.cookie.get("osp");
    b = function (a) {
      k = this.getElement().getAttribute("title-cmd");
      a = [];
      a[0] = e.IgnoreAllCapsWords;
      a[1] = e.IgnoreWordsNumbers;
      a[2] = e.IgnoreMixedCaseWords;
      a[3] = e.IgnoreDomainNames;
      a = a.toString().replace(/,/g, "");
      f.cookie.set("osp", a);
      f.cookie.set("udnCmd", k ? k : "ignore");
      "delete" != k &&
        ((a = ""),
        "" !== t.getValue() && (a = t.getValue()),
        f.cookie.set("udn", a));
      f.postMessage.send({ id: "options_dic_send" });
    };
    var h = function () {
      g.getElement().setHtml(a.LocalizationComing.error);
      g.getElement().show();
    };
    return {
      title: a.LocalizationComing.Options,
      minWidth: 430,
      minHeight: 130,
      resizable: CKEDITOR.DIALOG_RESIZE_NONE,
      contents: [
        {
          id: "OptionsTab",
          label: "Options",
          accessKey: "O",
          elements: [
            {
              type: "hbox",
              id: "options_error",
              children: [
                {
                  type: "html",
                  style:
                    "display: block;text-align: center;white-space: normal!important; font-size: 12px;color:red",
                  html: "\x3cdiv\x3e\x3c/div\x3e",
                  onShow: function () {
                    g = this;
                  },
                },
              ],
            },
            {
              type: "vbox",
              id: "Options_content",
              children: [
                {
                  type: "hbox",
                  id: "Options_manager",
                  widths: ["52%", "48%"],
                  children: [
                    {
                      type: "fieldset",
                      label: "Spell Checking Options",
                      style:
                        "border: none;margin-top: 13px;padding: 10px 0 10px 10px",
                      onShow: function () {
                        this.getInputElement().$.children[0].innerHTML =
                          a.LocalizationComing.SpellCheckingOptions;
                      },
                      children: [
                        {
                          type: "vbox",
                          id: "Options_checkbox",
                          children: [
                            {
                              type: "checkbox",
                              id: "IgnoreAllCapsWords",
                              label: "Ignore All-Caps Words",
                              labelStyle:
                                "margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",
                              style: "float:left; min-height: 16px;",
                              default: "",
                              onClick: function () {
                                e[this.id] = this.getValue() ? 1 : 0;
                              },
                            },
                            {
                              type: "checkbox",
                              id: "IgnoreWordsNumbers",
                              label: "Ignore Words with Numbers",
                              labelStyle:
                                "margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",
                              style: "float:left; min-height: 16px;",
                              default: "",
                              onClick: function () {
                                e[this.id] = this.getValue() ? 1 : 0;
                              },
                            },
                            {
                              type: "checkbox",
                              id: "IgnoreMixedCaseWords",
                              label: "Ignore Mixed-Case Words",
                              labelStyle:
                                "margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",
                              style: "float:left; min-height: 16px;",
                              default: "",
                              onClick: function () {
                                e[this.id] = this.getValue() ? 1 : 0;
                              },
                            },
                            {
                              type: "checkbox",
                              id: "IgnoreDomainNames",
                              label: "Ignore Domain Names",
                              labelStyle:
                                "margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",
                              style: "float:left; min-height: 16px;",
                              default: "",
                              onClick: function () {
                                e[this.id] = this.getValue() ? 1 : 0;
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "vbox",
                      id: "Options_DictionaryName",
                      children: [
                        {
                          type: "text",
                          id: "DictionaryName",
                          style: "margin-bottom: 10px",
                          label: "Dictionary Name:",
                          labelLayout: "vertical",
                          labelStyle: "font: 12px/25px arial, sans-serif;",
                          default: "",
                          onLoad: function () {
                            t = this;
                            var b = a.userDictionaryName
                              ? a.userDictionaryName
                              : (f.cookie.get("udn"), this.getValue());
                            this.setValue(b);
                          },
                          onShow: function () {
                            t = this;
                            var b = f.cookie.get("udn")
                              ? f.cookie.get("udn")
                              : this.getValue();
                            this.setValue(b);
                            this.setLabel(a.LocalizationComing.DictionaryName);
                          },
                          onHide: function () {
                            this.reset();
                          },
                        },
                        {
                          type: "hbox",
                          id: "Options_buttons",
                          children: [
                            {
                              type: "vbox",
                              id: "Options_leftCol_col",
                              widths: ["50%", "50%"],
                              children: [
                                {
                                  type: "button",
                                  id: "create",
                                  label: "Create",
                                  title: "Create",
                                  style: "width: 100%;",
                                  onLoad: function () {
                                    this.getElement().setAttribute(
                                      "title-cmd",
                                      this.id,
                                    );
                                  },
                                  onShow: function () {
                                    (
                                      this.getElement().getFirst() ||
                                      this.getElement()
                                    ).setText(a.LocalizationComing.Create);
                                  },
                                  onClick: b,
                                },
                                {
                                  type: "button",
                                  id: "restore",
                                  label: "Restore",
                                  title: "Restore",
                                  style: "width: 100%;",
                                  onLoad: function () {
                                    this.getElement().setAttribute(
                                      "title-cmd",
                                      this.id,
                                    );
                                  },
                                  onShow: function () {
                                    (
                                      this.getElement().getFirst() ||
                                      this.getElement()
                                    ).setText(a.LocalizationComing.Restore);
                                  },
                                  onClick: b,
                                },
                              ],
                            },
                            {
                              type: "vbox",
                              id: "Options_rightCol_col",
                              widths: ["50%", "50%"],
                              children: [
                                {
                                  type: "button",
                                  id: "rename",
                                  label: "Rename",
                                  title: "Rename",
                                  style: "width: 100%;",
                                  onLoad: function () {
                                    this.getElement().setAttribute(
                                      "title-cmd",
                                      this.id,
                                    );
                                  },
                                  onShow: function () {
                                    (
                                      this.getElement().getFirst() ||
                                      this.getElement()
                                    ).setText(a.LocalizationComing.Rename);
                                  },
                                  onClick: b,
                                },
                                {
                                  type: "button",
                                  id: "delete",
                                  label: "Remove",
                                  title: "Remove",
                                  style: "width: 100%;",
                                  onLoad: function () {
                                    this.getElement().setAttribute(
                                      "title-cmd",
                                      this.id,
                                    );
                                  },
                                  onShow: function () {
                                    (
                                      this.getElement().getFirst() ||
                                      this.getElement()
                                    ).setText(a.LocalizationComing.Remove);
                                  },
                                  onClick: b,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "hbox",
                  id: "Options_text",
                  children: [
                    {
                      type: "html",
                      style:
                        "text-align: justify;margin-top: 15px;white-space: normal!important; font-size: 12px;color:#777;",
                      html:
                        "\x3cdiv\x3e" +
                        a.LocalizationComing.OptionsTextIntro +
                        "\x3c/div\x3e",
                      onShow: function () {
                        this.getElement().setText(
                          a.LocalizationComing.OptionsTextIntro,
                        );
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton],
      onOk: function () {
        var a = [];
        a[0] = e.IgnoreAllCapsWords;
        a[1] = e.IgnoreWordsNumbers;
        a[2] = e.IgnoreMixedCaseWords;
        a[3] = e.IgnoreDomainNames;
        a = a.toString().replace(/,/g, "");
        f.cookie.set("osp", a);
        f.postMessage.send({ id: "options_checkbox_send" });
        g.getElement().hide();
        g.getElement().setHtml(" ");
      },
      onLoad: function () {
        c = this;
        d.IgnoreAllCapsWords = c.getContentElement(
          "OptionsTab",
          "IgnoreAllCapsWords",
        );
        d.IgnoreWordsNumbers = c.getContentElement(
          "OptionsTab",
          "IgnoreWordsNumbers",
        );
        d.IgnoreMixedCaseWords = c.getContentElement(
          "OptionsTab",
          "IgnoreMixedCaseWords",
        );
        d.IgnoreDomainNames = c.getContentElement(
          "OptionsTab",
          "IgnoreDomainNames",
        );
      },
      onShow: function () {
        f.postMessage.init(h);
        var b = f.cookie.get("osp").split("");
        e.IgnoreAllCapsWords = b[0];
        e.IgnoreWordsNumbers = b[1];
        e.IgnoreMixedCaseWords = b[2];
        e.IgnoreDomainNames = b[3];
        parseInt(e.IgnoreAllCapsWords, 10)
          ? d.IgnoreAllCapsWords.setValue("checked", !1)
          : d.IgnoreAllCapsWords.setValue("", !1);
        parseInt(e.IgnoreWordsNumbers, 10)
          ? d.IgnoreWordsNumbers.setValue("checked", !1)
          : d.IgnoreWordsNumbers.setValue("", !1);
        parseInt(e.IgnoreMixedCaseWords, 10)
          ? d.IgnoreMixedCaseWords.setValue("checked", !1)
          : d.IgnoreMixedCaseWords.setValue("", !1);
        parseInt(e.IgnoreDomainNames, 10)
          ? d.IgnoreDomainNames.setValue("checked", !1)
          : d.IgnoreDomainNames.setValue("", !1);
        e.IgnoreAllCapsWords = d.IgnoreAllCapsWords.getValue() ? 1 : 0;
        e.IgnoreWordsNumbers = d.IgnoreWordsNumbers.getValue() ? 1 : 0;
        e.IgnoreMixedCaseWords = d.IgnoreMixedCaseWords.getValue() ? 1 : 0;
        e.IgnoreDomainNames = d.IgnoreDomainNames.getValue() ? 1 : 0;
        d.IgnoreAllCapsWords.getElement().$.lastChild.innerHTML =
          a.LocalizationComing.IgnoreAllCapsWords;
        d.IgnoreWordsNumbers.getElement().$.lastChild.innerHTML =
          a.LocalizationComing.IgnoreWordsWithNumbers;
        d.IgnoreMixedCaseWords.getElement().$.lastChild.innerHTML =
          a.LocalizationComing.IgnoreMixedCaseWords;
        d.IgnoreDomainNames.getElement().$.lastChild.innerHTML =
          a.LocalizationComing.IgnoreDomainNames;
      },
      onHide: function () {
        f.postMessage.unbindHandler(h);
        if (y)
          try {
            y.focus();
          } catch (a) {}
      },
    };
  });
  CKEDITOR.dialog.on("resize", function (b) {
    b = b.data;
    var c = b.dialog,
      d = CKEDITOR.document.getById(a.iframeNumber + "_" + c._.currentTabId);
    "checkspell" == c._.name &&
      (a.bnr
        ? d && d.setSize("height", b.height - 310)
        : d && d.setSize("height", b.height - 220),
      c._.fromResizeEvent && !c._.resized && (c._.resized = !0),
      (c._.fromResizeEvent = !0));
  });
  CKEDITOR.on("dialogDefinition", function (b) {
    if ("checkspell" === b.data.name) {
      var c = b.data.definition;
      a.onLoadOverlay = new B({
        opacity: "1",
        background: "#fff",
        target: c.dialog.parts.tabs.getParent().$,
      });
      a.onLoadOverlay.setEnable();
      c.dialog.on(
        "cancel",
        function (b) {
          c.dialog
            .getParentEditor()
            .config.wsc_onClose.call(this.document.getWindow().getFrame());
          a.div_overlay && a.div_overlay.setDisable();
          a.onLoadOverlay.setDisable();
          return !1;
        },
        this,
        null,
        -1,
      );
    }
  });
})();