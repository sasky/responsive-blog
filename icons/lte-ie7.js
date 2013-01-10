/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconMoon_sasky_11_12\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe000;',
			'icon-feed' : '&#xe001;',
			'icon-wordpress' : '&#xe002;',
			'icon-github' : '&#xe003;',
			'icon-vimeo' : '&#xe004;',
			'icon-phone' : '&#xe005;',
			'icon-skype' : '&#xe006;',
			'icon-html5' : '&#xe007;',
			'icon-list' : '&#xe008;',
			'icon-envelope' : '&#xe009;',
			'icon-search' : '&#xe00a;',
			'icon-arrow-left' : '&#xe00b;',
			'icon-arrow-right' : '&#xe00c;',
			'icon-arrow-left-2' : '&#xe00d;',
			'icon-arrow-right-2' : '&#xe00e;',
			'icon-arrow-right-3' : '&#xe00f;',
			'icon-arrow-left-3' : '&#xe010;',
			'icon-list-2' : '&#xe011;',
			'icon-facebook' : '&#xe012;',
			'icon-rss-alt' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};