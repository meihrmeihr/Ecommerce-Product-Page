import { useEffect, useState } from "react";

import product_1 from "../assets/images/image-product-1.jpg";
import product_2 from "../assets/images/image-product-2.jpg";
import product_3 from "../assets/images/image-product-3.jpg";
import product_4 from "../assets/images/image-product-4.jpg";
import productThumbnail_1 from "../assets/images/image-product-1-thumbnail.jpg";
import productThumbnail_2 from "../assets/images/image-product-2-thumbnail.jpg";
import productThumbnail_3 from "../assets/images/image-product-3-thumbnail.jpg";
import productThumbnail_4 from "../assets/images/image-product-4-thumbnail.jpg";

export default function Carousel() {
  const images = [product_1, product_2, product_3, product_4];
  const [changeImage, setChangeImage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeImage((prevVal) =>
        prevVal === images.length - 1 ? 0 : prevVal + 1,
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function imageChanger(productThumbnail, id) {
    return (
      <button
        className='relative'
        onClick={() => {
          setChangeImage(() => id);
        }}
      >
        <span
          className={`absolute right-0 h-2/2 w-full ${id === changeImage ? "border-orange-500 border-2 bg-white/50" : ""} hover:bg-white/50 rounded-md`}
        />
        <img
          src={productThumbnail}
          className='w-16 rounded-lg'
          alt='product image small'
        />
      </button>
    );
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-y-6 h-90 lg:h-110 w-full lg:w-80'>
        {/* carousel for mobile */}
        <div
          className={`absolute z-10 top-0 left-0 ${isFullScreen ? "hidden lg:flex" : "hidden"} flex-col justify-center items-center h-dvh w-dvw bg-black/70 select-none`}
        >
          <div className='flex flex-col justify-center items-center gap-y-4 h-full w-full'>
            <button
              className='flex justify-end w-[40dvw]'
              onClick={() => {
                setIsFullScreen(false);
              }}
            >
              <svg
                className='fill-white h-8 w-8 cursor-pointer active:fill-orange-400'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z' />
              </svg>
            </button>
            <div className='relative h-[70dvh] w-[40dvw]'>
              <img
                src={images[changeImage]}
                className='h-full w-full rounded-lg select-none'
                alt='sneaker images'
              />
              <button
                className='absolute -left-5 top-[50%] p-4 w-10 h-10 flex justify-center items-center bg-white rounded-full fill-black active:fill-orange-500'
                onClick={() => {
                  setChangeImage((prevVal) =>
                    prevVal === 0 ? images.length - 1 : prevVal - 1,
                  );
                }}
              >
                <svg
                  className=''
                  viewBox='0 0 1024 1024'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z' />
                </svg>
              </button>
              <button
                className='absolute -right-5 top-[50%] p-4 w-10 h-10 flex justify-center items-center bg-white rounded-full fill-black active:fill-orange-500'
                onClick={() => {
                  setChangeImage((prevVal) =>
                    prevVal === images.length - 1 ? 0 : prevVal + 1,
                  );
                }}
              >
                <svg
                  viewBox='0 0 1024 1024'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z' />
                </svg>
              </button>
            </div>
            <div className='lg:flex justify-between w-[30dvw]'>
              {imageChanger(productThumbnail_1, 0)}
              {imageChanger(productThumbnail_2, 1)}
              {imageChanger(productThumbnail_3, 2)}
              {imageChanger(productThumbnail_4, 3)}
            </div>
          </div>
        </div>
        {/* mobile carousel */}
        <div
          className={`h-full w-full`}
          onClick={() => {
            setIsFullScreen(true);
          }}
        >
          <div className='relative  transition-all duration-500 h-full  w-full'>
            <img src={images[changeImage]} className="absolute -z-10 h-full w-full object-fill lg:rounded-lg" alt="sneaker images" />
            <div className='lg:hidden flex justify-between items-center h-full w-full px-4'>
              <button
                className='p-4 w-10 h-10 flex justify-center items-center bg-white rounded-full fill-black active:fill-orange-500'
                onClick={() => {
                  setChangeImage((prevVal) =>
                    prevVal === 0 ? images.length - 1 : prevVal - 1,
                  );
                }}
              >
                <svg
                  className=''
                  viewBox='0 0 1024 1024'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z' />
                </svg>
              </button>
              <button
                className='p-4 w-10 h-10 flex justify-center items-center bg-white rounded-full fill-black active:fill-orange-500'
                onClick={() => {
                  setChangeImage((prevVal) =>
                    prevVal === images.length - 1 ? 0 : prevVal + 1,
                  );
                }}
              >
                <svg
                  viewBox='0 0 1024 1024'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
            {/* thumbnails for laptop and desktop*/}
        <div className='hidden lg:flex justify-between w-full'>
          {imageChanger(productThumbnail_1, 0)}
          {imageChanger(productThumbnail_2, 1)}
          {imageChanger(productThumbnail_3, 2)}
          {imageChanger(productThumbnail_4, 3)}
        </div>
      </div>
    </>
  );
}
