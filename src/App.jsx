import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Dashboard from './pages/Dashboard';
import AllPosts from './pages/posts/AllPosts';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/posts" element={<Layout><AllPosts /></Layout>} />
          <Route path="/posts/preview" element={<Layout><PreviewPosts /></Layout>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
