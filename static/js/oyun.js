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
  { id: "Madenler", icon: "⛏️", ad: "Madenler" },
  { id: "Enerji", icon: "⚡", ad: "Enerji" },
  { id: "Hayvancılık", icon: "🐄", ad: "Hayvancılık" },
  { id: "Dağlar", icon: "⛰️", ad: "Dağlar" },
  { id: "Platolar", icon: "🏞️", ad: "Platolar" },
  { id: "Ovalar", icon: "🌾", ad: "Ovalar" },
  { id: "Göller", icon: "💧", ad: "Göller" },
  { id: "Akarsular", icon: "🌊", ad: "Akarsular" },
  { id: "Diğer", icon: "🌍", ad: "Diğer" }
];

const TUM_SORULAR = [
  // --- BİTKİLER ---
  { soru: "Anason Üretimi", kategori: "Bitkiler", iller: ["Burdur", "Denizli", "Konya", "Antalya", "Adana"] },
  { soru: "Antep Fıstığı Üretimi", kategori: "Bitkiler", iller: ["Şanlıurfa", "Gaziantep", "Adıyaman", "Siirt"] },
  { soru: "Arpa Üretimi", kategori: "Bitkiler", iller: ["Konya", "Adana", "Şanlıurfa", "Kayseri", "Aksaray"] },
  { soru: "Ay Çiçeği Üretimi", kategori: "Bitkiler", iller: ["Tekirdağ", "Konya", "Adana", "Kırklareli", "Edirne"] },
  { soru: "Fasulye Üretimi", kategori: "Bitkiler", iller: ["Konya", "Niğde", "Nevşehir", "Bitlis", "Karaman"] },
  { soru: "Yeşil Mercimek Üretimi", kategori: "Bitkiler", iller: ["Yozgat", "Konya", "Kırşehir", "Çorum", "Ankara"] },
  { soru: "Nohut Üretimi", kategori: "Bitkiler", iller: ["Ankara", "Yozgat", "Konya", "Adıyaman", "Kırşehir"] },
  { soru: "Buğday Üretimi", kategori: "Bitkiler", iller: ["Konya", "Şanlıurfa", "Diyarbakır", "Ankara", "Mardin"] },
  { soru: "Çay Üretimi", kategori: "Bitkiler", iller: ["Rize", "Trabzon", "Artvin", "Giresun"] },
  { soru: "Çeltik (Pirinç) Üretimi", kategori: "Bitkiler", iller: ["Edirne", "Samsun", "Balıkesir", "Çanakkale", "Çorum"] },
  { soru: "Elma Üretimi", kategori: "Bitkiler", iller: ["Isparta", "Karaman", "Niğde", "Antalya", "Kayseri"] },
  { soru: "Fındık Üretimi", kategori: "Bitkiler", iller: ["Ordu", "Samsun", "Düzce", "Giresun", "Sakarya"] },
  { soru: "Gül Üretimi", kategori: "Bitkiler", iller: ["Isparta", "Burdur"] },
  { soru: "Haşhaş Üretimi", kategori: "Bitkiler", iller: ["Afyon", "Uşak", "Konya", "Denizli", "Isparta"] },
  { soru: "İncir Üretimi", kategori: "Bitkiler", iller: ["Aydın", "İzmir", "Bursa", "Mersin", "Balıkesir"] },
  { soru: "Kanola (Kolza) Üretimi", kategori: "Bitkiler", iller: ["Tekirdağ", "Konya", "Ankara", "Edirne", "Kırklareli"] },
  { soru: "Kayısı Üretimi", kategori: "Bitkiler", iller: ["Malatya", "Mersin", "Elazığ", "Hatay", "Kahramanmaraş"] },
  { soru: "Kenevir (Kendir) Üretimi", kategori: "Bitkiler", iller: ["Kastamonu", "Antalya", "Samsun"] },
  { soru: "Keten Üretimi", kategori: "Bitkiler", iller: ["Uşak", "Samsun", "İstanbul"] },
  { soru: "Kivi Üretimi", kategori: "Bitkiler", iller: ["Bursa", "Yalova", "Samsun", "Mersin", "Ordu"] },
  { soru: "Mısır Üretimi", kategori: "Bitkiler", iller: ["Konya", "Ankara", "Şanlıurfa", "Eskişehir", "Karaman"] },
  { soru: "Muz Üretimi", kategori: "Bitkiler", iller: ["Antalya", "Mersin", "Adana"] },
  { soru: "Pamuk Üretimi", kategori: "Bitkiler", iller: ["Şanlıurfa", "Diyarbakır", "Aydın", "Hatay", "İzmir"] },
  { soru: "Patates Üretimi", kategori: "Bitkiler", iller: ["Niğde", "Kayseri", "Konya", "Afyon", "Sivas"] },
  { soru: "Seracılık", kategori: "Bitkiler", iller: ["Antalya", "Mersin", "Adana", "Muğla"] },
  { soru: "Soya Fasulyesi Üretimi", kategori: "Bitkiler", iller: ["Adana", "Mersin", "Kahramanmaraş"] },
  { soru: "Susam Üretimi", kategori: "Bitkiler", iller: ["Antalya", "Manisa", "Muğla", "Uşak", "Adana"] },
  { soru: "Şeker Pancarı Üretimi", kategori: "Bitkiler", iller: ["Konya", "Eskişehir", "Kayseri", "Yozgat"] },
  { soru: "Turunçgiller (Narenciye) Üretimi", kategori: "Bitkiler", iller: ["Adana", "Mersin", "Antalya"] },
  { soru: "Tütün Üretimi", kategori: "Bitkiler", iller: ["Adıyaman", "Denizli", "Manisa", "Uşak", "Samsun"] },
  { soru: "Üzüm Üretimi", kategori: "Bitkiler", iller: ["Manisa", "Denizli", "Mardin", "Gaziantep"] },
  { soru: "Yer Fıstığı Üretimi", kategori: "Bitkiler", iller: ["Adana", "Osmaniye", "Şırnak"] },
  { soru: "Zeytin Üretimi", kategori: "Bitkiler", iller: ["Manisa", "İzmir", "Aydın", "Mersin", "Balıkesir"] },
  { soru: "Turunçgil (Mikroklima)", kategori: "Bitkiler", iller: ["Rize"] },
  { soru: "Zeytin (Mikroklima)", kategori: "Bitkiler", iller: ["Artvin"] },
  { soru: "Pamuk (Mikroklima)", kategori: "Bitkiler", iller: ["Iğdır"] },
  { soru: "Muz (Mikroklima)", kategori: "Bitkiler", iller: ["Mersin", "Antalya"] },

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
  { soru: "Doğal Gaz Tesisleri", kategori: "Enerji", iller: ["Mardin", "Düzce"] },
  { soru: "Güneş Santrali", kategori: "Enerji", iller: ["Konya", "Denizli", "Kayseri", "Mersin", "Antalya"] },
  { soru: "Jeotermal Santraller", kategori: "Enerji", iller: ["Aydın", "Denizli", "Manisa"] },
  { soru: "Taş Kömürü Çıkarımı", kategori: "Enerji", iller: ["Zonguldak", "Bartın", "Kastamonu"] },
  { soru: "Linyit Kömürü Çıkarımı", kategori: "Enerji", iller: ["Kahramanmaraş", "Ankara", "Çanakkale", "Muğla", "Manisa"] },
  { soru: "Petrol Çıkarımı", kategori: "Enerji", iller: ["Batman", "Siirt", "Şırnak", "Diyarbakır", "Mardin", "Kırklareli"] },
  { soru: "Rüzgar Gücü Santralleri", kategori: "Enerji", iller: ["İzmir", "Balıkesir", "Manisa", "Mersin", "Hatay", "Kayseri"] },

  // --- HAYVANCILIK ---
  { soru: "Tiftik Keçisi Yetiştiriciliği", kategori: "Hayvancılık", iller: ["Ankara"] },
  { soru: "Arıcılık", kategori: "Hayvancılık", iller: ["Ordu", "Muğla", "Adana"] },
  { soru: "İpek Böcekçiliği", kategori: "Hayvancılık", iller: ["Diyarbakır", "Antalya"] },

  // --- DAĞLAR ---
  { soru: "Kula (Volkanik Dağ)", kategori: "Dağlar", iller: ["Manisa"] },
  { soru: "Erciyes Dağı (Volkanik)", kategori: "Dağlar", iller: ["Kayseri"] },
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
  { soru: "Doğu Karadeniz Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Rize", "Artvin"] },
  { soru: "Karçal Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Artvin"] },
  { soru: "Yalnızçam Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Ardahan", "Artvin"] },
  { soru: "Allahuekber Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum", "Ardahan"] },
  { soru: "Mescit Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum"] },
  { soru: "Karasu Aras Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum", "Ağrı"] },
  { soru: "Palandöken Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzurum"] },
  { soru: "Mercan Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Erzincan", "Tunceli"] },
  { soru: "Tecere Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Sivas"] },
  { soru: "Akdağlar - İç Anadolu (Kıvrım)", kategori: "Dağlar", iller: ["Yozgat", "Sivas"] },
  { soru: "Nurhak Dağı (Kıvrım)", kategori: "Dağlar", iller: ["Kahramanmaraş"] },
  { soru: "Tahtalı Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Kayseri", "Adana"] },
  { soru: "Aladağlar (Kıvrım)", kategori: "Dağlar", iller: ["Niğde", "Adana", "Kayseri"] },
  { soru: "Bolkarlar (Kıvrım)", kategori: "Dağlar", iller: ["Mersin", "Niğde"] },
  { soru: "Bey Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Antalya"] },
  { soru: "Akdağlar - Akdeniz (Kıvrım)", kategori: "Dağlar", iller: ["Muğla", "Antalya"] },
  { soru: "Geyik Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Antalya", "Konya", "Karaman"] },
  { soru: "Dedegöl Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Isparta"] },
  { soru: "Sultan Dağları (Kıvrım)", kategori: "Dağlar", iller: ["Afyon", "Isparta", "Konya"] },
  { soru: "Güneydoğu Toroslar (Kıvrım)", kategori: "Dağlar", iller: ["Malatya", "Adıyaman", "Diyarbakır", "Siirt"] },
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
  { soru: "Ardahan Yazılıkaya Platosu (Volkanik)", kategori: "Platolar", iller: ["Ardahan"] },
  { soru: "Erzurum Kars Platoları (Volkanik)", kategori: "Platolar", iller: ["Erzurum", "Kars"] },
  { soru: "Kırşehir Platosu (Volkanik)", kategori: "Platolar", iller: ["Kırşehir"] },
  { soru: "Kapadokya Platosu (Volkanik)", kategori: "Platolar", iller: ["Nevşehir"] },
  { soru: "Çatalca Kocaeli Platosu (Aşınım Düzlüğü)", kategori: "Platolar", iller: ["İstanbul", "Kocaeli"] },
  { soru: "Perşembe Platosu (Aşınım Düzlüğü)", kategori: "Platolar", iller: ["Ordu"] },
  { soru: "Yazılıkaya Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Eskişehir", "Afyon"] },
  { soru: "Haymana Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Ankara"] },
  { soru: "Cihanbeyli Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Konya"] },
  { soru: "Obruk Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Konya"] },
  { soru: "Bozok Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Yozgat"] },
  { soru: "Uzunyayla Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Sivas", "Kayseri"] },
  { soru: "Gaziantep Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Gaziantep"] },
  { soru: "Şanlıurfa Platosu (Tabaka Düzlüğü)", kategori: "Platolar", iller: ["Şanlıurfa"] },

  // --- OVALAR ---
  { soru: "Muğla Ovası (Karstik)", kategori: "Ovalar", iller: ["Muğla"] },
  { soru: "Acıpayam Ovası (Karstik)", kategori: "Ovalar", iller: ["Denizli"] },
  { soru: "Tefenni Ovası (Karstik)", kategori: "Ovalar", iller: ["Burdur"] },
  { soru: "Kestel Ovası (Karstik)", kategori: "Ovalar", iller: ["Burdur"] },
  { soru: "Elmalı Ovası (Karstik)", kategori: "Ovalar", iller: ["Antalya"] },
  { soru: "Bafra Ovası (Delta)", kategori: "Ovalar", iller: ["Samsun"] },
  { soru: "Çarşamba Ovası (Delta)", kategori: "Ovalar", iller: ["Samsun"] },
  { soru: "Sakarya Ovası (Delta)", kategori: "Ovalar", iller: ["Sakarya"] },
  { soru: "Meriç Ovası (Delta)", kategori: "Ovalar", iller: ["Edirne"] },
  { soru: "Dikili Ovası (Delta)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Menemen Ovası (Delta)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Selçuk Ovası (Delta)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Balat Ovası (Delta)", kategori: "Ovalar", iller: ["Aydın"] },
  { soru: "Silifke Ovası (Delta)", kategori: "Ovalar", iller: ["Mersin"] },
  { soru: "Çukurova (Delta)", kategori: "Ovalar", iller: ["Adana"] },
  { soru: "Asi Ovası (Delta)", kategori: "Ovalar", iller: ["Hatay"] },
  { soru: "Adapazarı Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Sakarya"] },
  { soru: "Bolu Düzce Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Bolu", "Düzce"] },
  { soru: "Tosya Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Kastamonu"] },
  { soru: "Merzifon Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Amasya"] },
  { soru: "Suluova Taşova Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Amasya"] },
  { soru: "Amasya Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Amasya"] },
  { soru: "Erbaa Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Tokat"] },
  { soru: "Niksar Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Tokat"] },
  { soru: "Erzincan Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Erzincan"] },
  { soru: "Tercan Ovası (KAF Tektonik)", kategori: "Ovalar", iller: ["Erzincan"] },
  { soru: "Amik Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Hatay"] },
  { soru: "Maraş Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Kahramanmaraş"] },
  { soru: "Elbistan Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Kahramanmaraş"] },
  { soru: "Malatya Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Malatya"] },
  { soru: "Elazığ Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Elazığ"] },
  { soru: "Bingöl Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Bingöl"] },
  { soru: "Muş Ovası (DAF Tektonik)", kategori: "Ovalar", iller: ["Muş"] },
  { soru: "Bakırçay Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Akhisar Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["Manisa"] },
  { soru: "Alaşehir Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["Manisa"] },
  { soru: "Küçük Menderes Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["İzmir"] },
  { soru: "Büyük Menderes Ovası (BAF Tektonik)", kategori: "Ovalar", iller: ["Aydın"] },

  // --- AKARSULAR VE ŞELALELER ---
  { soru: "Meriç Nehri", kategori: "Akarsular", iller: ["Edirne"] },
  { soru: "Ergene Nehri", kategori: "Akarsular", iller: ["Edirne"] },
  { soru: "Susurluk Nehri", kategori: "Akarsular", iller: ["Bursa"] },
  { soru: "Bakırçay", kategori: "Akarsular", iller: ["İzmir"] },
  { soru: "Gediz Nehri", kategori: "Akarsular", iller: ["İzmir"] },
  { soru: "Küçük Menderes", kategori: "Akarsular", iller: ["İzmir"] },
  { soru: "Büyük Menderes", kategori: "Akarsular", iller: ["Aydın"] },
  { soru: "Dalaman Çayı", kategori: "Akarsular", iller: ["Muğla"] },
  { soru: "Aksu Çayı", kategori: "Akarsular", iller: ["Antalya"] },
  { soru: "Köprüçay", kategori: "Akarsular", iller: ["Antalya"] },
  { soru: "Manavgat Nehri", kategori: "Akarsular", iller: ["Antalya"] },
  { soru: "Göksu Nehri", kategori: "Akarsular", iller: ["Mersin"] },
  { soru: "Seyhan Nehri", kategori: "Akarsular", iller: ["Adana"] },
  { soru: "Ceyhan Nehri", kategori: "Akarsular", iller: ["Adana"] },
  { soru: "Asi Nehri", kategori: "Akarsular", iller: ["Hatay"] },
  { soru: "Fırat Nehri", kategori: "Akarsular", iller: ["Şanlıurfa"] },
  { soru: "Dicle Nehri", kategori: "Akarsular", iller: ["Mardin"] },
  { soru: "Aras Nehri", kategori: "Akarsular", iller: ["Iğdır"] },
  { soru: "Kura Nehri", kategori: "Akarsular", iller: ["Ardahan"] },
  { soru: "Çoruh Nehri", kategori: "Akarsular", iller: ["Artvin"] },
  { soru: "Yeşilırmak", kategori: "Akarsular", iller: ["Samsun"] },
  { soru: "Kızılırmak", kategori: "Akarsular", iller: ["Samsun"] },
  { soru: "Bartın Çayı", kategori: "Akarsular", iller: ["Bartın"] },
  { soru: "Filyos Çayı", kategori: "Akarsular", iller: ["Zonguldak"] },
  { soru: "Sakarya Nehri", kategori: "Akarsular", iller: ["Sakarya"] },
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
  { soru: "İskenderun Körfezi", kategori: "Diğer", iller: ["Hatay"] }
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
  bulunanlar = [];
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
  const itemsHTML = Array.from({ length: s.iller.length }).map((_, i) => {
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

  const mobItemsHTML = Array.from({ length: s.iller.length }).map((_, i) => {
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
function ilTiklandi(iladi) {
  if (beklemede) return;
  const s = sorular[soruIdx];
  if (soruIdx >= sorular.length || bulunanlar.length >= s.iller.length) return;
  if (bulunanlar.includes(iladi)) { showFeedback(`✨ ${iladi} zaten bulundu!`, 'info'); return; }

  if (s.iller.includes(iladi)) {
    bulunanlar.push(iladi);
    setIlClass(iladi, 'il-correct-3'); // Standart yeşil renk
    const kazanilan = 10;
    puan += kazanilan;
    updateScores();
    showMapFeedback(`✅ Doğru! ${iladi} (+${kazanilan}p)`, 'ok');
    renderSiraList();

    if (bulunanlar.length === s.iller.length) {
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