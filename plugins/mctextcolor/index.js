'use strict';

const mclr = {
  black: '#000000',
  dark_blue: '#0000AA',
  dark_green: '#00AA00',
  dark_aqua: '#00AAAA',
  dark_red: '#AA0000',
  dark_purple: '#AA00AA',
  dark_gray: '#555555',
  gold: '#FFAA00',
  gray: '#AAAAAA',
  blue: '#5555FF',
  green: '#55FF55',
  aqua: '#55FFFF',
  red: '#FF5555',
  purple: '#FF55FF',
  yellow: '#FFFF55',
  white: '#FFFFFF',
}

hexo.extend.tag.register('mclr', function (args, content) {
  var color = mclr[args[0]] || mclr.white;
  return `<span style="color: ${color};">${content}</span>`;
}, { ends: true, async: false });
