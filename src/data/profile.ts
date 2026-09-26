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
  {
    id: "naver-cafe",
    title: "네이버 카페",
    url: "https://section.cafe.naver.com/ca-fe/home/?tab=join&t=1790449543884",
  },
  { id: "email", title: "이메일", url: "mailto:limcholho@gmail.com" },
];
