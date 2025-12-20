import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoCss3,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { 
  SiMongodb, 
  SiCplusplus, 
  SiTypescript, 
  SiExpress, 
  SiJsonwebtokens, 
  SiRedis, 
  SiGooglecloud, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiLinux, 
  SiApachekafka,
  SiMysql,
  SiMongoose
} from "react-icons/si";
import { TbApi, TbBrandOauth } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaCode, FaGlobe, FaDatabase, FaTools, FaUser } from "react-icons/fa";

export const PROFILE_DATA = {
  profilePicture: "../public/Hero6.png",
  name: "Mozammil Ali",
  tagline: "Passionate Full Stack Developer with 6 months of experience in building responsive web applications using modern technologies. Proficient in both front-end and back-end development, with a strong focus on creating clean, efficient, and scalable code. Skilled in collaborating with cross-functional teams to deliver high-quality software solutions.",
  jobTitle: "Full Stack Developer",
  location: "India",
  yearsOfExperience: "1",
  skills: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
    "Restful APIs",
    "Git",
    "Redux",
  ],
  email: "mozammilali@example.com",
  phone: "+91 1234567890",
  website: "https://mozammilali.netlify.app/",
};

export const GITHUB_USERNAME = "codxbrexx";

export const SKILLS = [
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "C/C++", icon: SiCplusplus, level: 85 },
      { name: "JavaScript", icon: IoLogoJavascript, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "SQL", icon: SiMysql, level: 75 },
      { name: "HTML", icon: IoLogoHtml5, level: 95 },
      { name: "CSS", icon: IoLogoCss3, level: 90 },
    ],
  },
  {
    title: "Web Development",
    icon: FaGlobe,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", icon: IoLogoReact, level: 92 },
      { name: "Node.js", icon: IoLogoNodejs, level: 85 },
      { name: "Express", icon: SiExpress, level: 80 },
      { name: "REST APIs", icon: TbApi, level: 88 },
      { name: "JWT", icon: SiJsonwebtokens, level: 75 },
      { name: "OAuth 2.0", icon: TbBrandOauth, level: 70 },
      { name: "Redis", icon: SiRedis, level: 60 },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, level: 95 },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: FaDatabase,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "Mongoose", icon: SiMongoose, level: 80 },
      { name: "Google Cloud", icon: SiGooglecloud, level: 65 },
    ],
  },
  {
    title: "Developer Tools",
    icon: FaTools,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: SiGit, level: 90 },
      { name: "GitHub", icon: SiGithub, level: 88 },
      { name: "Postman", icon: SiPostman, level: 85 },
      { name: "Linux", icon: SiLinux, level: 70 },
      { name: "Kafka", icon: SiApachekafka, level: 50 },
      { name: "VS Code", icon: VscVscode, level: 95 },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUser,
    color: "from-yellow-400 to-orange-400",
    skills: [
      { name: "Strategic Planning", level: 85 },
      { name: "Conflict Resolution", level: 90 },
      { name: "Communication", level: 95 },
      { name: "Coordination", level: 88 },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "TechSolutions Inc.",
    position: "Senior Frontend Developer",
    duration: "June 2025 - Present",
    type: "Full-time",
    description:
      "Leading the development of scalable web applications using React.js and Tailwind CSS. Collaborated closely with cross-functional teams to design intuitive user interfaces, optimize performance, and implement best coding practices.",
    skills: ["React", "Tailwind CSS", "Redux", "Framer Motion", "Git"],
  },
  {
    id: "02",
    company: "CodeCrafters LLC",
    position: "Frontend Developer",
    duration: "Nov 2024 - Jan 2025",
    type: "Full-time",
    description:
      "Developed responsive web interfaces using JavaScript, React, and CSS frameworks. Worked with designers to translate wireframes into interactive features, ensuring cross-browser compatibility and performance optimization.",
    skills: ["JavaScript", "React", "CSS3", "HTML5", "Vite"],
  },
  {
    id: "03",
    company: "Digital Innovations Co.",
    position: "UI/UX Designer",
    duration: "June 2024 - Oct 2024",
    type: "Internship",
    description:
      "Designed user-centered web and mobile interfaces, focusing on enhancing user experience through intuitive layouts and modern design trends. Created wireframes, prototypes, and high-fidelity mockups.",
    skills: ["Figma", "Adobe XD", "UI/UX", "Wireframing", "Prototyping"],
  },
];

export const PERSONAL_BRAND_DATA = {
    philosophy: [
        "Code with purpose, design with empathy",
        "Every line matters, every user counts",
        "Innovation through iteration, excellence through persistence",
        "Building tomorrow's solutions with today's best practices"
    ],
    journey: {
        title: "My Journey",
        description: "From a curious student to a Full Stack Developer, my path has been defined by continuous learning and hands-on building. Started with C++, mastered the MERN stack, and now architecting scalable solutions."
    },
    values: [
        { title: "Clean Code", description: "Writing maintainable, efficient, and readable software." },
        { title: "User-Centric", description: "Prioritizing user experience in every design decision." },
        { title: "Continuous Learning", description: "Staying updated with evolving tech landscapes." },
        { title: "Collaboration", description: "Believing in the power of teamwork and open source." }
    ],
    goals: {
        title: "Career Goals",
        description: "To become a Lead Engineer contributing to high-impact projects, mentoring junior developers, and driving technical innovation in the open-source community."
    },
    codeSnippet: `const developer = {
  name: "Mozammil Ali",
  role: "Full Stack Developer",
  passion: "Building amazing things",
  superpower: "Turning coffee into code ☕"
};`,
    stats: [
        { label: "Performance Leader", value: "100%", subtext: "Lighthouse 100/89 scores consistently" },
        { label: "AI Innovation", value: "1+", subtext: "LangChain & RAG implementations" },
        { label: "Full Stack", value: "4+", subtext: "End-to-end project delivery" },
        { label: "Open Source", value: "Active", subtext: "Community contributions" }
    ]
};

export const PROJECTS = [
  {
    id: "01",
    title: "FocusMaster",
    category: "Productivity",
    image: "/project1.jpg", 
    description: "A comprehensive productivity tool designed to enhance focus and task management. Features include Pomodoro timers, distraction blocking, and detailed productivity analytics.",
    skills: ["React", "Electron", "Redux", "Firebase"],
    githubUrl: "https://github.com/codxbrexx/FocusMaster",
    liveUrl: null,
  },
  {
    id: "02",
    title: "College Alumni",
    category: "Social Network",
    image: "/project2.jpg",
    description: "A digital platform connecting college alumni, fostering networking, mentorship, and event organization. Includes job boards and success story showcases.",
    skills: ["MERN Stack", "Socket.io", "Cloudinary"],
    githubUrl: "https://github.com/codxbrexx/college-alumni",
    liveUrl: null,
  },
  {
    id: "03",
    title: "Food-Express",
    category: "E-Commerce",
    image: "/project3.jpg",
    description: "Fast and reliable food delivery application with real-time tracking, secure payment gateways, and an intuitive restaurant discovery interface.",
    skills: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    githubUrl: "https://github.com/codxbrexx/Food-Express",
    liveUrl: null,
  },
  {
    id: "04",
    title: "GetPrompt",
    category: "AI Tools",
    image: "/project1.jpg",
    description: "A marketplace and sharing platform for AI prompts. Users can discover, test, and share high-quality prompts for various LLMs to boost their workflow.",
    skills: ["Next.js", "Recoil", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/codxbrexx/GetPrompt",
    liveUrl: null,
  },
  {
    id: "05",
    title: "AnnDaan",
    category: "Social Impact",
    image: "/project2.jpg",
    description: "A charitable platform dedicated to reducing food waste by connecting donors with NGOs and shelters to distribute surplus food to those in need.",
    skills: ["React", "Express", "MongoDB", "Geolocation API"],
    githubUrl: "https://github.com/codxbrexx/AnnDaan",
    liveUrl: null,
  },
  {
    id: "06",
    title: "AITextExplainer",
    category: "Education",
    image: "/project3.jpg",
    description: "An educational tool leveraging AI to simplify complex texts. Users upload documents or paste text to receive concise summaries and explanations.",
    skills: ["React", "Python", "Flask", "OpenAI API"],
    githubUrl: "https://github.com/codxbrexx/AITextExplainer",
    liveUrl: null,
  },
];

export const EDUCATION = [
  {
    id: "01",
    school: "Indian Institute of Information Technology (IIIT), Lucknow",
    location: "Lucknow, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Aug 2024 – Jun 2028",
    grade: "CGPA: 7.55 / 10",
    description: "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, OOP.",
  },
  {
    id: "02",
    school: "R.S.B. Inter-School, Samastipur",
    location: "Samastipur, Bihar, India",
    degree: "BSEB Class XII (Higher Secondary Education)",
    duration: "Feb 2021 – Feb 2023",
    grade: "Percentage: 86.0%",
    description: "Focused on Science and Mathematics foundation.",
  },
  {
    id: "03",
    school: "R.S.B. Inter-School, Samastipur",
    location: "Samastipur, Bihar, India",
    degree: "BSEB Class X (Secondary Education)",
    duration: "Feb 2020 – Feb 2021",
    grade: "Percentage: 84.0%",
    description: "Completed secondary education with distinction.",
  },
];

export const HERO_CONTENT = {
  greeting: "Hello, I'm Mozammil Ali",
  introduction:
    "I’m a Full Stack Developer and CSE undergraduate at IIIT Lucknow, passionate about turning ideas into scalable digital products. With expertise in the MERN stack, I build fast, reliable, and visually refined web applications where performance meets design.",
  resumeLink: "/resume.pdf",
};
