import NavBar from "../components/navbar";
import Hero from '../components/hero'
import Features from "../components/features";
import Extensions from "../components/extensions";
import Questions from "../components/questions";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Features />
     <Extensions />
     <Questions />
     <Contact />
     <Footer />
    </div>
  );
}

export default Home;
