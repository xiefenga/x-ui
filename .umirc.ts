import { defineConfig } from "dumi";

export default defineConfig({
  title: "x-ui",
  favicon: "https://xiefeng.tech/custom_assets/img/avatar.jpg",
  logo: "https://xiefeng.tech/custom_assets/img/avatar.jpg",
  outputPath: "docs-dist",
  locales: [["zh-CN", "中文"]],
  sass: {
    implementation: require("node-sass"),
  },
});
