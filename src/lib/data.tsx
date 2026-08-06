import { Icons } from '@/components/icons'
import { Experience, NavLink, Project, Skill } from './types'

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export const projectsData: Project[] = [
  {
    video: "assets/videos/agency-ai-demo.mp4",
    title: "Agency AI",
    description:
      "A modern AI agency landing page built with Next.js and TypeScript, featuring responsive layouts, smooth animations, reusable components, and a clean user experience optimized for performance and scalability.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React",
    ],
    links: {
  preview: "https://agency-ai-five-taupe.vercel.app/",
  github: "https://github.com/thedie205/Agency-ai",
  githubApi: "",
},
  },
  {
    video: "assets/videos/icon-converter-demo.mp4",
    title: "Icon Converter",
    description:
      "A web application that converts images into icons through a simple and intuitive interface. Designed with a responsive UI to provide fast image processing and an efficient user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
    ],
    links: {
  preview: "https://icon-converter.vercel.app",
  github: "https://github.com/thedie205/icon-converter",
  githubApi: "",
},
  },
] as const;

export const experiencesData = [
  {
    company: "Self Learning",
    title: "Frontend Developer",
    period: "2025 - Present",
    description:
      "Learning modern frontend development through practical projects using React, Next.js, TypeScript, and Tailwind CSS while continuously improving UI/UX and clean code practices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Git",
      "GitHub",
    ],
  },
  {
    company: "Personal Projects",
    title: "Web Applications",
    period: "2026",
    description:
      "Built responsive web applications including portfolio websites, authentication systems, and e-commerce projects to strengthen frontend development skills.",
    technologies: [
      "React",
      "Next.js",
      "Context API",
      "Framer Motion",
      "REST API",
      "Axios",
    ],
  },
  {
    company: "Programming Fundamentals",
    title: "C++ Programmer",
    period: "2024 - Present",
    description:
      "Strong understanding of programming fundamentals, object-oriented programming (OOP), data structures, algorithms, and problem-solving using C++.",
    technologies: [
      "C++",
      "OOP",
      "STL",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
  },
]


export const skillsData: Skill[] = [
  { name: 'Sass', icon: <Icons.sass className="size-12 hover:text-red-500 transition-all duration-300 cursor-pointer hover:scale-102" /> },
  { name: 'Tailwind', icon: <Icons.tailwind className="size-12 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-102" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12 hover:text-yellow-300 transition-all duration-300 cursor-pointer hover:scale-102" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-102" /> },
  { name: 'React', icon: <Icons.react className="size-12 hover:text-blue-500 transition-all duration-300 cursor-pointer hover:scale-102" /> },
  { name: 'NextJS', icon: <Icons.nextjs className="size-12 hover:text-black/80 transition-all duration-300 cursor-pointer hover:scale-102" /> },
]
