import { NextRequest, NextResponse } from 'next/server';
import { PpdbRegistration } from '@/types';

// In-memory store with realistic initial registrations for demonstration
let registrations: PpdbRegistration[] = [
  {
    id: 'reg-001',
    regNumber: 'PPDB-2026-001',
    submittedAt: '2026-05-12T08:30:00Z',
    studentName: 'Ahmad Raihan Saputra',
    nik: '7310051205190001',
    birthPlace: 'Pangkep',
    birthDate: '2019-05-12',
    gender: 'Laki-laki',
    religion: 'Islam',
    address: 'Jl. Poros Bawasalo RT 01 / RW 02, Kel. Bawasalo, Segeri',
    parentFather: 'Mansyur',
    parentMother: 'Nurhayati',
    parentPhone: '085299887711',
    parentJob: 'Petani / Wiraswasta',
    previousSchool: 'TK Pertiwi Segeri',
    status: 'Lulus Seleksi',
  },
  {
    id: 'reg-002',
    regNumber: 'PPDB-2026-002',
    submittedAt: '2026-05-14T10:15:00Z',
    studentName: 'Nur Salsabila Azzahra',
    nik: '7310055508190002',
    birthPlace: 'Bawasalo',
    birthDate: '2019-08-15',
    gender: 'Perempuan',
    religion: 'Islam',
    address: 'Bawasalo Selatan, Kec. Segeri, Kab. Pangkep',
    parentFather: 'Syamsuddin',
    parentMother: 'Fatmawati',
    parentPhone: '081344556677',
    parentJob: 'Pedagang',
    previousSchool: 'RA Al-Ikhlas Segeri',
    status: 'Berkas Diterima',
  },
  {
    id: 'reg-003',
    regNumber: 'PPDB-2026-003',
    submittedAt: '2026-05-16T11:45:00Z',
    studentName: 'Muhammad Fadhil Pratama',
    nik: '7310052011190003',
    birthPlace: 'Segeri',
    birthDate: '2019-11-20',
    gender: 'Laki-laki',
    religion: 'Islam',
    address: 'Kampung Baru Bawasalo, Segeri, Pangkep',
    parentFather: 'Ilyas',
    parentMother: 'Rosmini',
    parentPhone: '082199001122',
    parentJob: 'Karyawan Swasta',
    previousSchool: 'TK Dharma Wanita Bawasalo',
    status: 'Menunggu Verifikasi',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const format = searchParams.get('format');

  if (search) {
    const q = search.toLowerCase().trim();
    const filtered = registrations.filter(
      (r) =>
        r.regNumber.toLowerCase().includes(q) ||
        r.nik.includes(q) ||
        r.studentName.toLowerCase().includes(q)
    );
    return NextResponse.json({ success: true, count: filtered.length, data: filtered });
  }

  // Support exporting CSV directly from API
  if (format === 'csv') {
    const header = 'Nomor Pendaftaran,Tanggal,Nama Siswa,NIK,Tempat Lahir,Tanggal Lahir,Jenis Kelamin,Agama,Alamat,Nama Ayah,Nama Ibu,No HP/WA,Asal TK,Status\n';
    const rows = registrations
      .map(
        (r) =>
          `"${r.regNumber}","${r.submittedAt}","${r.studentName}","${r.nik}","${r.birthPlace}","${r.birthDate}","${r.gender}","${r.religion}","${r.address}","${r.parentFather}","${r.parentMother}","${r.parentPhone}","${r.previousSchool}","${r.status}"`
      )
      .join('\n');

    return new Response(header + rows, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="rekap-ppdb-sd32bawasalo.csv"',
      },
    });
  }

  return NextResponse.json({
    success: true,
    total: registrations.length,
    data: registrations,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Required fields validation
    if (!body.studentName || !body.nik || !body.birthPlace || !body.birthDate || !body.parentPhone) {
      return NextResponse.json(
        { success: false, message: 'Mohon lengkapi seluruh data wajib (Nama Siswa, NIK, Tempat/Tgl Lahir, dan No HP Orang Tua).' },
        { status: 400 }
      );
    }

    const nextIdNumber = registrations.length + 1;
    const regNumber = `PPDB-2026-${String(nextIdNumber).padStart(3, '0')}`;

    const newRecord: PpdbRegistration = {
      id: `reg-${Date.now()}`,
      regNumber,
      submittedAt: new Date().toISOString(),
      studentName: body.studentName.trim(),
      nik: body.nik.trim(),
      birthPlace: body.birthPlace.trim(),
      birthDate: body.birthDate,
      gender: body.gender || 'Laki-laki',
      religion: body.religion || 'Islam',
      address: body.address?.trim() || 'Kelurahan Bawasalo, Segeri',
      parentFather: body.parentFather?.trim() || '-',
      parentMother: body.parentMother?.trim() || '-',
      parentPhone: body.parentPhone.trim(),
      parentJob: body.parentJob?.trim() || '-',
      previousSchool: body.previousSchool?.trim() || 'Belum TK / PAUD',
      status: 'Menunggu Verifikasi',
    };

    registrations.unshift(newRecord);

    return NextResponse.json({
      success: true,
      message: 'Pendaftaran berhasil dikirim! Silakan simpan nomor pendaftaran Anda.',
      data: newRecord,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan sistem saat memproses data pendaftaran.' },
      { status: 500 }
    );
  }
}
