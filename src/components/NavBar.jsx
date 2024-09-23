import { LuMoon } from "react-icons/lu";
import { IoSunnySharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const NavBar = ({ toggleTheme, theme }) => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className='flex justify-around py-2'>
      <button onClick={toggleTheme} className='btn cursor-pointer '>
        {theme === "light" ? <LuMoon size={18} /> : <IoSunnySharp size={18} />}
      </button>

      <div className='relative'>
        <button className='btn cursor-auto top-0 p-6 '>
          <div className='absolute '>
            <span className='badge'>{amount}</span>
            <IoCartOutline size={18} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
