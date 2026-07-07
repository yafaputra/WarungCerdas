import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Mengimpor data Partner / Brand...");
  
  // Clean existing partners
  await prisma.partner.deleteMany({});
  
  // Seed partners data
  const partners = [
    { name: "Warung Nusantara" },
    { name: "Toko Maju Jaya" },
    { name: "Kopi Lokal" },
    { name: "Sembako Kita" },
    { name: "UMKM Mart" },
    { name: "Dapur Bunda" },
    { name: "Toko Berkah" },
    { name: "Warung Pak Budi" }
  ];

  for (const p of partners) {
    await prisma.partner.create({ data: p });
  }

  console.log("✓ Berhasil mengimpor 8 Partner / Brand ke database SQLite!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
