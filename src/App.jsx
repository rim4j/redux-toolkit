import { useState } from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div data-theme={theme}>
      <NavBar toggleTheme={toggle} theme={theme} />
      <CartContainer />
    </div>
  );
}

export default App;
