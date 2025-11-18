import { Slot, component$ } from "@builder.io/qwik";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  as?: "section" | "div";
};

/**
 * Section wrapper with header and consistent spacing.
 */
// PUBLIC_INTERFACE
export const Section = component$((props: Props) => {
  const { id, title, subtitle, as = "section" } = props;
  const Tag = as as any;

  return (
    <Tag id={id} class="section" aria-labelledby={id ? `${id}-title` : undefined}>
      <div class="container">
        <header class="section-header">
          <h2 id={id ? `${id}-title` : undefined} class="section-title">
            {title}
          </h2>
          {subtitle ? <p class="section-subtitle">{subtitle}</p> : null}
        </header>
        <Slot />
      </div>
    </Tag>
  );
});
