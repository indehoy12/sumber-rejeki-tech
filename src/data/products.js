// Katalog produk Sumber Rejeki Tech (13 produk utama, 4 kategori).
// Sumber isi: PRD Revisi Katalog Produk. Fitur ditulis "Nama — penjelasan".
//
// STATUS (diatur admin website, ubah di kolom `status` masing-masing produk):
//   'Available' = Tersedia | 'InDevelopment' = Dalam Pengembangan | 'ComingSoon' = Segera Hadir
//   'ConsultFirst' = Konsultasi Terlebih Dahulu
// Jangan ubah ke 'Available' sebelum produk benar-benar tersedia.
//
// ESTIMASI PENGERJAAN (diisi pemilik, per produk): `estimate: { min: 5, max: 10 }` (hari kerja).
//   Selama `estimate: null`, halaman produk menampilkan "disampaikan setelah konsultasi".
//   Nilai harus ditentukan & diverifikasi Sumber Rejeki Tech sebelum dipublikasikan.
//
// MASALAH YANG DISELESAIKAN: `problem: '...'` (satu kalimat) tampil di halaman produk.
//
// DEMO (per produk): `demoUrl: 'https://demo.contoh.com/nama-produk'` (harus diawali https://).
//   Bila diisi -> tombol "Coba Demo" membuka link di tab baru.
//   Bila kosong ('') -> tombol non-aktif "Demo sedang dalam pengerjaan". Tidak perlu mengubah kode lain.
//   Pakai data demo fiktif, jangan data klien/peserta sungguhan.
//
// SCREENSHOT (per produk): `screenshots: [{ src: '/screenshots/nama-file.webp', alt: 'Deskripsi', concept: false }]`
//   Taruh file di folder public/screenshots/. Set `concept: true` bila hanya ilustrasi konsep (otomatis diberi label).
//   Gunakan data fiktif / data yang sudah diizinkan. Selama kosong, tampil teks "akan ditambahkan".
// Detail teknis (howItWorks, devices, internet, security) bersifat umum; sesuaikan bila sudah final.

export const CATEGORIES = [
  'Event Operation',
  'Event Engagement',
  'Event Creative & Entertainment',
  'Event Business Management',
];

export const STATUSES = ['Available', 'InDevelopment', 'ComingSoon', 'ConsultFirst'];

const SECURITY_DEFAULT =
  'Data acara dan peserta dikelola penyelenggara. Pengaturan akses, penyimpanan, dan backup data dijelaskan dan disepakati saat konsultasi.';
const DEVICES_DEFAULT =
  'Dirancang responsif untuk HP, tablet, dan laptop. Spesifikasi perangkat final dikonfirmasi saat konsultasi.';
const INTERNET_DEFAULT =
  'Membutuhkan koneksi internet yang stabil di lokasi acara untuk mengakses dan menyimpan data.';

export const productsData = [
  // ───────── A. Event Operation ─────────
  {
    slug: 'event-registration',
    category: 'Event Operation',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Pendaftaran manual dan pemeriksaan kehadiran satu per satu membuat data peserta tersebar, antrean di meja registrasi panjang, dan rekap kehadiran sulit disusun.',
    title: { id: 'Event Registration & QR Check-in System', en: 'Event Registration & QR Check-in System' },
    short: {
      id: 'Pendaftaran peserta dan check-in tiket QR Code dalam satu sistem.',
      en: 'Participant registration and QR Code ticket check-in in one system.',
    },
    desc: {
      id: 'Sistem pendaftaran peserta acara dan pengelolaan kehadiran menggunakan tiket digital dengan QR Code. Membantu penyelenggara mengelola data peserta dan mempercepat proses pemeriksaan saat acara berlangsung.',
      en: 'Event participant registration and attendance management using digital tickets with QR Codes. Helps organizers manage participant data and speed up check-in at the event.',
    },
    benefits: [
      'Mengganti pendaftaran manual dengan formulir online yang rapi.',
      'Mempercepat antrean di meja registrasi lewat pemindaian QR Code.',
      'Memantau jumlah pendaftar dan peserta hadir dari dashboard.',
    ],
    targets: ['Event Organizer', 'Wedding Organizer', 'Penyelenggara seminar', 'Perusahaan', 'Komunitas', 'Penyelenggara workshop'],
    features: [
      'Manajemen acara — membuat dan mengatur informasi acara.',
      'Formulir pendaftaran — membuat formulir sesuai kebutuhan acara.',
      'Manajemen peserta — menyimpan dan mengelola data peserta.',
      'Tiket digital — membuat tiket dengan QR Code unik.',
      'QR Check-in — memindai tiket untuk memvalidasi kehadiran.',
      'Validasi tiket ganda — mendeteksi tiket yang sudah digunakan.',
      'Check-in manual — mencari dan memvalidasi peserta secara manual.',
      'Kategori peserta — membedakan jenis peserta.',
      'Dashboard kehadiran — menampilkan jumlah pendaftar dan peserta hadir.',
      'Laporan peserta — mengekspor data ke PDF dan Excel.',
    ],
    howItWorks: [
      'Penyelenggara membuat acara dan formulir pendaftaran.',
      'Peserta mendaftar dan menerima tiket digital dengan QR Code unik.',
      'Saat acara, petugas memindai QR Code atau mencari peserta secara manual.',
      'Sistem memvalidasi tiket, mencatat kehadiran, lalu data dapat diekspor sebagai laporan.',
    ],
    devices: 'Peserta mendaftar lewat HP atau laptop. Petugas check-in memakai HP atau tablet dengan kamera untuk memindai QR Code.',
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'digital-guest-book',
    category: 'Event Operation',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Buku tamu kertas sulit dirapikan, data tamu sulit dicari, dan rekap kunjungan harus disalin ulang setelah acara.',
    title: { id: 'Digital Guest Book System', en: 'Digital Guest Book System' },
    short: {
      id: 'Buku tamu digital dengan formulir elektronik dan tanda tangan di layar.',
      en: 'Digital guest book with electronic forms and on-screen signatures.',
    },
    desc: {
      id: 'Sistem buku tamu digital untuk menggantikan pencatatan manual dengan formulir elektronik, tanda tangan digital, dan pencatatan informasi pengunjung.',
      en: 'A digital guest book that replaces manual logging with electronic forms, digital signatures, and visitor information records.',
    },
    benefits: [
      'Menggantikan buku tamu kertas dengan data yang tersimpan rapi.',
      'Waktu pengisian tercatat dan data tamu mudah dicari.',
      'Laporan tamu dapat diunduh tanpa input ulang.',
    ],
    targets: ['EO dan WO', 'Perusahaan', 'Penyelenggara pernikahan', 'Seminar dan konferensi', 'Acara resmi'],
    features: [
      'Formulir buku tamu — mengisi identitas pengunjung.',
      'Tanda tangan digital — menandatangani langsung pada layar.',
      'Ucapan dan pesan — pengunjung dapat meninggalkan pesan.',
      'Kategori tamu — mengelompokkan jenis tamu.',
      'Pencatatan waktu — mencatat waktu pengisian.',
      'Pencarian tamu — mencari data pengunjung.',
      'Dashboard buku tamu — menampilkan statistik.',
      'Galeri tanda tangan — melihat tanda tangan pengunjung.',
      'Ekspor laporan — mengunduh data PDF atau Excel.',
      'Pengaturan formulir — mengatur kolom yang ingin ditampilkan.',
    ],
    howItWorks: [
      'Penyelenggara mengatur kolom formulir dan kategori tamu.',
      'Tamu mengisi formulir dan menandatangani langsung di layar perangkat.',
      'Data, ucapan, dan waktu pengisian tersimpan otomatis.',
      'Penyelenggara melihat statistik dan mengunduh laporan PDF atau Excel.',
    ],
    devices: 'Tablet, HP, atau laptop di meja tamu. Layar sentuh memudahkan tanda tangan digital.',
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'visitor-management',
    category: 'Event Operation',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Penyelenggara sulit mengetahui siapa saja yang datang, kapan mereka masuk dan pulang, serta berapa jumlah pengunjung secara terstruktur.',
    title: { id: 'Visitor Management System', en: 'Visitor Management System' },
    short: {
      id: 'Pencatatan kedatangan dan kepulangan pengunjung beserta statistiknya.',
      en: 'Record visitor arrivals and departures with live statistics.',
    },
    desc: {
      id: 'Sistem pencatatan dan pemantauan pengunjung yang membantu penyelenggara mengetahui jumlah, identitas, serta aktivitas kedatangan dan kepulangan pengunjung.',
      en: 'A visitor recording and monitoring system that helps organizers track visitor counts, identities, and arrival and departure activity.',
    },
    benefits: [
      'Mengetahui jumlah dan identitas pengunjung secara akurat.',
      'Mencatat waktu masuk dan keluar tiap pengunjung.',
      'Mendukung beberapa pintu masuk dalam satu data.',
    ],
    targets: ['EO', 'Pengelola venue', 'Perusahaan', 'Pameran', 'Penyelenggara kegiatan'],
    features: [
      'Registrasi pengunjung — mencatat identitas pengunjung.',
      'Kategori pengunjung — membedakan jenis pengunjung.',
      'Check-in — mencatat waktu kedatangan.',
      'Check-out — mencatat waktu kepulangan.',
      'Riwayat kunjungan — menyimpan aktivitas pengunjung.',
      'Multi-entry point — mendukung beberapa pintu masuk.',
      'Dashboard pengunjung — menampilkan statistik kunjungan.',
      'Monitoring pengunjung — memantau data terbaru.',
      'Pencarian pengunjung — mencari data berdasarkan informasi pengunjung.',
      'Laporan kunjungan — mengekspor data kunjungan.',
    ],
    howItWorks: [
      'Pengunjung dicatat identitas dan kategorinya saat tiba.',
      'Sistem mencatat waktu check-in, dan check-out saat pengunjung pulang.',
      'Petugas di beberapa pintu masuk bekerja pada data yang sama.',
      'Penyelenggara memantau dashboard dan mengekspor laporan kunjungan.',
    ],
    devices: 'HP, tablet, atau laptop untuk petugas di setiap pintu masuk.',
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'event-dashboard',
    category: 'Event Operation',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Informasi jadwal, progres, tugas, dan ringkasan operasional dari berbagai kegiatan tersebar sehingga sulit dipantau dalam satu tempat.',
    title: { id: 'Event Management Dashboard', en: 'Event Management Dashboard' },
    short: {
      id: 'Satu dashboard untuk memantau jadwal, peserta, dan aktivitas acara.',
      en: 'One dashboard to monitor schedules, participants, and event activity.',
    },
    desc: {
      id: 'Dashboard pengelolaan acara yang menyediakan ringkasan informasi, statistik, jadwal, dan aktivitas operasional untuk membantu penyelenggara memantau pelaksanaan acara.',
      en: 'An event management dashboard providing summaries, statistics, schedules, and operational activity to help organizers monitor the event.',
    },
    benefits: [
      'Melihat kondisi acara dalam satu tampilan ringkas.',
      'Memantau pendaftaran, kehadiran, dan aktivitas acara.',
      'Menyusun laporan acara dari data yang sudah terkumpul.',
    ],
    targets: ['Event Organizer', 'Manajer acara', 'Koordinator lapangan', 'Perusahaan'],
    features: [
      'Ringkasan acara — menampilkan informasi utama acara.',
      'Dashboard statistik — menampilkan statistik kegiatan.',
      'Jadwal acara — mengelola agenda kegiatan.',
      'Monitoring peserta — memantau data pendaftaran dan kehadiran.',
      'Monitoring aktivitas — memantau aktivitas acara.',
      'Ringkasan keuangan — menampilkan data keuangan jika terintegrasi.',
      'Ringkasan tugas — menampilkan progres tugas kru jika terintegrasi.',
      'Laporan acara — menyediakan ringkasan kegiatan.',
      'Notifikasi aktivitas — menampilkan pembaruan penting.',
      'Pengaturan dashboard — memilih informasi yang ingin ditampilkan.',
    ],
    howItWorks: [
      'Penyelenggara membuat acara dan mengatur jadwal kegiatan.',
      'Dashboard menampilkan ringkasan, statistik, dan aktivitas terbaru.',
      'Penyelenggara memilih informasi yang ingin ditampilkan.',
      'Ringkasan kegiatan dapat dijadikan laporan acara.',
    ],
    devices: DEVICES_DEFAULT,
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
    notes:
      'Integrasi dengan produk lain (misalnya keuangan dan tugas kru) hanya ditawarkan jika koneksi dan hak akses antar-sistem sudah dikembangkan.',
  },
  {
    slug: 'crew-management',
    category: 'Event Operation',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Pembagian tugas, jadwal, dan kehadiran kru yang dikoordinasikan secara terpisah membuat progres pekerjaan sulit dipantau.',
    title: { id: 'Crew & Task Management System', en: 'Crew & Task Management System' },
    short: {
      id: 'Atur kru, pembagian tugas, jadwal, dan progres pekerjaan acara.',
      en: 'Manage crew, task assignments, schedules, and event work progress.',
    },
    desc: {
      id: 'Sistem pengelolaan kru dan pembagian pekerjaan untuk membantu penyelenggara mengatur anggota tim, tanggung jawab, jadwal, serta progres pekerjaan selama persiapan dan pelaksanaan acara.',
      en: 'A crew and task management system that helps organizers manage team members, responsibilities, schedules, and work progress during event preparation and execution.',
    },
    benefits: [
      'Pembagian tugas dan penanggung jawab yang jelas untuk tiap kru.',
      'Progres pekerjaan terlihat dalam tampilan kanban.',
      'Jadwal kerja dan laporan pekerjaan terkumpul di satu tempat.',
    ],
    targets: ['EO', 'WO', 'Koordinator lapangan', 'Tim operasional acara'],
    features: [
      'Manajemen kru — mengelola data anggota tim.',
      'Jabatan dan divisi — mengelompokkan anggota berdasarkan posisi.',
      'Pembagian tugas — memberikan tugas kepada kru.',
      'Penanggung jawab — menentukan PIC pekerjaan.',
      'Jadwal kerja — mengatur jadwal kru.',
      'Kanban tugas — menampilkan tugas berdasarkan status.',
      'Update progres — memperbarui status pekerjaan.',
      'Lampiran tugas — mengunggah dokumen atau foto.',
      'Notifikasi tugas — memberikan informasi pekerjaan baru.',
      'Laporan pekerjaan — merangkum progres pekerjaan.',
    ],
    howItWorks: [
      'Penyelenggara memasukkan data kru, jabatan, dan divisi.',
      'Tugas dibuat dan diberikan kepada kru beserta penanggung jawabnya.',
      'Kru memperbarui status dan melampirkan dokumen atau foto pekerjaan.',
      'Penyelenggara memantau kanban dan merangkum laporan pekerjaan.',
    ],
    devices: DEVICES_DEFAULT,
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },

  // ───────── B. Event Engagement ─────────
  {
    slug: 'e-certificate',
    category: 'Event Engagement',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Membuat dan membagikan sertifikat satu per satu untuk banyak penerima memakan waktu dan rawan kesalahan data.',
    title: { id: 'E-Certificate System', en: 'E-Certificate System' },
    short: {
      id: 'Desain, terbitkan, dan bagikan sertifikat elektronik dengan verifikasi QR.',
      en: 'Design, issue, and distribute e-certificates with QR verification.',
    },
    desc: {
      id: 'Sistem pembuatan, desain, penerbitan, dan distribusi sertifikat elektronik secara otomatis untuk peserta kegiatan.',
      en: 'A system for designing, issuing, and distributing electronic certificates automatically for event participants.',
    },
    benefits: [
      'Menerbitkan banyak sertifikat sekaligus tanpa desain satu per satu.',
      'Sertifikat dapat diterbitkan berdasarkan data kehadiran.',
      'Keaslian sertifikat dapat diperiksa lewat QR Verification.',
    ],
    targets: ['EO', 'Penyelenggara seminar', 'Lembaga pelatihan', 'Universitas', 'Perusahaan'],
    features: [
      'Certificate Designer — membuat desain sertifikat.',
      'Template sertifikat — menyediakan desain siap pakai.',
      'Upload desain — mengunggah desain sendiri.',
      'Pengaturan elemen — mengatur teks, logo, tanda tangan, dan ornamen.',
      'Data penerima — mengelola daftar penerima sertifikat.',
      'Penerbitan massal — menerbitkan banyak sertifikat sekaligus.',
      'Penerbitan berdasarkan kehadiran — menerbitkan sertifikat berdasarkan data attendance.',
      'Nomor sertifikat — membuat nomor unik.',
      'Download PDF — mengunduh sertifikat.',
      'QR Verification — memverifikasi keaslian sertifikat.',
      'Distribusi sertifikat — menyediakan tautan unduhan.',
      'Riwayat penerbitan — menyimpan riwayat sertifikat.',
    ],
    howItWorks: [
      'Penyelenggara mendesain sertifikat dari template atau mengunggah desain sendiri.',
      'Daftar penerima dimasukkan, atau diambil dari data kehadiran.',
      'Sistem menerbitkan sertifikat massal dengan nomor unik dan QR Verification.',
      'Peserta mengunduh sertifikat PDF lewat tautan yang dibagikan.',
    ],
    devices: DEVICES_DEFAULT,
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'invitation-rsvp',
    category: 'Event Engagement',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Mengirim undangan dan mengumpulkan konfirmasi kehadiran secara manual menyulitkan penyelenggara memperkirakan jumlah tamu yang hadir.',
    title: { id: 'Invitation & RSVP System', en: 'Invitation & RSVP System' },
    short: {
      id: 'Undangan digital personal dengan konfirmasi kehadiran (RSVP) online.',
      en: 'Personalized digital invitations with online RSVP confirmation.',
    },
    desc: {
      id: 'Sistem pembuatan undangan digital dan pengelolaan konfirmasi kehadiran tamu secara online.',
      en: 'A system for creating digital invitations and managing guest attendance confirmation online.',
    },
    benefits: [
      'Undangan personal untuk setiap tamu lewat tautan bernama.',
      'Konfirmasi kehadiran dan jumlah pendamping terekam otomatis.',
      'Mudah dibagikan melalui WhatsApp.',
    ],
    targets: ['Wedding Organizer', 'Event Organizer', 'Perusahaan', 'Komunitas', 'Penyelenggara acara'],
    features: [
      'Invitation Designer — membuat tampilan undangan.',
      'Template undangan — menyediakan desain siap pakai.',
      'Informasi acara — mengatur tanggal, waktu, dan lokasi.',
      'Galeri foto — menampilkan foto acara.',
      'Daftar tamu — mengelola penerima undangan.',
      'Undangan personal — membuat tautan berdasarkan nama tamu.',
      'RSVP — menerima konfirmasi kehadiran.',
      'Jumlah pendamping — mencatat jumlah tamu tambahan.',
      'Ucapan dan pesan — menyediakan kolom pesan.',
      'WhatsApp Sharing — membagikan undangan melalui WhatsApp.',
      'Rekap kehadiran — menampilkan statistik RSVP.',
      'Pengaturan privasi — mengatur akses undangan.',
    ],
    howItWorks: [
      'Penyelenggara mendesain undangan dan mengisi informasi acara.',
      'Daftar tamu dimasukkan dan tautan undangan personal dibuat per tamu.',
      'Tautan dibagikan, misalnya lewat WhatsApp.',
      'Tamu mengonfirmasi kehadiran dan penyelenggara melihat rekap RSVP.',
    ],
    devices: 'Tamu membuka undangan dari HP atau laptop. Penyelenggara mengelola dari HP, tablet, atau laptop.',
    internet: 'Tamu dan penyelenggara membutuhkan koneksi internet untuk membuka undangan dan mengirim RSVP.',
    security: SECURITY_DEFAULT,
  },

  // ───────── C. Event Creative & Entertainment ─────────
  {
    slug: 'event-game',
    category: 'Event Creative & Entertainment',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Acara membutuhkan hiburan interaktif yang mudah dikendalikan, tanpa peserta harus bergabung menggunakan ponsel masing-masing.',
    title: { id: 'Event Game System', en: 'Event Game System' },
    short: {
      id: 'Lima permainan interaktif untuk layar TV atau monitor touchscreen.',
      en: 'Five interactive games for TV or touchscreen monitors.',
    },
    desc: {
      id: 'Aplikasi permainan interaktif untuk memeriahkan acara melalui TV atau monitor touchscreen. Peserta memainkan permainan langsung melalui layar yang disediakan penyelenggara, tanpa menggunakan HP pribadi atau QR untuk bergabung.',
      en: 'An interactive game application to liven up events on a TV or touchscreen monitor. Participants play directly on the screen provided by the organizer, without personal phones or QR codes to join.',
    },
    benefits: [
      'Menghadirkan hiburan interaktif di booth atau panggung acara.',
      'Peserta bermain langsung di layar, tanpa perlu HP pribadi.',
      'Lima permainan dalam satu produk dengan tema yang dapat diatur.',
    ],
    targets: ['EO dan WO', 'Perusahaan', 'Gathering', 'Sekolah', 'Komunitas', 'Penyelenggara hiburan acara'],
    features: [],
    modules: [
      {
        title: 'Jigsaw Puzzle',
        features: [
          'Upload gambar sendiri', 'Pengaturan tingkat kesulitan', 'Pengaturan jumlah potongan',
          'Pengacakan posisi potongan', 'Drag and drop touchscreen', 'Timer', 'Penghitungan skor',
          'Deteksi penyelesaian puzzle', 'Riwayat permainan',
        ],
      },
      {
        title: 'Sliding Picture Puzzle',
        features: [
          'Upload gambar sendiri', 'Pengaturan ukuran puzzle', 'Pengacakan kotak',
          'Menggeser kotak melalui touchscreen', 'Penghitungan langkah', 'Timer',
          'Deteksi gambar selesai', 'Penyimpanan hasil permainan',
        ],
      },
      {
        title: 'Memory Card Matching',
        features: [
          'Upload gambar kartu', 'Pengaturan jumlah pasangan', 'Pengacakan posisi kartu', 'Animasi kartu',
          'Penghitungan pasangan yang ditemukan', 'Timer', 'Sistem skor', 'Riwayat permainan',
        ],
      },
      {
        title: 'Quiz Battle',
        features: [
          'Membuat kategori kuis', 'Membuat pertanyaan sendiri', 'Pilihan ganda', 'Pengaturan durasi menjawab',
          'Pengacakan pertanyaan', 'Pengacakan pilihan jawaban', 'Penghitungan skor otomatis',
          'Tampilan jawaban benar', 'Leaderboard', 'Penentuan pemenang',
        ],
      },
      {
        title: 'Spin Wheel / Lucky Draw',
        features: [
          'Input nama peserta', 'Input daftar hadiah', 'Upload daftar peserta', 'Pengaturan jumlah pemenang',
          'Pengaturan tampilan roda', 'Animasi roda berputar', 'Pemilihan pemenang secara acak',
          'Pencegahan pemenang terpilih kembali', 'Tampilan hasil undian', 'Riwayat pemenang',
        ],
      },
    ],
    commonFeatures: [
      'Dashboard operator', 'Pengaturan acara', 'Pemilihan permainan', 'Tampilan Big Screen',
      'Pengaturan tema permainan', 'Timer', 'Skor dan leaderboard', 'Riwayat permainan', 'Mode offline', 'Fullscreen',
    ],
    howItWorks: [
      'Operator membuat acara, memilih permainan, dan mengatur tema serta konten (gambar, soal, atau hadiah).',
      'Permainan ditampilkan di TV atau monitor touchscreen dalam mode fullscreen atau Big Screen.',
      'Peserta bermain langsung di layar tanpa HP pribadi atau QR untuk bergabung.',
      'Skor, leaderboard, pemenang, dan riwayat permainan tersimpan untuk operator.',
    ],
    devices: 'TV atau monitor touchscreen yang disediakan penyelenggara, dengan komputer atau perangkat pemutar. Peserta tidak memerlukan HP pribadi.',
    internet: 'Tersedia mode offline sehingga permainan tetap dapat dijalankan tanpa koneksi internet yang stabil. Koneksi internet tetap disarankan untuk persiapan konten dan pencadangan data.',
    security: SECURITY_DEFAULT,
    notes: 'Dioperasikan melalui satu perangkat operator. Sinkronisasi otomatis antarperangkat tidak termasuk.',
  },
  {
    slug: 'event-photobooth',
    category: 'Event Creative & Entertainment',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Menyediakan pengalaman foto bertema acara biasanya membutuhkan perangkat atau aplikasi tambahan bagi pengunjung.',
    title: { id: 'Event Photobooth System', en: 'Event Photobooth System' },
    short: {
      id: 'Photobooth berbasis web: foto dari kamera HP, frame acara, unduh langsung.',
      en: 'Web-based photobooth: shoot with a phone camera, add event frames, download instantly.',
    },
    desc: {
      id: 'Sistem photobooth digital berbasis web yang memungkinkan pengunjung mengambil foto menggunakan kamera HP sendiri, menggabungkannya dengan frame acara, dan mengunduh hasilnya tanpa memasang aplikasi.',
      en: 'A web-based digital photobooth that lets visitors take photos with their own phone camera, combine them with event frames, and download the results without installing an app.',
    },
    benefits: [
      'Pengunjung memakai kamera HP sendiri tanpa memasang aplikasi.',
      'Foto otomatis digabung dengan frame acara.',
      'Hasil foto dapat diunduh dan dibagikan melalui WhatsApp.',
    ],
    targets: ['EO dan WO', 'Perusahaan', 'Pernikahan', 'Pameran', 'Komunitas'],
    features: [
      'Manajemen acara — mengatur acara photobooth.',
      'QR Access — membuat QR untuk mengakses photobooth.',
      'Frame Manager — mengunggah dan mengelola frame PNG transparan.',
      'Kamera HP — mengambil foto melalui browser.',
      'Countdown — mengatur hitung mundur.',
      'Multi-shot — mengatur jumlah foto.',
      'Auto Composition — menggabungkan foto dan frame.',
      'Preview foto — melihat hasil foto.',
      'Download foto — mengunduh JPG/PNG.',
      'WhatsApp Sharing — membagikan foto.',
      'Usage Limit — membatasi penggunaan.',
      'Gallery Management — mengelola hasil foto.',
      'Storage Management — mengelola penyimpanan.',
    ],
    howItWorks: [
      'Penyelenggara membuat acara dan mengunggah frame PNG transparan.',
      'Pengunjung memindai QR Access dan membuka photobooth di browser HP.',
      'Pengunjung mengambil foto dengan hitung mundur, dan sistem menggabungkannya dengan frame.',
      'Hasil dapat diunduh atau dibagikan, dan penyelenggara mengelola galeri serta penyimpanan.',
    ],
    devices: 'HP pengunjung dengan kamera dan browser. Penyelenggara mengelola acara dari HP, tablet, atau laptop.',
    internet: 'Membutuhkan HTTPS, izin kamera, dan koneksi internet untuk pengiriman serta penyimpanan foto.',
    security: SECURITY_DEFAULT,
    notes: 'Tidak termasuk penyediaan kamera DSLR, printer, booth fisik, atau operator.',
  },

  // ───────── D. Event Business Management ─────────
  {
    slug: 'event-budget',
    category: 'Event Business Management',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Rencana dan pencatatan biaya yang tersebar membuat penggunaan anggaran sulit dikontrol dan dibandingkan dengan rencana.',
    title: { id: 'Event Budgeting System', en: 'Event Budgeting System' },
    short: {
      id: 'Susun anggaran dan catat pemasukan serta pengeluaran acara.',
      en: 'Plan budgets and record event income and expenses.',
    },
    desc: {
      id: 'Sistem penyusunan anggaran dan pencatatan keuangan acara yang membantu penyelenggara mengontrol pemasukan, pengeluaran, dan realisasi anggaran.',
      en: 'A budgeting and financial recording system that helps organizers control income, expenses, and budget realization.',
    },
    benefits: [
      'Anggaran per acara tersusun dan terkelompok per kategori.',
      'Perbandingan anggaran dan realisasi (Budget vs Actual).',
      'Laporan keuangan dapat diunduh dalam PDF dan Excel.',
    ],
    targets: ['EO', 'WO', 'Event Planner', 'Perusahaan'],
    features: [
      'Manajemen acara — membuat anggaran per acara.',
      'Budget Planning — menyusun rencana anggaran.',
      'Kategori anggaran — mengelompokkan biaya.',
      'Pencatatan pemasukan — mencatat dana masuk.',
      'Pencatatan pengeluaran — mencatat biaya keluar.',
      'Manajemen transaksi — mengelola transaksi.',
      'Upload bukti transaksi — melampirkan bukti pembayaran.',
      'Budget vs Actual — membandingkan anggaran dan realisasi.',
      'Dashboard keuangan — menampilkan ringkasan.',
      'Laporan keuangan — mengunduh PDF dan Excel.',
      'Riwayat transaksi — melihat transaksi sebelumnya.',
    ],
    howItWorks: [
      'Penyelenggara membuat anggaran per acara dan mengelompokkan biaya per kategori.',
      'Pemasukan dan pengeluaran dicatat beserta bukti transaksi.',
      'Sistem membandingkan anggaran dengan realisasi dan menampilkan ringkasan di dashboard.',
      'Laporan keuangan diunduh dalam PDF atau Excel.',
    ],
    devices: DEVICES_DEFAULT,
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'vendor-management',
    category: 'Event Business Management',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Data penyedia jasa, penawaran, dan riwayat kerja sama yang tersimpan terpisah menyulitkan pencarian dan evaluasi vendor.',
    title: { id: 'Vendor Management System', en: 'Vendor Management System' },
    short: {
      id: 'Kelola data vendor, penawaran, kontrak, dan evaluasi kerja sama.',
      en: 'Manage vendor data, quotations, contracts, and performance reviews.',
    },
    desc: {
      id: 'Sistem pengelolaan data vendor dan penyedia jasa yang bekerja sama dengan penyelenggara acara.',
      en: 'A system for managing data on vendors and service providers working with event organizers.',
    },
    benefits: [
      'Semua data vendor dan kontak tersimpan di satu database.',
      'Penawaran harga dapat dibandingkan sebelum memilih vendor.',
      'Riwayat dan evaluasi kerja sama tercatat untuk acara berikutnya.',
    ],
    targets: ['EO', 'WO', 'Event Planner', 'Perusahaan'],
    features: [
      'Database vendor — menyimpan informasi vendor.',
      'Kategori vendor — mengelompokkan jenis layanan.',
      'Profil vendor — menyimpan informasi usaha.',
      'Kontak vendor — menyimpan nomor telepon dan WhatsApp.',
      'Penawaran harga — menyimpan quotation.',
      'Perbandingan vendor — membandingkan harga dan layanan.',
      'Kontrak kerja sama — menyimpan dokumen kontrak.',
      'Riwayat kerja sama — mencatat proyek sebelumnya.',
      'Evaluasi vendor — memberikan penilaian.',
      'Dokumen vendor — mengelola lampiran.',
      'Laporan vendor — rekap vendor dan kerja sama.',
    ],
    howItWorks: [
      'Data vendor, kategori, dan kontak dimasukkan ke database.',
      'Penawaran harga disimpan dan dibandingkan antar vendor.',
      'Kontrak dan dokumen vendor dilampirkan pada data kerja sama.',
      'Setelah acara, vendor dievaluasi dan riwayat kerja sama tercatat.',
    ],
    devices: DEVICES_DEFAULT,
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'equipment-inventory',
    category: 'Event Business Management',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Tanpa pencatatan yang rapi, ketersediaan, kondisi, dan peminjaman perlengkapan event sulit diketahui.',
    title: { id: 'Event Equipment Inventory System', en: 'Event Equipment Inventory System' },
    short: {
      id: 'Catat stok, peminjaman, pengembalian, dan perawatan peralatan event.',
      en: 'Track event equipment stock, loans, returns, and maintenance.',
    },
    desc: {
      id: 'Sistem pengelolaan inventaris peralatan yang dimiliki atau digunakan oleh penyelenggara acara, termasuk pencatatan peminjaman, pengembalian, kondisi, dan perawatan barang.',
      en: 'An inventory system for equipment owned or used by event organizers, including loans, returns, condition, and maintenance records.',
    },
    benefits: [
      'Stok dan kondisi peralatan terpantau dalam satu data.',
      'Peminjaman dan pengembalian barang tercatat jelas.',
      'Label QR/Barcode memudahkan identifikasi barang.',
    ],
    targets: ['EO', 'WO', 'Rental peralatan event', 'Perusahaan penyedia perlengkapan acara'],
    features: [
      'Data inventaris — mencatat seluruh barang.',
      'Kategori peralatan — mengelompokkan barang.',
      'Kode barang — membuat identitas unik.',
      'QR/Barcode — memberikan label barang.',
      'Stok peralatan — memantau ketersediaan.',
      'Kondisi barang — mencatat kondisi.',
      'Peminjaman — mencatat barang keluar.',
      'Pengembalian — mencatat barang kembali.',
      'Pemeriksaan barang — memeriksa kondisi sebelum dan sesudah penggunaan.',
      'Perawatan — mencatat jadwal pemeliharaan.',
      'Riwayat penggunaan — menelusuri penggunaan barang.',
      'Laporan inventaris — mengekspor data peralatan.',
    ],
    howItWorks: [
      'Barang dicatat dengan kategori, kode unik, dan label QR/Barcode.',
      'Saat dipinjam, barang diperiksa dan dicatat sebagai barang keluar.',
      'Saat kembali, kondisi diperiksa lagi dan stok diperbarui.',
      'Jadwal perawatan dan riwayat penggunaan dapat dilihat, lalu diekspor sebagai laporan.',
    ],
    devices: 'HP, tablet, atau laptop. Perangkat dengan kamera memudahkan pembacaan QR/Barcode.',
    internet: INTERNET_DEFAULT,
    security: SECURITY_DEFAULT,
  },
  {
    slug: 'ticketing-system',
    category: 'Event Business Management',
    status: 'Available',
    demoUrl: '',
    estimate: null,
    screenshots: [],
    problem: 'Penjualan tiket, pencatatan pembayaran, dan validasi tiket secara manual menyulitkan pemantauan transaksi dan data pemegang tiket.',
    title: { id: 'Event Ticketing & Payment System', en: 'Event Ticketing & Payment System' },
    short: {
      id: 'Jual tiket online, terima pembayaran, terbitkan e-ticket QR, dan validasi di lokasi.',
      en: 'Sell tickets online, accept payments, issue QR e-tickets, and validate on site.',
    },
    desc: {
      id: 'Sistem penjualan tiket acara secara online, mulai dari pengaturan kategori tiket, pemesanan, pembayaran, penerbitan tiket digital, hingga validasi saat acara berlangsung.',
      en: 'An online event ticket sales system covering ticket categories, ordering, payment, digital ticket issuance, and validation at the event.',
    },
    benefits: [
      'Penjualan tiket online dengan kategori, harga, dan kuota yang dapat diatur.',
      'Pembayaran melalui payment gateway dengan verifikasi status.',
      'E-ticket QR Code unik yang mencegah tiket dipakai berulang.',
    ],
    targets: ['EO', 'Konser', 'Seminar', 'Workshop', 'Festival', 'Pameran'],
    features: [
      'Manajemen acara — mengatur informasi acara.',
      'Kategori tiket — mengelola jenis tiket.',
      'Pengaturan harga — menentukan harga tiket.',
      'Kuota tiket — mengatur jumlah tiket tersedia.',
      'Halaman pembelian — menyediakan halaman pemesanan.',
      'Pemesanan tiket — mencatat transaksi.',
      'Pembayaran online — integrasi payment gateway.',
      'Verifikasi pembayaran — memvalidasi status pembayaran.',
      'E-Ticket — membuat tiket digital.',
      'QR Code Ticket — menghasilkan QR unik.',
      'Check-in tiket — memvalidasi tiket.',
      'Pencegahan tiket ganda — mencegah tiket digunakan berulang.',
      'Laporan penjualan — menampilkan total tiket terjual.',
      'Laporan pembayaran — memantau transaksi.',
    ],
    howItWorks: [
      'Penyelenggara mengatur acara, kategori tiket, harga, dan kuota.',
      'Pembeli memesan tiket di halaman pembelian dan membayar online.',
      'Setelah pembayaran terverifikasi, e-ticket dengan QR Code unik diterbitkan.',
      'Tiket divalidasi saat check-in, dan penyelenggara memantau laporan penjualan serta pembayaran.',
    ],
    devices: 'Pembeli memakai HP atau laptop. Petugas check-in memakai HP atau tablet dengan kamera.',
    internet: 'Membutuhkan koneksi internet untuk pemesanan, pembayaran online melalui payment gateway, dan validasi tiket.',
    security: SECURITY_DEFAULT,
  },
];

// Pemisah "Nama — penjelasan" -> { name, desc }
export const parseFeature = (s) => {
  const i = s.indexOf(' — ');
  return i === -1 ? { name: s, desc: '' } : { name: s.slice(0, i), desc: s.slice(i + 3) };
};

export const getProduct = (slug) => productsData.find((p) => p.slug === slug);

// Ringkasan 4 fitur pertama untuk kartu katalog.
export const getHighlights = (p, n = 4) => {
  const src = p.modules ? p.modules.map((m) => m.title) : p.features.map((f) => parseFeature(f).name);
  return src.slice(0, n);
};
