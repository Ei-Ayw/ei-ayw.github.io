import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
// https://astro.build/config
export default defineConfig({
  site: "https://ei-ayw.github.io",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://ei-ayw.github.io/sitemap-index.xml",
        "https://ei-ayw.github.io/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
});
