"use client";
import MemeGenerator from '../components/MemeGenerator';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Next.js Meme Generator</h1>
        <MemeGenerator />
      </div>
    </main>
  );
}
