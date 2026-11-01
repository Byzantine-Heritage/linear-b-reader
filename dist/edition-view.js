const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderEditionRows(rows, language) {
  return `<div class="edition-lines" lang="${escape(language)}">${rows.map(([line,text])=>`<div class="text-line"><span class="line-label">.${escape(line)}</span><p class="edition-text">${escape(text).replace(/\^\{w\}/g,'<sup>w</sup>').replace(/VAS/g,'<sup>VAS</sup>')}</p></div>`).join('')}</div>`;
}
