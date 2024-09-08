import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://tom-wat.github.io/",
  base: "/portfolio",
  integrations: [icon()],
});
