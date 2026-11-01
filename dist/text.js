import { signs } from './signs.js';
const signMap = new Map(signs.map(s => [s.value, s]));
const symbols = {"*18": {"value": "*18", "number": 18, "glyph": "𐁐", "code": "U+10050", "numeric": true}, "*19": {"value": "*19", "number": 19, "glyph": "𐁑", "code": "U+10051", "numeric": true}, "*22": {"value": "*22", "number": 22, "glyph": "𐁒", "code": "U+10052", "numeric": true}, "*34": {"value": "*34", "number": 34, "glyph": "𐁓", "code": "U+10053", "numeric": true}, "*47": {"value": "*47", "number": 47, "glyph": "𐁔", "code": "U+10054", "numeric": true}, "*49": {"value": "*49", "number": 49, "glyph": "𐁕", "code": "U+10055", "numeric": true}, "*56": {"value": "*56", "number": 56, "glyph": "𐁖", "code": "U+10056", "numeric": true}, "*63": {"value": "*63", "number": 63, "glyph": "𐁗", "code": "U+10057", "numeric": true}, "*64": {"value": "*64", "number": 64, "glyph": "𐁘", "code": "U+10058", "numeric": true}, "*79": {"value": "*79", "number": 79, "glyph": "𐁙", "code": "U+10059", "numeric": true}, "*82": {"value": "*82", "number": 82, "glyph": "𐁚", "code": "U+1005A", "numeric": true}, "*83": {"value": "*83", "number": 83, "glyph": "𐁛", "code": "U+1005B", "numeric": true}, "*86": {"value": "*86", "number": 86, "glyph": "𐁜", "code": "U+1005C", "numeric": true}, "*89": {"value": "*89", "number": 89, "glyph": "𐁝", "code": "U+1005D", "numeric": true}};
const controls = new Set(['vacat','margo','angustum','reliqua','pars','sine','regulis','qs']);
export function normalise(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replaceAll('₂','2').replaceAll('₃','3').replace(/['’]/g,'');
}
export function isWord(text) {
  return !controls.has(text) && /[a-z]/.test(text) && /^[a-z0-9*₂₃\u0323'’\[\]⟦⟧‹›-]+$/u.test(text);
}
export function partsOf(word) { return normalise(word).split('-'); }
export function signInfo(part) {
  const key=part.replace(/[\[\]⟦⟧‹›]/g,'');
  const value=signMap.get(key)||symbols[key];
  if(value) return {...value,uncertain:part!==key};
  return {value:part||'[…] ',number:null,glyph:part||'[…] ',code:'—',uncertain:true};
}
export function prepare(record) {
  const entries=[];
  const lines=record.lines.map(([label,text])=>({label,text,tokens:text.split(/(\s+|,|\/|⸤|⸥)/u).filter(Boolean).map(raw=>{
    if(!isWord(raw)) return {raw};
    const entry={raw,line:label,order:entries.length};entries.push(entry);return {raw,entry};
  })}));
  // Keep the original Ta 709 shared links pointing to its original three words in line 3.
  const preferred=(record.preferred||[]).map(w=>entries.find(e=>e.line===record.preferredLine&&normalise(e.raw)===w));
  const ordered=[...preferred,...entries.filter(e=>!preferred.includes(e))].filter(Boolean);
  ordered.forEach((e,index)=>{e.index=index});
  return {...record,lines,entries:ordered,words:ordered.map(e=>e.raw),source:`https://liber.cnr.it/tablet/view/${record.liber}`};
}
