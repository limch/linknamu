# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스 (Next.js 14 + Tailwind CSS + MongoDB Atlas)

## 시작하기

```bash
npm install
cp .env.local.example .env.local   # MONGODB_URI 입력
npm run dev
```

- 프로필/링크 수정: `src/data/profile.ts`
- 프로필 사진: `public/` 에 이미지를 넣고 `profile.image` 경로 변경
- `MONGODB_URI`가 없어도 페이지는 동작하며, 클릭 수만 저장되지 않습니다.
