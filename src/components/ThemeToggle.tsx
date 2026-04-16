"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button className="themeToggle" onClick={() => setDark(!dark)}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}