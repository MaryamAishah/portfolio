import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Maryam Aishah</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerWide}>
          <h2>Resume</h2>
          <section>
            <h3>Education</h3>
            <p>Bishop Cotton College — High School (Jun 2024-Apr 2026)</p>
            <p>The Grandeur International School — High School (Jun 2020-Apr 2024)</p>
          </section>
          <section>
            <h3>Experience</h3>
            <ul>
              <li><strong>Mathematics Tutor</strong> — Lead SAT Math bootcamps and Calculus sessions for concentrated cohorts of high school students. (Apr 2025-Present)</li>
              <li><strong>Python Programmer</strong> — Completed the Python CIP course by Stanford University. (Apr-May 2024)</li>
            </ul>
          </section>

          <section>
            <h3>Awards & Honors</h3>
            <p>National Merit Scholarship Semifinalist (Aug 2025)</p>
            <p>1st Place Winner of International Qur'an Competition (Mar 2025)</p>
          </section>

          <section>
            <h3>Skills</h3>
            <p>Machine learning, Python, PyTorch, SQL, REST APIs, HTML, Java</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
