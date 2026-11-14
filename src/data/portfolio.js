// PORTOFOLIO. Tambahkan proyek NYATA di array `portfolioItems`. Selama array kosong:
//   - halaman /portfolio tampil "sedang disiapkan" dan TIDAK diindeks Google,
//   - /portfolio tidak masuk sitemap, dan menu "Portofolio" serta blok beranda disembunyikan.
// Begitu ada satu item, semuanya muncul otomatis.
//
// Cara menambah: taruh foto di folder public/portfolio/ (mis. public/portfolio/nama-proyek-1.webp),
// lalu salin contoh di bawah. Pastikan sudah mendapat izin memakai screenshot & data klien.
//
// internal: true  -> proyek pengembangan internal (diberi label, tidak mengesankan dipakai klien)
// link            -> URL website/demo (opsional, isi null bila tidak ada)
//
// CONTOH (hapus tanda komentar dan ganti dengan data asli):
// {
//   slug: 'nama-proyek',
//   name: 'Nama Proyek',
//   category: 'Event Technology',   // Event Technology | Business Management System | Website Development | Custom Software Development
//   desc: 'Deskripsi singkat proyek.',
//   need: 'Permasalahan atau kebutuhan.',
//   solution: 'Solusi yang dibuat.',
//   tech: ['React', 'Tailwind CSS'],
//   images: [{ src: '/portfolio/nama-proyek-1.webp', alt: 'Tampilan dashboard' }],
//   link: null,
//   internal: false,
// },

export const PORTFOLIO_CATEGORIES = [
  'Event Technology',
  'Business Management System',
  'Website Development',
  'Custom Software Development',
];

export const portfolioItems = [];
