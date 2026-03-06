// uno.config.ts
import { defineConfig, presetWind3, presetWebFonts } from "unocss";
import presetTypography from "@unocss/preset-typography";

export default defineConfig({
  content: {
    filesystem: [
      "src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,md}",
    ],
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
    },
    colors: {
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
      blue: {
        50: "#EFF6FF",
        100: "#DBEAFE",
        500: "#3B82F6",
        600: "#2563EB",
        700: "#1D4ED8",
      },
    },
  },
  presets: [
    presetWind3(),
    presetTypography({
      cssExtend: {
        "code::before": { content: '""' },
        "code::after": { content: '""' },
        code: {
          "background-color": "#F3F4F6",
          padding: "2px 6px",
          "border-radius": "4px",
          "font-size": "0.875em",
        },
        a: {
          color: "#2563EB",
          "text-decoration": "none",
        },
        "a:hover": {
          color: "#3B82F6",
        },
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [
          { name: "Inter", weights: [300, 400, 500, 600, 700] },
        ],
        mono: ["JetBrains Mono"],
      },
    }),
  ],
});
