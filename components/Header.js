import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.name}>Maryam Aishah</Link>
          <span className={styles.role}>AI × CS · Student</span>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
