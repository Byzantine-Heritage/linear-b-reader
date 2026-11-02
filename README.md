# Linear B Reader

Buildless bilingual reader. `npm run dev` serves http://localhost:5178. `npm run check` checks JavaScript and corpus integrity. Deploy `dist/` as static files.

## Corpus — 1 Nov 2026

22 tablets, 120 labelled text/layout entries (including blank lines, margins and end-of-surface notes), 231 word occurrences. Pylos, Knossos, Khania and Tiryns. Main-text transcriptions follow each linked LiBER record, including preserved uncertain readings and visible gap marks. Critical apparatus, erased undertexts and exact spatial typography are not reproduced. Blank/margin editorial labels are not counted as ancient words.

Source URLs and checked metadata are in `dist/corpus.js` and `dist/tiryns.js`. Ten Tiryns records were checked directly against LiBER on 1 November 2026. Some are genuinely fragmentary or contain no readable syllabic words. `dist/text.js` tokenises the preserved text without deleting editorial notation. Subscript 2/3 and underdots are normalised only for Unicode sign lookup; the displayed transcription retains them. VAS is rendered in superscript. Numerically identified signs retain their numbers. A gap is never assigned a phonetic value.

Modern English quotations total 18 words from Mnamon and 21 words from Thomas G. Palaima (2004), *Linear B Sources*, pp. 439–454, in *Anthology of Classical Myth*. Ten records link to published English translations, using exact PDF pages where available. Ta 641, Ta 642 and the ten Tiryns records currently have transcriptions and provenance but no English translation added. These omissions are visible. No generated translations or invented Greek interpretations are supplied. Palaima's older translation and LiBER's current text can reflect different editorial decisions.

LiBER: Del Freo, M., Di Filippo, F. & Rougemont, F. (2024), *Linear B Electronic Resources*, CNR Edizioni, ISBN 978-88-8080-690-5. Individual educational readings are attributed at document level; no museum photographs or modern critical apparatus are redistributed. The tablet contour is schematic, adapted to whole-document reading in the approved monochrome style, not excavation evidence or a facsimile.

## Functionality

Catalogue search covers the whole corpus, normalising subscripts and underdots for matching. Site, subject and saved-only filters combine. The main drawing displays every surviving main-text line, including logograms, numbers and editorial notes, with separate recto and verso surfaces when labelled. Long lines wrap within the same numbered row. Selecting a syllabic sign changes only the inspector and selection; the whole document stays in view. Selecting a transcription word scrolls to its sign sequence. The full page does not scroll horizontally. Each sign supports pointer/focus preview, click, arrow keys, Home and End. Word/sign selection is encoded in the URL. Original Ta 709 word URLs are preserved.

Signs reference contains 74 named Unicode syllabic characters. Special numeric symbols are resolved separately. LocalStorage holds interface language and saved tablet IDs; no accounts or analytics. External Google Fonts supply OFL fonts; no font binaries are redistributed.

## Design

Approved white plaster, burgundy, Old Standard TT and monochrome engraving. Taste Skill Achromatic ledger principles adapted to scholarly reading; Impeccable Read/Operate hierarchy. Main text spans the reading area, with source labels and no per-word cards.

## Checks

Twenty Node tests verify corpus provenance, preservation of all source tokens in the drawing model, glyph coverage, recto/verso separation, damage marks, numeric normalisation, unreadable fragments, legacy links and keyboard navigation. Browser checks cover all 22 document routes and their expected line/layout counts at 390px, geographic filtering, Russian text, sign selection and arrow navigation. Additional 320px and desktop checks cover the longest records. No whole-page horizontal overflow was observed.

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
