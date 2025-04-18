import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
  certificateUrl: string;
  certificateImage?: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Frot End JavaScript",

    issuer: "Binar Academy",
    description:
      "Certificate from the Independent Study Program at Binar Academy for 6 months, focusing on both Fundamental and Advanced JavaScript.",
    icon: Award,
    certificateUrl: "https://imgur.com/a/TYje5Qy",
    certificateImage: "https://i.imgur.com/et8AoJ8.jpeg",
  },
  {
    id: 2,
    title: "Introduction to JavaScript",

    issuer: "SoloLearn",
    description:
      "Successfully completed the Introduction to JavaScript course on Sololearn, covering the basics of variables, functions, loops, and event handling in JavaScript.",
    icon: Award,
    certificateUrl: "https://www.sololearn.com/certificates/CC-LMCCXKNB",
    certificateImage:
      "https://api2.sololearn.com/v2/certificates/CC-LMCCXKNB/image/png?t=638285501600832180",
  },
  {
    id: 3,
    title: "Introduction to HTML",
    issuer: "SoloLearn",
    description:
      "Successfully completed the HTML course on Sololearn, learning the structure of web pages, semantic elements, forms, and basic document formatting.",
    icon: Award,
    certificateUrl: "https://www.sololearn.com/certificates/CC-41OVULPZ",
    certificateImage:
      "https://api2.sololearn.com/v2/certificates/CC-41OVULPZ/image/png?t=638285501924627190",
  },
  {
    id: 4,
    title: "Introduction to CSS",
    issuer: "SoloLearn",
    description:
      "Successfully completed the CSS course on Sololearn, focusing on styling web pages using selectors, layout techniques, typography, and responsive design.",
    icon: Award,
    certificateUrl: "https://www.sololearn.com/certificates/CC-J7ROG6KA",
    certificateImage:
      "https://api2.sololearn.com/v2/certificates/CC-J7ROG6KA/image/png?t=638200591634743000",
  },
  {
    id: 5,
    title: "Belajar Dasar Git Dengan Github",
    issuer: "Dicoding Indonesia",
    description:
      "Successfully completed the 'Belajar Dasar Git dan GitHub' course on Dicoding, gaining foundational knowledge of version control, Git commands, branching, merging, and collaborating through GitHub repositories.",

    icon: Award,
    certificateUrl: "https://www.dicoding.com/certificates/0LZ09VKD0Z65",
    certificateImage: "imgs/sertifikat_dicoding1.jpg",
  },
  {
    id: 6,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    description:
      "Successfully completed the 'Belajar Dasar Pemrograman Web' course on Dicoding, learning the fundamentals of web development including HTML, CSS, and basic JavaScript for building static web pages.",

    icon: Award,
    certificateUrl: "https://www.dicoding.com/certificates/N9ZO68W80XG5",
    certificateImage: "imgs/sertifikat_dicoding2.jpg",
  },
  {
    id: 7,
    title: " Dasar   Menjadi Pengembang Sofware",
    issuer: "Dicoding Indonesia",
    description:
      "Completed the 'Dasar Pemrograman untuk Menjadi Pengembang Software' course on Dicoding, covering essential programming concepts, algorithms, and logical thinking skills needed to start a career in software development.",
    icon: Award,
    certificateUrl: "https://www.dicoding.com/certificates/4EXGNW509ZRL",
    certificateImage: "imgs/sertifikat_dicoding3.jpg",
  },
  {
    id: 8,
    title: "Pengantar Mindset Digital",
    issuer: "KOMDIGI",
    description:
      "Successfully completed the 'Pengantar Mindset Digital' course, gaining foundational insights into the digital transformation era, digital literacy, adaptive thinking, and the mindset required to thrive in a technology-driven world.",

    icon: Award,
    certificateUrl: "https://imgur.com/zS28LAQ",
    certificateImage: "https://i.imgur.com/zS28LAQ.jpeg",
  },
  {
    id: 9,
    title: "Pengenalan Kolaborasi Penyimpanan Clound",
    issuer: "KOMDIGI",
    description:
      "Successfully completed the 'Pengenalan Kolaborasi Penyimpanan Berbasis Cloud' course, gaining essential knowledge about cloud computing, collaborative tools, and cloud storage systems, and their role in enhancing team productivity and seamless information sharing.",

    icon: Award,
    certificateUrl: "https://imgur.com/o7gz2Ek",
    certificateImage: "https://i.imgur.com/o7gz2Ek.jpeg",
  },
  {
    id: 10,
    title: "Memahami Aspek Pengembangan Produk AI",
    issuer: "KOMIDIGI",
    description:
      "Successfully completed the 'Memahami Aspek Pengembangan Produk AI' course, acquiring a deep understanding of the processes, methodologies, and challenges involved in developing AI products. Gained insights into AI lifecycle management, from ideation to deployment, and the importance of ethical considerations in AI development.",
    icon: Award,
    certificateUrl: "https://imgur.com/zmSXavl",
    certificateImage: "https://i.imgur.com/zmSXavl.jpeg",
  },
  {
    id: 11,
    title: "Konsep Pemrograman",
    issuer: "2023",
    description:
      "Successfully completed the 'Konsep Pemrograman' course, covering fundamental programming concepts including variables, data types, control structures, functions, and algorithms. Developed a solid foundation in programming logic and problem-solving skills, essential for becoming an effective software developer.",
    icon: Award,
    certificateUrl: "https://imgur.com/WGhFyED",
    certificateImage: "https://i.imgur.com/WGhFyED.jpeg",
  },
  {
    id: 12,
    title: "Bapakreraf Developer Day 2023",
    issuer: "Dicoding Indonesia",
    description:
      "This is to certify that [Your Name] attended the Bapakreraf Developer Day 2023, a significant event focusing on the latest trends, technologies, and best practices in software development. The event provided valuable insights and networking opportunities for developers to enhance their skills and knowledge.",
    icon: Award,
    certificateUrl: "https://imgur.com/a/ijXFx1P",
    certificateImage: "https://i.imgur.com/t9URzP4.jpeg",
  },
  {
    id: 13,
    title: "Intro To Software Engineering",
    issuer: "Revou ",
    description:
      "This is to certify that the participant has successfully completed the Introduction to Software Engineering course at RevoU. Throughout this course, the participant gained essential skills and knowledge in software engineering practices, including the software development life cycle (SDLC), coding standards, version control, testing strategies, and collaborative techniques necessary for developing scalable, maintainable, and efficient software systems.",
    icon: Award,
    certificateUrl: "https://imgur.com/a/3eYViUM",
    certificateImage: "https://i.imgur.com/bc1W5xe.jpeg",
  },
  {
    id: 14,
    title: "Workshop: ReactJS #2",
    issuer: "Dicoding Indonesia x USU",
    description:
      "This is to certify that the participant has successfully completed the Workshop React.js 2. During this workshop, the participant deepened their knowledge and skills in React.js, covering advanced topics such as state management, component lifecycle, hooks, and optimizing React applications for better performance.",
    icon: Award,
    certificateUrl: "https://imgur.com/a/e0xv0LP",
    certificateImage: "https://i.imgur.com/Oc9HQx8.jpeg",
  },
];
