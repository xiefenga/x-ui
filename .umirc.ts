import { defineConfig } from "dumi";

export default defineConfig({
  title: "x-ui",
  favicon: "https://oss.xiefeng.tech/img/20210825210658.jpg",
  logo: "https://oss.xiefeng.tech/img/20210825210658.jpg",
  outputPath: "docs-dist",
  locales: [["zh-CN", "中文"]],
  sass: {
    implementation: require("node-sass"),
  },
});
