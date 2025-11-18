import { component$ } from "@builder.io/qwik";
import profile from "~/data/profile.json";
import { Section } from "~/components/ui/section";

/**
 * About section with brief profile and highlights.
 */
// PUBLIC_INTERFACE
export const AboutSection = component$(() => {
  const p = profile as {
    name: string;
    role: string;
    summary: string;
    highlights: string[];
    avatar?: string;
  };

  return (
    <Section id="about" title="About" subtitle="A quick intro and what I bring to the table.">
      <div class="grid cols-2">
        <div>
          <h3 style={{ margin: "0 0 .25rem" }}>
            {p.name} — <span class="muted">{p.role}</span>
          </h3>
          <p class="muted" style={{ marginTop: ".5rem" }}>{p.summary}</p>
          <ul>
            {p.highlights.map((h, i) => (
              <li key={i} style={{ marginBottom: ".4rem" }}>{h}</li>
            ))}
          </ul>
        </div>
        <div class="hero-card" aria-label="Profile illustration">
          {p.avatar ? (
            <img
              src={p.avatar}
              alt={`${p.name} avatar`}
              width={640}
              height={640}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "220px",
                borderRadius: "12px",
                background:
                  "radial-gradient(160px 160px at 30% 50%, rgba(37,99,235,.25), transparent), linear-gradient(180deg, #fff, #f9fafb)",
                border: "1px solid rgba(17,24,39,0.06)",
              }}
            />
          )}
        </div>
      </div>
    </Section>
  );
});
