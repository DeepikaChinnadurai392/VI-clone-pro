import BackButton from "../components/BackButton"; 
import styles from '../styles/CompanyLogin.module.css';

export default function CompanyLogin() {
  return (
    <div className={styles.container}>
   
      <div className={styles.logo}>
        <img src="/logo1.png" alt="Logo" />
      </div>

     
      <h1 className={styles.title}>Access the company platform</h1>
      <p className={styles.subtitle}>
        Use your work email address to continue. Need an account?{" "}
        <a href="/signup">We’ll help you create one</a>.
      </p>

      
      <form method="POST" action="http://localhost:8081/login?option=company">
        <input
          type="email"
          name="email"
          placeholder="Work email address*"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

   
      <div className={styles.or}>OR</div>

      <button className={styles.googleButton}>
        <img src="/google-icon.png" alt="Google" className={styles.googleIcon} />
        Continue with Goo
      </button>

    
      <p className={styles.info}>
        By continuing you are agreeing to Virtual Internships's{" "}
        <a href="https://www.virtualinternships.com/policies/terms-and-conditions/?_gl=1*rshp3l*_gcl_au*ODQ4MzY2MzMuMTc1ODg2NTcwOS4xNzY4MTI0MTc5LjE3NjE4MTM4NTguMTc2MTgxMzg1OA..*_ga*MTYxMjIxNTU3NC4xNzU4ODY1NzEx*_ga_SFQLTTJMF5*czE3NjE4MTM4MTUkbzIxJGcxJHQxNzYxODE0NzgyJGozMSRsMCRoMA..">Terms of Use</a> & <a href="https://www.virtualinternships.com/policies/privacy?_gl=1*15jyxmc*_gcl_au*ODQ4MzY2MzMuMTc1ODg2NTcwOS4xNzY4MTI0MTc5LjE3NjE4MTM4NTguMTc2MTgxMzg1OA..*_ga*MTYxMjIxNTU3NC4xNzU4ODY1NzEx*_ga_SFQLTTJMF5*czE3NjE4MTM4MTUkbzIxJGcxJHQxNzYxODE0Nzk2JGoxNyRsMCRoMA..">Privacy Policy</a>
      </p>

      <BackButton />


      <div className={styles.extra}>
        <h3>Tap into a global pool of remote interns</h3>
        <p>Find and connect with interns that fit your business needs.</p>
        <strong>Host Company</strong>
      </div>
    </div>
  );
}