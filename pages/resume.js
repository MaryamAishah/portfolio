import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume- Maryam</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerWide}>
          <center><h1>Resume</h1>
          <a href="/Website- Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>Download PDF</a></center>
          <section>
            <h2>Education</h2>
            <p>Bishop Cotton College — High School (Jun 2024-Apr 2026)</p>
          </section>
                    <section>
            <h2>Projects</h2>
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
            <h2>Experience</h2>
            <ul>
              <li><strong>Intern, Cyberry Labs</strong>- Building real-world use-cases on Git, automation platforms, Python, RESTful APIs, and AI tools. (Oct 2025-Present)</li>
              <li><strong>Math Tutor, Schoolhouse.world</strong> — Delivered 15+ hours of engaging SAT and Calculus tutoring sessions to 23 learners, 
              enhancing comprehension and problem-solving skills and promoting a supportive academic environment (Apr 2025-Present)   
              <ol> <a href="https://schoolhouse.world/transcript/153771aa-d5a6-48d7-9781-232c4e139cd2"> <u>Live Tutoring Portfolio</u></a></ol></li>
              <li><strong>Qur'an Teacher</strong>- Conducted memorization workshops and Qur'an recitation correction sessions. (May 2024-Present)</li>
              <li><strong>Python Programmer</strong> — Completed the Python CIP course by Stanford University. 
              Used skills learnt to create various projects (Apr-May 2024)
               <ol> <a href="https://codeinplace.stanford.edu/cip4/certificate/d58xj8"> <u>Certificate</u></a></ol></li>
            </ul>
          </section>

          <section>
            <h2>Awards & Honors</h2>
            <ul>
              <li>National Merit Scholarship Semifinalist (Aug 2025)</li>
              <li>1st Place Winner of International Qur'an Competition (Mar 2025)</li>
              <li>Award for Outstanding Academic Proficiency (Jan 2024)</li>
              <li>1st Place Winner of Interschool Qur'an Competition (Nov 2023)</li>
            </ul>
          </section>
          
        <section>
          <h2>Research</h2>
            <h4>Individual Research Report- IGCSE Global Perspectives</h4>
            <a
  href="/GP-Individual-Report.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  <u>Download PDF</u>
</a>
<p> Investigated the influence of social media on individuals’ ability to focus 
through primary and secondary research, and presented my findings in a structured 2000-word research paper.</p>
         
          </section> 

          <section>
            <h2>Skills</h2>
            <p>Python, JavaScript, CSS,  HTML, SQL, Web Development, Machine Learning, Research, Analytical Reasoning, Creative Writing</p>
          </section>
           
        </div>
      </main>
      <Footer />
    </>
  )
}
