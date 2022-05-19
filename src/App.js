import './App.css';
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/404"
import AddNew from "./pages/AddNew"
import SearchResult from "./pages/SearchResult"
import Home from "./pages/Home"
import { useState } from 'react';

function App() {
  const [indexSearch, setIndexSearch] = useState({location: null, item: null})

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setIndexSearch={setIndexSearch} indexSearch={indexSearch}/>}/>
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/search-result" element={<SearchResult setIndexSearch={setIndexSearch} indexSearch={indexSearch}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </div>
  );
}

export default App;
