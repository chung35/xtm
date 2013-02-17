/**
 * Name:    Highslide JS
 * Version: 4.1.12 (2011-03-28)
 * Config:  default -preloading -hideelements +slideshow +positioning +transitions +viewport
 * Author:  Torstein HГѓВёnsi
 * Support: www.highslide.com/support
 * License: www.highslide.com/#license
 */
if (!hs) {
    var hs = {lang:{cssDirection:"ltr", loadingText:"Loading...", loadingTitle:"Click to cancel", focusTitle:"Click to bring to front", fullExpandTitle:"Expand to actual size (f)", creditsText:"Powered by <i>Highslide JS</i>", creditsTitle:"Go to the Highslide JS homepage", previousText:"Previous", nextText:"Next", moveText:"Move", closeText:"Close", closeTitle:"Close (esc)", resizeTitle:"Resize", playText:"Play", playTitle:"Play slideshow (spacebar)", pauseText:"Pause", pauseTitle:"Pause slideshow (spacebar)",
        previousTitle:"Previous (arrow left)", nextTitle:"Next (arrow right)", moveTitle:"Move", fullExpandText:"1:1", number:"Image %1 of %2", restoreTitle:"Click to close image, click and drag to move. Use arrow keys for next and previous."}, graphicsDir:"highslide/graphics/", expandCursor:"zoomin.cur", restoreCursor:"zoomout.cur", expandDuration:250, restoreDuration:250, marginLeft:15, marginRight:15, marginTop:15, marginBottom:15, zIndexCounter:1001, loadingOpacity:0.75, allowMultipleInstances:true, outlineWhileAnimating:2,
        outlineStartOffset:3, padToMinWidth:false, fullExpandPosition:"bottom right", fullExpandOpacity:1, showCredits:true, creditsHref:"http://highslide.com/", creditsTarget:"_self", enableKeyListener:true, openerTagNames:["a"], transitions:[], transitionDuration:250, dimmingOpacity:0, dimmingDuration:50, anchor:"auto", align:"auto", targetX:null, targetY:null, dragByHeading:true, minWidth:200, minHeight:200, allowSizeReduction:true, outlineType:"drop-shadow", skin:{controls:'<div class="highslide-controls"><ul><li class="highslide-previous"><a href="#" title="{hs.lang.previousTitle}"><span>{hs.lang.previousText}</span></a></li><li class="highslide-play"><a href="#" title="{hs.lang.playTitle}"><span>{hs.lang.playText}</span></a></li><li class="highslide-pause"><a href="#" title="{hs.lang.pauseTitle}"><span>{hs.lang.pauseText}</span></a></li><li class="highslide-next"><a href="#" title="{hs.lang.nextTitle}"><span>{hs.lang.nextText}</span></a></li><li class="highslide-move"><a href="#" title="{hs.lang.moveTitle}"><span>{hs.lang.moveText}</span></a></li><li class="highslide-full-expand"><a href="#" title="{hs.lang.fullExpandTitle}"><span>{hs.lang.fullExpandText}</span></a></li><li class="highslide-close"><a href="#" title="{hs.lang.closeTitle}" ><span>{hs.lang.closeText}</span></a></li></ul></div>'},
        expanders:[], overrides:"allowSizeReduction,useBox,anchor,align,targetX,targetY,outlineType,outlineWhileAnimating,captionId,captionText,captionEval,captionOverlay,headingId,headingText,headingEval,headingOverlay,creditsPosition,dragByHeading,autoplay,numberPosition,transitions,dimmingOpacity,width,height,wrapperClassName,minWidth,minHeight,maxWidth,maxHeight,pageOrigin,slideshowGroup,easing,easingClose,fadeInOut,src".split(","), overlays:[], idCounter:0, oPos:{x:["leftpanel", "left", "center", "right", "rightpanel"],
            y:["above", "top", "middle", "bottom", "below"]}, mouse:{}, headingOverlay:{}, captionOverlay:{}, timers:[], slideshows:[], pendingOutlines:{}, clones:{}, onReady:[], uaVersion:/Trident\/4\.0/.test(navigator.userAgent) ? 8 : parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]), ie:document.all && !window.opera, safari:/Safari/.test(navigator.userAgent), geckoMac:/Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent), $:function (a) {
            if (a)return document.getElementById(a)
        },
        push:function (a, b) {
            a[a.length] = b
        }, createElement:function (a, b, c, d, e) {
            a = document.createElement(a);
            b && hs.extend(a, b);
            e && hs.setStyles(a, {padding:0, border:"none", margin:0});
            c && hs.setStyles(a, c);
            d && d.appendChild(a);
            return a
        }, extend:function (a, b) {
            for (var c in b)a[c] = b[c];
            return a
        }, setStyles:function (a, b) {
            for (var c in b)hs.ieLt9 && c == "opacity" ? b[c] > 0.99 ? a.style.removeAttribute("filter") : a.style.filter = "alpha(opacity=" + b[c] * 100 + ")" : a.style[c] = b[c]
        }, animate:function (a, b, c) {
            var d, e, f;
            if (typeof c != "object" || c ===
                null)d = arguments, c = {duration:d[2], easing:d[3], complete:d[4]};
            if (typeof c.duration != "number")c.duration = 250;
            c.easing = Math[c.easing] || Math.easeInQuad;
            c.curAnim = hs.extend({}, b);
            for (var g in b) {
                var i = new hs.fx(a, c, g);
                d = parseFloat(hs.css(a, g)) || 0;
                e = parseFloat(b[g]);
                f = g != "opacity" ? "px" : "";
                i.custom(d, e, f)
            }
        }, css:function (a, b) {
            if (a.style[b])return a.style[b]; else if (document.defaultView)return document.defaultView.getComputedStyle(a, null).getPropertyValue(b); else {
                b == "opacity" && (b = "filter");
                var c = a.currentStyle[b.replace(/\-(\w)/g,
                    function (a, b) {
                        return b.toUpperCase()
                    })];
                b == "filter" && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function (a, b) {
                    return b / 100
                }));
                return c === "" ? 1 : c
            }
        }, getPageSize:function () {
            var a = document, b = a.compatMode && a.compatMode != "BackCompat" ? a.documentElement : a.body;
            hs.page = {width:hs.ieLt9 ? b.clientWidth : a.documentElement.clientWidth || self.innerWidth, height:hs.ieLt9 ? b.clientHeight : self.innerHeight, scrollLeft:hs.ieLt9 ? b.scrollLeft : window.pageXOffset, scrollTop:hs.ieLt9 ? b.scrollTop : window.pageYOffset};
            return hs.page
        },
        getPosition:function (a) {
            for (var b = {x:a.offsetLeft, y:a.offsetTop}; a.offsetParent;)a = a.offsetParent, b.x += a.offsetLeft, b.y += a.offsetTop, a != document.body && a != document.documentElement && (b.x -= a.scrollLeft, b.y -= a.scrollTop);
            return b
        }, expand:function (a, b, c) {
            a || (a = hs.createElement("a", null, {display:"none"}, hs.container));
            if (typeof a.getParams == "function")return b;
            try {
                return new hs.Expander(a, b, c), false
            } catch (d) {
                return true
            }
        }, getElementByClass:function (a, b, c) {
            a = a.getElementsByTagName(b);
            for (b = 0; b < a.length; b++)if (RegExp(c).test(a[b].className))return a[b];
            return null
        }, replaceLang:function (a) {
            var a = a.replace(/\s/g, " "), b = /{hs\.lang\.([^}]+)\}/g, c = a.match(b), d;
            if (c)for (var e = 0; e < c.length; e++)d = c[e].replace(b, "$1"), typeof hs.lang[d] != "undefined" && (a = a.replace(c[e], hs.lang[d]));
            return a
        }, focusTopmost:function () {
            for (var a = 0, b = -1, c = hs.expanders, d, e = 0; e < c.length; e++)if (d = c[e])if ((d = d.wrapper.style.zIndex) && d > a)a = d, b = e;
            b == -1 ? hs.focusKey = -1 : c[b].focus()
        }, getParam:function (a, b) {
            a.getParams = a.onclick;
            var c = a.getParams ? a.getParams() : null;
            a.getParams = null;
            return c &&
                typeof c[b] != "undefined" ? c[b] : typeof hs[b] != "undefined" ? hs[b] : null
        }, getSrc:function (a) {
            var b = hs.getParam(a, "src");
            return b ? b : a.href
        }, getNode:function (a) {
            var b = hs.$(a), c = hs.clones[a];
            return!b && !c ? null : c ? c.cloneNode(true) : (c = b.cloneNode(true), c.id = "", hs.clones[a] = c, b)
        }, discardElement:function (a) {
            a && hs.garbageBin.appendChild(a);
            hs.garbageBin.innerHTML = ""
        }, dim:function (a) {
            if (!hs.dimmer)b = true, hs.dimmer = hs.createElement("div", {className:"highslide-dimming highslide-viewport-size", owner:"", onclick:function () {
                    hs.close()
                }},
                {visibility:"visible", opacity:0}, hs.container, true);
            hs.dimmer.style.display = "";
            var b = hs.dimmer.owner == "";
            hs.dimmer.owner += "|" + a.key;
            b && (hs.geckoMac && hs.dimmingGeckoFix ? hs.setStyles(hs.dimmer, {background:"url(" + hs.graphicsDir + "geckodimmer.png)", opacity:1}) : hs.animate(hs.dimmer, {opacity:a.dimmingOpacity}, hs.dimmingDuration))
        }, undim:function (a) {
            if (hs.dimmer) {
                if (typeof a != "undefined")hs.dimmer.owner = hs.dimmer.owner.replace("|" + a, "");
                if (!(typeof a != "undefined" && hs.dimmer.owner != "" || hs.upcoming && hs.getParam(hs.upcoming,
                    "dimmingOpacity")))hs.geckoMac && hs.dimmingGeckoFix ? hs.dimmer.style.display = "none" : hs.animate(hs.dimmer, {opacity:0}, hs.dimmingDuration, null, function () {
                    hs.dimmer.style.display = "none"
                })
            }
        }, transit:function (a, b) {
            var c = b || hs.getExpander(), b = c;
            if (hs.upcoming)return false; else hs.last = c;
            hs.removeEventListener(document, window.opera ? "keypress" : "keydown", hs.keyhandler);
            try {
                hs.upcoming = a, a.onclick()
            } catch (d) {
                hs.last = hs.upcoming = null
            }
            try {
                (!a || b.transitions[1] != "crossfade") && b.close()
            } catch (e) {
            }
            return false
        }, previousOrNext:function (a, b) {
            var c = hs.getExpander(a);
            return c ? hs.transit(c.getAdjacentAnchor(b), c) : false
        }, previous:function (a) {
            return hs.previousOrNext(a, -1)
        }, next:function (a) {
            return hs.previousOrNext(a, 1)
        }, keyhandler:function (a) {
            if (!a)a = window.event;
            if (!a.target)a.target = a.srcElement;
            if (typeof a.target.form != "undefined")return true;
            var b = hs.getExpander(), c = null;
            switch (a.keyCode) {
                case 70:
                    return b && b.doFullExpand(), true;
                case 32:
                    c = 2;
                    break;
                case 34:
                case 39:
                case 40:
                    c = 1;
                    break;
                case 8:
                case 33:
                case 37:
                case 38:
                    c = -1;
                    break;
                case 27:
                case 13:
                    c =
                        0
            }
            if (c !== null) {
                hs.removeEventListener(document, window.opera ? "keypress" : "keydown", hs.keyhandler);
                if (!hs.enableKeyListener)return true;
                a.preventDefault ? a.preventDefault() : a.returnValue = false;
                if (b)return c == 0 ? b.close() : c == 2 ? b.slideshow && b.slideshow.hitSpace() : (b.slideshow && b.slideshow.pause(), hs.previousOrNext(b.key, c)), false
            }
            return true
        }, registerOverlay:function (a) {
            hs.push(hs.overlays, hs.extend(a, {hsId:"hsId" + hs.idCounter++}))
        }, addSlideshow:function (a) {
            var b = a.slideshowGroup;
            if (typeof b == "object")for (var c =
                0; c < b.length; c++) {
                var d = {}, e;
                for (e in a)d[e] = a[e];
                d.slideshowGroup = b[c];
                hs.push(hs.slideshows, d)
            } else hs.push(hs.slideshows, a)
        }, getWrapperKey:function (a, b) {
            var c, d = /^highslide-wrapper-([0-9]+)$/;
            for (c = a; c.parentNode;) {
                if (c.hsKey !== void 0)return c.hsKey;
                if (c.id && d.test(c.id))return c.id.replace(d, "$1");
                c = c.parentNode
            }
            if (!b)for (c = a; c.parentNode;) {
                if (c.tagName && hs.isHsAnchor(c))for (d = 0; d < hs.expanders.length; d++) {
                    var e = hs.expanders[d];
                    if (e && e.a == c)return d
                }
                c = c.parentNode
            }
            return null
        }, getExpander:function (a, b) {
            if (typeof a == "undefined")return hs.expanders[hs.focusKey] || null;
            if (typeof a == "number")return hs.expanders[a] || null;
            typeof a == "string" && (a = hs.$(a));
            return hs.expanders[hs.getWrapperKey(a, b)] || null
        }, isHsAnchor:function (a) {
            return a.onclick && a.onclick.toString().replace(/\s/g, " ").match(/hs.(htmlE|e)xpand/)
        }, reOrder:function () {
            for (var a = 0; a < hs.expanders.length; a++)hs.expanders[a] && hs.expanders[a].isExpanded && hs.focusTopmost()
        }, mouseClickhandler:function (a) {
            if (!a)a = window.event;
            if (a.button > 1)return true;
            if (!a.target)a.target = a.srcElement;
            for (var b = a.target; b.parentNode && !/highslide-(image|move|html|resize)/.test(b.className);)b = b.parentNode;
            var c = hs.getExpander(b);
            if (c && (c.isClosing || !c.isExpanded))return true;
            if (c && a.type == "mousedown") {
                if (a.target.form)return true;
                if (b = b.className.match(/highslide-(image|move|resize)/))if (hs.dragArgs = {exp:c, type:b[1], left:c.x.pos, width:c.x.size, top:c.y.pos, height:c.y.size, clickX:a.clientX, clickY:a.clientY}, hs.addEventListener(document, "mousemove", hs.draghandler),
                    a.preventDefault && a.preventDefault(), /highslide-(image|html)-blur/.test(c.content.className))c.focus(), hs.hasFocused = true
            } else if (a.type == "mouseup")if (hs.removeEventListener(document, "mousemove", hs.draghandler), hs.dragArgs) {
                if (hs.styleRestoreCursor && hs.dragArgs.type == "image")hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
                !hs.dragArgs.hasDragged && !hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type) && c.close();
                hs.hasFocused = false;
                hs.dragArgs = null
            } else if (/highslide-image-blur/.test(b.className))b.style.cursor =
                hs.styleRestoreCursor;
            return false
        }, draghandler:function (a) {
            if (!hs.dragArgs)return true;
            if (!a)a = window.event;
            var b = hs.dragArgs, c = b.exp;
            b.dX = a.clientX - b.clickX;
            b.dY = a.clientY - b.clickY;
            var d = Math.sqrt(Math.pow(b.dX, 2) + Math.pow(b.dY, 2));
            if (!b.hasDragged)b.hasDragged = b.type != "image" && d > 0 || d > (hs.dragSensitivity || 5);
            if (b.hasDragged && a.clientX > 5 && a.clientY > 5)if (b.type == "resize")c.resize(b); else if (c.moveTo(b.left + b.dX, b.top + b.dY), b.type == "image")c.content.style.cursor = "move";
            return false
        }, wrapperMousehandler:function (a) {
            try {
                if (!a)a =
                    window.event;
                var b = /mouseover/i.test(a.type);
                if (!a.target)a.target = a.srcElement;
                if (!a.relatedTarget)a.relatedTarget = b ? a.fromElement : a.toElement;
                var c = hs.getExpander(a.target);
                if (c.isExpanded && c && a.relatedTarget && !(hs.getExpander(a.relatedTarget, true) == c || hs.dragArgs))for (a = 0; a < c.overlays.length; a++) {
                    var d = hs.$("hsId" + c.overlays[a]);
                    d && d.hideOnMouseOut && (b && hs.setStyles(d, {visibility:"visible", display:""}), hs.animate(d, {opacity:b ? d.opacity : 0}, d.dur))
                }
            } catch (e) {
            }
        }, addEventListener:function (a, b, c) {
            a ==
                document && b == "ready" && hs.push(hs.onReady, c);
            try {
                a.addEventListener(b, c, false)
            } catch (d) {
                try {
                    a.detachEvent("on" + b, c), a.attachEvent("on" + b, c)
                } catch (e) {
                    a["on" + b] = c
                }
            }
        }, removeEventListener:function (a, b, c) {
            try {
                a.removeEventListener(b, c, false)
            } catch (d) {
                try {
                    a.detachEvent("on" + b, c)
                } catch (e) {
                    a["on" + b] = null
                }
            }
        }, init:function () {
            if (!hs.container) {
                hs.ieLt7 = hs.ie && hs.uaVersion < 7;
                hs.ieLt9 = hs.ie && hs.uaVersion < 9;
                hs.getPageSize();
                for (var a in hs.langDefaults)typeof hs[a] != "undefined" ? hs.lang[a] = hs[a] : typeof hs.lang[a] ==
                    "undefined" && typeof hs.langDefaults[a] != "undefined" && (hs.lang[a] = hs.langDefaults[a]);
                hs.container = hs.createElement("div", {className:"highslide-container"}, {position:"absolute", left:0, top:0, width:"100%", zIndex:hs.zIndexCounter, direction:"ltr"}, document.body, true);
                hs.loading = hs.createElement("a", {className:"highslide-loading", title:hs.lang.loadingTitle, innerHTML:hs.lang.loadingText, href:"javascript:;"}, {position:"absolute", top:"-9999px", opacity:hs.loadingOpacity, zIndex:1}, hs.container);
                hs.garbageBin =
                    hs.createElement("div", null, {display:"none"}, hs.container);
                hs.viewport = hs.createElement("div", {className:"highslide-viewport highslide-viewport-size"}, {visibility:hs.safari && hs.uaVersion < 525 ? "visible" : "hidden"}, hs.container, 1);
                Math.linearTween = function (a, c, d, e) {
                    return d * a / e + c
                };
                Math.easeInQuad = function (a, c, d, e) {
                    return d * (a /= e) * a + c
                }
            }
        }, ready:function () {
            if (!hs.isReady) {
                hs.isReady = true;
                for (var a = 0; a < hs.onReady.length; a++)hs.onReady[a]()
            }
        }, updateAnchors:function () {
            for (var a, b, c = [], d = [], e = {}, f, g = 0; g < hs.openerTagNames.length; g++) {
                b =
                    document.getElementsByTagName(hs.openerTagNames[g]);
                for (var i = 0; i < b.length; i++)if (a = b[i], f = hs.isHsAnchor(a))hs.push(c, a), f[0] == "hs.expand" && hs.push(d, a), f = hs.getParam(a, "slideshowGroup") || "none", e[f] || (e[f] = []), hs.push(e[f], a)
            }
            hs.anchors = {all:c, groups:e, images:d};
            return hs.anchors
        }, getAnchors:function () {
            return hs.anchors || hs.updateAnchors()
        }, close:function (a) {
            (a = hs.getExpander(a)) && a.close();
            return false
        }, fx:function (a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            if (!b.orig)b.orig = {}
        }};
    hs.fx.prototype =
    {update:function () {
        (hs.fx.step[this.prop] || hs.fx.step._default)(this);
        this.options.step && this.options.step.call(this.elem, this.now, this)
    }, custom:function (a, b, c) {
        function d(a) {
            return e.step(a)
        }

        this.startTime = (new Date).getTime();
        this.start = a;
        this.end = b;
        this.unit = c;
        this.now = this.start;
        this.pos = this.state = 0;
        var e = this;
        d.elem = this.elem;
        if (d() && hs.timers.push(d) == 1)hs.timerId = setInterval(function () {
            for (var a = hs.timers, b = 0; b < a.length; b++)a[b]() || a.splice(b--, 1);
            a.length || clearInterval(hs.timerId)
        }, 13)
    },
        step:function (a) {
            var b = (new Date).getTime();
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                var a = this.options.curAnim[this.prop] = true, c;
                for (c in this.options.curAnim)this.options.curAnim[c] !== true && (a = false);
                a && this.options.complete && this.options.complete.call(this.elem);
                return false
            } else c = b - this.startTime, this.state = c / this.options.duration, this.pos = this.options.easing(c, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos,
                this.update();
            return true
        }};
    hs.extend(hs.fx, {step:{opacity:function (a) {
        hs.setStyles(a.elem, {opacity:a.now})
    }, _default:function (a) {
        try {
            a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
        } catch (b) {
        }
    }}});
    hs.Outline = function (a, b) {
        this.onLoad = b;
        this.outlineType = a;
        var c;
        this.hasAlphaImageLoader = hs.ie && hs.uaVersion < 7;
        if (a) {
            hs.init();
            this.table = hs.createElement("table", {cellSpacing:0}, {visibility:"hidden", position:"absolute", borderCollapse:"collapse", width:0}, hs.container,
                true);
            var d = hs.createElement("tbody", null, null, this.table, 1);
            this.td = [];
            for (var e = 0; e <= 8; e++)e % 3 == 0 && (c = hs.createElement("tr", null, {height:"auto"}, d, true)), this.td[e] = hs.createElement("td", null, null, c, true), hs.setStyles(this.td[e], e != 4 ? {lineHeight:0, fontSize:0} : {position:"relative"});
            this.td[4].className = a + " highslide-outline";
            this.preloadGraphic()
        } else b && b()
    };
    hs.Outline.prototype = {preloadGraphic:function () {
        var a = hs.graphicsDir + (hs.outlinesDir || "outlines/") + this.outlineType + ".png";
        this.graphic = hs.createElement("img",
            null, {position:"absolute", top:"-9999px"}, hs.safari && hs.uaVersion < 525 ? hs.container : null, true);
        var b = this;
        this.graphic.onload = function () {
            b.onGraphicLoad()
        };
        this.graphic.src = a
    }, onGraphicLoad:function () {
        for (var a = this.offset = this.graphic.width / 4, b = [
            [0, 0],
            [0, -4],
            [-2, 0],
            [0, -8],
            0,
            [-2, -8],
            [0, -2],
            [0, -6],
            [-2, -2]
        ], c = {height:2 * a + "px", width:2 * a + "px"}, d = 0; d <= 8; d++)if (b[d]) {
            if (this.hasAlphaImageLoader) {
                var e = d == 1 || d == 7 ? "100%" : this.graphic.width + "px", f = hs.createElement("div", null, {width:"100%", height:"100%", position:"relative",
                    overflow:"hidden"}, this.td[d], true);
                hs.createElement("div", null, {filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='" + this.graphic.src + "')", position:"absolute", width:e, height:this.graphic.height + "px", left:b[d][0] * a + "px", top:b[d][1] * a + "px"}, f, true)
            } else hs.setStyles(this.td[d], {background:"url(" + this.graphic.src + ") " + b[d][0] * a + "px " + b[d][1] * a + "px"});
            window.opera && (d == 3 || d == 5) && hs.createElement("div", null, c, this.td[d], true);
            hs.setStyles(this.td[d], c)
        }
        this.graphic = null;
        hs.pendingOutlines[this.outlineType] && hs.pendingOutlines[this.outlineType].destroy();
        hs.pendingOutlines[this.outlineType] = this;
        if (this.onLoad)this.onLoad()
    }, setPosition:function (a, b, c) {
        var d = this.exp, b = b || 0, a = a || {x:d.x.pos + b, y:d.y.pos + b, w:d.x.get("wsize") - 2 * b, h:d.y.get("wsize") - 2 * b};
        if (c)this.table.style.visibility = a.h >= 4 * this.offset ? "visible" : "hidden";
        hs.setStyles(this.table, {left:a.x - this.offset + "px", top:a.y - this.offset + "px", width:a.w + 2 * this.offset + "px"});
        a.w -= 2 * this.offset;
        a.h -= 2 * this.offset;
        hs.setStyles(this.td[4],
            {width:a.w >= 0 ? a.w + "px" : 0, height:a.h >= 0 ? a.h + "px" : 0});
        if (this.hasAlphaImageLoader)this.td[3].style.height = this.td[5].style.height = this.td[4].style.height
    }, destroy:function (a) {
        a ? this.table.style.visibility = "hidden" : hs.discardElement(this.table)
    }};
    hs.Dimension = function (a, b) {
        this.exp = a;
        this.dim = b;
        this.ucwh = b == "x" ? "Width" : "Height";
        this.wh = this.ucwh.toLowerCase();
        this.uclt = b == "x" ? "Left" : "Top";
        this.lt = this.uclt.toLowerCase();
        this.ucrb = b == "x" ? "Right" : "Bottom";
        this.rb = this.ucrb.toLowerCase();
        this.p1 = this.p2 =
            0
    };
    hs.Dimension.prototype = {get:function (a) {
        switch (a) {
            case "loadingPos":
                return this.tpos + this.tb + (this.t - hs.loading["offset" + this.ucwh]) / 2;
            case "loadingPosXfade":
                return this.pos + this.cb + this.p1 + (this.size - hs.loading["offset" + this.ucwh]) / 2;
            case "wsize":
                return this.size + 2 * this.cb + this.p1 + this.p2;
            case "fitsize":
                return this.clientSize - this.marginMin - this.marginMax;
            case "maxsize":
                return this.get("fitsize") - 2 * this.cb - this.p1 - this.p2;
            case "opos":
                return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);
            case "osize":
                return this.get("wsize") + (this.exp.outline ? 2 * this.exp.outline.offset : 0);
            case "imgPad":
                return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0
        }
    }, calcBorders:function () {
        this.cb = (this.exp.content["offset" + this.ucwh] - this.t) / 2;
        this.marginMax = hs["margin" + this.ucrb]
    }, calcThumb:function () {
        this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : this.exp.el["offset" + this.ucwh];
        this.tpos = this.exp.tpos[this.dim];
        this.tb = (this.exp.el["offset" + this.ucwh] - this.t) / 2;
        if (this.tpos == 0 || this.tpos == -1)this.tpos = hs.page[this.wh] / 2 + hs.page["scroll" + this.uclt]
    }, calcExpanded:function () {
        var a = this.exp;
        this.justify = "auto";
        if (a.align == "center")this.justify = "center"; else if (RegExp(this.lt).test(a.anchor))this.justify = null; else if (RegExp(this.rb).test(a.anchor))this.justify = "max";
        this.pos = this.tpos - this.cb + this.tb;
        if (this.maxHeight && this.dim == "x")a.maxWidth = Math.min(a.maxWidth || this.full, a.maxHeight * this.full / a.y.full);
        this.size = Math.min(this.full, a["max" + this.ucwh] || this.full);
        this.minSize = a.allowSizeReduction ?
            Math.min(a["min" + this.ucwh], this.full) : this.full;
        if (a.isImage && a.useBox)this.size = a[this.wh], this.imgSize = this.full;
        if (this.dim == "x" && hs.padToMinWidth)this.minSize = a.minWidth;
        this.target = a["target" + this.dim.toUpperCase()];
        this.marginMin = hs["margin" + this.uclt];
        this.scroll = hs.page["scroll" + this.uclt];
        this.clientSize = hs.page[this.wh]
    }, setSize:function (a) {
        var b = this.exp;
        b.isImage && (b.useBox || hs.padToMinWidth) ? (this.imgSize = a, this.size = Math.max(this.size, this.imgSize), b.content.style[this.lt] = this.get("imgPad") +
            "px") : this.size = a;
        b.content.style[this.wh] = a + "px";
        b.wrapper.style[this.wh] = this.get("wsize") + "px";
        b.outline && b.outline.setPosition();
        this.dim == "x" && b.overlayBox && b.sizeOverlayBox(true);
        this.dim == "x" && b.slideshow && b.isImage && (a == this.full ? b.slideshow.disable("full-expand") : b.slideshow.enable("full-expand"))
    }, setPos:function (a) {
        this.pos = a;
        this.exp.wrapper.style[this.lt] = a + "px";
        this.exp.outline && this.exp.outline.setPosition()
    }};
    hs.Expander = function (a, b, c, d) {
        var h;
        if (document.readyState && hs.ie && !hs.isReady)hs.addEventListener(document,
            "ready", function () {
                new hs.Expander(a, b, c, d)
            }); else {
            this.a = a;
            this.custom = c;
            this.contentType = d || "image";
            this.isImage = !this.isHtml;
            this.overlays = [];
            this.last = hs.last;
            hs.last = null;
            hs.init();
            for (var e = this.key = hs.expanders.length, f = 0; f < hs.overrides.length; f++) {
                var g = hs.overrides[f];
                this[g] = b && typeof b[g] != "undefined" ? b[g] : hs[g]
            }
            if (!this.src)this.src = a.href;
            g = b && b.thumbnailId ? hs.$(b.thumbnailId) : a;
            h = this.thumb = g.getElementsByTagName("img")[0] || g, g = h;
            this.thumbsUserSetId = g.id || a.id;
            for (f = 0; f < hs.expanders.length; f++)if (hs.expanders[f] &&
                hs.expanders[f].a == a && !(this.last && this.transitions[1] == "crossfade"))return hs.expanders[f].focus(), false;
            if (!hs.allowSimultaneousLoading)for (f = 0; f < hs.expanders.length; f++)hs.expanders[f] && hs.expanders[f].thumb != g && !hs.expanders[f].onLoadStarted && hs.expanders[f].cancelLoading();
            hs.expanders[e] = this;
            !hs.allowMultipleInstances && !hs.upcoming && (hs.expanders[e - 1] && hs.expanders[e - 1].close(), typeof hs.focusKey != "undefined" && hs.expanders[hs.focusKey] && hs.expanders[hs.focusKey].close());
            this.el = g;
            this.tpos =
                this.pageOrigin || hs.getPosition(g);
            hs.getPageSize();
            (this.x = new hs.Dimension(this, "x")).calcThumb();
            (this.y = new hs.Dimension(this, "y")).calcThumb();
            this.wrapper = hs.createElement("div", {id:"highslide-wrapper-" + this.key, className:"highslide-wrapper " + this.wrapperClassName}, {visibility:"hidden", position:"absolute", zIndex:hs.zIndexCounter += 2}, null, true);
            this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMousehandler;
            if (this.contentType == "image" && this.outlineWhileAnimating == 2)this.outlineWhileAnimating =
                0;
            if (!this.outlineType || this.last && this.isImage && this.transitions[1] == "crossfade")this[this.contentType + "Create"](); else if (hs.pendingOutlines[this.outlineType])this.connectOutline(), this[this.contentType + "Create"](); else {
                this.showLoading();
                var i = this;
                new hs.Outline(this.outlineType, function () {
                    i.connectOutline();
                    i[i.contentType + "Create"]()
                })
            }
            return true
        }
    };
    hs.Expander.prototype = {error:function (a) {
        hs.debug ? alert("Line " + a.lineNumber + ": " + a.message) : window.location.href = this.src
    }, connectOutline:function () {
        var a =
            this.outline = hs.pendingOutlines[this.outlineType];
        a.exp = this;
        a.table.style.zIndex = this.wrapper.style.zIndex - 1;
        hs.pendingOutlines[this.outlineType] = null
    }, showLoading:function () {
        if (!this.onLoadStarted && !this.loading) {
            this.loading = hs.loading;
            var a = this;
            this.loading.onclick = function () {
                a.cancelLoading()
            };
            var a = this, b = this.x.get("loadingPos") + "px", c = this.y.get("loadingPos") + "px";
            if (!d && this.last && this.transitions[1] == "crossfade")var d = this.last;
            if (d)b = d.x.get("loadingPosXfade") + "px", c = d.y.get("loadingPosXfade") +
                "px", this.loading.style.zIndex = hs.zIndexCounter++;
            setTimeout(function () {
                a.loading && hs.setStyles(a.loading, {left:b, top:c, zIndex:hs.zIndexCounter++})
            }, 100)
        }
    }, imageCreate:function () {
        var a = this, b = document.createElement("img");
        this.content = b;
        b.onload = function () {
            hs.expanders[a.key] && a.contentLoaded()
        };
        if (hs.blockRightClick)b.oncontextmenu = function () {
            return false
        };
        b.className = "highslide-image";
        hs.setStyles(b, {visibility:"hidden", display:"block", position:"absolute", maxWidth:"9999px", zIndex:3});
        b.title = hs.lang.restoreTitle;
        hs.safari && hs.uaVersion < 525 && hs.container.appendChild(b);
        if (hs.ie && hs.flushImgSize)b.src = null;
        b.src = this.src;
        this.showLoading()
    }, contentLoaded:function () {
        try {
            if (this.content && (this.content.onload = null, !this.onLoadStarted)) {
                this.onLoadStarted = true;
                var a = this.x, b = this.y;
                if (this.loading)hs.setStyles(this.loading, {top:"-9999px"}), this.loading = null;
                a.full = this.content.width;
                b.full = this.content.height;
                hs.setStyles(this.content, {width:a.t + "px", height:b.t + "px"});
                this.wrapper.appendChild(this.content);
                hs.container.appendChild(this.wrapper);
                a.calcBorders();
                b.calcBorders();
                hs.setStyles(this.wrapper, {left:a.tpos + a.tb - a.cb + "px", top:b.tpos + a.tb - b.cb + "px"});
                this.initSlideshow();
                this.getOverlays();
                var c = a.full / b.full;
                a.calcExpanded();
                this.justify(a);
                b.calcExpanded();
                this.justify(b);
                this.overlayBox && this.sizeOverlayBox(0, 1);
                if (this.allowSizeReduction) {
                    this.correctRatio(c);
                    var d = this.slideshow;
                    if (d && this.last && d.controls && d.fixedControls) {
                        var e = d.overlayOptions.position || "", f, g;
                        for (g in hs.oPos)for (a = 0; a < 5; a++)if (f = this[g], e.match(hs.oPos[g][a]) &&
                            (f.pos = this.last[g].pos + (this.last[g].p1 - f.p1) + (this.last[g].size - f.size) * [0, 0, 0.5, 1, 1][a], d.fixedControls == "fit")) {
                            if (f.pos + f.size + f.p1 + f.p2 > f.scroll + f.clientSize - f.marginMax)f.pos = f.scroll + f.clientSize - f.size - f.marginMin - f.marginMax - f.p1 - f.p2;
                            if (f.pos < f.scroll + f.marginMin)f.pos = f.scroll + f.marginMin
                        }
                    }
                    if (this.isImage && this.x.full > (this.x.imgSize || this.x.size))this.createFullExpand(), this.overlays.length == 1 && this.sizeOverlayBox()
                }
                this.show()
            }
        } catch (i) {
            this.error(i)
        }
    }, justify:function (a, b) {
        var c, d =
            a.target, e = a == this.x ? "x" : "y";
        d && d.match(/ /) && (c = d.split(" "), d = c[0]);
        if (d && hs.$(d)) {
            if (a.pos = hs.getPosition(hs.$(d))[e], c && c[1] && c[1].match(/^[-]?[0-9]+px$/) && (a.pos += parseInt(c[1])), a.size < a.minSize)a.size = a.minSize
        } else if (a.justify == "auto" || a.justify == "center") {
            c = false;
            var f = a.exp.allowSizeReduction;
            a.pos = a.justify == "center" ? Math.round(a.scroll + (a.clientSize + a.marginMin - a.marginMax - a.get("wsize")) / 2) : Math.round(a.pos - (a.get("wsize") - a.t) / 2);
            if (a.pos < a.scroll + a.marginMin)a.pos = a.scroll + a.marginMin,
                c = true;
            if (!b && a.size < a.minSize)a.size = a.minSize, f = false;
            if (a.pos + a.get("wsize") > a.scroll + a.clientSize - a.marginMax)if (!b && c && f)a.size = Math.min(a.size, a.get(e == "y" ? "fitsize" : "maxsize")); else if (a.get("wsize") < a.get("fitsize"))a.pos = a.scroll + a.clientSize - a.marginMax - a.get("wsize"); else if (a.pos = a.scroll + a.marginMin, !b && f)a.size = a.get(e == "y" ? "fitsize" : "maxsize");
            if (!b && a.size < a.minSize)a.size = a.minSize, f = false
        } else if (a.justify == "max")a.pos = Math.floor(a.pos - a.size + a.t);
        if (a.pos < a.marginMin)e = a.pos, a.pos =
            a.marginMin, f && !b && (a.size -= a.pos - e)
    }, correctRatio:function (a) {
        var b = this.x, c = this.y, d = false, e = Math.min(b.full, b.size), f = Math.min(c.full, c.size), g = this.useBox || hs.padToMinWidth;
        if (e / f > a) {
            e = f * a;
            if (e < b.minSize)e = b.minSize, f = e / a;
            d = true
        } else e / f < a && (f = e / a, d = true);
        hs.padToMinWidth && b.full < b.minSize ? (b.imgSize = b.full, c.size = c.imgSize = c.full) : this.useBox ? (b.imgSize = e, c.imgSize = f) : (b.size = e, c.size = f);
        d = this.fitOverlayBox(this.useBox ? null : a, d);
        if (g && c.size < c.imgSize)c.imgSize = c.size, b.imgSize = c.size * a;
        if (d ||
            g)b.pos = b.tpos - b.cb + b.tb, b.minSize = b.size, this.justify(b, true), c.pos = c.tpos - c.cb + c.tb, c.minSize = c.size, this.justify(c, true), this.overlayBox && this.sizeOverlayBox()
    }, fitOverlayBox:function (a, b) {
        var c = this.x, d = this.y;
        if (this.overlayBox)for (; d.size > this.minHeight && c.size > this.minWidth && d.get("wsize") > d.get("fitsize");) {
            d.size -= 10;
            if (a)c.size = d.size * a;
            this.sizeOverlayBox(0, 1);
            b = true
        }
        return b
    }, show:function () {
        var a = this.x, b = this.y;
        this.changeSize(1, {wrapper:{width:a.get("wsize"), height:b.get("wsize"), left:a.pos,
            top:b.pos}, content:{left:a.p1 + a.get("imgPad"), top:b.p1 + b.get("imgPad"), width:a.imgSize || a.size, height:b.imgSize || b.size}}, hs.expandDuration)
    }, changeSize:function (a, b, c) {
        var d = this.transitions, e = a ? this.last ? this.last.a : null : hs.upcoming, d = d[1] && e && hs.getParam(e, "transitions")[1] == d[1] ? d[1] : d[0];
        if (this[d] && d != "expand")this[d](a, b); else {
            this.outline && !this.outlineWhileAnimating && (a ? this.outline.setPosition() : this.outline.destroy());
            a || this.destroyOverlays();
            var f = this, g = f.x, i = f.y, d = this.easing;
            a || (d =
                this.easingClose || d);
            e = a ? function () {
                if (f.outline)f.outline.table.style.visibility = "visible";
                setTimeout(function () {
                    f.afterExpand()
                }, 50)
            } : function () {
                f.afterClose()
            };
            a && hs.setStyles(this.wrapper, {width:g.t + "px", height:i.t + "px"});
            this.fadeInOut && (hs.setStyles(this.wrapper, {opacity:a ? 0 : 1}), hs.extend(b.wrapper, {opacity:a}));
            hs.animate(this.wrapper, b.wrapper, {duration:c, easing:d, step:function (b, c) {
                if (f.outline && f.outlineWhileAnimating && c.prop == "top") {
                    var d = a ? c.pos : 1 - c.pos, d = {w:g.t + (g.get("wsize") - g.t) * d,
                        h:i.t + (i.get("wsize") - i.t) * d, x:g.tpos + (g.pos - g.tpos) * d, y:i.tpos + (i.pos - i.tpos) * d};
                    f.outline.setPosition(d, 0, 1)
                }
            }});
            hs.animate(this.content, b.content, c, d, e);
            if (a)this.wrapper.style.visibility = "visible", this.content.style.visibility = "visible", this.a.className += " highslide-active-anchor"
        }
    }, fade:function (a, b) {
        this.outlineWhileAnimating = false;
        var c = this, d = a ? hs.expandDuration : 0;
        if (a)hs.animate(this.wrapper, b.wrapper, 0), hs.setStyles(this.wrapper, {opacity:0, visibility:"visible"}), hs.animate(this.content,
            b.content, 0), this.content.style.visibility = "visible", hs.animate(this.wrapper, {opacity:1}, d, null, function () {
            c.afterExpand()
        });
        if (this.outline) {
            this.outline.table.style.zIndex = this.wrapper.style.zIndex;
            for (var e = a || -1, f = this.outline.offset, g = a ? 3 : f, i = a ? f : 3, j = g; e * j <= e * i; j += e, d += 25)(function () {
                var b = a ? i - j : g - j;
                setTimeout(function () {
                    c.outline.setPosition(0, b, 1)
                }, d)
            })()
        }
        a || setTimeout(function () {
            c.outline && c.outline.destroy(c.preserveContent);
            c.destroyOverlays();
            hs.animate(c.wrapper, {opacity:0}, hs.restoreDuration,
                null, function () {
                    c.afterClose()
                })
        }, d)
    }, crossfade:function (a) {
        if (a) {
            var b = this, c = this.last, d = this.x, e = this.y, f = c.x, g = c.y, i = this.wrapper, j = this.content, l = this.overlayBox;
            hs.removeEventListener(document, "mousemove", hs.draghandler);
            hs.setStyles(j, {width:(d.imgSize || d.size) + "px", height:(e.imgSize || e.size) + "px"});
            if (l)l.style.overflow = "visible";
            if (this.outline = c.outline)this.outline.exp = b;
            c.outline = null;
            var p = hs.createElement("div", {className:"highslide-" + this.contentType}, {position:"absolute", zIndex:4,
                overflow:"hidden", display:"none"}), a = {oldImg:c, newImg:this}, m;
            for (m in a)this[m] = a[m].content.cloneNode(1), hs.setStyles(this[m], {position:"absolute", border:0, visibility:"visible"}), p.appendChild(this[m]);
            i.appendChild(p);
            if (l)l.className = "", i.appendChild(l);
            p.style.display = "";
            c.content.style.display = "none";
            if (hs.safari && hs.uaVersion < 525)this.wrapper.style.visibility = "visible";
            hs.animate(i, {width:d.size}, {duration:hs.transitionDuration, step:function (a, m) {
                var k = m.pos, o = 1 - k, n, h = {}, q = ["pos", "size", "p1",
                    "p2"], r;
                for (r in q)n = q[r], h["x" + n] = Math.round(o * f[n] + k * d[n]), h["y" + n] = Math.round(o * g[n] + k * e[n]), h.ximgSize = Math.round(o * (f.imgSize || f.size) + k * (d.imgSize || d.size)), h.ximgPad = Math.round(o * f.get("imgPad") + k * d.get("imgPad")), h.yimgSize = Math.round(o * (g.imgSize || g.size) + k * (e.imgSize || e.size)), h.yimgPad = Math.round(o * g.get("imgPad") + k * e.get("imgPad"));
                b.outline && b.outline.setPosition({x:h.xpos, y:h.ypos, w:h.xsize + h.xp1 + h.xp2 + 2 * d.cb, h:h.ysize + h.yp1 + h.yp2 + 2 * e.cb});
                c.wrapper.style.clip = "rect(" + (h.ypos - g.pos) +
                    "px, " + (h.xsize + h.xp1 + h.xp2 + h.xpos + 2 * f.cb - f.pos) + "px, " + (h.ysize + h.yp1 + h.yp2 + h.ypos + 2 * g.cb - g.pos) + "px, " + (h.xpos - f.pos) + "px)";
                hs.setStyles(j, {top:h.yp1 + e.get("imgPad") + "px", left:h.xp1 + d.get("imgPad") + "px", marginTop:e.pos - h.ypos + "px", marginLeft:d.pos - h.xpos + "px"});
                hs.setStyles(i, {top:h.ypos + "px", left:h.xpos + "px", width:h.xp1 + h.xp2 + h.xsize + 2 * d.cb + "px", height:h.yp1 + h.yp2 + h.ysize + 2 * e.cb + "px"});
                hs.setStyles(p, {width:(h.ximgSize || h.xsize) + "px", height:(h.yimgSize || h.ysize) + "px", left:h.xp1 + h.ximgPad + "px",
                    top:h.yp1 + h.yimgPad + "px", visibility:"visible"});
                hs.setStyles(b.oldImg, {top:g.pos - h.ypos + g.p1 - h.yp1 + g.get("imgPad") - h.yimgPad + "px", left:f.pos - h.xpos + f.p1 - h.xp1 + f.get("imgPad") - h.ximgPad + "px"});
                hs.setStyles(b.newImg, {opacity:k, top:e.pos - h.ypos + e.p1 - h.yp1 + e.get("imgPad") - h.yimgPad + "px", left:d.pos - h.xpos + d.p1 - h.xp1 + d.get("imgPad") - h.ximgPad + "px"});
                l && hs.setStyles(l, {width:h.xsize + "px", height:h.ysize + "px", left:h.xp1 + d.cb + "px", top:h.yp1 + e.cb + "px"})
            }, complete:function () {
                i.style.visibility = j.style.visibility =
                    "visible";
                j.style.display = "block";
                hs.discardElement(p);
                b.afterExpand();
                c.afterClose();
                b.last = null
            }})
        }
    }, reuseOverlay:function (a) {
        if (!this.last)return false;
        for (var b = 0; b < this.last.overlays.length; b++) {
            var c = hs.$("hsId" + this.last.overlays[b]);
            if (c && c.hsId == a.hsId)return this.genOverlayBox(), c.reuse = this.key, hs.push(this.overlays, this.last.overlays[b]), true
        }
        return false
    }, afterExpand:function () {
        this.isExpanded = true;
        this.focus();
        this.dimmingOpacity && hs.dim(this);
        if (hs.upcoming && hs.upcoming == this.a)hs.upcoming =
            null;
        this.prepareNextOutline();
        var a = hs.page, b = hs.mouse.x + a.scrollLeft, a = hs.mouse.y + a.scrollTop;
        this.mouseIsOver = this.x.pos < b && b < this.x.pos + this.x.get("wsize") && this.y.pos < a && a < this.y.pos + this.y.get("wsize");
        this.overlayBox && this.showOverlays()
    }, prepareNextOutline:function () {
        new hs.Outline(this.outlineType)
    }, getAdjacentAnchor:function (a) {
        var b = this.getAnchorIndex(), c = hs.anchors.groups[this.slideshowGroup || "none"];
        if (c && !c[b + a] && this.slideshow && this.slideshow.repeat)if (a == 1)return c[0]; else if (a == -1)return c[c.length - 1];
        return c && c[b + a] || null
    }, getAnchorIndex:function () {
        var a = hs.getAnchors().groups[this.slideshowGroup || "none"];
        if (a)for (var b = 0; b < a.length; b++)if (a[b] == this.a)return b;
        return null
    }, getNumber:function () {
        if (this[this.numberPosition]) {
            var a = hs.anchors.groups[this.slideshowGroup || "none"];
            if (a)this[this.numberPosition].innerHTML = '<div class="highslide-number">' + hs.lang.number.replace("%1", this.getAnchorIndex() + 1).replace("%2", a.length) + "</div>" + this[this.numberPosition].innerHTML
        }
    },
        initSlideshow:function () {
            if (this.last)this.slideshow = this.last.slideshow; else for (var a = 0; a < hs.slideshows.length; a++) {
                var b = hs.slideshows[a], c = b.slideshowGroup;
                if (typeof c == "undefined" || c === null || c === this.slideshowGroup)this.slideshow = new hs.Slideshow(this.key, b)
            }
            if (b = this.slideshow) {
                var d = b.expKey = this.key;
                b.checkFirstAndLast();
                b.disable("full-expand");
                b.controls && this.createOverlay(hs.extend(b.overlayOptions || {}, {overlayId:b.controls, hsId:"controls", zIndex:5}));
                !this.last && this.autoplay && b.play(true);
                if (b.autoplay)b.autoplay = setTimeout(function () {
                    hs.next(d)
                }, b.interval || 500)
            }
        }, cancelLoading:function () {
            hs.discardElement(this.wrapper);
            hs.expanders[this.key] = null;
            if (hs.upcoming == this.a)hs.upcoming = null;
            hs.undim(this.key);
            if (this.loading)hs.loading.style.left = "-9999px"
        }, writeCredits:function () {
            if (!this.credits)this.credits = hs.createElement("a", {href:hs.creditsHref, target:hs.creditsTarget, className:"highslide-credits", innerHTML:hs.lang.creditsText, title:hs.lang.creditsTitle}), this.createOverlay({overlayId:this.credits,
                position:this.creditsPosition || "top left", hsId:"credits"})
        }, getInline:function (a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c], e = null;
                !this[d + "Id"] && this.thumbsUserSetId && (this[d + "Id"] = d + "-for-" + this.thumbsUserSetId);
                this[d + "Id"] && (this[d] = hs.getNode(this[d + "Id"]));
                if (!this[d] && !this[d + "Text"] && this[d + "Eval"])try {
                    e = eval(this[d + "Eval"])
                } catch (f) {
                }
                !this[d] && this[d + "Text"] && (e = this[d + "Text"]);
                if (!this[d] && !e && (this[d] = hs.getNode(this.a["_" + d + "Id"]), !this[d]))for (var g = this.a.nextSibling; g && !hs.isHsAnchor(g);) {
                    if (RegExp("highslide-" +
                        d).test(g.className || null)) {
                        if (!g.id)this.a["_" + d + "Id"] = g.id = "hsId" + hs.idCounter++;
                        this[d] = hs.getNode(g.id);
                        break
                    }
                    g = g.nextSibling
                }
                !this[d] && !e && this.numberPosition == d && (e = "\n");
                !this[d] && e && (this[d] = hs.createElement("div", {className:"highslide-" + d, innerHTML:e}));
                if (b && this[d]) {
                    var e = {position:d == "heading" ? "above" : "below"}, i;
                    for (i in this[d + "Overlay"])e[i] = this[d + "Overlay"][i];
                    e.overlayId = this[d];
                    this.createOverlay(e)
                }
            }
        }, focus:function () {
            this.wrapper.style.zIndex = hs.zIndexCounter += 2;
            for (var a = 0; a <
                hs.expanders.length; a++)if (hs.expanders[a] && a == hs.focusKey) {
                var b = hs.expanders[a];
                b.content.className += " highslide-" + b.contentType + "-blur";
                b.content.style.cursor = hs.ieLt7 ? "hand" : "pointer";
                b.content.title = hs.lang.focusTitle
            }
            if (this.outline)this.outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
            this.content.className = "highslide-" + this.contentType;
            this.content.title = hs.lang.restoreTitle;
            if (hs.restoreCursor) {
                hs.styleRestoreCursor = window.opera ? "pointer" : "url(" + hs.graphicsDir + hs.restoreCursor + "), pointer";
                if (hs.ieLt7 && hs.uaVersion < 6)hs.styleRestoreCursor = "hand";
                this.content.style.cursor = hs.styleRestoreCursor
            }
            hs.focusKey = this.key;
            hs.addEventListener(document, window.opera ? "keypress" : "keydown", hs.keyhandler)
        }, moveTo:function (a, b) {
            this.x.setPos(a);
            this.y.setPos(b)
        }, resize:function (a) {
            var b, c = a.width / a.height, a = Math.max(a.width + a.dX, Math.min(this.minWidth, this.x.full));
            if (this.isImage && Math.abs(a - this.x.full) < 12)a = this.x.full;
            b = a / c;
            b < Math.min(this.minHeight, this.y.full) && (b = Math.min(this.minHeight, this.y.full),
                this.isImage && (a = b * c));
            this.resizeTo(a, b)
        }, resizeTo:function (a, b) {
            this.y.setSize(b);
            this.x.setSize(a);
            this.wrapper.style.height = this.y.get("wsize") + "px"
        }, close:function () {
            if (!this.isClosing && this.isExpanded) {
                if (this.transitions[1] == "crossfade" && hs.upcoming)hs.getExpander(hs.upcoming).cancelLoading(), hs.upcoming = null;
                this.isClosing = true;
                this.slideshow && !hs.upcoming && this.slideshow.pause();
                hs.removeEventListener(document, window.opera ? "keypress" : "keydown", hs.keyhandler);
                try {
                    this.content.style.cursor =
                        "default", this.changeSize(0, {wrapper:{width:this.x.t, height:this.y.t, left:this.x.tpos - this.x.cb + this.x.tb, top:this.y.tpos - this.y.cb + this.y.tb}, content:{left:0, top:0, width:this.x.t, height:this.y.t}}, hs.restoreDuration)
                } catch (a) {
                    this.afterClose()
                }
            }
        }, createOverlay:function (a) {
            var b = a.overlayId, c = a.relativeTo == "viewport" && !/panel$/.test(a.position);
            typeof b == "string" && (b = hs.getNode(b));
            a.html && (b = hs.createElement("div", {innerHTML:a.html}));
            if (b && typeof b != "string" && (b.style.display = "block", a.hsId = a.hsId ||
                a.overlayId, !(this.transitions[1] == "crossfade" && this.reuseOverlay(a, b)))) {
                this.genOverlayBox();
                var d = a.width && /^[0-9]+(px|%)$/.test(a.width) ? a.width : "auto";
                /^(left|right)panel$/.test(a.position) && !/^[0-9]+px$/.test(a.width) && (d = "200px");
                d = hs.createElement("div", {id:"hsId" + hs.idCounter++, hsId:a.hsId}, {position:"absolute", visibility:"hidden", width:d, direction:hs.lang.cssDirection || "", opacity:0}, c ? hs.viewport : this.overlayBox, true);
                if (c)d.hsKey = this.key;
                d.appendChild(b);
                hs.extend(d, {opacity:1, offsetX:0,
                    offsetY:0, dur:a.fade === 0 || a.fade === false || a.fade == 2 && hs.ie ? 0 : 250});
                hs.extend(d, a);
                this.gotOverlays && (this.positionOverlay(d), (!d.hideOnMouseOut || this.mouseIsOver) && hs.animate(d, {opacity:d.opacity}, d.dur));
                hs.push(this.overlays, hs.idCounter - 1)
            }
        }, positionOverlay:function (a) {
            var b = a.position || "middle center", c = a.relativeTo == "viewport", d = a.offsetX, e = a.offsetY;
            if (c) {
                if (hs.viewport.style.display = "block", a.hsKey = this.key, a.offsetWidth > a.parentNode.offsetWidth)a.style.width = "100%"
            } else a.parentNode != this.overlayBox &&
            this.overlayBox.appendChild(a);
            if (/left$/.test(b))a.style.left = d + "px";
            /center$/.test(b) && hs.setStyles(a, {left:"50%", marginLeft:d - Math.round(a.offsetWidth / 2) + "px"});
            if (/right$/.test(b))a.style.right = -d + "px";
            if (/^leftpanel$/.test(b))hs.setStyles(a, {right:"100%", marginRight:this.x.cb + "px", top:-this.y.cb + "px", bottom:-this.y.cb + "px", overflow:"auto"}), this.x.p1 = a.offsetWidth; else if (/^rightpanel$/.test(b))hs.setStyles(a, {left:"100%", marginLeft:this.x.cb + "px", top:-this.y.cb + "px", bottom:-this.y.cb + "px", overflow:"auto"}),
                this.x.p2 = a.offsetWidth;
            d = a.parentNode.offsetHeight;
            a.style.height = "auto";
            if (c && a.offsetHeight > d)a.style.height = hs.ieLt7 ? d + "px" : "100%";
            if (/^top/.test(b))a.style.top = e + "px";
            /^middle/.test(b) && hs.setStyles(a, {top:"50%", marginTop:e - Math.round(a.offsetHeight / 2) + "px"});
            if (/^bottom/.test(b))a.style.bottom = -e + "px";
            if (/^above$/.test(b))hs.setStyles(a, {left:-this.x.p1 - this.x.cb + "px", right:-this.x.p2 - this.x.cb + "px", bottom:"100%", marginBottom:this.y.cb + "px", width:"auto"}), this.y.p1 = a.offsetHeight; else if (/^below$/.test(b))hs.setStyles(a,
                {position:"relative", left:-this.x.p1 - this.x.cb + "px", right:-this.x.p2 - this.x.cb + "px", top:"100%", marginTop:this.y.cb + "px", width:"auto"}), this.y.p2 = a.offsetHeight, a.style.position = "absolute"
        }, getOverlays:function () {
            this.getInline(["heading", "caption"], true);
            this.getNumber();
            this.heading && this.dragByHeading && (this.heading.className += " highslide-move");
            hs.showCredits && this.writeCredits();
            for (var a = 0; a < hs.overlays.length; a++) {
                var b = hs.overlays[a], c = b.thumbnailId, d = b.slideshowGroup;
                (!c && !d || c && c == this.thumbsUserSetId ||
                    d && d === this.slideshowGroup) && this.createOverlay(b)
            }
            c = [];
            for (a = 0; a < this.overlays.length; a++)b = hs.$("hsId" + this.overlays[a]), /panel$/.test(b.position) ? this.positionOverlay(b) : hs.push(c, b);
            for (a = 0; a < c.length; a++)this.positionOverlay(c[a]);
            this.gotOverlays = true
        }, genOverlayBox:function () {
            if (!this.overlayBox)this.overlayBox = hs.createElement("div", {className:this.wrapperClassName}, {position:"absolute", width:(this.x.size || (this.useBox ? this.width : null) || this.x.full) + "px", height:(this.y.size || this.y.full) +
                "px", visibility:"hidden", overflow:"hidden", zIndex:hs.ie ? 4 : "auto"}, hs.container, true)
        }, sizeOverlayBox:function (a, b) {
            var c = this.overlayBox, d = this.x, e = this.y;
            hs.setStyles(c, {width:d.size + "px", height:e.size + "px"});
            if (a || b)for (var f = 0; f < this.overlays.length; f++) {
                var g = hs.$("hsId" + this.overlays[f]), i = hs.ieLt7 || document.compatMode == "BackCompat";
                if (g && /^(above|below)$/.test(g.position)) {
                    if (i)g.style.width = c.offsetWidth + 2 * d.cb + d.p1 + d.p2 + "px";
                    e[g.position == "above" ? "p1" : "p2"] = g.offsetHeight
                }
                if (g && i && /^(left|right)panel$/.test(g.position))g.style.height =
                    c.offsetHeight + 2 * e.cb + "px"
            }
            a && (hs.setStyles(this.content, {top:e.p1 + "px"}), hs.setStyles(c, {top:e.p1 + e.cb + "px"}))
        }, showOverlays:function () {
            var a = this.overlayBox;
            a.className = "";
            hs.setStyles(a, {top:this.y.p1 + this.y.cb + "px", left:this.x.p1 + this.x.cb + "px", overflow:"visible"});
            if (hs.safari)a.style.visibility = "visible";
            this.wrapper.appendChild(a);
            for (a = 0; a < this.overlays.length; a++) {
                var b = hs.$("hsId" + this.overlays[a]);
                b.style.zIndex = b.zIndex || 4;
                if (!b.hideOnMouseOut || this.mouseIsOver)b.style.visibility = "visible",
                    hs.setStyles(b, {visibility:"visible", display:""}), hs.animate(b, {opacity:b.opacity}, b.dur)
            }
        }, destroyOverlays:function () {
            if (this.overlays.length) {
                if (this.slideshow) {
                    var a = this.slideshow.controls;
                    a && hs.getExpander(a) == this && a.parentNode.removeChild(a)
                }
                for (a = 0; a < this.overlays.length; a++) {
                    var b = hs.$("hsId" + this.overlays[a]);
                    b && b.parentNode == hs.viewport && hs.getExpander(b) == this && hs.discardElement(b)
                }
                hs.discardElement(this.overlayBox)
            }
        }, createFullExpand:function () {
            this.slideshow && this.slideshow.controls ?
                this.slideshow.enable("full-expand") : (this.fullExpandLabel = hs.createElement("a", {href:"javascript:hs.expanders[" + this.key + "].doFullExpand();", title:hs.lang.fullExpandTitle, className:"highslide-full-expand"}), this.createOverlay({overlayId:this.fullExpandLabel, position:hs.fullExpandPosition, hideOnMouseOut:true, opacity:hs.fullExpandOpacity}))
        }, doFullExpand:function () {
            try {
                this.fullExpandLabel && hs.discardElement(this.fullExpandLabel);
                this.focus();
                var a = this.x.size;
                this.resizeTo(this.x.full, this.y.full);
                var b = this.x.pos - (this.x.size - a) / 2;
                if (b < hs.marginLeft)b = hs.marginLeft;
                this.moveTo(b, this.y.pos)
            } catch (c) {
                this.error(c)
            }
        }, afterClose:function () {
            this.a.className = this.a.className.replace("highslide-active-anchor", "");
            this.outline && this.outlineWhileAnimating && this.outline.destroy();
            hs.discardElement(this.wrapper);
            this.destroyOverlays();
            if (!hs.viewport.childNodes.length)hs.viewport.style.display = "none";
            this.dimmingOpacity && hs.undim(this.key);
            hs.expanders[this.key] = null;
            hs.reOrder()
        }};
    hs.Slideshow = function (a, b) {
        hs.dynamicallyUpdateAnchors !== false && hs.updateAnchors();
        this.expKey = a;
        for (var c in b)this[c] = b[c];
        this.useControls && this.getControls()
    };
    hs.Slideshow.prototype = {getControls:function () {
        this.controls = hs.createElement("div", {innerHTML:hs.replaceLang(hs.skin.controls)}, null, hs.container);
        var a = "play,pause,previous,next,move,full-expand,close".split(",");
        this.btn = {};
        for (var b = 0; b < a.length; b++)this.btn[a[b]] = hs.getElementByClass(this.controls, "li", "highslide-" + a[b]), this.enable(a[b]);
        this.btn.pause.style.display =
            "none"
    }, checkFirstAndLast:function () {
        if (!this.repeat && this.controls) {
            var a = hs.expanders[this.expKey], b = a.getAnchorIndex(), c = /disabled$/;
            b == 0 ? this.disable("previous") : c.test(this.btn.previous.getElementsByTagName("a")[0].className) && this.enable("previous");
            b + 1 == hs.anchors.groups[a.slideshowGroup || "none"].length ? (this.disable("next"), this.disable("play")) : c.test(this.btn.next.getElementsByTagName("a")[0].className) && (this.enable("next"), this.enable("play"))
        }
    }, enable:function (a) {
        if (this.btn) {
            var b = this,
                c = this.btn[a].getElementsByTagName("a")[0], d = /disabled$/;
            c.onclick = function () {
                b[a]();
                return false
            };
            if (d.test(c.className))c.className = c.className.replace(d, "")
        }
    }, disable:function (a) {
        if (this.btn)a = this.btn[a].getElementsByTagName("a")[0], a.onclick = function () {
            return false
        }, /disabled$/.test(a.className) || (a.className += " disabled")
    }, hitSpace:function () {
        this.autoplay ? this.pause() : this.play()
    }, play:function (a) {
        if (this.btn)this.btn.play.style.display = "none", this.btn.pause.style.display = "";
        this.autoplay =
            true;
        a || hs.next(this.expKey)
    }, pause:function () {
        if (this.btn)this.btn.pause.style.display = "none", this.btn.play.style.display = "";
        clearTimeout(this.autoplay);
        this.autoplay = null
    }, previous:function () {
        this.pause();
        hs.previous(this.btn.previous)
    }, next:function () {
        this.pause();
        hs.next(this.btn.next)
    }, move:function () {
    }, "full-expand":function () {
        hs.getExpander().doFullExpand()
    }, close:function () {
        hs.close(this.btn.close)
    }};
    hs.langDefaults = hs.lang;
    var HsExpander = hs.Expander;
    hs.ie && window == window.top && function () {
        try {
            document.documentElement.doScroll("left")
        } catch (a) {
            setTimeout(arguments.callee,
                50);
            return
        }
        hs.ready()
    }();
    hs.addEventListener(document, "DOMContentLoaded", hs.ready);
    hs.addEventListener(window, "load", hs.ready);
    hs.addEventListener(document, "ready", function () {
        if (hs.expandCursor || hs.dimmingOpacity) {
            var a = hs.createElement("style", {type:"text/css"}, null, document.getElementsByTagName("HEAD")[0]), b = function (b, c) {
                if (hs.ie && hs.uaVersion < 9) {
                    var f = document.styleSheets[document.styleSheets.length - 1];
                    typeof f.addRule == "object" && f.addRule(b, c)
                } else a.appendChild(document.createTextNode(b + " {" +
                    c + "}"))
            }, c = function (a) {
                return"expression( ( ( ignoreMe = document.documentElement." + a + " ? document.documentElement." + a + " : document.body." + a + " ) ) + 'px' );"
            };
            hs.expandCursor && b(".highslide img", "cursor: url(" + hs.graphicsDir + hs.expandCursor + "), pointer !important;");
            b(".highslide-viewport-size", hs.ie && (hs.uaVersion < 7 || document.compatMode == "BackCompat") ? "position: absolute; left:" + c("scrollLeft") + "top:" + c("scrollTop") + "width:" + c("clientWidth") + "height:" + c("clientHeight") : "position: fixed; width: 100%; height: 100%; left: 0; top: 0")
        }
    });
    hs.addEventListener(window, "resize", function () {
        hs.getPageSize();
        if (hs.viewport)for (var a = 0; a < hs.viewport.childNodes.length; a++) {
            var b = hs.viewport.childNodes[a];
            hs.getExpander(b).positionOverlay(b)
        }
    });
    hs.addEventListener(document, "mousemove", function (a) {
        hs.mouse = {x:a.clientX, y:a.clientY}
    });
    hs.addEventListener(document, "mousedown", hs.mouseClickhandler);
    hs.addEventListener(document, "mouseup", hs.mouseClickhandler);
    hs.addEventListener(document, "ready", hs.getAnchors)
}
;