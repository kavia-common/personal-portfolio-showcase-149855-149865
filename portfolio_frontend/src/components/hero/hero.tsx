import { component$ } from "@builder.io/qwik";

/**
 * Hero section with title, subtitle, and call-to-action links.
 */
// PUBLIC_INTERFACE
export const Hero = component$(() => {
  return (
    <section id="home" class="hero" aria-label="Introduction">
      <div class="container hero-inner">
        <div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: "0 0 .5rem" }}>
            Hi, I’m <span style={{ color: "var(--color-primary)" }}>Your Name</span>.
          </h1>
          <p class="muted" style={{ maxWidth: "60ch", marginBottom: "1rem" }}>
            I build modern, accessible web applications with a focus on performance and clean design.
          </p>
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            <a class="button" href="#projects" aria-label="See my projects">
              View Projects
            </a>
            <a class="button secondary" href="#contact" aria-label="Contact me">
              Contact
            </a>
          </div>
        </div>
        <div class="hero-card" role="img" aria-label="Abstract ocean-themed illustration">
          <div
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "12px",
              background:
                "radial-gradient(120px 120px at 20% 40%, rgba(37,99,235,.25), transparent), radial-gradient(160px 160px at 80% 60%, rgba(245,158,11,.25), transparent), linear-gradient(180deg, #fff, #f9fafb)",
              border: "1px solid rgba(17,24,39,0.06)",
            }}
          />
        </div>
      </div>
    </section>
  );
});
