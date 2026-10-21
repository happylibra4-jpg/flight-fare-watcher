import { useEffect } from "react";

type Meta = { name?: string; property?: string; content: string };

/** Sets the page <title> and <meta> tags for the current route (client-side replacement for route `head`). */
export function useDocumentHead({ title, meta = [] }: { title: string; meta?: Meta[] }) {
  useEffect(() => {
    document.title = title;
    for (const m of meta) {
      const attr = m.property ? "property" : "name";
      const key = (m.property ?? m.name)!;
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", m.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, JSON.stringify(meta)]);
}
