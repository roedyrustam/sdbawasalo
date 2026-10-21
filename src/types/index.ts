export interface SchoolProfile {
  npsn: string;
  name: string;
  officialName: string;
  status: 'Negeri' | 'Swasta';
  accreditation: string;
  accreditationGrade: string;
  foundedYear: string;
  principal: {
    name: string;
    nip: string;
    photoUrl: string;
    greeting: string;
  };
  address: {
    street: string;
    village: string;
    district: string;
    regency: string;
    province: string;
    postalCode: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    email: string;
    whatsappHotline: string;
    whatsappNumberOnly: string;
    operationalHours: string;
  };
  stats: {
    totalStudents: number;
    totalTeachers: number;
    totalClasses: number;
    totalRombel: number;
  };
  vision: string;
  missions: string[];
  goals: string[];
  coreValues: {
    title: string;
    localTerm: string;
    description: string;
  }[];
}

export interface Teacher {
  id: string;
  name: string;
  nip: string;
  role: string;
  subject: string;
  education: string;
  status: string;
  photoUrl: string;
  quote?: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Akademik' | 'Olahraga' | 'Penunjang' | 'Kesehatan & Ibadah';
  description: string;
  condition: string;
  features: string[];
  imageUrl: string;
}

export interface Extracurricular {
  id: string;
  name: string;
  category: string;
  description: string;
  schedule: string;
  coach: string;
  achievements: string[];
  icon: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Kegiatan' | 'Prestasi' | 'Pengumuman' | 'Kurikulum';
  date: string;
  author: string;
  readTime: string;
  featured: boolean;
  imageUrl: string;
}

export interface PpdbRegistration {
  id: string;
  regNumber: string;
  submittedAt: string;
  studentName: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  gender: 'Laki-laki' | 'Perempuan';
  religion: string;
  address: string;
  parentFather: string;
  parentMother: string;
  parentPhone: string;
  parentJob: string;
  previousSchool: string;
  status: 'Menunggu Verifikasi' | 'Berkas Diterima' | 'Lulus Seleksi' | 'Perlu Perbaikan';
}
