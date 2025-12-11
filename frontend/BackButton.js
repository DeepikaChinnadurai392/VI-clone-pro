// components/BackButton.js
"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/Login.module.css"; 

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className={styles.backButton} 
      onClick={() => router.back()}
    >
       ←  Back
    </button>
  );
}