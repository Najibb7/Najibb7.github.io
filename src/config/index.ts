import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Najib BARAKA - Développeur Full-Stack",
  author: "Najib BARAKA",
  description:
    "Un peu de JavaScript, beaucoup de passion, et une bonne dose de café : bienvenue dans mon univers de dev. 🚀",
  lang: "fr",
  // siteLogo: "/alejandro-small.jpg",
  siteLogo: "⬆️",
  navLinks: [
    { text: "Experiences", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/najib-baraka/" },
    { text: "Github", href: "https://github.com/Najibb7" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  // socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Najib BARAKA",
    specialty: "Développeur FullStack",
    summary:
      "Un peu de JavaScript, beaucoup de passion, et une bonne dose de café : bienvenue dans mon univers de dev. 🚀",
    cv: "/CV_Alternance_najib.pdf",
  },
  experience: [
    {
      company: "Droit Quotidien Legal Tech",
      position: "Développeur Web",
      startDate: "Stage : Oct 2024",
      endDate: "Dec 2024",
      summary: [
        "Conception d'une interface utilisateur dédiée à la gestion administrative de l'entreprise, centralisant l'ensemble des documents, factures et devis. Cette solution a permis d'améliorer l'organisation et d'optimiser les processus internes, entraînant un gain de temps estimé à plus de 30 %.",
        "Participation à l’intégration front-end de maquettes brutes fournies par l’équipe design, en utilisant HTML et CSS. Mon rôle consistait à transformer ces maquettes en pages web fonctionnelles et fidèles au rendu attendu, tout en assurant une bonne responsivité, une compatibilité entre navigateurs, et le respect des bonnes pratiques en accessibilité.",
      ],
    }
  ],
  projects: [
    {
      name: "Dwarf Compagnie",
      summary: "Une interface utilisateur pour la gestion d'une compagnie de nain ⛏️",
      linkPreview: "/",
      linkSource: "https://github.com/Najibb7/Project-PDO",
      image: "/Dwarf_Compagnie.png",
      techno: ["PHP", "Bootstrap"]
    },
    {
      name: "Movie Search",
      summary: "Barre de cherche de film relier a une API (TMDB)",
      linkPreview: "/",
      linkSource: "https://github.com/Najibb7",
      image: "/Movie_Search.png",
      techno: ["JS","HTML/CSS"]
    },
  ],
  about: {
    description: `
    Bonjour, je suis Najib Baraka, développeur Fullstack en devenir, passionné par la création d’expériences numériques engageantes et bien pensées. Curieux et motivé, je me forme aux technologies front-end et mobile. 
    Mon objectif : transformer ma passion en expertise concrète en rejoignant une équipe qui me permettra de progresser sur des projets ambitieux.
    `,
  },
};

// #5755ff
