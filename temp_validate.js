const fs = require('fs');
const path = 'C:/Users/שאול/Documents/Gacha-system/index.html';
const html = fs.readFileSync(path, 'utf8');
const scriptRe = new RegExp('<script[^>]*>([\\s\\S]*?)<\\/script>', 'gi');
const vm = require('vm');
let m, i = 0, failed = false;
while ((m = scriptRe.exec(html)) !== null) {
  i++;
  try {
    new vm.Script(m[1], { filename: 'script-' + i + '.js' });
  } catch (e) {
    console.log('SCRIPT', i, 'ERROR', e.message);
    const start = Math.max(0, m.index - 80);
    console.log(html.slice(start, Math.min(html.length, m.index + 160)));
    failed = true;
    break;
  }
}
if (!failed) console.log('All script blocks parse');
