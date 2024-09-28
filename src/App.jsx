import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./feature/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

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
