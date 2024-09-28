import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, decrease, increase } from "../feature/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const id = item.id;
  return (
    <div className='card   lg:card-side bg-base-100 shadow-xl m-8  '>
      <figure className='w-32'>
        <img src={item.img} alt='Album' />
      </figure>

      <div className='card-body'>
        <h2 className='card-title'>{item.title}</h2>
        <p className='font-bold'>{`${item.price} $`}</p>
        <div>
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className='btn btn-sm btn-outline btn-error inline-block'
          >
            Remove
          </button>
        </div>
      </div>

      <div className='flex-col text-center justify-center align-middle p-6'>
        <button
          onClick={() => dispatch(increase({ id }))}
          className='btn block'
        >
          <FaArrowUp />
        </button>
        <p className='m-0  py-3 font-bold'>{item.amount}</p>
        <button
          onClick={() => dispatch(decrease({ id }))}
          className='btn block'
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
