import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect } from "react-router-dom"

function App() {
  return (
    <div>
      <Link to="/search-result">Search Result</Link>
      <Link to="/add-new">Add Treasure</Link>
  </div>
  );
}

export default App;
