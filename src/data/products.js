export const productsData = [
  // A. Registration & Attendance
  { 
    slug: "event-registration", category: "Registration & Attendance", status: "Available",
    title: { en: "Event Registration", id: "Registrasi Event" },
    desc: { en: "Digital participant registration system.", id: "Sistem pendaftaran peserta secara digital." },
    features: { 
      en: ["Registration form", "Participant data", "Participant category", "Quota settings", "Auto registration number", "Export Excel"],
      id: ["Formulir pendaftaran", "Data peserta", "Kategori peserta", "Pengaturan kuota", "Nomor registrasi otomatis", "Export Excel"]
    },
    useCases: { en: "Seminars, conferences, workshops, training, and gatherings.", id: "Seminar, konferensi, workshop, pelatihan, dan gathering." }
  },
  { 
    slug: "qr-checkin", category: "Registration & Attendance", status: "Available",
    title: { en: "QR Check-in", id: "QR Check-in" },
    desc: { en: "Attendance validation system using QR Code.", id: "Sistem validasi kehadiran peserta menggunakan QR Code." },
    features: { 
      en: ["Unique QR per participant", "Camera scanning", "Ticket validation", "Double check-in prevention", "Multi-officer"],
      id: ["QR unik setiap peserta", "Pemindaian kamera", "Validasi tiket", "Pencegahan check-in ganda", "Multi-petugas"]
    },
    useCases: { en: "Seminars, concerts, conferences, exhibitions, and corporate events.", id: "Seminar, konser, konferensi, pameran, dan acara perusahaan." }
  },
  { 
    slug: "e-badge", category: "Registration & Attendance", status: "Available",
    title: { en: "E-Badge & ID Card", id: "E-Badge & ID Card" },
    desc: { en: "Digital identity card generation system.", id: "Sistem pembuatan kartu identitas digital." },
    features: { 
      en: ["Badge template", "Participant photo", "QR Code", "Download PDF"],
      id: ["Template badge", "Foto peserta", "QR Code", "Download PDF"]
    },
    useCases: { en: "Seminars, conferences, exhibitions, and formal events.", id: "Seminar, konferensi, pameran, dan acara formal." }
  },
  { 
    slug: "digital-guest-book", category: "Registration & Attendance", status: "Available",
    title: { en: "Digital Guest Book", id: "Buku Tamu Digital" },
    desc: { en: "Digital guest book system.", id: "Sistem buku tamu digital." },
    features: { 
      en: ["Guest form", "Visitor identity", "Arrival time", "Export report"],
      id: ["Formulir tamu", "Identitas pengunjung", "Waktu kedatangan", "Export laporan"]
    },
    useCases: { en: "Corporate events, institutional visits, and exhibitions.", id: "Acara perusahaan, kunjungan instansi, dan pameran." }
  },
  { 
    slug: "invitation-rsvp", category: "Registration & Attendance", status: "Available",
    title: { en: "Invitation & RSVP", id: "Undangan & RSVP" },
    desc: { en: "Digital invitation and attendance confirmation system.", id: "Sistem undangan digital dan konfirmasi kehadiran." },
    features: { 
      en: ["Invitation template", "Attendance confirmation", "RSVP recap", "WhatsApp link"],
      id: ["Template undangan", "Konfirmasi hadir", "Rekap RSVP", "Tautan WhatsApp"]
    },
    useCases: { en: "Weddings, gatherings, VIP events, and corporate events.", id: "Wedding, gathering, acara VIP, dan corporate event." }
  },
  { 
    slug: "visitor-management", category: "Registration & Attendance", status: "Available",
    title: { en: "Visitor Management", id: "Manajemen Pengunjung" },
    desc: { en: "Visitor management system.", id: "Sistem pengelolaan pengunjung." },
    features: { 
      en: ["Visitor registration", "Check-in/out time", "Visit history"],
      id: ["Registrasi pengunjung", "Waktu masuk/keluar", "Riwayat kunjungan"]
    },
    useCases: { en: "Exhibitions, expos, open houses, and public events.", id: "Exhibition, expo, open house, dan acara publik." }
  },
  { 
    slug: "ticketing-system", category: "Registration & Attendance", status: "Available",
    title: { en: "Ticketing System", id: "Sistem Tiket" },
    desc: { en: "Event ticket management system.", id: "Sistem pengelolaan tiket acara." },
    features: { 
      en: ["Ticket categories", "QR Code", "Ticket validation", "Sales recap"],
      id: ["Kategori tiket", "QR Code", "Validasi tiket", "Rekap penjualan"]
    },
    useCases: { en: "Concerts, paid seminars, workshops, and festivals.", id: "Konser, seminar berbayar, workshop, dan festival." }
  },

  // B. Event Experience
  { 
    slug: "lucky-draw", category: "Event Experience", status: "Available",
    title: { en: "Lucky Draw", id: "Lucky Draw" },
    desc: { en: "Digital participant drawing system.", id: "Sistem pengundian peserta secara digital." },
    features: { 
      en: ["Random drawing", "Animation", "Large screen display"],
      id: ["Pengundian acak", "Animasi", "Tampilan layar besar"]
    },
    useCases: { en: "Seminar door prizes, gatherings, and corporate events.", id: "Doorprize seminar, gathering, dan acara perusahaan." }
  },
  { 
    slug: "live-polling-quiz", category: "Event Experience", status: "Available",
    title: { en: "Live Polling & Quiz", id: "Live Polling & Quiz" },
    desc: { en: "Interactive polling and quiz system.", id: "Sistem polling dan kuis interaktif." },
    features: { 
      en: ["Real-time voting", "Score calculation", "Answer recap"],
      id: ["Voting real-time", "Perhitungan skor", "Rekap jawaban"]
    },
    useCases: { en: "Seminars, workshops, and conferences.", id: "Seminar, workshop, dan konferensi." }
  },
  { 
    slug: "souvenir-redemption", category: "Event Experience", status: "Available",
    title: { en: "Souvenir Redemption", id: "Penukaran Souvenir" },
    desc: { en: "Souvenir redemption system.", id: "Sistem penukaran souvenir." },
    features: { 
      en: ["QR validation", "Double redemption prevention", "Stock recap"],
      id: ["Validasi QR", "Pencegahan penukaran ganda", "Rekap stok"]
    },
    useCases: { en: "Seminars, gatherings, and exhibitions.", id: "Seminar, gathering, dan pameran." }
  },
  { 
    slug: "seating-management", category: "Event Experience", status: "Available",
    title: { en: "Seating Management", id: "Manajemen Tempat Duduk" },
    desc: { en: "Seating arrangement system.", id: "Sistem pengaturan tempat duduk." },
    features: { 
      en: ["Seat map", "Participant placement", "Seat status"],
      id: ["Denah kursi", "Penempatan peserta", "Status kursi"]
    },
    useCases: { en: "Weddings, gala dinners, conferences.", id: "Wedding, gala dinner, konferensi." }
  },
  { 
    slug: "digital-photobooth", category: "Event Experience", status: "Available",
    title: { en: "Digital Photobooth", id: "Photobooth Digital" },
    desc: { en: "Digital photo system with event frame.", id: "Sistem foto digital dengan frame acara." },
    features: { 
      en: ["Frame template", "Photo preview", "QR photo access"],
      id: ["Template frame", "Preview foto", "QR akses foto"]
    },
    useCases: { en: "Weddings, exhibitions, gatherings, and promotions.", id: "Wedding, pameran, gathering, dan promosi." }
  },
  { 
    slug: "social-media-wall", category: "Event Experience", status: "Coming Soon",
    title: { en: "Social Media Wall", id: "Social Media Wall" },
    desc: { en: "Display social media content on event screen.", id: "Sistem tampilan konten media sosial pada layar acara." },
    features: { 
      en: ["Content moderation", "Hashtag settings", "Slideshow"],
      id: ["Moderasi konten", "Pengaturan hashtag", "Slideshow"]
    },
    useCases: { en: "Concerts, conferences, gatherings, and communities.", id: "Konser, konferensi, gathering, dan komunitas." }
  },

  // C. Event Operations
  { 
    slug: "event-dashboard", category: "Event Operations", status: "Available",
    title: { en: "Event Management Dashboard", id: "Dashboard Acara" },
    desc: { en: "Central event monitoring dashboard.", id: "Dashboard pusat pemantauan acara." },
    features: { 
      en: ["Event summary", "Ticket statistics", "Attendance graph"],
      id: ["Ringkasan acara", "Statistik tiket", "Grafik kehadiran"]
    },
    useCases: { en: "All types of events.", id: "Semua jenis acara." }
  },
  { 
    slug: "event-rundown", category: "Event Operations", status: "Available",
    title: { en: "Event Rundown Management", id: "Manajemen Rundown" },
    desc: { en: "Event schedule management system.", id: "Sistem pengelolaan susunan acara." },
    features: { 
      en: ["Activity list", "Start/end time", "Activity status"],
      id: ["Daftar kegiatan", "Waktu mulai/selesai", "Status kegiatan"]
    },
    useCases: { en: "All types of events.", id: "Semua jenis acara." }
  },
  { 
    slug: "crew-management", category: "Event Operations", status: "Available",
    title: { en: "Crew Management", id: "Manajemen Kru" },
    desc: { en: "Crew and committee management system.", id: "Sistem pengelolaan kru dan panitia." },
    features: { 
      en: ["Member data", "Task division", "Work schedule"],
      id: ["Data anggota", "Pembagian tugas", "Jadwal kerja"]
    },
    useCases: { en: "All types of events.", id: "Semua jenis acara." }
  },
  { 
    slug: "speaker-session", category: "Event Operations", status: "Available",
    title: { en: "Speaker & Session Management", id: "Manajemen Pembicara & Sesi" },
    desc: { en: "Speaker and session management system.", id: "Sistem pengelolaan pembicara dan sesi acara." },
    features: { 
      en: ["Speaker profile", "Session schedule", "Presentation order"],
      id: ["Profil pembicara", "Jadwal sesi", "Urutan presentasi"]
    },
    useCases: { en: "Seminars, conferences, workshops.", id: "Seminar, konferensi, workshop." }
  },
  { 
    slug: "vendor-management", category: "Event Operations", status: "Available",
    title: { en: "Vendor Management", id: "Manajemen Vendor" },
    desc: { en: "Vendor management system.", id: "Sistem pengelolaan vendor." },
    features: { 
      en: ["Vendor data", "Partnership value", "Vendor history"],
      id: ["Data vendor", "Nilai kerja sama", "Riwayat vendor"]
    },
    useCases: { en: "Exhibitions, concerts, large events.", id: "Pameran, konser, acara besar." }
  },
  { 
    slug: "equipment-inventory", category: "Event Operations", status: "Available",
    title: { en: "Equipment & Inventory", id: "Peralatan & Inventaris" },
    desc: { en: "Event equipment inventory system.", id: "Sistem inventaris perlengkapan acara." },
    features: { 
      en: ["Equipment data", "Borrowing", "Usage history"],
      id: ["Data peralatan", "Peminjaman", "Riwayat penggunaan"]
    },
    useCases: { en: "All types of events.", id: "Semua jenis acara." }
  },

  // D. Reporting & Business
  { 
    slug: "e-certificate", category: "Reporting & Business", status: "Available",
    title: { en: "E-Certificate", id: "E-Sertifikat" },
    desc: { en: "Electronic certificate generation system.", id: "Sistem pembuatan sertifikat elektronik." },
    features: { 
      en: ["Mass generation", "Verification QR", "Download PDF"],
      id: ["Generate massal", "QR verifikasi", "Download PDF"]
    },
    useCases: { en: "Seminars, training, workshops.", id: "Seminar, pelatihan, workshop." }
  },
  { 
    slug: "sponsorship-management", category: "Reporting & Business", status: "Available",
    title: { en: "Sponsorship Management", id: "Manajemen Sponsorship" },
    desc: { en: "Sponsor management system.", id: "Sistem pengelolaan sponsor." },
    features: { 
      en: ["Sponsorship packages", "Payment status", "Sponsor benefits"],
      id: ["Paket sponsorship", "Status pembayaran", "Benefit sponsor"]
    },
    useCases: { en: "Sponsored events, exhibitions, concerts.", id: "Acara bersponsor, pameran, konser." }
  },
  { 
    slug: "event-budget", category: "Reporting & Business", status: "Available",
    title: { en: "Event Budget Management", id: "Manajemen Anggaran" },
    desc: { en: "Event budget management system.", id: "Sistem pengelolaan anggaran acara." },
    features: { 
      en: ["Budget plan", "Realization", "Financial report"],
      id: ["Rencana anggaran", "Realisasi", "Laporan keuangan"]
    },
    useCases: { en: "All types of events.", id: "Semua jenis acara." }
  },
  { 
    slug: "event-feedback", category: "Reporting & Business", status: "Available",
    title: { en: "Event Feedback & Survey", id: "Feedback & Survey" },
    desc: { en: "Event evaluation system.", id: "Sistem evaluasi acara." },
    features: { 
      en: ["Evaluation form", "Statistics", "Survey recap"],
      id: ["Formulir evaluasi", "Statistik", "Rekap hasil survei"]
    },
    useCases: { en: "Seminars, conferences, gatherings.", id: "Seminar, konferensi, gathering." }
  },
  { 
    slug: "event-analytics", category: "Reporting & Business", status: "Available",
    title: { en: "Event Analytics & Reporting", id: "Analitik & Pelaporan" },
    desc: { en: "Event analysis and reporting system.", id: "Sistem analisis dan pelaporan acara." },
    features: { 
      en: ["Attendance percentage", "Activity reports", "Export PDF/Excel"],
      id: ["Persentase kehadiran", "Laporan aktivitas", "Export PDF/Excel"]
    },
    useCases: { en: "All types of events.", id: "Semua jenis acara." }
  },
];
