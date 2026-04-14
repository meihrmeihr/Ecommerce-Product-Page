import { useContext, useState } from "react";
import cart from "../assets/images/icon-cart.svg";
import { Count } from "./context/Countcontext";
export default function Buy() {
  const { count, setCount, setBoughtProduct } = useContext(Count);

  return (
    <>
      <div className='flex flex-col justify-center gap-y-4 p-4 w-full md:max-w-[70%] lg:w-[40%]'>
        <h1 className='text-gray-400 font-semibold'>Sneaker Company</h1>
        <h1 className='text-3xl font-bold'>Fall Limited Edition Sneakers</h1>
        <p className='text-gray-400'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className='flex lg:flex-col justify-between items-center lg:items-baseline lg:gap-y-2'>
          <p className='flex items-center gap-x-4 text-2xl font-bold'>
            $125.00{" "}
            <span className='bg-black text-white text-sm text-center w-12 p-0.5 rounded-md'>
              50%
            </span>
          </p>
          <p className='line-through text-gray-500'>$250.00</p>
        </div>

        <div className='flex flex-col lg:flex-row items-center lg:gap-x-4 gap-y-4'>
          <div className='bg-gray-200 flex justify-between items-center gap-x-4 h-12 w-full lg:w-[50%] rounded-lg'>
            <button
              className='flex justify-center items-center h-full w-full'
              onClick={() =>
                setCount((prevCount) =>
                  prevCount === 0 ? prevCount : prevCount - 1,
                )
              }
            >
              <svg
                className='w-4 h-6 fill-[#FF7E1B] active:fill-[#ffba89]'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 10L1 6L15 6V10L1 10Z' />
              </svg>
            </button>
            <p className=''>{count}</p>
            <button
              className='flex justify-center items-center h-full w-full'
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              <svg
                className='w-6 h-6 text-[#FF7E1B] active:text-[#ffba89]'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 12H20M12 4V20'
                  stroke='currentColor'
                  strokeWidth='3'
                />
              </svg>
            </button>
          </div>
          <button
            className='bg-[#FF7E1B] active:bg-[#ffba89] flex justify-center items-center gap-x-4 font-semibold h-12 w-full rounded-lg'
            onClick={() => {
              setBoughtProduct((prevItem) => prevItem + count);
              setCount(0);
            }}
          >
            <img src={cart} className='' alt='cart icon' /> Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
