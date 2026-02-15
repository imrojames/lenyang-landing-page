import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutProvider } from "./context/LayoutContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <div className='App'>
      <LayoutProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home name="Lenny Rose" profileImage="/assets/img/blog-author.jpg" backgroundImage="/assets/img/bg-hero.jpg" />} />
            </Routes>
            <Routes>
              <Route path="/services" element={<Services />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LayoutProvider>
    </div>
  );
}

export default App;