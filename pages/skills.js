import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Skills() {
  return (
    <>
      <Head><title><center>Skills — Maryam Aishah</center></title></Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerWide}>
          <h1><center>Skills</center></h1>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <h3>AI Development</h3>
              <p>GPT Prompting, AI Workflow & Pipeline Design, Model Evaluation & Debugging, Python simulation
</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Core Technical Skills</h3>
              <p>Python, JavaScript, Java, REST APIs, SQL</p>
            </div>
                        <div className={styles.skillCard}>
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript, React, Next.js, Node.js, Vite</p>
            </div>

            <div className={styles.skillCard}>
              <h3>Soft Skills</h3>
              <p>Analytical Problem-Solving, Technical Research, Writing, Designing</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Interests</h3>
              <p>Machine Learning, STEM, Cognitive Science, Meta-Learning, Natural Language Processing</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
