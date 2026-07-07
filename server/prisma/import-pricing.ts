import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Mengimpor data Paket Harga...");
  
  // Clean existing plans
  await prisma.pricingPlan.deleteMany({});
  
  // Seed new plans (both monthly and annual)
  const pricingPlans = [
    { billing: "monthly", name: "Starter", price: 99, desc: "Untuk usaha kecil yang baru mulai digital", color: "#1a6bff", features: "1 Toko,POS System,Inventory Basic,Laporan Harian,Support Email,500 Transaksi/bulan,Cloud Backup", popular: false },
    { billing: "monthly", name: "Business", price: 249, desc: "Solusi terbaik untuk UMKM berkembang", color: "#1a6bff", features: "3 Toko,Semua Fitur Starter,AI Analytics,Employee Mgmt,WhatsApp Order,QR Payment,Support 24/7,Unlimited Transaksi,Custom Report", popular: true },
    { billing: "monthly", name: "Enterprise", price: 599, desc: "Untuk bisnis multi-cabang dan skala besar", color: "#1a6bff", features: "Unlimited Toko,Semua Fitur Business,Dedicated Support,Custom Integration,API Access,SLA 99.9%,On-site Training,White Label Option", popular: false },
    { billing: "annual", name: "Starter", price: 79, desc: "Untuk usaha kecil yang baru mulai digital", color: "#1a6bff", features: "1 Toko,POS System,Inventory Basic,Laporan Harian,Support Email,500 Transaksi/bulan,Cloud Backup", popular: false },
    { billing: "annual", name: "Business", price: 199, desc: "Solusi terbaik untuk UMKM berkembang", color: "#1a6bff", features: "3 Toko,Semua Fitur Starter,AI Analytics,Employee Mgmt,WhatsApp Order,QR Payment,Support 24/7,Unlimited Transaksi,Custom Report", popular: true },
    { billing: "annual", name: "Enterprise", price: 479, desc: "Untuk bisnis multi-cabang dan skala besar", color: "#1a6bff", features: "Unlimited Toko,Semua Fitur Business,Dedicated Support,Custom Integration,API Access,SLA 99.9%,On-site Training,White Label Option", popular: false }
  ];

  for (const p of pricingPlans) {
    await prisma.pricingPlan.create({ data: p });
  }

  console.log("✓ Berhasil mengimpor 6 Paket Harga ke database SQLite!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
