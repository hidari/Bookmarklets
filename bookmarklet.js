/* Format in "Title | URL" */
javascript:var url=location.href;var title=document.title;var linkTag =title + ' | ' + url;var x = prompt('Plain text format',linkTag);
 
/* Markdown format  (Title+URL) */
javascript:var url=location.href;var title=document.title;var linkTag = '[' + title + '](' + url + ')';var x = prompt('Markdown format Link',linkTag);
 
/* reST format (Title+URL) */
javascript:window.prompt('reST format Link', '`' + document.title + ' <' + location.href + '>`_');void(0);
 
/* HTML format (Title+URL) */
javascript:window.prompt('HTML format Link', '<a href=\'' + location.href + '\' target=\'_blank\'>' + document.title + '</a>');void(0);
