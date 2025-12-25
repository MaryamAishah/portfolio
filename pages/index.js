import { 
  FaBrain,  
  FaCode,     
  FaGlobe,        
  FaLightbulb,    
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";
import { MdEmail } from 'react-icons/md'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SectionCard from '../components/SectionCard'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Maryam Roomi</title>
        <meta
          name="description"
          content="AI × CS | Machine learning, deep learning, programming."
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero
          title="Maryam Roomi"
          subtitle="Computer Science student & emerging AI developer"
          ctaText="See Resume"
        />

        <section className={styles.aboutSection}>
          <SectionCard title="About">
            <p>
              Hi, I’m Maryam! I'm an aspiring software developer and AI enthusiast. Passionate about advancing AI,
              I aim to <br></br>build innovative solutions through technology, with research interests in cognitive science, AGI, and the future of <br></br> machine learning.


            </p>
          </SectionCard>
        </section>


        <section className={styles.projectsSection}>
          <h2 className={styles.sectionHeading}>Projects</h2>

          <div className={styles.projectsGrid}>
 
            <div className={styles.projectCard}>
              <a
                href="https://thepromptsmith.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/promptsmith.png"
                  alt="PromptSmith Project Thumbnail"
                  className={styles.projectImage}
                />
              </a>
              <h3>PromptSmith</h3>
              <p>
                A tool that analyzes your prompt in detail and transforms it into
                a refined set of optimized prompts tailored for maximum impact.
              </p>
            </div>

            <div className={styles.projectCard}>
              <a
                href="https://unravelpython.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/unravel.png"
                  alt="Unravel Project Thumbnail"
                  className={styles.projectImage}
                />
              </a>
              <h3>Unravel</h3>
              <p>
                Unravel processes Python code and provides line-by-line explanations,
                live execution, and error breakdowns. 
              </p>
            </div>
            <div className={styles.projectCard}>
              <a
                href="https://numuweb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/numu.jpeg"
                  alt="Numu Project Thumbnail"
                  className={styles.projectImage}
                />
              </a>
              <h3>Numu</h3>
              <p>
                A habit tracker that helps users build and maintain positive habits through streak tracking and reminders. 
              </p>
            </div>
          </div>
        </section>

<section className={`${styles.skillsSection} ${styles.fadeIn}`}>
  <SectionCard title="Skills">
    <div className={styles.skillsWrapper}>

      <div className={styles.skillRow}>
        <FaBrain size={38} className={styles.skillIconHero} />
        <div>
          <h3 className={styles.skillTitle}>AI Development</h3>
          <p className={styles.skillSubtitle}>
            GPT Prompting, AI Workflow & Pipeline Design, Model Evaluation & Debugging, Python simulation

          </p>
        </div>
      </div>

      <div className={styles.skillRow}>
        <FaCode size={38} className={styles.skillIconHero} />
        <div>
          <h3 className={styles.skillTitle}>Core Technical Skills</h3>
          <p className={styles.skillSubtitle}>
            Python, JavaScript, Java, REST APIs, SQL
          </p>
        </div>
      </div>


      <div className={styles.skillRow}>
        <FaGlobe size={38} className={styles.skillIconHero} />
        <div>
          <h3 className={styles.skillTitle}>Web Development</h3>
          <p className={styles.skillSubtitle}>
            HTML, CSS, JavaScript, React, Next.js, Node.js, Vite
          </p>
        </div>
      </div>

      <div className={styles.skillRow}>
        <FaLightbulb size={38} className={styles.skillIconHero} />
        <div>
          <h3 className={styles.skillTitle}>Soft Skills</h3>
          <p className={styles.skillSubtitle}>
            Analytical Problem-Solving, Technical Research, Writing, Designing
          </p>
        </div>
      </div>



    </div>
  </SectionCard>
</section>

<h2><center>Quick Links</center></h2>
      <div className={styles.quickLinks}>
        <a href="mailto:maryamaishah08@gmail.com"><MdEmail size={34} /></a>
        <a href="https://github.com/MaryamAishah"><FaGithub size={34} /></a>
        <a href="https://linkedin.com/in/maryamroomi/"><FaLinkedin size={34} /></a>
      </div>
      </main>

      <Footer />
    </>
  )
}
