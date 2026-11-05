import {lexicon,lexiconSources} from './lexicon-data.js?v=20261105-lexicon';
import {partsOf,signInfo,normalise} from './text.js';
import {tablets} from './data.js?v=20261105-lexicon';
import {tabletRoute} from './reader-state.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
const text={ru:{title:'Микенско-греческий словарь',intro:'Засвидетельствованные слоговые написания и их позднейшие греческие параллели. Реконструированное чтение, значение в контексте и словарная форма показаны отдельно.',search:'Микенское слово, греческая форма или значение',kind:'Раздел',all:'Все разделы',word:'Слова',place:'Топонимы',name:'Имена людей и божеств',count:'статей',none:'По этому запросу статей нет.',reset:'Очистить поиск',forms:'Слоговое написание → реконструкция → позднейшая параллель',back:'К словарю',reading:'Реконструированное чтение',later:'Позднейшая греческая параллель',meaning:'Значение / идентификация',context:'Пояснение',ambiguous:'Несколько чтений: нужен контекст',identified:'Сопоставление в указанной научной литературе',evidence:'Свидетельства и источники',inCorpus:'В табличках этой подборки',notInCorpus:'В текущей подборке нет точного вхождения этого написания. Свидетельства см. в научном источнике выше.',line:'строка',policy:'Подборка не исчерпывает микенскую лексику. Позднейшая форма может быть словарной леммой, тогда как микенское написание — падежной формой. Одинаковое имя не доказывает тождества людей; историческое значение титула может меняться.',sourceTitle:'Источники словаря',missing:'Статья не найдена'},en:{title:'Mycenaean–Greek lexicon',intro:'Attested syllabic spellings and their later Greek comparisons. Reconstructed readings, contextual meanings and dictionary headwords are presented separately.',search:'Mycenaean spelling, Greek form or meaning',kind:'Category',all:'All categories',word:'Words',place:'Place names',name:'Personal and divine names',count:'entries',none:'No entries match this search.',reset:'Clear search',forms:'Syllabic spelling → reconstruction → later comparison',back:'Back to lexicon',reading:'Reconstructed reading',later:'Later Greek comparison',meaning:'Meaning / identification',context:'Commentary',ambiguous:'Multiple readings: context required',identified:'Comparison supported by the cited scholarship',evidence:'Evidence and sources',inCorpus:'In this tablet collection',notInCorpus:'No exact occurrence of this spelling appears in the current collection. Consult the scholarly evidence above.',line:'line',policy:'This selection does not exhaust the Mycenaean lexicon. A later form may be a dictionary headword while the attested Mycenaean spelling is inflected. Shared names do not identify individuals; the meaning of a title may change over time.',sourceTitle:'Lexicon sources',missing:'Entry not found'}};
let query='',category='';
export const searchKey=s=>normalise(s).toLowerCase().replaceAll('ς','σ').replace(/[-\s]+/g,'');
export function findEntries(q='',kind=''){
 const key=searchKey(q);
 return lexicon.filter(e=>(!kind||e.kind===kind)&&searchKey([e.spelling,e.form,e.greek,e.meaning.en,e.meaning.ru,...(e.aliases||[])].join(' ')).includes(key));
}
export function corpusOccurrences(entry){return tablets.flatMap(d=>d.entries.filter(e=>normalise(e.raw)===entry.spelling).map(e=>({tablet:d.id,code:d.code,line:e.line,index:e.index})));}
const glyphs=e=>partsOf(e.spelling).map(p=>signInfo(p).glyph).join('');
export function renderLexicon(main,language,id){
 const t=text[language];
 if(id){
  const e=lexicon.find(row=>row.id===id);
  if(!e){main.innerHTML=`<h1>${t.missing}</h1><a href="#/dictionary">${t.back}</a>`;return;}
  document.title=e.spelling+' · '+t.title;
  const occurrences=corpusOccurrences(e);
  main.innerHTML=`<a class="back" href="#/dictionary">← ${t.back}</a><article class="lexicon-entry content-column"><h1>${esc(e.spelling)}</h1><p class="lexicon-glyphs" aria-label="${esc(e.spelling)}">${glyphs(e)}</p><p class="scope">${t[e.kind]} · ${t[e.status==='ambiguous'?'ambiguous':'identified']}</p><dl class="lexicon-definitions"><div><dt>${t.reading}</dt><dd lang="grc-Latn">${esc(e.form)}</dd></div><div><dt>${t.later}</dt><dd lang="grc">${esc(e.greek)}</dd></div><div><dt>${t.meaning}</dt><dd>${esc(e.meaning[language])}</dd></div></dl>${e.note?`<h2>${t.context}</h2><p>${esc(e.note[language])}</p>`:''}<h2>${t.evidence}</h2>${e.attestation?`<p>${esc(e.attestation)}</p>`:''}${e.sources.map(id=>{const s=lexiconSources.find(s=>s.id===id);return `<section class="reference"><h3>${link(s.url,s.title)}</h3><p class="scope">${esc(s.detail)}</p></section>`}).join('')}<h2>${t.inCorpus}</h2>${occurrences.length?occurrences.map(o=>`<p><a href="#${tabletRoute(o.tablet,o.index)}">${o.code} · ${t.line} ${esc(o.line)} →</a></p>`).join(''):`<p class="scope">${t.notInCorpus}</p>`}<p class="scope">${t.policy}</p></article>`;
  return;
 }
 document.title=t.title+' · Linear B Reader';
 main.innerHTML=`<div class="intro"><div><h1>${t.title}</h1><p>${t.intro}</p></div><p class="scope">${lexicon.length} · ${t.count}</p></div><div class="toolbar"><label class="field search">${t.search}<input type="search" id="lexicon-query" value="${esc(query)}" autocomplete="off"></label><label class="field">${t.kind}<select id="lexicon-category"><option value="">${t.all}</option>${['word','place','name'].map(k=>`<option value="${k}" ${k===category?'selected':''}>${t[k]}</option>`).join('')}</select></label></div><p class="scope">${t.forms}</p><p class="result-count" role="status" id="lexicon-count"></p><div class="lexicon-list"></div><p class="notice">${t.policy}</p><p><a href="#/sources">${t.sourceTitle} →</a></p>`;
 function update(){
  const entries=findEntries(query,category);
  main.querySelector('#lexicon-count').textContent=`${entries.length} / ${lexicon.length} · ${t.count}`;
  main.querySelector('.lexicon-list').innerHTML=entries.length?entries.map(e=>`<a class="lexicon-row" href="#/dictionary/${e.id}"><div><h2>${esc(e.spelling)}</h2><span class="scope">${t[e.kind]}</span></div><div><span lang="grc-Latn">${esc(e.form)}</span><span class="lexicon-greek" lang="grc">${esc(e.greek)}</span></div><div><p>${esc(e.meaning[language])}</p>${e.status==='ambiguous'?`<span class="scope">${t.ambiguous}</span>`:''}</div></a>`).join(''):`<p class="empty">${t.none}<br><button class="text-button" id="lexicon-reset">${t.reset}</button></p>`;
  main.querySelector('#lexicon-reset')?.addEventListener('click',()=>{query='';category='';renderLexicon(main,language)});
 }
 main.querySelector('#lexicon-query').addEventListener('input',event=>{query=event.target.value;update()});
 main.querySelector('#lexicon-category').addEventListener('change',event=>{category=event.target.value;update()});
 update();
}
export function renderLexiconSources(language){return `<h2>${text[language].sourceTitle}</h2>${lexiconSources.map(s=>`<section class="reference"><h3>${link(s.url,s.title)}</h3><p>${esc(s.detail)}</p></section>`).join('')}`;}
