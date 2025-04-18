export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "PantauLagit",
    description:
      " PantauLagit adalah aplikasi yang saya buat menggunakan API Weatherfree untuk memantau cuaca di seluruh dunia. Aplikasi ini memungkinkan pengguna untuk mengetahui kondisi cuaca terkini di berbagai lokasi dengan mudah. Dengan menggunakan data cuaca real-time dari API Weatherfree, PantauLagit memberikan informasi seperti suhu, kelembapan, kecepatan angin, dan ramalan cuaca yang dapat membantu pengguna merencanakan aktivitas mereka sesuai dengan kondisi cuaca.",
    image: "/imgs/p4.png",
    tags: ["ReactJS", "TailwindCSS", "ReactHooksForm"],
    links: {
      github: "https://github.com/KevinMarpaung/PantauLagit",
      live: "pantau-lagit.vercel.app",
    },
  },
  {
    id: 2,
    title: "Todolist",
    description:
      "ToDoList adalah aplikasi yang saya buat untuk mengelola tugas atau pekerjaan sehari-hari dengan berbagai fitur interaktif. Aplikasi ini memungkinkan pengguna untuk menambah, mengedit, menghapus, mencari, dan menandai tugas yang telah selesai (mencoret). ",
    image: "/imgs/p1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/KevinMarpaung/todolist",
      live: "todolist-n2pz.vercel.app/",
    },
  },
  {
    id: 3,
    title: "CofeeTabo",
    description:
      "Ini adalah sebuah proyek website untuk Landing Page Coffee Shop yang memiliki fitur lengkap baik untuk pengguna (customer) maupun admin. Website ini memungkinkan pengunjung untuk melihat menu kopi, membuat pemesanan, dan juga memiliki panel admin untuk menambah, mengedit, atau menghapus produk yang tersedia.",
    image: "/imgs/p2.png",
    tags: ["React Native", "Firebase", "Authentication", "Cloud Functions"],
    links: {
      github: "https://github.com/KevinMarpaung/CofeeTabo",
      live: "cofee-tabo.vercel.app",
    },
  },
  {
    id: 4,
    title: "HKBP",
    description:
      "Landing Page Gereja HKBP adalah sebuah situs yang dirancang untuk memperkenalkan Gereja HKBP, memberikan informasi tentang kegiatan gereja, serta memungkinkan jemaat dan pengunjung untuk mengakses berbagai informasi yang berkaitan dengan kebaktian, acara, dan pelayanan gereja. Desainnya dibuat responsif dan ramah pengguna, dengan tujuan untuk mempermudah jemaat dalam mengakses informasi penting",
    image: "/imgs/p3.png",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
    links: {
      github: "https://github.com/KevinMarpaung/Gereja-HKBP-Peasidari",
      live: "gereja-hkbp-peasidari.vercel.app",
    },
  },
  {
    id: 5,
    title: "Movie-List",
    description:
      "Aplikasi Movie List ini dirancang untuk menampilkan daftar film lengkap dengan gambar poster dan informasi lainnya, yang diambil dari API TMDB (The Movie Database). Pengguna dapat menjelajahi berbagai film populer, mencari film tertentu, dan mendapatkan detail seperti judul, deskripsi, tanggal rilis, serta poster dari film tersebut. Proyek ini dikerjakan oleh tim yang terdiri dari tiga orang, masing-masing bertanggung jawab atas pengembangan antarmuka pengguna, pengelolaan state aplikasi, dan integrasi API.",
    image: "/imgs/p3.png",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
    links: {
      github: "https://github.com/azkanaon/challenge-6-binar",
      live: "movie-list-redux-sigma.vercel.app",
    },
  },
  {
    id: 5,
    title: "Car Travel Binar",
    description:
      "Car Travel Binar adalah sebuah landing page yang dibuat untuk memahami dan mempraktikkan konsep dasar layouting menggunakan React.js. Proyek ini menampilkan struktur halaman yang responsif dan terorganisir, sekaligus menjadi media pembelajaran tentang penggunaan komponen, styling, dan pengelolaan tampilan antarmuka di React.",
    image: "/imgs/p3.png",
    tags: ["React", "Tailwind CSS"],
    links: {
      github: "https://github.com/KevinMarpaung/Car-Travel-web",
      live: "https://car-travel-9epcaz3hb-kevinmarpaungs-projects.vercel.app/",
    },
  },
  {
    id: 6,
    title: "Last King Academy",
    description:
      "MOOC Last King Academy adalah aplikasi pembelajaran daring (MOOC) yang dirancang untuk memenuhi tugas project akhir di Binar Academy. Aplikasi ini bertujuan untuk memberikan pembelajaran yang berkualitas dan mudah diakses kepada masyarakat luas, khususnya di Indonesia.",
    image: "/imgs/p3.png",
    tags: [
      "React",
      "Tailwind CSS,ExpressJs,React Router Dom,Redux Toolkit,React Hook Form,React Hot Toast",
    ],
    links: {
      github: "https://github.com/NelanJoe/final-project-fe-binar",
      live: "https://last-king-academy.vercel.app/",
    },
  },
];
