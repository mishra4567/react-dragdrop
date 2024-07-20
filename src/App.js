import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Editor from "./editor";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/editor/:pageId" Component={Editor} />
      </Routes>
    </Router>
  );
}

export default App;
