import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/hero";
import { ProjectsSection } from "~/components/sections/projects";
import { SkillsSection } from "~/components/sections/skills";
import { AboutSection } from "~/components/sections/about";
import { ContactSection } from "~/components/sections/contact";

// PUBLIC_INTERFACE
export default component$(() => {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
});

export const head: DocumentHead = {
  title: "Home • My Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Showcasing projects, skills, and experience. Built with Qwik and the Ocean Professional theme.",
    },
    { name: "theme-color", content: "#2563EB" },
    { property: "og:title", content: "My Portfolio" },
    {
      property: "og:description",
      content:
        "Showcasing projects, skills, and experience. Built with Qwik and the Ocean Professional theme.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/og-image.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "My Portfolio" },
    {
      name: "twitter:description",
      content:
        "Showcasing projects, skills, and experience. Built with Qwik and the Ocean Professional theme.",
    },
    { name: "twitter:image", content: "/og-image.png" },
  ],
  links: [
    {
      rel: "canonical",
      href: "/",
    },
  ],
};
