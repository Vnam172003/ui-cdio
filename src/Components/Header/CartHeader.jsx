import { useState } from "react";
import { useCart } from "react-use-cart";
import { formatPrice } from "../../helper/formatPrice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CartHeader() {
  const [showPopover, SetShowPopover] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  return (
    <div className="z-50">
      <motion.div
        className="flex gap-3 items-center border  py-1  px-2 rounded-full bg-rgba cursor-pointer"
        onClick={() => SetShowPopover(!showPopover)}
      >
        <motion.span className="font-bold  ">Cart</motion.span>
        <div className="   rounded-full px-2  bg-white text-black">
          {totalUniqueItems}
        </div>
      </motion.div>
      {showPopover && (
        <div className="absolute  grid grid-cols-3  top-0 right-0 w-screen h-screen">
          <div className="col-span-2 bg-black  bg-opacity-80"></div>
          <div className="col-span-1 py-7 px-5 bg-white text-black">
            <div className=" flex justify-between  ">
              <div className=" mb-5 font-bold text-2xl ">Cart</div>
              <div onClick={() => SetShowPopover(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {isEmpty && (
              <div className="w-full  ">
                <img
                  src="https://i.pinimg.com/564x/4a/e7/af/4ae7af8e6f4f683a3090b8dd3da7889f.jpg"
                  alt=""
                  width={500}
                />
                <Link
                  to={"/danhsach"}
                  className="flex justify-center bg-black text-white py-2"
                  onClick={() => SetShowPopover(false)}
                >
                  Buy now
                </Link>
              </div>
            )}
            {items.slice(0, 8).map((item) => (
              <tr key={item.id} className="flex items-center gap-5">
                <td className="">
                  <img src={item.imgUrl} alt="" className="w-[100px] " />
                </td>
                <td className="  ">{item.name}</td>
                <td className="  ">
                  {formatPrice(item.price * item.quantity)}
                </td>
                <td className="  flex  px-5 py-6">
                  <button
                    className="text-md   py-[1px] px-1"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <div className="text-md    border-black py-[1px] px-1 ">
                    {item.quantity}
                  </div>
                  <button
                    className="text-md   py-[1px] px-1"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td
                  className="align-middle py-5"
                  onClick={() => removeItem(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
            {!isEmpty && (
              <div className="flex justify-between items-center mt-8">
                <div className="   text-center  text-lg">
                  Total : {formatPrice(cartTotal)}
                </div>
                <Link
                  to={"/pay"}
                  className=" px-3 py-2 rounded-full text-center bg-rgba cursor-pointer"
                >
                  Shop now
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartHeader;
