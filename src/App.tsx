import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
