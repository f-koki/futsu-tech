import React from "react";
import Logo from "./Logo";
import Header from "./Header";
import Footer from "./Footer";
import FeaturesPage from "./FeaturePage";
import TimelinePage from "./TimelinePage";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <body>
      <Logo />
      {/* <TimelinePage /> */}
      <FeaturesPage />
      <Footer />
    </body>
    <footer></footer>
  </div>
);

export default App;
