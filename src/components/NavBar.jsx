import { LuMoon } from "react-icons/lu";
import { IoSunnySharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../feature/cart/cartSlice";

const NavBar = ({ toggleTheme, theme }) => {
  const dispatch = useDispatch();
  const { amount, total } = useSelector((state) => state.cart);

  return (
    <div className='mb-6'>
      <div className='flex justify-around py-4'>
        <button onClick={toggleTheme} className='btn cursor-pointer '>
          {theme === "light" ? (
            <LuMoon size={18} />
          ) : (
            <IoSunnySharp size={18} />
          )}
        </button>

        <div className='relative'>
          <div className='drawer drawer-end'>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
              <label htmlFor='my-drawer-4' className='drawer-button btn p-6 '>
                <div className='absolute '>
                  <span className='badge'>{amount}</span>
                  <IoCartOutline size={18} />
                </div>
              </label>
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-4'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <div className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
                <div className='flex justify-around 	py-6'>
                  <h4>total:</h4>
                  <h4>{`${total} $`}</h4>
                </div>
                <button
                  onClick={() => dispatch(clearCart())}
                  className='btn btn-outline btn-sm btn-error '
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='divider p-0 m-0'></div>
    </div>
  );
};

export default NavBar;
