import type { ComponentChildren } from "preact";

export default function StylerComponent({ style, children }: { style: string; children: ComponentChildren }) {
  return (
    <>
      <style>{style}</style>

      {children}
    </>
  )
}
