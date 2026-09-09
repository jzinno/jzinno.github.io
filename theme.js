// Runs before styles paint; the same preference is used by the sidebar toggle.
(() => {
  let preference;
  try { preference = localStorage.getItem("theme"); } catch {}
  const dark = preference === "dark" ||
    (preference !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
})();
