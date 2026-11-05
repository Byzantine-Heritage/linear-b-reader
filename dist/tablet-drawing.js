import {normalise,partsOf,signInfo} from './text.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Unicode normalisations, never tracings of scribal allographs. Complex and
// ambiguous editorial codes remain in Latin rather than inventing a glyph.
const ideograms={VIR:0x10080,MUL:0x10081,GRA:0x1008e,OLE:0x10095,AUR:0x1009b,ARM:0x100ab,ROTA:0x100cf};
const vessels={200:0x100df,201:0x100e0,202:0x100e1,203:0x100e2,204:0x100e3,209:0x100e8,213:0x100ec,214:0x100ed,215:0x100ee,216:0x100ef,228:0x100f7};
export function notationGlyph(raw){
 const clean=normalise(raw),core=clean.replace(/^[\[\]]+|[\[\]]+$/g,'');
 if(/['’]/.test(raw))return null;
 const numbered={'*220':0x100c4,'*232':0x100c8,'*234':0x100ca};
 let glyph=numbered[core]?String.fromCodePoint(numbered[core]):ideograms[core]?String.fromCodePoint(ideograms[core]):null;
 const vessel=core.match(/^\*(\d+)VAS$/);
 if(vessel&&vessels[vessel[1]])glyph=String.fromCodePoint(vessels[vessel[1]]);
 if(/^\d{1,5}$/.test(core)&&+core>0){
  glyph=[...core].map((digit,i)=>digit==='0'?'':String.fromCodePoint(0x10107+(core.length-i-1)*9+Number(digit)-1)).join('');
 }
 if(!glyph)return null;
 return clean.slice(0,clean.indexOf(core))+glyph+clean.slice(clean.indexOf(core)+core.length);
}
export function drawingLines(d){
 return d.lines.map(line=>({...line,pieces:line.tokens.map(token=>token.entry?{...token,signs:partsOf(token.raw).map((part,i)=>({...signInfo(part),original:token.raw.split('-')[i]}))}:{...token,glyph:notationGlyph(token.raw)})}));
}
function renderSign(info){
 if(!info.number)return esc(info.glyph);
 const original=info.original||'';
 const before=(original.match(/^[\[\]⟦⟧‹›'’]+/)||[''])[0];
 const after=(original.match(/[\[\]⟦⟧‹›'’]+$/)||[''])[0];
 return `<span class="editorial-mark">${esc(before)}</span>${esc(info.glyph)}<span class="editorial-mark">${esc(after)}</span>`;
}
export function renderDrawing(d,wordIndex,signIndex){
 const groups=[];
 for(const line of drawingLines(d)){
  const face=line.label.startsWith('r.')?'recto':line.label.startsWith('v.')?'verso':'';
  if(!groups.length||groups.at(-1).face!==face)groups.push({face,lines:[]});
  groups.at(-1).lines.push(line);
 }
 return groups.map(group=>`<div class="tablet-face">${group.face?`<h3 class="face-name">${group.face}</h3>`:''}<div class="sheet-scroll" tabindex="0" aria-label="${esc(d.code+' '+group.face)}"><div class="tablet-sheet"><svg class="sheet-outline" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true"><path d="M31 8 Q120 3 252 6 L472 4 679 6 841 4 Q938 4 970 12 L979 163 968 299 981 443 966 588 Q940 596 837 594 L603 598 391 594 204 597 Q79 597 29 588 L19 414 28 268 18 141 Z"/><path d="M39 12 Q150 7 250 10 M700 10 L837 8 Q928 8 959 16 M955 584 Q917 591 830 590 M36 584 Q80 592 202 592"/></svg><div class="sheet-lines">${group.lines.map(line=>`<div class="drawing-line" data-line="${esc(line.label)}"><span class="drawing-label">${esc(line.label||'—')}</span><div class="drawing-content">${line.pieces.map(token=>token.entry?`<span class="drawing-word" data-entry="${token.entry.index}" title="${esc(token.raw)}">${token.signs.map((info,i)=>`<button type="button" class="sign-button ${!info.number?'unresolved':''} ${/[\u0323]/u.test(info.original)?'doubtful':''}" data-glyph-word="${token.entry.index}" data-index="${i}" aria-label="${esc(token.raw+' · '+info.value)}" aria-pressed="${token.entry.index===wordIndex&&i===signIndex}">${renderSign(info)}</button>`).join('')}</span>`: /^\s+$/.test(token.raw)?' ':`<span class="drawing-notation ${token.glyph?'encoded':'editorial-note'} ${/[\u0323]/u.test(token.raw)?'doubtful':''}" title="${esc(token.raw)}" aria-label="${esc(token.raw)}">${esc(token.glyph||token.raw)}</span>`).join('')}</div></div>`).join('')}</div></div></div></div>`).join('');
}
