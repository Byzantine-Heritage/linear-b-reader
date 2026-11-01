import test from 'node:test';
import assert from 'node:assert/strict';
import {readSelection,tabletRoute,nextSign} from '../dist/reader-state.js';
const words=['ti-ri-po','ke-re-si-jo','we-ke'];
test('reading links round-trip word and sign independently of language',()=>{
 for(let w=0;w<words.length;w++)for(let s=0;s<words[w].split('-').length;s++)
 assert.deepEqual(readSelection('#'+tabletRoute('PY-Ta-709',w,s),words),{word:w,sign:s});
});
test('malformed and out-of-range links cannot select missing signs',()=>{
 assert.deepEqual(readSelection('#/tablet/x?word=999&sign=999',words),{word:2,sign:1});
 for(const v of ['-1','NaN','<script>','1.5',''])
 assert.deepEqual(readSelection('#/tablet/x?word='+v+'&sign='+v,words),{word:0,sign:0});
});
test('keyboard navigation remains within word boundaries',()=>{
 assert.equal(nextSign(0,'ArrowLeft',3),0);
 assert.equal(nextSign(2,'ArrowRight',3),2);
 assert.equal(nextSign(1,'Home',3),0);
 assert.equal(nextSign(0,'End',3),2);
 assert.equal(nextSign(0,'Tab',3),null);
});
