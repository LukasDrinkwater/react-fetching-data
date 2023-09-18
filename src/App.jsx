import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { Image } from "../src/components/Image";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Image />
    </>
  );
}

export default App;
