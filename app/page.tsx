"use client";
import MemeGenerator from '../components/MemeGenerator';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>MemeForge</h1>
        <h2>create your own dank meme</h2>
        <MemeGenerator />
      </div>
    </main>
  );
}
