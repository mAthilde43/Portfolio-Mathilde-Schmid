import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(0, 70, 209, 0.15) 0%,
      /* bleu clair avec transparence */ rgba(0, 70, 209, 0) 50%
        /* bleu foncé avec transparence */
    ),
    linear-gradient(
      141.27deg,
      rgba(201, 32, 184, 0) 50%,
      /* violet clair avec transparence */ rgba(204, 0, 187, 0.15) 100%
        /* violet foncé avec transparence */
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
          </Wrapper>
          <Wrapper>
            <Contact />

            <Footer />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
