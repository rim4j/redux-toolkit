import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className='container  w-2/4 '>
        {cartItems.length === 0 && (
          <h3 className='text-center'>Cart is empty !!!</h3>
        )}
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default CartContainer;
