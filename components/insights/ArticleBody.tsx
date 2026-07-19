import type { ArticleBlock } from "@/types";

/** Render a block-based article body with editorial typography. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="pt-4 font-serif text-2xl leading-snug text-paper md:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "pullquote":
            return (
              <blockquote
                key={index}
                className="my-10 border-l-2 border-signal py-2 pl-6 md:-mx-6 md:pl-8"
              >
                <p className="font-serif text-2xl leading-snug text-paper italic md:text-[1.7rem]">
                  {block.text}
                </p>
              </blockquote>
            );
          case "list":
            return (
              <ul key={index} className="space-y-3 pl-1">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-4 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-2.75 h-px w-4 shrink-0 bg-signal"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "paragraph":
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
