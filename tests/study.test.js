import test from 'node:test';
import assert from 'node:assert/strict';
import {tablets} from '../dist/data.js';
import {studyRow,renderStudy,wordNotes} from '../dist/study.js';
const d=tablets.find(t=>t.id==='PY-Ta-709');
test('each aligned row retains its exact source text and edition label',()=>{
 for(const [label,text] of d.fullEdition.interpretation){
  const row=studyRow(d,label);
  assert.equal(row.interpretation[1],text);
  assert.equal(row.transcript,d.lines.find(l=>l.label===label).text);
  assert.equal(row.translation[1],d.fullEdition.translation.find(r=>r[0]===label)[1]);
 }
 assert.equal(studyRow(d,'missing').interpretation,undefined);
});
test('comparison controls are available only where both editions are supplied',()=>{
 assert.equal((renderStudy(d,'ru').match(/data-study-line=/g)||[]).length,3);
 assert.equal(renderStudy(tablets.find(t=>t.id==='TI-Sm-11'),'en'),'');
});
test('combined and unresolved readings remain explicit in both languages',()=>{
 assert.equal(wordNotes['ke-re-si-jo'].form,wordNotes['we-ke'].form);
 assert.ok(wordNotes['a-pe-te-me-ne'].en.includes('unresolved'));
 for(const note of Object.values(wordNotes))assert.ok(note.ru&&note.en&&note.form);
});
