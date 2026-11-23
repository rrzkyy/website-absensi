"use client";
import { useState } from "react";
import { Activity, Bell, CalendarDays, CheckCircle2, Clock3, Download, LayoutDashboard, LogOut, MapPin, Menu, Settings, ShieldCheck, Users, X } from "lucide-react";
const stats = [
  {label:"Hadir hari ini",value:"0",note:"Menunggu koneksi database",icon:Users},
  {label:"Terlambat",value:"0",note:"Berdasarkan jam kerja",icon:Clock3},
  {label:"Izin / Sakit",value:"0",note:"Menunggu verifikasi admin",icon:CalendarDays},
  {label:"Tidak hadir",value:"0",note:"Hari kerja berjalan",icon:Activity}
];
export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [active,setActive] = useState("Dashboard");
  const nav = [{label:"Dashboard",icon:LayoutDashboard},{label:"Data Karyawan",icon:Users},{label:"Data Absensi",icon:CalendarDays},{label:"Pengaturan",icon:Settings}];
  return <main className="shell">
    <aside className={`sidebar ${menuOpen?"sidebar-open":""}`}>
      <div className="brand"><div className="brand-mark"><CheckCircle2 size={22}/></div><div><strong>hadirin</strong><span>ATTENDANCE SYSTEM</span></div><button className="mobile-close" onClick={()=>setMenuOpen(false)} aria-label="Tutup menu"><X/></button></div>
      <div className="workspace-label">MENU UTAMA</div>
      <nav>{nav.map(({label,icon:Icon})=><button key={label} className={`nav-item ${active===label?"active":""}`} onClick={()=>{setActive(label);setMenuOpen(false)}}><Icon size={18}/><span>{label}</span></button>)}</nav>
      <div className="sidebar-bottom"><div className="secure-note"><ShieldCheck size={18}/><div><b>Data terlindungi</b><span>Akses berbasis peran</span></div></div><button className="nav-item logout"><LogOut size={18}/><span>Keluar</span></button></div>
    </aside>
    {menuOpen&&<button className="scrim" onClick={()=>setMenuOpen(false)} aria-label="Tutup menu"/>}
    <section className="main-area">
      <header className="topbar"><button className="mobile-menu" onClick={()=>setMenuOpen(true)} aria-label="Buka menu"><Menu/></button><div className="breadcrumb">Workspace <span>/</span> <b>{active}</b></div><div className="top-actions"><button className="icon-button" aria-label="Notifikasi"><Bell size={19}/><i/></button><div className="profile"><div className="avatar">AD</div><div><b>Administrator</b><span>Admin</span></div></div></div></header>
      <div className="content">
        <div className="page-heading"><div><div className="eyebrow">OVERVIEW</div><h1>{active}</h1><p>Selamat datang di panel pengelolaan absensi karyawan.</p></div><button className="export-button" onClick={()=>window.alert("Ekspor aktif setelah database dikonfigurasi.")}><Download size={16}/> Ekspor laporan</button></div>
        <div className="notice"><div className="notice-icon"><ShieldCheck size={19}/></div><div><b>Fondasi aplikasi berhasil disiapkan</b><p>Hubungkan Supabase untuk menyimpan dan membaca data absensi secara permanen.</p></div></div>
        <div className="stats-grid">{stats.map(({label,value,note,icon:Icon})=><article className="stat-card" key={label}><div className="stat-top"><span>{label}</span><div className="stat-icon"><Icon size={18}/></div></div><strong>{value}</strong><small>{note}</small></article>)}</div>
        <div className="section-grid"><article className="panel"><div className="panel-heading"><div><h2>Aktivitas absensi</h2><p>Ringkasan kehadiran terbaru</p></div><span className="tag">Hari ini</span></div><div className="empty-state"><div className="empty-icon"><CalendarDays size={25}/></div><b>Belum ada data absensi</b><span>Data akan tampil setelah karyawan melakukan absen.</span></div></article>
        <article className="panel"><div className="panel-heading"><div><h2>Status sistem</h2><p>Komponen aplikasi</p></div></div><div className="system-list"><div><span className="system-dot pending"/><span>Database Supabase</span><b>Belum dikonfigurasi</b></div><div><span className="system-dot pending"/><span>WhatsApp API</span><b>Belum dikonfigurasi</b></div><div><span className="system-dot ready"/><span>Antarmuka admin</span><b>Siap dikembangkan</b></div></div><div className="setup-hint"><MapPin size={16}/> GPS akan direkam saat fitur lokasi diaktifkan.</div></article></div>
        <footer>© 2026 Hadirin Attendance System <span>•</span> Pengelolaan kehadiran yang lebih mudah</footer>
      </div>
    </section>
  </main>;
}
