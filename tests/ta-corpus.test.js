import test from 'node:test';
import assert from 'node:assert/strict';
import {tablets} from '../dist/data.js';
import {pylosTa} from '../dist/pylos-ta.js';
import {notationGlyph} from '../dist/tablet-drawing.js';
test('the Ta collection contains each of its thirteen edited documents once',()=>{
 const codes=[641,642,707,708,709,710,711,713,714,715,716,721,722];
 assert.deepEqual(tablets.filter(d=>d.id.startsWith('PY-Ta-')).map(d=>Number(d.id.slice(6))).sort((a,b)=>a-b),codes);
 assert.equal(pylosTa.length,10);
 for(const d of pylosTa){assert.equal(d.checked,'2026-11-05');assert.equal(d.scribe,'2');assert.equal(d.period,'LH III B2');}
});
test('expanded records retain erasures, insertions, missing edges and all thirty-two layout entries',()=>{
 assert.equal(pylosTa.reduce((n,d)=>n+d.lines.length,0),32);
 assert.ok(pylosTa.find(d=>d.id==='PY-Ta-707').lines.some(([label])=>label==='1a'));
 assert.deepEqual(pylosTa.find(d=>d.id==='PY-Ta-708').lines.map(([label])=>label),['1','2A','2B']);
 assert.ok(pylosTa.find(d=>d.id==='PY-Ta-708').lines[0][1].includes('⟦'));
 assert.ok(pylosTa.find(d=>d.id==='PY-Ta-722').lines[1][1].startsWith(']'));
});
test('new source codes have exact Unicode mappings without guessed meanings',()=>{
 assert.equal(notationGlyph('*204VAS'),'𐃣');
 assert.equal(notationGlyph('*220'),'𐃄');
 assert.equal(notationGlyph('*232'),'𐃈');
 assert.equal(notationGlyph('*234'),'𐃊');
 assert.equal(notationGlyph('*999'),null);
});
