import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>© {new Date().getFullYear()} Maryam Aishah</div>
      </div>
    </footer>
  )
}
