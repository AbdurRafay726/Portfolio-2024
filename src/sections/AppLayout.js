import About from "./About";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Footer from "./Footer";
import Loading from "../components/Loading";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

export default function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating data fetching or component initialization delay
    setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Replace with your actual loading time logic
  }, []);

  return (
    <div>
      <NavBar />
      {isLoading && <Loading />}
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

ReactDOM.render(<AppLayout />, document.getElementById("root"));
