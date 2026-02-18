import { HashRouter, Routes, Route } from "react-router-dom";
import { LayoutProvider } from "./context/LayoutContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='App'>
      <LayoutProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home name="Lenny Rose" profileImage="./assets/img/blog-author.jpg" backgroundImage="./assets/img/bg-hero.jpg" />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Services />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Portfolio />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Experience />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Contact />} />
            </Routes>
          </Layout>
        </HashRouter>
      </LayoutProvider>
    </div>
  );
}

export default App;