import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/myblog/",
  lang: "zh-CN",
  title: "MustNull 的博客",
  description: "MustNull 的个人博客，记录技术与生活",

  theme,
  bundler: viteBundler(),
});
