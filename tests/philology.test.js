import test from 'node:test';
import assert from 'node:assert/strict';
import {tablets} from '../dist/data.js';
import {analyses,analysisFor,scholarlySources} from '../dist/philology.js';
import {readingEdition,studyRow,renderStudy} from '../dist/study.js';
test('An657 first-line coverage reuses its published excerpt without claiming a full edition',()=>{
 const d=tablets.find(t=>t.id==='PY-An-657'),e=readingEdition(d);
 assert.equal(d.fullEdition,null);assert.equal(e.complete,false);
 assert.deepEqual(e.interpretation,[['1',d.interpretation]]);
 assert.deepEqual(e.translation,[['1',d.translation]]);
 assert.equal(studyRow(d,'2').translation,undefined);
 assert.match(renderStudy(d,'en'),/line 1 only/);
});
test('hypotheses are separated from grammatical analyses and have specific scholarly references',()=>{
 assert.equal(analyses['pu-ra-u-to-ro'].status,'analysis');
 assert.equal(analyses['a-pe-te-me-ne'].status,'hypothesis');
 assert.equal(analyses['pa-ko-to'].status,'hypothesis');
 for(const a of Object.values(analyses)){assert.ok(a.en&&a.ru);assert.ok(scholarlySources.find(s=>s.id===a.source));}
});
test('commentaries do not silently emend the ancient text or leak to other tablets',()=>{
 const ta=tablets.find(d=>d.id==='PY-Ta-709'),an=tablets.find(d=>d.id==='PY-An-657');
 assert.ok(analysisFor(ta,'a-pe-te-me-ne'));
 assert.equal(analysisFor(an,'a-pe-te-me-ne'),null);
 assert.ok(ta.words.includes('a-pe-te-me-ne'));
 assert.ok(!ta.words.includes('a-pu-te-me-ne'));
});
