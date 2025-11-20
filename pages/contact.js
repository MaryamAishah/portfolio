import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <Head><title>Contact — Maryam Aishah</title></Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerWide}>
          <h2>Contact</h2>
          {!sent ? (
            <form
  action="https://formsubmit.co/maryamaishah08@gmail.com"
  method="POST"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />

  <label>
    Name
    <input required name="name" />
  </label>

  <label>
    Email
    <input required name="email" type="email" />
  </label>

  <label>
    Message
    <textarea required name="message" rows={6}></textarea>
  </label>

  <button type="submit" className={styles.button}>Send</button>
</form>

          ) : (
            <p>Thank you for your message.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
