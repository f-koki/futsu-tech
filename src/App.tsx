import React from "react";
import "./App.css";
import Logo from "./Logo";
import Header from "./Header";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <body>
      <Logo />
    </body>
    <footer></footer>
  </div>
);

export default App;
