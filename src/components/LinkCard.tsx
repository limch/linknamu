"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  initialCount: number;
};

export default function LinkCard({ link, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((c) => c + 1);
    // 새 탭으로 이동해도 요청이 유실되지 않도록 sendBeacon 우선 사용
    const body = JSON.stringify({ linkId: link.id });
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
    if (!sent) {
      fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative flex w-full items-center justify-center rounded-2xl border border-neutral-200 bg-white px-12 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    >
      <span className="truncate">{link.title}</span>
      <span
        className="absolute right-4 text-xs text-neutral-400 dark:text-neutral-500"
        aria-label={`클릭 ${count}회`}
      >
        {count.toLocaleString()}
      </span>
    </a>
  );
}
