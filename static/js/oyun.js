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
  { id: "UNESCO", icon: "🏛️", ad: "UNESCO" },
  { id: "SinirKapilari", icon: "🛂", ad: "Sınır Kapıları" },
  { id: "Barajlar", icon: "💧", ad: "Barajlar" },
  { id: "Magara", icon: "🦇", ad: "Mağaralar" },
  { id: "Kanyon", icon: "🏞️", ad: "Kanyonlar" },
  { id: "AntikKentler", icon: "🏛️", ad: "Antik Kentler" }
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
  { soru: "Üzüm Üretimi", kategori: "Bitkiler", iller: ["Manisa", "Mersin", "Denizli"] },
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
  { soru: "Altın Çıkarımı", kategori: "Madenler", iller: ["Balıkesir", "Çanakkale", "Gümüşhane", "Artvin"] },
  { soru: "Asbest Çıkarımı", kategori: "Madenler", iller: ["Eskişehir", "Sivas"] },
  { soru: "Bakır Çıkarımı", kategori: "Madenler", iller: ["Kastamonu", "Artvin", "Rize"] },
  { soru: "Barit Çıkarımı", kategori: "Madenler", iller: ["Antalya"] },
  { soru: "Civa Çıkarımı", kategori: "Madenler", iller: ["İzmir", "Konya"] },
  { soru: "Tuz Çıkarımı", kategori: "Madenler", iller: ["Çankırı", "Iğdır", "Kars", "İzmir", "Ankara", "Konya"] },
  { soru: "Demir Çıkarımı", kategori: "Madenler", iller: ["Sivas", "Malatya"] },
  { soru: "Feldspat Çıkarımı", kategori: "Madenler", iller: ["Aydın", "Kütahya", "Yozgat", "Kırşehir", "Artvin", "Ardahan"] },
  { soru: "Zımpara Taşı Çıkarımı", kategori: "Madenler", iller: ["Aydın", "Antalya", "Muğla"] },
  { soru: "Fosfat Çıkarımı", kategori: "Madenler", iller: ["Mardin"] },
  { soru: "Kurşun ve Çinko Çıkarımı", kategori: "Madenler", iller: ["Yozgat", "Kayseri", "Elazığ"] },
  { soru: "Oltu Taşı Çıkarımı", kategori: "Madenler", iller: ["Erzurum"] },
  { soru: "Lületaşı Çıkarımı", kategori: "Madenler", iller: ["Eskişehir"] },
  { soru: "Volfram-Tungsten Çıkarımı", kategori: "Madenler", iller: ["Bursa"] },
  { soru: "Krom Çıkarımı", kategori: "Madenler", iller: ["Elazığ", "Muğla"] },
  { soru: "Kükürt Çıkarımı", kategori: "Madenler", iller: ["Isparta"] },
  { soru: "Manganez Çıkarımı", kategori: "Madenler", iller: ["Zonguldak"] },
  { soru: "Mermer Çıkarımı", kategori: "Madenler", iller: ["Afyon", "Balıkesir"] },
  { soru: "Perlit (İnci Taşı) Çıkarımı", kategori: "Madenler", iller: ["İzmir", "Ankara", "Bayburt", "Erzurum", "Van"] },
  { soru: "Boksit Çıkarımı", kategori: "Madenler", iller: ["Antalya", "Konya"] },
  { soru: "Pomza Taşı Çıkarımı", kategori: "Madenler", iller: ["Nevşehir", "Kayseri", "Van"] },
  { soru: "Trona Çıkarımı", kategori: "Madenler", iller: ["Ankara"] },
  { soru: "Uranyum Çıkarımı", kategori: "Madenler", iller: ["Yozgat"] },
  { soru: "Toryum Çıkarımı", kategori: "Madenler", iller: ["Eskişehir"] },

  // --- ENERJİ ---
  { soru: "Asfaltit", kategori: "Enerji", iller: ["Şırnak"] },
  { soru: "Doğal Gaz Santralleri", kategori: "Enerji", iller: ["Kırklareli ", "İstanbul", "Bursa", "Balıkesir", "İzmir"] },
  { soru: "Doğal Gaz Yatağı", kategori: "Enerji", iller: ["Mardin","Kırklareli","Düzce"] },
  { soru: "Güneş Santrali", kategori: "Enerji", iller: ["Konya","Şanlıurfa", "Denizli", "Kayseri", "Mersin", "Antalya"] },
  { soru: "Jeotermal Santraller", kategori: "Enerji", iller: ["Aydın", "Denizli", "Manisa", "Çanakkale"] },
  { soru: "Taş Kömürü Santralleri", kategori: "Enerji", iller: ["Zonguldak", "Adana"] },
  { soru: "Taş Kömürü Yatakları", kategori: "Enerji", iller: ["Zonguldak", "Bartın", "Kastamonu"] },
  { soru: "Linyit Kömürü Santralleri", kategori: "Enerji", iller: ["Kahramanmaraş", "Ankara", "Çanakkale", "Muğla", "Manisa", "Kütahya", "Bursa"] },
  { soru: "Linyit Kömürü Yatakları", kategori: "Enerji", iller: ["Kahramanmaraş", "Ankara", "Çanakkale", "Muğla", "Manisa", "Kütahya", "Bursa","Çorum","Amasya"]  },
  { soru: "Petrol Rafinerileri", kategori: "Enerji", iller: ["Batman", "İzmir", "Mersin", "Kırıkkale"] },
  { soru: "Petrol Yatakları", kategori: "Enerji", iller: ["Batman","Siirt","Diyarbakır","Şanlıurfa","Adıyaman"] },
  { soru: "Rüzgar Gücü Santralleri", kategori: "Enerji", iller: ["İzmir", "Balıkesir", "Manisa", "Mersin", "Hatay", "Kayseri", "Çanakkale", "Aydın", "Afyon", "Amasya", "Kırşehir", "Mersin"] },
  { soru: "Hidrolik Enerji", kategori: "Enerji", iller: ["Artvin","Elazığ","Diyarbakır","Samsun","Antalya"] },

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
  { soru: "Honaz Dağı (Kırıklı)", kategori: "Dağlar", iller: ["Denizli"] },
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
  { soru: "Hakkari Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Hakkâri"] },
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
{ soru: "Meriç Nehri", kategori: "Akarsular", iller: ["Edirne"] }, // Sadece Edirne'den geçer
{ soru: "Ergene Nehri", kategori: "Akarsular", iller: ["Kırklareli", "Tekirdağ", "Edirne"] },
{ soru: "Susurluk Nehri", kategori: "Akarsular", iller: ["Kütahya", "Balıkesir", "Bursa"] },
{ soru: "Bakırçay", kategori: "Akarsular", iller: ["Kütahya", "Balıkesir", "İzmir"] },
{ soru: "Gediz Nehri", kategori: "Akarsular", iller: ["Kütahya", "Uşak", "Manisa", "İzmir"] },
{ soru: "Küçük Menderes", kategori: "Akarsular", iller: ["İzmir"] }, // Tamamı İzmir sınırları içinde
{ soru: "Büyük Menderes", kategori: "Akarsular", iller: ["Afyonkarahisar", "Denizli", "Uşak", "Aydın"] },
{ soru: "Dalaman Çayı", kategori: "Akarsular", iller: ["Denizli", "Burdur", "Muğla"] },
{ soru: "Aksu Çayı", kategori: "Akarsular", iller: ["Isparta", "Antalya"] },
{ soru: "Köprüçay", kategori: "Akarsular", iller: ["Isparta", "Antalya"] },
{ soru: "Manavgat Nehri", kategori: "Akarsular", iller: ["Antalya"] }, // Tamamı Antalya içinde
{ soru: "Göksu Nehri", kategori: "Akarsular", iller: ["Konya", "Karaman", "Mersin"] },
{ soru: "Seyhan Nehri", kategori: "Akarsular", iller: ["Kahramanmaraş", "Kayseri", "Adana"] },
{ soru: "Ceyhan Nehri", kategori: "Akarsular", iller: ["Kahramanmaraş", "Osmaniye", "Adana"] },
{ soru: "Asi Nehri", kategori: "Akarsular", iller: ["Hatay"] }, // Türkiye'de yalnızca Hatay'dan geçer
{ soru: "Fırat Nehri", kategori: "Akarsular", iller: ["Erzurum", "Erzincan", "Malatya", "Elazığ", "Diyarbakır", "Şanlıurfa"] },
{ soru: "Dicle Nehri", kategori: "Akarsular", iller: ["Diyarbakır", "Batman", "Şırnak", "Mardin"] },
{ soru: "Aras Nehri", kategori: "Akarsular", iller: ["Erzurum", "Ağrı", "Iğdır"] },
{ soru: "Kura Nehri", kategori: "Akarsular", iller: ["Ardahan"] }, // Türkiye'de yalnızca Ardahan'dan geçer
{ soru: "Çoruh Nehri", kategori: "Akarsular", iller: ["Erzurum", "Bayburt", "Artvin"] },
{ soru: "Yeşilırmak", kategori: "Akarsular", iller: ["Sivas", "Tokat", "Amasya", "Samsun"] },
{ soru: "Kızılırmak", kategori: "Akarsular", iller: ["Sivas", "Kayseri", "Nevşehir", "Kırşehir", "Kırıkkale", "Ankara", "Çankırı", "Kastamonu", "Samsun"] },
{ soru: "Bartın Çayı", kategori: "Akarsular", iller: ["Karabük", "Bartın"] },
{ soru: "Filyos Çayı", kategori: "Akarsular", iller: ["Bolu", "Karabük", "Zonguldak"] },
{ soru: "Sakarya Nehri", kategori: "Akarsular", iller: ["Afyonkarahisar", "Eskişehir", "Bilecik", "Ankara", "Sakarya"] },

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
  { soru: "Manyas Gölü (Tektonik)", kategori: "Göller", iller: ["Balıkesir"] },
  { soru: "Uluabat Gölü (Tektonik)", kategori: "Göller", iller: ["Bursa"] },
  { soru: "İznik Gölü (Tektonik)", kategori: "Göller", iller: ["Bursa"] },
  { soru: "Sapanca Gölü (Tektonik)", kategori: "Göller", iller: ["Sakarya"] },
  { soru: "Eğirdir Gölü (Tektonik)", kategori: "Göller", iller: ["Isparta"] },
  { soru: "Beyşehir Gölü (Tektonik)", kategori: "Göller", iller: ["Konya", "Isparta"] },
  { soru: "Akşehir Gölü (Tektonik)", kategori: "Göller", iller: ["Konya", "Afyon"] },
  { soru: "Eber Gölü (Tektonik)", kategori: "Göller", iller: ["Afyon"] },
  { soru: "Tuz Gölü (Tektonik)", kategori: "Göller", iller: ["Konya", "Aksaray", "Ankara"] },
  { soru: "Seyfe Gölü (Tektonik)", kategori: "Göller", iller: ["Kırşehir"] },
  { soru: "Hazar Gölü (Tektonik)", kategori: "Göller", iller: ["Elazığ"] },
  { soru: "Aktaş Gölü (Tektonik)", kategori: "Göller", iller: ["Ardahan"] },
  { soru: "Salda Gölü (Karstik)", kategori: "Göller", iller: ["Burdur"] },
  { soru: "Kestel Gölü (Karstik)", kategori: "Göller", iller: ["Burdur"] },
  { soru: "Avlan Gölü (Karstik)", kategori: "Göller", iller: ["Antalya"] },
  { soru: "Suğla Gölü (Karstik)", kategori: "Göller", iller: ["Konya"] },
  { soru: "Hafik Gölü (Karstik)", kategori: "Göller", iller: ["Sivas"] },
  { soru: "Meke Maar Gölü (Volkanik)", kategori: "Göller", iller: ["Konya"] },
  { soru: "Acıgöl Maar Gölü (Volkanik)", kategori: "Göller", iller: ["Konya"] },
  { soru: "Nemrut Krater Gölü (Volkanik)", kategori: "Göller", iller: ["Bitlis"] },
  { soru: "Abant Gölü (Heyelan Set)", kategori: "Göller", iller: ["Bolu"] },
  { soru: "Yedigöller (Heyelan Set)", kategori: "Göller", iller: ["Bolu"] },
  { soru: "Borabay Gölü (Heyelan Set)", kategori: "Göller", iller: ["Amasya"] },
  { soru: "Zinav Gölü (Heyelan Set)", kategori: "Göller", iller: ["Tokat"] },
  { soru: "Tortum Gölü (Heyelan Set)", kategori: "Göller", iller: ["Erzurum"] },
  { soru: "Çıldır Gölü (Volkanik Set)", kategori: "Göller", iller: ["Ardahan", "Kars"] },
  { soru: "Balık Gölü (Volkanik Set)", kategori: "Göller", iller: ["Ağrı"] },
  { soru: "Haçlı Gölü (Volkanik Set)", kategori: "Göller", iller: ["Muş"] },
  { soru: "Nazik Gölü (Volkanik Set)", kategori: "Göller", iller: ["Bitlis"] },
  { soru: "Van Gölü (Volkanik Set)", kategori: "Göller", iller: ["Van", "Bitlis"] },
  { soru: "Erçek Gölü (Volkanik Set)", kategori: "Göller", iller: ["Van"] },
  { soru: "Gala Gölü (Alüvyal Set)", kategori: "Göller", iller: ["Edirne"] },
  { soru: "Marmara Gölü (Alüvyal Set)", kategori: "Göller", iller: ["Manisa"] },
  { soru: "Bafa Gölü (Alüvyal Set)", kategori: "Göller", iller: ["Aydın", "Muğla"] },
  { soru: "Köyceğiz Gölü (Alüvyal Set)", kategori: "Göller", iller: ["Muğla"] },
  { soru: "Eymir Gölü (Alüvyal Set)", kategori: "Göller", iller: ["Ankara"] },
  { soru: "Mogan Gölü (Alüvyal Set)", kategori: "Göller", iller: ["Ankara"] },
  { soru: "Terkos Gölü (Kıyı Set)", kategori: "Göller", iller: ["İstanbul"] },
  { soru: "Küçükçekmece Gölü (Kıyı Set)", kategori: "Göller", iller: ["İstanbul"] },
  { soru: "Büyükçekmece Gölü (Kıyı Set)", kategori: "Göller", iller: ["İstanbul"] },
  { soru: "Balık Gölü (Kıyı Set)", kategori: "Göller", iller: ["Samsun"] },
  { soru: "Akyatan Gölü (Kıyı Set)", kategori: "Göller", iller: ["Adana"] },
  { soru: "Ağyatan Gölü (Kıyı Set)", kategori: "Göller", iller: ["Adana"] },

  // --- DİĞER (Köy Altı Yerleşmeleri, Körfezler) ---
  { soru: "Divan (Köy Altı)", kategori: "Diğer", iller: ["Bolu", "Sakarya", "Zonguldak", "Kastamonu", "Sinop"] },
  { soru: "Dam (Köy Altı)", kategori: "Diğer", iller: ["Muğla", "İzmir", "Aydın", "Çanakkale"] },
  { soru: "Çiftlik (Köy Altı)", kategori: "Diğer", iller: ["Edirne", "Tekirdağ", "İzmir", "Aydın", "Konya", "Adana"] },
  { soru: "Mezra-Kom (Köy Altı)", kategori: "Diğer", iller: ["Tunceli", "Erzurum", "Diyarbakır", "Mardin"] },
  { soru: "Yayla-Güzle (Köy Altı)", kategori: "Diğer", iller: ["Rize", "Trabzon", "Artvin", "Antalya", "Mersin", "Adana"] },
  { soru: "Oba (Köy Altı)", kategori: "Diğer", iller: ["Antalya", "Mersin", "Adana"] },
  { soru: "Dalyan (Köy Altı)", kategori: "Diğer", iller: ["Muğla", "İzmir"] },
  { soru: "Saros Körfezi", kategori: "Diğer", iller: ["Çanakkale"] },
  { soru: "Edremit Körfezi", kategori: "Diğer", iller: ["Balıkesir"] },
  { soru: "Erdek Körfezi", kategori: "Diğer", iller: ["Balıkesir"] },
  { soru: "Bandırma Körfezi", kategori: "Diğer", iller: ["Balıkesir"] },
  { soru: "Gemlik Körfezi", kategori: "Diğer", iller: ["Bursa"] },
  { soru: "İzmit Körfezi", kategori: "Diğer", iller: ["Kocaeli"] },
  { soru: "Çandarlı Körfezi", kategori: "Diğer", iller: ["İzmir"] },
  { soru: "İzmir Körfezi", kategori: "Diğer", iller: ["İzmir"] },
  { soru: "Kuşadası Körfezi", kategori: "Diğer", iller: ["Aydın"] },
  { soru: "Güllük Körfezi", kategori: "Diğer", iller: ["Muğla"] },
  { soru: "Gökova Körfezi", kategori: "Diğer", iller: ["Muğla"] },
  { soru: "Hisarönü Körfezi", kategori: "Diğer", iller: ["Muğla"] },
  { soru: "Fethiye Körfezi", kategori: "Diğer", iller: ["Muğla"] },
  { soru: "Antalya Körfezi", kategori: "Diğer", iller: ["Antalya"] },
  { soru: "İskenderun Körfezi", kategori: "Diğer", iller: ["Hatay"] },

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
  { soru: "Cilo ve Sat Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Hakkari"] },
  { soru: "Kızıldağ Milli Parkı", kategori: "MilliParklar", iller: ["Isparta"] },
  { soru: "Kovada Gölü Milli Parkı", kategori: "MilliParklar", iller: ["Isparta"] },
  { soru: "Geben Vadisi Milli Parkı", kategori: "MilliParklar", iller: ["Kahramanmaraş"] },
  { soru: "Küre Dağları Milli Parkı", kategori: "MilliParklar", iller: ["Kastamonu", "Bartın"] },
  { soru: "Ilgaz Dağı Milli Parkı", kategori: "MilliParklar", iller: ["Kastamonu", "Çankırı"] },
  { soru: "İstiklal Yolu Tarihi Milli Parkı", kategori: "MilliParklar", iller: ["Kastamonu", "Çankırı", "Ankara"] },
  { soru: "Sultan Sazlığı Milli Parkı", kategori: "MilliParklar", iller: ["Kayseri"] },
  { soru: "İğneada Longoz Ormanları Milli Parkı", kategori: "MilliParklar", iller: ["Kırklareli"] },
  { soru: "Beyşehir Gölü Milli Parkı", kategori: "MilliParklar", iller: ["Konya"] },
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
  { soru: "Nemrut Gölü (Ramsar)", kategori: "Ramsar", iller: ["Bitlis"] },

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
  { soru: "Bolu Dağı Tüneli", kategori: "Tuneller", iller: ["İstanbul", "Ankara"] },
  { soru: "Cankurtaran Tüneli", kategori: "Tuneller", iller: ["Artvin"] },
  { soru: "15 Temmuz Ilgaz Tüneli", kategori: "Tuneller", iller: ["Kastamonu", "Çankırı"] },
  { soru: "75. Yıl Selatin Tüneli", kategori: "Tuneller", iller: ["İzmir", "Aydın"] },
  { soru: "Kop Dağı Tüneli", kategori: "Tuneller", iller: ["Erzurum", "Bayburt"] },

  // --- TURİZM ---
  { soru: "Uludağ (Kış Turizmi)", kategori: "Turizm", iller: ["Bursa"] },
  { soru: "Erciyes (Kış Turizmi)", kategori: "Turizm", iller: ["Kayseri"] },
  { soru: "Palandöken (Kış Turizmi)", kategori: "Turizm", iller: ["Erzurum"] },
  { soru: "Sarıkamış (Kış Turizmi)", kategori: "Turizm", iller: ["Kars"] },
  { soru: "Elmadağ (Kış Turizmi)", kategori: "Turizm", iller: ["Ankara"] },
  { soru: "Kartalkaya (Kış Turizmi)", kategori: "Turizm", iller: ["Bolu"] },
  { soru: "Ilgaz (Kış Turizmi)", kategori: "Turizm", iller: ["Kastamonu"] },
  { soru: "Saklıkent (Kış Turizmi)", kategori: "Turizm", iller: ["Antalya"] },
  { soru: "Davras (Kış Turizmi)", kategori: "Turizm", iller: ["Isparta"] },
  { soru: "Ladik (Kış Turizmi)", kategori: "Turizm", iller: ["Samsun"] },
  { soru: "Kartepe (Kış Turizmi)", kategori: "Turizm", iller: ["Kocaeli"] },
  { soru: "Bozdağlar (Kış Turizmi)", kategori: "Turizm", iller: ["İzmir"] },
  { soru: "Ergan Dağı (Kış Turizmi)", kategori: "Turizm", iller: ["Erzincan"] },
  { soru: "Meryem Ana (İnanç Turizmi)", kategori: "Turizm", iller: ["İzmir"] },
  { soru: "Demre / St. Nicolas Kilisesi (İnanç Turizmi)", kategori: "Turizm", iller: ["Antalya"] },
  { soru: "St. Pierre (İnanç Turizmi)", kategori: "Turizm", iller: ["Hatay"] },
  { soru: "Akdamar Kilisesi (İnanç Turizmi)", kategori: "Turizm", iller: ["Van"] },
  { soru: "Sümela Manastırı (İnanç Turizmi)", kategori: "Turizm", iller: ["Trabzon"] },
  { soru: "Deyrulzaferan (İnanç Turizmi)", kategori: "Turizm", iller: ["Mardin"] },
  { soru: "Selimiye (İnanç Turizmi)", kategori: "Turizm", iller: ["Edirne"] },
  { soru: "Ulucami (İnanç Turizmi)", kategori: "Turizm", iller: ["Bursa"] },
  { soru: "Balıklıgöl (İnanç Turizmi)", kategori: "Turizm", iller: ["Şanlıurfa"] },
  { soru: "Mevlânâ (İnanç Turizmi)", kategori: "Turizm", iller: ["Konya"] },
  { soru: "Hacıbektaş (İnanç Turizmi)", kategori: "Turizm", iller: ["Nevşehir"] },

  // --- UNESCO ---
  { soru: "İstanbul'un Tarihî Alanları (UNESCO)", kategori: "UNESCO", iller: ["İstanbul"] },
  { soru: "Safranbolu Şehri (UNESCO)", kategori: "UNESCO", iller: ["Karabük"] },
  { soru: "Hattuşaş / Boğazköy (UNESCO)", kategori: "UNESCO", iller: ["Çorum"] },
  { soru: "Nemrut Dağı (UNESCO)", kategori: "UNESCO", iller: ["Adıyaman"] },
  { soru: "Xanthos - Letoon (UNESCO)", kategori: "UNESCO", iller: ["Antalya", "Muğla"] },
  { soru: "Divriği Ulu Camii ve Darüşşifası (UNESCO)", kategori: "UNESCO", iller: ["Sivas"] },
  { soru: "Truva Antik Kenti (UNESCO)", kategori: "UNESCO", iller: ["Çanakkale"] },
  { soru: "Pamukkale - Hierapolis (UNESCO)", kategori: "UNESCO", iller: ["Denizli"] },
  { soru: "Göreme Millî Parkı ve Kapadokya (UNESCO)", kategori: "UNESCO", iller: ["Nevşehir"] },
  { soru: "Selimiye Camii (UNESCO)", kategori: "UNESCO", iller: ["Edirne"] },
  { soru: "Çatalhöyük Neolitik Kenti (UNESCO)", kategori: "UNESCO", iller: ["Konya"] },
  { soru: "Cumalıkızık (UNESCO)", kategori: "UNESCO", iller: ["Bursa"] },
  { soru: "Bergama (UNESCO)", kategori: "UNESCO", iller: ["İzmir"] },
  { soru: "Diyarbakır Kalesi ve Surları (UNESCO)", kategori: "UNESCO", iller: ["Diyarbakır"] },
  { soru: "Efes (UNESCO)", kategori: "UNESCO", iller: ["İzmir"] },
  { soru: "Ani Arkeolojik Alanı (UNESCO)", kategori: "UNESCO", iller: ["Kars"] },
  { soru: "Afrodisias (UNESCO)", kategori: "UNESCO", iller: ["Aydın"] },
  { soru: "Göbeklitepe (UNESCO)", kategori: "UNESCO", iller: ["Şanlıurfa"] },
  { soru: "Arslantepe Höyüğü (UNESCO)", kategori: "UNESCO", iller: ["Malatya"] },
  { soru: "Bintepeler Höyüğü (UNESCO)", kategori: "UNESCO", iller: ["Manisa"] },
  { soru: "Sardes Antik Kenti (UNESCO)", kategori: "UNESCO", iller: ["Manisa"] },
  { soru: "Eşrefoğlu Camii (UNESCO)", kategori: "UNESCO", iller: ["Konya"] },
  { soru: "Afyonkarahisar Ulu Camii (UNESCO)", kategori: "UNESCO", iller: ["Afyon"] },
  { soru: "Sivrihisar Ulu Camii (UNESCO)", kategori: "UNESCO", iller: ["Eskişehir"] },
  { soru: "Ahi Şerafettin (Aslanhane) Camii (UNESCO)", kategori: "UNESCO", iller: ["Ankara"] },
  { soru: "Mahmutbey Camii (UNESCO)", kategori: "UNESCO", iller: ["Kastamonu"] },

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
  { soru: "Esendere Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hakkari"] },
  { soru: "Habur Sınır Kapısı", kategori: "SinirKapilari", iller: ["Şırnak"] },
  { soru: "Üzümlü Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hakkari"] },
  { soru: "Derecik Sınır Kapısı", kategori: "SinirKapilari", iller: ["Hakkari"] },
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

  // --- BARAJLAR ---
  { soru: "Atatürk Barajı (Fırat)", kategori: "Barajlar", iller: ["Şanlıurfa", "Adıyaman"] },
  { soru: "Keban Barajı (Fırat)", kategori: "Barajlar", iller: ["Elazığ"] },
  { soru: "Karakaya Barajı (Fırat)", kategori: "Barajlar", iller: ["Malatya", "Diyarbakır"] },
  { soru: "Birecik Barajı (Fırat)", kategori: "Barajlar", iller: ["Şanlıurfa"] },
  { soru: "Karkamış Barajı (Fırat)", kategori: "Barajlar", iller: ["Gaziantep"] },
  { soru: "Ilısu Barajı (Dicle)", kategori: "Barajlar", iller: ["Mardin", "Şırnak"] },
  { soru: "Kralkızı Barajı (Dicle)", kategori: "Barajlar", iller: ["Diyarbakır"] },
  { soru: "Dicle Barajı", kategori: "Barajlar", iller: ["Diyarbakır"] },
  { soru: "Batman Barajı (Dicle)", kategori: "Barajlar", iller: ["Batman"] },
  { soru: "Yusufeli Barajı (Çoruh)", kategori: "Barajlar", iller: ["Artvin"] },
  { soru: "Deriner Barajı (Çoruh)", kategori: "Barajlar", iller: ["Artvin"] },
  { soru: "Borçka Barajı (Çoruh)", kategori: "Barajlar", iller: ["Artvin"] },
  { soru: "Muratlı Barajı (Çoruh)", kategori: "Barajlar", iller: ["Artvin"] },
  { soru: "Almus Barajı (Yeşilırmak)", kategori: "Barajlar", iller: ["Tokat"] },
  { soru: "Hasan Uğurlu Barajı (Yeşilırmak)", kategori: "Barajlar", iller: ["Samsun"] },
  { soru: "Suat Uğurlu Barajı (Yeşilırmak)", kategori: "Barajlar", iller: ["Samsun"] },
  { soru: "Kılıçkaya Barajı (Yeşilırmak)", kategori: "Barajlar", iller: ["Sivas"] },
  { soru: "Hirfanlı Barajı (Kızılırmak)", kategori: "Barajlar", iller: ["Kırşehir"] },
  { soru: "Derbent Barajı (Kızılırmak)", kategori: "Barajlar", iller: ["Samsun"] },
  { soru: "Altınkaya Barajı (Kızılırmak)", kategori: "Barajlar", iller: ["Samsun"] },
  { soru: "Kapulukaya Barajı (Kızılırmak)", kategori: "Barajlar", iller: ["Kırıkkale"] },
  { soru: "Kesikköprü Barajı (Kızılırmak)", kategori: "Barajlar", iller: ["Ankara"] },
  { soru: "Sarıyar Barajı (Sakarya)", kategori: "Barajlar", iller: ["Ankara"] },
  { soru: "Gökçekaya Barajı (Sakarya)", kategori: "Barajlar", iller: ["Eskişehir"] },
  { soru: "Seyhan Barajı", kategori: "Barajlar", iller: ["Adana"] },
  { soru: "Aslantaş Barajı (Ceyhan)", kategori: "Barajlar", iller: ["Osmaniye"] },
  { soru: "Menzelet Barajı (Ceyhan)", kategori: "Barajlar", iller: ["Kahramanmaraş"] },
  { soru: "Sır Barajı (Ceyhan)", kategori: "Barajlar", iller: ["Kahramanmaraş"] },
  { soru: "Kemer Barajı (Büyük Menderes)", kategori: "Barajlar", iller: ["Aydın"] },
  { soru: "Adıgüzel Barajı (Büyük Menderes)", kategori: "Barajlar", iller: ["Denizli"] },
  { soru: "Demirköprü Barajı (Gediz)", kategori: "Barajlar", iller: ["Manisa"] },
  { soru: "Oymapınar Barajı (Manavgat)", kategori: "Barajlar", iller: ["Antalya"] },
  { soru: "Gezende Barajı (Göksu)", kategori: "Barajlar", iller: ["Mersin"] },

  // --- MAĞARALAR ---
  { soru: "Karain Mağarası", kategori: "Magara", iller: ["Antalya"] },
  { soru: "Damlataş Mağarası", kategori: "Magara", iller: ["Antalya"] },
  { soru: "Dim Mağarası", kategori: "Magara", iller: ["Antalya"] },
  { soru: "Altınbeşik Mağarası", kategori: "Magara", iller: ["Antalya"] },
  { soru: "Zeytintaşı Mağarası", kategori: "Magara", iller: ["Antalya"] },
  { soru: "Ballıca Mağarası", kategori: "Magara", iller: ["Tokat"] },
  { soru: "Dupnisa Mağarası", kategori: "Magara", iller: ["Kırklareli"] },
  { soru: "Karaca Mağarası", kategori: "Magara", iller: ["Gümüşhane"] },
  { soru: "İnsuyu Mağarası", kategori: "Magara", iller: ["Burdur"] },
  { soru: "Gökköy Mağarası", kategori: "Magara", iller: ["Zonguldak"] },
  { soru: "Oylat Mağarası", kategori: "Magara", iller: ["Bursa"] },
  { soru: "Gilindire (Aynalıgöl) Mağarası", kategori: "Magara", iller: ["Mersin"] },
  { soru: "Narlıkuyu (Üç Güzeller) Mağarası", kategori: "Magara", iller: ["Mersin"] },
  { soru: "Astım Mağarası", kategori: "Magara", iller: ["Mersin"] },
  { soru: "Derebucak Çamlık Mağaraları", kategori: "Magara", iller: ["Konya"] },
  { soru: "Bulak (Mencilis) Mağarası", kategori: "Magara", iller: ["Karabük"] },
  { soru: "Kaklık Mağarası", kategori: "Magara", iller: ["Denizli"] },
  { soru: "Keloğlan Mağarası", kategori: "Magara", iller: ["Denizli"] },

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
  { soru: "Efes Antik Kenti", kategori: "AntikKentler", iller: ["İzmir"] },
  { soru: "Bergama Antik Kenti", kategori: "AntikKentler", iller: ["İzmir"] },
  { soru: "Teos Antik Kenti", kategori: "AntikKentler", iller: ["İzmir"] },
  { soru: "Truva Antik Kenti", kategori: "AntikKentler", iller: ["Çanakkale"] },
  { soru: "Assos Antik Kenti", kategori: "AntikKentler", iller: ["Çanakkale"] },
  { soru: "Perge Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Termessos Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Aspendos Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Phaselis Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Olympos Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Patara Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Xanthos Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Myra Antik Kenti", kategori: "AntikKentler", iller: ["Antalya"] },
  { soru: "Sardes Antik Kenti", kategori: "AntikKentler", iller: ["Manisa"] },
  { soru: "Hierapolis Antik Kenti", kategori: "AntikKentler", iller: ["Denizli"] },
  { soru: "Laodikeia Antik Kenti", kategori: "AntikKentler", iller: ["Denizli"] },
  { soru: "Afrodisias Antik Kenti", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Milet Antik Kenti", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Didyma Antik Kenti", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Priene Antik Kenti", kategori: "AntikKentler", iller: ["Aydın"] },
  { soru: "Knidos Antik Kenti", kategori: "AntikKentler", iller: ["Muğla"] },
  { soru: "Kaunos Antik Kenti", kategori: "AntikKentler", iller: ["Muğla"] },
  { soru: "Stratonikeia Antik Kenti", kategori: "AntikKentler", iller: ["Muğla"] },
  { soru: "Aizanoi Antik Kenti", kategori: "AntikKentler", iller: ["Kütahya"] },
  { soru: "Gordion Antik Kenti", kategori: "AntikKentler", iller: ["Ankara"] },
  { soru: "Pessinus Antik Kenti", kategori: "AntikKentler", iller: ["Eskişehir"] },
  { soru: "Hattuşaş Antik Kenti", kategori: "AntikKentler", iller: ["Çorum"] },
  { soru: "Alacahöyük Antik Kenti", kategori: "AntikKentler", iller: ["Çorum"] },
  { soru: "Kültepe Antik Kenti", kategori: "AntikKentler", iller: ["Kayseri"] },
  { soru: "Çatalhöyük Neolitik Kenti", kategori: "AntikKentler", iller: ["Konya"] },
  { soru: "Göbeklitepe", kategori: "AntikKentler", iller: ["Şanlıurfa"] },
  { soru: "Karahantepe", kategori: "AntikKentler", iller: ["Şanlıurfa"] },
  { soru: "Arslantepe Höyüğü", kategori: "AntikKentler", iller: ["Malatya"] },
  { soru: "Zeugma Antik Kenti", kategori: "AntikKentler", iller: ["Gaziantep"] },
  { soru: "Anazarbus Antik Kenti", kategori: "AntikKentler", iller: ["Adana"] },
  { soru: "Castabala Antik Kenti", kategori: "AntikKentler", iller: ["Osmaniye"] },
  { soru: "Soloi Pompeipolis Antik Kenti", kategori: "AntikKentler", iller: ["Mersin"] },
  { soru: "Dara Antik Kenti", kategori: "AntikKentler", iller: ["Mardin"] },
  { soru: "Ani Arkeolojik Alanı", kategori: "AntikKentler", iller: ["Kars"] }
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
  soruIdx = 0; puan = 0; hata = 0; gecilen = 0; yanlisSorular = [];
  beklemede = false;
  showScreen('screen-game');
  buildMap();
  renderSoru();
}

// ============ OYUN DURUMU ============
let sorular = [], soruIdx = 0;
let puan = 0, hata = 0, gecilen = 0;
let bulunanlar = [], yanlisSorular = [];
let beklemede = false;

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

function sonrakiSoru() {
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

  // DEĞİŞİKLİK: Bulunanları boş dizi yapmak yerine,
  // sorunun il sayısı kadar 'null' eleman içeren bir dizi yapıyoruz.
  bulunanlar = Array(s.iller.length).fill(null);

  beklemede = false;
  resetAllIller();
  setSonrakiButon(false);

  const iconInfo = KAT_BİLGİ.find(k => k.id === s.kategori);
  const title = iconInfo ? `${iconInfo.icon} ${s.kategori}` : s.kategori;

  document.getElementById('q-cat').textContent = title;
  document.getElementById('q-text').textContent = s.soru;
  document.getElementById('mob-q-cat').textContent = title;
  document.getElementById('mob-q-text').textContent = s.soru;

  const pct = (soruIdx / sorular.length * 100).toFixed(0);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('tb-qinfo').textContent = `Soru ${soruIdx + 1} / ${sorular.length}`;

  renderSiraList();
  clearFeedback();
  if (mapFbEl) mapFbEl.className = 'map-feedback';
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
  if (soruIdx >= sorular.length) return; // Eleman kontrolü renderSiraList'e taşındığı için sınırı kaldırdık

  // DEĞİŞİKLİK: Zaten bulunup bulunmadığını dizide arayarak kontrol ediyoruz
  if (bulunanlar.includes(iladi)) { showFeedback(`✨ ${iladi} zaten bulundu!`, 'info'); return; }

  if (s.iller.includes(iladi)) {
    // DEĞİŞİKLİK: İlin senin yazdığın dizideki orijinal indeksini buluyoruz
    const idx = s.iller.indexOf(iladi);
    // Tam o sıraya yerleştiriyoruz (Böylece üretim sırasındaki yeri korunuyor)
    bulunanlar[idx] = iladi;

    setIlClass(iladi, 'il-correct-3'); // Standart yeşil renk
    const kazanilan = 10;
    puan += kazanilan;
    updateScores();
    showMapFeedback(`✅ Doğru! ${iladi} (+${kazanilan}p)`, 'ok');
    renderSiraList();

    // DEĞİŞİKLİK: Tüm illerin bulunma kontrolünü 'null' eleman kalmaması üzerinden yapıyoruz
    if (!bulunanlar.includes(null)) {
      showFeedback('Harika! İlgili tüm iller bulundu! 🎉', 'ok');
      beklemede = true;
      setSonrakiButon(true);
    }
  } else {
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
}

// ============ GEÇ / GÖSTER ============
function skipSoru() {
  if (beklemede) return;
  const s = sorular[soruIdx];
  if (!yanlisSorular.includes(s.soru)) yanlisSorular.push(s.soru);
  gecilen++;
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
  revealCevaplar();
  showMapFeedback('Cevaplar gösterildi 👀', 'info');
  showFeedback('Cevaplar gösterildi. İnceleyip Sonraki butonuna bas.', 'info');
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
  document.getElementById('rs-dogru').textContent = soruIdx - gecilen;
  document.getElementById('rs-hata').textContent = hata;
  document.getElementById('rs-gecilen').textContent = gecilen;

  const maxP = sorular.reduce((total, s) => total + (s.iller.length * 10), 0);
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

  // Hile Önleme: Kullanıcının bu soruda bildiği il sayısını bulalım
  // (null olmayan elemanlar kullanıcının doğru bildiği illerdir)
  const bilinenIlSayisi = bulunanlar.filter(il => il !== null).length;

  // Bu sorudan kazanılan toplam puanı hesapla (Her doğru il 10 puan)
  const buSorudanGelenPuan = bilinenIlSayisi * 10;

  // Kullanıcının toplam puanından bu sorunun puanını düş (0'ın altına inmesin)
  puan = Math.max(0, puan - buSorudanGelenPuan);

  // Skor tabelasını (arayüzü) yeni puana göre güncelle
  updateScores();

  // Haritadaki tüm renklendirmeleri ve sınıfları temizle
  resetAllIller();

  // Bu soru için bulunanlar listesini temizle (null ile doldur)
  const s = sorular[soruIdx];
  bulunanlar = Array(s.iller.length).fill(null);

  // Oyun durumunu tekrar aktif et
  beklemede = false;

  // "Geç / Sonraki" butonlarını tekrar gizle
  setSonrakiButon(false);

  // Sağdaki ve mobildeki soru işaretli listeleri baştan oluştur
  renderSiraList();

  // Kullanıcıya bilgi mesajı ver
  showFeedback("Soru ve bu sorudan kazandığınız puan sıfırlandı! 🎯", "info");
}