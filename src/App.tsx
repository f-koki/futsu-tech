import React from "react";
import Logo from "./Logo";
import Header from "./Header";
import Footer from "./Footer";
import FeaturesPage from "./FeaturePage";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <body>
      <Logo />
      <FeaturesPage />
      <Footer />
    </body>
    <footer></footer>
  </div>
);

export default App;
