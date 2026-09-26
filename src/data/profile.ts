export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
};

// 여기서 프로필과 링크를 수정하세요. (현재는 보여 주기용 더미 값)
export const profile: Profile = {
  name: "임철호",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요.",
  image: "/me.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://velog.io" },
];
