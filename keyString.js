function keyString (e) {
	var ret = '';
	if (e.ctrlKey) ret += 'C-';
	if (e.altKey)  ret += 'M-';
	if (e.metaKey && !e.ctrlKey) ret += 'W-';
	if (e.which == 0) {
		ret += arguments.callee.table1[e.keyCode];
	} else {
		ret += arguments.callee.table2[e.which] || String.fromCharCode(e.which);
	}
	return ret;
}
keyString.table1 = { 9 : "TAB", 27 : "ESC", 33 : "PageUp", 34 : "PageDown", 35 : "End", 36 : "Home", 37 : "Left", 38 : "Up", 39 : "Right", 40 : "Down", 45 : "Insert", 46 : "Delete", 112 : "F1", 113 : "F2", 114 : "F3", 115 : "F4", 116 : "F5", 117 : "F6", 118 : "F7", 119 : "F8", 120 : "F9", 121 : "F10", 122 : "F11", 123 : "F12" };
keyString.table2 = { 8 : "BS", 13 : "RET", 32 : "SPC" };