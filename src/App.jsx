import { useEffect } from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./feature/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div data-theme={theme}>
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default App;
