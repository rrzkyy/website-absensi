import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Hadirin — Sistem Absensi",
  description: "Sistem absensi karyawan dengan dashboard admin dan notifikasi WhatsApp."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
