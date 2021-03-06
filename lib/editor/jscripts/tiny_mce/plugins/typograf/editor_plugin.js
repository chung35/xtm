(function () {
    tinymce.PluginManager.requireLangPack("typograf");
    tinymce.create('tinymce.plugins.typograf', {getInfo:function () {
        return{longname:'Russian Typograf', author:'Alexandr Shvets', authorurl:'http://drupaldance.com/', infourl:'http://drupaldance.com/russian-typograf-for-tinyMCE', version:'1.0'}
    }, init:function (ed, url) {
        ed.addCommand('mceInsertTypography', function (ui, v) {
            if (ui) {
                editor_text = ed.getContent();
                strip = editor_text.replace(/<&#91;^>&#93;*>/g, "");
                if (strip.length) {
                    ed.windowManager.open({file:url + '/typograf.html', width:700, height:580, scrollbars:'yes', inline:1}, {plugin_url:url, text:editor_text})
                } else {
                    alert('\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u043a\u0441\u0442.')
                }
            } else {
                ed.setContent(v.html)
            }
        });
        ed.addButton('typograf', {title:'typograf.desc', cmd:'mceInsertTypography', image:url + '/img/typograf.gif', ui:true})
    }});
    tinymce.PluginManager.add('typograf', tinymce.plugins.typograf)
})();