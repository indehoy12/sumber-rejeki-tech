# Sumber Rejeki Tech: Company Website

Landing page & katalog produk (React 19 + Vite + Tailwind CSS v4), dua bahasa (ID/EN).

## Menjalankan

```bash
npm install
cp .env.example .env   # Windows PowerShell: Copy-Item .env.example .env
npm run dev            # pengembangan
npm run build          # build produksi ke /dist
npm run preview        # cek hasil build
npm run lint
```

Butuh Node.js 20.19+ atau 22.12+.

## Konfigurasi (`.env`)

| Variabel                    | Fungsi                                                              |
| --------------------------- | ------------------------------------------------------------------- |
| `VITE_SITE_URL`             | Domain situs (canonical & Open Graph)                               |
| `VITE_WHATSAPP_NUMBER`      | Nomor WhatsApp, format `62812...`                                   |
| `VITE_CONTACT_EMAIL`        | Email kontak yang ditampilkan di situs                              |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key Web3Forms. Jika kosong, formulir kontak membuka WhatsApp |

Catatan: variabel `VITE_` ditanam saat build. Setelah mengubah nilainya, jalankan ulang `npm run dev` (lokal) atau deploy ulang (hosting).

## Deploy ke Cloudflare Pages

1. Upload project ke GitHub (file `.env` tidak ikut, sudah di `.gitignore`).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`, output directory: `dist`.
4. Environment variables: semua variabel `VITE_...` di atas, ditambah `NODE_VERSION` = `22`.
5. Setelah domain final aktif, ubah Website URL di pengaturan form Web3Forms ke domain asli.

## Sebelum go-live

- Pastikan domain di `public/sitemap.xml`, `public/robots.txt`, dan JSON-LD di `index.html` sudah domain final.
- Kirim satu pesan tes lewat form di situs live, lalu cek dashboard Web3Forms dan inbox (termasuk Spam).
- Daftarkan situs di Google Search Console dan kirim `sitemap.xml`.
