import {
  assets,
  certificates,
  contactEmail,
  education,
  essentialLinks,
  experience,
  projects,
  skillCategories,
  stats,
} from "../data/portfolio.js";

const API_BASE_URL = import.meta.env.VITE_PORTFOLIO_API_URL || "https://web-production-fe170.up.railway.app/api/portfolio";

export const fallbackPortfolio = {
  hero: {
    name: "Mahfuzur Rahman Saif",
    role: "Backend Developer",
    headlineName: "Mahfuz",
    headlineRole: "Backend Developer",
    description:
      "I help businesses grow by crafting amazing web experiences. If you're looking for a developer who likes to get stuff done, let's talk.",
    image: assets.profile,
    cvUrl: "#contact",
    info: [
      { label: "Email", value: "mahfujurrahmansaif@gmail.com" },
      { label: "Location", value: "Bangladesh" },
      { label: "Work", value: "Onsite" },
      { label: "Link", value: "www.mahfuz.live" },
    ],
    stats,
    essentialLinks,
  },
  about: {
    title: "About Me",
    greeting: "Hello!",
    description:
      "My name is Mahfuzur Rahman Saif and I specialize in backend development and scalable web systems.\n\nI strive to never stop learning and improving.",
    image: assets.aboutPhoto,
  },
  skills: {
    title: "Skills",
    description: "I am striving to never stop learning and improving",
    categories: skillCategories,
  },
  projects: {
    title: "Projects",
    description: "Selected projects I have designed, developed, and improved",
    items: projects,
  },
  experience: {
    title: "Experience",
    description: "Places where I have built, shipped, and improved digital products",
    items: experience,
  },
  education: {
    title: "Education",
    description: "My academic background and ongoing learning path",
    items: education,
  },
  certificates: {
    title: "Certificates",
    description: "Credentials and courses that support my practical development work",
    items: certificates,
  },
  contact: {
    title: "Contact",
    description: "I'm currently available for work",
    email: contactEmail,
  },
};

export async function fetchPortfolio() {
  const response = await fetch(`${API_BASE_URL}/`);
  if (!response.ok) {
    throw new Error(`Portfolio API returned ${response.status}`);
  }

  const data = await response.json();
  return mapApiPortfolio(data);
}

function mapApiPortfolio(data) {
  return {
    ...fallbackPortfolio,
    hero: mapHero(data.hero),
    about: mapAbout(data.about),
    skills: mapSkills(data.skills),
    experience: {
      ...fallbackPortfolio.experience,
      items: Array.isArray(data.experience) ? data.experience.map(mapExperience) : fallbackPortfolio.experience.items,
    },
    education: {
      ...fallbackPortfolio.education,
      items: Array.isArray(data.education) ? data.education.map(mapEducation) : fallbackPortfolio.education.items,
    },
    projects: {
      ...fallbackPortfolio.projects,
      items: Array.isArray(data.projects) ? data.projects.map(mapProject) : fallbackPortfolio.projects.items,
    },
    certificates: {
      ...fallbackPortfolio.certificates,
      items: Array.isArray(data.certificates) ? data.certificates.map(mapCertificate) : fallbackPortfolio.certificates.items,
    },
    contact: mapContact(data.contact),
  };
}

function mapHero(hero) {
  if (!hero) return fallbackPortfolio.hero;

  return {
    ...fallbackPortfolio.hero,
    name: hero.name || fallbackPortfolio.hero.name,
    role: hero.role || fallbackPortfolio.hero.role,
    headlineName: hero.headline_name || hero.name || fallbackPortfolio.hero.headlineName,
    headlineRole: hero.headline_role || hero.role || fallbackPortfolio.hero.headlineRole,
    description: hero.description || fallbackPortfolio.hero.description,
    image: hero.image || fallbackPortfolio.hero.image,
    cvUrl: hero.cv_file || hero.cv_url || fallbackPortfolio.hero.cvUrl,
    info: Array.isArray(hero.info) ? hero.info : fallbackPortfolio.hero.info,
    stats: Array.isArray(hero.stats) ? hero.stats : fallbackPortfolio.hero.stats,
    essentialLinks: Array.isArray(hero.essential_links) ? hero.essential_links : fallbackPortfolio.hero.essentialLinks,
  };
}

function mapAbout(about) {
  if (!about) return fallbackPortfolio.about;

  return {
    ...fallbackPortfolio.about,
    title: about.title || fallbackPortfolio.about.title,
    greeting: about.greeting || fallbackPortfolio.about.greeting,
    description: about.description || fallbackPortfolio.about.description,
    image: about.image || fallbackPortfolio.about.image,
  };
}

function mapSkills(groups) {
  if (!Array.isArray(groups)) return fallbackPortfolio.skills;

  return {
    ...fallbackPortfolio.skills,
    categories: groups.map((group) => ({
      title: group.title,
      groups: [
        {
          label: "Skills",
          skills: (Array.isArray(group.skills) ? group.skills : []).map((skill) => ({
            name: skill.name,
            icon: skill.icon_name || "code",
            color: skill.color || "#12F7D6",
            fallback: skill.fallback || "",
            image: skill.image,
          })),
        },
      ],
    })),
  };
}

function mapExperience(item) {
  return {
    role: item.role,
    company: item.company,
    location: item.location,
    period: item.period || formatPeriod(item.start_date, item.end_date),
    description: item.description,
    tags: item.tags || [],
  };
}

function mapEducation(item) {
  return {
    degree: item.degree,
    school: item.school,
    location: item.location,
    period: item.period || formatPeriod(item.start_date, item.end_date),
    description: item.description,
    tags: item.tags || [],
  };
}

function mapProject(item) {
  return {
    title: item.title,
    category: item.category,
    image: item.image || assets.workDevice,
    description: item.description,
    details: item.details || item.description,
    tags: item.tags || [],
    githubUrl: item.github_url || "#",
    liveUrl: item.live_url || "#",
  };
}

function mapCertificate(item) {
  return {
    name: item.name,
    issuer: item.issuer,
    credential: item.credential,
    credentialId: item.credential_id,
    period: item.period,
    issueDate: item.issue_date || item.period,
    image: item.image || "/certificates/certificate-placeholder.svg",
    verifyUrl: item.verify_url || "#",
    description: item.description,
    tags: item.tags || [],
  };
}

function mapContact(contact) {
  if (!contact) return fallbackPortfolio.contact;

  return {
    ...fallbackPortfolio.contact,
    title: contact.title || fallbackPortfolio.contact.title,
    description: contact.description || fallbackPortfolio.contact.description,
    email: contact.email || fallbackPortfolio.contact.email,
  };
}

function formatPeriod(startDate, endDate) {
  if (!startDate && !endDate) return "";
  if (startDate && !endDate) return `${startDate} - Present`;
  if (!startDate && endDate) return endDate;
  return `${startDate} - ${endDate}`;
}
