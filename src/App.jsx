import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect } from "react-router-dom"
import NotFound from "./pages/404"
import AddNew from "./pages/AddNew"
import SearchResult from "./pages/SearchResult"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </div>
  );
}

export default App;
