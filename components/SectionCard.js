import styles from '../styles/Home.module.css'

export default function SectionCard({ title, children }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  )
}
