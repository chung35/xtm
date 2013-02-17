(function () {
    tinymce.create('tinymce.plugins.EmotionsPlugin', {init:function (ed, url) {
        ed.addCommand('mceEmotion', function () {
            ed.windowManager.open({file:url + '/emotions.php', width:250 + parseInt(ed.getLang('emotions.delta_width', 0)), height:160 + parseInt(ed.getLang('emotions.delta_height', 0)), inline:1}, {plugin_url:url});
        });
        ed.addButton('emotions', {title:'emotions.emotions_desc', cmd:'mceEmotion'});
    }, getInfo:function () {
        return{longname:'Emotions', author:'Moxiecode Systems AB', authorurl:'http://tinymce.moxiecode.com', infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/emotions', version:tinymce.majorVersion + "." + tinymce.minorVersion};
    }});
    tinymce.PluginManager.add('emotions', tinymce.plugins.EmotionsPlugin);
})();