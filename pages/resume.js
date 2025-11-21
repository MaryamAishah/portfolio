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
          <h1><center>Resume</center></h1>
          <section>
            <h3>Education</h3>
            <p>Bishop Cotton College — High School (Jun 2024-Apr 2026)</p>
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
            <ul>
              <li>National Merit Scholarship Semifinalist (Aug 2025)</li>
              <li>1st Place Winner of International Qur'an Competition (Mar 2025)</li>
            </ul>
          </section>
          <section>
            <h3>Projects</h3>
            <h4>PromptSmith</h4>
            <a href="https://github.com/MaryamAishah/PromptSmith"><u>GitHub</u></a>
              <ul>
              <li>LLM-powered prompt optimizer built with Node.js, Next.js, and Gemini APIs</li>
              <li>Uses a custom prompt-analysis pipeline for precision rewriting and semantic boosting</li>
              <li>User interface built using React for input, refinement, and comparison workflows</li>
            </ul>
            <h4>Unravel</h4>
            <a href="https://github.com/MaryamAishah/unravel"><u>GitHub</u></a>
              <ul>
              <li>Python explainer built with React, Pyodide (for in-browser execution), and a custom AST parser</li>
              <li>Simulates code execution, breaks down code line-by-line, and detects and explains runtime and logic errors</li>
            </ul>
          </section>

          <section>
            <h3>Skills</h3>
            <p>Machine learning, Programming, Web Development, Research</p>
          </section>
          
        </div>
      </main>
      <Footer />
    </>
  )
}
