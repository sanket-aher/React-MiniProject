import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 my-2 md:mx-5 ">
      
      <div className="w-[30%]">
        <img src={item.image} className="w-full"></img>
      </div>
      <div className="md:ml-10 w-[100%] md:w-[70%] space-y-5">
        <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
        <h1 className="text-slate-700 font-medium">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
        <div className="flex items-center justify-between">
          <p className="text-green-600 text-lg font-bold">${item.price}</p>
          <div onClick={removeFromCart} className="bg-red-200 hover:bg-red-400 transition duration-300 cursor-pointer rounded-full p-3 mr-3">
            <MdDelete className="text-red-800 hover:text-white"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
