// Konten SEO per produk (Bahasa Indonesia).
// Dipakai oleh: halaman detail produk (tampilan) dan scripts/prerender.mjs (HTML statis untuk Google).
// Hanya klaim yang sesuai fitur di products.js. Jangan menambah klaim harga/rating yang belum ada.
import { productsData } from './products.js';

export const seoData = {
  'event-registration': {
    title: 'Sistem Registrasi Event Online & Pendaftaran Peserta',
    desc: 'Sistem registrasi event online untuk seminar, workshop, dan konferensi: formulir pendaftaran, kuota peserta, kategori, nomor registrasi otomatis, export Excel.',
    keywords: ['sistem registrasi event', 'aplikasi pendaftaran peserta', 'registrasi event online', 'software registrasi seminar', 'form pendaftaran event'],
    intro:
      'Sistem registrasi event Sumber Rejeki Tech membantu panitia mengganti pendaftaran manual (kertas atau spreadsheet) dengan formulir online yang rapi. Peserta mendaftar lewat tautan, data langsung tersimpan, dan panitia bisa memantau jumlah pendaftar kapan saja. Cocok untuk seminar, konferensi, workshop, pelatihan, dan gathering.',
    faq: [
      ['Apa itu sistem registrasi event online?', 'Sistem registrasi event online adalah aplikasi untuk menerima pendaftaran peserta lewat formulir digital, lengkap dengan data peserta, kategori, dan kuota, sehingga panitia tidak perlu merekap manual.'],
      ['Apakah bisa mengatur kuota dan kategori peserta?', 'Bisa. Anda dapat mengatur kuota pendaftaran dan membedakan peserta berdasarkan kategori, misalnya umum, mahasiswa, atau VIP.'],
      ['Apakah data peserta bisa diekspor ke Excel?', 'Bisa. Data pendaftar dapat diekspor ke Excel untuk kebutuhan laporan atau pengolahan lanjutan.'],
    ],
  },
  'qr-checkin': {
    title: 'Aplikasi QR Check-in Peserta Event',
    desc: 'Aplikasi QR check-in peserta event: QR unik per peserta, scan lewat kamera, validasi tiket, cegah check-in ganda, dan mendukung banyak petugas sekaligus.',
    keywords: ['aplikasi QR check-in', 'QR code check in peserta', 'scan QR kehadiran event', 'sistem absensi QR seminar', 'check-in peserta event'],
    intro:
      'Aplikasi QR check-in dari Sumber Rejeki Tech mempercepat antrean di meja registrasi. Setiap peserta memiliki QR unik yang dipindai petugas lewat kamera. Sistem memvalidasi tiket dan mencegah check-in ganda, serta mendukung beberapa petugas yang bekerja bersamaan. Cocok untuk seminar, konser, konferensi, pameran, dan acara perusahaan.',
    faq: [
      ['Bagaimana cara kerja QR check-in untuk event?', 'Setiap peserta mendapat QR unik. Saat tiba di lokasi, petugas memindai QR tersebut dengan kamera, lalu sistem memvalidasi dan mencatat kehadiran.'],
      ['Apakah QR bisa dipakai dua kali?', 'Tidak. Sistem mencegah check-in ganda sehingga satu QR tidak bisa dipakai berulang kali.'],
      ['Bisa dipakai banyak petugas sekaligus?', 'Bisa. Fitur multi-petugas memungkinkan beberapa petugas memindai peserta di pintu yang berbeda.'],
    ],
  },
  'e-badge': {
    title: 'E-Badge & ID Card Peserta Digital',
    desc: 'Buat e-badge dan ID card peserta digital dengan template, foto, dan QR Code. Siap diunduh dalam format PDF untuk seminar, konferensi, dan pameran.',
    keywords: ['e-badge peserta', 'ID card event digital', 'name tag digital', 'kartu peserta QR code', 'badge seminar PDF'],
    intro:
      'E-badge dan ID card digital membantu panitia membuat kartu identitas peserta tanpa desain satu per satu. Pilih template, tambahkan foto dan QR Code, lalu unduh sebagai PDF. Cocok untuk seminar, konferensi, pameran, dan acara formal.',
    faq: [
      ['Apa isi e-badge peserta?', 'E-badge dapat memuat template acara, foto peserta, dan QR Code yang bisa dipakai untuk check-in.'],
      ['Dalam format apa badge bisa diunduh?', 'Badge dapat diunduh dalam format PDF.'],
    ],
  },
  'digital-guest-book': {
    title: 'Buku Tamu Digital untuk Event & Kantor',
    desc: 'Buku tamu digital: formulir tamu online, identitas pengunjung, waktu kedatangan otomatis, dan export laporan. Cocok untuk acara perusahaan dan pameran.',
    keywords: ['buku tamu digital', 'aplikasi buku tamu online', 'buku tamu elektronik', 'guest book digital event', 'buku tamu QR'],
    intro:
      'Buku tamu digital menggantikan buku tamu kertas dengan formulir online. Identitas pengunjung dan waktu kedatangan tercatat otomatis, dan laporannya bisa diekspor kapan saja. Cocok untuk acara perusahaan, kunjungan instansi, dan pameran.',
    faq: [
      ['Apa keuntungan buku tamu digital dibanding buku kertas?', 'Data tamu tersimpan rapi, waktu kedatangan tercatat otomatis, dan laporan bisa diekspor tanpa input ulang.'],
      ['Apakah bisa dipakai untuk kunjungan kantor atau instansi?', 'Bisa. Buku tamu digital cocok untuk acara perusahaan, kunjungan instansi, dan pameran.'],
    ],
  },
  'invitation-rsvp': {
    title: 'Undangan Digital & RSVP Wedding Online',
    desc: 'Undangan digital dengan RSVP untuk wedding, gathering, dan acara VIP: template undangan, konfirmasi hadir, rekap RSVP, dan tautan WhatsApp.',
    keywords: ['undangan digital RSVP', 'RSVP wedding online', 'undangan pernikahan digital', 'konfirmasi kehadiran undangan', 'undangan digital WhatsApp'],
    intro:
      'Undangan digital dari Sumber Rejeki Tech dilengkapi RSVP, jadi tamu dapat langsung mengonfirmasi kehadiran dan Anda mendapat rekap yang jelas. Undangan dibagikan lewat tautan WhatsApp. Cocok untuk wedding, gathering, acara VIP, dan corporate event.',
    faq: [
      ['Apa itu RSVP pada undangan digital?', 'RSVP adalah konfirmasi kehadiran. Tamu menjawab hadir atau tidak langsung dari undangan, dan jawabannya masuk ke rekap.'],
      ['Bagaimana cara membagikan undangan digital?', 'Undangan dibagikan melalui tautan yang bisa dikirim lewat WhatsApp.'],
      ['Apakah cocok untuk undangan pernikahan?', 'Cocok. Selain wedding, undangan ini juga dipakai untuk gathering, acara VIP, dan corporate event.'],
    ],
  },
  'ticketing-system': {
    title: 'Sistem Tiket Event Online dengan QR Code',
    desc: 'Sistem tiket event online: kategori tiket, QR Code, validasi tiket di lokasi, dan rekap penjualan. Untuk konser, seminar berbayar, workshop, dan festival.',
    keywords: ['sistem tiket event', 'aplikasi ticketing event', 'tiket online QR code', 'jual tiket seminar online', 'software tiket konser'],
    intro:
      'Sistem tiket event membantu Anda mengelola tiket dari penjualan sampai masuk lokasi. Atur kategori tiket, setiap tiket memiliki QR Code, dan petugas memvalidasinya di pintu masuk. Rekap penjualan memudahkan pemantauan. Cocok untuk konser, seminar berbayar, workshop, dan festival.',
    faq: [
      ['Apakah tiket bisa dibuat lebih dari satu kategori?', 'Bisa. Anda dapat membuat beberapa kategori tiket sesuai kebutuhan acara.'],
      ['Bagaimana tiket divalidasi di lokasi?', 'Setiap tiket memiliki QR Code yang divalidasi petugas saat peserta masuk.'],
    ],
  },
  'lucky-draw': {
    title: 'Aplikasi Lucky Draw Digital untuk Event',
    desc: 'Aplikasi lucky draw digital dengan undian acak, animasi, dan tampilan layar besar. Cocok untuk gathering, seminar, dan acara perusahaan.',
    keywords: ['aplikasi lucky draw', 'undian digital event', 'lucky draw online', 'software undian doorprize', 'random draw layar besar'],
    intro:
      'Aplikasi lucky draw digital membuat sesi undian doorprize lebih seru dan transparan. Pemenang dipilih secara acak dengan animasi, dan tampil di layar besar agar seluruh peserta dapat menyaksikannya.',
    faq: [
      ['Apakah pemenang dipilih secara acak?', 'Ya. Sistem melakukan undian acak dari daftar peserta.'],
      ['Bisa ditampilkan di layar besar?', 'Bisa. Tampilan undian dirancang untuk layar besar saat acara berlangsung.'],
    ],
  },
  'e-certificate': {
    title: 'E-Sertifikat Otomatis untuk Seminar & Pelatihan',
    desc: 'Buat dan kirim e-sertifikat seminar secara otomatis untuk banyak peserta. Template sertifikat, hasil PDF, dan pembagian cepat setelah acara.',
    keywords: ['e-sertifikat otomatis', 'sertifikat seminar online', 'e-certificate seminar', 'generator sertifikat peserta', 'sertifikat digital PDF'],
    intro:
      'E-sertifikat digital menghemat waktu panitia setelah acara. Sertifikat dibuat dari template untuk banyak peserta sekaligus, sehingga tidak perlu mengedit satu per satu. Cocok untuk seminar, webinar, workshop, dan pelatihan.',
    faq: [
      ['Apa itu e-sertifikat?', 'E-sertifikat adalah sertifikat digital yang dibuat dan dibagikan secara online, tanpa cetak.'],
      ['Apakah sertifikat bisa dibuat untuk banyak peserta sekaligus?', 'Bisa. Sertifikat dibuat otomatis dari template untuk seluruh peserta.'],
    ],
  },
  'event-dashboard': {
    title: 'Software Event Organizer: Dashboard Acara',
    desc: 'Software event organizer untuk memantau acara dalam satu dashboard: pendaftar, kehadiran, dan operasional. Terhubung dengan registrasi, check-in, dan laporan.',
    keywords: ['software event organizer', 'aplikasi event organizer', 'dashboard manajemen event', 'sistem manajemen acara', 'event management software Indonesia'],
    intro:
      'Dashboard acara adalah pusat kendali bagi event organizer. Pantau pendaftar, kehadiran, dan kegiatan operasional dalam satu tampilan, lalu gabungkan dengan sistem registrasi, QR check-in, rundown, dan laporan dari Sumber Rejeki Tech.',
    faq: [
      ['Apa saja yang dibutuhkan software untuk event organizer?', 'Umumnya registrasi peserta, check-in, tiket, rundown, manajemen kru dan vendor, serta laporan. Semuanya tersedia sebagai sistem modular di Sumber Rejeki Tech.'],
      ['Apakah bisa memilih hanya sistem yang dibutuhkan?', 'Bisa. Sistem bersifat modular, jadi Anda memilih yang dibutuhkan lalu menambah seiring acara berkembang.'],
    ],
  },
};

// Fallback otomatis untuk produk tanpa konten khusus.
export const getSeo = (product) => {
  const custom = seoData[product.slug];
  if (custom) return custom;
  const title = product.title.id;
  const features = product.features.id.slice(0, 4).join(', ').toLowerCase();
  return {
    title: `${title} untuk Event`,
    desc: `${product.desc.id.replace(/\.$/, '')}. Fitur: ${features}. Cocok untuk ${product.useCases.id.replace(/\.$/, '').toLowerCase()}.`,
    keywords: [title.toLowerCase(), `aplikasi ${title.toLowerCase()}`, `sistem ${title.toLowerCase()} event`],
    intro: `${product.desc.id} ${product.useCases.id}`,
    faq: [
      [`Apa itu ${title}?`, product.desc.id],
      [`Fitur apa saja pada ${title}?`, `${product.features.id.join(', ')}.`],
    ],
  };
};

export const seoBySlug = Object.fromEntries(productsData.map((p) => [p.slug, getSeo(p)]));

// Halaman yang sering dicari, dipakai untuk blok tautan internal di beranda.
export const featuredKeywordSlugs = [
  'event-registration', 'qr-checkin', 'event-dashboard', 'invitation-rsvp',
  'ticketing-system', 'e-certificate', 'digital-guest-book', 'lucky-draw',
];
