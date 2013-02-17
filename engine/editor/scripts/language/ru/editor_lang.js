LanguageDirectory = "ru";
function getTxt(s) {
    switch (s) {
        case "Save":
            return"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c";
        case "Preview":
            return"\u041f\u0440\u0435\u0434\u043e\u0441\u043c\u043e\u0442\u0440";
        case "Full Screen":
            return"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c";
        case "Search":
            return"\u041f\u043e\u0438\u0441\u043a";
        case "Check Spelling":
            return"\u0413\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0430";
        case "Text Formatting":
            return"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430";
        case "List Formatting":
            return"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430";
        case "Paragraph Formatting":
            return"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0430";
        case "Styles":
            return"\u0421\u0442\u0438\u043b\u0438";
        case "Custom CSS":
            return"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 CSS";
        case "Styles & Formatting":
            return"\u0421\u0442\u0438\u043b\u0438 \u0438 \u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435";
        case "Style Selection":
            return"\u0412\u044b\u0431\u043e\u0440 \u0441\u0442\u0438\u043b\u044f";
        case "Paragraph":
            return"\u041f\u0430\u0440\u0430\u0433\u0440\u0430\u0444";
        case "Font Name":
            return"\u0418\u043c\u044f \u0448\u0440\u0438\u0444\u0442\u0430";
        case "Font Size":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430";
        case "Cut":
            return"\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c";
        case "Copy":
            return"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c";
        case "Paste":
            return"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c";
        case "Undo":
            return"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c";
        case "Redo":
            return"\u0412\u0435\u0440\u043d\u0443\u0442\u044c";
        case "Bold":
            return"\u041f\u043e\u043b\u0443\u0436\u0438\u0440\u043d\u044b\u0439";
        case "Italic":
            return"\u041a\u0443\u0440\u0441\u0438\u0432";
        case "Underline":
            return"\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435";
        case "Strikethrough":
            return"\u041f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435";
        case "Superscript":
            return"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441";
        case "Subscript":
            return"\u041d\u0438\u0436\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441";
        case "Justify Left":
            return"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e";
        case "Justify Center":
            return"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443";
        case "Justify Right":
            return"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0435 \u043f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e";
        case "Justify Full":
            return"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435";
        case "Numbering":
            return"\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a";
        case "Bullets":
            return"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a";
        case "Indent":
            return"\u041e\u0442\u0441\u0442\u0443\u043f";
        case "Outdent":
            return"\u0412\u044b\u0441\u0442\u0443\u043f";
        case "Left To Right":
            return"\u0421\u043b\u0435\u0432\u0430 \u043d\u0430 \u043f\u0440\u0430\u0432\u043e";
        case "Right To Left":
            return"\u0421 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u043b\u0435\u0432\u043e";
        case "Foreground Color":
            return"\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430";
        case "Background Color":
            return"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430";
        case "Hyperlink":
            return"\u0421\u0441\u044b\u043b\u043a\u0430";
        case "Bookmark":
            return"\u042f\u043a\u043e\u0440\u044c";
        case "Special Characters":
            return"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b";
        case "Image":
            return"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f";
        case "Flash":
            return"\u0424\u043b\u044d\u0448";
        case "YoutubeVideo":
            return"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0432\u0438\u0434\u0435\u043e \u0441 Youtube";
        case "Media":
            return"\u041c\u0435\u0434\u0438\u0430\u043a\u043e\u043d\u0442\u0435\u043d\u0442";
        case "Content Block":
            return"\u0411\u043b\u043e\u043a";
        case "Internal Link":
            return"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0441\u0441\u044b\u043b\u043a\u0430";
        case "Internal Image":
            return"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435";
        case "Object":
            return"\u041e\u0431\u044a\u0435\u043a\u0442";
        case "Insert Table":
            return"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443";
        case "Table Size":
            return"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b";
        case "Edit Table":
            return"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b";
        case "Edit Cell":
            return"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b";
        case "Table":
            return"\u0422\u0430\u0431\u043b\u0438\u0446\u0430";
        case "AutoTable":
            return"\u0410\u0432\u0442\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b";
        case "Border & Shading":
            return"Border & Shading";
        case "Show/Hide Guidelines":
            return"Show/Hide Guidelines";
        case "Absolute":
            return"Absolute";
        case "Paste from Word":
            return"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437 Word";
        case "Line":
            return"\u041b\u0438\u043d\u0438\u044f";
        case "Form Editor":
            return"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c";
        case "Form":
            return"\u0424\u043e\u0440\u043c\u0430";
        case "Text Field":
            return"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0442\u0435\u043a\u0441\u0442\u0430";
        case "List":
            return"List";
        case "Checkbox":
            return"Checkbox";
        case "Radio Button":
            return"Radio Button";
        case "Hidden Field":
            return"Hidden Field";
        case "File Field":
            return"File Field";
        case "Button":
            return"Button";
        case "Clean":
            return"Clean";
        case "View/Edit Source":
            return"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430";
        case "Tag Selector":
            return"\u0412\u044b\u0431\u043e\u0440 \u0442\u0435\u0433\u043e\u0432";
        case "Clear All":
            return"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435";
        case "Tags":
            return"\u0422\u0435\u0433\u0438";
        case "Fonts":
            return"\u0412\u044b\u0431\u043e\u0440 \u0448\u0440\u0438\u0444\u0442\u0430";
        case "Text":
            return"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0442\u0435\u043a\u0441\u0442\u0430";
        case "Link":
            return"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u0441\u044b\u043b\u043a\u0438";
        case "Heading 1":
            return"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1";
        case "Heading 2":
            return"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2";
        case "Heading 3":
            return"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3";
        case "Heading 4":
            return"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4";
        case "Heading 5":
            return"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 5";
        case "Heading 6":
            return"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 6";
        case "Preformatted":
            return"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439";
        case "Normal (P)":
            return"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 (P)";
        case "Normal (DIV)":
            return"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 (DIV)";
        case "Size 1":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 1";
        case "Size 2":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 2";
        case "Size 3":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 3";
        case "Size 4":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 4";
        case "Size 5":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 5";
        case "Size 6":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 6";
        case "Size 7":
            return"\u0420\u0430\u0437\u043c\u0435\u0440 7";
        case "Are you sure you wish to delete all contents?":
            return"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442?";
        case "Remove Tag":
            return"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u0433";
        case "Custom Colors":
            return"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0446\u0432\u0435\u0442";
        case "More Colors...":
            return"\u0411\u043e\u043b\u044c\u0448\u0435 \u0446\u0432\u0435\u0442\u043e\u0432...";
        case "Box Formatting":
            return"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u043e\u043a\u0430";
        case "Advanced Table Insert":
            return"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b";
        case "Edit Table/Cell":
            return"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b/\u0441\u0442\u043e\u043b\u0431\u0446\u0430";
        case "Print":
            return"\u041f\u0435\u0447\u0430\u0442\u044c";
        case "Paste Text":
            return"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u043a \u0442\u0435\u043a\u0441\u0442";
        case "CSS Builder":
            return"\u041c\u0430\u0441\u0442\u0435\u0440 CSS";
        case "Remove Formatting":
            return"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435";
        case "Table Dimension Text":
            return"\u0422\u0430\u0431\u043b\u0438\u0446\u0430";
        case "Table Advance Link":
            return"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e";
        case "Search & Replace":
            return "\u041f\u043e\u0438\u0441\u043a \u0438 \u0437\u0430\u043c\u0435\u043d\u0430";
        case "HTML Editor":
            return "\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430";
        case "PasteWarning":
            return "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443 (CTRL-V).";
        default:
            return""
    }
}
;