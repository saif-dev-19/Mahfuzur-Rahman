export const assets = {
  profile: "Pasted_image_CBbsJLq.png",
  about: "https://www.figma.com/api/mcp/asset/07e99988-3a10-4cfe-aa7c-822e18a56be0",
  aboutPhoto: "https://www.figma.com/api/mcp/asset/751de445-37bb-49e3-b646-a89ce6717174",
  skillsBg: "https://www.figma.com/api/mcp/asset/f9403f4d-0a2e-4947-b8be-b20f9aac4e30",
  worksBg: "https://www.figma.com/api/mcp/asset/acdab5a5-82d7-44f6-8de4-885ba4f61aff",
  workDevice: "https://www.figma.com/api/mcp/asset/7dcfb1d3-8781-4e9a-9039-da10fbc5d61e",
  workMobile: "https://www.figma.com/api/mcp/asset/36b5bdc3-8a39-4607-8d43-e25ce37f8904",
  workDesktop: "https://www.figma.com/api/mcp/asset/b131ahttps://www.figma.com/api/mcp/asset/5bcaa207-a505-48e1-862d-78fa40eec198dc7-a5ba-4a8d-866f-67a2a0ff02ef",
  blog: "https://www.figma.com/api/mcp/asset/f144f177-1057-450c-a46f-793dff9b4e07",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "#", icon: "◎" },
  { label: "Discord", href: "#", icon: "◌" },
  { label: "Github", href: "#", icon: "⌘" },
];

export const essentialLinks = [
  { label: "GitHub", href: "#", icon: "github", color: "#181717" },
  { label: "LinkedIn", href: "#", icon: "linkedin", color: "#0A66C2" },
  { label: "LeetCode", href: "#", icon: "leetcode", color: "#FFA116" },
  { label: "Codeforces", href: "#", icon: "codeforces", color: "#1F8ACB" },
];

export const contactEmail = "mahfujurrahmansaif@gmail.com";

export const stats = [
  { value: "4", label: "Programming language" },
  { value: "6", label: "Development tools" },
  { value: "8", label: "Years of experience" },
];

export const services = [
  {
    title: "Web development",
    detail: "HTML CSS JS REACT",
    icon: "▣",
    stripe: "#0C73B8",
  },
  {
    title: "App development",
    detail: "iOS Android",
    icon: "▯",
    stripe: "#28A9E0",
  },
];

export const skillCategories = [
  {
    title: "Technologies I Use",
    groups: [
      {
        label: "Languages",
        skills: [
          { name: "C", icon: "c", color: "#A8B9CC" },
          { name: "C++", icon: "cplusplus", color: "#00599C" },
          { name: "Python", icon: "python", color: "#3776AB" },
          { name: "Dart", icon: "dart", color: "#0175C2" },
        ],
      },
      {
        label: "Backend",
        skills: [
          { name: "Django", icon: "django", color: "#092E20" },
          { name: "Django REST Framework", icon: "django", color: "#A30000" },
          { name: "JWT", icon: "jsonwebtokens", color: "#D63AFF" },
          { name: "Redis", icon: "redis", color: "#DC382D" },
          { name: "Docker", icon: "docker", color: "#2496ED" },
          { name: "Celery", icon: "celery", color: "#37814A" },
          { name: "WebSocket", icon: "websocket", color: "#12F7D6", fallback: "WS" },
        ],
      },
      {
        label: "Frontend",
        skills: [
          { name: "React", icon: "react", color: "#61DAFB" },
          { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
          { name: "HTML/CSS", icon: "html5", color: "#E34F26" },
          { name: "TailwindCSS", icon: "tailwindcss", color: "#38BDF8" },
        ],
      },
      {
        label: "Databases",
        skills: [
          { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
          { name: "MySQL", icon: "mysql", color: "#4479A1" },
          { name: "SQLite", icon: "sqlite", color: "#003B57" },
          { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
        ],
      },
    ],
  },
  {
    title: "Development & Productivity Tools I Use",
    groups: [
      {
        label: "Tools & Platforms",
        skills: [
          { name: "Git", icon: "git", color: "#F05032" },
          { name: "GitHub", icon: "github", color: "#181717" },
          { name: "Vercel", icon: "vercel", color: "#000000" },
          { name: "Render", icon: "render", color: "#46E3B7" },
          { name: "Netlify", icon: "netlify", color: "#00C7B7" },
        ],
      },
      {
        label: "AI Workflow",
        skills: [
          { name: "Prompt Engineering", icon: "openai", color: "#12F7D6" },
          { name: "ChatGPT", icon: "openai", color: "#10A37F" },
          { name: "GitHub Copilot", icon: "githubcopilot", color: "#6E40C9" },
          { name: "Gemini CLI", icon: "googlegemini", color: "#4285F4" },
          { name: "Cursor", icon: "cursor", color: "#FFFFFF" },
        ],
      },
    ],
  },
];

export const experience = [
  {
    role: "Python Developer",
    company: "Softvence Agency",
    period: "5 Jan 2026 - Present",
    location: "Onsite",
    description:
      "Building responsive portfolio sites, dashboards, and product interfaces with React, JavaScript, and clean component systems.",
    tags: ["Python","Django", "Rest API", "Docker", "PostgreSQL", "Redis"],
  },
];

export const education = [
  {
    degree: "Computer Science",
    school: "Anadolu University",
    period: "2015 - 2019",
    location: "Turkey",
    description:
      "Focused on software fundamentals, database systems, web technologies, and practical problem solving through project-based learning.",
    tags: ["Algorithms", "Databases", "Web"],
  },
  {
    degree: "Frontend Specialization",
    school: "Online Programs",
    period: "2020 - 2023",
    location: "Remote",
    description:
      "Continued learning modern React patterns, accessibility, responsive design, performance, and maintainable CSS architecture.",
    tags: ["React", "Accessibility", "Performance"],
  },
];

export const certificates = [
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    credential: "Certificate",
    credentialId: "FCC-RWD-2023",
    period: "2023",
    issueDate: "2023",
    image: "/certificates/certificate-placeholder.svg",
    verifyUrl: "#",
    description:
      "Completed practical projects covering semantic HTML, responsive layouts, accessibility basics, and modern CSS fundamentals.",
    tags: ["HTML", "CSS", "Responsive"],
  },
  {
    name: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    credential: "Certificate",
    credentialId: "FCC-JS-2023",
    period: "2023",
    issueDate: "2023",
    image: "/certificates/certificate-placeholder.svg",
    verifyUrl: "#",
    description:
      "Practiced core JavaScript, data handling, problem solving, functions, arrays, objects, and algorithmic thinking.",
    tags: ["JavaScript", "Algorithms", "Problem Solving"],
  },
  {
    name: "React Development",
    issuer: "Online Course",
    credential: "Certificate",
    credentialId: "REACT-2024",
    period: "2024",
    issueDate: "2024",
    image: "/certificates/certificate-placeholder.svg",
    verifyUrl: "#",
    description:
      "Built component-based interfaces with state, props, reusable sections, routing concepts, and clean UI structure.",
    tags: ["React", "Components", "Frontend"],
  },
  {
    name: "React Development",
    issuer: "Online Course",
    credential: "Certificate",
    credentialId: "REACT-2024",
    period: "2024",
    issueDate: "2024",
    image: "/certificates/certificate-placeholder.svg",
    verifyUrl: "#",
    description:
      "Built component-based interfaces with state, props, reusable sections, routing concepts, and clean UI structure.",
    tags: ["React", "Components", "Frontend"],
  },
  {
    name: "React Development",
    issuer: "Online Course",
    credential: "Certificate",
    credentialId: "REACT-2024",
    period: "2024",
    issueDate: "2024",
    image: "/certificates/certificate-placeholder.svg",
    verifyUrl: "#",
    description:
      "Built component-based interfaces with state, props, reusable sections, routing concepts, and clean UI structure.",
    tags: ["React", "Components", "Frontend"],
  },
  {
    name: "React Development",
    issuer: "Online Course",
    credential: "Certificate",
    credentialId: "REACT-2024",
    period: "2024",
    issueDate: "2024",
    image: "/certificates/certificate-placeholder.svg",
    verifyUrl: "#",
    description:
      "Built component-based interfaces with state, props, reusable sections, routing concepts, and clean UI structure.",
    tags: ["React", "Components", "Frontend"],
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    category: "Personal Brand",
    image: assets.workDevice,
    description:
      "A responsive developer portfolio with dark styling, reusable sections, project presentation, and contact flow.",
    details:
      "This portfolio project presents a complete personal brand website with a dark visual system, responsive sections, project cards, certificate cards, and a contact area. The layout is built with reusable React components and Tailwind utilities so future content can be updated from local data arrays without rewriting the UI.",
    tags: ["React", "Tailwind", "Responsive"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Agency Landing Page",
    category: "Marketing Website",
    image: assets.workDevice,
    description:
      "A conversion-focused landing page with polished sections, service cards, testimonials, and mobile-first spacing.",
    details:
      "This agency landing page focuses on clear service presentation, strong calls to action, and smooth responsive spacing. It includes reusable content sections for services, testimonials, process, and contact so the page can support a real marketing flow.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Dashboard UI",
    category: "Web App",
    image: assets.workDevice,
    description:
      "A clean dashboard interface for tracking stats, activity, and user actions with reusable card components.",
    details:
      "This dashboard UI was designed for fast scanning. It includes stat cards, activity lists, user actions, and structured panels. The main goal is to keep information dense but readable across desktop and smaller screens.",
    tags: ["React", "Components", "UI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Ecommerce Product Page",
    category: "Frontend Build",
    image: assets.workDevice,
    description:
      "A product detail experience with responsive imagery, pricing content, feature highlights, and action buttons.",
    details:
      "This ecommerce product page highlights a product with responsive visuals, pricing, feature details, and clear purchase actions. It is structured to be easy to adapt for different products or a larger shop experience.",
    tags: ["React", "Tailwind", "UX"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Blog Platform",
    category: "Content Website",
    image: assets.workDevice,
    description:
      "A readable blog layout with post cards, categories, author metadata, and a responsive article structure.",
    details:
      "This blog platform concept focuses on readability and content discovery. It includes article cards, metadata, category labels, and a responsive layout that keeps long-form writing comfortable to read.",
    tags: ["JavaScript", "CSS", "Content"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Manager",
    category: "Productivity App",
    image: assets.workDevice,
    description:
      "A lightweight task app concept with project grouping, status states, and reusable interactive controls.",
    details:
      "This task manager concept organizes work into project groups with status states and simple controls. It was created to practice clean component architecture and user-friendly productivity interactions.",
    tags: ["React", "State", "Frontend"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Restaurant Website",
    category: "Business Website",
    image: assets.workDevice,
    description:
      "A local business website with menu highlights, gallery layout, location details, and contact actions.",
    details:
      "This restaurant website is built for a local business presence. It includes menu highlights, image-led sections, location information, and contact actions designed to help visitors quickly decide and reach out.",
    tags: ["Responsive", "Design", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const blogs = [
  {
    title: "What does it take to become a web developer?",
    label: "Web Developer",
    author: "Sinan",
    date: "10.Oct 2023",
    duration: "1 Min",
    image: assets.blog,
    excerpt:
      "Web development encompasses a variety of tasks and processes involved in creating websites for the internet.",
  },
];
