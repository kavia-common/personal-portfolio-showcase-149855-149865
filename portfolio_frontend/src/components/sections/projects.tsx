import { component$ } from "@builder.io/qwik";
import projects from "~/data/projects.json";
import { Card } from "~/components/ui/card";
import { Section } from "~/components/ui/section";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  url?: string;
  repo?: string;
};

/**
 * Projects section rendering cards from local JSON data.
 */
// PUBLIC_INTERFACE
export const ProjectsSection = component$(() => {
  const list = projects as Project[];

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of work demonstrating modern web practices and thoughtful UX."
    >
      <div class="grid cols-3">
        {list.map((p, idx) => (
          <Card key={idx} as="article">
            {p.image ? (
              <img
                src={p.image}
                alt={`${p.title} preview`}
                width={640}
                height={360}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
            ) : null}
            <h3 style={{ margin: "0.5rem 0" }}>{p.title}</h3>
            <p class="muted" style={{ margin: "0 0 .75rem" }}>
              {p.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: ".75rem" }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: ".85rem",
                    padding: ".25rem .5rem",
                    borderRadius: "9999px",
                    background: "rgba(37,99,235,0.08)",
                    color: "var(--color-primary)",
                    border: "1px solid rgba(37,99,235,0.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              {p.url ? (
                <a class="button" href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} live`}>
                  Live
                </a>
              ) : null}
              {p.repo ? (
                <a
                  class="button secondary"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title} repository`}
                >
                  Code
                </a>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
});
