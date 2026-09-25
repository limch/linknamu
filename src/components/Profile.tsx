import Image from "next/image";
import type { Profile as ProfileType } from "@/data/profile";

export default function Profile({ profile }: { profile: ProfileType }) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        unoptimized
        className="h-40 w-40 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-neutral-800"
      />
      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{profile.bio}</p>
    </section>
  );
}
