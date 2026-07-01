import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/notes/",
  lang: "zh-CN",
  title: "MustNull 的博客",
  description: "MustNull 的个人博客，记录技术与生活",

  theme,
  bundler: viteBundler(),

  head: [
    [
      "script",
      {
        src: "https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0/dist/autoload.js",
      },
    ],
  ],
});
