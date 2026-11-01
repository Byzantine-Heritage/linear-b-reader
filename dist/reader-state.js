// URL positions are one-based; internal positions are zero-based.
export function readSelection(fragment, words) {
  const params = new URLSearchParams(fragment.split('?')[1] || '');
  function index(key, length) {
    const raw = params.get(key);
    if (!raw || !/^\d+$/.test(raw)) return 0;
    return Math.max(0, Math.min(length - 1, Number(raw) - 1));
  }
  const word = index('word', words.length);
  return { word, sign: index('sign', (words[word]||'').split('-').length) };
}

export function tabletRoute(id, word = 0, sign = 0) {
  return `/tablet/${encodeURIComponent(id)}?word=${word + 1}&sign=${sign + 1}`;
}

export function nextSign(current, key, length) {
  if (key === 'Home') return 0;
  if (key === 'End') return length - 1;
  if (key === 'ArrowLeft') return Math.max(0, current - 1);
  if (key === 'ArrowRight') return Math.min(length - 1, current + 1);
  return null;
}
