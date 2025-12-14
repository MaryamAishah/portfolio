import { useEffect, useState } from "react";
import styles from "../styles/SearchBar.module.css";

export default function FakeSearchBar() {
  const searches = [
    "building full-stack projects with love 💻",
    "how I design clean user experiences",
    "my journey into artificial intelligence",
    "javascript tricks everyone should know",
    "how I approach solving technical challenges",
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);


  useEffect(() => {
    const current = searches[index];

    const typingInterval = setInterval(() => {
      setDisplayText(current.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex === current.length) {
        clearInterval(typingInterval);


        setTimeout(() => {
          setIndex((prev) => (prev + 1) % searches.length);
          setCharIndex(0);
          setDisplayText("");
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [index, charIndex]);

  return (
    <div className={styles.searchBar}>
      <span className={styles.icon}>🔍</span>
      <span className={styles.text}>{displayText}</span>
    </div>
  );
}