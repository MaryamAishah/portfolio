import styles from '../styles/Home.module.css'

export default function Hero({ title, subtitle, ctaText }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1>{title}</h1>
        <p className={styles.lead}>{subtitle}</p>
        <div className={styles.actions}>
          <a href="/resume" className={styles.button}>{ctaText || "View Resume"}</a>
          <a href="/contact" className={styles.ghost}>Contact</a>
        </div>
      </div>
    </section>
  )
}
