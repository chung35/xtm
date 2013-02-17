(function (a) {
    a.mbTabset = {mbTabsetArray:[], options:{container:"", item:"a", axis:"x", sortable:true, position:"left", start:function () {
    }, stop:function () {
    }}, build:function (b) {
        this.each(function () {
            a(this).addClass("mbTabset");
            var h = {};
            a.extend(h, a.mbTabset.options);
            var f = {el:a(this)};
            a.extend(h, f);
            a.extend(h, b);
            a(this).addClass(h.position);
            var c = a(this).attr("id") + "_container";
            a(this).after("<div class='mbTabsetContainer' id='" + c + "'></div>");
            var d = a("#" + c);
            var e = a(this).find(h.item);
            this.opt = h;
            this.opt.tabsetContainer = d;
            this.opt.tabs = e;
            var g = a(e).is(".sel");
            if (!g) {
                a(this).find(h.item + ":first").addClass("sel")
            }
            if (a.metadata) {
                a.metadata.setType("class")
            }
            a(e).each(function () {
                a(this).setAsMbTab(h)
            });
            if (h.sortable) {
                a(this).setSortableMbTabset(h)
            }
        })
    }, setAsTab:function (c) {
        if (a.metadata) {
            a.metadata.setType("class");
            if (a(this).metadata().content) {
                a(this).attr("content", a(this).metadata().content)
            }
            if (a(this).metadata().ajaxContent) {
                a(this).attr("ajaxContent", a(this).metadata().ajaxContent)
            }
            if (a(this).metadata().ajaxData) {
                a(this).attr("ajaxData", a(this).metadata().ajaxData)
            }
        }
        if (a(this).hasClass("sel")) {
            a(this).mb_drawAjaxContent(c.tabsetContainer)
        }
        a(this).addClass("tab");
        a(this).addClass("mbTab");
        a(this).wrapInner("<span></span>");
        var b = a("#" + a(this).attr("content"));
        b.addClass("tabContent");
        c.tabsetContainer.append(b);
        b.hide();
        if (a(this).hasClass("sel")) {
            b.fadeIn()
        }
        a(this).bind("click", function () {
            if (a(this).is(".disabled , .sel")) {
                return
            }
            a(this).mb_drawAjaxContent(c.tabsetContainer);
            var e = a(this);
            var d = "";
            a(c.tabs).each(function () {
                if (a(this).is(".sel")) {
                    d = a(this).attr("content");
                    a(this).removeClass("sel")
                }
            });
            a("#" + d).fadeOut("fast", function () {
                e.addClass("sel");
                a("#" + e.attr("content")).addClass("tabContent");
                a("#" + e.attr("content")).slideDown("fast")
            })
        })
    }, addTab:function (d) {
        var b = a(this)[0].opt;
        var e = {id:"tab_" + a(this).find(b.item).length + 1, title:"newTab", ajaxContent:"newAjaxContent", ajaxData:""};
        a.extend(e, d);
        a(this).append("<a id='" + e.id + "'>" + e.title + "</a>");
        var c = a(this).find("#" + e.id);
        c.attr("ajaxContent", e.ajaxContent);
        c.attr("content", "cont_" + e.id);
        c.attr("ajaxData", e.ajaxData);
        b.tabs = a(this).find(b.item);
        c.setAsMbTab(b);
        if (b.sortable) {
            a(this).setSortableMbTabset(b)
        }
    }, mb_drawAjaxContent:function (b) {
        if (a(this).attr("ajaxContent")) {
            if (a("#" + a(this).attr("content")).html() == null) {
                b.append("<div id='" + a(this).attr("content") + "'> </div>")
            }
            var c = a("#" + a(this).attr("content"));
            if (b) {
                c.hide()
            }
            a.ajax({type:"POST", url:a(this).attr("ajaxContent"), async:true, data:(!a(this).attr("ajaxData")) ? "" : a(this).attr("ajaxData"), success:function (d) {
                c.html(d)
            }})
        }
    }, mb_changeContent:function (c, b) {
        a(this).attr({ajaxContent:c, ajaxData:b})
    }, toArray:function (b) {
        return a(b).sortable("toArray")
    }, select:function () {
    }, setSortable:function (c) {
        if (!c) {
            c = a(this)[0].opt
        }
        var b = a(this).find(c.item).not(".block");
        a(b).each(function () {
            if (a(this).find("i").size() == 0) {
                a(this).find("span").prepend("<i>&nbsp;</i>").addClass("sortable");
                a(this).find("i").bind("click", function (d) {
                    d.preventDefault();
                    return false
                })
            }
        });
        a(this).sortable({item:c.item, hanxtm:"i", cursor:"move", revert:false, axis:c.axis, opacity:0.7, forcePlaceholderSize:true, start:function () {
            a(this).find(".tab").addClass("floatEl");
            if (c.start) {
                c.start()
            }
        }, stop:function () {
            a(this).find(".tab").removeClass("floatEl");
            a.mbTabset.mbTabsetArray = a.mbTabset.toArray(a(this));
            if (c.stop) {
                c.stop()
            }
        }})
    }, clearSortable:function (c) {
        if (!c) {
            c = a(this)[0].opt
        }
        var b = a(this).find(c.item);
        a(b).each(function () {
            a(this).find("span").removeClass("sortable");
            a(this).find("i").remove()
        });
        a(this).sortable("destroy")
    }, selectMbTab:function () {
        a(this).click()
    }};
    a.fn.setAsMbTab = a.mbTabset.setAsTab;
    a.fn.addMbTab = a.mbTabset.addTab;
    a.fn.setSortableMbTabset = a.mbTabset.setSortable;
    a.fn.mb_drawAjaxContent = a.mbTabset.mb_drawAjaxContent;
    a.fn.mb_changeContent = a.mbTabset.mb_changeContent;
    a.fn.clearSortableMbTabset = a.mbTabset.clearSortable;
    a.fn.buildMbTabset = a.mbTabset.build;
    a.fn.serializeMbTabset = a.mbTabset.serialize;
    a.fn.selectMbTab = a.mbTabset.selectMbTab
})(jQuery);
(function ($) {
    $.extend({metadata:{defaults:{type:"class", name:"metadata", cre:/({.*})/, single:"metadata"}, setType:function (type, name) {
        this.defaults.type = type;
        this.defaults.name = name
    }, get:function (elem, opts) {
        var settings = $.extend({}, this.defaults, opts);
        if (!settings.single.length)settings.single = "metadata";
        var data = $.data(elem, settings.single);
        if (data)return data;
        data = "{}";
        if (settings.type == "class") {
            var m = settings.cre.exec(elem.className);
            if (m)data = m[1]
        } else if (settings.type == "elem") {
            if (!elem.getElementsByTagName)return undefined;
            var e = elem.getElementsByTagName(settings.name);
            if (e.length)data = $.trim(e[0].innerHTML)
        } else if (elem.getAttribute != undefined) {
            var attr = elem.getAttribute(settings.name);
            if (attr)data = attr
        }
        if (data.indexOf("{") < 0)data = "{" + data + "}";
        data = eval("(" + data + ")");
        $.data(elem, settings.single, data);
        return data
    }}});
    $.fn.metadata = function (opts) {
        return $.metadata.get(this[0], opts)
    }
})(jQuery);