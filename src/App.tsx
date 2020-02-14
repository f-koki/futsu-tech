import React from "react";
import Logo from "./Logo";
import Header from "./Header";
import Works from "./Works";
import Footer from "./Footer";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <body>
      <Logo />
      <Works />
      <Footer />
    </body>
    <footer></footer>
  </div>
);

export default App;
