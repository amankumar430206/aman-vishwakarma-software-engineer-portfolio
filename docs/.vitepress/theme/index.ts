import DefaultTheme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";
import { onMounted } from "vue";
import "./custom.css";

export default {
  ...DefaultTheme,

  enhanceApp(ctx: EnhanceAppContext) {
    const { router } = ctx;

    if (typeof window === "undefined") return;

    let statusInterval: number | undefined;

    const setupHeroEnhancements = () => {
      // ---- Time-based greeting ----
      const greetingEl = document.getElementById("hero-greeting");
      if (greetingEl) {
        const hour = new Date().getHours();
        greetingEl.textContent = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
      }

      // ---- Live status (safe interval) ----
      const statusEl = document.getElementById("live-status-text");
      if (statusEl) {
        const statuses = [
          "Cross-border fintech & neobanking platforms",
          "Scalable React + TypeScript frontends",
          "AWS-native CI/CD & cloud architecture",
        ];

        let index = 0;
        statusEl.textContent = statuses[index];

        if (statusInterval) clearInterval(statusInterval);

        statusInterval = window.setInterval(() => {
          index = (index + 1) % statuses.length;
          statusEl.textContent = statuses[index];
        }, 5000);
      }

      // ---- Subtle hero image parallax ----
      const heroImage = document.querySelector(".VPHero .image") as HTMLElement | null;
      if (heroImage) {
        window.addEventListener("scroll", () => {
          const offset = Math.min(window.scrollY * 0.02, 4);
          heroImage.style.transform = `translateY(${offset}px)`;
        });
      }
    };

    // Run once after initial mount
    onMounted(() => {
      setupHeroEnhancements();
    });

    // Run on every client-side route change (VitePress way)
    router.onAfterRouteChange = () => {
      setTimeout(setupHeroEnhancements, 0);
    };
  },
};
