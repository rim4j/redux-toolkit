import { LuMoon } from "react-icons/lu";
import { IoSunnySharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../feature/cart/cartSlice";
import { toggleTheme } from "../feature/theme/themeSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { amount, total } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className='mb-6'>
      {/* modal */}

      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Delete!</h3>
          <p className='py-4'>Remove All Items from Your Shopping Cart?</p>
          <div className='modal-action'>
            <form method='dialog'>
              <button
                onClick={() => dispatch(clearCart())}
                className='btn btn-error btn-outline mx-2'
              >
                Remove
              </button>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className='flex justify-around py-4'>
        <button
          onClick={() => dispatch(toggleTheme())}
          className='btn cursor-pointer '
        >
          {theme === "light" ? (
            <LuMoon size={18} />
          ) : (
            <IoSunnySharp size={18} />
          )}
        </button>

        {/* drawer */}
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
                  <h4>{`${total.toFixed(2)} $`}</h4>
                </div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
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
