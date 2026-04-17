const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const rawAngles = [];
const attrRe = /\b(data-desc|data-name|data-rank|data-type|onclick|style)=((?:"[^"]*"|'[^']*'))/g;
let m;
while ((m = attrRe.exec(html)) !== null) {
  const val = m[2].slice(1, -1);
  if (/</.test(val) || />/.test(val)) {
    rawAngles.push({ attr: m[1], snippet: val.slice(0, 80).replace(/\n/g, ' ') });
  }
}
console.log('rawAngleCount', rawAngles.length);
if (rawAngles.length < 20) console.log(JSON.stringify(rawAngles, null, 2));
