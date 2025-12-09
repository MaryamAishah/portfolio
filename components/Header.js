import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.name}>Maryam Roomi</Link>
          <span className={styles.role}>AI × CS · Student</span>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/skills">Skills</Link>
          <Link href="https://www.notion.so/The-Falcon-2c33499a627f8036969ae85048992aab">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
