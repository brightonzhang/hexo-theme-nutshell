/**
 * bootstrap-table tag
 *
 * Syntax:
 *   {% bootstraptable [class] %}
 *   table
 *   {% endbootstraptable %}
 */

var marked = require('marked');
hexo.extend.tag.register('bootstraptable', function (args, content) {
	var style;
	if (args.length > 0)
		style = 'table ' + args[0];
	else
		style = 'table';

	var table = marked(content);
	table = table.replace("<table>", '<div class="table-responsive"> <table class="' + style + '">').replace("</table>", '</table></div>');
	// console.log(table);
	return table;
}, {ends: true});