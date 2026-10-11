import type { Title as TitleParts } from '@/content/types';

type Props = { parts: TitleParts; className?: string };

/** Renders a heading whose emphasis word is set in the script face. */
export default function Title({ parts, className = '' }: Props) {
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.script ? (
          <span key={i} className="script">
            {part.t}
          </span>
        ) : (
          <span key={i}>{part.t}</span>
        )
      )}
    </span>
  );
}
