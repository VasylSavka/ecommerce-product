const ProductPage = () => {
  return (
    <>
      <div className="mt-20 flex px-12">
        <div className="grid max-h-[600px] max-w-[400px] grid-cols-4 grid-rows-3 gap-x-6 gap-y-8">
          <img
            className="col-span-4 row-span-2 cursor-pointer rounded-2xl"
            src="assets/images/image-product-1.jpg"
            alt="sneakers front big"
          />

          {[
            'image-product-1-thumbnail.jpg',
            'image-product-2-thumbnail.jpg',
            'image-product-3-thumbnail.jpg',
            'image-product-4-thumbnail.jpg',
          ].map((src, i) => (
            <div className="img-hover-effect aspect-square" key={i}>
              <img src={`assets/images/${src}`} alt={`sneakers thumbnail ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="text-dark-grayish-blue ml-24 max-w-[430px] pt-10">
          <h4 className="">Sneaker Company</h4>
          <h1 className="text-very-dark-blue mt-2 mb-8">Fall Limited Edition Sneakers</h1>
          <p className="mb-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <p className="text-very-dark-blue mb-2 text-2xl font-bold">
            $125.00
            <span className="bg-very-dark-blue ml-4 rounded-sm px-2 py-1 align-middle text-xs text-white">
              50%
            </span>
          </p>
          <p className="mb-6 font-bold line-through">$250.00</p>
          <div className="flex justify-between">
            <div className="bg-light-grayish-blue flex w-34 items-center justify-between rounded-xl px-3 py-3">
              <button className="cursor-pointer">
                <svg
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
              <span className="text-very-dark-blue text-sm font-bold">0</span>
              <button className="cursor-pointer">
                <svg
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
                </svg>
              </button>
            </div>
            <button className="bg-orange hover:bg-orange/40 ml-4 flex w-full cursor-pointer items-center justify-center rounded-xl py-2">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              <span className="text-very-dark-blue ml-4 text-lg font-bold">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
