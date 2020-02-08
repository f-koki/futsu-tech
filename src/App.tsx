import React from "react";
import "./App.css";
import Logo from "./Logo";
import Header from "./Header";
import Works from "./Works";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <body>
      <Logo />
      <Works />
    </body>
    <footer></footer>
  </div>
);

export default App;
