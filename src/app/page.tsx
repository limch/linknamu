import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="mx-auto flex w-full max-w-md flex-col items-center gap-8 px-4 py-16">
      <ThemeToggle />
      <Profile profile={profile} />
      <LinkList links={links} counts={counts} />
      <footer className="text-xs text-neutral-400">🌳 링크나무</footer>
    </main>
  );
}
