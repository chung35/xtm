<?php
if (!defined('XTMCMS')) {
    die("Hacking attempt!");
}
echo <<<HTML
<tr>
	<td width="140" valign="top">
	<br />{$lang['nl_message']}</td>
	<td>
<script type="text/javascript" src="lib/editor/scripts/language/{$lang['wysiwyg_language']}/editor_lang.js"></script>
<script type="text/javascript" src="lib/editor/scripts/innovaeditor.js"></script>
<script type="text/javascript">
jQuery(document).ready(function($){
	create_editor('');
});

function create_editor( root ) {

	var use_br = false;
	var use_div = true;
	if ($.browser.mozilla || $.browser.webkit) { use_br = true; use_div = false; }
	
	oUtil.initializeEditor("wysiwygeditor",  {
		width: "98%", 
		height: "400", 
		css: root + "lib/editor/scripts/style/default.css",
		useBR: use_br,
		useDIV: use_div,
		groups:[
			["grpEdit1", "", ["Bold", "Italic", "Underline", "Strikethrough", "ForeColor", "BackColor", "RemoveFormat"]],
			["grpEdit2", "", ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "Bullets", "Numbering", "Indent", "Outdent"]],
			["grpEdit3", "", ["xtmSmiles", "LinkDialog", "ImageDialog", "FlashDialog", "xtmTypograf"]],
			["grpEdit4", "", ["Undo", "Redo", "SourceDialog"]]
	    ],
		arrCustomButtons:[
			["xtmSmiles", "modalDialog('"+ root +"lib/editor/emotions.php',250,160)", "{$lang['bb_t_emo']}", "btnEmoticons.gif"],
			["xtmTypograf", "tag_typograf()", "{$lang['bb_t_t']}", "xtm_tt.gif"]
		]
		}
	);	
};

function tag_typograf() {

	ShowLoading('');

	var oEditor = oUtil.oEditor;
	var obj = oUtil.obj;

	obj.saveForUndo();
    oEditor.focus();
    obj.setFocus();

	var txt = obj.getXHTMLBody();

	$.post("lib/ajax/typograf.php", {txt: txt}, function(data){
	
		HideLoading('');
	
		obj.loadHTML(data); 
	
	});

};
</script>
    <textarea id="message" name="message" class="wysiwygeditor" style="width:98%;height:300px;"></textarea><br><br>{$lang['nl_info_1']} <b>{$lang['nl_info_2']}</b></td>
	</tr>
HTML;
?>