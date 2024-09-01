import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <img src="../../logo.png" className="h-14"></img>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-5">
          <NavLink to="/" className="ml-5">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xl w-5 h-5 flex items-center justify-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
