<?php
if (!defined('XTMCMS')) {
    die("Hacking attempt!");
}
if ($config['allow_comments_wysiwyg'] == 1) {
    if ($user_group[$member_id['user_group']]['allow_url']) $link_icon = "\"LinkDialog\", \"xtmLeech\",";
    else $link_icon = "";
    if ($user_group[$member_id['user_group']]['allow_image']) $link_icon .= "\"ImageDialog\",";
    $wysiwyg = <<<HTML
<style type="text/css">
.wseditor table td { 
	padding:0px;
	border:0;
}
</style>
    <div class="wseditor"><textarea id="comments" name="comments" rows="10" cols="50">{$text}</textarea>
<script type="text/javascript">
    var wscomm = new InnovaEditor("wscomm");
	var use_br = false;
	var use_div = true;
	if ($.browser.mozilla || $.browser.webkit) { use_br = true; use_div = false; }

    wscomm.width = 540;
    wscomm.height = 250;
    wscomm.css = "{$config['http_home_url']}lib/editor/scripts/style/default.css";
    wscomm.useBR = use_br;
    wscomm.useDIV = use_div;
    wscomm.groups = [
			["grpEdit1", "", ["Bold", "Italic", "Underline", "Strikethrough", "ForeColor"]],
			["grpEdit2", "", ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "Bullets", "Numbering"]],
			["grpEdit3", "", [{$link_icon}"xtmSmiles", "xtmQuote", "xtmHide"]]
        ];
    wscomm.arrCustomButtons.push(["xtmSmiles", "modalDialog('{$config['http_home_url']}lib/editor/emotions.php',250,160)", "{$lang['bb_t_emo']}", "btnEmoticons.gif"]);
    wscomm.arrCustomButtons.push(["xtmQuote", "xtmcustomTag('[quote]', '[/quote]')", "{$lang['bb_t_quote']}", "xtm_quote.gif"]);
    wscomm.arrCustomButtons.push(["xtmHide", "xtmcustomTag('[hide]', '[/hide]')", "{$lang['bb_t_hide']}", "xtm_hide.gif"]);
    wscomm.arrCustomButtons.push(["xtmLeech", "xtmcustomTag('[leech=http://]', '[/leech]')", "{$lang['bb_t_leech']}", "xtm_leech.gif"]);

    wscomm.REPLACE("comments");
</script></div>
HTML;
} else {
    if ($user_group[$member_id['user_group']]['allow_url']) $link_icon = "link,xtm_leech,separator,";
    else $link_icon = "";
    if ($user_group[$member_id['user_group']]['allow_image']) $link_icon .= "image,";
    $wysiwyg = <<<HTML

<script type="text/javascript">
$(function(){
	$('#comments').tinymce({
		script_url : '{$config['http_home_url']}lib/editor/jscripts/tiny_mce/tiny_mce_gzip.php',
		theme : "advanced",
		skin : "cirkuit",
		language : "{$lang['wysiwyg_language']}",
		width : "460",
		height : "220",
		plugins : "emotions,inlinepopups",
		relative_urls : false,
		convert_urls : false,
		remove_script_host : false,
		force_p_newlines : false,
		force_br_newlines : true,
		dialog_type : 'window',
		extended_valid_elements : "div[align|class|style|id|title]",

		// Theme options
		theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright, justifyfull,|,bullist,numlist,|,{$link_icon}emotions,xtm_quote,xtm_hide",
		theme_advanced_buttons2 : "",
		theme_advanced_buttons3 : "",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",


		// Example content CSS (should be your site CSS)
		content_css : "{$config['http_home_url']}lib/editor/css/content.css",

		setup : function(ed) {
		        // Add a custom button
			ed.addButton('xtm_quote', {
			title : '{$lang['bb_t_quote']}',
			image : '{$config['http_home_url']}lib/editor/jscripts/tiny_mce/themes/advanced/img/xtm_quote.gif',
			onclick : function() {
				// Add you own code to execute something on click
				ed.execCommand('mceReplaceContent',false,'[quote]' + ed.selection.getContent() + '[/quote]');
			}
	           });

			ed.addButton('xtm_hide', {
			title : '{$lang['bb_t_hide']}',
			image : '{$config['http_home_url']}lib/editor/jscripts/tiny_mce/themes/advanced/img/xtm_hide.gif',
			onclick : function() {
				// Add you own code to execute something on click
				ed.execCommand('mceReplaceContent',false,'[hide]' + ed.selection.getContent() + '[/hide]');
			}
	           });

			ed.addButton('xtm_leech', {
			title : '{$lang['bb_t_leech']}',
			image : '{$config['http_home_url']}lib/editor/jscripts/tiny_mce/themes/advanced/img/xtm_leech.gif',
			onclick : function() {

					ed.execCommand('mceReplaceContent',false,"[leech=http://]{\$selection}[/leech]");

			}
	           });

   		 }


	});
});
</script>
    <textarea id="comments" name="comments" rows="10" cols="50">{$text}</textarea>
HTML;
}
if ($allow_subscribe) $wysiwyg .= "<br /><input type=\"checkbox\" name=\"allow_subscribe\" id=\"allow_subscribe\" value=\"1\" /><label for=\"allow_subscribe\">&nbsp;&nbsp;" . $lang['c_subscribe'] . "</label><br />";
?>