import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp() {
    // Live status text rotation
    if (typeof window !== "undefined") {
      const statusEl = document.getElementById("live-status-text");

      if (statusEl) {
        const statuses = [
          "Cross-border fintech & neobanking platforms",
          "Scalable React + TypeScript frontends",
          "AWS-native CI/CD & cloud architecture",
        ];

        let index = 0;
        statusEl.textContent = statuses[index];

        setInterval(() => {
          index = (index + 1) % statuses.length;
          statusEl.textContent = statuses[index];
        }, 5000);
      }
    }

    if (typeof window !== "undefined") {
      // greeting message based on time of day
      const greetingEl = document.getElementById("hero-greeting");

      if (greetingEl) {
        const hour = new Date().getHours();
        let greeting = "Hello";

        if (hour >= 5 && hour < 12) greeting = "Good morning";
        else if (hour >= 12 && hour < 17) greeting = "Good afternoon";
        else greeting = "Good evening";

        greetingEl.textContent = greeting;
      }

      // hero image parallax effect
      const heroImage = document.querySelector(".VPHero .image") as HTMLElement;

      if (heroImage) {
        window.addEventListener("scroll", () => {
          const offset = Math.min(window.scrollY * 0.02, 4);
          heroImage.style.transform = `translateY(${offset}px)`;
        });
      }

      // download resume click tracking
      window.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a");

        if (link && link.getAttribute("href") === "/resume.pdf") {
          console.log("[Analytics] Resume downloaded");

          localStorage.setItem("resume_downloads", String(Number(localStorage.getItem("resume_downloads") || 0) + 1));

          // Hook for future analytics
          window.dispatchEvent(
            new CustomEvent("resume_download", {
              detail: {
                timestamp: Date.now(),
                source: "hero",
              },
            }),
          );
        }
      });
    }
  },
};
