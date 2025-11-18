import { component$ } from "@builder.io/qwik";
import skills from "~/data/skills.json";
import { Card } from "~/components/ui/card";
import { Section } from "~/components/ui/section";

type Skill = {
  name: string;
  level: string;
  category: string;
};

/**
 * Skills section showing grouped skills from JSON.
 */
// PUBLIC_INTERFACE
export const SkillsSection = component$(() => {
  const list = skills as Skill[];

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I use to craft performant and accessible web apps."
    >
      <div class="grid cols-3">
        {list.map((s, idx) => (
          <Card key={idx} as="article">
            <h3 style={{ margin: "0 0 .25rem" }}>{s.name}</h3>
            <p class="muted" style={{ margin: 0 }}>{s.category}</p>
            <div
              style={{
                marginTop: ".75rem",
                background: "#e5e7eb",
                borderRadius: "8px",
                height: "8px",
                overflow: "hidden",
              }}
              aria-label={`${s.name} proficiency: ${s.level}`}
              role="img"
            >
              <div
                style={{
                  width: s.level,
                  height: "100%",
                  background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
});
