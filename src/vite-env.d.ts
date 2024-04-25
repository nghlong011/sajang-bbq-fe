/// <reference types="vite-plugin-svgr/client" />
interface ImportMeta {
  env: Record<string, string>;
}
interface ImportMetaEnv {
  readonly VITE_REACT_APP_BACKEND_URL: string;
}
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
