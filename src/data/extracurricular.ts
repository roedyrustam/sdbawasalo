import { Extracurricular } from '@/types';

export const extracurricularsData: Extracurricular[] = [
  {
    id: 'ekskul-1',
    name: 'Gerakan Pramuka (Gudep 32 Bawasalo)',
    category: 'Wajib & Kepemimpinan',
    description: 'Membentuk kedisiplinan, kemandirian, cinta alam, dan keterampilan dasar kepanduan melalui kegiatan perkemahan, pionering, dan semaphore.',
    schedule: 'Jumat, 14.30 - 16.30 WITA',
    coach: 'Kak Rahmatullah, S.Pd. & Kak Muhammad Tahir, S.Pd.',
    achievements: [
      'Juara II Lomba Pionering Jambore Ranting Segeri 2024',
      'Regu Terdisiplin Kemah Karakter Kabupaten Pangkep',
    ],
    icon: 'Compass',
  },
  {
    id: 'ekskul-2',
    name: 'Sanggar Seni Tari Tradisional Bugis',
    category: 'Kesenian & Budaya Lokal',
    description: 'Melestarikan warisan budaya luhur Sulawesi Selatan melalui tarian Paduppa, Mappadendang, dan kreasi tari Nusantara untuk melatih kelembutan budi dan kepercayaan diri.',
    schedule: 'Rabu, 14.00 - 15.30 WITA',
    coach: 'Ibu Rosdiana, S.Pd.SD.',
    achievements: [
      'Penampil Terbaik Festival Budaya Anak Tingkat Kecamatan Segeri',
      'Penyaji Tari Paduppa pada Pembukaan Acara Dinas Pendidikan Pangkep',
    ],
    icon: 'Music',
  },
  {
    id: 'ekskul-3',
    name: 'Sepak Takraw & Olahraga Prestasi',
    category: 'Olahraga Tradisional & Prestasi',
    description: 'Mengembangkan ketangkasan dan kekompakan tim dalam olahraga kebanggaan masyarakat Sulawesi Selatan, dilengkapi latihan bulutangkis dan atletik.',
    schedule: 'Sabtu, 07.30 - 09.30 WITA',
    coach: 'Pak Rahmatullah, S.Pd.',
    achievements: [
      'Juara III Turnamen Sepak Takraw Usia Dini O2SN Kecamatan Segeri 2024',
      'Finalis Lari Sprint 60m Putra Tingkat SD se-Kecamatan',
    ],
    icon: 'Trophy',
  },
  {
    id: 'ekskul-4',
    name: 'Bimbingan Tahsin & Da\'i Cilik (BTQ)',
    category: 'Keagamaan & Karakter',
    description: 'Pembiasaan melafalkan ayat suci Al-Qur\'an dengan makhraj yang benar, hafalan surat-surat pendek Juz Amma, doa harian, dan latihan pidato dakwah.',
    schedule: 'Kamis, 14.00 - 15.30 WITA',
    coach: 'Ustadz Mustafa, S.Pd.I.',
    achievements: [
      'Juara I Lomba Hifdzil Qur\'an 1 Juz Tingkat SD Segeri 2024',
      'Harapan I Da\'i Cilik Semarak Muharram Kabupaten Pangkep',
    ],
    icon: 'BookOpen',
  },
  {
    id: 'ekskul-5',
    name: 'Dokter Kecil & KKR (UKS)',
    category: 'Kesehatan & Sosial',
    description: 'Pelatihan siswa untuk menjadi pelopor hidup bersih dan sehat, pertolongan pertama, pengukuran gizi sebaya, dan kebersihan lingkungan sekolah.',
    schedule: 'Selasa, 14.00 - 15.00 WITA',
    coach: 'Ibu Andi Nurhalimah, S.Pd.',
    achievements: [
      'Sekolah Bebas Jentik Nyamuk Binaan Puskesmas Segeri 2024',
      'Duta Cuci Tangan Pakai Sabun (CTPS) Sekolah Ramah Anak',
    ],
    icon: 'HeartPulse',
  },
];
