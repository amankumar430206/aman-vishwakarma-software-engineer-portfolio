import { defineConfig } from "vitepress";

export default defineConfig({
  appearance: "force-dark", // to have dark mode by default
  title: "Aman Vishwakarma",
  description: "Senior Software Engineer | Fintech | Full-Stack | Cloud",
  head: [
    ["meta", { property: "og:title", content: "Aman Vishwakarma — Senior Software Engineer" }],
    ["meta", { property: "og:description", content: "Building high-scale fintech & cloud systems." }],
    ["meta", { property: "og:image", content: "/og.jpeg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Experience", link: "/experience" },
      { text: "Projects", link: "/projects" },
      // { text: "Architecture", link: "/architecture" },
      // { text: "Skills", link: "/skills" },
      { text: "Contact", link: "/contact" },
      { text: "🏅 Certifications", link: "/certifications" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/amankumar430206" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/aman-vishwakarma/" },
    ],
    footer: {
      message: "The real work of a software engineer happens before the first line of code is written 🙌",
      copyright: "Aman Vishwakarma",
    },
  },
});
