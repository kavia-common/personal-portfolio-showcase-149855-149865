import { component$ } from "@builder.io/qwik";
import { Section } from "~/components/ui/section";

/**
 * Contact section using simple mailto link (no backend).
 */
// PUBLIC_INTERFACE
export const ContactSection = component$(() => {
  const email = "hello@example.com";

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Interested in working together or have a question? I’d love to hear from you."
    >
      <div class="card" style={{ padding: "1rem" }}>
        <p class="muted" style={{ marginTop: 0 }}>
          Send me an email and I’ll get back to you shortly.
        </p>
        <a
          class="button"
          href={`mailto:${email}`}
          aria-label="Compose an email"
        >
          Email Me
        </a>
      </div>
    </Section>
  );
});
