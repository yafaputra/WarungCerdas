import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Mengimpor data FAQ...");
  
  // Clean existing FAQs
  await prisma.faq.deleteMany({});
  
  // Seed FAQ data
  const faqs = [
    { q: "Apakah data bisnis saya aman?", a: "Ya, sangat aman. Semua data dienkripsi dengan standar AES-256 dan disimpan di server cloud tier-1. Kami melakukan backup otomatis setiap hari dan memiliki sertifikasi keamanan ISO 27001." },
    { q: "Apakah bisa digunakan di banyak perangkat?", a: "Tentu! WarungCerdas bisa diakses dari browser (desktop/laptop), aplikasi Android, dan iOS secara bersamaan. Semua data tersinkronisasi real-time antar perangkat." },
    { q: "Apakah ada masa trial gratis?", a: "Ya! Kami memberikan trial gratis 14 hari untuk semua paket tanpa perlu kartu kredit. Kamu bisa menjelajahi semua fitur secara penuh selama masa trial." },
    { q: "Apakah cocok untuk usaha kecil sekalipun?", a: "Sangat cocok! WarungCerdas dirancang khusus untuk UMKM Indonesia, mulai dari warung kecil hingga toko multi-cabang. Paket Starter kami sangat terjangkau dan mudah digunakan." },
    { q: "Bagaimana layanan customer support?", a: "Kami menyediakan support via WhatsApp, email, dan live chat. Untuk paket Business ke atas, support tersedia 24/7. Tim kami siap membantu onboarding dan troubleshooting kapanpun." },
    { q: "Apakah perlu keahlian teknis untuk menggunakannya?", a: "Sama sekali tidak! Interface WarungCerdas dirancang sesederhana mungkin. Karyawan tanpa latar belakang IT pun bisa langsung menggunakannya dalam hitungan menit." },
    { q: "Apakah bisa digunakan di HP saja?", a: "Bisa! Aplikasi mobile kami tersedia di Google Play Store dan App Store. Semua fitur utama bisa diakses dari smartphone, termasuk POS, monitoring stok, dan laporan keuangan." }
  ];

  for (const f of faqs) {
    await prisma.faq.create({ data: f });
  }

  console.log("✓ Berhasil mengimpor 7 FAQ ke database SQLite!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
