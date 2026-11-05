import test from 'node:test';
import assert from 'node:assert/strict';
import {lexicon,lexiconSources} from '../dist/lexicon-data.js';
import {findEntries,corpusOccurrences} from '../dist/lexicon.js';
import {partsOf,signInfo} from '../dist/text.js';
import {tablets} from '../dist/data.js';
test('all lexicon spellings resolve to Linear B and have a scholarly comparison',()=>{
 assert.equal(new Set(lexicon.map(e=>e.id)).size,lexicon.length);
 for(const e of lexicon){
  assert.ok(e.greek&&e.form&&e.meaning.ru&&e.meaning.en);
  assert.ok(e.sources.length&&e.sources.every(id=>lexiconSources.some(s=>s.id===id)));
  for(const part of partsOf(e.spelling))assert.ok(signInfo(part).number,`${e.spelling}: ${part}`);
 }
 assert.ok(['word','place','name'].every(kind=>lexicon.some(e=>e.kind===kind)));
});
test('Greek diacritics, final sigma and unhyphenated transliteration do not prevent search',()=>{
 for(const q of ['wanaka','wa-na-ka','wanax','ἄναξ','αναξ'])assert.ok(findEntries(q).some(e=>e.id==='wa-na-ka'));
 assert.ok(findEntries('ΒΑΣΙΛΕΥΣ').some(e=>e.id==='qa-si-re-u'));
 assert.ok(findEntries('khalkeusi').some(e=>e.id==='ka-ke-u-si'));
 assert.ok(findEntries('Pylos','place').some(e=>e.id==='pu-ro'));
 assert.equal(findEntries('Achilles','place').length,0);
 assert.equal(findEntries('zzzzmissing').length,0);
});
test('occurrence links use attested whole spellings and point to the right token',()=>{
 for(const e of lexicon)for(const o of corpusOccurrences(e)){
  const d=tablets.find(t=>t.id===o.tablet);
  assert.equal(d.entries[o.index].line,o.line);
  assert.equal(d.entries[o.index].raw,e.spelling);
 }
 assert.ok(corpusOccurrences(lexicon.find(e=>e.id==='ti-ri-po')).some(o=>o.tablet==='PY-Ta-709'));
 assert.equal(corpusOccurrences(lexicon.find(e=>e.id==='wa-na-ka')).length,0);
});
test('homography, inflection and personal identity are not flattened into certain equivalents',()=>{
 for(const id of ['ke-ra','pa-te'])assert.equal(lexicon.find(e=>e.id===id).status,'ambiguous');
 assert.match(lexicon.find(e=>e.id==='ka-ke-u-si').note.en,/dative plural/);
 for(const e of lexicon.filter(e=>e.kind==='name'&&e.id!=='po-se-da-o-ne'))assert.match(e.note.en,/does not identify/);
});
