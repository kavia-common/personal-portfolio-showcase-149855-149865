import { $, component$, useSignal } from "@builder.io/qwik";

/**
 * Sticky top navigation with smooth scrolling anchors.
 * Highlights Ocean Professional theme and accessibility.
 */
// PUBLIC_INTERFACE
export const Nav = component$(() => {
  const open = useSignal(false);
  const toggle = $(() => {
    open.value = !open.value;
  });

  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav class="navbar" aria-label="Primary">
      <a class="visually-hidden" href="#main-content">Skip to content</a>
      <div class="navbar-inner">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              boxShadow: "var(--shadow-sm)",
            }}
            aria-hidden="true"
          />
          <strong style={{ color: "var(--color-text)" }}>My Portfolio</strong>
        </div>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open.value ? "true" : "false"}
          class="button"
          style="display:none;background:transparent;color:#374151;padding:.4rem .6rem;border:1px solid rgba(17,24,39,.1)"
          onClick$={toggle}
        >
          ☰
        </button>

        <div class="nav-links" role="navigation" data-open={open.value ? "true" : "false"}>
          {links.map((l) => (
            <a key={l.href} class="nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <style>
        {`
          .visually-hidden {
            position: absolute !important;
            height: 1px; width: 1px; overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap; border: 0; padding: 0; margin: -1px;
          }
          @media (max-width: 760px) {
            nav .button { display: inline-flex !important; }
            .nav-links {
              display: none;
            }
            .nav-links[data-open="true"] {
              display: flex;
              flex-direction: column;
              padding: .5rem 1rem 1rem;
            }
          }
        `}
      </style>
    </nav>
  );
});
