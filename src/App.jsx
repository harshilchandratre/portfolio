import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Projects from "./pages/Projects";
import BlogPost from "./pages/Blogpost";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout> 
      </div>
    </>
  );
}

export default App;
