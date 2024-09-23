import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div data-theme={theme}>
      <NavBar toggleTheme={toggle} theme={theme} />
    </div>
  );
}

export default App;
