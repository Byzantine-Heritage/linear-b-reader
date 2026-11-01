import {editions} from './editions.js';
import {corpus} from './corpus.js?v=20261101-709';
import {prepare} from './text.js?v=20261101-709';
export const sourceURL='https://mnamon.sns.it/index.php?id=20&lang=en&page=Esempi';
export const bibliographyURL='https://mnamon.sns.it/index.php?id=20&lang=en&page=Bibliografia';
const legacyTablets=[
 {id:'PY-Ta-709',code:'PY Ta 709',topic:'inventory',title:{en:'Objects for a banquet',ru:'Предметы для пира'},line:3,words:['ti-ri-po','ke-re-si-jo','we-ke'],interpretation:'tripōs krēsiowergēs',translation:'tripod cauldron of Cretan workmanship of *34-ke-u type 1',scope:{en:'First entry, line 3. The quoted translation includes the vessel type and count beyond the three displayed words.',ru:'Первая запись строки 3. Цитата включает тип сосуда и количество за пределами трёх показанных слов.'},context:{en:'Mnamon relates the Ta inventory to a sacrifice and banquet for the appointment of a high official.',ru:'Mnamon связывает опись Ta с жертвоприношением и пиром по случаю назначения высокого должностного лица.'},parallel:null},
 {id:'PY-An-657',code:'PY An 657',topic:'coast',title:{en:'The coastal guards',ru:'Береговая охрана'},line:1,words:['o-u-ru-to','o-pi-a2-ra','e-pi-ko-wo'],interpretation:'hōs wruntoi opihala epikowoi',translation:'This is how the guards defend the coastal areas.',scope:{en:'Line 1. Both the three displayed words and the published translation cover this line.',ru:'Строка 1. Три показанных слова и опубликованный перевод охватывают эту строку.'},context:{en:'Usually interpreted as a record of coastal defence at Pylos. Mnamon notes uncertainties in names and troop designations elsewhere in the tablet.',ru:'Обычно понимается как запись о береговой обороне Пилоса. Mnamon отмечает неясность имён и обозначений отрядов в других строках.'},parallel:{myc:'wruntoi',later:'rhuomai',en:'Mnamon compares these forms; this is a lexical parallel, not a proposed letter-for-letter equivalence.',ru:'Mnamon сопоставляет эти формы; это лексическая параллель, а не побуквенное соответствие.'}}
];
export const books=[
{author:'Michael Ventris & John Chadwick',year:'1973',title:'Documents in Mycenaean Greek',detail:'2nd edition. Cambridge.'},
{author:'Jean-Pierre Olivier & Maurizio Del Freo',year:'2020',title:'The Pylos Tablets Transcribed',detail:'Deuxième édition. Padova.'},
{author:'Thomas G. Palaima',year:'1988',title:'The Scribes of Pylos',detail:'Roma.'},
{author:'Yves Duhoux & Anna Morpurgo Davies',year:'2008–2014',title:'A Companion to Linear B: Mycenaean Greek Texts and Their World',detail:'Volumes 1–3. Leuven.'}
];

export const translationPDF='https://sites.utexas.edu/scripts/wp-content/uploads/sites/3428/2020/06/2004-TGP-LinearBSources.pdf';
export const tablets=corpus.map(raw=>{
 const d=prepare(raw),old=legacyTablets.find(x=>x.id===d.id);
 return {...d,fullEdition:editions[d.id]||null,line:old?.line||d.lines[0].label,translation:old?.translation||raw.quote||null,
 interpretation:old?.interpretation||null,parallel:old?.parallel||null,
 translationURL:old?sourceURL:(raw.pdfPage?translationPDF+'#page='+raw.pdfPage:null),
 translationCitation:old?'Mnamon — Linear B':raw.pdfPage?`Thomas G. Palaima (2004), Linear B Sources, p. ${raw.translationPage}`:null,
 context:old?.context||{en:'Text and archaeological metadata follow the linked LiBER record.',ru:'Текст и археологические сведения даны по указанной записи LiBER.'}};
});
