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
        <title>Maryam Aishah — AI × CS</title>
        <meta name="description" content="AI × CS | Machine learning, deep learning, programming."/>
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero
          title="Maryam Aishah"
          subtitle="Aspiring AI developer and Computer Science engineer."
          ctaText="See Resume"
        />

        <section className={styles.grid}>
          <SectionCard title="About">
            <p>
              High school senior exploring AI and Automated Systems. 
              This website is where I share my projects, research, and everything I'm building along the way.
            </p>
          </SectionCard>

          <SectionCard title="Projects">
            <ul>
              <li>Project A</li>
              <li>Project B</li>
              <li>Project C</li>
            </ul>
          </SectionCard>

          <SectionCard title="Publications">
            <p>To be updated.</p>
          </SectionCard>

          <SectionCard title="Contact">
            <a href="mailto:maryamaishah08@gmail.com" className={styles.button}>
  Email Me
</a>
          </SectionCard>
        </section>
      </main>

      <Footer />
    </>
  )
}
