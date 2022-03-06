/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.png" {
  const value: any
  export = value;
}

declare module "*.svg" {
  const value: any
  export = value;
}

declare module '*.mp3' {
  const src: string
  export default src
}

declare module '*.wav' {
  const src: string
  export default src
}