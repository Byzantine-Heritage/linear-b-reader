import test from 'node:test';
import assert from 'node:assert/strict';
import {tablets} from '../dist/data.js';
import {signs} from '../dist/signs.js';
import {partsOf,signInfo,normalise} from '../dist/text.js';
test('all preserved syllables resolve; gaps remain explicit',()=>{for(const d of tablets)for(const word of d.words)for(const value of partsOf(word)){const s=signInfo(value);if(!value.replace(/[\[\]]/g,'')){assert.equal(s.number,null);assert.equal(s.code,'—')}else {assert.ok(s.number,`${d.code}: ${value}`);assert.equal([...s.glyph].length,1)}}});
test('reference identifiers and code points are unique',()=>{for(const key of ['value','number','code','glyph'])assert.equal(new Set(signs.map(s=>s[key])).size,signs.length);assert.equal(new Set(tablets.map(d=>d.id)).size,tablets.length)});
test('every record has document-level provenance and transcription',()=>{assert.equal(tablets.length,22);for(const d of tablets){assert.match(d.source,/liber.cnr.it\/tablet\/view\/\d+$/);assert.ok(d.findspot&&d.period&&d.scribe&&d.inventory);assert.ok(d.context.en&&d.context.ru);assert.ok(d.lines.length);if(d.translation)assert.ok(d.translationURL&&d.translationCitation)}});
test('tokenisation preserves the ancient text and all editorial notation',()=>{for(const d of tablets)for(const l of d.lines){assert.equal(l.tokens.map(t=>t.raw).join(''),l.text);for(const t of l.tokens)if(t.entry)assert.equal(d.words[t.entry.index],t.raw)}});
test('original Ta709 links retain their target words',()=>{assert.deepEqual(tablets.find(d=>d.id==='PY-Ta-709').words.slice(0,3),['ti-ri-po','ke-re-si-jo','we-ke'])});
test('subscripts and uncertain dots do not become invented phonetic values',()=>{assert.equal(normalise('a₂-ṛọ'),'a2-ro');assert.equal(signInfo('*34').numeric,true);assert.equal(signInfo('*34').value,'*34');assert.equal(signInfo('[').number,null);assert.equal(tablets.find(d=>d.id==='KH-Gq-5').lines[0].text.includes('ḍẹ'),true)});
test('modern quotation excerpts stay within per-source limits',()=>{const words=s=>s.trim().split(/\s+/).length;assert.ok(tablets.filter(d=>d.quote).reduce((n,d)=>n+words(d.quote),0)<=25);assert.ok(tablets.filter(d=>d.translationCitation==='Mnamon — Linear B').reduce((n,d)=>n+words(d.translation),0)<=25)});

test('Tiryns contains ten clay-tablet records, including unreadable fragments',()=>{const ti=tablets.filter(d=>d.site==='TI');assert.equal(ti.length,10);assert.ok(ti.every(d=>!d.code.includes(' Z')));assert.equal(ti.find(d=>d.id==='TI-Sm-11').words.length,0);assert.equal(ti.find(d=>d.id==='TI-Al-7').lines.length,14)});
