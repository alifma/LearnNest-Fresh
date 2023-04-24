# Nest JS
## What is Nest JS?
- Node JS backend
- Scalable & Maintaable
- Typescript Friendly
- TEstable, Scalable
- "Angulare for backend"
- Nest ini kayak Express JS tapi lebih ada flownya, sudah terstruktur kodenya, jadi sudah terstandar dan developer baru tidak akan kesulitan memahami template atau struktur yangberbeda beda 

## WHy Nest?
- Structure
- Microservices
- Modularity
- Popularity
- Typescript


## Nest Structure
- src: Source file, tempat menyimpan source code 
- test: Testfile, tempat menyimpan kode testing, tapi kalau UT sih pakai yang lainnya
- app.module.ts: app.ts kalau di react, file utama dari aplikasi

### Module 
- Module diawali dengan @Module
- Module itu bisa import modul lainnya, app.module.ts itu file module utamanya. Biasanya modul dibuat perfeature 'Feature Module'
- start:dev ini pakai seperti watchman, akan restart setiap terubah
- generate module dengan `nest g module MODULE_NAME`, otomatis akan terimport di app.module.ts


### Controller
- Mengatur HTTP request
- Setelah buat controller, maka controllernya harus didefinisikan sebagai controller di module
- Controller dapat request HTTP, lalu dia menjalankan dependency injection dari Service
- Hanya filtering request saja atau setidaknya merapikan request untuk diolah di services

### Provider/Service
- menjalankan logic bisnis untuk nanti dipanggil dibagian controller
- Setelah buat services, maka controllernya harus didefinisikan sebagai provider di module

## Koneksi ke database
- Docker-compose: resep docker yang bisa untuk langsung dijalankan, tanpa perlu setup database di lokal, bisa perkontainer aja 
- Prisma; salah satu pilihan ORM, cukup handle di satu tempat aja untuk digunakan dimana-mana
  - init : initialize project to use prisma
  - studio: membuka prisma studio
  - migrate dev: generate migration 
- Sebelum module import, maka harus perlu di export dulu