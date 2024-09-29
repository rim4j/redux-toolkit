import { useEffect } from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./feature/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div data-theme={theme}>
      <NavBar />
      {isLoading ? (
        <div className='flex justify-center'>
          <span className='loading  loading-spinner loading-lg'></span>
        </div>
      ) : (
        <CartContainer />
      )}
    </div>
  );
}

export default App;
