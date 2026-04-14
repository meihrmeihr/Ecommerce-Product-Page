import { useContext, useState } from "react";
import avatar from "../assets/images/image-avatar.png";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import trash from "../assets/images/icon-delete.svg";
import menu from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close.svg";

import { Count } from "./context/Countcontext";
export default function Navbar() {
  const { boughtProduct, setBoughtProduct } = useContext(Count);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartopen, setIsCartOpen] = useState(false);

  function listItem(name) {
    return (
      <li className='flex justify-center items-center border-orange-400 hover:border-b-3 min-w-16 py-4.5 hover:text-gray-800 cursor-pointer'>
        {name}
      </li>
    );
  }
  return (
    <nav className='relative h-16'>
      <div className='relative bg-white flex justify-between items-center lg:border-gray-200 lg:border-b h-full w-[90%] lg:w-[80%] mx-auto'>
        <div className=' flex justify-center items-center gap-4 lg:gap-x-10 h-full'>
          <button
            className='lg:hidden cursor-pointer'
            onClick={() => setIsMenuOpen(trash)}
          >
            <img src={menu} alt='menu icon for mobile devices' />
          </button>
          <img src={logo} alt='website logo' />
          <ul className='hidden lg:flex justify-center items-center h-full gap-x-6 text-gray-400'>
            {listItem("Collections")}
            {listItem("Men")}
            {listItem("Women")}
            {listItem("About")}
            {listItem("Contact")}
          </ul>
        </div>

        {/* cart box images */}
        <div className='flex justify-center items-center gap-x-6'>
          <button
            className='relative'
            onClick={() => setIsCartOpen((prevState) => !prevState)}
          >
            <img
              src={cart}
              className='w-6 h-6 cursor-pointer'
              alt='cart image'
            />
            <span
              className={`absolute ${boughtProduct ? "inline" : "hidden"} -top-2 -right-2 bg-orange-400 text-white px-2 text-xs rounded-full`}
            >
              {boughtProduct}
            </span>
          </button>
          <button onClick={() => setIsCartOpen((prevState) => !prevState)}>
            <img
              src={avatar}
              className='w-10 h-10 cursor-pointer border-orange-400 hover:border-2 rounded-full'
              alt='image of a man'
            />
          </button>
          {/* the card */}
          <div
            className={`bg-white ${isCartopen ? "block" : "hidden"} shadow-2xl absolute top-18 left-0 lg:top-14 lg:left-auto lg:-right-10 h-62 w-full lg:w-82 rounded-md p-1`}
          >
            <h1 className='border-gray-200 border-b pl-4 py-4'>Cart</h1>

            <div className=' flex justify-center items-center h-[80%]'>
              {boughtProduct ? (
                <div className='flex flex-col justify-center items-center gap-y-6 w-full px-4'>
                  <div className='flex justify-around items-center gap-x-4 w-full max-w-160'>
                    <img
                      src={thumbnail}
                      className='w-16 rounded-md'
                      alt='sneaker image'
                    />
                    <div className='block sm:flex lg:block text-xs text-gray-400'>
                      <p className='mb-1'>Fall Limited Edition Sneakers</p>
                      <p className=''>
                        $125.00 x {boughtProduct}
                        {" - "}
                        <strong className='text-black'>
                          ${boughtProduct * 125}.00
                        </strong>
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setBoughtProduct(0);
                      }}
                    >
                      <img
                        src={trash}
                        className='w-8 rounded-md'
                        alt='trash icon for deleting items'
                      />
                    </button>
                  </div>
                  <button className='bg-orange-400 text-neutral-800 font-semibold py-4 rounded-md w-full max-w-160'>
                    Checkout
                  </button>
                </div>
              ) : (
                <p>Your Cart is empty</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* smartphones panel */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden absolute top-0 bg-black/75 w-full h-dvh`}
      >
        <div className='absolute flex flex-col gap-y-10 p-6 top-0 bg-white w-[60%] h-dvh'>
          <button onClick={() => setIsMenuOpen(false)}>
            <img src={closeIcon} alt='close button' />
          </button>
          <ul className='flex flex-col gap-y-4 text-black text-lg font-semibold '>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
