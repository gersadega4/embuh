# CYSIC x IRYS Mining Game (Prototype)


**Tujuan:**
Simulasi sederhana mining game yang memadukan konsep hardware compute (Cysic) dan penyimpanan/verifikasi data (Irys).


## Fitur
- Connect wallet via MetaMask
- Simulasi mining (generate payload)
- Validasi signature
- Simpan hasil (hash payload) ke endpoint /api (rencana: ke Irys)
- Ready for deploy ke Vercel


## Cara jalankan
```bash
npm install
npm run dev # jalankan frontend di http://localhost:3000
npm run sim # kirim mining data dummy dari local miner
```


## Rencana Integrasi Lanjut
1. Ganti simulasi dengan data nyata dari Cysic hardware API / local compute proof.
2. Tambahkan penyimpanan on-chain ke Irys (gunakan SDK atau REST API mereka).
3. Leaderboard hasil mining di DB (Supabase / PlanetScale).
4. Sistem reward internal / tokenized.


## Deploy ke Vercel
1. Hubungkan akun GitHub kamu ke Vercel.
2. Import repository ini.
3. Deploy langsung (frontend + API routes otomatis).


---
Lisensi: MIT (gratis digunakan untuk edukasi dan prototyping)
*/
