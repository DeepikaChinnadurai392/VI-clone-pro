import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FutureOfWork from '../components/FutureOfWork';
import Footer from '../components/Footer';
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    console.log("GOOGLE_CLIENT_ID:", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
    console.log("NEXT_PUBLIC_API_BASE:", process.env.NEXT_PUBLIC_API_BASE);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <FutureOfWork />
      <Footer />
    </div>
  );
}
