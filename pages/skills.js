import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Skills() {
  return (
    <>
      <Head><title>Skills — Maryam Aishah</title></Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerWide}>
          <h2>Skills</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <h4>Machine Learning</h4>
              <p>Supervised/unsupervised learning, models, fine-tuning.</p>
            </div>
            <div className={styles.skillCard}>
              <h4>Programming Languages</h4>
              <p>Python, JavaScript, Java, SQL, HTML.</p>
            </div>
            <div className={styles.skillCard}>
              <h4>Other</h4>
              <p>Research, Creative Writing, Analytical Skills</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
