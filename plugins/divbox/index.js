'use strict';

hexo.extend.tag.register('divbox', function (args, content) {
  var className = args.join(' ');
  return `<div class="${className}">${content}</div>`;
}, { ends: true, async: false });
