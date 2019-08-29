'use strict';

const mclr = {
  black: '#000000',
  dark_blue: '#0000AA',
  dark_green: '#00AA00',
  dark_aqua: '#00AAAA',
  dark_red: '#AA0000',
  dark_purple: '#AA00AA',
  gold: '#FFAA00',
  gray: '#AAAAAA',
  dark_gray: '#555555',
  blue: '#5555FF',
  green: '#55FF55',
  aqua: '#55FFFF',
  red: '#FF5555',
  light_purple: '#FF55FF',
  yellow: '#FFFF55',
  white: '#FFFFFF',
}

hexo.extend.tag.register('mctextbox', function (args, content) {
  const currentArgs = {
    defaultFontColor: 'white'
  };
  args.map((arg) => arg.split('=')).forEach((splitArg) => {
    currentArgs[splitArg[0]] = splitArg[1];
  });

  const style = `
    background: rgba(1,1,1,.7);
    padding: 2px 5px;
    border-radius: .2em;
    white-space: pre-wrap;
    line-height: 1.5;
    color: ${mclr[currentArgs.defaultFontColor]};
  `

  content = content.replace(/^[\s\n]+|[\s\n]+$/g, '');
  return `<div style="${style}">${content}</div>`;
}, { ends: true, async: false });
