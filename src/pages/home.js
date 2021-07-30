import NavBar from "../components/navbar";
import Hero from '../components/hero'
import Features from "../components/features";
import Extensions from "../components/extensions";
import Questions from "../components/questions";

function Home() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Features />
     <Extensions />
     <Questions />
     Aello
    </div>
  );
}

export default Home;
