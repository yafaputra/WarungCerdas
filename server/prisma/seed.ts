import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Hero Section
  await prisma.hero.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      badge: "Platform #1 UMKM Indonesia",
      title: "Transformasi Digital UMKM Indonesia Dimulai dari Sini",
      description: "Kelola transaksi, stok barang, laporan keuangan, analitik bisnis, dan operasional usaha dalam satu platform cloud terintegrasi yang cepat, modern, dan mudah digunakan.",
      btn1Text: "Coba Gratis 14 Hari",
      btn1Link: "#",
      btn2Text: "Lihat Demo",
      btn2Link: "#",
      rating: 4.9,
      umkmCountText: "Dipercaya 10.000+ UMKM Indonesia",
    },
  });

  // 2. Partner Section
  const partners = [
    "Warung Nusantara", "Toko Maju Jaya", "Kopi Lokal", "Sembako Kita", "UMKM Mart",
    "Dapur Bunda", "Toko Berkah", "Warung Pak Budi"
  ];
  await prisma.partner.deleteMany({});
  for (const name of partners) {
    await prisma.partner.create({ data: { name } });
  }

  // 3. Problem Section
  const problems = [
    { icon: "FileText", title: "Pencatatan Manual", desc: "Transaksi dicatat di buku, rawan salah hitung dan sulit dilacak." },
    { icon: "Package", title: "Kesalahan Stok", desc: "Stok sering tidak cocok antara fisik dan catatan, menyebabkan kerugian." },
    { icon: "CreditCard", title: "Arus Kas Tak Terpantau", desc: "Sulit memantau pemasukan dan pengeluaran secara real-time." },
    { icon: "BarChart2", title: "Laporan Keuangan Berantakan", desc: "Tidak ada laporan laba rugi yang rapi untuk evaluasi bisnis." },
    { icon: "Users", title: "Data Bisnis Tersebar", desc: "Data penjualan, stok, dan pelanggan tersebar di berbagai tempat." },
    { icon: "Zap", title: "Keputusan Berdasarkan Intuisi", desc: "Tanpa data akurat, keputusan bisnis sering kurang tepat." },
    { icon: "FileWarning", title: "Human Error Tinggi", desc: "Kesalahan manusia dalam pencatatan manual merugikan bisnis." },
    { icon: "Satellite", title: "Tidak Bisa Monitor Jarak Jauh", desc: "Pemilik tidak bisa memantau toko saat sedang tidak di tempat." }
  ];
  await prisma.problem.deleteMany({});
  for (const p of problems) {
    await prisma.problem.create({ data: p });
  }

  // 4. Solution Section
  await prisma.solutionSection.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      badge: "✦ Solusi Lengkap",
      title: "Satu Platform untuk Seluruh Operasional Bisnis Anda",
      description: "WarungCerdas hadir sebagai platform SaaS berbasis cloud yang mengintegrasikan seluruh kebutuhan operasional UMKM — dari kasir, stok, laporan keuangan, hingga analitik bisnis berbasis AI.",
      btnText: "Pelajari Lebih Lanjut →",
      btnLink: "#",
    },
  });

  // 5. Solution Points
  const points = [
    { icon: "Cloud", text: "SaaS berbasis cloud, akses dari mana saja" },
    { icon: "Link", text: "Sistem terintegrasi satu dashboard" },
    { icon: "Zap", text: "Data real-time tanpa delay" },
    { icon: "Bot", text: "Otomatisasi operasional dengan AI" },
    { icon: "BarChart2", text: "Business intelligence untuk UMKM" }
  ];
  await prisma.solutionPoint.deleteMany({});
  for (const pt of points) {
    await prisma.solutionPoint.create({ data: pt });
  }

  // 6. Feature Section
  const features = [
    { icon: "Monitor", title: "Smart POS System", desc: "Kasir digital cepat dengan barcode scanner, receipt otomatis, dan multi-payment.", color: "#1a6bff" },
    { icon: "Package", title: "Inventory Management", desc: "Kelola stok secara real-time dengan alert otomatis saat stok mendekati minimum.", color: "#00d4ff" },
    { icon: "Wallet", title: "Financial Automation", desc: "Laporan keuangan otomatis: laba rugi, neraca, dan arus kas harian.", color: "#00e5a0" },
    { icon: "BarChart3", title: "AI Sales Analytics", desc: "Analitik penjualan berbasis AI untuk memahami tren dan peluang pertumbuhan.", color: "#a78bfa" },
    { icon: "Store", title: "Multi Store Management", desc: "Kelola beberapa cabang toko dari satu dashboard terpusat.", color: "#f59e0b" },
    { icon: "Users", title: "Employee Management", desc: "Absensi, jadwal, komisi, dan performa karyawan dalam satu sistem.", color: "#ec4899" },
    { icon: "Users", title: "Customer Database", desc: "CRM sederhana untuk mencatat data pelanggan dan riwayat pembelian.", color: "#3d85ff" },
    { icon: "BarChart3", title: "Profit & Loss Report", desc: "Laporan laba rugi otomatis dengan visualisasi grafik yang mudah dipahami.", color: "#00d4ff" },
    { icon: "Bell", title: "Smart Notification", desc: "Notifikasi cerdas untuk stok kritis, pembayaran jatuh tempo, dan anomali penjualan.", color: "#00e5a0" },
    { icon: "Cloud", title: "Cloud Sync", desc: "Sinkronisasi data real-time ke cloud, backup otomatis setiap hari.", color: "#1a6bff" },
    { icon: "Smartphone", title: "Mobile App", desc: "Aplikasi mobile untuk iOS dan Android — monitor bisnis dari genggaman.", color: "#a78bfa" },
    { icon: "CreditCard", title: "QR Payment", desc: "Terima pembayaran via QRIS, GoPay, OVO, Dana, dan semua e-wallet.", color: "#f59e0b" },
    { icon: "MessageCircle", title: "WhatsApp Order", desc: "Terima pesanan via WhatsApp dan proses otomatis ke sistem POS.", color: "#25d366" },
    { icon: "Truck", title: "Supplier Management", desc: "Kelola supplier, PO, dan jadwal pengiriman barang secara digital.", color: "#ec4899" },
    { icon: "WandSparkles", title: "Restock Prediction", desc: "AI memprediksi kapan stok habis berdasarkan tren penjualan historis.", color: "#a78bfa" },
    { icon: "Satellite", title: "Real-time Monitoring", desc: "Monitor seluruh aktivitas bisnis secara live dari mana saja.", color: "#00d4ff" }
  ];
  await prisma.feature.deleteMany({});
  for (const f of features) {
    await prisma.feature.create({ data: f });
  }

  // 7. Dashboard Preview
  await prisma.dashboardPreview.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      badge: "TrendingUp",
      title: "Dashboard Modern yang Intuitif & Powerful",
      kpi1Label: "Total Revenue", kpi1Value: "Rp 12.4Jt", kpi1Change: "+18%",
      kpi2Label: "Total Pelanggan", kpi2Value: "1,847", kpi2Change: "+24%",
      kpi3Label: "Produk Terjual", kpi3Value: "3,291", kpi3Change: "+11%",
      kpi4Label: "Total Transaksi", kpi4Value: "892", kpi4Change: "+9%",
    },
  });

  // 8. Advantage Section
  const advantages = [
    { icon: "Zap", title: "Hemat Waktu Operasional", desc: "Otomatisasi proses manual seperti pencatatan transaksi, pembuatan laporan, dan restock reminder. Hemat hingga 5 jam kerja per hari.", color: "#1a6bff" },
    { icon: "ShieldCheck", title: "Kurangi Human Error", desc: "Sistem digital menggantikan pencatatan manual yang rawan salah. Akurasi data meningkat hingga 99.7%.", color: "#00d4ff" },
    { icon: "Satellite", title: "Monitor Bisnis Real-time", desc: "Pantau penjualan, stok, dan keuangan kapanpun dan dimanapun dari smartphone atau laptop.", color: "#00e5a0" },
    { icon: "BarChart2", title: "Keputusan Berbasis Data", desc: "Laporan analitik dan insight AI membantu pemilik bisnis membuat keputusan yang lebih tepat dan menguntungkan.", color: "#a78bfa" },
    { icon: "Lock", title: "Data Tersimpan Aman", desc: "Enkripsi end-to-end dan backup otomatis harian di cloud memastikan data bisnis kamu selalu aman.", color: "#f59e0b" },
    { icon: "TrendingUp", title: "Dukung Pertumbuhan Bisnis", desc: "Skalakan bisnis dari 1 toko menjadi puluhan cabang tanpa kerumitan operasional tambahan.", color: "#ec4899" }
  ];
  await prisma.advantage.deleteMany({});
  for (const adv of advantages) {
    await prisma.advantage.create({ data: adv });
  }

  // 9. Step Section
  const steps = [
    { num: "01", icon: "Rocket", title: "Daftar Akun", desc: "Buat akun gratis dalam 2 menit. Tidak perlu kartu kredit atau instalasi software.", time: "2 menit" },
    { num: "02", icon: "Settings", title: "Input Data Bisnis", desc: "Masukkan data produk, harga, dan informasi toko. Atau impor dari Excel/spreadsheet.", time: "15 menit" },
    { num: "03", icon: "PartyPopper", title: "Mulai Kelola Bisnis", desc: "Langsung gunakan semua fitur — POS, inventory, laporan, dan analitik AI.", time: "Selamanya" }
  ];
  await prisma.step.deleteMany({});
  for (const s of steps) {
    await prisma.step.create({ data: s });
  }

  // 10. Stat Section
  const stats = [
    { value: 10000, suffix: "+", label: "UMKM Aktif", icon: "Store", decimal: false },
    { value: 1, suffix: "Jt+", label: "Transaksi Diproses", icon: "Zap", decimal: false },
    { value: 99.9, suffix: "%", label: "Uptime", icon: "Rocket", decimal: true },
    { value: 50, suffix: "+", label: "Kota di Indonesia", icon: "MapPin", decimal: false },
    { value: 4.9, suffix: "/5", label: "Rating Pengguna", icon: "Star", decimal: true }
  ];
  await prisma.stat.deleteMany({});
  for (const s of stats) {
    await prisma.stat.create({ data: s });
  }

  // 11. Testimonial Section
  const testimonials = [
    { name: "Budi Santoso", role: "Pemilik Warung Nusantara", city: "Yogyakarta", avatar: "BS", color: "#1a6bff", text: "Sejak pakai WarungCerdas, laporan keuangan saya beres otomatis. Dulu butuh 2 jam ngehitung manual, sekarang tinggal buka dashboard langsung keliatan semua.", rating: 5 },
    { name: "Siti Rahayu", role: "Owner Kopi Lokal", city: "Bandung", avatar: "SR", color: "#00d4ff", text: "Fitur analitik AI-nya keren banget! Saya jadi tahu produk mana yang paling laku dan kapan harus restock. Omzet naik 40% dalam 3 bulan.", rating: 5 },
    { name: "Ahmad Fauzi", role: "Pemilik Sembako Kita", city: "Surabaya", avatar: "AF", color: "#00e5a0", text: "Multi-store management-nya mantap. Saya punya 3 cabang, semua bisa dipantau dari HP. Nggak perlu bolak-balik to toko lagi.", rating: 5 },
    { name: "Dewi Kartika", role: "Owner Dapur Bunda", city: "Jakarta", avatar: "DK", color: "#a78bfa", text: "Interface-nya clean dan mudah dipahami. Karyawan saya yang nggak melek teknologi pun bisa langsung pakai. Support tim-nya juga responsif banget.", rating: 5 },
    { name: "Rudi Hermawan", role: "Pemilik Toko Berkah", city: "Semarang", avatar: "RH", color: "#f59e0b", text: "WhatsApp order integration-nya game changer! Pesanan masuk otomatis ke sistem, nggak ada lagi yang kelewat atau salah catat. Recommended!", rating: 5 }
  ];
  await prisma.testimonial.deleteMany({});
  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t });
  }

  // 12. Pricing Section
  const pricingPlans = [
    { billing: "monthly", name: "Starter", price: 99, desc: "Untuk usaha kecil yang baru mulai digital", color: "#1a6bff", features: "1 Toko,POS System,Inventory Basic,Laporan Harian,Support Email,500 Transaksi/bulan,Cloud Backup", popular: false },
    { billing: "monthly", name: "Business", price: 249, desc: "Solusi terbaik untuk UMKM berkembang", color: "#00d4ff", features: "3 Toko,Semua Fitur Starter,AI Analytics,Employee Mgmt,WhatsApp Order,QR Payment,Support 24/7,Unlimited Transaksi,Custom Report", popular: true },
    { billing: "monthly", name: "Enterprise", price: 599, desc: "Untuk bisnis multi-cabang dan skala besar", color: "#00e5a0", features: "Unlimited Toko,Semua Fitur Business,Dedicated Support,Custom Integration,API Access,SLA 99.9%,On-site Training,White Label Option", popular: false },
    { billing: "annual", name: "Starter", price: 79, desc: "Untuk usaha kecil yang baru mulai digital", color: "#1a6bff", features: "1 Toko,POS System,Inventory Basic,Laporan Harian,Support Email,500 Transaksi/bulan,Cloud Backup", popular: false },
    { billing: "annual", name: "Business", price: 199, desc: "Solusi terbaik untuk UMKM berkembang", color: "#00d4ff", features: "3 Toko,Semua Fitur Starter,AI Analytics,Employee Mgmt,WhatsApp Order,QR Payment,Support 24/7,Unlimited Transaksi,Custom Report", popular: true },
    { billing: "annual", name: "Enterprise", price: 479, desc: "Untuk bisnis multi-cabang dan skala besar", color: "#00e5a0", features: "Unlimited Toko,Semua Fitur Business,Dedicated Support,Custom Integration,API Access,SLA 99.9%,On-site Training,White Label Option", popular: false }
  ];
  await prisma.pricingPlan.deleteMany({});
  for (const p of pricingPlans) {
    await prisma.pricingPlan.create({ data: p });
  }

  // 13. FAQ Section
  const faqs = [
    { q: "Apakah data bisnis saya aman?", a: "Ya, sangat aman. Semua data dienkripsi dengan standar AES-256 dan disimpan di server cloud tier-1. Kami melakukan backup otomatis setiap hari dan memiliki sertifikasi keamanan ISO 27001." },
    { q: "Apakah bisa digunakan di banyak perangkat?", a: "Tentu! WarungCerdas bisa diakses dari browser (desktop/laptop), aplikasi Android, dan iOS secara bersamaan. Semua data tersinkronisasi real-time antar perangkat." },
    { q: "Apakah ada masa trial gratis?", a: "Ya! Kami memberikan trial gratis 14 hari untuk semua paket tanpa perlu kartu kredit. Kamu bisa menjelajahi semua fitur secara penuh selama masa trial." },
    { q: "Apakah cocok untuk usaha kecil sekalipun?", a: "Sangat cocok! WarungCerdas dirancang khusus untuk UMKM Indonesia, mulai dari warung kecil hingga toko multi-cabang. Paket Starter kami sangat terjangkau dan mudah digunakan." },
    { q: "Bagaimana layanan customer support?", a: "Kami menyediakan support via WhatsApp, email, dan live chat. Untuk paket Business ke atas, support tersedia 24/7. Tim kami siap membantu onboarding dan troubleshooting kapanpun." },
    { q: "Apakah perlu keahlian teknis untuk menggunakannya?", a: "Sama sekali tidak! Interface WarungCerdas dirancang sesederhana mungkin. Karyawan tanpa latar belakang IT pun bisa langsung menggunakannya dalam hitungan menit." },
    { q: "Apakah bisa digunakan di HP saja?", a: "Bisa! Aplikasi mobile kami tersedia di Google Play Store dan App Store. Semua fitur utama bisa diakses dari smartphone, termasuk POS, monitoring stok, dan laporan keuangan." }
  ];
  await prisma.faq.deleteMany({});
  for (const f of faqs) {
    await prisma.faq.create({ data: f });
  }

  // 14. CTA Section
  await prisma.ctaSection.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      badge: "✦ Mulai Sekarang",
      title: "Siap Membawa UMKM Anda ke Level Berikutnya?",
      description: "Bergabunglah dengan 10.000+ UMKM Indonesia yang telah sukses mendigitalisasi operasional bisnis mereka dengan WarungCerdas. Coba gratis sekarang!",
      btnText: "Daftar Sekarang — Gratis 14 Hari",
      btnLink: "#",
    },
  });

  // 15. Footer Section
  await prisma.footerInfo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      brandName: "WarungCerdas",
      description: "Platform SaaS terdepan untuk digitalisasi dan optimalisasi UMKM Indonesia. Dari warung kecil hingga toko multi-cabang.",
      email: "hello@warungcerdas.id",
      phone: "+62 812-3456-7890",
      address: "Yogyakarta, Indonesia",
      whatsappUrl: "#",
      websiteUrl: "#",
      facebookUrl: "#",
      youtubeUrl: "#",
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
