import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./App";
import NotFound from "./pages/404";
import SearchResult from "./pages/SearchResult";
import AddNew from "./pages/AddNew";
import React from "react";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={ <NotFound /> }/>
        <Route path="/" element={<App />} />
        <Route path="/search-result" element={ <SearchResult /> }/>
        <Route path="/add-new" element={<AddNew />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
