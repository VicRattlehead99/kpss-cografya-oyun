// ============ TEMA ============
const TEMALAR = ['dark', 'light', 'sepia'];
const TEMA_IKONLAR = { dark: '🌙', light: '☀️', sepia: '📜' };
let temaIdx = 0;

function toggleTheme() {
  temaIdx = (temaIdx + 1) % TEMALAR.length;
  applyTheme();
}
function applyTheme() {
  const t = TEMALAR[temaIdx];
  document.body.className = 'theme-' + t;
  const ikon = TEMA_IKONLAR[t];
  document.querySelectorAll('.theme-btn, .theme-btn-sm').forEach(b => b.textContent = ikon);
  localStorage.setItem('kpss-tema', temaIdx);
}
(function initTheme() {
  const saved = localStorage.getItem('kpss-tema');
  if (saved !== null) temaIdx = parseInt(saved);
  applyTheme();
})();

// ============ SORULAR VE VERİTABANI ============
const KAT_BİLGİ = [
  { id: "Bitkiler", icon: "🌱", ad: "Bitkiler" },
  { id: "Hayvancılık", icon: "🐄", ad: "Hayvancılık" },
  { id: "Madenler", icon: "⛏️", ad: "Madenler" },
  { id: "Enerji", icon: "⚡", ad: "Enerji" },
  { id: "Sanayi", icon: "🏭", ad: "Sanayi" },
  { id: "Dağlar", icon: "⛰️", ad: "Dağlar" },
  { id: "Platolar", icon: "🏞️", ad: "Platolar" },
  { id: "Ovalar", icon: "🌾", ad: "Ovalar" },
  { id: "Göller", icon: "💧", ad: "Göller" },
  { id: "Akarsular", icon: "🌊", ad: "Akarsular" },
  { id: "Diğer", icon: "🌍", ad: "Diğer" },
  { id: "MilliParklar", icon: "🌲", ad: "Milli Parklar" },
  { id: "Ramsar", icon: "🦢", ad: "Ramsar Alanları" },
  { id: "Gecitler", icon: "🏔️", ad: "Geçitler" },
  { id: "Tuneller", icon: "🚇", ad: "Tüneller" },
  { id: "Turizm", icon: "🎿", ad: "Turizm" },
  { id: "UNESCO", icon: "🌐", ad: "UNESCO" },          // Dünya mirasını simgeleyen dünya ikonu
  { id: "AntikKentler", icon: "🏛️", ad: "Antik Kentler" },  // Klasik sütun/antik yapı ikonu
  { id: "KulturTurizmi", icon: "🎭", ad: "Kültür Turizmi" }, // Sanat ve kültürü simgeleyen maskeler (veya 🗺️)
  { id: "SinirKapilari", icon: "🛂", ad: "Sınır Kapıları" },
  { id: "Magara", icon: "🦇", ad: "Mağaralar" },
  { id: "Kanyon", icon: "🏞️", ad: "Kanyonlar" },
  { id: "Ulasim", icon: "✈️", ad: "Ulaşım" },
  { id: "Endemik", icon: "🌺", ad: "Endemik Bitkiler" },
  { id: "Projeler", icon: "📈", ad: "Kalkınma Projeleri" }
];

const TUM_SORULAR = [
  // --- BİTKİLER ---
  { soru: "Anason Üretimi", kategori: "Bitkiler", iller: ["Konya", "Denizli", "Burdur", "Afyon", "Antalya"] },
  { soru: "Antep Fıstığı Üretimi", kategori: "Bitkiler", iller: ["Şanlıurfa", "Gaziantep", "Siirt"] },
  { soru: "Arpa Üretimi", kategori: "Bitkiler", iller: ["Konya", "Ankara", "Afyon", "Sivas", "Aksaray"] },
  { soru: "Ayçiçeği Üretimi", kategori: "Bitkiler", iller: ["Konya", "Tekirdağ", "Edirne", "Adana", "Kırklareli"] },
  { soru: "Kuru Fasulye Üretimi", kategori: "Bitkiler", iller: ["Niğde", "Konya", "Bitlis", "Nevşehir", "Karaman"] },
  { soru: "Yeşil Mercimek Üretimi", kategori: "Bitkiler", iller: ["Yozgat", "Konya", "Kırşehir", "Çorum", "Ankara"] },
  { soru: "Nohut Üretimi", kategori: "Bitkiler", iller: ["Ankara", "Yozgat", "Konya", "Karaman", "Kırşehir"] },
  { soru: "Buğday Üretimi", kategori: "Bitkiler", iller: ["Konya", "Şanlıurfa", "Ankara", "Diyarbakır", "Mardin"] },
  { soru: "Çay Üretimi", kategori: "Bitkiler", iller: ["Rize", "Trabzon", "Artvin", "Giresun"] },
  { soru: "Çeltik (Pirinç) Üretimi", kategori: "Bitkiler", iller: ["Edirne", "Samsun", "Balıkesir", "Çanakkale", "Çorum"] },
  { soru: "Elma Üretimi", kategori: "Bitkiler", iller: ["Isparta", "Karaman", "Antalya", "Denizli", "Mersin"] },
  { soru: "Fındık Üretimi", kategori: "Bitkiler", iller: ["Samsun", "Sakarya", "Giresun", "Ordu", "Düzce"] },
  { soru: "Gül Üretimi", kategori: "Bitkiler", iller: ["Isparta", "Burdur"] },
  { soru: "Haşhaş Üretimi", kategori: "Bitkiler", iller: ["Afyon", "Uşak", "Konya", "Denizli", "Amasya"] },
  { soru: "İncir Üretimi", kategori: "Bitkiler", iller: ["Aydın", "İzmir", "Bursa", "Mersin", "Balıkesir"] },
  { soru: "Kanola (Kolza) Üretimi", kategori: "Bitkiler", iller: ["Tekirdağ", "Edirne", "Konya", "İstanbul", "Kırklareli"] },
  { soru: "Kayısı Üretimi", kategori: "Bitkiler", iller: ["Mersin", "Hatay", "Iğdır", "Antalya", "Adana"] },
  { soru: "Kenevir (Kendir) Üretimi", kategori: "Bitkiler", iller: ["Konya"] },
  { soru: "Keten Üretimi", kategori: "Bitkiler", iller: ["Uşak", "Samsun", "İstanbul"] },
  { soru: "Kivi Üretimi", kategori: "Bitkiler", iller: ["Yalova", "Samsun", "Mersin", "Bursa", "Sakarya"] },
  { soru: "Mısır Üretimi", kategori: "Bitkiler", iller: ["Konya", "Şanlıurfa", "Adana", "Eskişehir", "Mardin"] },
  { soru: "Pamuk Üretimi", kategori: "Bitkiler", iller: ["Şanlıurfa", "Diyarbakır", "Aydın", "Hatay", "İzmir"] },
  { soru: "Patates Üretimi", kategori: "Bitkiler", iller: ["Kayseri", "Niğde", "Konya", "Afyon", "Sivas"] },
  { soru: "Seracılık", kategori: "Bitkiler", iller: ["Antalya", "Mersin", "Adana", "Muğla"] },
  { soru: "Soya Fasulyesi Üretimi", kategori: "Bitkiler", iller: ["Adana", "Mersin", "Kahramanmaraş"] },
  { soru: "Susam Üretimi", kategori: "Bitkiler", iller: ["Antalya", "Manisa", "Muğla", "Uşak", "Adana"] },
  { soru: "Şeker Pancarı Üretimi", kategori: "Bitkiler", iller: ["Konya"] },
  { soru: "Turunçgiller (Narenciye) Üretimi", kategori: "Bitkiler", iller: ["Adana", "Mersin", "Antalya"] },
  { soru: "Tütün Üretimi", kategori: "Bitkiler", iller: ["Denizli", "Adıyaman", "Manisa", "Uşak", "Batman"] },
  { soru: "Üzüm Üretimi", kategori: "Bitkiler", iller: ["Manisa", "Mersin", "Denizli", "Gaziantep", "Mardin"] },
  { soru: "Yer Fıstığı Üretimi", kategori: "Bitkiler", iller: ["Adana", "Osmaniye", "Şırnak"] },
  { soru: "Zeytin Üretimi", kategori: "Bitkiler", iller: ["Aydın", "İzmir", "Manisa", "Mersin", "Hatay"] },
  { soru: "Turunçgil (Mikroklima)", kategori: "Bitkiler", iller: ["Rize"] },
  { soru: "Zeytin (Mikroklima)", kategori: "Bitkiler", iller: ["Artvin"] },
  { soru: "Pamuk (Mikroklima)", kategori: "Bitkiler", iller: ["Iğdır"] },
  { soru: "Aspir", kategori: "Bitkiler", iller: ["Kayseri", "Konya", "Isparta", "Aksaray","Nevşehir"] },
  { soru: "Kırmızı Mercimek", kategori: "Bitkiler", iller: ["Şanlıurfa"] },
  { soru: "Avokado", kategori: "Bitkiler", iller: ["Antalya", "Mersin"] },
  { soru: "Muz (Mikroklima)", kategori: "Bitkiler", iller: ["Antalya", "Mersin"] },




 // --- MADENLER ---
  { soru: "Altın Çıkarımı", kategori: "Madenler", iller: ["Artvin", "Gümüşhane", "Erzincan", "Kayseri", "Eskişehir", "Uşak", "Manisa", "İzmir", "Balıkesir"] },
  { soru: "Asbest (Amyant) Çıkarımı", kategori: "Madenler", iller: ["Balıkesir", "Eskişehir", "Amasya", "Sivas", "Hatay"] },
  { soru: "Bakır Yatakları", kategori: "Madenler", iller: ["Kastamonu", "Artvin", "Rize", "Diyarbakır"] },
  { soru: "Bakır İşletmeleri", kategori: "Madenler", iller: ["Samsun", "Artvin", "Rize", "Diyarbakır"] },
  { soru: "Barit Yatakları (Sondaj sektörü)", kategori: "Madenler", iller: ["Antalya","Kahramanmaraş","Çanakkale","Eskişehir","Giresun","Muş"] },
  { soru: "Barit İşletmeleri (Sondaj sektörü)", kategori: "Madenler", iller: ["Antalya","Eskişehir","Elazığ","İzmir","Kocaeli"] },
  { soru: "Gölden Tuz Çıkarımı", kategori: "Madenler", iller: ["Konya", "Aksaray", "Ankara", "Kırşehir", "Kayseri"] },
  { soru: "Denizden Tuz Çıkarımı", kategori: "Madenler", iller: ["İzmir", "Balıkesir"] },
  { soru: "Kaya Tuzu Çıkarımı", kategori: "Madenler", iller: ["Çankırı", "Nevşehir", "Yozgat", "Iğdır", "Erzincan", "Kars"] },
  { soru: "Demir Yatakları", kategori: "Madenler", iller: ["Sivas", "Malatya", "Bingöl", "Adana", "Kırıkkale", "Sakarya", "Balıkesir", "İzmir", "Hatay"] },
  { soru: "Demir İşletmeleri", kategori: "Madenler", iller: ["Zonguldak", "Karabük", "Hatay"] },
  { soru: "Zımpara Taşı Çıkarımı (Aşındırıcı malzeme)", kategori: "Madenler", iller: ["Aydın", "İzmir", "Muğla", "Antalya"] },
  { soru: "Fosfat Çıkarımı (Gübre malzemesi)", kategori: "Madenler", iller: ["Mardin","Bitlis","Gaziantep"] },
  { soru: "Kurşun ve Çinko Çıkarımı", kategori: "Madenler", iller: ["Balıkesir", "Çanakkale", "Kayseri", "Yozgat", "Trabzon"] },
  { soru: "Kurşun ve Çinko İşlendiği Yer", kategori: "Madenler", iller: ["Elazığ"] },
  { soru: "Oltu Taşı Çıkarımı (Tesbih yapımı)", kategori: "Madenler", iller: ["Erzurum"] },
  { soru: "Lüle Taşı (Beyaz Altın) Çıkarımı (Pipo yapımı)", kategori: "Madenler", iller: ["Eskişehir"] },
  { soru: "Volfram-Tungsten Çıkarımı (Dayanıklı sanayi malzemesi)", kategori: "Madenler", iller: ["Bursa"] },
  { soru: "Krom Çıkarımı (Paslanmaz çelik)", kategori: "Madenler", iller: ["Elazığ", "Sivas", "Bayburt", "Erzincan", "Muğla", "Bursa", "Kütahya", "Eskişehir", "Hatay", "Gaziantep", "Kayseri", "Adana"] },
  { soru: "Krom İşletmeleri", kategori: "Madenler", iller: ["Antalya", "Elazığ"] },
  { soru: "Kükürt Çıkarımı", kategori: "Madenler", iller: ["Isparta"] },
  { soru: "Manganez Çıkarımı (Yararlı mineral)", kategori: "Madenler", iller: ["Zonguldak","Denizli","Trabzon","Rize","Ardahan"] },
  { soru: "Mermer Çıkarımı", kategori: "Madenler", iller: ["Balıkesir", "İzmir", "Eskişehir", "Bilecik", "Afyon", "Antalya", "Kırşehir", "Ordu", "Gümüşhane", "Trabzon", "Elazığ", "Diyarbakır"] },
  { soru: "Perlit (İnci Taşı) Çıkarımı (Tarım ve inşaat, alçı yapımı)", kategori: "Madenler", iller: ["İzmir", "Balıkesir", "Ankara", "Erzurum", "Erzincan", "Kars", "Bitlis", "Van"] },
  { soru: "Boksit Çıkarımı (Aliminyum hammaddesi)", kategori: "Madenler", iller: ["Antalya", "Konya", "Zonguldak", "Muğla", "Hatay"] },
  { soru: "Boksit İşleme (Aliminyum hammaddesi)", kategori: "Madenler", iller: ["Konya"] },
  { soru: "Pomza Taşı Çıkarımı (Volkanik gözenekli kayaç)", kategori: "Madenler", iller: ["Nevşehir", "Kayseri", "Van", "Bitlis"] },
  { soru: "Trona (Soda Külü) Çıkarımı", kategori: "Madenler", iller: ["Ankara"] },
  { soru: "Uranyum Çıkarımı", kategori: "Madenler", iller: ["Yozgat","Manisa","Uşak","Aydın"] },
  { soru: "Toryum Çıkarımı", kategori: "Madenler", iller: ["Eskişehir"] },
  { soru: "Bor Mineralleri Çıkarımı", kategori: "Madenler", iller: ["Balıkesir", "Bursa", "Kütahya", "Eskişehir"] },
  { soru: "Bor İşletmeleri (Tesis)", kategori: "Madenler", iller: ["Balıkesir", "Eskişehir"] },
  { soru: "Cıva Çıkarımı (Tek Sıvı Maden)", kategori: "Madenler", iller: ["İzmir", "Konya"] },
  { soru: "Antimon Çıkarımı", kategori: "Madenler", iller: ["Kütahya", "Tokat", "Niğde", "Balıkesir"] },
  { soru: "Feldispat Çıkarımı (Cam ve Seramik Hammaddesi)", kategori: "Madenler", iller: ["Manisa", "Aydın", "Kütahya", "Kırşehir", "Yozgat", "Artvin", "Ardahan"] },

// --- ENERJİ ---
{ soru: "Asfaltit", kategori: "Enerji", iller: ["Şırnak"] },
{ soru: "Doğal Gaz Santralleri", kategori: "Enerji", iller: ["Kırklareli", "İstanbul", "Bursa", "Balıkesir", "İzmir"] },
{ soru: "Doğal Gaz Yatağı", kategori: "Enerji", iller: ["Mardin", "Kırklareli", "Düzce"] },
{ soru: "Güneş Santrali", kategori: "Enerji", iller: ["Konya", "Şanlıurfa", "Denizli", "Kayseri", "Mersin", "Antalya"] },
{ soru: "Jeotermal Santraller", kategori: "Enerji", iller: ["Aydın", "Denizli", "Manisa", "Çanakkale", "İzmir", "Afyon"] },
{ soru: "Taş Kömürü Santralleri", kategori: "Enerji", iller: ["Zonguldak", "Adana"] },
{ soru: "Taş Kömürü Yatakları", kategori: "Enerji", iller: ["Zonguldak", "Bartın", "Kastamonu"] },
{ soru: "Linyit Kömürü Yatakları", kategori: "Enerji", iller: ["Kahramanmaraş", "Ankara", "Çanakkale", "Muğla", "Manisa", "Kütahya", "Bursa", "Çorum", "Amasya", "Sivas", "Erzurum"] },
{ soru: "Petrol Rafinerileri", kategori: "Enerji", iller: ["Batman", "İzmir", "Kırıkkale", "Kocaeli", "Mersin"] },
{ soru: "Petrol Yatakları", kategori: "Enerji", iller: ["Batman", "Siirt", "Diyarbakır", "Şanlıurfa", "Adıyaman"] },
{ soru: "Rüzgar Gücü Santralleri", kategori: "Enerji", iller: ["İzmir", "Balıkesir", "Manisa", "Mersin", "Hatay", "Kayseri", "Çanakkale", "Aydın", "Afyon", "Amasya", "Kırşehir"] },
{ soru: "Hidrolik Enerji", kategori: "Enerji", iller: ["Artvin", "Elazığ", "Diyarbakır", "Samsun", "Antalya", "Şanlıurfa"] },

  // --- HAYVANCILIK ---
  { soru: "Tiftik Keçisi", kategori: "Hayvancılık", iller: ["Ankara","Siirt","Eskişehir","Mardin","Bolu"] },
  { soru: "Sığır", kategori: "Hayvancılık", iller: ["Konya", "İzmir", "Erzurum", "Ankara", "Balıkesir"] },
  { soru: "Manda", kategori: "Hayvancılık", iller: ["Samsun", "Diyarbakır", "İstanbul", "Kayseri", "Bitlis"] },
  { soru: "Koyun", kategori: "Hayvancılık", iller: ["Van", "Konya", "Şanlıurfa", "Diyarbakır", "Ankara"] },
  { soru: "Kıl Keçisi", kategori: "Hayvancılık", iller: ["Mersin", "Antalya", "Siirt", "Şırnak", "Mardin"] },
  { soru: "Kümes Hayvancılığı (Tavuk)", kategori: "Hayvancılık", iller: ["Manisa", "Bolu", "Sakarya", "Mersin", "Balıkesir"] },
  { soru: "Arıcılık", kategori: "Hayvancılık", iller: ["Ordu", "Adana", "Muğla", "Sivas", "Siirt"] },
  { soru: "İpek Böcekçiliği", kategori: "Hayvancılık", iller: ["Diyarbakır","Batman","Muğla","Antalya","İzmir"] },

  // --- DAĞLAR ---
  { soru: "Kula (Volkanik Dağ)", kategori: "Dağlar", iller: ["Manisa"] },
  { soru: "Erciyes Dağı (Volkanik)", kategori: "Dağlar", iller: ["Kayseri"] },
  { soru: "Honaz Dağı (Kıvrımlı)", kategori: "Dağlar", iller: ["Denizli"] },
  { soru: "Hasandağı (Volkanik)", kategori: "Dağlar", iller: ["Aksaray", "Niğde"] },
  { soru: "Melendiz Dağı (Volkanik)", kategori: "Dağlar", iller: ["Niğde"] },
  { soru: "Karadağ (Volkanik)", kategori: "Dağlar", iller: ["Karaman"] },
  { soru: "Karacadağ - İç Anadolu (Volkanik)", kategori: "Dağlar", iller: ["Konya", "Aksaray"] },
  { soru: "Karacadağ - G.Doğu (Volkanik)", kategori: "Dağlar", iller: ["Diyarbakır", "Şanlıurfa"] },
  { soru: "Nemrut Dağı (Volkanik)", kategori: "Dağlar", iller: ["Bitlis"] },
  { soru: "Süphan Dağı (Volkanik)", kategori: "Dağlar", iller: ["Bitlis", "Ağrı"] },
  { soru: "Tendürek Dağı (Volkanik)", kategori: "Dağlar", iller: ["Ağrı", "Van"] },
  { soru: "Ağrı Dağı (Volkanik)", kategori: "Dağlar", iller: ["Ağrı"] },
  { soru: "Yıldız Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Kırklareli"] },
  { soru: "Samanlı Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Kocaeli", "Sakarya", "Yalova"] },
  { soru: "Uludağ (Kıvrım)", kategori: "Dağlar", iller: ["Bursa"] },
  { soru: "Küre Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Kastamonu", "Sinop"] },
  { soru: "Bolu Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Bolu", "Düzce"] },
  { soru: "Ilgaz Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Çankırı", "Kastamonu"] },
  { soru: "Köroğlu Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Bolu", "Çankırı"] },
  { soru: "Sündiken Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Eskişehir"] },
  { soru: "Canik Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Samsun", "Ordu"] },
  { soru: "Giresun Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Giresun", "Gümüşhane"] },
  { soru: "Karçal Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Artvin"] },
  { soru: "Yalnızçam Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Ardahan", "Artvin"] },
  { soru: "Allahuekber Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum", "Ardahan"] },
  { soru: "Mescit Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum"] },
  { soru: "Karasu Aras Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum", "Ağrı"] },
  { soru: "Palandöken Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum"] },
  { soru: "Mercan Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzincan", "Tunceli"] },
  { soru: "Tecere Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Sivas"] },
  { soru: "Nurhak Dağı (Kıvrım)", kategori: "Dağlar", iller: ["Kahramanmaraş"] },
  { soru: "Tahtalı Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Kayseri", "Adana"] },
  { soru: "Aladağlar (Kıvrım)", kategori: "Dağlar", iller: ["Niğde", "Adana", "Kayseri"] },
  { soru: "Bolkarlar (Kıvrım)", kategori: "Dağlar", iller: ["Mersin", "Niğde"] },
  { soru: "Bey Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Antalya"] },
  { soru: "Geyik Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Antalya", "Konya", "Karaman"] },
  { soru: "Dedegöl Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Isparta"] },
  { soru: "Sultan Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Afyon", "Isparta", "Konya"] },
  { soru: "İhtiyarşahap Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Bitlis", "Van"] },
  { soru: "Hakkâri Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Hakkâri"] },
  { soru: "Kaz Dağları (Kırık)", kategori: "Dağlar", iller: ["Çanakkale", "Balıkesir"] },
  { soru: "Madra Dağı (Kırık)", kategori: "Dağlar", iller: ["Balıkesir", "İzmir"] },
  { soru: "Yunt Dağı (Kırık)", kategori: "Dağlar", iller: ["İzmir", "Manisa"] },
  { soru: "Bozdağlar (Kırık)", kategori: "Dağlar", iller: ["İzmir", "Manisa"] },
  { soru: "Aydın Dağları (Kırık)", kategori: "Dağlar", iller: ["Aydın", "İzmir"] },
  { soru: "Menteşe Dağları (Kırık)", kategori: "Dağlar", iller: ["Muğla"] },

  // --- PLATOLAR ---
  { soru: "Teke Platosu (Karstik)", kategori: "Platolar", iller: ["Antalya"] },
  { soru: "Taşeli Platosu (Karstik)", kategori: "Platolar", iller: ["Mersin"] },
  { soru: "Yazılıkaya Platosu (Volkanik)", kategori: "Platolar", iller: ["Ardahan"] },
  { soru: "Kapadokya Platosu (Volkanik)", kategori: "Platolar", iller: ["Nevşehir"] },
  { soru: "Çatalca Kocaeli Platosu (Aşınım Düzlüğü)", kategori: "Platolar", iller: ["İstanbul", "Kocaeli"] },
  { soru: "Perşembe Platosu (Aşınım Düzlüğü)", kategori: "Platolar", iller: ["Ordu"] },
  { soru: "Yazılıkaya Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Eskişehir", "Afyon"] },
  { soru: "Haymana Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Ankara"] },
  { soru: "Cihanbeyli Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Konya"] },
  { soru: "Obruk Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Konya"] },
  { soru: "Bozok Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Yozgat"] },
  { soru: "Uzunyayla Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Sivas", "Kayseri"] },

  // --- OVALAR ---
  { soru: "Acıpayam Ovası (Karstik)", kategori: "Ovalar", iller: ["Denizli"] },
  { soru: "Tefenni Ovası (Karstik)", kategori: "Ovalar", iller: ["Burdur"] },
  { soru: "Kestel Ovası (Karstik)", kategori: "Ovalar", iller: ["Burdur"] },
  { soru: "Elmalı Ovası (Karstik)", kategori: "Ovalar", iller: ["Antalya"] },
  { soru: "Bafra Ovası (Delta)", kategori: "Ovalar", iller: ["Samsun"] },
  { soru: "Çarşamba Ovası (Delta)", kategori: "Ovalar", iller: ["Samsun"] },
  { soru: "Meriç Ovası (Delta)", kategori: "Ovalar", iller: ["Edirne"] },
  { soru: "Dikili Ovası (Delta)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Menemen Ovası (Delta)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Selçuk Ovası (Delta)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Balat Ovası (Delta)", kategori: "Ovalar", iller: ["Aydın"] },
  { soru: "Silifke Ovası (Delta)", kategori: "Ovalar", iller: ["Mersin"] },
  { soru: "Çukurova (Delta)", kategori: "Ovalar", iller: ["Adana"] },
  { soru: "Asi Ovası (Delta)", kategori: "Ovalar", iller: ["Hatay"] },
  { soru: "Adapazarı Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Sakarya"] },
  { soru: "Tosya Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Kastamonu"] },
  { soru: "Merzifon Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Amasya"] },
  { soru: "Suluova Taşova Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Amasya"] },
  { soru: "Erbaa Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Tokat"] },
  { soru: "Niksar Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Tokat"] },
  { soru: "Tercan Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Erzincan"] },
  { soru: "Amik Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Hatay"] },
  { soru: "Elbistan Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Kahramanmaraş"] },
  { soru: "Bakırçay Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Akhisar Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["Manisa"] },
  { soru: "Alaşehir Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["Manisa"] },
  { soru: "Küçük Menderes Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Büyük Menderes Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["Aydın"] },

  // --- AKARSULAR VE ŞELALELER ---
// AKARSULAR

  { soru: "Meriç Nehri", kategori: "Akarsular", iller: ["Edirne"] },
  { soru: "Ergene Nehri", kategori: "Akarsular", iller: ["Kırklareli", "Tekirdağ", "Edirne"] },
  { soru: "Susurluk Nehri", kategori: "Akarsular", iller: ["Kütahya", "Bursa", "Balıkesir"] },
  { soru: "Bakırçay", kategori: "Akarsular", iller: ["Manisa", "İzmir"] },
  { soru: "Gediz Nehri", kategori: "Akarsular", iller: ["Kütahya", "Uşak", "Manisa", "İzmir"] },
  { soru: "Küçük Menderes", kategori: "Akarsular", iller: ["İzmir"] },
  { soru: "Büyük Menderes", kategori: "Akarsular", iller: ["Uşak", "Denizli", "Aydın"] },
  { soru: "Dalaman Çayı", kategori: "Akarsular", iller: ["Denizli", "Burdur", "Muğla"] },
  { soru: "Aksu Çayı", kategori: "Akarsular", iller: ["Isparta", "Burdur", "Antalya"] },
  { soru: "Köprüçay", kategori: "Akarsular", iller: ["Isparta", "Antalya"] },
  { soru: "Manavgat Nehri", kategori: "Akarsular", iller: ["Antalya"] },
  { soru: "Göksu Nehri", kategori: "Akarsular", iller: ["Konya", "Karaman", "Mersin"] },
  { soru: "Seyhan Nehri", kategori: "Akarsular", iller: ["Kayseri", "Adana"] },
  { soru: "Ceyhan Nehri", kategori: "Akarsular", iller: ["Kahramanmaraş", "Osmaniye", "Adana"] },
  { soru: "Asi Nehri", kategori: "Akarsular", iller: ["Hatay"] },
  { soru: "Fırat Nehri", kategori: "Akarsular", iller: ["Erzurum", "Ağrı","Muş","Bingöl", "Erzincan", "Tunceli", "Elazığ", "Malatya", "Adıyaman", "Şanlıurfa"] },
  { soru: "Dicle Nehri", kategori: "Akarsular", iller: ["Diyarbakır", "Batman","Siirt","Şırnak"] },
  { soru: "Aras Nehri", kategori: "Akarsular", iller: ["Erzurum", "Kars"] },
  { soru: "Kura Nehri", kategori: "Akarsular", iller: ["Ardahan"] },
  { soru: "Çoruh Nehri", kategori: "Akarsular", iller: ["Erzurum", "Bayburt", "Artvin"] },
  { soru: "Yeşilırmak", kategori: "Akarsular", iller: ["Sivas", "Tokat", "Amasya", "Samsun"] },
  { soru: "Kızılırmak", kategori: "Akarsular", iller: ["Sivas", "Kayseri", "Nevşehir", "Kırşehir", "Kırıkkale", "Ankara", "Çankırı", "Çorum", "Samsun", "Sinop"] },
  { soru: "Bartın Çayı", kategori: "Akarsular", iller: ["Karabük", "Bartın"] },
  { soru: "Filyos (Yenice) Çayı", kategori: "Akarsular", iller: ["Bolu", "Karabük", "Zonguldak"] },
  { soru: "Sakarya Nehri", kategori: "Akarsular", iller: ["Eskişehir", "Ankara", "Bilecik", "Sakarya"] },

// ŞELALELER
{ soru: "Manavgat Şelalesi", kategori: "Akarsular", iller: ["Antalya"] },
{ soru: "Düden Şelalesi", kategori: "Akarsular", iller: ["Antalya"] },
{ soru: "Kurşunlu Şelalesi", kategori: "Akarsular", iller: ["Antalya"] },
{ soru: "Muradiye Şelalesi", kategori: "Akarsular", iller: ["Van"] },
{ soru: "Girlevik Şelalesi", kategori: "Akarsular", iller: ["Erzincan"] },
{ soru: "Tortum Şelalesi", kategori: "Akarsular", iller: ["Erzurum"] },
{ soru: "Tatlıca Şelalesi", kategori: "Akarsular", iller: ["Sinop"] },
{ soru: "Kapuzbaşı Şelalesi", kategori: "Akarsular", iller: ["Kayseri"] },

  // --- GÖLLER ---
{ soru: "Manyas Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Balıkesir"] },
{ soru: "Uluabat Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Bursa"] },
{ soru: "İznik Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Bursa"] },
{ soru: "Sapanca Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Sakarya"] },
{ soru: "Eğirdir Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Isparta"] },
{ soru: "Beyşehir Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Konya", "Isparta"] },
{ soru: "Akşehir Gölü (Tektonik) ❌", kategori: "Göller", iller: ["Konya", "Afyon"] },
{ soru: "Eber Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Afyon"] },
{ soru: "Tuz Gölü (Tektonik) ❌", kategori: "Göller", iller: ["Konya", "Aksaray", "Ankara"] },
{ soru: "Seyfe Gölü (Tektonik) ❌", kategori: "Göller", iller: ["Kırşehir"] },
{ soru: "Hazar Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Elazığ"] },
{ soru: "Aktaş Gölü (Tektonik) ✅", kategori: "Göller", iller: ["Ardahan"] },
{ soru: "Salda Gölü (Karstik) ❌", kategori: "Göller", iller: ["Burdur"] },
{ soru: "Kestel Gölü (Karstik) ❌", kategori: "Göller", iller: ["Burdur"] },
{ soru: "Avlan Gölü (Karstik) ❌", kategori: "Göller", iller: ["Antalya"] },
{ soru: "Suğla Gölü (Karstik) ❌", kategori: "Göller", iller: ["Konya"] },
{ soru: "Hafik Gölü (Karstik) ✅", kategori: "Göller", iller: ["Sivas"] },
{ soru: "Meke Maar Gölü (Volkanik) ❌", kategori: "Göller", iller: ["Konya"] },
{ soru: "Acıgöl Maar Gölü (Volkanik) ❌", kategori: "Göller", iller: ["Konya"] },
{ soru: "Nemrut Krater Gölü (Volkanik) ❌", kategori: "Göller", iller: ["Bitlis"] },
{ soru: "Abant Gölü (Heyelan Set) ✅", kategori: "Göller", iller: ["Bolu"] },
{ soru: "Yedigöller (Heyelan Set) ✅", kategori: "Göller", iller: ["Bolu"] },
{ soru: "Borabay Gölü (Heyelan Set) ✅", kategori: "Göller", iller: ["Amasya"] },
{ soru: "Zinav Gölü (Heyelan Set) ✅", kategori: "Göller", iller: ["Tokat"] },
{ soru: "Tortum Gölü (Heyelan Set) ✅", kategori: "Göller", iller: ["Erzurum"] },
{ soru: "Çıldır Gölü (Volkanik Set) ✅", kategori: "Göller", iller: ["Ardahan", "Kars"] },
{ soru: "Balık Gölü (Volkanik Set) ✅", kategori: "Göller", iller: ["Ağrı"] },
{ soru: "Haçlı Gölü (Volkanik Set) ✅", kategori: "Göller", iller: ["Muş"] },
{ soru: "Nazik Gölü (Volkanik Set) ✅", kategori: "Göller", iller: ["Bitlis"] },
{ soru: "Van Gölü (Volkanik Set) ❌", kategori: "Göller", iller: ["Van", "Bitlis"] },
{ soru: "Erçek Gölü (Volkanik Set) ❌", kategori: "Göller", iller: ["Van"] },
{ soru: "Gala Gölü (Alüvyal Set) ✅", kategori: "Göller", iller: ["Edirne"] },
{ soru: "Marmara Gölü (Alüvyal Set) ✅", kategori: "Göller", iller: ["Manisa"] },
{ soru: "Bafa Gölü (Alüvyal Set) ✅", kategori: "Göller", iller: ["Aydın", "Muğla"] },
{ soru: "Köyceğiz Gölü (Alüvyal Set) ✅", kategori: "Göller", iller: ["Muğla"] },
{ soru: "Eymir Gölü (Alüvyal Set) ✅", kategori: "Göller", iller: ["Ankara"] },
{ soru: "Mogan Gölü (Alüvyal Set) ✅", kategori: "Göller", iller: ["Ankara"] },
{ soru: "Terkos Gölü (Kıyı Set) ✅", kategori: "Göller", iller: ["İstanbul"] },
{ soru: "Küçükçekmece Gölü (Kıyı Set) ✅", kategori: "Göller", iller: ["İstanbul"] },
{ soru: "Büyükçekmece Gölü (Kıyı Set) ✅", kategori: "Göller", iller: ["İstanbul"] },
{ soru: "Balık Gölü (Kıyı Set) ✅", kategori: "Göller", iller: ["Samsun"] },
{ soru: "Akyatan Gölü (Kıyı Set) ✅", kategori: "Göller", iller: ["Adana"] },
{ soru: "Ağyatan Gölü (Kıyı Set) ✅", kategori: "Göller", iller: ["Adana"] },

  // --- DİĞER (Köy Altı Yerleşmeleri, Körfezler) ---
  { soru: "Divan (Köy Altı)", kategori: "Diğer", iller: ["Bolu", "Sakarya", "Zonguldak", "Kastamonu", "Sinop"] },
  { soru: "Dam (Köy Altı)", kategori: "Diğer", iller: ["Muğla", "İzmir", "Aydın", "Çanakkale"] },
  { soru: "Çiftlik (Köy Altı)", kategori: "Diğer", iller: ["Edirne", "Tekirdağ", "İzmir", "Aydın", "Konya", "Adana"] },
  { soru: "Mezra-Kom (Köy Altı)", kategori: "Diğer", iller: ["Tunceli", "Erzurum", "Diyarbakır", "Mardin"] },
  { soru: "Yayla-Güzle (Köy Altı)", kategori: "Diğer", iller: ["Rize", "Trabzon", "Artvin", "Antalya", "Mersin", "Adana"] },
  { soru: "Oba (Köy Altı)", kategori: "Diğer", iller: ["Antalya", "Mersin", "Adana"] },
  { soru: "Dalyan (Köy Altı)", kategori: "Diğer", iller: ["Muğla", "İzmir"] },
  { soru: "Edremit Körfezi", kategori: "Diğer", iller: ["Balıkesir"] },
  { soru: "Çandarlı Körfezi", kategori: "Diğer", iller: ["İzmir"] },
  { soru: "Kuşadası Körfezi", kategori: "Diğer", iller: ["Aydın"] },
  { soru: "Güllük Körfezi", kategori: "Diğer", iller: ["Muğla"] },
  { soru: "Gökova Körfezi", kategori: "Diğer", iller: ["Muğla"] },
  { soru: "Hisarönü Körfezi", kategori: "Diğer", iller: ["Muğla"] },

  // --- SANAYİ ---
  { soru: "Tuğla - Kiremit Üretimi", kategori: "Sanayi", iller: ["Çorum", "Eskişehir", "Afyon", "Kütahya"] },
  { soru: "Seramik Üretimi", kategori: "Sanayi", iller: ["Kütahya", "Çanakkale", "İzmir", "Bilecik"] },
  { soru: "Pamuklu Dokuma Sanayi", kategori: "Sanayi", iller: ["Adana", "İzmir", "Denizli", "Aydın", "Antalya"] },
  { soru: "Şeker Sanayi", kategori: "Sanayi", iller: ["Kırklareli", "Uşak", "Konya", "Ankara", "Yozgat"] },
  { soru: "Ayçiçeği Yağı Sanayi", kategori: "Sanayi", iller: ["Tekirdağ", "Edirne"] },
  { soru: "Zeytinyağı Sanayi", kategori: "Sanayi", iller: ["Aydın", "İzmir", "Balıkesir", "Bursa"] },
  { soru: "Mısırözü Yağı Sanayi", kategori: "Sanayi", iller: ["Adana"] },
  { soru: "Unlu Mamuller Sanayi", kategori: "Sanayi", iller: ["Konya", "Eskişehir", "Ankara"] },
  { soru: "Et Kombineleri", kategori: "Sanayi", iller: ["Erzurum", "Kars", "Konya", "İzmir", "Balıkesir"] },
  { soru: "Çay Sanayi", kategori: "Sanayi", iller: ["Rize", "Trabzon"] },
  { soru: "Deniz Mahsulleri Sanayi", kategori: "Sanayi", iller: ["Çanakkale", "Trabzon", "İzmir"] },
  { soru: "Orman Ürünleri / Kereste Sanayi", kategori: "Sanayi", iller: ["Kastamonu", "Düzce", "Bolu", "Giresun", "Zonguldak"] },
  { soru: "Kağıt Sanayi", kategori: "Sanayi", iller: ["Giresun", "Kastamonu", "Zonguldak", "Muğla", "Mersin"] },
  { soru: "Otomotiv Sanayisi", kategori: "Sanayi", iller: ["Bursa", "Kocaeli", "Sakarya", "İstanbul", "İzmir", "Aksaray"] },
  { soru: "Savunma Sanayisi", kategori: "Sanayi", iller: ["Ankara", "Kırıkkale", "Eskişehir"] },
  { soru: "Demiryolu Araçları Sanayisi (Vagon/Lokomotif)", kategori: "Sanayi", iller: ["Eskişehir", "Sakarya", "Sivas", "Ankara"] },
  { soru: "Cam Sanayisi", kategori: "Sanayi", iller: ["Kırklareli", "Mersin", "Bursa", "Eskişehir", "Sinop"] },
  { soru: "Demir-Çelik Sanayisi", kategori: "Sanayi", iller: ["Karabük", "Zonguldak", "Hatay", "Sivas", "İzmir"] },
  { soru: "Petrol Kimya (Petrokimya) Tesisleri", kategori: "Sanayi", iller: ["İzmir", "Kocaeli"] },

  // --- ENDEMİK BİTKİLER ---
{ soru: "Sığla (Günlük) Ağacı (Endemik)", kategori: "Endemik", iller: ["Muğla"] }, // Kozmetik ve Eczacılıkta kullanılır, relikt (kalıntı) ağaçtır.
{ soru: "Kasnak Meşesi (Endemik)", kategori: "Endemik", iller: ["Isparta", "Burdur"] }, // Özellikle Isparta Eğirdir çevresinde koruma altındadır.
{ soru: "Kazdağı Göknarı (Endemik)", kategori: "Endemik", iller: ["Balıkesir", "Çanakkale"] }, // Kaz Dağları'na özgü endemik ağaç türü.
{ soru: "Datça Hurması (Endemik)", kategori: "Endemik", iller: ["Muğla"] }, // Datça ve Teke Yarımadası'na özgü palmiye türü.
{ soru: "Ters Lale (Endemik)", kategori: "Endemik", iller: ["Hakkâri", "Van"] }, // Ağlayan Gelin olarak bilinir.
{ soru: "İspir Meşesi (Endemik)", kategori: "Endemik", iller: ["Erzurum", "Yozgat", "Gümüşhane"] }, // İsmini Erzurum'un İspir ilçesinden alır.
{ soru: "Eber Sarısı (Endemik)", kategori: "Endemik", iller: ["Afyon", "Konya"] }, // Eber ve Akşehir Gölleri çevresinde yetişen baklagil türü.
{ soru: "Kapadokya Soğanı (Endemik)", kategori: "Endemik", iller: ["Kayseri", "Niğde", "Nevşehir"] }, // Erciyes ve Melendiz Dağları çevresinde yetişir.

    //ULAŞIM
  // Ulaşım bağlantıları ve deniz üzeri yapılar harita üzerinde çok sorulur.
  { soru: "Deniz Doldurularak Yapılan Havalimanları", kategori: "Ulasim", iller: ["Ordu", "Giresun", "Rize", "Artvin"] },
  { soru: "Yüksek Hızlı Tren (YHT) Bağlantısı Olan İller", kategori: "Ulasim", iller: ["Ankara", "Eskişehir", "Konya", "İstanbul", "Karaman", "Sivas", "Yozgat", "Kırıkkale", "Bilecik", "Sakarya", "Kocaeli"] },
  { soru: "Demiryolu Bağlantısı Olmayan Önemli Limanlar", kategori: "Ulasim", iller: ["Trabzon", "Antalya", "Muğla", "Rize", "Sinop"] },
// --- ULAŞIM (Otoyol Ağları) ---
  {
    soru: "Türkiye'deki Ana Otoyol Ağlarının (TEM, İstanbul-İzmir, Ankara-Niğde, Kuzey Marmara) Geçtiği İller",
    kategori: "Ulasim",
    iller: [
      "Edirne", "Kırklareli", "Tekirdağ", "İstanbul", "Kocaeli", "Sakarya", "Düzce", "Bolu", "Ankara", // Kuzey ve TEM hattı
      "Yalova", "Bursa", "Balıkesir", "Manisa", "İzmir", "Aydın", "Denizli", // Batı ve Ege hattı
      "Kırşehir", "Nevşehir", "Aksaray", "Niğde", // İç Anadolu geçiş hattı
      "Adana", "Mersin", "Hatay", "Gaziantep", "Şanlıurfa" // Güney ve Güneydoğu hattı
    ]
  },
  // --- BÖLGESEL KALKINMA PROJELERİ (Yeni Kategori) ---
  { soru: "ZBK (Zonguldak-Bartın-Karabük) Projesi", kategori: "Projeler", iller: ["Zonguldak", "Bartın", "Karabük"] },
  { soru: "KOP (Konya Ovası Projesi) Kapsamındaki İller", kategori: "Projeler", iller: ["Konya", "Karaman", "Aksaray", "Niğde", "Nevşehir", "Yozgat", "Kırıkkale", "Kırşehir"] },
  { soru: "DOKAP Kapsamındaki İller", kategori: "Projeler", iller: ["Artvin", "Rize", "Trabzon", "Giresun", "Ordu", "Samsun", "Tokat", "Amasya", "Çorum", "Bayburt", "Gümüşhane"] },
  { soru: "DAP (Doğu Anadolu Projesi) Kapsamındaki Bazı Kritik İller", kategori: "Projeler", iller: ["Erzurum", "Kars", "Ardahan", "Ağrı", "Iğdır", "Van", "Hakkâri", "Bitlis", "Muş", "Bingöl", "Tunceli", "Erzincan", "Malatya", "Elazığ", "Sivas"] },
  { soru: "YHGP (Yeşilırmak Havzası Gelişim Projesi)", kategori: "Projeler", iller: ["Amasya", "Çorum", "Tokat", "Samsun"] },
  { soru: "GAP (Güneydoğu Anadolu Projesi) Kapsamındaki İller", kategori: "Projeler", iller: ["Gaziantep", "Diyarbakır", "Şanlıurfa", "Mardin", "Adıyaman", "Batman", "Siirt", "Şırnak", "Kilis"] }, // Türkiye'nin En Büyük Sulama ve Hidroelektrik Odaklı Bölgesel Kalkınma Projesi

  // --- MİLLİ PARKLAR ---
  { soru: "Nemrut Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Adıyaman", "Malatya"] },
  { soru: "Akdağ Milli Parkı", kategori: "MilliParklar", iller: ["Afyon", "Denizli"] },
  { soru: "Başkomutan Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Afyon", "Kütahya", "Uşak"] },
  { soru: "Ağrı Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Ağrı", "Iğdır"] },
  { soru: "Soğuksu Milli Parkı", kategori: "MilliParklar", iller: ["Ankara"] },
  { soru: "Sakarya Meydan Muharebesi Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Ankara"] },
  { soru: "Sarıçalı Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Ankara"] },
  { soru: "Güllük Dağı - Termessos Milli Parkı", kategori: "MilliParklar", iller: ["Antalya"] },
  { soru: "Beydağları Sahil Milli Parkı", kategori: "MilliParklar", iller: ["Antalya"] },
  { soru: "Altınbeşik Mağarası Milli Parkı", kategori: "MilliParklar", iller: ["Antalya"] },
  { soru: "Köprülü Kanyon Milli Parkı", kategori: "MilliParklar", iller: ["Antalya", "Isparta"] },
  { soru: "Hatila Vadisi Milli Parkı", kategori: "MilliParklar", iller: ["Artvin"] },
  { soru: "Kaçkar Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Artvin", "Rize"] },
  { soru: "Dilek Yarımadası - Büyük Menderes Deltası Milli Parkı", kategori: "MilliParklar", iller: ["Aydın"] },
  { soru: "Kuşcenneti Milli Parkı", kategori: "MilliParklar", iller: ["Balıkesir"] },
  { soru: "Kazdağı Milli Parkı", kategori: "MilliParklar", iller: ["Balıkesir"] },
  { soru: "Kop Dağı Müdafaası Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Bayburt", "Erzurum"] },
  { soru: "Yedigöller Milli Parkı", kategori: "MilliParklar", iller: ["Bolu"] },
  { soru: "Abant Gölü Milli Parkı", kategori: "MilliParklar", iller: ["Bolu"] },
  { soru: "Uludağ Milli Parkı", kategori: "MilliParklar", iller: ["Bursa"] },
  { soru: "Troya Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Çanakkale"] },
  { soru: "Boğazköy - Alacahöyük Milli Parkı", kategori: "MilliParklar", iller: ["Çorum"] },
  { soru: "Honaz Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Denizli"] },
  { soru: "Gala Gölü Milli Parkı", kategori: "MilliParklar", iller: ["Edirne"] },
  { soru: "Nene Hatun Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Erzurum"] },
  { soru: "Sarıkamış - Allahuekber Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Erzurum", "Kars"] },
  { soru: "Cilo ve Sat Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Hakkâri"] },
  { soru: "Kızıldağ Milli Parkı", kategori: "MilliParklar", iller: ["Isparta"] },
  { soru: "Kovada Gölü Milli Parkı", kategori: "MilliParklar", iller: ["Isparta"] },
  { soru: "Geben Vadisi Milli Parkı", kategori: "MilliParklar", iller: ["Kahramanmaraş"] },
  { soru: "Küre Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Kastamonu", "Bartın"] },
  { soru: "Ilgaz Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Kastamonu", "Çankırı"] },
  { soru: "İstiklal Yolu Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Kastamonu", "Çankırı", "Ankara"] },
  { soru: "Sultan Sazlığı Milli Parkı", kategori: "MilliParklar", iller: ["Kayseri"] },
  { soru: "İğneada Longoz Ormanları Milli Parkı", kategori: "MilliParklar", iller: ["Kırklareli"] },
  { soru: "Beyşehir Gölü Milli Parkı", kategori: "MilliParklar", iller: ["Konya","Isparta"] },
  { soru: "Derebucak Çamlık Mağaraları Milli Parkı", kategori: "MilliParklar", iller: ["Konya"] },
  { soru: "Spil Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Manisa"] },
  { soru: "Marmaris Milli Parkı", kategori: "MilliParklar", iller: ["Muğla"] },
  { soru: "Saklıkent Milli Parkı", kategori: "MilliParklar", iller: ["Muğla", "Antalya"] },
  { soru: "Malazgirt Meydan Muharebesi Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Muş"] },
  { soru: "Aladağlar Milli Parkı", kategori: "MilliParklar", iller: ["Niğde", "Adana", "Kayseri"] },
  { soru: "Karatepe - Aslantaş Milli Parkı", kategori: "MilliParklar", iller: ["Osmaniye"] },
  { soru: "Karagöl - Sahara Milli Parkı", kategori: "MilliParklar", iller: ["Rize", "Artvin"] },
  { soru: "Botan Vadisi Milli Parkı", kategori: "MilliParklar", iller: ["Siirt"] },
  { soru: "Divriği Milli Parkı", kategori: "MilliParklar", iller: ["Sivas"] },
  { soru: "Tek Tek Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Şanlıurfa"] },
  { soru: "Altındere Vadisi Milli Parkı", kategori: "MilliParklar", iller: ["Trabzon"] },
  { soru: "Munzur Vadisi Milli Parkı", kategori: "MilliParklar", iller: ["Tunceli"] },
  { soru: "Yozgat Çamlığı Milli Parkı", kategori: "MilliParklar", iller: ["Yozgat"] },

  // --- RAMSAR ALANLARI ---
  { soru: "Uluabat Gölü (Ramsar)", kategori: "Ramsar", iller: ["Bursa"] },
  { soru: "Manyas Gölü (Ramsar)", kategori: "Ramsar", iller: ["Balıkesir"] },
  { soru: "Gediz Deltası (Ramsar)", kategori: "Ramsar", iller: ["İzmir"] },
  { soru: "Göksu Deltası (Ramsar)", kategori: "Ramsar", iller: ["Mersin"] },
  { soru: "Akyatan Lagünü (Ramsar)", kategori: "Ramsar", iller: ["Adana"] },
  { soru: "Yumurtalık Lagünü (Ramsar)", kategori: "Ramsar", iller: ["Adana"] },
  { soru: "Meke Gölü (Ramsar)", kategori: "Ramsar", iller: ["Konya"] },
  { soru: "Kızören Obruğu (Ramsar)", kategori: "Ramsar", iller: ["Konya"] },
  { soru: "Kızılırmak Deltası (Ramsar)", kategori: "Ramsar", iller: ["Samsun"] },
  { soru: "Sultan Sazlığı (Ramsar)", kategori: "Ramsar", iller: ["Kayseri"] },
  { soru: "Burdur Gölü (Ramsar)", kategori: "Ramsar", iller: ["Burdur"] },
  { soru: "Seyfe Gölü (Ramsar)", kategori: "Ramsar", iller: ["Kırşehir"] },
  { soru: "Kuyucuk Gölü (Ramsar)", kategori: "Ramsar", iller: ["Kars"] },
  { soru: "Nemrut Kalderası (Ramsar)", kategori: "Ramsar", iller: ["Bitlis"] },

  // --- GEÇİTLER ---
  { soru: "Çubuk Geçidi", kategori: "Gecitler", iller: ["Antalya", "Burdur"] },
  { soru: "Sertavul Geçidi", kategori: "Gecitler", iller: ["Mersin", "Karaman"] },
  { soru: "Gülek Boğazı", kategori: "Gecitler", iller: ["Adana", "Niğde"] },
  { soru: "Belen Geçidi", kategori: "Gecitler", iller: ["Hatay"] },
  { soru: "Zigana (Kalkanlı) Geçidi", kategori: "Gecitler", iller: ["Trabzon", "Gümüşhane"] },
  { soru: "Kop Geçidi", kategori: "Gecitler", iller: ["Bayburt", "Erzurum"] },
  { soru: "Ovit Tüneli / Geçidi", kategori: "Gecitler", iller: ["Rize", "Erzurum"] },
  { soru: "Cankurtaran Geçidi", kategori: "Gecitler", iller: ["Artvin"] },
  { soru: "Ilgaz Geçidi", kategori: "Gecitler", iller: ["Kastamonu", "Çankırı"] },
  { soru: "Ecevit Geçidi", kategori: "Gecitler", iller: ["Kastamonu"] },
  { soru: "Bolu Geçidi", kategori: "Gecitler", iller: ["Bolu", "Düzce"] },
  { soru: "Sakaltutan Geçidi", kategori: "Gecitler", iller: ["Erzincan", "Sivas"] },
  { soru: "Kızıldağ Geçidi", kategori: "Gecitler", iller: ["Erzincan", "Sivas"] },
  { soru: "Çamlıbel Geçidi", kategori: "Gecitler", iller: ["Tokat", "Sivas"] },
  { soru: "Buğlan Geçidi", kategori: "Gecitler", iller: ["Bingöl", "Muş"] },
  { soru: "Alacabel Geçidi", kategori: "Gecitler", iller: ["Antalya", "Konya"] },

  // --- TÜNELLER ---
  { soru: "Ovit Dağı Tüneli", kategori: "Tuneller", iller: ["Erzurum", "Rize"] },
  { soru: "Orhangazi Tüneli (Samanlı Dağı Tüneli)", kategori: "Tuneller", iller: ["Yalova", "Bursa"] },
  { soru: "Nefise Akçelik Tüneli", kategori: "Tuneller", iller: ["Ordu"] },
  { soru: "Bolu Dağı Tüneli", kategori: "Tuneller", iller: ["Bolu", "Düzce"] },
  { soru: "Cankurtaran Tüneli", kategori: "Tuneller", iller: ["Artvin"] },
  { soru: "15 Temmuz Ilgaz Tüneli", kategori: "Tuneller", iller: ["Kastamonu", "Çankırı"] },
  { soru: "75. Yıl Selatin Tüneli", kategori: "Tuneller", iller: ["İzmir", "Aydın"] },
  { soru: "Kop Dağı Tüneli", kategori: "Tuneller", iller: ["Erzurum", "Bayburt"] },

  // --- TURİZM ---
  { soru: "Elmadağ (Kış Turizmi)", kategori: "Turizm", iller: ["Ankara"] },
  { soru: "Saklıkent (Kış Turizmi)", kategori: "Turizm", iller: ["Antalya"] },
  { soru: "Davras (Kış Turizmi)", kategori: "Turizm", iller: ["Isparta"] },
  { soru: "Ladik (Kış Turizmi)", kategori: "Turizm", iller: ["Samsun"] },
  { soru: "Kartepe (Kış Turizmi)", kategori: "Turizm", iller: ["Kocaeli"] },
  { soru: "Bozdağlar (Kış Turizmi)", kategori: "Turizm", iller: ["İzmir"] },
  { soru: "Ergan Dağı (Kış Turizmi)", kategori: "Turizm", iller: ["Erzincan"] },
  { soru: "Meryem Ana (Hz. İsa'nın Annesi Meryem'in Son Yaşadığına İnanılan Ev)", kategori: "Turizm", iller: ["İzmir"] },
  { soru: "Demre / St. Nicolas Kilisesi (Noel Baba'nın / Aziz Nikolaos'un Yaşadığı ve Gömülü Olduğu Kilise)", kategori: "Turizm", iller: ["Antalya"] },
  { soru: "St. Pierre (Hristiyanlığın İlk Yeraltı / Mağara Kilisesi)", kategori: "Turizm", iller: ["Hatay"] },
  { soru: "Akdamar Kilisesi (Van Gölü'ndeki Adada, Ermeni Mimarisi ve Kabartmalarıyla Ünlü)", kategori: "Turizm", iller: ["Van"] },
  { soru: "Sümela Manastırı (Kayalıklara Oyulmuş Rum-Ortodoks Manastırı)", kategori: "Turizm", iller: ["Trabzon"] },
  { soru: "Deyrulzaferan (Süryani Ortodoks Kilisesi'nin En Eski Manastırlarından)", kategori: "Turizm", iller: ["Mardin"] },
  { soru: "Selimiye (Mimar Sinan'ın Ustalık Eseri Camii) ", kategori: "Turizm", iller: ["Edirne"] },
  { soru: "Ulucami (Osmanlı Erken Dönem Çok Kubbeli - 20 Kubbeli Cami Mimarisi)", kategori: "Turizm", iller: ["Bursa"] },
  { soru: "Balıklıgöl (Hz. İbrahim'in Ateşe Atıldığı Yerin Havuza Dönüştüğüne İnanılan Kutsal Mekan)", kategori: "Turizm", iller: ["Şanlıurfa"] },
  { soru: "Mevlânâ (Mevlana Celaleddin Rumi'nin Türbesi - Mevlevilik Tarikatının Merkezi)", kategori: "Turizm", iller: ["Konya"] },
  { soru: "Hacıbektaş (Hacı Bektaş Veli'nin Türbesi - Bektaşilik Tarikatının Merkezi)", kategori: "Turizm", iller: ["Nevşehir"] },


  // --- SINIR KAPILARI ---
  { soru: "İpsala Sınır Kapısı", kategori: "SinirKapilari", iller: ["Edirne"] },
  { soru: "Pazarkule Sınır Kapısı", kategori: "SinirKapilari", iller: ["Edirne"] },
  { soru: "Uzunköprü (Demiryolu) Sınır Kapısı", kategori: "SinirKapilari", iller: ["Edirne"] },
  { soru: "Kapıkule Sınır Kapısı", kategori: "SinirKapilari", iller: ["Edirne"] },
  { soru: "Hamzabeyli Sınır Kapısı", kategori: "SinirKapilari", iller: ["Edirne"] },
  { soru: "Dereköy Sınır Kapısı", kategori: "SinirKapilari", iller: ["Kırklareli"] },
  { soru: "Sarp Sınır Kapısı", kategori: "SinirKapilari", iller: ["Artvin"] },
  { soru: "Türkgözü Sınır Kapısı", kategori: "SinirKapilari", iller: ["Ardahan"] },
  { soru: "Aktaş Sınır Kapısı", kategori: "SinirKapilari", iller: ["Ardahan"] },
  { soru: "Canbaz (Demiryolu) Sınır Kapısı", kategori: "SinirKapilari", iller: ["Ardahan"] },
  { soru: "Alican Sınır Kapısı", kategori: "SinirKapilari", iller: ["Iğdır"] },
  { soru: "Akyaka (Demiryolu) Sınır Kapısı", kategori: "SinirKapilari", iller: ["Kars"] },
  { soru: "Dilucu Sınır Kapısı", kategori: "SinirKapilari", iller: ["Iğdır"] },
  { soru: "Gürbulak Sınır Kapısı", kategori: "SinirKapilari", iller: ["Ağrı"] },
  { soru: "Kapıköy Sınır Kapısı", kategori: "SinirKapilari", iller: ["Van"] },
  { soru: "Esendere Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hakkâri"] },
  { soru: "Habur Sınır Kapısı", kategori: "SinirKapilari", iller: ["Şırnak"] },
  { soru: "Üzümlü Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hakkâri"] },
  { soru: "Derecik Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hakkâri"] },
  { soru: "Cilvegözü Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hatay"] },
  { soru: "Zeytin Dalı Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hatay"] },
  { soru: "Yayladağı Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hatay"] },
  { soru: "Öncüpınar Sınır Kapısı", kategori: "SinirKapilari", iller: ["Kilis"] },
  { soru: "Çobanbey Sınır Kapısı", kategori: "SinirKapilari", iller: ["Kilis"] },
  { soru: "Karkamış Sınır Kapısı", kategori: "SinirKapilari", iller: ["Gaziantep"] },
  { soru: "Mürşitpınar Sınır Kapısı", kategori: "SinirKapilari", iller: ["Şanlıurfa"] },
  { soru: "Akçakale Sınır Kapısı", kategori: "SinirKapilari", iller: ["Şanlıurfa"] },
  { soru: "Ceylanpınar Sınır Kapısı", kategori: "SinirKapilari", iller: ["Şanlıurfa"] },
  { soru: "Şenyurt Sınır Kapısı", kategori: "SinirKapilari", iller: ["Mardin"] },
  { soru: "Nusaybin Sınır Kapısı", kategori: "SinirKapilari", iller: ["Mardin"] },
  { soru: "Cizre Sınır Kapısı", kategori: "SinirKapilari", iller: ["Şırnak"] },

  // --- UNESCO ---
  { soru: "İstanbul'un Tarihî Alanları (Sultanahmet, Ayasofya, Topkapı - Bizans ve Osmanlı Başkentliği Mirası) (UNESCO)", kategori: "UNESCO", iller: ["İstanbul"] },
  { soru: "Safranbolu Şehri (Osmanlı Dönemi Geleneksel Türk Evleri ve Şehircilik Dokusu) (UNESCO)", kategori: "UNESCO", iller: ["Karabük"] },
  { soru: "Hattuşaş / Boğazköy (Hitit Başkenti - Kadeş Antlaşması Tabletleri) (UNESCO)", kategori: "UNESCO", iller: ["Çorum"] },
  { soru: "Nemrut Dağı (Kommagene Kralı I. Antiokhos'un Dev Tanrı-Kral Heykelleri) (UNESCO)", kategori: "UNESCO", iller: ["Adıyaman"] },
  { soru: "Xanthos - Letoon (Likya Birliği'nin Dini ve Siyasi Merkezi) (UNESCO)", kategori: "UNESCO", iller: ["Antalya", "Muğla"] },
  { soru: "Divriği Ulu Camii ve Darüşşifası (Selçuklu Taş İşçiliği ve Süsleme Sanatının Şaheseri) (UNESCO)", kategori: "UNESCO", iller: ["Sivas"] },
  { soru: "Truva Antik Kenti (Truva Savaşı ve Tahta At Efsanesi) (UNESCO)", kategori: "UNESCO", iller: ["Çanakkale"] },
  { soru: "Pamukkale - Hierapolis (Beyaz Travertenler ve Antik Şifa Merkezi) (UNESCO)", kategori: "UNESCO", iller: ["Denizli"] },
  { soru: "Göreme Millî Parkı ve Kapadokya (Peri Bacaları, Kaya Kiliseleri ve Yeraltı Şehirleri) (UNESCO)", kategori: "UNESCO", iller: ["Nevşehir"] },
  { soru: "Selimiye Camii (Mimar Sinan'ın 'Ustalık Eserim' Dediği Yapı) (UNESCO)", kategori: "UNESCO", iller: ["Edirne"] },
  { soru: "Çatalhöyük Neolitik Kenti (Bilinen İlk Yerleşik Tarım Toplumu Örneklerinden) (UNESCO)", kategori: "UNESCO", iller: ["Konya"] },
  { soru: "Cumalıkızık (Osmanlı Dönemi Köy Dokusunu Koruyan İlk Osmanlı Köyü) (UNESCO)", kategori: "UNESCO", iller: ["Bursa"] },
  { soru: "Bergama (Pergamon Krallığı Başkenti - Dünyanın İlk Kütüphanelerinden) (UNESCO)", kategori: "UNESCO", iller: ["İzmir"] },
  { soru: "Diyarbakır Kalesi ve Surları (Çin Seddi'nden Sonra Dünyanın En Uzun İkinci Suru) (UNESCO)", kategori: "UNESCO", iller: ["Diyarbakır"] },
  { soru: "Efes (Artemis Tapınağı ve Meryem Ana Evi'ne Yakınlığı) (UNESCO)", kategori: "UNESCO", iller: ["İzmir"] },
  { soru: "Ani Arkeolojik Alanı ('1001 Kilise Şehri' - İpek Yolu Üzerinde) (UNESCO)", kategori: "UNESCO", iller: ["Kars"] },
  { soru: "Afrodisias (Heykeltıraşlık Okulu ve Afrodit Tapınağı) (UNESCO)", kategori: "UNESCO", iller: ["Aydın"] },
  { soru: "Göbeklitepe (Dünyanın Bilinen En Eski Tapınağı) (UNESCO)", kategori: "UNESCO", iller: ["Şanlıurfa"] },
  { soru: "Arslantepe Höyüğü (Bilinen En Eski Devlet Yapılanması ve Bronz İşçiliği İzleri) (UNESCO)", kategori: "UNESCO", iller: ["Malatya"] },
  { soru: "Bintepeler Höyüğü (Lidya Krallarına Ait Dev Tümülüs Mezarları) (UNESCO)", kategori: "UNESCO", iller: ["Manisa"] },
  { soru: "Sardes Antik Kenti (Lidya Başkenti - İlk Parayı Basan Uygarlık) (UNESCO)", kategori: "UNESCO", iller: ["Manisa"] },
  { soru: "Eşrefoğlu Camii (Beylikler Dönemi Ahşap Direkli Cami Mimarisinin Özgün Örneği) (UNESCO)", kategori: "UNESCO", iller: ["Konya"] },
  { soru: "Afyonkarahisar Ulu Camii (Selçuklu Dönemi Ahşap Direkli Cami) (UNESCO)", kategori: "UNESCO", iller: ["Afyon"] },
  { soru: "Sivrihisar Ulu Camii (Selçuklu Dönemi Ahşap Direkli Cami) (UNESCO)", kategori: "UNESCO", iller: ["Eskişehir"] },
  { soru: "Ahi Şerafettin (Aslanhane) Camii (Ahilik Kültürü ve Ahşap Direkli Cami Mimarisi) (UNESCO)", kategori: "UNESCO", iller: ["Ankara"] },
  { soru: "Mahmutbey Camii (Candaroğulları Beyliği Dönemi Ahşap İşçiliği) (UNESCO)", kategori: "UNESCO", iller: ["Kastamonu"] },

  // --- KANYONLAR ---
  { soru: "Ihlara Vadisi", kategori: "Kanyon", iller: ["Aksaray"] },
  { soru: "Saklıkent Kanyonu", kategori: "Kanyon", iller: ["Muğla", "Antalya"] },
  { soru: "Köprülü Kanyon", kategori: "Kanyon", iller: ["Antalya"] },
  { soru: "Güver Uçurumu", kategori: "Kanyon", iller: ["Antalya"] },
  { soru: "Valla Kanyonu", kategori: "Kanyon", iller: ["Kastamonu"] },
  { soru: "Horma Kanyonu", kategori: "Kanyon", iller: ["Kastamonu"] },
  { soru: "Çatak Kanyonu", kategori: "Kanyon", iller: ["Kastamonu"] },
  { soru: "Ulubey Kanyonu", kategori: "Kanyon", iller: ["Uşak"] },
  { soru: "Şahinkaya Kanyonu", kategori: "Kanyon", iller: ["Samsun"] },
  { soru: "Cehennem Deresi Kanyonu", kategori: "Kanyon", iller: ["Artvin"] },
  { soru: "İncesu Kanyonu", kategori: "Kanyon", iller: ["Çorum"] },
  { soru: "Karanlık Kanyon", kategori: "Kanyon", iller: ["Erzincan"] },
  { soru: "Levent Vadisi", kategori: "Kanyon", iller: ["Malatya"] },
  { soru: "Göksu Kanyonu", kategori: "Kanyon", iller: ["Mersin"] },

// --- ANTİK KENTLER ---
  { soru: "Efes Antik Kenti (Artemis Tapınağı - Dünyanın 7 Harikasından)", kategori: "AntikKentler", iller: ["İzmir"] },
  { soru: "Bergama Antik Kenti (Dik Amfitiyatro ve Dünyanın İlk Kütüphanelerinden - Parşömenin İcadı)", kategori: "AntikKentler", iller: ["İzmir"] },
  { soru: "Teos Antik Kenti (Dionysos Tapınağı - İon Birliği'nin Dini Merkezi)", kategori: "AntikKentler", iller: ["İzmir"] },
  { soru: "Truva Antik Kenti (Truva Savaşı ve Tahta At Efsanesi - Homeros'un İlyada'sı)", kategori: "AntikKentler", iller: ["Çanakkale"] },
  { soru: "Assos Antik Kenti (Aristoteles'in Felsefe Okulu Kurduğu Yer)", kategori: "AntikKentler", iller: ["Çanakkale"] },
  { soru: "Perge Antik Kenti (Pamphylia'nın Geniş Sütunlu Caddeleriyle Ünlü Kenti)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Termessos Antik Kenti (Büyük İskender'in Ele Geçiremediği 'Kartal Yuvası' Kent)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Aspendos Antik Kenti (Dünyanın En İyi Korunmuş Roma Tiyatrosu)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Phaselis Antik Kenti (Üç Koylu Liman Kenti - Büyük İskender'in Kışladığı Yer)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Olympos Antik Kenti (Likya Birliği Kenti - Chimera Efsanesi)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Patara Antik Kenti (Likya Birliği'nin Başkenti - Noel Baba'nın Doğduğu Yer)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Xanthos Antik Kenti (Likya Birliği'nin En Önemli Kenti - Nereidler Anıtı)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Myra Antik Kenti (Kaya Mezarları ve Aziz Nikolaos / Noel Baba Kilisesi)", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Sardes Antik Kenti (Lidya Krallığı'nın Başkenti - İlk Parayı Basan Uygarlık)", kategori: "AntikKentler", iller: ["Manisa"] },
  { soru: "Hierapolis Antik Kenti (Antik Şifa/Tıp Merkezi - Pamukkale Travertenleri)", kategori: "AntikKentler", iller: ["Denizli"] },
  { soru: "Laodikeia Antik Kenti (Hristiyanlığın Yedi Kilisesinden Biri)", kategori: "AntikKentler", iller: ["Denizli"] },
  { soru: "Afrodisias Antik Kenti (Afrodit Tapınağı ve Ünlü Heykeltıraşlık Okulu)", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Milet Antik Kenti (İlk Filozofların - Thales, Anaksimandros - Yaşadığı Felsefenin Beşiği)", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Didyma Antik Kenti (Apollon Tapınağı ve Ünlü Kehanet Ocağı)", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Priene Antik Kenti (Izgara Plan / Hippodamos Şehircilik Örneği)", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Knidos Antik Kenti (Praksiteles'in Ünlü Afrodit Heykeli - İki Limanlı Kent)", kategori: "AntikKentler", iller: ["Muğla"] },
  { soru: "Kaunos Antik Kenti (Kaya Mezarları - Dalyan'a Yakın Antik Kent)", kategori: "AntikKentler", iller: ["Muğla"] },
  { soru: "Stratonikeia Antik Kenti ('Taşların Şehri' - Dünyanın En Büyük Mermer Ocağı Üzerinde)", kategori: "AntikKentler", iller: ["Muğla"] },
  { soru: "Aizanoi Antik Kenti (En İyi Korunmuş Zeus Tapınağı - Bilinen İlk Borsa Binası)", kategori: "AntikKentler", iller: ["Kütahya"] },
  { soru: "Gordion Antik Kenti (Frigya Krallığı'nın Başkenti - Gordion Düğümü ve Kral Midas Efsanesi)", kategori: "AntikKentler", iller: ["Ankara"] },
  { soru: "Pessinus Antik Kenti (Kibele / Ana Tanrıça Kültünün Merkezi)", kategori: "AntikKentler", iller: ["Eskişehir"] },
  { soru: "Hattuşaş Antik Kenti (Hitit İmparatorluğu'nun Başkenti - Kadeş Antlaşması Tabletleri)", kategori: "AntikKentler", iller: ["Çorum"] },
  { soru: "Alacahöyük Antik Kenti (Hitit Öncesi Dönem - Güneş Kursu ve Kral Mezarları)", kategori: "AntikKentler", iller: ["Çorum"] },
  { soru: "Kültepe Antik Kenti (Asurlu Tüccar Kolonisi - Anadolu'da Yazının Başladığı Yer)", kategori: "AntikKentler", iller: ["Kayseri"] },
  { soru: "Çatalhöyük Neolitik Kenti (Bilinen İlk Yerleşik Tarım Toplumu Örneklerinden)", kategori: "AntikKentler", iller: ["Konya"] },
  { soru: "Göbeklitepe Arkeolojik Alanı (Dünyanın Bilinen En Eski Tapınağı - 'Sıfır Noktası')", kategori: "AntikKentler", iller: ["Şanlıurfa"] },
  { soru: "Karahantepe Arkeolojik Alanı (Göbeklitepe ile Çağdaş - Taş Tepeler Projesi)", kategori: "AntikKentler", iller: ["Şanlıurfa"] },
  { soru: "Arslantepe Höyüğü (Bilinen En Eski Devlet Yapılanması ve İlk Bronz İşçiliği İzleri)", kategori: "AntikKentler", iller: ["Malatya"] },
  { soru: "Zeugma Antik Kenti (Ünlü Mozaikleriyle Tanınan Roma Dönemi Kenti)", kategori: "AntikKentler", iller: ["Gaziantep"] },
  { soru: "Anazarbus Antik Kenti (Kilikya Bölgesinin Çifte Sütunlu Caddeli Kenti)", kategori: "AntikKentler", iller: ["Adana"] },
  { soru: "Castabala Antik Kenti (Sütunlu Caddesiyle Bilinen Antik Kent)", kategori: "AntikKentler", iller: ["Osmaniye"] },
  { soru: "Soloi Pompeipolis Antik Kenti (Korsanlara Karşı Roma'nın Kurduğu Liman Kenti)", kategori: "AntikKentler", iller: ["Mersin"] },
  { soru: "Dara Antik Kenti (Bizans-Sasani Sınır Kalesi - Yeraltı Su Sarnıçları)", kategori: "AntikKentler", iller: ["Mardin"] },
  { soru: "Ani Arkeolojik Alanı ('1001 Kilise Şehri' - İpek Yolu Üzerinde)", kategori: "AntikKentler", iller: ["Kars"] },

  // --- ÖSYM'NİN EN SEVDİĞİ DİĞER TARİHİ VE KÜLTÜREL YAPILAR ---
  { soru: "İshak Paşa Sarayı (Dünyanın İlk Kalorifer Sistemli Saray Yapısı)", kategori: "KulturTurizmi", iller: ["Ağrı"] },
  { soru: "Malabadi Köprüsü (Artuklular Dönemi Dünyanın En Geniş Taş Kemerli Köprüsü)", kategori: "KulturTurizmi", iller: ["Diyarbakır"] },
  { soru: "Tarihi Taşköprü (Dünyanın Hâlâ Kullanılan En Eski Taş Köprülerinden)", kategori: "KulturTurizmi", iller: ["Adana"] },
  { soru: "Sagalassos Antik Kenti (Antik Dünyanın Dağ Kasabası ve Antoninler Çeşmesi)", kategori: "KulturTurizmi", iller: ["Burdur"] },
  { soru: "Mevlana Müzesi ve Yeşil Türbe", kategori: "KulturTurizmi", iller: ["Konya"] },
  { soru: "Hacı Bektaş-ı Veli Külliyesi ve Türbesi", kategori: "KulturTurizmi", iller: ["Nevşehir"] },
  { soru: "Yeraltı Şehirleri (Derinkuyu ve Kaymaklı)", kategori: "KulturTurizmi", iller: ["Nevşehir"] },
  { soru: "Mamure Kalesi (Akdeniz Kıyısında En İyi Korunmuş Orta Çağ Kalesi)", kategori: "KulturTurizmi", iller: ["Mersin"] },
  { soru: "Hasankeyf Tarihi Yerleşkesi (Ilısu Barajı Sonrası Yeni Yerine Taşınan Tarihi Kent)", kategori: "KulturTurizmi", iller: ["Batman"] },
  { soru: "Titus Tüneli ve Beşikli Mağara (İnsan Eliyle Yapılmış Dünyanın En Büyük Tünellerinden)", kategori: "KulturTurizmi", iller: ["Hatay"] },
  { soru: "Harput Kalesi ve Tarihi Kenti (Süt Kalesi Olarak da Bilinen Eğik Minareli Ulu Camiye Sahip Bölge)", kategori: "KulturTurizmi", iller: ["Elazığ"] },
  { soru: "Alahan Manastırı (Göksu Vadisine Bakan 'Mersin'in Ayasofya'sı' Olarak Anılan Yapı)", kategori: "KulturTurizmi", iller: ["Mersin"] },
  { soru: "Blaundus Antik Kenti (Derin Kanyonların Ortasında Yer Alan Büyük İskender Dönemi Yapısı)", kategori: "KulturTurizmi", iller: ["Uşak"] },
  { soru: "Yesemek Açık Hava Müzesi ve Heykel Atölyesi (Yakın Doğu'nun En Büyük Heykel Atölyesi)", kategori: "KulturTurizmi", iller: ["Gaziantep"] },
  { soru: "Tarihi Odunpazarı Evleri", kategori: "KulturTurizmi", iller: ["Eskişehir"] }
];

// ============ UI BAŞLATMA ============
window.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('konu-grid');
  if (grid) {
    grid.innerHTML = '';
    KAT_BİLGİ.forEach(k => {
      const count = TUM_SORULAR.filter(s => s.kategori === k.id).length;
      if (count === 0) return;
      grid.innerHTML += `
        <label class="konu-card" data-cat="${k.id}">
          <input type="checkbox" value="${k.id}" checked>
          <span class="konu-ikon">${k.icon}</span>
          <span class="konu-ad">${k.ad}</span>
          <span class="konu-adet">${count} soru</span>
        </label>
      `;
    });
    grid.innerHTML += `
      <label class="konu-card konu-karisik" data-cat="Karışık">
        <input type="checkbox" value="Karışık" id="cb-karisik">
        <span class="konu-ikon">🔀</span>
        <span class="konu-ad">Karışık</span>
        <span class="konu-adet">Hepsi</span>
      </label>
    `;

    const cbKarisik = document.getElementById('cb-karisik');
    if (cbKarisik) {
      cbKarisik.addEventListener('change', () => {
        if (cbKarisik.checked) {
          document.querySelectorAll('.konu-card:not(.konu-karisik) input[type=checkbox]').forEach(cb => {
            cb.checked = false;
          });
        }
      });
      document.querySelectorAll('.konu-card:not(.konu-karisik) input[type=checkbox]').forEach(cb => {
        cb.addEventListener('change', () => {
          if (cb.checked) cbKarisik.checked = false;
        });
      });
    }
    document.querySelectorAll('.konu-card').forEach(card => {
      const cb = card.querySelector('input[type=checkbox]');
      if (!cb) return;
      const updateCard = () => card.classList.toggle('secili', cb.checked);
      cb.addEventListener('change', updateCard);
      updateCard();
    });
  }
  showScreen('screen-start');
});

// ============ ANA MENÜ ============
function anaMenuye() {
  showScreen('screen-konu');
}

function hepsiniSec() {
  document.getElementById('cb-karisik').checked = false;
  document.querySelectorAll('.konu-card:not(.konu-karisik) input[type=checkbox]').forEach(cb => {
    cb.checked = true;
    cb.closest('.konu-card').classList.add('secili');
  });
  document.querySelector('.konu-karisik').classList.remove('secili');
}

function secimKaldir() {
  document.querySelectorAll('.konu-card input[type=checkbox]').forEach(cb => {
    cb.checked = false;
    cb.closest('.konu-card').classList.remove('secili');
  });
}

function startGameWithKonu() {
  const cbKarisik = document.getElementById('cb-karisik');
  let seciliKonular = [];
  if (cbKarisik && cbKarisik.checked) {
    seciliKonular = KAT_BİLGİ.map(k => k.id);
  } else {
    document.querySelectorAll('.konu-card:not(.konu-karisik) input[type=checkbox]:checked').forEach(cb => {
      seciliKonular.push(cb.value);
    });
  }
  if (seciliKonular.length === 0) {
    alert('Lütfen en az bir konu seç!');
    return;
  }
  const filtrelenmis = TUM_SORULAR.filter(s => seciliKonular.includes(s.kategori));
  sorular = shuffle([...filtrelenmis]);
  soruIdx = 0; puan = 0; hata = 0; dogru = 0; gecilen = 0; streak = 0; yanlisSorular = [];
  beklemede = false;
  showScreen('screen-game');
  buildMap();
  renderSoru();
}

// ============ OYUN DURUMU ============
let sorular = [], soruIdx = 0;
let puan = 0, hata = 0, dogru = 0, gecilen = 0;
let streak = 0; // ardışık doğru sayısı (sorular arası taşınır)
let bulunanlar = [], yanlisSorular = [];
let beklemede = false;

// ============ MADEN MODU ============
// Madenler kategorisinde soru tersinedir:
// İller haritada gösterilir, kullanıcı madeni seçeneklerden tahmin eder.
function isMadenModu(s) {
  return s && s.kategori === 'Madenler';
}

// ============ HARİTA ============
const SVG_NS = 'http://www.w3.org/2000/svg';
let svgEl, tooltipEl, mapFbEl;
let ilEls = {};

function buildMap() {
  svgEl = document.getElementById('turkey-svg');
  tooltipEl = document.getElementById('tooltip');
  mapFbEl = document.getElementById('map-feedback');
  svgEl.innerHTML = '';
  ilEls = {};

  Object.entries(IL_SVG_DATA).forEach(([iladi, pathData]) => {
    const g = document.createElementNS(SVG_NS, 'g');
    const pathParts = pathData.split(/(?=M)/g).filter(s => s.trim());
    pathParts.forEach(part => {
      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', part.trim());
      path.classList.add('il-path');
      path.dataset.il = iladi;
      g.appendChild(path);
    });

    const center = IL_CENTERS[iladi];
    if (center) {
      const txt = document.createElementNS(SVG_NS, 'text');
      txt.classList.add('il-label');
      txt.setAttribute('x', center[0]);
      txt.setAttribute('y', center[1] + 1);
      txt.setAttribute('text-anchor', 'middle');
      txt.setAttribute('dominant-baseline', 'middle');
      const kisa = iladi.length > 10 ? iladi.substring(0, 9) + '…' : iladi;
      txt.textContent = kisa;
      g.appendChild(txt);
    }

    g.addEventListener('click', () => ilTiklandi(iladi));
    g.addEventListener('mouseenter', (e) => showTooltip(e, iladi));
    g.addEventListener('mouseleave', hideTooltip);
    g.addEventListener('touchend', (e) => { e.preventDefault(); ilTiklandi(iladi); });

    svgEl.appendChild(g);
    ilEls[iladi] = g;
  });
}

function getIlPaths(iladi) {
  const g = ilEls[iladi];
  if (!g) return [];
  return Array.from(g.querySelectorAll('.il-path'));
}
function setIlClass(iladi, cls) {
  getIlPaths(iladi).forEach(p => { p.className.baseVal = 'il-path ' + cls; });
}
function resetIl(iladi) {
  getIlPaths(iladi).forEach(p => { p.className.baseVal = 'il-path'; });
}
function resetAllIller() {
  Object.keys(ilEls).forEach(il => resetIl(il));
}
function wrongAnim(iladi) {
  getIlPaths(iladi).forEach(p => {
    p.className.baseVal = 'il-path il-wrong';
    setTimeout(() => { if (p.className.baseVal.includes('il-wrong')) p.className.baseVal = 'il-path'; }, 550);
  });
}

function showTooltip(e, iladi) {
  const center = IL_CENTERS[iladi];
  if (!center) return;
  const mapWrap = document.getElementById('map-wrap');
  const wRect = mapWrap.getBoundingClientRect();
  const svgRect = svgEl.getBoundingClientRect();
  const vb = svgEl.viewBox.baseVal;
  const sx = svgRect.width / vb.width;
  const sy = svgRect.height / vb.height;
  const screenX = (center[0] - vb.x) * sx + svgRect.left - wRect.left;
  const screenY = (center[1] - vb.y) * sy + svgRect.top - wRect.top;
  tooltipEl.textContent = iladi;
  tooltipEl.style.left = (screenX + 10) + 'px';
  tooltipEl.style.top = Math.max(0, screenY - 40) + 'px';
  tooltipEl.classList.add('show');
}
function hideTooltip() { tooltipEl.classList.remove('show'); }

function showMapFeedback(msg, tip) {
  mapFbEl.textContent = msg;
  mapFbEl.className = 'map-feedback ' + tip;
  clearTimeout(mapFbEl._t);
  if (tip !== 'info-persist') {
    mapFbEl._t = setTimeout(() => { mapFbEl.className = 'map-feedback'; }, 1800);
  }
}

// ============ EKRAN GEÇİŞ ============
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  el.style.display = '';
  el.classList.add('active');
}

function setSonrakiButon(goster) {
  const btn = document.getElementById('btn-next');
  const mobBtn = document.getElementById('mob-btn-next');
  const skipBtn = document.getElementById('btn-skip');
  const revealBtn = document.getElementById('btn-reveal');
  const mobSkip = document.getElementById('mob-btn-skip');
  const mobReveal = document.getElementById('mob-btn-reveal');
  if (goster) {
    if (btn) btn.style.display = '';
    if (mobBtn) mobBtn.style.display = '';
    if (skipBtn) skipBtn.style.display = 'none';
    if (revealBtn) revealBtn.style.display = 'none';
    if (mobSkip) mobSkip.style.display = 'none';
    if (mobReveal) mobReveal.style.display = 'none';
  } else {
    if (btn) btn.style.display = 'none';
    if (mobBtn) mobBtn.style.display = 'none';
    if (skipBtn) skipBtn.style.display = '';
    if (revealBtn) revealBtn.style.display = '';
    if (mobSkip) mobSkip.style.display = '';
    if (mobReveal) mobReveal.style.display = '';
  }
}

// ============ ENTER TUŞU: Göster / Sonraki tetikle ============
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;

  const gameScreen = document.getElementById('screen-game');
  if (!gameScreen || !gameScreen.classList.contains('active')) return;

  // Bir input/textarea içindeyken enter normal davransın
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  e.preventDefault();

  const nextBtn = document.getElementById('btn-next');
  const mobNextBtn = document.getElementById('mob-btn-next');
  const nextVisible = (nextBtn && nextBtn.style.display !== 'none') ||
                       (mobNextBtn && mobNextBtn.style.display !== 'none');

  if (nextVisible) {
    sonrakiSoru();
  } else {
    revealSoru();
  }
});

// ============ ENTER TUŞU: Göster / Sonraki tetikle ============
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const gameScreen = document.getElementById('screen-game');
  if (!gameScreen || !gameScreen.classList.contains('active')) return;
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  e.preventDefault();
  const nextBtn = document.getElementById('btn-next');
  const mobNextBtn = document.getElementById('mob-btn-next');
  const nextVisible = (nextBtn && nextBtn.style.display !== 'none') ||
                       (mobNextBtn && mobNextBtn.style.display !== 'none');
  if (nextVisible) {
    sonrakiSoru();
  } else {
    revealSoru();
  }
});

function sonrakiSoru() {
  hideMadenSecenekler();
  beklemede = false;
  soruIdx++;
  setSonrakiButon(false);
  renderSoru();
}

function restartGame() {
  startGameWithKonu();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ SORU GÖSTER ============
function renderSoru() {
  if (soruIdx >= sorular.length) { endGame(); return; }
  const s = sorular[soruIdx];

  bulunanlar = Array(s.iller.length).fill(null);

  beklemede = false;
  resetAllIller();
  setSonrakiButon(false);

  const iconInfo = KAT_BİLGİ.find(k => k.id === s.kategori);
  const title = iconInfo ? `${iconInfo.icon} ${s.kategori}` : s.kategori;

  const pct = (soruIdx / sorular.length * 100).toFixed(0);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('tb-qinfo').textContent = `Soru ${soruIdx + 1} / ${sorular.length}`;

  clearFeedback();
  if (mapFbEl) mapFbEl.className = 'map-feedback';

  if (isMadenModu(s)) {
    // MADEN MODU: İlleri haritada göster, madeni tahmin ettir
    document.getElementById('q-cat').textContent = title;
    document.getElementById('q-text').textContent = 'Haritada gösterilen iller hangi madene ait?';
    document.getElementById('mob-q-cat').textContent = title;
    document.getElementById('mob-q-text').textContent = 'Haritada gösterilen iller hangi madene ait?';

    // Tüm doğru illeri haritada göster
    s.iller.forEach(il => setIlClass(il, 'il-revealed'));
    // bulunanları dolu say (il tıklaması devre dışı)
    bulunanlar = [...s.iller];

    renderSiraList();
    renderMadenSecenekler(s);
  } else {
    document.getElementById('q-cat').textContent = title;
    document.getElementById('q-text').textContent = s.soru;
    document.getElementById('mob-q-cat').textContent = title;
    document.getElementById('mob-q-text').textContent = s.soru;

    // Maden seçenek panelini gizle
    hideMadenSecenekler();
    renderSiraList();
  }
}

// ============ MADEN SEÇENEK PANELİ ============
// Madenler kategorisindeki tüm benzersiz soru adlarını seçenek olarak sun
function getMadenSecenekler(dogruSoru) {
  const tumMadenler = [...new Set(TUM_SORULAR
    .filter(s => s.kategori === 'Madenler')
    .map(s => s.soru))];

  // Doğru cevabı dahil et, karıştır, max 5 seçenek sun
  const yanlis = shuffle(tumMadenler.filter(m => m !== dogruSoru.soru));
  const secenekler = shuffle([dogruSoru.soru, ...yanlis.slice(0, 4)]);
  return secenekler;
}

function renderMadenSecenekler(s) {
  const secenekler = getMadenSecenekler(s);

  const html = `
    <div class="maden-secenekler" id="maden-secenekler">
      <div class="maden-sec-baslik">⛏️ Bu iller hangi madene ait?</div>
      <div class="maden-sec-grid">
        ${secenekler.map(opt => `
          <button class="maden-sec-btn" onclick="madenTahmin('${opt.replace(/'/g, "\\'")}')">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;

  // Sol panele ekle (sira-list'in altına)
  let panel = document.getElementById('maden-secenekler');
  if (panel) panel.remove();

  const siraList = document.getElementById('sira-list');
  siraList.innerHTML = ''; // maden modunda il listesi gösterme
  siraList.insertAdjacentHTML('afterend', html);

  // Mobil için de göster — mob-actions'dan SONRA ekle
  let mobPanel = document.getElementById('mob-maden-secenekler');
  if (mobPanel) mobPanel.remove();

  const mobActions = document.querySelector('.mob-actions');
  const mobFeedback = document.getElementById('mob-feedback');
  const mobSecHtml = `
    <div class="maden-secenekler" id="mob-maden-secenekler">
      <div class="maden-sec-baslik">⛏️ Hangi maden?</div>
      <div class="maden-sec-grid">
        ${secenekler.map(opt => `
          <button class="maden-sec-btn" onclick="madenTahmin('${opt.replace(/'/g, "\\'")}')">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;
  // mob-feedback'ten önce, mob-actions'dan sonra ekle
  if (mobFeedback) {
    mobFeedback.insertAdjacentHTML('beforebegin', mobSecHtml);
  } else if (mobActions) {
    mobActions.insertAdjacentHTML('afterend', mobSecHtml);
  }
}

function hideMadenSecenekler() {
  ['maden-secenekler', 'mob-maden-secenekler'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
}

function madenTahmin(secilen) {
  if (beklemede) return;
  const s = sorular[soruIdx];

  if (secilen === s.soru) {
    // Doğru!
    streak++;
    dogru++;
    const mult = getMultiplier();
    const kazanilan = 10 * mult;
    puan += kazanilan;
    updateScores();
    showMapFeedback(`✅ Doğru! +${kazanilan}p${mult > 1 ? ` 🔥${mult}x` : ''}`, 'ok');
    showFeedback(`Tebrikler! Doğru cevap: ${s.soru}${mult > 1 ? ` (+${kazanilan}p 🔥${mult}x)` : ''}`, 'ok');

    // Butonları renklendir
    document.querySelectorAll('.maden-sec-btn').forEach(btn => {
      if (btn.textContent === s.soru) btn.classList.add('maden-dogru');
      btn.disabled = true;
    });

    beklemede = true;
    setSonrakiButon(true);
  } else {
    // Yanlış!
    streak = 0;
    hata++;
    updateScores();
    showMapFeedback('❌ Yanlış!', 'err');
    showFeedback(`Yanlış! "${secilen}" değil. Tekrar dene.`, 'err');
    if (!yanlisSorular.includes(s.soru)) yanlisSorular.push(s.soru);

    // Yanlış butonu işaretle
    document.querySelectorAll('.maden-sec-btn').forEach(btn => {
      if (btn.textContent === secilen) {
        btn.classList.add('maden-yanlis');
        btn.disabled = true;
      }
    });
  }
}

function renderSiraList() {
  const s = sorular[soruIdx];

  const itemsHTML = s.iller.map((orijinalIl, i) => {
    // bulunanlar[i] doluysa kullanıcı doğru sırayı tetiklemiştir
    const il = bulunanlar[i];
    const cls = il ? 'found' : '';
    const ilAdi = il ? il : '?';
    const icon = il ? '✔️' : '-';
    return `<div class="sira-item ${cls}">
      <div class="sira-num">${icon}</div>
      <div class="sira-il">${ilAdi}</div>
      <div class="sira-puan">${il ? '10p' : ''}</div>
    </div>`;
  }).join('');

  const mobItemsHTML = s.iller.map((orijinalIl, i) => {
    const il = bulunanlar[i];
    const cls = il ? 'found' : '';
    const ilAdi = il ? il : '?';
    const icon = il ? '✔️' : '-';
    return `<div class="mob-sira-item ${cls}">
      <div class="mob-sira-num">${icon}</div>
      <div class="mob-sira-il">${ilAdi}</div>
    </div>`;
  }).join('');

  document.getElementById('sira-list').innerHTML = itemsHTML;
  document.getElementById('mob-sira-row').innerHTML = mobItemsHTML;
}
function renderSiraListFull() {
  const s = sorular[soruIdx];
  const itemsHTML = s.iller.map(il => {
    const isFound = bulunanlar.includes(il);
    const cls = isFound ? 'found' : 'revealed';
    const icon = isFound ? '✔️' : '👁️';
    return `<div class="sira-item ${cls}">
      <div class="sira-num">${icon}</div>
      <div class="sira-il">${il}</div>
      <div class="sira-puan">${isFound ? '10p' : '0p'}</div>
    </div>`;
  }).join('');

  const mobItemsHTML = s.iller.map(il => {
    const isFound = bulunanlar.includes(il);
    const cls = isFound ? 'found' : 'revealed';
    const icon = isFound ? '✔️' : '👁️';
    return `<div class="mob-sira-item ${cls}">
      <div class="mob-sira-num">${icon}</div>
      <div class="mob-sira-il">${il}</div>
    </div>`;
  }).join('');

  document.getElementById('sira-list').innerHTML = itemsHTML;
  document.getElementById('mob-sira-row').innerHTML = mobItemsHTML;
}

// ============ İL TIKLAMA ============
// ============ İL TIKLAMA ============
function ilTiklandi(iladi) {
  if (beklemede) return;
  const s = sorular[soruIdx];
  if (soruIdx >= sorular.length) return;

  // Maden modunda harita tıklaması devre dışı
  if (isMadenModu(s)) {
    showFeedback('Soldaki seçeneklerden madeni tahmin et!', 'info');
    return;
  }

  // DEĞİŞİKLİK: Zaten bulunup bulunmadığını dizide arayarak kontrol ediyoruz
  if (bulunanlar.includes(iladi)) { showFeedback(`✨ ${iladi} zaten bulundu!`, 'info'); return; }

  if (s.iller.includes(iladi)) {
    // DEĞİŞİKLİK: İlin senin yazdığın dizideki orijinal indeksini buluyoruz
    const idx = s.iller.indexOf(iladi);
    // Tam o sıraya yerleştiriyoruz (Böylece üretim sırasındaki yeri korunuyor)
    bulunanlar[idx] = iladi;

    setIlClass(iladi, 'il-correct-3'); // Standart yeşil renk
    streak++;
    dogru++;
    const mult = getMultiplier();
    const kazanilan = 10 * mult;
    puan += kazanilan;
    updateScores();
    showMapFeedback(`✅ Doğru! ${iladi} (+${kazanilan}p)${mult > 1 ? ` 🔥${mult}x` : ''}`, 'ok');
    renderSiraList();

    // DEĞİŞİKLİK: Tüm illerin bulunma kontrolünü 'null' eleman kalmaması üzerinden yapıyoruz
    if (!bulunanlar.includes(null)) {
      showFeedback('Harika! İlgili tüm iller bulundu! 🎉', 'ok');
      beklemede = true;
      setSonrakiButon(true);
    }
  } else {
    streak = 0;
    hata++;
    updateScores();
    wrongAnim(iladi);
    showMapFeedback(`❌ Yanlış İl`, 'err');
    showFeedback(`Yanlış! ${iladi} bu cevabın içinde yer almıyor.`, 'err');
  }
}
function updateScores() {
  document.getElementById('tb-puan').textContent = puan;
  document.getElementById('tb-hata').textContent = hata;
  document.getElementById('tb-dogru').textContent = dogru;
  updateStrikeBar();
}

function getMultiplier() {
  // streak 0-4 → 1x, 5-9 → 2x, 10-14 → 3x, 15-19 → 4x, 20+ → 5x
  return Math.min(5, Math.floor(streak / 5) + 1);
}

function updateStrikeBar() {
  const mult = getMultiplier();
  // streak içindeki mevcut çubuktaki ilerleme (0-4 arası)
  const dotsFilled = streak % 5; // 0 = hiç, 1-5 = dolu
  // Eğer tam 5x'e ulaşıldıysa hepsi dolu göster
  const allFull = mult === 5;

  for (let i = 1; i <= 5; i++) {
    const dot = document.getElementById(`sd-${i}`);
    if (dot) {
      dot.classList.toggle('active', allFull || i <= dotsFilled);
    }
  }
  const label = document.getElementById('strike-label');
  if (label) {
    label.textContent = `${mult}x`;
    label.style.color = mult >= 5 ? '#ff9f0a' : mult >= 3 ? '#ffd60a' : '#ffd60a';
  }
}

// ============ GEÇ / GÖSTER ============
function skipSoru() {
  if (beklemede) return;
  const s = sorular[soruIdx];
  if (!yanlisSorular.includes(s.soru)) yanlisSorular.push(s.soru);
  streak = 0;
  gecilen++;
  updateScores();
  revealCevaplar();
  showMapFeedback('Geçildi — Cevaplar gösterildi', 'info');
  showFeedback('Soru geçildi. Cevapları incele, sonra Sonraki butonuna bas.', 'info');
  beklemede = true;
  setSonrakiButon(true);
}

function revealSoru() {
  if (beklemede) return;
  const s = sorular[soruIdx];
  if (!yanlisSorular.includes(s.soru)) yanlisSorular.push(s.soru);
  streak = 0;
  updateScores();

  if (isMadenModu(s)) {
    document.querySelectorAll('.maden-sec-btn').forEach(btn => {
      if (btn.textContent === s.soru) btn.classList.add('maden-dogru');
      btn.disabled = true;
    });
    showMapFeedback('Cevap gösterildi 👀', 'info');
    showFeedback(`Doğru cevap: ${s.soru}`, 'info');
  } else {
    revealCevaplar();
    showMapFeedback('Cevaplar gösterildi 👀', 'info');
    showFeedback('Cevaplar gösterildi. İnceleyip Sonraki butonuna bas.', 'info');
  }
  beklemede = true;
  setSonrakiButon(true);
}

function revealCevaplar() {
  const s = sorular[soruIdx];
  s.iller.forEach(il => {
    if (!bulunanlar.includes(il)) setIlClass(il, 'il-revealed');
  });
  renderSiraListFull();
}

// ============ OYUN SONU ============
function endGame() {
  showScreen('screen-result');
  document.getElementById('res-score').textContent = puan;
  document.getElementById('rs-dogru').textContent = dogru;
  document.getElementById('rs-hata').textContent = hata;
  document.getElementById('rs-gecilen').textContent = gecilen;

  const maxP = sorular.reduce((total, s) => {
    // Maden modunda soru başına sadece 10 puan kazanılabilir (il sayısından bağımsız)
    if (isMadenModu(s)) return total + 10;
    return total + (s.iller.length * 10);
  }, 0);
  const pct = maxP > 0 ? Math.round(puan / maxP * 100) : 0;

  let emoji = '💪', title = 'Daha çalışman lazım!';
  if (pct >= 90) { emoji = '🏆'; title = 'Mükemmel!'; }
  else if (pct >= 70) { emoji = '🌟'; title = 'Çok iyi!'; }
  else if (pct >= 50) { emoji = '📚'; title = 'Fena değil!'; }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-title').textContent = title;
  const msgs = {
    90: 'KPSS\'ye hazırsın! 💯',
    70: 'Biraz daha pratikle harika olacak.',
    50: 'Aşağıdaki konuları tekrar çalış.',
    0:  'Bırakma, tekrar dene!'
  };
  const msgKey = pct >= 90 ? 90 : pct >= 70 ? 70 : pct >= 50 ? 50 : 0;
  document.getElementById('res-msg').textContent = `%${pct} başarı — ${msgs[msgKey]}`;

  if (yanlisSorular.length) {
    document.getElementById('yanlis-bolum').style.display = 'block';
    document.getElementById('yanlis-list').innerHTML = yanlisSorular.map(s => `<li>${s}</li>`).join('');
  } else {
    document.getElementById('yanlis-bolum').style.display = 'none';
  }
}

// ============ FEEDBACK ============
function showFeedback(msg, tip) {
  const fb = document.getElementById('feedback-panel');
  const mob = document.getElementById('mob-feedback');
  [fb, mob].forEach(el => {
    if (!el) return;
    el.textContent = msg;
    el.className = el.className.replace(/\s*(ok|err|info)/g, '') + ' ' + tip;
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.className = el.className.replace(/\s*(ok|err|info)/g, ''); }, 3000);
  });
}
function clearFeedback() {
  [document.getElementById('feedback-panel'), document.getElementById('mob-feedback')].forEach(el => {
    if (!el) return;
    el.textContent = '';
    el.className = el.id === 'feedback-panel' ? 'feedback-panel' : 'mob-feedback';
  });
}

// ============ SORUYU TEKRARLA ============
function soruyuTekrarla() {
  if (sorular.length === 0 || soruIdx >= sorular.length) return;

  const s = sorular[soruIdx];

  if (isMadenModu(s)) {
    // Maden modunda: puandan 10 düş (eğer doğru bulmuşsa)
    // beklemede sadece doğru cevaplandıysa true olur
    if (beklemede) {
      puan = Math.max(0, puan - 10);
      updateScores();
    }
    beklemede = false;
    setSonrakiButon(false);
    // Seçenek panelini yenile
    renderMadenSecenekler(s);
    showFeedback('Soru sıfırlandı! 🎯', 'info');
    return;
  }

  const bilinenIlSayisi = bulunanlar.filter(il => il !== null).length;
  const buSorudanGelenPuan = bilinenIlSayisi * 10;
  puan = Math.max(0, puan - buSorudanGelenPuan);
  updateScores();
  resetAllIller();
  bulunanlar = Array(s.iller.length).fill(null);
  beklemede = false;
  setSonrakiButon(false);
  renderSiraList();
  showFeedback("Soru ve bu sorudan kazandığınız puan sıfırlandı! 🎯", "info");
}