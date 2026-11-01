import test from 'node:test';
import assert from 'node:assert/strict';
import {tablets} from '../dist/data.js';
import {renderEditionRows} from '../dist/edition-view.js';

test('Ta 709 contains all three user-supplied interpretation and translation lines',()=>{
 const d=tablets.find(d=>d.id==='PY-Ta-709');
 assert.equal(d.fullEdition.suppliedByUser,true);
 assert.equal(d.fullEdition.source,d.translationURL);
 for(const key of ['interpretation','translation']){
  assert.deepEqual(d.fullEdition[key].map(([line])=>line),['1','2','3']);
  assert.equal((renderEditionRows(d.fullEdition[key],'en').match(/class="text-line"/g)||[]).length,3);
 }
 assert.match(d.fullEdition.translation[0][1],/shovels 6$/);
 assert.match(d.fullEdition.translation[1][1],/patterns 1$/);
 assert.match(d.fullEdition.translation[2][1],/o-pi-ke-wi-ri-je-u type 1$/);
});
test('published notation is formatted safely without executing text as HTML',()=>{
 const html=renderEditionRows([['1','tork^{w}ideiai *200VAS <script>alert(1)</script>']],'grc-Latn');
 assert.ok(html.includes('tork<sup>w</sup>ideiai *200<sup>VAS</sup>'));
 assert.ok(!html.includes('<script>'));
 assert.ok(html.includes('&lt;script&gt;'));
});
test('other tablets do not acquire an invented full interpretation or translation',()=>{
 assert.ok(tablets.filter(d=>d.id!=='PY-Ta-709').every(d=>d.fullEdition===null));
});
