import test from 'node:test';
import assert from 'node:assert/strict';
import {tablets} from '../dist/data.js';
import {drawingLines,renderDrawing,notationGlyph} from '../dist/tablet-drawing.js';
import {partsOf} from '../dist/text.js';
import {readSelection} from '../dist/reader-state.js';
test('every source line and token reaches the full drawing without truncation',()=>{
 for(const d of tablets){
  const drawing=drawingLines(d),html=renderDrawing(d,0,0);
  assert.deepEqual(drawing.map(l=>l.pieces.map(p=>p.raw).join('')),d.lines.map(l=>l.text));
  assert.equal((html.match(/class="drawing-line"/g)||[]).length,d.lines.length);
  assert.equal((html.match(/data-glyph-word=/g)||[]).length,d.words.reduce((n,w)=>n+partsOf(w).length,0));
  for(const entry of d.entries)assert.ok(html.includes(`data-entry="${entry.index}"`));
 }
});
test('recto and verso are separate, and unreadable fragments remain usable',()=>{
 const tn=renderDrawing(tablets.find(d=>d.id==='PY-Tn-316'),0,0);
 assert.equal((tn.match(/class="tablet-face"/g)||[]).length,2);
 assert.ok(tn.includes('recto')&&tn.includes('verso')&&tn.includes('v.16'));
 const fragment=tablets.find(d=>d.id==='TI-Sm-11');
 assert.deepEqual(readSelection('/tablet/TI-Sm-11',fragment.words),{word:0,sign:0});
 assert.ok(renderDrawing(fragment,0,0).includes('vest.'));
});
test('normalisation keeps damage visible and does not invent composite signs',()=>{
 assert.equal(notationGlyph('128'),'𐄙𐄑𐄎');
 assert.equal(notationGlyph('ROTA'),'𐃏');
 assert.equal(notationGlyph('OLE+PA'),null);
 const html=renderDrawing(tablets.find(d=>d.id==='TI-Ef-3'),0,0);
 assert.ok(html.includes('editorial-mark">['));
 assert.ok(renderDrawing(tablets.find(d=>d.id==='TI-Al-7'),0,0).includes('doubtful'));
});
