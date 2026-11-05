# Linear B Reader

Buildless bilingual reader. `npm run dev` serves http://localhost:5178. `npm run check` checks JavaScript and corpus integrity. Deploy `dist/` as static files.

## Corpus — 5 Nov 2026

32 tablets, 152 labelled text/layout entries (including blank lines, margins and end-of-surface notes), 424 word occurrences. Pylos, Knossos, Khania and Tiryns. Main-text transcriptions follow each linked LiBER record, including preserved uncertain readings and visible gap marks. Critical apparatus, erased undertexts and exact spatial typography are not reproduced. Blank/margin editorial labels are not counted as ancient words.

Source URLs and checked metadata are in `dist/corpus.js` and `dist/tiryns.js`. Ten Tiryns records were checked directly against LiBER on 1 November 2026. Some are genuinely fragmentary or contain no readable syllabic words. `dist/text.js` tokenises the preserved text without deleting editorial notation. Subscript 2/3 and underdots are normalised only for Unicode sign lookup; the displayed transcription retains them. VAS is rendered in superscript. Numerically identified signs retain their numbers. A gap is never assigned a phonetic value.

Modern English quotations total 18 words from Mnamon and 21 words from Thomas G. Palaima (2004), *Linear B Sources*, pp. 439–454, in *Anthology of Classical Myth*. Ten records link to published English translations, using exact PDF pages where available. Ta 641, Ta 642 and the ten Tiryns records currently have transcriptions and provenance but no English translation added. These omissions are visible. No generated translations or invented Greek interpretations are supplied. Palaima's older translation and LiBER's current text can reflect different editorial decisions.

LiBER: Del Freo, M., Di Filippo, F. & Rougemont, F. (2024), *Linear B Electronic Resources*, CNR Edizioni, ISBN 978-88-8080-690-5. Individual educational readings are attributed at document level; no museum photographs or modern critical apparatus are redistributed. The tablet contour is schematic, adapted to whole-document reading in the approved monochrome style, not excavation evidence or a facsimile.

## Functionality

Catalogue search covers the whole corpus, normalising subscripts and underdots for matching. Site, subject and saved-only filters combine. The main drawing displays every surviving main-text line, including logograms, numbers and editorial notes, with separate recto and verso surfaces when labelled. Long lines wrap within the same numbered row. Selecting a syllabic sign changes only the inspector and selection; the whole document stays in view. Selecting a transcription word scrolls to its sign sequence. The full page does not scroll horizontally. Each sign supports pointer/focus preview, click, arrow keys, Home and End. Word/sign selection is encoded in the URL. Original Ta 709 word URLs are preserved.

Signs reference contains 74 named Unicode syllabic characters. Special numeric symbols are resolved separately. LocalStorage holds interface language and saved tablet IDs; no accounts or analytics. External Google Fonts supply OFL fonts; no font binaries are redistributed.

## Design

Approved white plaster, burgundy, Old Standard TT and monochrome engraving. Taste Skill Achromatic ledger principles adapted to scholarly reading; Impeccable Read/Operate hierarchy. Main text spans the reading area, with source labels and no per-word cards.

## Checks

Thirty Node tests verify corpus provenance, preservation of all source tokens in the drawing model, glyph coverage, recto/verso separation, damage marks, numeric normalisation, unreadable fragments, legacy links and keyboard navigation. Browser checks cover all 22 document routes and their expected line/layout counts at 390px, geographic filtering, Russian text, sign selection and arrow navigation. Additional 320px and desktop checks cover the longest records. No whole-page horizontal overflow was observed.

## Argos and Argolis

Jonathan M. Hall, “Argos”, in Paul Cartledge & Paul Christesen (eds), *The Oxford History of the Archaic Greek World*, vol. I (Oxford University Press, 2024), p. 15, explicitly reports no Linear B tablets found at Argos itself. This is attributed to the 2024 survey, not presented as proof that none can ever be found. The collection distinguishes the city of Argos from the Argolid region. The added regional material is from Tiryns. Publisher preview, PDF p. 54, is linked in the catalogue and Sources.

Unicode ideograms and Aegean numbers follow the Consortium's code charts. Only unambiguous mappings are encoded; composite codes, ambiguous logograms and measures remain legible in their source notation. The ancient main text is complete within each checked record; erased undertexts, the critical apparatus and exact palaeographic layout remain external.

## GitHub source snapshot

Imported from the published Sites source commit `02026b0e2763d716ebca1f62af686506f522dccf` on 1 November 2026. The existing Sites publication is independent of this GitHub repository; pushes here do not automatically redeploy the Sites copy. GitHub Pages is published separately by the workflow below. `.openai/hosting.json` identifies the existing private Sites project and contains no credentials.

Run `npm run check` with Node.js 20 or later. Run `npm run dev` with Python 3 installed and visit http://localhost:5178. No dependency installation or build step is required. `dist/` contains the authored static application and is intentionally tracked. Any static host can serve that directory. GitHub Pages publishes `dist/` at https://byzantine-heritage.github.io/linear-b-reader/. The workflow `.github/workflows/pages.yml` checks the corpus before publication on pushes to `codex/import-site`, or when run manually. Only the static site directory is deployed; research notes, tests and hosting configuration remain in the source repository.

The scholarly corpus and linked publications retain their respective rights and attribution. No blanket open-source licence is asserted for third-party materials.

## Reading correction — 1 November 2026

The sign inspector now remains in normal document flow. It scrolls away with the drawing instead of overlapping the full-width transcription and translation sections. Desktop scrolling and narrow-screen layout were checked in the browser.

PY Ta 709 now includes all three numbered lines of the Greek interpretation and English translation supplied by Oleh from Mnamon. `dist/editions.js` records that provenance separately from the original short excerpts; `dist/edition-view.js` renders the line labels and scholarly superscripts safely. The main transcription remains LiBER's text, with an explicit note that its edition and Mnamon's interpretation may differ. Other tablets retain their existing verified excerpts, external links or missing-translation notices. No new interpretations were generated. The earlier 25-word excerpt limits apply to externally retrieved excerpts, not the text supplied directly by the user.

## Guided reading — 2 November 2026

PY Ta 709 now offers a line-by-line comparison of LiBER transcription with the user-supplied Mnamon interpretation and English translation. Line controls are keyboard-accessible buttons. Word selection in either the drawing, full transcription or comparison updates the same selected word and URL. The comparison highlights the corresponding drawing and transcription row. Five attested spellings have bilingual reading notes; other words explicitly have no note yet. The combined reading ke-re-si-jo / we-ke and unresolved a-pe-te-me-ne remain explicit. This is not an automatically generated word-for-word alignment or a complete morphological commentary.

A lexical comparison for ti-ri-po links to LSJ via Logeion, and a link to the original museum photograph allows comparison with the schematic drawing. Desktop interactions, 390px overflow, line correspondence and the legacy excerpts were checked. The guided reader is available only where both source layers exist; no missing translations were generated for other tablets.

## Attributed grammatical analyses — 2 November 2026

Ta 709 now separates Mnamon readings from grammatical analyses and research hypotheses. `dist/philology.js` attributes the natural dual of pu-ra-u-to-ro to Jiménez Delgado (2023), §2.1, p. 162, and the alternative readings of pa-ko-to and a-pe-te-me-ne to Palaima (2004), pp. 275–276. The latter is explicitly conditional on treating pe as an error for pu; no emendation is applied to the main text or Mnamon translation. References appear separately in Sources and beside each analysis.

An 657 has an explicitly partial guided reader for its already published first-line excerpt. Selecting other lines displays their transcription and missing-layer notices instead of keeping the stale line-one translation. The full tablet remains visible. No additional modern translation has been copied or generated.

## Mycenaean–Greek lexicon — 5 November 2026

The `/dictionary` route contains 24 sourced entries: 17 word spellings, three place names and four personal/divine names. Each entry separates attested Linear B spelling, normalised Unicode glyphs, reconstructed reading, later Greek comparison and bilingual meaning. Scholarly sources are linked per entry and collected in Sources. Later headwords are distinguished from inflected Mycenaean forms. Homographic ke-ra and pa-te retain multiple readings; no automatic one-to-one translation is asserted.

The starter selection draws on Del Freo's Mnamon language/script examples, Palaima on titles, Ilievski on personal names, Sproat on place-name spellings and Nagy on pu-ro. It is not an exhaustive lexicon or a substitute for DMic. Administrative individuals are not identified with epic heroes. The wa-na-ka article explains the difference between syllabic spelling and wanaks, and the loss of initial w in later Greek.

Search supports unhyphenated Latin spellings, Greek with or without diacritics, final sigma and bilingual meanings. Category filters combine with search. Exact occurrences in the selected 32 tablets link to the relevant word/sign; absence from that small collection is explicitly separated from scholarly attestation elsewhere. Checks cover all encoded spellings, provenance, search normalisation, homography and exact occurrence targets. Desktop/mobile UI checks cover search, filters, empty reset and the Ta 709 occurrence link.

## Ta-series expansion — 5 November 2026

Ten complete main-text records from LiBER were added in `dist/pylos-ta.js`: Ta 707, 708, 710, 711, 713, 714, 715, 716, 721 and 722. The collection now contains all 13 edited Ta documents (joined fragments retain their full edition designation) and 32 records overall. The additions supply 32 labelled text/layout entries and 193 syllabic word occurrences, including erased sequences preserved by the edition.

All findspots (including associated X1 fragments), scribal hands, phase labels and museum inventories were checked against individual LiBER pages. Source check dates are displayed per new record. Uncertainty, erased passages, insertions and missing edges are retained. These additions have no generated English translations or Greek interpretations. Exact Unicode mappings were added for *204VAS, *220, *232 and *234 without assigning meanings to unnamed signs. The lexicon now links wa-na-ka directly to Ta 711.1. All ten new routes, line counts, desktop/mobile layout and the dictionary-to-word link were verified in the browser.
