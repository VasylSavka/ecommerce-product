const ProductPrice = () => (
  <div className="mb-6 flex justify-between md:justify-start lg:flex-col">
    <p className="text-very-dark-blue mb-2 text-2xl font-bold">
      $125.00
      <span className="bg-very-dark-blue ml-4 rounded-sm px-2 py-1 align-middle text-xs text-white">
        50%
      </span>
    </p>
    <p className="self-center font-bold line-through md:ml-6 lg:ml-0 lg:self-start">$250.00</p>
  </div>
);

export default ProductPrice;
