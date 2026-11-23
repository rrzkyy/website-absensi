# Hadirin — Website Absensi

Fondasi aplikasi absensi berbasis Next.js dan Firebase.

## Menjalankan secara lokal
1. Install Node.js 20 atau lebih baru.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env.local`, lalu isi konfigurasi Firebase Web App.
4. Aktifkan Authentication (Email/Password), Cloud Firestore, dan Storage di Firebase Console.
5. Terapkan aturan keamanan dari `firestore.rules` dan `storage.rules`.
6. Jalankan `npm run dev` dan buka http://localhost:3000.

## Firebase
- Buat project di https://console.firebase.google.com/
- Tambahkan aplikasi Web (ikon </>) lalu salin konfigurasi ke .env.local.
- Firebase Web API key bukan pengganti aturan keamanan. Amankan data dengan Firestore Rules dan Storage Rules.
- Untuk produksi, atur App Check, backup, dan role admin melalui custom claims/server tepercaya. Jangan memberi pengguna hak admin hanya dari input browser.

## WhatsApp
Pengiriman otomatis harus dilakukan dari backend tepercaya (misalnya Cloud Functions), bukan dari browser. Memerlukan akun Meta WhatsApp Business Platform, access token, phone number ID, dan template pesan bila diwajibkan. Jangan commit token rahasia ke GitHub.

## Status
Versi awal berisi dashboard admin responsif dan konfigurasi Firebase client. Login, alur absensi, integrasi data langsung, fungsi WhatsApp, dan pengujian keamanan masih perlu diselesaikan sebelum operasional.
