import ImageNavButton from '../components/ImageNavButton';
import ProductThumbnail from '../components/ProductThumbnail';
import CounterButton from '../components/CounterButton';
import ProductPrice from '../components/ProductPrice';
import AddToCartButton from '../components/AddToCartButton';
import MainImage from '../components/MainImage';

const THUMBNAILS = [
  'image-product-1-thumbnail.jpg',
  'image-product-2-thumbnail.jpg',
  'image-product-3-thumbnail.jpg',
  'image-product-4-thumbnail.jpg',
];

const ProductPage = () => {
  return (
    <>
      <div className="flex-row lg:mt-20 lg:flex lg:px-12">
        <div className="relative lg:grid lg:max-h-[600px] lg:max-w-[400px] lg:grid-cols-4 lg:grid-rows-3 lg:gap-6">
          <MainImage />
          <div className="lg:hidden">
            <ImageNavButton direction="left" />
            <ImageNavButton direction="right" />
          </div>

          {THUMBNAILS.map((src, i) => (
            <ProductThumbnail
              src={`assets/images/${src}`}
              alt={`sneakers thumbnail ${i + 1}`}
              key={i}
            />
          ))}
        </div>
        <div className="text-dark-grayish-blue mx-auto max-w-[500px] px-6 pt-5 md:px-0 lg:ml-24 lg:max-w-[430px] lg:pt-10">
          <h4 className="">Sneaker Company</h4>
          <h1 className="text-very-dark-blue mt-2 mb-8">Fall Limited Edition Sneakers</h1>
          <p className="mb-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <ProductPrice />
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="bg-light-grayish-blue flex items-center justify-between rounded-xl px-3 py-3 lg:w-34">
              <CounterButton type="minus" />
              <span className="text-very-dark-blue text-sm font-bold">0</span>
              <CounterButton type="plus" />
            </div>
            <AddToCartButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
