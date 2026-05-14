/* =====================================================
   script.js  —  Sendit Order Tool
   ===================================================== */

// ─────────────────────────────────────────
//  CITY MAP  (ID lookup for Sendit API)
// ─────────────────────────────────────────
const CITY_MAP = {
  "ighrem n'ougdal":617,"anzal":616,"timedline":615,"tabounte ouarzazate":614,"tabourahte":613,"agouim":612,"amerzgane":611,"aït ben haddou":610,"sidi bouzid ( safi )":609,"aquermoud":608,"bni boufrah":607,"galaz":606,"ahejarr ennehal":604,"melloussa":603,"imi ouaddar":602,"mirleft":601,"ain lahcen":600,"beni hassane":598,"belyounech":597,"azla":596,"bni ahmed cherqia":595,"kaa asrass":594,"el jebeha":593,"stehat":592,"ben karrich":591,"hajria ouled daoud":589,"ourtzagh":588,"fricha":587,"khlalfa":586,"kariat ba mohamed":585,"sebt ben sassi":584,"sidi zouine":583,"chrifia":582,"sidi bou othmane":581,"ben rahmoun":580,"asni":579,"belaaguid":577,"mohammedia - alia":576,"mohammedia - hay wafa":575,"mohammedia - hassania":574,"mohammedia - nassim":573,"mohammedia - al massira":572,"mohammedia - al wahda":571,"mohammedia - kasbah":570,"mohammedia - parc":569,"achakkar":568,"tansifte":567,"tinzouline":566,"taghbalt":565,"tamezmoute":564,"ternata":563,"tazarine":562,"m'hamid el ghizlane":561,"nkoub":560,"fezouata":559,"errouha":558,"ait boudaoud":557,"tagounite":556,"bleida":554,"beni zoli":553,"tamegroute":552,"birkouate":551,"had draa":550,"tafetachte":549,"meskala":548,"tleta-el henchane":547,"douar laarab":546,"ait daoud":545,"tamanar":544,"smimou":543,"tidzi":542,"sidi kaouki":541,"sidi taibi":540,"ouahat sidi brahim":539,"bouskoura-ouled saleh":538,"bouskoura-ville verte":537,"lalla mimouna":536,"dlalha":535,"sebt jahjouhe":534,"bouderbala":533,"timahdite":532,"zouada":531,"khemis du sahel":530,"afsou":529,"oulad amrane région el jadida":528,"el haouzia":527,"messawerr rasso":526,"sidi smaïl":525,"oulad frej":524,"bir jdid":523,"bab marzouka":522,"marnissa":521,"tiddas":520,"guisser":519,"el borouj région de settat":518,"oulad abbou":517,"oulad said région de settat":516,"sidi el ayedi":515,"ras el ain région de settat":514,"ain mediouna":513,"bouhouda":512,"bani walid":511,"ain aicha":510,"tissa":509,"azrou région d'agadir":508,"outat el haj":507,"el kebab":506,"sidi allal tazi":505,"ain leuh":504,"timezgadiouine":503,"bni bouayach":502,"issaguen":501,"targuist":500,"bni hadifa":499,"ait-kamara":498,"boukidaren":497,"ajdir":496,"bassatine el menzeh":495,"jaadar":494,"afra":493,"bouarg":492,"mariouari":491,"beni sidal jbel":490,"kariat arekmane":489,"ouled settout":488,"tafersit":487,"kassita":486,"telat azlaf":485,"tamsamane":484,"boudinar":483,"dar-el kebdani":482,"aïn erreggada":481,"boughriba":480,"madagh":479,"beni drar":478,"tendrara":477,"bouârfa":476,"figuig":475,"el-afak":474,"casablanca - abdelmoumen":473,"ras el ma - cap de l'eau":472,"oulad azzouz dar 16":471,"casablanca - jawhara":470,"casablanca - nassim ii":463,"casablanca - al mostakbal":464,"casablanca - sid al khadir":465,"casablanca - el hana":466,"casablanca - tantonville":469,"casablanca - france ville ii":467,"casablanca - lamkansa":468,"taghazout":462,"loulad":461,"ouled dahhou":459,"tamraght":458,"ouled moumna":457,"agouidir":456,"bouaboud":455,"ighoud":454,"sidi chiker":453,"ait hadi":452,"mejjat - région de marrakech":451,"mzoudia":450,"sidi bou zid chichaoua":449,"sid l'mokhtar":448,"imintanout":447,"beni chiker":446,"tiztoutine":445,"ben taieb":444,"midar":443,"driouch":442,"farkhana":441,"touima":440,"assahrij":439,"laayayta":418,"foum oudi":417,"had boumoussa":416,"bradia":415,"aït ishaq":414,"tighassaline":413,"aguelmous":412,"ouaouizeght":411,"beni ayat":410,"timoulilt":409,"afourar":408,"oulad m'barek":407,"sidi aïssa":406,"oulad ayad":405,"dar ould zidouh":404,"souk sebt":403,"sidi jaber":402,"oulad zmam":401,"oulad ali":400,"oulad youssef":398,"tagzirt":397,"ighrem laâlam":396,"oulad yaich":395,"taliouine":394,"oulad berhil":393,"massa":392,"lagfifat":391,"rencon":390,"cabo negro":389,"laaouamera":388,"khandagour":387,"jebila":386,"mnar":385,"sidi hssain":384,"gueznaia":383,"ghafsai":382,"ghazoua":381,"ait aiaaza":380,"aoulouz":379,"dcheira el jihadia":378,"leqliaa":377,"tarast":376,"loudaya":375,"aourir région agadir":374,"rommani":373,"oulmès":372,"el aarjate":371,"moulay bousselham":368,"mehdia":367,"harhoura":366,"mers el kheir":365,"tahanaout":364,"assa":363,"bab taza":362,"tahla":358,"imzouren":357,"ourika":356,"ait ourir":355,"boulman":354,"oued laou":353,"el mansouria":352,"tizi ouasli":351,"boured":350,"aknoul":349,"oued amlil":347,"el ksiba":344,"khenichet":343,"jorf el melha":341,"aïn-béni-mathar":340,"el aïoun charqiya":339,"aklim":338,"zaio":337,"ayt ihya":336,"msemrir":335,"ait sedrate sahl gharbia":334,"alnif":333,"aït tarzout":332,"ait aissa ou brahim":331,"aoufous":330,"missour":329,"boumia":328,"zaida":327,"tamaris":326,"jerada":325,"boumalen dades":324,"ouazzane":323,"tata":322,"agourai":320,"tinejdad":319,"el gara":318,"mechra bel ksiri":317,"saiss":316,"moulay yâcoub":315,"ain-cheggag":314,"sakia el hamra":313,"tlat bouguedra":311,"souira guedima":310,"ounagha":309,"talmest":308,"oualidia":307,"zeghanghane":304,"essemara":303,"chtouka - région agadir":297,"ait amira":296,"temsia":295,"tikiwin":294,"agdz (zagoura)":293,"taznakht":292,"skoura":291,"echemmaia":290,"skhour rehamna":289,"tamellalt":288,"douar lahna":287,"sidi abdellah ghiyat":286,"lahbichat":285,"sidi moussa région de marrakech":284,"ouled hassoune":283,"souihla":282,"alouidane":281,"chwiter":280,"tameslouht":279,"tssoultante":278,"harbile":277,"dar essalam":276,"ben ahmed":275,"sidi hajjaj région de settat":274,"bni yakhlef":273,"hettan":272,"bounoir":271,"sidi yahya el gharb":270,"zaer":269,"ain chkaf":268,"m'haya":267,"ouislane":266,"mejat région de fès-meknès":265,"skhinate":264,"oulad tayeb":263,"sidi hrazem":262,"deroua":261,"ksar sghir":260,"casablanca - palmier":258,"casablanca - anassi":359,"casablanca - azhar":360,"casablanca - salmia":361,"casablanca - lahraouine":369,"casablanca - ghandi":420,"casablanca - el hank":421,"casablanca - hay tissir":422,"casablanca - hay el farah":423,"casablanca - habous":424,"casablanca - bachkou":425,"casablanca - derb milan":426,"casablanca - derb alkabir":427,"casablanca - val fleurie":428,"casablanca - riveira":429,"casablanca - bournazel":430,"casablanca - floride":431,"casablanca - mandarona":432,"casablanca - polo":433,"casablanca - hay assalama":434,"casablanca - attacharok":435,"casablanca - derb sultan":436,"casablanca - hay al inara":437,"el hajeb":257,"goulmima":255,"boufakrane":253,"sidi bouknadel":233,"zaouiat cheikh":232,"zagoura":229,"youssoufia":228,"tiznit":226,"tit melil":225,"tinghir":224,"tiflet":223,"tetouan":222,"temara":220,"taroudant":218,"taourirt":216,"taounate":215,"tan-tan":214,"tamesna":212,"tamansourt":211,"souk el arbaa du gharb":209,"skhirat":208,"sidi slimane":206,"sidi kacem":205,"sidi ifni":204,"sidi bouzid ( el jadida )":203,"sidi bibi":202,"sidi bennour":201,"sidi allal el bahraoui":200,"sidi addi":198,"sefrou":196,"sebt oulad nemma":195,"sebt gzoula":193,"sebt el guerdane":192,"sala el jadida":191,"sale":190,"saidia":189,"safi":188,"rissani":186,"oulad teima":181,"oued zem":180,"ouarzazate":177,"mrirt":175,"moulay idriss zerhouni":174,"moulay abdellah":172,"midelt":170,"merzouga":168,"meknes":167,"mdiq":165,"laarache":164,"laâyoune":162,"laattaouia":161,"ksar el kebir":159,"khouribga":158,"khenifra":157,"khemis des zemamra":156,"kenitra":155,"kelaat m'gouna":154,"kasba tadla":153,"jamaat shaim":149,"inzegane":148,"imouzzer du kandar":147,"ifran":145,"guercif":143,"guelmim":142,"fquih ben salah":141,"fes":139,"essaouira":137,"errachidia":136,"er-rich":135,"el kelaa des sraghna":133,"haj kaddour":132,"drarga":130,"demnate":126,"dakhla":124,"chichaoua":123,"chefchaouen":122,"boujniba":119,"boujdour":118,"beni mellal":115,"benguerir":113,"belfaa":111,"bejaad":110,"bab berred":108,"azrou région de fès-meknès":107,"azilal":106,"azemmour":105,"assilah":104,"arfoud":102,"anza":100,"aït melloul":96,"ain taoujdate":94,"ain attig":87,"ain el aouda":86,"taza":81,"selouane":76,"oujda":73,"nador":72,"martil":71,"khemisset":70,"fnideq":69,"chellalat mohammedia":68,"biougra":66,"berkane":65,"benslimane":64,"beni ensar":63,"al hoceima":61,"al aaroui":60,"ain harrouda":58,"ahfir":57,"marrakech":56,"el jadida":55,"agadir":54,"rabat":53,"tanger":52,"sidi rahal":51,"bouznika":49,"casablanca - 2 mars":48,"had soualem":47,"casablanca - autres quartiers":46,"nouacer":45,"mediouna":44,"settat":43,"berrechid":42,"dar bouaza":40,"errahma":39,"bouskoura-centre":38,"mohammedia":41,"casablanca - sidi othmane":37,"casablanca - sidi moumen":36,"casablanca - derb omar":35,"casablanca - ancienne medina":34,"casablanca - sidi belyout":33,"casablanca - gauthier":32,"casablanca - centre ville":31,"casablanca - sbata":30,"casablanca - ain borja":29,"casablanca - belvédère":28,"casablanca - roches noires":27,"casablanca - hay moulay rachid":26,"casablanca - garage allal":25,"casablanca - la gironde":24,"casablanca - mers sultan":23,"casablanca - les hôpitaux":22,"casablanca - derb ghalef":21,"casablanca - maarif":20,"casablanca - hay mohammedi":19,"casablanca - oulfa":18,"casablanca - lissassfa":17,"casablanca - cil":16,"casablanca - beauséjour":15,"casablanca - hay hassani":14,"casablanca - bernoussi":13,"casablanca - ben msik":12,"casablanca - ain sebaa":11,"casablanca - oasis":10,"casablanca - hay moulay abdellah":9,"casablanca - californie":8,"casablanca - ain chok":7,"casablanca - racine":6,"casablanca - bourgogne":5,"casablanca - anfa":4,"casablanca - ain diab":3,"casablanca - sidi maârouf":2,"casablanca - al fida":1
};

// City aliases/shortcuts (Darija / common abbreviations)
const CITY_ALIASES = {
  "casa": "casablanca",
  "casablanca": "casablanca",
  "csa": "casablanca",
  "rabat": "rabat",
  "fes": "fes", "fès": "fes",
  "meknes": "meknes", "meknès": "meknes",
  "tanger": "tanger", "tangier": "tanger",
  "agadir": "agadir",
  "marrakech": "marrakech", "marrakesh": "marrakech",
  "oujda": "oujda",
  "tetouan": "tetouan", "tétouan": "tetouan",
  "nador": "nador",
  "kenitra": "kenitra", "kénitra": "kenitra",
  "sale": "sale", "salé": "sale",
  "temara": "temara", "témara": "temara",
  "settat": "settat",
  "berrechid": "berrechid",
  "beni mellal": "beni mellal", "béni mellal": "beni mellal",
  "khouribga": "khouribga",
  "mohammedia": "mohammedia",
  "el jadida": "el jadida",
  "safi": "safi",
  "essaouira": "essaouira",
  "tiznit": "tiznit",
  "agadir inzegane": "inzegane",
  "inzgane": "inzegane",
};

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
let pendingOrders = [];   // extracted, not yet sent
let sentOrders    = [];   // sent via this tool (persisted in localStorage)
let customers     = {};   // phone → {notes, orders[]}
let selectedRows  = new Set();
let currentView   = 'extract';
let sortField     = 'timestamp';
let sortAsc       = false;
let filterStatus  = '';
let filterCity    = '';
let filterProduct = '';
let searchQuery   = '';

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

function findBestCity(cityInput) {
  const raw = String(cityInput).toLowerCase().trim();
  // alias check
  if (CITY_ALIASES[raw]) {
    const aliased = CITY_ALIASES[raw];
    if (CITY_MAP[aliased] !== undefined) return { id: CITY_MAP[aliased], name: aliased };
  }
  // exact
  if (CITY_MAP[raw] !== undefined) return { id: CITY_MAP[raw], name: raw };
  // starts-with (city starts with input)
  for (const k of Object.keys(CITY_MAP)) {
    if (k.startsWith(raw) || raw.startsWith(k)) return { id: CITY_MAP[k], name: k };
  }
  // contains
  for (const k of Object.keys(CITY_MAP)) {
    if (k.includes(raw) || raw.includes(k)) return { id: CITY_MAP[k], name: k };
  }
  return { id: 31, name: 'casablanca - centre ville' };
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
  // page title
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
  setText('stat-delivered', delivered);
  setText('stat-revenue', revenue ? revenue.toLocaleString('fr-MA') + ' DH' : '0 DH');
  setText('stat-pending', pending);
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

For other cities, return the most specific known area possible.- product: what the customer wants to buy
- price: NUMBER ONLY (e.g. 250, not "250 dh")
- notes: short AI summary in English (1-2 sentences about the customer's request/tone)

Return ONLY a JSON array (even for 1 order). No markdown, no explanation.
Format:
[{"name":"","phone":"","city":"","product":"","price":0,"notes":""}]

Message:
${text}`;

  const res = await fetch(CONFIG.API_PROXY_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }, 
     
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
  let content = data.choices[0].message.content.trim();
  // strip markdown fences
  content = content.replace(/```json\s*/g,'').replace(/```\s*/g,'').trim();
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
    pendingOrders = orders.map(o => ({
      id: uid(),
      name: o.name || 'Client',
      phone: cleanPhone(o.phone || ''),
      city: o.city || '',
      product: o.product || '',
      price: o.price || 0,
      notes: o.notes || '',
      status: 'pending',
      timestamp: Date.now()
    }));
    renderPendingTable();
    toast('success', 'Extraction complete', `${pendingOrders.length} order(s) found.`);
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
    return `<tr class="${isValid ? '' : 'invalid'}" data-id="${o.id}">
      <td><input type="checkbox" class="pending-chk" data-idx="${i}" onchange="togglePendingSelect()"></td>
      <td class="editable" onclick="editPending(${i},'name')" data-field="name">${o.name}</td>
      <td class="editable" onclick="editPending(${i},'phone')" data-field="phone"><span style="font-family:var(--font-mono);font-size:0.8rem">${o.phone}</span></td>
      <td class="editable" onclick="editPendingCity(${i})" data-field="city">${o.city} <span style="color:var(--text-muted);font-size:0.7rem">(${city.id})</span></td>
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
  td.innerHTML = `<input class="inline-edit" value="${oldVal}" onblur="savePending(${idx},'${field}',this.value)" onkeydown="if(event.key==='Enter')this.blur()">`;
  td.querySelector('input').focus();
}

function editPendingCity(idx) {
  const o = pendingOrders[idx];
  const td = document.querySelector(`#pending-tbody tr:nth-child(${idx+1}) td[data-field="city"]`);
  if (!td) return;
  const opts = Object.keys(CITY_MAP).map(k => `<option value="${k}" ${k===o.city?'selected':''}>${k}</option>`).join('');
  td.innerHTML = `<select class="inline-edit" style="font-size:0.78rem" onchange="savePending(${idx},'city',this.value)" onblur="renderPendingTable()">${opts}</select>`;
  td.querySelector('select').focus();
}

function savePending(idx, field, value) {
  if (field === 'phone') value = cleanPhone(value);
  if (field === 'price') value = cleanPrice(value);
  pendingOrders[idx][field] = value;
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
  const city = findBestCity(order.city);
  const payload = {
    pickup_district_id: CONFIG.PICKUP_DISTRICT_ID || 31,
    district_id: city.id,
    name: order.name || 'Client',
    phone: cleanPhone(order.phone),
    products: order.product,
    amount: cleanPrice(order.price),
    address: order.city,
    comment: '(SH)',
    packaging_id: 1
  };
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
      // save to sentOrders
      const saved = { ...order, status: 'sent', sentAt: Date.now(), labelUrl, senditData: data.data };
      sentOrders.unshift(saved);
      // update customer profile
      addCustomerRecord(saved);
      saveData();
      updateStats();
      // remove from pending
      pendingOrders.splice(idx, 1);
      renderPendingTable();
      toast('success', 'Order Sent! 🎉', `${order.name} — ${order.product}`);
      // show confirmation modal
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
📍 Ville : ${order.city}
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

  // filters
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    orders = orders.filter(o =>
      (o.name||'').toLowerCase().includes(q) ||
      (o.phone||'').includes(q) ||
      (o.city||'').toLowerCase().includes(q) ||
      (o.product||'').toLowerCase().includes(q)
    );
  }
  if (filterStatus) orders = orders.filter(o => o.status === filterStatus);
  if (filterCity)   orders = orders.filter(o => (o.city||'').toLowerCase().includes(filterCity.toLowerCase()));
  if (filterProduct)orders = orders.filter(o => (o.product||'').toLowerCase().includes(filterProduct.toLowerCase()));

  // sort
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
  toast('success', 'Status Updated', `${selectedRows.size || 'Selected'} orders → ${status}`);
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
//  EXPORT CSV
// ─────────────────────────────────────────
function exportCSV() {
  const cols = ['name','phone','city','product','price','status','sentAt'];
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

// ─────────────────────────────────────────
//  DRAG & DROP UPLOAD
// ─────────────────────────────────────────
function initDropZone() {
  const zone = document.getElementById('drop-zone');
  const input = document.getElementById('file-input');

  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) readFile(file);
  });
  zone.addEventListener('click', () => input.click());
  input.addEventListener('change', () => { if (input.files[0]) readFile(input.files[0]); });
}

function readFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('message-input').value = e.target.result;
    toast('info', 'File loaded', file.name);
  };
  reader.readAsText(file);
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
  updateStats();
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
  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // Analyze button
  document.getElementById('btn-analyze').addEventListener('click', handleAnalyze);

  // Send all pending valid orders
  document.getElementById('btn-send-all').addEventListener('click', async () => {
    const valid = pendingOrders.filter(o => validateOrder(o).length === 0);
    if (!valid.length) { toast('error', 'No valid orders', 'Fix validation errors first.'); return; }
    for (let i = pendingOrders.length - 1; i >= 0; i--) {
      if (validateOrder(pendingOrders[i]).length === 0) await sendSinglePending(i);
    }
  });

  // Export buttons
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

  // Settings save
  document.getElementById('btn-save-settings').addEventListener('click', saveSettings);
  document.getElementById('btn-clear-data').addEventListener('click', clearAllData);
});
