// global.d.ts
interface ImportMetaEnv {
  // 사용하고 있는 환경 변수 이름과 타입을 여기에 명시합니다.
  readonly VITE_API_KEY: string;
  // 필요한 다른 VITE_ 변수도 여기에 추가하세요.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}