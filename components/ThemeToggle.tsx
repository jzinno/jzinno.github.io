import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let preference;
      try { preference = localStorage.getItem("theme"); } catch {}
      const next = preference === "dark" ||
        (preference !== "light" && systemTheme.matches);
      document.documentElement.classList.toggle("dark", next);
      setDark(next);
    };
    sync();
    systemTheme.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      systemTheme.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      title={`Switch to ${dark ? "light" : "dark"} mode`}
      onClick={toggle}
      className="mx-4 mb-4 inline-flex size-10 items-center justify-center rounded-md text-xl text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors"
    >
      {dark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}
