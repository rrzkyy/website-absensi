# Hadirin — Website Absensi

Fondasi aplikasi absensi karyawan berbasis Next.js dan Supabase.

## Menjalankan secara lokal
1. Install Node.js 20 atau lebih baru.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env.local`, lalu isi kredensial Supabase.
4. Jalankan SQL pada `supabase/schema.sql` di Supabase SQL Editor.
5. Jalankan `npm run dev` dan buka http://localhost:3000.

## Konfigurasi
- Buat project di https://supabase.com lalu isi URL dan anon key.
- Simpan service role key hanya di server; jangan pernah gunakan awalan NEXT_PUBLIC_ untuk secret.
- WhatsApp memerlukan akun Meta WhatsApp Business Platform, access token, phone number ID, dan template pesan yang disetujui bila diwajibkan.
- Jangan masukkan kredensial rahasia ke GitHub. Gunakan environment variables di hosting.

## Status
Versi awal berisi kerangka Next.js, dashboard admin responsif, dan klien Supabase. Autentikasi, proses absensi, data langsung, serta notifikasi WhatsApp perlu dilanjutkan dan diuji sebelum digunakan operasional.
