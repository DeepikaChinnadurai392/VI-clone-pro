import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
    
      <div className="navbar-logo">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/mainlogo.png"
            alt="Virtual Internships main logo"
            width={300}
            height={250}
            priority
          />
        </Link>
      </div>

      
      <div className="navbar-links">
        <div className="dropdown">
         <button className="dropbtn" aria-haspopup="true" aria-expanded="false">
  <b>Company ⌄</b>
</button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/companies/">Host an intern</Link>
            <Link href="https://www.virtualinternships.com/#">How it works</Link>
            <Link href="https://www.virtualinternships.com/companies/faqs">FAQs</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" aria-haspopup="true" aria-expanded="false">
            <b>Educators ⌄</b>
          </button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/universities/">University</Link>
            <Link href="https://www.virtualinternships.com/bootcamps">Bootcamp</Link>
            <Link href="https://www.virtualinternships.com/governments/">Government</Link>
            <Link href="https://www.virtualinternships.com/affiliates/">Affiliates</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" aria-haspopup="true" aria-expanded="false">
            <b>Interns ⌄</b>
          </button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/interns/">Application</Link>
            <Link href="https://www.virtualinternships.com/interns/how-it-works">How it works</Link>
            <Link href="https://www.virtualinternships.com/interns/career-fields/">Career fields</Link>
            <Link href="https://www.virtualinternships.com/interns/experience">Experience</Link>
            <Link href="https://www.virtualinternships.com/interns/faqs">FAQs</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" aria-haspopup="true" aria-expanded="false">
            <b>Resources ⌄</b>
          </button>
          <div className="dropdown-content">
            <Link href="https://blog.virtualinternships.com/">Blog</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn" aria-haspopup="true" aria-expanded="false">
            <b>About Us ⌄</b>
          </button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/our-mission/">Our mission</Link>
            <Link href="https://www.virtualinternships.com/our-team/">Our team</Link>
            <Link href="https://www.virtualinternships.com/join-us/">Join us</Link>
            <Link href="https://www.virtualinternships.com/contact-us/">Contact us</Link>
            <Link href="https://www.virtualinternships.com/press/">Press</Link>
          </div>
        </div>
      </div>

      
      <div className="navbar-login">
        <Link href="/selection" aria-label="Go to Login or Signup page">
          <button className="login-button">
            <b>Login / Signup →</b>
          </button>
        </Link>
      </div>
    </nav>
  );
}
