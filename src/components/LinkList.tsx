import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type Props = {
  links: LinkItem[];
  counts: Record<string, number>;
};

export default function LinkList({ links, counts }: Props) {
  return (
    <ul className="flex w-full flex-col gap-8">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} initialCount={counts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
