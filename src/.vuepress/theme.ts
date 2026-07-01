import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://mustnull.github.io",

  author: {
    name: "MustNull",
    url: "https://github.com/MustNull",
  },

  plugins: {
    icon: {
      assets: "fontawesome-with-brands",
    },
    blog: true,
    slimsearch: true,
  },

  logo: "/logo.svg",

  repo: "MustNull/myblog",

  docsDir: "src",

  blog: {
    name: "MustNull",
    avatar: "/logo.svg",
    description: "一介码农，学无止境",
    medias: {
      GitHub: "https://github.com/MustNull",
    },
    articlePerPage: 10,
    timeline: "时光荏苒",
  },

  navbar: [
    { text: "首页", link: "/", icon: "home" },
    { text: "博客", link: "/blog/", icon: "blog" },
    { text: "关于", link: "/intro.html", icon: "info" },
  ],

  sidebar: false,
});
