/* =====================================================
   script.js  —  Sendit Order Tool
   v3.0: + OCR screenshot upload + Reference toggle
   ===================================================== */

// ─────────────────────────────────────────
//  CITY MAP  (ID lookup for Sendit API)
// ─────────────────────────────────────────
const CITY_MAP = {
  "ighrem n'ougdal":617,"anzal":616,"timedline":615,"tabounte ouarzazate":614,"tabourahte":613,"agouim":612,"amerzgane":611,"aït ben haddou":610,"sidi bouzid ( safi )":609,"aquermoud":608,"bni boufrah":607,"galaz":606,"ahejarr ennehal":604,"melloussa":603,"imi ouaddar":602,"mirleft":601,"ain lahcen":600,"beni hassane":598,"belyounech":597,"azla":596,"bni ahmed cherqia":595,"kaa asrass":594,"el jebeha":593,"stehat":592,"ben karrich":591,"hajria ouled daoud":589,"ourtzagh":588,"fricha":587,"khlalfa":586,"kariat ba mohamed":585,"sebt ben sassi":584,"sidi zouine":583,"chrifia":582,"sidi bou othmane":581,"ben rahmoun":580,"asni":579,"belaaguid":577,"mohammedia - alia":576,"mohammedia - hay wafa":575,"mohammedia - hassania":574,"mohammedia - nassim":573,"mohammedia - al massira":572,"mohammedia - al wahda":571,"mohammedia - kasbah":570,"mohammedia - parc":569,"achakkar":568,"tansifte":567,"tinzouline":566,"taghbalt":565,"tamezmoute":564,"ternata":563,"tazarine":562,"m'hamid el ghizlane":561,"nkoub":560,"fezouata":559,"errouha":558,"ait boudaoud":557,"tagounite":556,"bleida":554,"beni zoli":553,"tamegroute":552,"birkouate":551,"had draa":550,"tafetachte":549,"meskala":548,"tleta-el henchane":547,"douar laarab":546,"ait daoud":545,"tamanar":544,"smimou":543,"tidzi":542,"sidi kaouki":541,"sidi taibi":540,"ouahat sidi brahim":539,"bouskoura-ouled saleh":538,"bouskoura-ville verte":537,"lalla mimouna":536,"dlalha":535,"sebt jahjouhe":534,"bouderbala":533,"timahdite":532,"zouada":531,"khemis du sahel":530,"afsou":529,"oulad amrane région el jadida":528,"el haouzia":527,"messawerr rasso":526,"sidi smaïl":525,"oulad frej":524,"bir jdid":523,"bab marzouka":522,"marnissa":521,"tiddas":520,"guisser":519,"el borouj région de settat":518,"oulad abbou":517,"oulad said région de settat":516,"sidi el ayedi":515,"ras el ain région de settat":514,"ain mediouna":513,"bouhouda":512,"bani walid":511,"ain aicha":510,"tissa":509,"azrou région d'agadir":508,"outat el haj":507,"el kebab":506,"sidi allal tazi":505,"ain leuh":504,"timezgadiouine":503,"bni bouayach":502,"issaguen":501,"targuist":500,"bni hadifa":499,"ait-kamara":498,"boukidaren":497,"ajdir":496,"bassatine el menzeh":495,"jaadar":494,"afra":493,"bouarg":492,"mariouari":491,"beni sidal jbel":490,"kariat arekmane":489,"ouled settout":488,"tafersit":487,"kassita":486,"telat azlaf":485,"tamsamane":484,"boudinar":483,"dar-el kebdani":482,"aïn erreggada":481,"boughriba":480,"madagh":479,"beni drar":478,"tendrara":477,"bouârfa":476,"figuig":475,"el-afak":474,"casablanca - abdelmoumen":473,"ras el ma - cap de l'eau":472,"oulad azzouz dar 16":471,"casablanca - jawhara":470,"casablanca - nassim ii":463,"casablanca - al mostakbal":464,"casablanca - sid al khadir":465,"casablanca - el hana":466,"casablanca - tantonville":469,"casablanca - france ville ii":467,"casablanca - lamkansa":468,"taghazout":462,"loulad":461,"ouled dahhou":459,"tamraght":458,"ouled moumna":457,"agouidir":456,"bouaboud":455,"ighoud":454,"sidi chiker":453,"ait hadi":452,"mejjat - région de marrakech":451,"mzoudia":450,"sidi bou zid chichaoua":449,"sid l'mokhtar":448,"imintanout":447,"beni chiker":446,"tiztoutine":445,"ben taieb":444,"midar":443,"driouch":442,"farkhana":441,"touima":440,"assahrij":439,"laayayta":418,"foum oudi":417,"had boumoussa":416,"bradia":415,"aït ishaq":414,"tighassaline":413,"aguelmous":412,"ouaouizeght":411,"beni ayat":410,"timoulilt":409,"afourar":408,"oulad m'barek":407,"sidi aïssa":406,"oulad ayad":405,"dar ould zidouh":404,"souk sebt":403,"sidi jaber":402,"oulad zmam":401,"oulad ali":400,"oulad youssef":398,"tagzirt":397,"ighrem laâlam":396,"oulad yaich":395,"taliouine":394,"oulad berhil":393,"massa":392,"lagfifat":391,"rencon":390,"cabo negro":389,"laaouamera":388,"khandagour":387,"jebila":386,"mnar":385,"sidi hssain":384,"gueznaia":383,"ghafsai":382,"ghazoua":381,"ait aiaaza":380,"aoulouz":379,"dcheira el jihadia":378,"leqliaa":377,"tarast":376,"loudaya":375,"aourir région agadir":374,"rommani":373,"oulmès":372,"el aarjate":371,"moulay bousselham":368,"mehdia":367,"harhoura":366,"mers el kheir":365,"tahanaout":364,"assa":363,"bab taza":362,"tahla":358,"imzouren":357,"ourika":356,"ait ourir":355,"boulman":354,"oued laou":353,"el mansouria":352,"tizi ouasli":351,"boured":350,"aknoul":349,"oued amlil":347,"el ksiba":344,"khenichet":343,"jorf el melha":341,"aïn-béni-mathar":340,"el aïoun charqiya":339,"aklim":338,"zaio":337,"ayt ihya":336,"msemrir":335,"ait sedrate sahl gharbia":334,"alnif":333,"aït tarzout":332,"ait aissa ou brahim":331,"aoufous":330,"missour":329,"boumia":328,"zaida":327,"tamaris":326,"jerada":325,"boumalen dades":324,"ouazzane":323,"tata":322,"agourai":320,"tinejdad":319,"el gara":318,"mechra bel ksiri":317,"saiss":316,"moulay yâcoub":315,"ain-cheggag":314,"sakia el hamra":313,"tlat bouguedra":311,"souira guedima":310,"ounagha":309,"talmest":308,"oualidia":307,"zeghanghane":304,"essemara":303,"chtouka - région agadir":297,"ait amira":296,"temsia":295,"tikiwin":294,"agdz (zagoura)":293,"taznakht":292,"skoura":291,"echemmaia":290,"skhour rehamna":289,"tamellalt":288,"douar lahna":287,"sidi abdellah ghiyat":286,"lahbichat":285,"sidi moussa région de marrakech":284,"ouled hassoune":283,"souihla":282,"alouidane":281,"chwiter":280,"tameslouht":279,"tssoultante":278,"harbile":277,"dar essalam":276,"ben ahmed":275,"sidi hajjaj région de settat":274,"bni yakhlef":273,"hettan":272,"bounoir":271,"sidi yahya el gharb":270,"zaer":269,"ain chkaf":268,"m'haya":267,"ouislane":266,"mejat région de fès-meknès":265,"skhinate":264,"oulad tayeb":263,"sidi hrazem":262,"deroua":261,"ksar sghir":260,"casablanca - palmier":258,"casablanca - anassi":359,"casablanca - azhar":360,"casablanca - salmia":361,"casablanca - lahraouine":369,"casablanca - ghandi":420,"casablanca - el hank":421,"casablanca - hay tissir":422,"casablanca - hay el farah":423,"casablanca - habous":424,"casablanca - bachkou":425,"casablanca - derb milan":426,"casablanca - derb alkabir":427,"casablanca - val fleurie":428,"casablanca - riveira":429,"casablanca - bournazel":430,"casablanca - floride":431,"casablanca - mandarona":432,"casablanca - polo":433,"casablanca - hay assalama":434,"casablanca - attacharok":435,"casablanca - derb sultan":436,"casablanca - hay al inara":437,"el hajeb":257,"goulmima":255,"boufakrane":253,"sidi bouknadel":233,"zaouiat cheikh":232,"zagoura":229,"youssoufia":228,"tiznit":226,"tit melil":225,"tinghir":224,"tiflet":223,"tetouan":222,"temara":220,"taroudant":218,"taourirt":216,"taounate":215,"tan-tan":214,"tamesna":212,"tamansourt":211,"souk el arbaa du gharb":209,"skhirat":208,"sidi slimane":206,"sidi kacem":205,"sidi ifni":204,"sidi bouzid ( el jadida )":203,"sidi bibi":202,"sidi bennour":201,"sidi allal el bahraoui":200,"sidi addi":198,"sefrou":196,"sebt oulad nemma":195,"sebt gzoula":193,"sebt el guerdane":192,"sala el jadida":191,"sale":190,"saidia":189,"safi":188,"rissani":186,"oulad teima":181,"oued zem":180,"ouarzazate":177,"mrirt":175,"moulay idriss zerhouni":174,"moulay abdellah":172,"midelt":170,"merzouga":168,"meknes":167,"mdiq":165,"laarache":164,"laâyoune":162,"laattaouia":161,"ksar el kebir":159,"khouribga":158,"khenifra":157,"khemis des zemamra":156,"kenitra":155,"kelaat m'gouna":154,"kasba tadla":153,"jamaat shaim":149,"inzegane":148,"imouzzer du kandar":147,"ifran":145,"guercif":143,"guelmim":142,"fquih ben salah":141,"fes":139,"essaouira":137,"errachidia":136,"er-rich":135,"el kelaa des sraghna":133,"haj kaddour":132,"drarga":130,"demnate":126,"dakhla":124,"chichaoua":123,"chefchaouen":122,"boujniba":119,"boujdour":118,"beni mellal":115,"benguerir":113,"belfaa":111,"bejaad":110,"bab berred":108,"azrou région de fès-meknès":107,"azilal":106,"azemmour":105,"assilah":104,"arfoud":102,"anza":100,"aït melloul":96,"ain taoujdate":94,"ain attig":87,"ain el aouda":86,"taza":81,"selouane":76,"oujda":73,"nador":72,"martil":71,"khemisset":70,"fnideq":69,"chellalat mohammedia":68,"biougra":66,"berkane":65,"benslimane":64,"beni ensar":63,"al hoceima":61,"al aaroui":60,"ain harrouda":58,"ahfir":57,"marrakech":56,"el jadida":55,"agadir":54,"rabat":53,"tanger":52,"sidi rahal":51,"bouznika":49,"casablanca - 2 mars":48,"had soualem":47,"casablanca - autres quartiers":46,"nouacer":45,"mediouna":44,"settat":43,"berrechid":42,"dar bouaza":40,"errahma":39,"bouskoura-centre":38,"mohammedia":41,"casablanca - sidi othmane":37,"casablanca - sidi moumen":36,"casablanca - derb omar":35,"casablanca - ancienne medina":34,"casablanca - sidi belyout":33,"casablanca - gauthier":32,"casablanca - centre ville":31,"casablanca - sbata":30,"casablanca - ain borja":29,"casablanca - belvédère":28,"casablanca - roches noires":27,"casablanca - hay moulay rachid":26,"casablanca - garage allal":25,"casablanca - la gironde":24,"casablanca - mers sultan":23,"casablanca - les hôpitaux":22,"casablanca - derb ghalef":21,"casablanca - maarif":20,"casablanca - hay mohammedi":19,"casablanca - oulfa":18,"casablanca - lissassfa":17,"casablanca - cil":16,"casablanca - beauséjour":15,"casablanca - hay hassani":14,"casablanca - bernoussi":13,"casablanca - ben msik":12,"casablanca - ain sebaa":11,"casablanca - oasis":10,"casablanca - hay moulay abdellah":9,"casablanca - californie":8,"casablanca - ain chok":7,"casablanca - racine":6,"casablanca - bourgogne":5,"casablanca - anfa":4,"casablanca - ain diab":3,"casablanca - sidi maârouf":2,"casablanca - al fida":1
};

// City aliases/shortcuts
const CITY_ALIASES = {
  // ── City-level aliases ───────────────────────────────────────
  "casa": "casablanca",
  "casablanca": "casablanca",
  "csa": "casablanca",
  "casa blanca": "casablanca",
  "rabat": "rabat",
  "fes": "fes", "fès": "fes", "fez": "fes",
  "meknes": "meknes", "meknès": "meknes", "meknes": "meknes",
  "tanger": "tanger", "tangier": "tanger", "tanja": "tanger",
  "agadir": "agadir",
  "marrakech": "marrakech", "marrakesh": "marrakech", "marrakch": "marrakech",
  "oujda": "oujda",
  "tetouan": "tetouan", "tétouan": "tetouan", "tetuan": "tetouan",
  "nador": "nador",
  "kenitra": "kenitra", "kénitra": "kenitra", "knitra": "kenitra",
  "sale": "sale", "salé": "sale",
  "temara": "temara", "témara": "temara",
  "settat": "settat",
  "berrechid": "berrechid",
  "beni mellal": "beni mellal", "béni mellal": "beni mellal", "benimelal": "beni mellal",
  "khouribga": "khouribga",
  "mohammedia": "mohammedia", "mohamedia": "mohammedia",
  "el jadida": "el jadida",
  "safi": "safi",
  "essaouira": "essaouira",
  "tiznit": "tiznit",
  "agadir inzegane": "inzegane",
  "inzgane": "inzegane",

  // ── Casablanca neighborhood shortcuts ────────────────────────
  // These expand "casa maarif" → "casablanca - maarif" via alias + neighborhood logic
  "maarif": "casablanca - maarif",
  "maârif": "casablanca - maarif",
  "maaref": "casablanca - maarif",
  "maarfi": "casablanca - maarif",
  "anfa": "casablanca - anfa",
  "bourgogne": "casablanca - bourgogne",
  "bourgone": "casablanca - bourgogne",
  "bourgoune": "casablanca - bourgogne",
  "racine": "casablanca - racine",
  "ain diab": "casablanca - ain diab",
  "sidi maarouf": "casablanca - sidi maârouf",
  "sidi maârouf": "casablanca - sidi maârouf",
  "sidi maarrouf": "casablanca - sidi maârouf",
  "californie": "casablanca - californie",
  "oasis": "casablanca - oasis",
  "ain sebaa": "casablanca - ain sebaa",
  "ain chok": "casablanca - ain chok",
  "hay hassani": "casablanca - hay hassani",
  "lissassfa": "casablanca - lissassfa",
  "lissasfa": "casablanca - lissassfa",
  "lisasfa": "casablanca - lissassfa",
  "oulfa": "casablanca - oulfa",
  "cil": "casablanca - cil",
  "beausejour": "casablanca - beauséjour",
  "beauséjour": "casablanca - beauséjour",
  "bernoussi": "casablanca - bernoussi",
  "ben msik": "casablanca - ben msik",
  "hay mohammedi": "casablanca - hay mohammedi",
  "derb ghalef": "casablanca - derb ghalef",
  "les hopitaux": "casablanca - les hôpitaux",
  "les hôpitaux": "casablanca - les hôpitaux",
  "mers sultan": "casablanca - mers sultan",
  "la gironde": "casablanca - la gironde",
  "garage allal": "casablanca - garage allal",
  "hay moulay rachid": "casablanca - hay moulay rachid",
  "roches noires": "casablanca - roches noires",
  "belvedere": "casablanca - belvédère",
  "belvédère": "casablanca - belvédère",
  "ain borja": "casablanca - ain borja",
  "sbata": "casablanca - sbata",
  "centre ville": "casablanca - centre ville",
  "gauthier": "casablanca - gauthier",
  "sidi belyout": "casablanca - sidi belyout",
  "ancienne medina": "casablanca - ancienne medina",
  "derb omar": "casablanca - derb omar",
  "sidi moumen": "casablanca - sidi moumen",
  "sidi othmane": "casablanca - sidi othmane",
  "hay moulay abdellah": "casablanca - hay moulay abdellah",
  "palmier": "casablanca - palmier",
  "2 mars": "casablanca - 2 mars",
  "autres quartiers": "casablanca - autres quartiers",
  "abdelmoumen": "casablanca - abdelmoumen",
  "jawhara": "casablanca - jawhara",
  "ghandi": "casablanca - ghandi",
  "el hank": "casablanca - el hank",
  "hay tissir": "casablanca - hay tissir",
  "hay el farah": "casablanca - hay el farah",
  "habous": "casablanca - habous",
  "bachkou": "casablanca - bachkou",
  "derb milan": "casablanca - derb milan",
  "derb alkabir": "casablanca - derb alkabir",
  "val fleurie": "casablanca - val fleurie",
  "riveira": "casablanca - riveira",
  "bournazel": "casablanca - bournazel",
  "floride": "casablanca - floride",
  "mandarona": "casablanca - mandarona",
  "polo": "casablanca - polo",
  "hay assalama": "casablanca - hay assalama",
  "attacharok": "casablanca - attacharok",
  "derb sultan": "casablanca - derb sultan",
  "hay al inara": "casablanca - hay al inara",
  "anassi": "casablanca - anassi",
  "azhar": "casablanca - azhar",
  "salmia": "casablanca - salmia",
  "lahraouine": "casablanca - lahraouine",
  "al fida": "casablanca - al fida",
  "nassim ii": "casablanca - nassim ii",
  "al mostakbal": "casablanca - al mostakbal",
  "sid al khadir": "casablanca - sid al khadir",
  "el hana": "casablanca - el hana",
  "tantonville": "casablanca - tantonville",
  "france ville ii": "casablanca - france ville ii",
  "lamkansa": "casablanca - lamkansa",
};

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
let pendingOrders = [];
let sentOrders    = [];
let customers     = {};
let selectedRows  = new Set();
let currentView   = 'extract';
let sortField     = 'timestamp';
let sortAsc       = false;
let filterStatus  = '';
let filterCity    = '';
let filterProduct = '';
let searchQuery   = '';

// ─────────────────────────────────────────
//  REFERENCE TOGGLE STATE
// ─────────────────────────────────────────
let activeReference = null; // null = none selected

/** Load persisted reference from localStorage */
function loadReference() {
  const saved = localStorage.getItem('sendit_reference');
  if (saved) {
    activeReference = saved;
    // Activate the matching button
    const btn = document.querySelector(`.ref-toggle[data-ref="${saved}"]`);
    if (btn) activateRefButton(btn);
  }
}

/** Called by inline onclick on each ref-toggle button */
function selectReference(btn) {
  const ref = btn.dataset.ref;
  if (activeReference === ref) {
    // Deselect if clicking the active one
    activeReference = null;
    localStorage.removeItem('sendit_reference');
    deactivateAllRefButtons();
    updateReferenceBadge(null);
  } else {
    activeReference = ref;
    localStorage.setItem('sendit_reference', ref);
    activateRefButton(btn);
    updateReferenceBadge(btn.dataset.value);
  }
}

function activateRefButton(btn) {
  deactivateAllRefButtons();
  btn.classList.add('active');
}

function deactivateAllRefButtons() {
  document.querySelectorAll('.ref-toggle').forEach(b => b.classList.remove('active'));
}

function updateReferenceBadge(value) {
  const badge = document.getElementById('reference-active-badge');
  if (!badge) return;
  if (value) {
    badge.textContent = value;
    badge.className = 'reference-active-badge';
  } else {
    badge.textContent = 'None';
    badge.className = 'reference-none-badge';
  }
}

/** Returns the reference string to inject into Sendit payload, or null */
function getActiveReferenceValue() {
  if (!activeReference) return null;
  const btn = document.querySelector(`.ref-toggle[data-ref="${activeReference}"]`);
  return btn ? btn.dataset.value : null;
}

// ─────────────────────────────────────────
//  PERSISTENCE
// ─────────────────────────────────────────
function saveData() {
  try {
    localStorage.setItem('sendit_orders',    JSON.stringify(sentOrders));
    localStorage.setItem('sendit_customers', JSON.stringify(customers));
  } catch(e) { console.warn('localStorage write failed', e); }
}

function loadData() {
  try {
    const o = localStorage.getItem('sendit_orders');
    const c = localStorage.getItem('sendit_customers');
    if (o) sentOrders = JSON.parse(o);
    if (c) customers  = JSON.parse(c);
  } catch(e) { console.warn('localStorage read failed', e); }
}

// ─────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────
function cleanPhone(phone) {
  phone = String(phone).replace(/\D/g, '');
  if (phone.startsWith('212')) phone = '0' + phone.slice(3);
  if (phone.length === 9) phone = '0' + phone;
  return phone;
}

function cleanPrice(price) {
  let s = String(price).toLowerCase();
  ['dh','mad','dirham','dhs','dhs.','dh.'].forEach(w => { s = s.replace(new RegExp(w,'g'), ''); });
  s = s.trim();
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

const DARIJA_TRANS = { '3': 'a', '7': 'h', '9': 'q', '2': 'a', '5': 'kh', '8': 'gh' };
const AI_CITY_RESOLVE_CANDIDATE_LIMIT = 45;
const AI_CITY_CONFIDENCE_MIN = 0.45;

function transliterateDarija(str) {
  if (!/[a-zA-ZÀ-ÿ\u0600-\u06FF]/.test(String(str || ''))) return str;
  return String(str).replace(/[379258]/g, ch => DARIJA_TRANS[ch] || ch);
}

function stripCodeFence(content) {
  return String(content || '').replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shortText(value, max = 40) {
  const text = String(value || '').trim();
  return text.length > max ? text.slice(0, max) + '...' : text;
}

// ─────────────────────────────────────────
//  CITY MATCHING PIPELINE  (v2.0)
// ─────────────────────────────────────────

/**
 * Normalize a city string for matching:
 *  - lowercase
 *  - remove accents / diacritics (NFD + strip combining marks)
 *  - normalize hyphens and spaces
 *  - collapse duplicate spaces
 *  - trim surrounding whitespace / punctuation
 */
function normalizeCity(str) {
  if (!str) return '';
  return transliterateDarija(String(str))
    .normalize('NFD')                        // decompose accents
    .replace(/[\u0300-\u036f]/g, '')         // strip combining diacritical marks
    .toLowerCase()
    .replace(/[''`]/g, "'")                  // unify apostrophes
    .replace(/\s*[-–—]\s*/g, ' - ')          // normalize hyphens with surrounding spaces
    .replace(/[^\w\s\-']/g, ' ')             // strip punctuation except hyphens/apostrophes
    .replace(/\s+/g, ' ')                    // collapse spaces
    .trim();
}

/**
 * Build a normalized lookup index from a city map.
 * Returns: Map<normalizedKey, { id, name }>
 */
function buildNormalizedIndex(cityMap) {
  const index = new Map();
  for (const [name, id] of Object.entries(cityMap)) {
    const norm = normalizeCity(name);
    if (norm) index.set(norm, { id, name });
  }
  return index;
}

// The live combined map (CITY_MAP + API districts)
let _liveCityMap = null;
let _normalizedIndex = null;  // Map<norm, {id, name}>

function getLiveCityMap() {
  if (_liveCityMap) return _liveCityMap;
  // Merge: start with hardcoded map, then overlay anything from localStorage
  _liveCityMap = Object.assign({}, CITY_MAP);
  try {
    const cached = localStorage.getItem('sendit_districts_cache');
    if (cached) {
      const { districts } = JSON.parse(cached);
      if (Array.isArray(districts)) {
        for (const d of districts) {
          try {
            const id = parseInt(d.id, 10);
            const ville = String(d.ville || '').trim().toLowerCase();
            const dname = String(d.name || '').trim().toLowerCase();
            if (!dname) continue;
            const key = ville && dname ? `${ville} - ${dname}` : dname;
            if (!_liveCityMap[key]) _liveCityMap[key] = id;
          } catch (_) {}
        }
      }
    }
  } catch (_) {}
  return _liveCityMap;
}

function getNormalizedIndex() {
  if (_normalizedIndex) return _normalizedIndex;
  _normalizedIndex = buildNormalizedIndex(getLiveCityMap());
  return _normalizedIndex;
}

/** Invalidate caches when API data is refreshed */
function invalidateCityCache() {
  _liveCityMap = null;
  _normalizedIndex = null;
}

/**
 * Levenshtein distance between two strings (for fuzzy matching).
 * Only computed for strings up to length 30 for performance.
 */
function levenshtein(a, b) {
  if (a === b) return 0;
  if (a.length > 30 || b.length > 30) return Infinity;
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

/**
 * Extract the neighborhood part from "city - neighborhood" strings.
 * e.g. "casablanca - maarif" → "maarif"
 */
function extractNeighborhood(norm) {
  const m = norm.match(/^[a-z]+ - (.+)$/);
  return m ? m[1] : null;
}

/**
 * Core city finder — multi-stage with full debug logging.
 *
 * Stage 1: Exact normalized match
 * Stage 2: Casablanca neighborhood shorthand  (e.g. "maarif" → "casablanca - maarif")
 * Stage 3: Alias expansion + exact match
 * Stage 4: Prefix / suffix match
 * Stage 5: Substring containment
 * Stage 6: Fuzzy (Levenshtein ≤ 2) on neighborhood tokens
 * Stage 7: Fallback (ID 31) ONLY if nothing found
 */
function findBestCity(cityInput) {
  const raw = String(cityInput || '').trim();
  const norm = normalizeCity(raw);
  const index = getNormalizedIndex();
  const liveMap = getLiveCityMap();

  let matched = null;
  let stage = '?';

  // ── Stage 1: exact normalized match ──────────────────────────
  if (index.has(norm)) {
    matched = index.get(norm);
    stage = 'exact';
  }

  // ── Stage 2: Casablanca neighborhood shorthand ───────────────
  // If input is just a neighborhood name (no city prefix),
  // try prepending known cities, prioritising Casablanca.
  if (!matched && !norm.includes(' - ')) {
    const casaKey = `casablanca - ${norm}`;
    if (index.has(casaKey)) {
      matched = index.get(casaKey);
      stage = 'casa-neighborhood';
    }
    if (!matched) {
      // Try all cities
      for (const [k, v] of index) {
        const nbhd = extractNeighborhood(k);
        if (nbhd && nbhd === norm) { matched = v; stage = 'neighborhood'; break; }
      }
    }
  }

  // ── Stage 3: Alias expansion ──────────────────────────────────
  if (!matched) {
    const normAliasMap = Object.entries(CITY_ALIASES).map(([a, c]) => [normalizeCity(a), normalizeCity(c)]);

    // Direct alias: norm matches alias exactly → canonical may be a full district key
    for (const [normAlias, normCanonical] of normAliasMap) {
      if (norm === normAlias) {
        if (index.has(normCanonical)) {
          matched = index.get(normCanonical);
          stage = 'alias-direct';
          break;
        }
      }
    }
    // Alias prefix: e.g. "casa maarif" → "casablanca - maarif"
    if (!matched) {
      for (const [normAlias, normCanonical] of normAliasMap) {
        if (norm.startsWith(normAlias + ' - ') || norm.startsWith(normAlias + ' ')) {
          const remainder = norm.startsWith(normAlias + ' - ')
            ? norm.slice(normAlias.length + 3)
            : norm.slice(normAlias.length + 1);
          const guessKey = `${normCanonical} - ${remainder}`;
          if (index.has(guessKey)) {
            matched = index.get(guessKey);
            stage = 'alias-neighborhood';
            break;
          }
          // Also try canonical as the full key directly
          if (index.has(normCanonical)) {
            matched = index.get(normCanonical);
            stage = 'alias-city';
            break;
          }
        }
      }
    }
  }

  // ── Stage 4: Prefix / starts-with match ──────────────────────
  if (!matched) {
    for (const [k, v] of index) {
      if (k.startsWith(norm) || norm.startsWith(k)) {
        // Avoid matching a bare city name when we have a neighborhood in norm
        if (norm.includes(' - ') && !k.includes(' - ')) continue;
        matched = v; stage = 'prefix'; break;
      }
    }
  }

  // ── Stage 5: Substring containment ───────────────────────────
  if (!matched) {
    let bestLen = 0;
    for (const [k, v] of index) {
      if (k.includes(norm) || norm.includes(k)) {
        // Prefer longer (more specific) matches
        if (k.length > bestLen) { matched = v; stage = 'substring'; bestLen = k.length; }
      }
    }
  }

  // ── Stage 6: Fuzzy matching (Levenshtein) ────────────────────
  if (!matched) {
    let bestDist = 3; // threshold: allow up to 2 edits
    // Try matching the neighborhood part if input looks like "city - nbhd"
    const normNbhd = extractNeighborhood(norm) || norm;

    for (const [k, v] of index) {
      const kNbhd = extractNeighborhood(k) || k;
      const dist = levenshtein(normNbhd, kNbhd);
      if (dist < bestDist) {
        bestDist = dist;
        matched = v;
        stage = `fuzzy(d=${dist})`;
      }
    }
  }

  // ── Stage 7: Hard fallback ────────────────────────────────────
  if (!matched) {
    matched = { id: 31, name: 'casablanca - centre ville' };
    stage = 'FALLBACK';
  }

  console.log('CITY MATCH', {
    input: raw,
    normalized: norm,
    stage,
    matched: matched.name,
    matchedId: matched.id,
  });

  return matched;
}

function getCityResolveCandidates(input, limit = AI_CITY_RESOLVE_CANDIDATE_LIMIT) {
  const norm = normalizeCity(input);
  const ignored = new Set(['res', 'num', 'numero', 'porte', 'garage', 'cote', 'ecole']);
  const tokens = new Set(norm.split(/\s+/).filter(t => t.length >= 3 && !ignored.has(t)));
  const results = [];

  for (const [name, id] of Object.entries(getLiveCityMap())) {
    const cityNorm = normalizeCity(name);
    const nbhdNorm = extractNeighborhood(cityNorm) || cityNorm;
    let score = 0;

    if (cityNorm === norm) score += 120;
    if (nbhdNorm === norm) score += 110;
    if (cityNorm.startsWith(norm) || norm.startsWith(cityNorm)) score += 85;
    if (nbhdNorm.startsWith(norm) || norm.startsWith(nbhdNorm)) score += 80;
    if (norm && (cityNorm.includes(norm) || norm.includes(cityNorm))) score += 70;
    if (norm && (nbhdNorm.includes(norm) || norm.includes(nbhdNorm))) score += 75;

    for (const token of tokens) {
      if (cityNorm.split(/\s+/).includes(token)) score += 12;
      else if (cityNorm.includes(token)) score += 6;
    }

    const dist = levenshtein(norm, nbhdNorm);
    if (dist <= 2) score += 55 - dist * 10;

    if (score > 0) results.push({ id, name, score });
  }

  return results
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .filter((item, index, arr) => arr.findIndex(x => x.id === item.id) === index)
    .slice(0, limit);
}

function findCandidateByAiChoice(choice, candidates) {
  const wantedId = parseInt(choice?.id, 10);
  if (wantedId) {
    const byId = candidates.find(c => c.id === wantedId);
    if (byId) return byId;
  }

  const wantedName = normalizeCity(choice?.name || choice?.districtName || choice?.district || '');
  if (!wantedName) return null;
  return candidates.find(c => normalizeCity(c.name) === wantedName) || null;
}

async function resolveCityWithAI(order) {
  const rawCity = String(order?.city || '').trim();
  const rawAddress = String(order?.address || '').trim();
  const candidateText = [rawCity, rawAddress].filter(Boolean).join(' ');
  const candidates = getCityResolveCandidates(candidateText || rawCity);

  if (!candidates.length) return null;

  const prompt = `Choose the best Sendit.ma delivery district for this Moroccan order.
Interpret Darija/Arabizi spellings and number substitutions, for example m3arif means maarif and hay 7assani means hay hassani.
Use the city/neighborhood for routing only. Do not put street, residence, building, floor, apartment, or landmark details into the district.
Choose ONLY from the candidate list. If the exact neighborhood is not available, choose the closest city-level candidate.

Order city field: ${rawCity || '(empty)'}
Full address field: ${rawAddress || '(empty)'}

Candidates:
${JSON.stringify(candidates.map(({ id, name }) => ({ id, name })))}

Return ONLY JSON:
{"id":0,"name":"","confidence":0.0,"reason":""}`;

  const res = await fetch(CONFIG.API_PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: CONFIG.OPENAI_MODEL || 'gpt-4o-mini',
      max_tokens: 250,
      temperature: 0,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `OpenAI city resolve error ${res.status}`);
  }

  const data = await res.json();
  const parsed = JSON.parse(stripCodeFence(data.choices[0].message.content));
  const chosen = findCandidateByAiChoice(parsed, candidates);
  const confidence = Number(parsed.confidence || 0);
  if (!chosen || confidence < AI_CITY_CONFIDENCE_MIN) return null;

  console.log('AI CITY RESOLVE', {
    inputCity: rawCity,
    inputAddress: rawAddress,
    matched: chosen.name,
    matchedId: chosen.id,
    confidence,
    reason: parsed.reason || ''
  });

  return { id: chosen.id, name: chosen.name };
}

async function resolveCityForOrder(order) {
  try {
    const aiCity = await resolveCityWithAI(order);
    if (aiCity) return aiCity;
  } catch (err) {
    console.warn('[City AI] Falling back to local city matcher:', err);
  }
  return findBestCity(order.city || order.address || '');
}

// ─────────────────────────────────────────
//  DYNAMIC DISTRICT LOADER  (Sendit API)
// ─────────────────────────────────────────

const DISTRICT_CACHE_KEY = 'sendit_districts_cache';
const DISTRICT_CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
const DISTRICT_REFRESH_HOUR_UTC = 5;                 // 5:00 AM GMT

/** Returns true if the cache is stale or missing */
function isDistrictCacheStale() {
  try {
    const raw = localStorage.getItem(DISTRICT_CACHE_KEY);
    if (!raw) return true;
    const { savedAt } = JSON.parse(raw);
    if (!savedAt) return true;
    return (Date.now() - savedAt) > DISTRICT_CACHE_TTL;
  } catch (_) { return true; }
}

/**
 * Fetch all district pages from Sendit API and cache them.
 * Requires a valid Bearer token from CONFIG.
 */
async function fetchAndCacheDistricts() {
  const token = await getSenditToken().catch(() => null);
  if (!token) {
    console.warn('[Districts] No API token available — skipping refresh');
    return;
  }

  const BASE = (typeof CONFIG !== 'undefined' && CONFIG.SENDIT_BASE_URL) || 'https://app.sendit.ma/api/v1';
  const headers = { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' };
  const allDistricts = [];

  try {
    let page = 1;
    while (true) {
      const res = await fetch(`${BASE}/districts?page=${page}`, { headers });
      if (!res.ok) { console.warn('[Districts] HTTP', res.status, 'on page', page); break; }
      const data = await res.json();
      const districts = data.data || [];
      if (!districts.length) break;
      allDistricts.push(...districts);
      if (page >= (data.last_page || page)) break;
      page++;
      await new Promise(r => setTimeout(r, 150)); // polite delay
    }

    if (allDistricts.length > 0) {
      localStorage.setItem(DISTRICT_CACHE_KEY, JSON.stringify({
        savedAt: Date.now(),
        districts: allDistricts,
      }));
      invalidateCityCache();
      console.log(`[Districts] Cached ${allDistricts.length} districts from API`);
    }
  } catch (err) {
    console.warn('[Districts] Fetch error:', err);
  }
}

/**
 * Schedule the next weekly refresh at 5:00 AM UTC.
 * Called once on startup; re-schedules itself after each run.
 */
function scheduleWeeklyDistrictRefresh() {
  const now = new Date();
  const nextRun = new Date(now);

  // Find the next occurrence of 05:00 UTC
  nextRun.setUTCHours(DISTRICT_REFRESH_HOUR_UTC, 0, 0, 0);
  if (nextRun <= now) nextRun.setUTCDate(nextRun.getUTCDate() + 1); // tomorrow

  const delay = nextRun - now;
  console.log(`[Districts] Next scheduled refresh in ${Math.round(delay / 1000 / 60)} min (${nextRun.toUTCString()})`);

  setTimeout(async () => {
    console.log('[Districts] Running scheduled weekly refresh...');
    await fetchAndCacheDistricts();
    scheduleWeeklyDistrictRefresh(); // reschedule for next day / next week
  }, delay);
}

/** Boot: load cache if stale, then schedule weekly refreshes at 5 AM GMT */
async function initDistrictLoader() {
  if (isDistrictCacheStale()) {
    console.log('[Districts] Cache missing or stale — refreshing now...');
    await fetchAndCacheDistricts();
  } else {
    console.log('[Districts] Cache is fresh — using cached districts');
    invalidateCityCache(); // merge cached data into live map
  }
  scheduleWeeklyDistrictRefresh();
}

function validateOrder(o) {
  const errors = [];
  if (!o.name || o.name.trim() === '') errors.push('Missing name');
  if (!o.product || o.product.trim() === '') errors.push('Missing product');
  const ph = cleanPhone(o.phone);
  if (ph.length !== 10) errors.push('Invalid phone (must be 10 digits)');
  if (!cleanPrice(o.price)) errors.push('Invalid price');
  return errors;
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function fmtPrice(p) {
  const n = cleanPrice(p);
  return n ? n.toLocaleString('fr-MA') + ' DH' : '—';
}

function fmtDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleString('fr-MA', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' });
}

function avatarLetter(name) {
  return (name || 'C').trim().charAt(0).toUpperCase();
}

// ─────────────────────────────────────────
//  TOAST
// ─────────────────────────────────────────
function toast(type, title, msg = '') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<div class="toast-icon">${icons[type] || 'ℹ️'}</div>
    <div class="toast-body"><div class="toast-title">${title}</div>${msg ? `<div class="toast-msg">${msg}</div>` : ''}</div>`;
  container.appendChild(el);
  el.addEventListener('click', () => removeToast(el));
  setTimeout(() => removeToast(el), 5000);
}

function removeToast(el) {
  el.classList.add('removing');
  setTimeout(() => el.remove(), 300);
}

// ─────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ─────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────
function navigate(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) { el.classList.add('active'); el.classList.add('fade-in'); }
  const nav = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (nav) nav.classList.add('active');
  const titles = { extract:'Extract Orders', orders:'Order Management', customers:'Customers', settings:'Settings' };
  document.getElementById('topbar-title').textContent = titles[view] || 'Dashboard';
  closeSidebar();
  if (view === 'orders') renderOrdersTable();
  if (view === 'customers') renderCustomers();
  updateStats();
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

// ─────────────────────────────────────────
//  STATS
// ─────────────────────────────────────────
function updateStats() {
  const total = sentOrders.length;
  const delivered = sentOrders.filter(o => o.status === 'delivered').length;
  const revenue = sentOrders.reduce((s, o) => s + cleanPrice(o.price), 0);
  const pending = sentOrders.filter(o => o.status === 'pending' || o.status === 'sent').length;

  setText('stat-total', total);
  setText('stat-total-card', total);
  setText('stat-delivered', delivered);
  setText('stat-delivered-card', delivered);
  setText('stat-revenue', revenue ? revenue.toLocaleString('fr-MA') + ' DH' : '0 DH');
  setText('stat-pending', pending);
  setText('stat-pending-card', pending);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ─────────────────────────────────────────
//  AI EXTRACTION  (OpenAI)
// ─────────────────────────────────────────
async function extractOrders(text) {
  const prompt = `Extract order information from this Moroccan WhatsApp message.
The message may be in Darija, French, Arabic, or mixed.

STRICT RULES:
- name: customer name (if missing → "Client")
- phone: Moroccan phone as string, e.g. "0612345678" (strip +212, keep 10 digits starting with 0)
- city: detect the MOST SPECIFIC Moroccan delivery area possible

IMPORTANT:
If the message contains Casablanca neighborhoods like:
maarif, anfa, bourgogne, hay hassani, california, oasis, racine, etc,
return them in this EXACT format:

"casablanca - maarif"
"casablanca - anfa"
"casablanca - bourgogne"

DO NOT return only "casablanca" or "casa" if a neighborhood exists.

Examples:
"casa maarif" → "casablanca - maarif"
"maarif" → "casablanca - maarif"
"casa bourgogne" → "casablanca - bourgogne"
"anfa" → "casablanca - anfa"

For other cities, return the most specific known area possible.
- address: the FULL delivery address for the driver.
  Include street number, residence name, building, floor, apartment, landmarks, and neighborhood detail.
  Do NOT reduce address to only the city. If no specific address is given, copy the city here.
- product: what the customer wants to buy
- price: NUMBER ONLY (e.g. 250, not "250 dh")
- notes: short AI summary in English (1-2 sentences about the customer's request/tone)

City/address separation examples:
"Numero 19 Res Mesk Lil Hay Riad Rabat (porte garage a cote ecole belge de Rabat)"
-> city: "Rabat"
-> address: "Numero 19 Res Mesk Lil Hay Riad, porte garage a cote ecole belge de Rabat"

"casa m3arif, residence al wifaq apt 3 etage 2"
-> city: "casablanca - maarif"
-> address: "Residence al wifaq, appartement 3, etage 2, Maarif Casablanca"

Return ONLY a JSON array (even for 1 order). No markdown, no explanation.
Format:
[{"name":"","phone":"","city":"","address":"","product":"","price":0,"notes":""}]

Message:
${text}`;

  const res = await fetch(CONFIG.API_PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: CONFIG.OPENAI_MODEL || 'gpt-4o-mini',
      max_tokens: 1000,
      temperature: 0.1,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `OpenAI error ${res.status}`);
  }

  const data = await res.json();
  let content = stripCodeFence(data.choices[0].message.content);
  const parsed = JSON.parse(content);
  return Array.isArray(parsed) ? parsed : [parsed];
}

// ─────────────────────────────────────────
//  EXTRACT VIEW
// ─────────────────────────────────────────
async function handleAnalyze() {
  const text = document.getElementById('message-input').value.trim();
  if (!text) { toast('error', 'Empty input', 'Paste a WhatsApp message first.'); return; }

  const btn = document.getElementById('btn-analyze');
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Analyzing…`;

  try {
    const orders = await extractOrders(text);
    const newOrders = orders.map(o => ({
      id: uid(),
      name: o.name || 'Client',
      phone: cleanPhone(o.phone || ''),
      city: o.city || '',
      address: (o.address && String(o.address).trim()) ? String(o.address).trim() : (o.city || ''),
      product: o.product || '',
      price: o.price || 0,
      notes: o.notes || '',
      status: 'pending',
      timestamp: Date.now()
    }));
    // Append to existing pending orders — never wipe the list
    pendingOrders.push(...newOrders);
    document.getElementById('message-input').value = '';
    renderPendingTable();
    toast('success', 'Extraction complete', `${newOrders.length} new order(s) added. ${pendingOrders.length} total pending.`);
  } catch(e) {
    toast('error', 'AI Error', e.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `🔍 Analyze`;
  }
}

function renderPendingTable() {
  const tbody = document.getElementById('pending-tbody');
  const empty = document.getElementById('pending-empty');
  const tableWrap = document.getElementById('pending-table-wrap');

  if (!pendingOrders.length) {
    empty.style.display = 'block';
    tableWrap.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  tableWrap.style.display = 'block';

  tbody.innerHTML = pendingOrders.map((o, i) => {
    const errs = validateOrder(o);
    const city = findBestCity(o.city);
    const isValid = errs.length === 0;
    const hist = getCustomerHistory(o.phone);
    const histBadge = hist ? renderHistoryBadge(hist) : '';
    return `<tr class="${isValid ? '' : 'invalid'}" data-id="${o.id}">
      <td><input type="checkbox" class="pending-chk" data-idx="${i}" onchange="togglePendingSelect()"></td>
      <td class="editable" onclick="editPending(${i},'name')" data-field="name">${o.name}${histBadge}</td>
      <td class="editable" onclick="editPending(${i},'phone')" data-field="phone"><span style="font-family:var(--font-mono);font-size:0.8rem">${o.phone}</span></td>
      <td onclick="editPendingCity(${i})" data-field="city" style="cursor:pointer">${o.city} <span style="color:var(--text-muted);font-size:0.7rem">(${city.id})</span></td>
      <td class="editable" onclick="editPending(${i},'address')" data-field="address" title="${escapeHtml(o.address || '')}">${escapeHtml(shortText(o.address || o.city, 50))}</td>
      <td class="editable" onclick="editPending(${i},'product')" data-field="product">${o.product}</td>
      <td class="editable" onclick="editPending(${i},'price')" data-field="price">${fmtPrice(o.price)}</td>
      <td><span class="${isValid ? 'status-badge status-confirmed' : 'status-badge status-cancelled'}">${isValid ? 'Ready' : 'Invalid'}</span></td>
      <td>
        <button class="btn btn-success btn-sm" onclick="sendSinglePending(${i})" ${isValid ? '' : 'disabled'}>📦 Send</button>
        <button class="btn btn-danger btn-sm" onclick="removePending(${i})" style="margin-left:4px">🗑</button>
      </td>
    </tr>`;
  }).join('');
}

function editPending(idx, field) {
  const o = pendingOrders[idx];
  const td = document.querySelector(`#pending-tbody tr:nth-child(${idx+1}) td[data-field="${field}"]`);
  if (!td) return;
  const oldVal = String(o[field]);
  td.innerHTML = `<input class="inline-edit" value="${escapeHtml(oldVal)}" onblur="savePending(${idx},'${field}',this.value)" onkeydown="if(event.key==='Enter')this.blur()">`;
  td.querySelector('input').focus();
}

function editPendingCity(idx) {
  const o = pendingOrders[idx];
  const td = document.querySelector(`#pending-tbody tr:nth-child(${idx+1}) td[data-field="city"]`);
  if (!td) return;

  // Build autocomplete widget
  td.innerHTML = `
    <div class="city-autocomplete-wrap" style="position:relative">
      <input
        class="inline-edit city-ac-input"
        value="${o.city}"
        placeholder="Type 3+ chars…"
        autocomplete="off"
        oninput="cityAcSearch(this,${idx})"
        onkeydown="cityAcKey(event,${idx})"
        onblur="cityAcBlur(${idx})"
      >
      <ul class="city-ac-list" id="city-ac-${idx}"></ul>
    </div>`;
  td.querySelector('input').focus();
}

/** Live search — fires after every keystroke */
function cityAcSearch(input, idx) {
  const q = normalizeCity(input.value);
  const list = document.getElementById(`city-ac-${idx}`);
  if (!list) return;

  if (q.length < 3) { list.innerHTML = ''; list.style.display = 'none'; return; }

  const liveMap = getLiveCityMap();
  // Score every key: exact prefix > contains > neighborhood contains
  const results = [];
  for (const [name, id] of Object.entries(liveMap)) {
    const norm = normalizeCity(name);
    if (norm.startsWith(q))        results.push({ name, id, score: 0 });
    else if (norm.includes(q))     results.push({ name, id, score: 1 });
  }
  results.sort((a, b) => a.score - b.score || a.name.localeCompare(b.name));
  const top = results.slice(0, 12);

  if (!top.length) { list.innerHTML = '<li class="city-ac-none">No match</li>'; list.style.display = 'block'; return; }

  list.innerHTML = top.map((r, i) =>
    `<li class="city-ac-item" data-idx="${idx}" data-name="${r.name}" data-i="${i}"
        onmousedown="cityAcPick(${idx},'${r.name.replace(/'/g,"\\'")}')">
      ${r.name} <span style="color:var(--text-muted);font-size:0.7rem">#${r.id}</span>
    </li>`
  ).join('');
  list.style.display = 'block';
}

/** Keyboard nav in autocomplete */
function cityAcKey(e, idx) {
  const list = document.getElementById(`city-ac-${idx}`);
  if (!list) return;
  const items = list.querySelectorAll('.city-ac-item');
  const active = list.querySelector('.city-ac-active');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = active ? active.nextElementSibling : items[0];
    if (next) { active?.classList.remove('city-ac-active'); next.classList.add('city-ac-active'); }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = active?.previousElementSibling;
    if (prev) { active.classList.remove('city-ac-active'); prev.classList.add('city-ac-active'); }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (active) cityAcPick(idx, active.dataset.name);
    else {
      // Treat current input value as manual entry
      const input = list.closest('.city-autocomplete-wrap')?.querySelector('input');
      if (input) { savePending(idx, 'city', input.value); }
    }
  } else if (e.key === 'Escape') {
    renderPendingTable();
  }
}

function cityAcPick(idx, name) {
  savePending(idx, 'city', name);
}

function cityAcBlur(idx) {
  // Delay so mousedown on list item fires first
  setTimeout(() => {
    const wrap = document.querySelector(`#pending-tbody tr:nth-child(${idx+1}) .city-autocomplete-wrap`);
    if (wrap) {
      const input = wrap.querySelector('input');
      if (input) savePending(idx, 'city', input.value);
    }
  }, 180);
}

// ─────────────────────────────────────────
//  CUSTOMER HISTORY BADGE
// ─────────────────────────────────────────

/**
 * Return history stats for a phone number from sentOrders.
 * Returns null if customer has no prior orders.
 */
function getCustomerHistory(phone) {
  const clean = cleanPhone(String(phone || ''));
  if (!clean) return null;

  // Check both sentOrders and the customers profile map
  const profile = customers[clean];
  const orders = profile?.orders || sentOrders.filter(o => cleanPhone(o.phone) === clean);
  if (!orders.length) return null;

  const total     = orders.length;
  const delivered = orders.filter(o => o.status === 'delivered').length;
  const cancelled = orders.filter(o => o.status === 'cancelled').length;
  return { total, delivered, cancelled };
}

/**
 * Renders a tiny inline badge: 📦3 ✅2 ❌1
 * shown right after the customer name.
 */
function renderHistoryBadge({ total, delivered, cancelled }) {
  const pending = total - delivered - cancelled;
  let tip = `${total} total order${total>1?'s':''}`;
  if (delivered) tip += ` · ${delivered} delivered`;
  if (cancelled) tip += ` · ${cancelled} cancelled`;
  if (pending > 0) tip += ` · ${pending} in progress`;

  return `<span class="cust-hist-badge" title="${tip}" style="margin-left:5px;white-space:nowrap;font-size:0.7rem;opacity:0.85">` +
    `📦${total}` +
    (delivered ? ` ✅${delivered}` : '') +
    (cancelled ? ` ❌${cancelled}` : '') +
    `</span>`;
}

// ─────────────────────────────────────────
//  DELIVERY STATUS POLLER  (Sendit webhook substitute)
// ─────────────────────────────────────────

const POLL_INTERVAL_MS  = 15 * 60 * 1000; // every 15 min
const POLL_TRACK_STATES = new Set(['sent', 'confirmed', 'pending']); // statuses worth re-checking

let _pollTimer = null;

/** Fetch latest status for one order from Sendit API */
async function fetchSenditOrderStatus(senditId, token) {
  const res = await fetch(`${CONFIG.SENDIT_BASE_URL}/deliveries/${senditId}`, {
    headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.status || data?.status || null;
}

/** Map Sendit status strings to our internal statuses */
function mapSenditStatus(raw) {
  if (!raw) return null;
  const s = String(raw).toLowerCase();
  if (s.includes('deliver') || s.includes('livr'))  return 'delivered';
  if (s.includes('cancel') || s.includes('annul'))  return 'cancelled';
  if (s.includes('confirm'))                         return 'confirmed';
  if (s.includes('transit') || s.includes('cours')) return 'sent';
  return null;
}

/** Poll all trackable sent orders and update statuses */
async function pollDeliveryStatuses() {
  const trackable = sentOrders.filter(o =>
    POLL_TRACK_STATES.has(o.status) && o.senditData?.id
  );
  if (!trackable.length) return;

  let token;
  try { token = await getSenditToken(); } catch (_) { return; }

  let updated = 0;
  for (const order of trackable) {
    try {
      const rawStatus = await fetchSenditOrderStatus(order.senditData.id, token);
      const mapped = mapSenditStatus(rawStatus);
      if (mapped && mapped !== order.status) {
        order.status = mapped;
        updated++;
      }
      await new Promise(r => setTimeout(r, 200)); // be polite
    } catch (_) {}
  }

  if (updated > 0) {
    saveData();
    updateStats();
    renderOrdersTable();
    toast('info', '📡 Status sync', `${updated} order${updated>1?'s':''} updated from Sendit`);
  }
}

/** Start periodic polling — called once on init */
function startStatusPoller() {
  if (_pollTimer) return;
  // First poll after 2 min (give time for orders to be sent first)
  _pollTimer = setTimeout(function tick() {
    pollDeliveryStatuses().catch(() => {});
    _pollTimer = setTimeout(tick, POLL_INTERVAL_MS);
  }, 2 * 60 * 1000);
}

/** Manual sync button handler */
async function manualStatusSync() {
  const btn = document.getElementById('btn-sync-status');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Syncing…'; }
  try { await pollDeliveryStatuses(); }
  finally {
    if (btn) { btn.disabled = false; btn.textContent = '📡 Sync Status'; }
  }
}

function savePending(idx, field, value) {
  if (field === 'phone') value = cleanPhone(value);
  if (field === 'price') value = cleanPrice(value);
  pendingOrders[idx][field] = value;
  if (field === 'city' && !pendingOrders[idx].address) pendingOrders[idx].address = value;
  setTimeout(renderPendingTable, 50);
}

function removePending(idx) {
  pendingOrders.splice(idx, 1);
  renderPendingTable();
}

function togglePendingSelect() {
  const count = document.querySelectorAll('.pending-chk:checked').length;
  const bar = document.getElementById('pending-bulk');
  if (count > 0) {
    bar.classList.add('visible');
    document.getElementById('pending-bulk-count').textContent = `${count} selected`;
  } else {
    bar.classList.remove('visible');
  }
}

async function sendSelectedPending() {
  const checked = [...document.querySelectorAll('.pending-chk:checked')];
  if (!checked.length) return;
  for (const chk of checked) {
    const idx = parseInt(chk.dataset.idx);
    await sendSinglePending(idx);
  }
}

// ─────────────────────────────────────────
//  SENDIT API
// ─────────────────────────────────────────
async function getSenditToken() {
  const res = await fetch(`${CONFIG.SENDIT_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ public_key: CONFIG.SENDIT_PUBLIC_KEY, secret_key: CONFIG.SENDIT_SECRET_KEY })
  });
  const data = await res.json();
  if (!data.data?.token) throw new Error('Sendit login failed: ' + JSON.stringify(data));
  return data.data.token;
}

async function sendToSendit(order) {
  const token = await getSenditToken();
  const city = await resolveCityForOrder(order);
  const fullAddress = (order.address && String(order.address).trim())
    ? String(order.address).trim()
    : (order.city || city.name);

  // Build base payload
  const payload = {
    pickup_district_id: CONFIG.PICKUP_DISTRICT_ID || 31,
    district_id: city.id,
    name: order.name || 'Client',
    phone: cleanPhone(order.phone),
    products: order.product,
    amount: cleanPrice(order.price),
    address: fullAddress,
    comment: '(SH)',
    packaging_id: 1
  };

  // ── Inject reference if one is active ──────────────────────
  const refValue = getActiveReferenceValue();
  if (refValue) {
    payload.reference = refValue;
  }
  // ───────────────────────────────────────────────────────────

  const res = await fetch(`${CONFIG.SENDIT_BASE_URL}/deliveries`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res;
}

async function sendSinglePending(idx) {
  const order = pendingOrders[idx];
  const errs = validateOrder(order);
  if (errs.length) { toast('error', 'Validation Failed', errs.join(', ')); return; }

  const btn = document.querySelector(`#pending-tbody tr[data-id="${order.id}"] .btn-success`);
  if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner"></span>`; }

  try {
    const res = await sendToSendit(order);
    const data = await res.json();

    if (res.ok && (data.status === 'success' || data.data)) {
      const labelUrl = data.data?.label_url || '';
      const saved = { ...order, status: 'sent', sentAt: Date.now(), labelUrl, senditData: data.data };
      sentOrders.unshift(saved);
      addCustomerRecord(saved);
      saveData();
      updateStats();
      pendingOrders.splice(idx, 1);
      renderPendingTable();
      toast('success', 'Order Sent! 🎉', `${order.name} — ${order.product}`);
      showConfirmMessage(saved, labelUrl);
    } else {
      throw new Error(data.message || JSON.stringify(data));
    }
  } catch(e) {
    toast('error', 'Send Failed', e.message);
    if (btn) { btn.disabled = false; btn.innerHTML = '📦 Send'; }
  }
}

// ─────────────────────────────────────────
//  CUSTOMER PROFILES
// ─────────────────────────────────────────
function addCustomerRecord(order) {
  const phone = cleanPhone(order.phone);
  if (!customers[phone]) {
    customers[phone] = { name: order.name, phone, orders: [], notes: order.notes || '' };
  } else {
    customers[phone].name = order.name;
  }
  customers[phone].orders.push({
    id: order.id, product: order.product, price: order.price,
    status: order.status, sentAt: order.sentAt
  });
  if (order.notes) customers[phone].notes = order.notes;
}

// ─────────────────────────────────────────
//  CONFIRMATION MESSAGE
// ─────────────────────────────────────────
function showConfirmMessage(order, labelUrl) {
  const msg = generateConfirmMsg(order);
  document.getElementById('confirm-msg-body').textContent = msg;
  document.getElementById('confirm-label-url').href = labelUrl || '#';
  document.getElementById('confirm-label-btn').style.display = labelUrl ? 'inline-flex' : 'none';
  openModal('modal-confirm');
}

function generateConfirmMsg(order) {
  const price = fmtPrice(order.price);
  return `✅ Commande confirmée !

Bonjour ${order.name},

Votre commande a bien été enregistrée :
📦 Produit : ${order.product}
💰 Prix : ${price}
📍 Adresse : ${order.address || order.city}
📞 Téléphone : ${order.phone}

Notre livreur vous contactera prochainement.
Merci pour votre confiance ! 🙏

— Sendit Order Tool`;
}

function copyConfirmMsg() {
  const text = document.getElementById('confirm-msg-body').textContent;
  navigator.clipboard.writeText(text).then(() => toast('success', 'Copied!', 'Message copied to clipboard.'));
}

// ─────────────────────────────────────────
//  ORDERS TABLE (sent orders)
// ─────────────────────────────────────────
function renderOrdersTable() {
  selectedRows.clear();
  updateBulkBar();

  let orders = [...sentOrders];

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    orders = orders.filter(o =>
      (o.name||'').toLowerCase().includes(q) ||
      (o.phone||'').includes(q) ||
      (o.city||'').toLowerCase().includes(q) ||
      (o.address||'').toLowerCase().includes(q) ||
      (o.product||'').toLowerCase().includes(q)
    );
  }
  if (filterStatus) orders = orders.filter(o => o.status === filterStatus);
  if (filterCity)   orders = orders.filter(o => (o.city||'').toLowerCase().includes(filterCity.toLowerCase()));
  if (filterProduct)orders = orders.filter(o => (o.product||'').toLowerCase().includes(filterProduct.toLowerCase()));

  orders.sort((a, b) => {
    let va = a[sortField], vb = b[sortField];
    if (sortField === 'price') { va = cleanPrice(va); vb = cleanPrice(vb); }
    if (va < vb) return sortAsc ? -1 : 1;
    if (va > vb) return sortAsc ?  1 : -1;
    return 0;
  });

  const tbody = document.getElementById('orders-tbody');
  const empty = document.getElementById('orders-empty');
  const wrap  = document.getElementById('orders-table-wrap');

  if (!orders.length) {
    empty.style.display = 'block';
    wrap.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  wrap.style.display = 'block';

  tbody.innerHTML = orders.map(o => `
    <tr data-id="${o.id}">
      <td><input type="checkbox" class="order-chk" data-id="${o.id}" onchange="toggleOrderSelect('${o.id}',this.checked)"></td>
      <td><span style="font-weight:600">${o.name}</span><br><span style="color:var(--text-muted);font-size:0.75rem;font-family:var(--font-mono)">${o.phone}</span></td>
      <td>${o.city}</td>
      <td title="${escapeHtml(o.address || '')}">${escapeHtml(shortText(o.address || o.city, 50))}</td>
      <td>${o.product}</td>
      <td style="font-family:var(--font-mono);font-size:0.82rem">${fmtPrice(o.price)}</td>
      <td>${statusBadge(o.status)}</td>
      <td style="color:var(--text-muted);font-size:0.78rem">${fmtDate(o.sentAt)}</td>
      <td>
        <select class="filter-select" style="width:120px;height:32px;font-size:0.78rem" onchange="updateOrderStatus('${o.id}',this.value)">
          ${['pending','confirmed','sent','delivered','cancelled'].map(s => `<option value="${s}" ${o.status===s?'selected':''}>${capitalize(s)}</option>`).join('')}
        </select>
        ${o.labelUrl ? `<a href="${o.labelUrl}" target="_blank" class="btn btn-ghost btn-sm" style="margin-left:4px">🏷️</a>` : ''}
        <button class="btn btn-danger btn-sm" style="margin-left:4px" onclick="deleteOrder('${o.id}')">🗑</button>
      </td>
    </tr>`).join('');
}

function statusBadge(status) {
  return `<span class="status-badge status-${status}">${capitalize(status)}</span>`;
}

function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

function updateOrderStatus(id, status) {
  const order = sentOrders.find(o => o.id === id);
  if (order) { order.status = status; saveData(); updateStats(); }
}

function deleteOrder(id) {
  if (!confirm('Delete this order?')) return;
  sentOrders = sentOrders.filter(o => o.id !== id);
  saveData(); updateStats(); renderOrdersTable();
}

function toggleOrderSelect(id, checked) {
  if (checked) selectedRows.add(id); else selectedRows.delete(id);
  updateBulkBar();
}

function updateBulkBar() {
  const bar = document.getElementById('orders-bulk-bar');
  const cnt = document.getElementById('orders-bulk-count');
  if (selectedRows.size > 0) {
    bar.classList.add('visible');
    cnt.textContent = `${selectedRows.size} selected`;
  } else {
    bar.classList.remove('visible');
  }
}

function bulkUpdateStatus(status) {
  selectedRows.forEach(id => {
    const o = sentOrders.find(x => x.id === id);
    if (o) o.status = status;
  });
  selectedRows.clear();
  saveData(); updateStats(); renderOrdersTable();
  toast('success', 'Status Updated', `Selected orders → ${status}`);
}

function bulkDelete() {
  if (!confirm(`Delete ${selectedRows.size} order(s)?`)) return;
  sentOrders = sentOrders.filter(o => !selectedRows.has(o.id));
  selectedRows.clear();
  saveData(); updateStats(); renderOrdersTable();
}

function selectAllOrders(checked) {
  document.querySelectorAll('.order-chk').forEach(chk => {
    chk.checked = checked;
    const id = chk.dataset.id;
    if (checked) selectedRows.add(id); else selectedRows.delete(id);
  });
  updateBulkBar();
}

function handleSortClick(field) {
  if (sortField === field) sortAsc = !sortAsc;
  else { sortField = field; sortAsc = false; }
  document.querySelectorAll('thead th').forEach(th => th.classList.remove('sorted'));
  const th = document.getElementById('th-' + field);
  if (th) { th.classList.add('sorted'); th.querySelector('.sort-arrow').textContent = sortAsc ? '▲' : '▼'; }
  renderOrdersTable();
}

// ─────────────────────────────────────────
//  EXPORT CSV / JSON
// ─────────────────────────────────────────
function exportCSV() {
  const cols = ['name','phone','city','address','product','price','status','sentAt'];
  const rows = [cols.join(',')];
  sentOrders.forEach(o => {
    rows.push(cols.map(c => {
      let v = c === 'sentAt' ? fmtDate(o[c]) : (o[c] || '');
      return `"${String(v).replace(/"/g,'""')}"`;
    }).join(','));
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `orders-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  toast('success', 'CSV Exported', `${sentOrders.length} orders downloaded.`);
}

function exportJSON() {
  const blob = new Blob([JSON.stringify({ orders: sentOrders, customers }, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `sendit-data-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  toast('success', 'JSON Exported');
}

// ─────────────────────────────────────────
//  CUSTOMERS VIEW
// ─────────────────────────────────────────
function renderCustomers() {
  const container = document.getElementById('customers-container');
  const entries = Object.values(customers);

  if (!entries.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">👤</div><p>No customers yet. Send orders to build customer profiles.</p></div>`;
    return;
  }

  container.innerHTML = entries.map(c => {
    const totalSpent = c.orders.reduce((s,o) => s + cleanPrice(o.price), 0);
    const lastOrder  = c.orders[c.orders.length-1];
    return `<div class="customer-card">
      <div class="customer-card-header">
        <div class="customer-avatar">${avatarLetter(c.name)}</div>
        <div>
          <div class="customer-name">${c.name}</div>
          <div class="customer-phone">${c.phone}</div>
        </div>
        <div style="margin-left:auto;text-align:right">
          <div style="font-size:0.82rem;font-weight:700;color:var(--green)">${totalSpent.toLocaleString('fr-MA')} DH</div>
          <div style="font-size:0.72rem;color:var(--text-muted)">${c.orders.length} order(s)</div>
        </div>
      </div>
      ${c.notes ? `<div class="customer-notes">🤖 ${c.notes}</div>` : ''}
      <div class="customer-tags" style="margin-top:10px">
        ${c.orders.map(o => `<span class="tag">${o.product}</span>`).join('')}
        ${lastOrder ? `<span class="tag" style="color:var(--text-muted)">${fmtDate(lastOrder.sentAt)}</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────
//  SETTINGS VIEW
// ─────────────────────────────────────────
function loadSettings() {
  if (typeof CONFIG === 'undefined') return;
  setVal('setting-sendit-public', CONFIG.SENDIT_PUBLIC_KEY || '');
  setVal('setting-sendit-secret', CONFIG.SENDIT_SECRET_KEY || '');
  setVal('setting-pickup', CONFIG.PICKUP_DISTRICT_ID || 31);
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

function saveSettings() {
  if (typeof CONFIG === 'undefined') { toast('error', 'Config not found'); return; }
  CONFIG.SENDIT_PUBLIC_KEY  = document.getElementById('setting-sendit-public').value.trim();
  CONFIG.SENDIT_SECRET_KEY  = document.getElementById('setting-sendit-secret').value.trim();
  CONFIG.PICKUP_DISTRICT_ID = parseInt(document.getElementById('setting-pickup').value);
  toast('success', 'Settings Saved', 'Changes apply to this session. Edit config.js for permanent changes.');
}

function clearAllData() {
  if (!confirm('This will delete ALL orders and customers from localStorage. Are you sure?')) return;
  sentOrders = []; customers = {};
  saveData(); updateStats();
  renderOrdersTable(); renderCustomers();
  toast('info', 'Data Cleared');
}

// ═══════════════════════════════════════════════════════
//  DRAG & DROP + FILE UPLOAD
//  Routes .txt → text reader, images → multi-OCR queue
// ═══════════════════════════════════════════════════════

function initDropZone() {
  const zone  = document.getElementById('drop-zone');
  const input = document.getElementById('file-input');

  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('dragover');
  });
  zone.addEventListener('dragleave', e => {
    // Only remove if leaving the zone itself (not a child element)
    if (!zone.contains(e.relatedTarget)) zone.classList.remove('dragover');
  });
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('dragover');
    handleFileList(e.dataTransfer.files);
  });
  zone.addEventListener('click', () => input.click());
  zone.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') input.click(); });
  input.addEventListener('change', () => {
    if (input.files.length) handleFileList(input.files);
    input.value = ''; // reset so same files can be re-added
  });
}

/**
 * Route a FileList: text files go straight to textarea,
 * images accumulate in the OCR gallery queue.
 */
function handleFileList(files) {
  const images = [];
  for (const file of files) {
    const isImage = /^image\/(png|jpeg|webp)/.test(file.type) || /\.(png|jpg|jpeg|webp)$/i.test(file.name);
    const isText  = file.type === 'text/plain' || /\.(txt|csv)$/i.test(file.name);
    if (isImage) {
      images.push(file);
    } else if (isText) {
      const reader = new FileReader();
      reader.onload = ev => {
        document.getElementById('message-input').value = ev.target.result;
        toast('info', 'File loaded', file.name);
      };
      reader.readAsText(file);
    } else {
      toast('error', 'Unsupported file', `${file.name} — use .txt, .png, .jpg, .jpeg, or .webp`);
    }
  }
  if (images.length) addImagesToGallery(images);
}


// ═══════════════════════════════════════════════════════
//  MULTI-SCREENSHOT OCR GALLERY
//
//  Each item in ocrQueue:
//  {
//    id:         unique string,
//    file:       File object,
//    objectUrl:  blob URL for preview (revoked after OCR),
//    status:     'pending' | 'running' | 'done' | 'error',
//    progress:   0–1 (recognizing text phase),
//    text:       extracted string (after done),
//    error:      error message (after error)
//  }
// ═══════════════════════════════════════════════════════

let ocrQueue    = [];   // array of queue items (see above)
let ocrRunning  = false; // guard against double-start
let ocrCurrentItemRef = null; // points to the item currently being recognized
const OCR_MAX_WIDTH = 1400;
const OCR_MAX_PIXELS = 2600000;
const OCR_IMAGE_QUALITY = 0.75;
const OCR_ITEM_TIMEOUT_MS = 90000;
const OCR_WORKER_TIMEOUT_MS = 45000;

function bytesToLabel(bytes) {
  if (!bytes) return '0 KB';
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getCanvasMimeType() {
  const canvas = document.createElement('canvas');
  try {
    return canvas.toDataURL('image/webp', 0.75).startsWith('data:image/webp')
      ? 'image/webp'
      : 'image/jpeg';
  } catch (_) {
    return 'image/jpeg';
  }
}

function loadImageElement(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not read this screenshot.'));
    };
    img.src = url;
  });
}

function canvasToBlobSafe(canvas, mimeType, quality) {
  return new Promise((resolve, reject) => {
    if (canvas.toBlob) {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('Image compression failed.'));
      }, mimeType, quality);
      return;
    }

    try {
      const dataUrl = canvas.toDataURL(mimeType, quality);
      const byteString = atob(dataUrl.split(',')[1]);
      const bytes = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) bytes[i] = byteString.charCodeAt(i);
      resolve(new Blob([bytes], { type: mimeType }));
    } catch (err) {
      reject(err);
    }
  });
}

async function optimizeImageForOCR(item) {
  const source = item.file;
  const img = await loadImageElement(source);
  const sourceWidth = img.naturalWidth || img.width;
  const sourceHeight = img.naturalHeight || img.height;
  if (!sourceWidth || !sourceHeight) throw new Error('Could not read screenshot dimensions.');

  let scale = Math.min(1, OCR_MAX_WIDTH / sourceWidth);
  const scaledPixels = sourceWidth * scale * sourceHeight * scale;
  if (scaledPixels > OCR_MAX_PIXELS) {
    scale *= Math.sqrt(OCR_MAX_PIXELS / scaledPixels);
  }

  const width = Math.max(1, Math.round(sourceWidth * scale));
  const height = Math.max(1, Math.round(sourceHeight * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) throw new Error('Canvas is not available for image optimization.');

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);

  const mimeType = getCanvasMimeType();
  const blob = await canvasToBlobSafe(canvas, mimeType, OCR_IMAGE_QUALITY);
  const ext = mimeType === 'image/webp' ? 'webp' : 'jpg';
  let optimizedFile;
  const optimizedName = `${source.name.replace(/\.[^.]+$/, '')}-ocr.${ext}`;
  if (typeof File === 'function') {
    optimizedFile = new File([blob], optimizedName, {
      type: mimeType,
      lastModified: Date.now()
    });
  } else {
    optimizedFile = blob;
    optimizedFile.name = optimizedName;
  }

  return {
    file: optimizedFile,
    width,
    height,
    originalWidth: sourceWidth,
    originalHeight: sourceHeight,
    originalSize: source.size,
    optimizedSize: optimizedFile.size
  };
}

function withTimeout(promise, ms, message) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), ms);
  });

  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

async function createOcrWorker() {
  if (typeof Tesseract === 'undefined') {
    throw new Error('OCR library is not loaded. Refresh the page and try again.');
  }

  // Tesseract.js v5 correct API: createWorker(langs, oem, options)
  // - loadLanguage() and initialize() are no-ops in v5; language goes here.
  // - Pinned workerPath + corePath prevent the secondary CDN fetch that causes
  //   silent hangs on mobile / slow connections ("stuck on Preparing OCR").
  // - Arabic traineddata (~15 MB) removed — main cause of mobile freeze.
  //   French + English covers romanised Darija; the AI step handles the rest.
  return withTimeout(
    Tesseract.createWorker('fra+eng', 1, {
      workerPath: 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/worker.min.js',
      corePath:   'https://cdn.jsdelivr.net/npm/tesseract.js-core@v5.0.0',
      logger: m => {
        if (m.status === 'recognizing text' && ocrCurrentItemRef) {
          ocrCurrentItemRef.progress = Math.max(0.02, m.progress || 0);
          updateThumbProgress(ocrCurrentItemRef.id, ocrCurrentItemRef.progress);
        }
      }
    }),
    OCR_WORKER_TIMEOUT_MS,
    'OCR took too long to start. Check your internet connection and try again.'
  );
}

// ── ADD images to the gallery ────────────────────────
function addImagesToGallery(files) {
  for (const file of files) {
    // Deduplicate by name+size (simple heuristic)
    const alreadyIn = ocrQueue.some(q => q.file.name === file.name && q.file.size === file.size);
    if (alreadyIn) continue;

    const item = {
      id:        'ocr_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      file,
      objectUrl: URL.createObjectURL(file),
      status:    'pending',
      progress:  0,
      text:      '',
      error:     '',
      optimizedFile: null,
      optimizedUrl: '',
      originalSize: file.size,
      optimizedSize: 0,
      dimensions: ''
    };
    ocrQueue.push(item);
  }
  renderGallery();
  showGalleryWrap();
}

// ── CLEAR all screenshots and reset ─────────────────
function clearAllScreenshots() {
  // Revoke all object URLs to prevent memory leaks
  ocrQueue.forEach(item => {
    if (item.objectUrl) URL.revokeObjectURL(item.objectUrl);
    if (item.optimizedUrl && item.optimizedUrl !== item.objectUrl) URL.revokeObjectURL(item.optimizedUrl);
  });
  ocrQueue = [];
  ocrRunning = false;
  setRunBtnState(false);
  renderGallery();
  document.getElementById('ocr-gallery-wrap').style.display = 'none';
  setOverallProgress(0, 0, false);
}

// ── REMOVE a single screenshot from the queue ───────
function removeScreenshot(id) {
  const idx = ocrQueue.findIndex(q => q.id === id);
  if (idx === -1) return;
  const item = ocrQueue[idx];
  // Revoke its URL
  if (item.objectUrl) URL.revokeObjectURL(item.objectUrl);
  if (item.optimizedUrl && item.optimizedUrl !== item.objectUrl) URL.revokeObjectURL(item.optimizedUrl);
  ocrQueue.splice(idx, 1);
  renderGallery();
  if (!ocrQueue.length) {
    document.getElementById('ocr-gallery-wrap').style.display = 'none';
  }
}

// ── SHOW the gallery wrap ────────────────────────────
function showGalleryWrap() {
  document.getElementById('ocr-gallery-wrap').style.display = 'block';
}

// ── RENDER the full thumbnail grid ──────────────────
function renderGallery() {
  const grid       = document.getElementById('ocr-thumb-grid');
  const countBadge = document.getElementById('ocr-gallery-count');
  const runBtn     = document.getElementById('ocr-run-btn');
  const total      = ocrQueue.length;

  // Update count badge
  if (countBadge) countBadge.textContent = total;

  // Show "Run OCR" button only if there are retryable items and not currently running
  const hasPending = ocrQueue.some(q => q.status === 'pending' || q.status === 'error');
  if (runBtn) runBtn.style.display = (hasPending && !ocrRunning) ? 'inline-flex' : 'none';

  if (!total) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = ocrQueue.map((item, index) => {
    const statusClass = `ocr-thumb-status--${item.status}`;
    const statusIcon  = {
      pending: '⏳',
      running: '',        // spinner rendered separately
      done:    '✅',
      error:   '❌'
    }[item.status] || '';

    const pct = Math.round(item.progress * 100);
    const isOptimizing = item.status === 'optimizing';
    const isRunning = item.status === 'running';
    const isDone    = item.status === 'done';
    const isError   = item.status === 'error';
    const meta = item.optimizedSize
      ? `${bytesToLabel(item.originalSize)} -> ${bytesToLabel(item.optimizedSize)}${item.dimensions ? ` / ${item.dimensions}` : ''}`
      : bytesToLabel(item.originalSize);

    return `
    <div class="ocr-thumb ${statusClass}" id="thumb-${item.id}" draggable="true"
         ondragstart="thumbDragStart(event,'${item.id}')"
         ondragover="thumbDragOver(event)"
         ondrop="thumbDrop(event,'${item.id}')">

      <!-- Thumbnail image -->
      <div class="ocr-thumb-img-wrap">
        <img class="ocr-thumb-img" src="${item.objectUrl}" alt="Screenshot ${index + 1}" loading="lazy" />

        <!-- Overlay: compression / OCR spinner -->
        ${isOptimizing ? `
        <div class="ocr-thumb-overlay">
          <span class="spinner spinner--lg"></span>
          <span class="ocr-thumb-pct">Optimizing</span>
        </div>` : ''}

        ${isRunning ? `
        <div class="ocr-thumb-overlay">
          <span class="spinner spinner--lg"></span>
          <span class="ocr-thumb-pct">${pct}%</span>
        </div>` : ''}

        <!-- Overlay: error state -->
        ${isError ? `
        <div class="ocr-thumb-overlay ocr-thumb-overlay--error">
          <span style="font-size:1.4rem">❌</span>
        </div>` : ''}

        <!-- Progress bar at bottom of image (running) -->
        ${isRunning ? `
        <div class="ocr-thumb-progress">
          <div class="ocr-thumb-progress-bar" style="width:${pct}%"></div>
        </div>` : ''}
      </div>

      <!-- Thumb footer -->
      <div class="ocr-thumb-footer">
        <span class="ocr-thumb-index">#${index + 1}</span>
        ${isOptimizing ? `<span class="ocr-thumb-badge ocr-thumb-badge--optimizing">Optimizing</span>` : ''}
        ${isDone   ? `<span class="ocr-thumb-badge ocr-thumb-badge--done">Done</span>` : ''}
        ${isError  ? `<span class="ocr-thumb-badge ocr-thumb-badge--error" title="${item.error}">Error</span>` : ''}
        ${item.status === 'pending' ? `<span class="ocr-thumb-badge ocr-thumb-badge--pending">Pending</span>` : ''}
        <button class="ocr-thumb-remove" title="Remove" onclick="removeScreenshot('${item.id}')">✕</button>
      </div>
      <div class="ocr-thumb-meta" title="${meta}">${meta}</div>

    </div>`;
  }).join('');
}

// ── OVERALL progress bar (shown while OCR runs) ──────
function setOverallProgress(done, total, visible, customLabel = '') {
  const wrap  = document.getElementById('ocr-overall-progress');
  const bar   = document.getElementById('ocr-overall-bar');
  const label = document.getElementById('ocr-overall-label');
  if (!wrap) return;
  wrap.style.display  = visible ? 'flex' : 'none';
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  if (bar)   bar.style.width    = pct + '%';
  if (label) label.textContent = customLabel || `Processing ${done} / ${total} (${pct}%)`;
}

// ── UPDATE run-button spinner ────────────────────────
function setRunBtnState(running, text = '') {
  const btn     = document.getElementById('ocr-run-btn');
  const spinner = btn ? btn.querySelector('.ocr-run-spinner') : null;
  const label   = document.getElementById('ocr-run-label');
  if (!btn) return;
  btn.disabled = running;
  if (spinner) spinner.style.display = running ? 'inline-block' : 'none';
  if (label)   label.textContent     = text || (running ? 'Running...' : 'Run OCR');
}


// ═══════════════════════════════════════════════════════
//  RUN ALL OCR  —  sequential to avoid Tesseract worker
//  conflicts and to keep memory usage low on mobile.
//  We process images one at a time with a shared worker.
// ═══════════════════════════════════════════════════════

async function runAllOCR() {
  if (ocrRunning) return;
  const pending = ocrQueue.filter(q => q.status === 'pending' || q.status === 'error');
  if (!pending.length) {
    toast('info', 'Nothing to process', 'All screenshots are already done.');
    return;
  }

  ocrRunning = true;
  setRunBtnState(true, 'Preparing...');
  setOverallProgress(0, pending.length, true, 'Preparing OCR...');
  renderGallery();

  let worker = null;
  let doneCount = 0;

  try {
    worker = await createOcrWorker();

    for (const item of pending) {
      item.status = 'optimizing';
      item.progress = 0;
      item.text = '';
      item.error = '';
      setRunBtnState(true, 'Optimizing...');
      setOverallProgress(doneCount, pending.length, true, `Optimizing ${doneCount + 1} / ${pending.length}...`);
      renderGallery();

      try {
        const optimized = await optimizeImageForOCR(item);
        item.optimizedFile = optimized.file;
        item.originalSize = optimized.originalSize;
        item.optimizedSize = optimized.optimizedSize;
        item.dimensions = `${optimized.width}x${optimized.height}`;

        const optimizedUrl = URL.createObjectURL(optimized.file);
        if (item.objectUrl) URL.revokeObjectURL(item.objectUrl);
        if (item.optimizedUrl && item.optimizedUrl !== item.objectUrl) URL.revokeObjectURL(item.optimizedUrl);
        item.objectUrl = optimizedUrl;
        item.optimizedUrl = optimizedUrl;

        item.status = 'running';
        item.progress = 0.02;
        setRunBtnState(true, 'Running...');
        setOverallProgress(doneCount, pending.length, true, `Running OCR ${doneCount + 1} / ${pending.length}...`);
        renderGallery();

        // In Tesseract.js v5 the logger is fixed at createWorker() time.
        // We use a shared mutable ref so the closure inside createOcrWorker's
        // logger option can forward to whatever the current item's tracker is.
        // ocrCurrentItemRef is set just before recognize() and cleared after.
        ocrCurrentItemRef = item;
        const result = await withTimeout(
          worker.recognize(item.optimizedFile),
          OCR_ITEM_TIMEOUT_MS,
          'OCR timed out on this screenshot. It may be too tall or too blurry.'
        );
        ocrCurrentItemRef = null;

        const text = (result?.data?.text || '').trim();
        item.progress = 1;
        item.text = text;
        item.status = text ? 'done' : 'error';
        item.error = text ? '' : 'No text detected';
      } catch (err) {
        item.status = 'error';
        item.error = err.message || 'OCR failed';
        item.progress = 0;
        console.error(`OCR failed for ${item.file.name}:`, err);

        if (/timed out|too long/i.test(item.error) && worker) {
          try { await worker.terminate(); } catch (_) {}
          worker = await createOcrWorker();
        }
      }

      doneCount++;
      setOverallProgress(doneCount, pending.length, true);
      renderGallery();

      // Let mobile Safari breathe between screenshots.
      await new Promise(resolve => setTimeout(resolve, 80));
    }
  } catch (err) {
    toast('error', 'OCR stopped', err.message || 'OCR could not continue.');
    ocrQueue.forEach(item => {
      if (item.status === 'running' || item.status === 'optimizing') {
        item.status = 'error';
        item.error = err.message || 'OCR interrupted';
        item.progress = 0;
      }
    });
  } finally {
    if (worker) {
      try { await worker.terminate(); } catch (_) {}
    }

    ocrRunning = false;
    setRunBtnState(false);
    setOverallProgress(doneCount, pending.length, false);
    renderGallery();
  }

  mergeOcrTextToTextarea();

  const successCount = ocrQueue.filter(q => q.status === 'done').length;
  const errorCount = ocrQueue.filter(q => q.status === 'error').length;
  if (successCount > 0) {
    toast(
      'success',
      `OCR complete - ${successCount} screenshot${successCount > 1 ? 's' : ''}`,
      errorCount > 0 ? `${errorCount} failed or timed out. Text loaded below.` : 'Text loaded below - click Analyze.'
    );
  } else if (errorCount > 0) {
    toast('error', 'OCR failed', 'Screenshots failed or timed out. Try fewer or clearer screenshots.');
  }
}

/**
 * Lightweight per-thumb progress update while running —
 * avoids full renderGallery() on every Tesseract tick.
 */
function updateThumbProgress(id, progress) {
  const pct = Math.round(progress * 100);
  const thumb = document.getElementById('thumb-' + id);
  if (!thumb) return;
  const bar  = thumb.querySelector('.ocr-thumb-progress-bar');
  const pctEl = thumb.querySelector('.ocr-thumb-pct');
  if (bar)   bar.style.width   = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}

/**
 * Merge all successfully OCR'd texts in queue order,
 * separated by a clear visual divider, into the textarea.
 */
function mergeOcrTextToTextarea() {
  const done = ocrQueue.filter(q => q.status === 'done' && q.text);
  if (!done.length) return;

  const merged = done.map((item, i) => {
    const label = `--- Screenshot ${i + 1}: ${item.file.name} ---`;
    return `${label}\n${item.text}`;
  }).join('\n\n');

  const textarea = document.getElementById('message-input');
  textarea.value = merged;
  textarea.dispatchEvent(new Event('input'));
}


// ═══════════════════════════════════════════════════════
//  DRAG-TO-REORDER thumbnails
// ═══════════════════════════════════════════════════════

let dragSrcId = null;

function thumbDragStart(e, id) {
  dragSrcId = id;
  e.dataTransfer.effectAllowed = 'move';
  const thumb = document.getElementById('thumb-' + id);
  if (thumb) thumb.classList.add('ocr-thumb--dragging');
}

function thumbDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function thumbDrop(e, targetId) {
  e.preventDefault();
  if (!dragSrcId || dragSrcId === targetId) {
    dragSrcId = null;
    return;
  }
  const srcIdx = ocrQueue.findIndex(q => q.id === dragSrcId);
  const tgtIdx = ocrQueue.findIndex(q => q.id === targetId);
  if (srcIdx === -1 || tgtIdx === -1) { dragSrcId = null; return; }

  // Swap in array
  const [moved] = ocrQueue.splice(srcIdx, 1);
  ocrQueue.splice(tgtIdx, 0, moved);
  dragSrcId = null;
  renderGallery();
  // If any are done, re-merge text in new order
  if (ocrQueue.some(q => q.status === 'done')) mergeOcrTextToTextarea();
}

// ─────────────────────────────────────────
//  FILTER / SEARCH HANDLERS
// ─────────────────────────────────────────
function handleSearch(e) { searchQuery = e.target.value; renderOrdersTable(); }
function handleFilterStatus(e) { filterStatus = e.target.value; renderOrdersTable(); }
function handleFilterCity(e) { filterCity = e.target.value; renderOrdersTable(); }
function handleFilterProduct(e) { filterProduct = e.target.value; renderOrdersTable(); }

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  loadSettings();
  loadReference();   // ← restore persisted reference toggle
  updateStats();
  initDistrictLoader(); // ← load API districts + schedule weekly 5 AM GMT refresh
  startStatusPoller();  // ← begin periodic Sendit delivery status polling
  initDropZone();
  navigate('extract');

  // Sidebar mobile
  document.getElementById('hamburger-btn').addEventListener('click', openSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  // Nav items
  document.querySelectorAll('.nav-item[data-view]').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.view));
  });

  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('open');
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // Analyze button
  document.getElementById('btn-analyze').addEventListener('click', handleAnalyze);

  // Send all valid pending
  document.getElementById('btn-send-all').addEventListener('click', async () => {
    const valid = pendingOrders.filter(o => validateOrder(o).length === 0);
    if (!valid.length) { toast('error', 'No valid orders', 'Fix validation errors first.'); return; }
    for (let i = pendingOrders.length - 1; i >= 0; i--) {
      if (validateOrder(pendingOrders[i]).length === 0) await sendSinglePending(i);
    }
  });

  // Export
  document.getElementById('btn-export-csv').addEventListener('click', exportCSV);
  document.getElementById('btn-export-json').addEventListener('click', exportJSON);

  // Confirm modal
  document.getElementById('btn-copy-confirm').addEventListener('click', copyConfirmMsg);

  // Sort headers
  ['name','city','product','price','timestamp'].forEach(f => {
    const th = document.getElementById('th-' + f);
    if (th) th.addEventListener('click', () => handleSortClick(f));
  });

  // Search / filter
  document.getElementById('search-input').addEventListener('input', handleSearch);
  document.getElementById('filter-status').addEventListener('change', handleFilterStatus);
  document.getElementById('filter-city-input').addEventListener('input', handleFilterCity);
  document.getElementById('filter-product-input').addEventListener('input', handleFilterProduct);

  // Select all
  document.getElementById('select-all-orders').addEventListener('change', e => selectAllOrders(e.target.checked));

  // Bulk actions
  document.getElementById('btn-bulk-delivered').addEventListener('click', () => bulkUpdateStatus('delivered'));
  document.getElementById('btn-bulk-cancelled').addEventListener('click', () => bulkUpdateStatus('cancelled'));
  document.getElementById('btn-bulk-delete').addEventListener('click', bulkDelete);

  // Pending bulk send
  document.getElementById('btn-send-selected').addEventListener('click', sendSelectedPending);

  // Settings
  document.getElementById('btn-save-settings').addEventListener('click', saveSettings);
  document.getElementById('btn-clear-data').addEventListener('click', clearAllData);
});
