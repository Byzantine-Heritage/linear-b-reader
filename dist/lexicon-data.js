// Sourced starter lexicon, checked 5 November 2026. Forms remain distinct from interpretations.
export const lexiconSources = [
  {
    "id": "language",
    "title": "Maurizio Del Freo — Mycenaean Greek",
    "detail": "Mnamon, Scuola Normale Superiore · phonetic and morphological examples.",
    "url": "https://mnamon.sns.it/index.php?id=53&lang=en&page=Lingua"
  },
  {
    "id": "script",
    "title": "Maurizio Del Freo — Linear B",
    "detail": "Mnamon · orthographic examples, including ambiguous ke-ra.",
    "url": "https://mnamon.sns.it/index.php?id=20&lang=en&page=Scrittura"
  },
  {
    "id": "power",
    "title": "Thomas G. Palaima — The Nature of the Mycenaean Wanax",
    "detail": "1995 · pp. 119–139, especially p. 124: wa-na-ka and qa-si-re-u.",
    "url": "https://sites.utexas.edu/scripts/wp-content/uploads/sites/3428/2020/05/1995-TGP-TheNatureOfTheMycenaeanWanax.pdf"
  },
  {
    "id": "names",
    "title": "Petar Hr. Ilievski — Ti-ri-se-ro-e and Some Other Mycenaean Names with Augmentative Prefixes",
    "detail": "1989 · Studia Mycenaea 1988, Živa Antika Monograph 7, pp. 67–79; names at p. 77.",
    "url": "https://antiquitasviva.com/wp-content/uploads/2021/07/sp07.09.-ilievski-p.-hr.-d0a2i-ri-se-ro-e-and-some-other-mycenaean-names-with-augmentative-prefixes.pdf#page=11"
  },
  {
    "id": "places",
    "title": "Richard Sproat — Writing systems",
    "detail": "2022 · The Oxford History of Phonology, ch. 2, §2.4.3, p. 26 (PDF p. 50).",
    "url": "https://api.pageplace.de/preview/DT0400.9780192516893_A43186006/preview-9780192516893_A43186006.pdf#page=50"
  },
  {
    "id": "pylos",
    "title": "Gregory Nagy — Things said and not said in a ritual text",
    "detail": "2015 · Center for Hellenic Studies, §114: pu-ro / Pulos.",
    "url": "https://www-current.chs.harvard.edu/curated-article/gregory-nagy-things-said-and-not-said-in-a-ritual-text-iguvine-tables-ib-10-16-vib-48-53/"
  },
  {
    "id": "examples",
    "title": "Mnamon — Linear B: Examples of writing",
    "detail": "PY Ta 709: ti-ri-po and e-ka-ra; compare the supplied edition in this reader.",
    "url": "https://mnamon.sns.it/index.php?id=20&lang=en&page=Esempi"
  }
];
export const lexicon = [
  {
    "id": "wa-na-ka",
    "spelling": "wa-na-ka",
    "form": "wanaks",
    "aliases": ["wanax", "anax", "анакс", "ванака"],
    "greek": "ἄναξ",
    "kind": "word",
    "meaning": {
      "ru": "правитель; владыка",
      "en": "palatial ruler; lord"
    },
    "sources": [
      "language",
      "power"
    ],
    "reference": "language / power",
    "status": "identified",
    "note": {
      "ru": "Запись wa-na-ka — слоговая транслитерация; wanaks — реконструированное чтение. В позднейшем ἄναξ начальное /w/ утрачено. В микенском контексте это титул верховного дворцового правителя.",
      "en": "wa-na-ka is the syllabic transliteration; wanaks is a reconstructed reading. Later ἄναξ has lost initial /w/. In the Mycenaean context this is the title of the supreme palatial ruler."
    }
  },
  {
    "id": "qa-si-re-u",
    "spelling": "qa-si-re-u",
    "form": "gʷasileus",
    "aliases": ["basileus", "gwasileus", "басилевс"],
    "greek": "βασιλεύς",
    "kind": "word",
    "meaning": {
      "ru": "местный руководитель",
      "en": "local leader"
    },
    "sources": [
      "power"
    ],
    "reference": "power",
    "status": "identified",
    "note": {
      "ru": "Позднейшее βασιλεύς не означает, что микенский qa-si-re-u был верховным царём: Палайма помещает его на местный уровень иерархии.",
      "en": "The later word βασιλεύς does not make the Mycenaean qa-si-re-u a supreme king: Palaima places the title at the local level."
    }
  },
  {
    "id": "qo-u-ko-ro",
    "spelling": "qo-u-ko-ro",
    "form": "gʷoukolos",
    "greek": "βουκόλος",
    "kind": "word",
    "meaning": {
      "ru": "пастух крупного скота",
      "en": "cattle herder"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "e-re-u-te-ro",
    "spelling": "e-re-u-te-ro",
    "form": "eleutheros",
    "greek": "ἐλεύθερος",
    "kind": "word",
    "meaning": {
      "ru": "свободный",
      "en": "free"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "ne-wo",
    "spelling": "ne-wo",
    "form": "newos",
    "greek": "νέος",
    "kind": "word",
    "meaning": {
      "ru": "новый",
      "en": "new"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "ko-wo",
    "spelling": "ko-wo",
    "form": "korwos",
    "greek": "κοῦρος / κόρος",
    "kind": "word",
    "meaning": {
      "ru": "мальчик",
      "en": "boy"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "ma-te",
    "spelling": "ma-te",
    "form": "mātēr",
    "greek": "μήτηρ",
    "kind": "word",
    "meaning": {
      "ru": "мать",
      "en": "mother"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified",
    "note": {
      "ru": "Позднейшая параллель дана в ионийско-аттической форме. Микенское ā и позднейшее η здесь различаются.",
      "en": "The later comparison uses the Ionic-Attic form; Mycenaean ā differs from its later η."
    }
  },
  {
    "id": "pa-te",
    "spelling": "pa-te",
    "form": "patēr / pantes",
    "greek": "πατήρ / πάντες",
    "kind": "word",
    "meaning": {
      "ru": "отец / все — по контексту",
      "en": "father"
    },
    "sources": [
      "language", "script"
    ],
    "reference": "language",
    "status": "ambiguous"
  },
  {
    "id": "a-ne-mo",
    "spelling": "a-ne-mo",
    "form": "anemos",
    "greek": "ἄνεμος",
    "kind": "word",
    "meaning": {
      "ru": "ветер",
      "en": "wind"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "i-je-re-ja",
    "spelling": "i-je-re-ja",
    "form": "hiereia",
    "greek": "ἱέρεια",
    "kind": "word",
    "meaning": {
      "ru": "жрица",
      "en": "priestess"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "e-re-ta",
    "spelling": "e-re-ta",
    "form": "eretās",
    "greek": "ἐρέτης",
    "kind": "word",
    "meaning": {
      "ru": "гребец",
      "en": "rower"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified"
  },
  {
    "id": "ka-ke-u-si",
    "spelling": "ka-ke-u-si",
    "form": "khalkeusi",
    "greek": "χαλκεύς",
    "kind": "word",
    "meaning": {
      "ru": "кузнецам; мастерам по металлу",
      "en": "to the smiths; metalworkers"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified",
    "note": {
      "ru": "В табличках это дательный падеж множественного числа; справа дана словарная форма позднейшего греческого слова.",
      "en": "The attested form is dative plural; the later Greek column gives the dictionary headword."
    }
  },
  {
    "id": "te-o",
    "spelling": "te-o",
    "form": "theos",
    "greek": "θεός",
    "kind": "word",
    "meaning": {
      "ru": "бог",
      "en": "god"
    },
    "sources": [
      "script"
    ],
    "reference": "script",
    "status": "identified"
  },
  {
    "id": "te-me-no",
    "spelling": "te-me-no",
    "form": "temenos",
    "greek": "τέμενος",
    "kind": "word",
    "meaning": {
      "ru": "выделенный участок земли",
      "en": "reserved landholding"
    },
    "sources": [
      "script"
    ],
    "reference": "script",
    "status": "identified"
  },
  {
    "id": "ti-ri-po",
    "spelling": "ti-ri-po",
    "form": "tripōs",
    "greek": "τρίπους",
    "kind": "word",
    "meaning": {
      "ru": "треножный котёл",
      "en": "tripod cauldron"
    },
    "sources": [
      "examples"
    ],
    "reference": "examples",
    "status": "identified",
    "attestation": "PY Ta 709.3"
  },
  {
    "id": "e-ka-ra",
    "spelling": "e-ka-ra",
    "form": "eskharā",
    "greek": "ἐσχάρα",
    "kind": "word",
    "meaning": {
      "ru": "жаровня",
      "en": "brazier"
    },
    "sources": [
      "examples"
    ],
    "reference": "examples",
    "status": "identified",
    "attestation": "PY Ta 709.2"
  },
  {
    "id": "ke-ra",
    "spelling": "ke-ra",
    "form": "geras / keras",
    "greek": "γέρας / κέρας",
    "kind": "word",
    "meaning": {
      "ru": "привилегия / рог — по контексту",
      "en": "privilege / horn — context-dependent"
    },
    "sources": [
      "script"
    ],
    "reference": "script",
    "status": "ambiguous",
    "note": {
      "ru": "Одинаковая слоговая запись допускает разные слова. Линейное Б не различает здесь звонкость; чтение выбирается по контексту источника.",
      "en": "The same syllabic spelling can represent distinct words. Linear B does not distinguish voicing here; context determines the reading."
    }
  },
  {
    "id": "pu-ro",
    "spelling": "pu-ro",
    "form": "Pulos",
    "greek": "Πύλος",
    "kind": "place",
    "meaning": {
      "ru": "Пилос",
      "en": "Pylos"
    },
    "sources": [
      "pylos"
    ],
    "reference": "pylos",
    "status": "identified",
    "note": {
      "ru": "В данном сопоставлении речь о микенском дворцовом центре в Ано-Энглианос, а не об автоматическом отождествлении с современным городом Пилос.",
      "en": "This comparison concerns the Mycenaean palatial centre at Ano Englianos, not an automatic identification with modern Pylos."
    },
    "attestation": "PY Tn 316"
  },
  {
    "id": "ko-no-so",
    "spelling": "ko-no-so",
    "form": "Knōsos",
    "greek": "Κνωσός / Κνωσσός",
    "kind": "place",
    "meaning": {
      "ru": "Кносс",
      "en": "Knossos"
    },
    "sources": [
      "places"
    ],
    "reference": "places",
    "status": "identified"
  },
  {
    "id": "pa-i-to",
    "spelling": "pa-i-to",
    "form": "Phaistos",
    "greek": "Φαιστός",
    "kind": "place",
    "meaning": {
      "ru": "Фест",
      "en": "Phaistos"
    },
    "sources": [
      "places"
    ],
    "reference": "places",
    "status": "identified"
  },
  {
    "id": "a-ki-re-u",
    "spelling": "a-ki-re-u",
    "form": "Akhileus",
    "greek": "Ἀχιλλεύς",
    "kind": "name",
    "meaning": {
      "ru": "Ахилл — личное имя",
      "en": "Achilles — personal name"
    },
    "sources": [
      "names"
    ],
    "reference": "names",
    "status": "identified",
    "note": {
      "ru": "Засвидетельствовано имя человека из хозяйственных записей. Совпадение с именем эпического героя не отождествляет их носителей.",
      "en": "An individual’s name is attested in administrative records. Sharing a name with an epic hero does not identify the recorded person with that hero."
    },
    "attestation": "KN Vc 106; cf. a-ki-re-we, PY Fn 79.2"
  },
  {
    "id": "e-ko-to",
    "spelling": "e-ko-to",
    "form": "Hektōr",
    "greek": "Ἕκτωρ",
    "kind": "name",
    "meaning": {
      "ru": "Гектор — личное имя",
      "en": "Hector — personal name"
    },
    "sources": [
      "names"
    ],
    "reference": "names",
    "status": "identified",
    "note": {
      "ru": "Засвидетельствовано имя человека из хозяйственных записей. Совпадение с именем эпического героя не отождествляет их носителей.",
      "en": "An individual’s name is attested in administrative records. Sharing a name with an epic hero does not identify the recorded person with that hero."
    }
  },
  {
    "id": "de-u-ka-ri-jo",
    "spelling": "de-u-ka-ri-jo",
    "form": "Deukaliōn",
    "greek": "Δευκαλίων",
    "kind": "name",
    "meaning": {
      "ru": "Девкалион — личное имя",
      "en": "Deucalion — personal name"
    },
    "sources": [
      "names"
    ],
    "reference": "names",
    "status": "identified",
    "note": {
      "ru": "Засвидетельствовано имя человека из хозяйственных записей. Совпадение с именем эпического героя не отождествляет их носителей.",
      "en": "An individual’s name is attested in administrative records. Sharing a name with an epic hero does not identify the recorded person with that hero."
    },
    "attestation": "PY An 654.12"
  },
  {
    "id": "po-se-da-o-ne",
    "spelling": "po-se-da-o-ne",
    "form": "Poseidāhōnei",
    "greek": "Ποσειδῶν",
    "kind": "name",
    "meaning": {
      "ru": "Посейдону; имя божества",
      "en": "to Poseidon; divine name"
    },
    "sources": [
      "language"
    ],
    "reference": "language",
    "status": "identified",
    "note": {
      "ru": "Засвидетельствован дательный падеж единственного числа; позднейшее имя справа дано в именительном.",
      "en": "The attested form is dative singular; the later name is given in the nominative."
    },
    "attestation": "PY Fr 1224"
  }
];
