import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
    </>
  );
}

export default App;
