import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Introductory text here.</p>
      <p>More text here.</p>
      <Link href="/ninjas"><a className={styles.button}>See Ninja Listings</a></Link>
    </div>
  )
}
