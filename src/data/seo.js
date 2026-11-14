// Konten SEO per produk (Bahasa Indonesia).
// Dipakai oleh: halaman detail produk (tampilan) dan scripts/prerender.mjs (HTML statis untuk Google).
// Jangan menambah klaim harga/rating/fitur yang belum ada di products.js.
import { productsData } from './products.js';

export const STATUS_LABEL_ID = {
  InDevelopment: 'Dalam Pengembangan',
  ComingSoon: 'Segera Hadir',
  ConsultFirst: 'Konsultasi Terlebih Dahulu',
  Available: 'Tersedia',
};

export const seoData = {
  'event-registration': {
    title: 'Sistem Registrasi Event & Aplikasi QR Check-in',
    desc: 'Sistem registrasi event online dan aplikasi QR check-in: formulir pendaftaran, tiket digital QR Code, validasi tiket ganda, dashboard kehadiran, laporan PDF & Excel.',
    keywords: ['sistem registrasi event', 'aplikasi QR check-in', 'registrasi event online', 'software event organizer', 'tiket digital QR code', 'check-in peserta seminar'],
    intro:
      'Event Registration & QR Check-in System menggabungkan pendaftaran peserta dan pemeriksaan kehadiran dalam satu alur. Peserta mendaftar lewat formulir online dan menerima tiket digital dengan QR Code unik. Saat acara, petugas memindai QR Code, sistem mendeteksi tiket yang sudah dipakai, dan panitia memantau jumlah pendaftar serta peserta hadir. Cocok untuk seminar, workshop, konferensi, dan acara perusahaan.',
    faq: [
      ['Apa itu sistem registrasi event dengan QR check-in?', 'Sistem untuk menerima pendaftaran peserta secara online, menerbitkan tiket digital dengan QR Code, lalu memvalidasi kehadiran dengan memindai QR Code saat acara.'],
      ['Apakah tiket QR bisa dipakai dua kali?', 'Sistem dirancang dengan validasi tiket ganda untuk mendeteksi tiket yang sudah digunakan.'],
      ['Apakah data peserta bisa diekspor?', 'Ya, laporan peserta dirancang dapat diekspor ke PDF dan Excel.'],
    ],
  },
  'digital-guest-book': {
    title: 'Buku Tamu Digital dengan Tanda Tangan Elektronik',
    desc: 'Sistem buku tamu digital: formulir elektronik, tanda tangan digital di layar, ucapan, pencatatan waktu, pencarian tamu, dan ekspor laporan PDF atau Excel.',
    keywords: ['buku tamu digital', 'aplikasi buku tamu online', 'buku tamu elektronik', 'tanda tangan digital tamu', 'guest book digital event'],
    intro:
      'Digital Guest Book System menggantikan buku tamu kertas dengan formulir elektronik. Tamu mengisi identitas, menandatangani langsung di layar, dan meninggalkan ucapan. Waktu pengisian tercatat, data mudah dicari, dan laporan dapat diunduh. Cocok untuk pernikahan, seminar, konferensi, acara perusahaan, dan acara resmi.',
    faq: [
      ['Apa keuntungan buku tamu digital dibanding buku kertas?', 'Data tamu tersimpan rapi, waktu pengisian tercatat, mudah dicari, dan laporan dapat diekspor tanpa input ulang.'],
      ['Apakah tamu bisa tanda tangan di layar?', 'Ya, sistem ini dirancang dengan fitur tanda tangan digital langsung pada layar.'],
    ],
  },
  'visitor-management': {
    title: 'Visitor Management System: Catat Pengunjung Event',
    desc: 'Visitor management system untuk event dan venue: registrasi pengunjung, check-in dan check-out, multi-entry point, dashboard statistik, dan laporan kunjungan.',
    keywords: ['visitor management system', 'sistem manajemen pengunjung', 'aplikasi pencatatan pengunjung', 'check-in check-out pengunjung', 'software pameran'],
    intro:
      'Visitor Management System membantu penyelenggara mengetahui siapa saja yang datang dan kapan mereka masuk maupun pulang. Pengunjung dicatat beserta kategorinya, beberapa pintu masuk dapat bekerja pada data yang sama, dan statistik kunjungan tampil di dashboard. Cocok untuk pameran, venue, perusahaan, dan kegiatan dengan banyak pengunjung.',
    faq: [
      ['Apa fungsi visitor management system?', 'Mencatat identitas, kategori, waktu masuk, dan waktu keluar pengunjung, serta menyajikan statistik dan laporan kunjungan.'],
      ['Apakah mendukung banyak pintu masuk?', 'Ya, sistem ini dirancang dengan fitur multi-entry point.'],
    ],
  },
  'event-dashboard': {
    title: 'Dashboard Manajemen Acara untuk Event Organizer',
    desc: 'Dashboard manajemen acara dan aplikasi event organizer: ringkasan acara, statistik, jadwal, monitoring peserta dan aktivitas, serta laporan acara dalam satu tampilan.',
    keywords: ['aplikasi manajemen acara', 'dashboard event organizer', 'software event organizer', 'aplikasi event organizer', 'sistem manajemen event', 'monitoring acara'],
    intro:
      'Event Management Dashboard adalah pusat pemantauan bagi event organizer. Ringkasan acara, statistik, jadwal, pendaftaran dan kehadiran peserta, serta aktivitas operasional ditampilkan dalam satu tempat, sehingga keputusan di lapangan lebih cepat. Ringkasan keuangan dan tugas kru tersedia jika sistem terkait sudah terintegrasi.',
    faq: [
      ['Apa isi dashboard manajemen acara?', 'Ringkasan acara, statistik kegiatan, jadwal, monitoring peserta dan aktivitas, notifikasi, serta laporan acara.'],
      ['Apakah terhubung dengan produk lain?', 'Integrasi dengan produk lain, seperti keuangan dan tugas kru, hanya ditawarkan jika koneksi dan hak akses antar-sistem sudah dikembangkan.'],
    ],
  },
  'crew-management': {
    title: 'Aplikasi Manajemen Kru & Tugas Acara',
    desc: 'Sistem manajemen kru dan tugas acara: data kru, divisi, pembagian tugas, PIC, jadwal kerja, kanban, update progres, lampiran, dan laporan pekerjaan.',
    keywords: ['aplikasi manajemen kru event', 'manajemen tugas acara', 'software event organizer', 'kanban tugas event', 'pembagian tugas kru'],
    intro:
      'Crew & Task Management System membantu EO dan WO mengatur tim selama persiapan dan hari pelaksanaan. Data kru dikelompokkan per jabatan dan divisi, tugas diberikan lengkap dengan penanggung jawab, dan progres terlihat pada kanban. Lampiran dokumen atau foto dan laporan pekerjaan membantu koordinasi tim lapangan.',
    faq: [
      ['Apakah bisa menentukan penanggung jawab tiap tugas?', 'Ya, sistem ini dirancang dengan fitur penanggung jawab (PIC) pada setiap pekerjaan.'],
      ['Bagaimana progres pekerjaan dipantau?', 'Lewat kanban tugas berdasarkan status, pembaruan progres, dan laporan pekerjaan.'],
    ],
  },
  'e-certificate': {
    title: 'Sistem E-Certificate: Sertifikat Elektronik Otomatis',
    desc: 'Sistem e-certificate untuk seminar dan pelatihan: desain sertifikat, template, penerbitan massal, nomor unik, download PDF, dan QR Verification keaslian.',
    keywords: ['sistem e-certificate', 'sertifikat elektronik otomatis', 'aplikasi e-sertifikat seminar', 'penerbitan sertifikat massal', 'verifikasi sertifikat QR'],
    intro:
      'E-Certificate System memudahkan penerbitan sertifikat untuk banyak peserta. Desain sertifikat dari template atau unggah desain sendiri, atur teks, logo, dan tanda tangan, lalu terbitkan secara massal, termasuk berdasarkan data kehadiran. Setiap sertifikat memiliki nomor unik, tersedia sebagai PDF, dan keasliannya dapat diperiksa lewat QR Verification.',
    faq: [
      ['Apakah sertifikat bisa diterbitkan sekaligus untuk banyak peserta?', 'Ya, sistem ini dirancang dengan penerbitan massal, termasuk berdasarkan data kehadiran.'],
      ['Bagaimana keaslian sertifikat diperiksa?', 'Melalui QR Verification yang memverifikasi keaslian sertifikat.'],
      ['Apakah bisa memakai desain sertifikat sendiri?', 'Ya, tersedia fitur upload desain selain template siap pakai.'],
    ],
  },
  'invitation-rsvp': {
    title: 'Undangan Digital & RSVP untuk Wedding Organizer',
    desc: 'Software wedding organizer untuk undangan digital dan RSVP online: template, undangan personal per tamu, konfirmasi kehadiran, rekap RSVP, dan bagikan lewat WhatsApp.',
    keywords: ['software wedding organizer', 'undangan digital', 'RSVP online', 'undangan pernikahan digital', 'konfirmasi kehadiran tamu', 'aplikasi undangan WhatsApp'],
    intro:
      'Invitation & RSVP System membantu wedding organizer dan event organizer membuat undangan digital yang personal. Atur tampilan, informasi acara, dan galeri foto, buat tautan khusus untuk setiap tamu, lalu bagikan lewat WhatsApp. Tamu mengonfirmasi kehadiran dan jumlah pendamping, dan penyelenggara melihat rekap RSVP secara langsung.',
    faq: [
      ['Apakah tiap tamu bisa mendapat tautan undangan sendiri?', 'Ya, sistem ini dirancang dengan undangan personal berdasarkan nama tamu.'],
      ['Bagaimana membagikan undangan?', 'Undangan dapat dibagikan melalui WhatsApp Sharing.'],
      ['Apakah bisa mengatur siapa yang boleh membuka undangan?', 'Tersedia pengaturan privasi untuk mengatur akses undangan.'],
    ],
  },
  'event-game': {
    title: 'Event Game: Puzzle, Quiz Battle & Spin Wheel Lucky Draw',
    desc: 'Event game interaktif untuk TV atau monitor touchscreen: jigsaw puzzle, sliding puzzle, memory card, quiz battle, dan spin wheel lucky draw. Tanpa HP pribadi peserta.',
    keywords: ['event game', 'game interaktif acara', 'spin wheel lucky draw', 'quiz battle event', 'permainan touchscreen event', 'jigsaw puzzle event', 'hiburan gathering'],
    intro:
      'Event Game System memeriahkan acara lewat TV atau monitor touchscreen. Peserta bermain langsung di layar yang disediakan penyelenggara, tanpa HP pribadi atau QR untuk bergabung. Satu produk berisi lima modul: Jigsaw Puzzle, Sliding Picture Puzzle, Memory Card Matching, Quiz Battle, dan Spin Wheel / Lucky Draw, lengkap dengan dashboard operator, tampilan Big Screen, dan mode offline.',
    faq: [
      ['Apa saja permainan dalam Event Game System?', 'Lima modul: Jigsaw Puzzle, Sliding Picture Puzzle, Memory Card Matching, Quiz Battle, dan Spin Wheel / Lucky Draw.'],
      ['Apakah peserta perlu memakai HP?', 'Tidak. Peserta bermain langsung di TV atau monitor touchscreen yang disediakan penyelenggara.'],
      ['Apakah bisa dipakai tanpa internet?', 'Sistem ini dirancang dengan mode offline. Koneksi internet tetap disarankan untuk persiapan konten.'],
    ],
  },
  'event-photobooth': {
    title: 'Photobooth Digital Berbasis Web untuk Event',
    desc: 'Event photobooth digital berbasis web: pengunjung foto lewat kamera HP, frame acara otomatis, countdown, multi-shot, unduh foto, dan bagikan lewat WhatsApp.',
    keywords: ['photobooth digital', 'photobooth event', 'photobooth QR HP', 'frame foto acara', 'photobooth tanpa aplikasi', 'photobooth pernikahan'],
    intro:
      'Event Photobooth System memungkinkan pengunjung mengambil foto dengan kamera HP sendiri tanpa memasang aplikasi. Pengunjung memindai QR Access, memotret dengan hitung mundur, dan foto otomatis digabung dengan frame acara. Hasilnya bisa diunduh dalam JPG atau PNG dan dibagikan lewat WhatsApp. Membutuhkan HTTPS, izin kamera, dan koneksi internet.',
    faq: [
      ['Apakah pengunjung perlu memasang aplikasi?', 'Tidak. Photobooth berjalan lewat browser di HP pengunjung.'],
      ['Apa yang dibutuhkan agar photobooth berjalan?', 'HTTPS, izin kamera, dan koneksi internet untuk pengiriman serta penyimpanan foto.'],
      ['Apakah frame bisa disesuaikan dengan acara?', 'Ya, penyelenggara dapat mengunggah dan mengelola frame PNG transparan.'],
    ],
  },
  'event-budget': {
    title: 'Sistem Anggaran Acara: Budget vs Actual',
    desc: 'Sistem anggaran dan keuangan acara untuk EO dan WO: budget planning, pemasukan, pengeluaran, bukti transaksi, Budget vs Actual, dan laporan PDF atau Excel.',
    keywords: ['sistem anggaran acara', 'aplikasi budget event', 'budget vs actual event', 'laporan keuangan event', 'software event planner'],
    intro:
      'Event Budgeting System membantu penyelenggara menyusun rencana anggaran, mengelompokkan biaya per kategori, dan mencatat pemasukan serta pengeluaran lengkap dengan bukti transaksi. Fitur Budget vs Actual membandingkan anggaran dengan realisasi, dan laporan keuangan dapat diunduh dalam PDF atau Excel.',
    faq: [
      ['Apa itu Budget vs Actual?', 'Perbandingan antara anggaran yang direncanakan dan biaya yang benar-benar terealisasi.'],
      ['Apakah bukti pembayaran bisa dilampirkan?', 'Ya, tersedia fitur upload bukti transaksi.'],
    ],
  },
  'vendor-management': {
    title: 'Sistem Manajemen Vendor untuk EO & WO',
    desc: 'Sistem manajemen vendor event: database vendor, penawaran harga, perbandingan, kontrak kerja sama, riwayat, evaluasi vendor, dan laporan untuk EO dan WO.',
    keywords: ['sistem manajemen vendor', 'database vendor event', 'aplikasi vendor management', 'perbandingan penawaran vendor', 'software event planner'],
    intro:
      'Vendor Management System menyimpan data vendor dan penyedia jasa acara dalam satu database: profil, kontak, penawaran harga, dokumen, dan kontrak kerja sama. Penyelenggara dapat membandingkan harga dan layanan, mencatat riwayat proyek, serta memberi evaluasi untuk menentukan vendor pada acara berikutnya.',
    faq: [
      ['Apakah bisa membandingkan penawaran vendor?', 'Ya, tersedia fitur perbandingan vendor untuk harga dan layanan.'],
      ['Apakah dokumen kontrak bisa disimpan?', 'Ya, kontrak kerja sama dan dokumen vendor dapat disimpan sebagai lampiran.'],
    ],
  },
  'equipment-inventory': {
    title: 'Sistem Inventaris Peralatan Event & Rental',
    desc: 'Sistem inventaris peralatan event dan rental: data barang, QR/barcode, stok, peminjaman, pengembalian, pemeriksaan kondisi, jadwal perawatan, dan laporan.',
    keywords: ['sistem inventaris peralatan event', 'aplikasi inventaris rental event', 'peminjaman peralatan', 'QR barcode inventaris', 'software rental peralatan event'],
    intro:
      'Event Equipment Inventory System mencatat seluruh peralatan yang dimiliki atau dipakai penyelenggara, lengkap dengan kategori, kode unik, label QR/Barcode, stok, dan kondisi. Peminjaman dan pengembalian tercatat, barang diperiksa sebelum dan sesudah dipakai, dan jadwal perawatan dapat diatur. Cocok untuk EO, WO, dan rental peralatan event.',
    faq: [
      ['Apakah barang bisa diberi label QR atau barcode?', 'Ya, tersedia fitur QR/Barcode untuk memberi label barang.'],
      ['Apakah peminjaman dan pengembalian tercatat?', 'Ya, keduanya dicatat beserta pemeriksaan kondisi barang dan riwayat penggunaan.'],
    ],
  },
  'ticketing-system': {
    title: 'Software Ticketing Event: Jual Tiket Online & Pembayaran',
    desc: 'Software ticketing event untuk konser, seminar, dan festival: kategori dan kuota tiket, pembayaran online, e-ticket QR Code, check-in, dan laporan penjualan.',
    keywords: ['software ticketing event', 'sistem tiket online', 'jual tiket konser online', 'e-ticket QR code', 'payment gateway tiket event'],
    intro:
      'Event Ticketing & Payment System mencakup seluruh alur penjualan tiket: kategori tiket, harga, kuota, halaman pembelian, pembayaran online melalui payment gateway, verifikasi pembayaran, dan penerbitan e-ticket dengan QR Code unik. Tiket divalidasi saat check-in dan pencegahan tiket ganda membantu mencegah pemakaian berulang. Laporan penjualan dan pembayaran membantu memantau transaksi.',
    faq: [
      ['Bagaimana pembayaran tiket diproses?', 'Melalui integrasi payment gateway, lalu status pembayaran diverifikasi sebelum e-ticket diterbitkan.'],
      ['Apakah tiket bisa dipakai berulang?', 'Tidak. Sistem dirancang dengan pencegahan tiket ganda.'],
      ['Acara apa saja yang cocok?', 'Konser, seminar, workshop, festival, pameran, dan acara lain yang menjual tiket.'],
    ],
  },
};

// Fallback hanya jika ada produk baru tanpa entri di seoData.
const fallbackSeo = (product) => {
  const title = product.title.id;
  return {
    title: `${title} untuk Event`,
    desc: product.desc.id,
    keywords: [title.toLowerCase(), `aplikasi ${title.toLowerCase()}`],
    intro: product.desc.id,
    faq: [],
  };
};

export const getSeo = (product) => {
  const base = seoData[product.slug] || fallbackSeo(product);
  const name = product.title.id;
  const status = STATUS_LABEL_ID[product.status] || STATUS_LABEL_ID.InDevelopment;
  const statusAnswer =
    product.status === 'Available'
      ? `Ya, ${name} tersedia dan disiapkan sesuai kebutuhan acara Anda. Hubungi kami lewat WhatsApp untuk kebutuhan, jadwal pengerjaan, dan cara pemesanan.`
      : `Saat ini ${name} berstatus ${status}, sehingga fitur dan ketersediaannya dapat berubah. Hubungi kami lewat WhatsApp untuk informasi terbaru.`;
  return {
    ...base,
    faq: [
      ...base.faq,
      [`Apakah ${name} sudah bisa digunakan?`, statusAnswer],
      [`Bagaimana cara berkonsultasi atau memesan ${name}?`, 'Klik tombol Konsultasi WhatsApp di halaman ini. Pesan otomatis akan terisi, lalu tim kami menjelaskan fitur, harga, dan cara pemesanan.'],
    ],
  };
};

export const seoBySlug = Object.fromEntries(productsData.map((p) => [p.slug, getSeo(p)]));

// Produk untuk blok tautan internal di beranda.
export const featuredKeywordSlugs = [
  'event-registration', 'ticketing-system', 'invitation-rsvp', 'e-certificate',
  'digital-guest-book', 'event-game', 'event-dashboard', 'event-photobooth',
];
