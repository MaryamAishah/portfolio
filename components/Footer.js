import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>© {new Date().getFullYear()} Maryam Aishah</div>
        <div className={styles.links}>
          <a href="https://github.com/MaryamAishah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/maryamaishah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
