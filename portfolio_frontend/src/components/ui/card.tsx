import { Slot, component$ } from "@builder.io/qwik";

/**
 * Simple card wrapper with Ocean Professional style.
 */
// PUBLIC_INTERFACE
export const Card = component$(({ as = "article" }: { as?: "article" | "div" }) => {
  const Tag = as as any;
  return (
    <Tag class="card" role={as === "article" ? "article" : undefined}>
      <div class="card-body">
        <Slot />
      </div>
    </Tag>
  );
});
