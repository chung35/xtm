var uagent = navigator.userAgent.toLowerCase(), is_safari = -1 != uagent.indexOf("safari") || "Apple Computer, Inc." == navigator.vendor, is_opera = -1 != uagent.indexOf("opera"), is_ie = -1 != uagent.indexOf("msie") && !is_opera && !is_safari, is_ie4 = is_ie && -1 != uagent.indexOf("msie 4."), is_win = -1 != uagent.indexOf("win") || -1 != uagent.indexOf("16bit"), ua_vers = parseInt(navigator.appVersion), ie_range_cache = "", list_open_tag = "", list_close_tag = "", listitems = "", bbtags = [], rus_lr2 = "\u0415\u0435\u041e\u043e\u0401\u0401\u0401\u0401\u0416\u0416\u0427\u0427\u0428\u0428\u0429\u0429\u042a\u042c\u042d\u042d\u042e\u042e\u042f\u042f\u042f\u042f\u0451\u0451\u0436\u0447\u0448\u0449\u044d\u044e\u044f\u044f".split(""),
    lat_lr2 = ("/E-/e-/O-/o-\u042bO-\u042bo-\u0419O-\u0419o-\u0417H-\u0417h-\u0426H-\u0426h-\u0421H-\u0421h-\u0428H-\u0428h-\u044a" + String.fromCharCode(35) + "-\u044c" + String.fromCharCode(39) + "-\u0419E-\u0419e-\u0419U-\u0419u-\u0419A-\u0419a-\u042bA-\u042ba-\u044bo-\u0439o-\u0437h-\u0446h-\u0441h-\u0448h-\u0439e-\u0439u-\u0439a-\u044ba").split("-"), rus_lr1 = "\u0410\u0411\u0412\u0413\u0414\u0415\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0425\u0426\u0429\u042b\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0445\u0446\u0449\u044a\u044b\u044c\u044c\u044f".split(""),
    lat_lr1 = ("A-B-V-G-D-E-Z-I-J-K-L-M-N-O-P-R-S-T-U-F-H-X-C-W-Y-Q-a-b-v-g-d-e-z-i-j-k-l-m-n-o-p-r-s-t-u-f-h-x-c-w-" + String.fromCharCode(35) + "-y-" + String.fromCharCode(39) + "-" + String.fromCharCode(96) + "-q").split("-");
function setFieldName(a) {
    a != selField && (selField = a)
}
function emoticon(a) {
    doInsert(" " + a + " ", "", !1)
}
function pagebreak() {
    doInsert("{PAGEBREAK}", "", !1)
}
function simpletag(a) {
    doInsert("[" + a + "]", "[/" + a + "]", !0)
}
function tag_url() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "My Webpage");
    xtmprompt(text_enter_url, "http://", xtm_prompt, function (c) {
        xtmprompt(text_enter_url_name, a, xtm_prompt, function (a) {
            doInsert("[url=" + c + "]" + a + "[/url]", "", !1);
            ie_range_cache = null
        })
    })
}
function tag_leech() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "My Webpage");
    xtmprompt(text_enter_url, "http://", xtm_prompt, function (c) {
        xtmprompt(text_enter_url_name, a, xtm_prompt, function (a) {
            doInsert("[leech=" + c + "]" + a + "[/leech]", "", !1);
            ie_range_cache = null
        })
    })
}
function tag_youtube() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "http://");
    xtmprompt(text_enter_url, a, xtm_prompt, function (a) {
        doInsert("[media=" + a + "]", "", !1);
        ie_range_cache = null
    })
}
function tag_flash() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "http://");
    xtmprompt(text_enter_flash, a, xtm_prompt, function (a) {
        xtmprompt(text_enter_size, "425,264", xtm_prompt, function (d) {
            doInsert("[flash=" + d + "]" + a + "[/flash]", "", !1);
            ie_range_cache = null
        })
    })
}
function tag_list(a) {
    list_open_tag = "ol" == a ? "[ol=1]\n" : "[list]\n";
    list_close_tag = "ol" == a ? "[/ol]" : "[/list]";
    listitems = "";
    (a = get_sel(eval("fombj." + selField))) || (a = "");
    insert_list(a)
}
function insert_list(a) {
    xtmprompt(text_enter_list, a, xtm_prompt, function (a) {
        "" != a ? (listitems += "[*]" + a + "\n", insert_list("")) : listitems && (doInsert(list_open_tag + listitems + list_close_tag, "", !1), ie_range_cache = null)
    }, !0)
}
function tag_image() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "http://");
    xtmimagePrompt(a, function (a, d, b) {
        var e = "";
        "" != d && (e = "|" + d);
        "" != b && "center" != b && (e = b + e);
        "" != e && (e = "=" + e);
        "center" == b ? doInsert("[center][img" + e + "]" + a + "[/img][/center]", "", !1) : doInsert("[img" + e + "]" + a + "[/img]", "", !1);
        ie_range_cache = null
    })
}
function xtmimagePrompt(a, c) {
    var d = {};
    d[xtm_act_lang[3]] = function () {
        $(this).dialog("close")
    };
    d[xtm_act_lang[2]] = function () {
        if (1 > $("#xtm-promt-text").val().length)$("#xtm-promt-text").addClass("ui-state-error"); else {
            var a = $("#xtm-promt-text").val(), d = $("#xtm-image-alt").val(), f = $("#xtmimagealign").val();
            $(this).dialog("close");
            $("#xtmpopup").remove();
            c && c(a, d, f)
        }
    };
    $("#xtmpopup").remove();
    $("body").append("<div id='xtmpopup' title='" + xtm_prompt + "' style='display:none'><br />" + text_enter_image + "<br /><input type='text' name='xtm-promt-text' id='xtm-promt-text' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value='" +
        a + "'/><br /><br />" + text_alt_image + "<br /><input type='text' name='xtm-image-alt' id='xtm-image-alt' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value=''/><br /><br />" + img_align + "&nbsp;" + img_align_sel + "</div>");
    $("#xtmpopup").dialog({autoOpen:!0, width:500, buttons:d});
    0 < a.length ? $("#xtm-promt-text").select().focus() : $("#xtm-promt-text").focus()
}
function tag_video() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "http://");
    xtmprompt(text_enter_url, a, xtm_prompt, function (a) {
        doInsert("[video=" + a + "]", "", !1);
        ie_range_cache = null
    })
}
function tag_audio() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "http://");
    xtmprompt(text_enter_url, a, xtm_prompt, function (a) {
        doInsert("[audio=" + a + "]", "", !1);
        ie_range_cache = null
    })
}
function tag_email() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = "");
    xtmprompt(text_enter_email, "", xtm_prompt, function (c) {
        xtmprompt(email_title, a, xtm_prompt, function (a) {
            doInsert("[email=" + c + "]" + a + "[/email]", "", !1);
            ie_range_cache = null
        })
    })
}
function doInsert(a, c, d) {
    var b = eval("fombj." + selField);
    b.focus();
    if (4 <= ua_vers && is_ie && is_win) {
        if (b.isTextEdit) {
            var b = document.selection, e = ie_range_cache ? ie_range_cache : b.createRange();
            e.colapse;
            if (("Text" == b.type || "None" == b.type) && null != e)"" != c && 0 < e.text.length ? a += e.text + c : d && (a += e.text + c), e.text = a
        } else b.value += a + c;
        e.select();
        ie_range_cache = null
    } else if (null != b.selectionEnd) {
        var f = b.selectionStart, e = b.scrollTop, h = b.selectionEnd, i = b.value.substring(0, f), g = b.value.substring(f, h), h = b.value.substring(h,
            b.textLength);
        d || (g = "");
        g = a + g + c;
        b.value = i + g + h;
        a = f + g.length;
        b.selectionStart = a;
        b.selectionEnd = a;
        b.scrollTop = e
    } else b.value += a + c;
    return!1
}
function ins_color() {
    document.getElementById(selField).focus();
    is_ie && (document.getElementById(selField).focus(), ie_range_cache = document.selection.createRange());
    $("#cp").remove();
    $("body").append("<div id='cp' title='" + bb_t_col + '\' style=\'display:none\'><br /><iframe width="154" height="104" src="' + xtm_root + "templates/" + xtm_skin + '/bbcodes/color.html" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>');
    $("#cp").dialog({autoOpen:!0, dialogClass:"modalfixed", width:180});
    $(".modalfixed.ui-dialog").css({position:"fixed"});
    $("#cp").dialog("option", "position", ["0", "0"])
}
function setColor(a) {
    doInsert("[color=" + a + "]", "[/color]", !0);
    $("#cp").dialog("close")
}
function ins_emo() {
    document.getElementById(selField).focus();
    is_ie && (ie_range_cache = document.selection.createRange());
    $("#xtm_emo").remove();
    $("body").append("<div id='xtm_emo' title='" + bb_t_emo + "' style='display:none'>" + document.getElementById("xtm_emos").innerHTML + "</div>");
    var a = "300", c = "auto";
    450 <= $("#xtm_emos").width() && ($("#xtm_emos").width(450), a = "505");
    300 <= $("#xtm_emos").height() && ($("#xtm_emos").height(300), c = "340");
    $("#xtm_emo").dialog({autoOpen:!0, dialogClass:"modalfixed", width:a, height:c});
    $(".modalfixed.ui-dialog").css({position:"fixed"});
    $("#xtm_emo").dialog("option", "position", ["0", "0"])
}
function xtm_smiley(a) {
    doInsert(" " + a + " ", "", !1);
    $("#xtm_emo").dialog("close");
    ie_range_cache = null
}
function pagelink() {
    var a = get_sel(eval("fombj." + selField));
    a || (a = text_pages);
    xtmprompt(text_enter_page, "1", xtm_prompt, function (c) {
        xtmprompt(text_enter_page_name, a, xtm_prompt, function (a) {
            doInsert("[page=" + c + "]" + a + "[/page]", "", !1);
            ie_range_cache = null
        })
    })
}
function translit() {
    var a = eval("fombj." + selField);
    if (4 <= ua_vers && is_ie && is_win)if (a.isTextEdit) {
        a.focus();
        var c = document.selection, d = c.createRange();
        d.colapse;
        if (("Text" == c.type || "None" == c.type) && null != d)d.text = dotranslate(d.text)
    } else a.value = dotranslate(a.value); else a.value = dotranslate(a.value);
    a.focus()
}
function dotranslate(a) {
    var c = "", d = 0, d = "", b = 1;
    for (kk = 0; kk < a.length; kk++) {
        d = a.substr(kk, 1);
        if ("[" == d || "<" == d)b = 0;
        if ("]" == d || ">" == d)b = 1;
        d = b ? transsymbtocyr(c.substr(c.length - 1, 1), d) : c.substr(c.length - 1, 1) + d;
        c = c.substr(0, c.length - 1) + d
    }
    return c
}
function transsymbtocyr(a, c) {
    var d = a + c, b = c.charCodeAt(0);
    if (!(65 <= b && 123 >= b || 35 == b || 39 == b))return d;
    for (b = 0; b < lat_lr2.length; b++)if (lat_lr2[b] == d)return rus_lr2[b];
    for (b = 0; b < lat_lr1.length; b++)if (lat_lr1[b] == c)return a + rus_lr1[b];
    return d
}
function insert_font(a, c) {
    0 != a && (doInsert("[" + c + "=" + a + "]", "[/" + c + "]", !0), fombj.bbfont.selectedIndex = 0, fombj.bbsize.selectedIndex = 0)
}
function get_sel(a) {
    if (document.selection) {
        if (is_ie && (document.getElementById(selField).focus(), ie_range_cache = document.selection.createRange()), a = document.selection.createRange(), a.text)return a.text
    } else if ("number" == typeof a.selectionStart && a.selectionStart != a.selectionEnd) {
        var c = a.selectionStart;
        return a.value.substr(c, a.selectionEnd - c)
    }
    return!1
}
function xtm_image_upload(a, c) {
    document.getElementById(selField).focus();
    is_ie && (ie_range_cache = document.selection.createRange());
    $("#xtm_emo").remove();
    $("#cp").remove();
    $("#xtmpopup").remove();
    media_upload(selField, a, c, "no")
}
function tag_typograf() {
    ShowLoading("");
    $.post(xtm_root + "engine/ajax/typograf.php", {txt:document.getElementById(selField).value}, function (a) {
        HideLoading("");
        $("#" + selField).val(a)
    })
};