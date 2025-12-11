// pages/selection.js
import { useRouter } from "next/router";
import styles from "../styles/Selection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Selection() {
  const router = useRouter();

  const handleSelect = (option) => {
    router.push({
      pathname: "/login",
      query: { option },
    });
  };

  return (
    <div className={styles.container}>
      
      <Link href="/login">
        <Image 
          src="/mainlogo.png" 
          alt="Logo" 
          width={300} 
          height={250} 
          priority
        />
      </Link>

      <h1 className={styles.title}>
        The #1 Platform for <span>Guaranteed</span>
        <br />
        Remote Internships
      </h1>
      <h3 className={styles.subtitle}>What are you looking for?</h3>

      <div className={styles.options}>
        
        <Link href="/internship">
          <div className={styles.optionCard}>
            <Image src="/loginlogo.png" alt="Looking for internship" width={150} height={150} />
            <p>I'm looking for an internship →</p>
          </div>
        </Link>

      
        <div className={styles.optionCard} onClick={() => handleSelect("company")}>
          <Image src="/loginlogo1.png" alt="Looking for intern" width={150} height={150} />
          <p>I'm looking for an intern for my company →</p>
        </div>
      </div>

      
      <div className={styles.circularImages}>
        <Image src="/circle1.png" alt="circle" width={80} height={80} />
        <Image src="/circle2.png" alt="circle" width={80} height={80} />
        <Image src="/circle3.png" alt="circle" width={80} height={80} />
        <Image src="/circle4.png" alt="circle" width={80} height={80} />
        <Image src="/circle5.png" alt="circle" width={80} height={80} />
        <Image src="/circle6.png" alt="circle" width={80} height={80} />
      </div>
    </div>
  );
}
