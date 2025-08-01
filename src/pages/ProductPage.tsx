import ImageNavButton from '../components/ImageNavButton';
import ProductThumbnail from '../components/ProductThumbnail';
import CounterButton from '../components/CounterButton';
import ProductPrice from '../components/ProductPrice';
import AddToCartButton from '../components/AddToCartButton';
import MainImage from '../components/MainImage';
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const THUMBNAILS = [
  'image-product-1-thumbnail.jpg',
  'image-product-2-thumbnail.jpg',
  'image-product-3-thumbnail.jpg',
  'image-product-4-thumbnail.jpg',
];
const MainImages = [
  'assets/images/image-product-1.jpg',
  'assets/images/image-product-2.jpg',
  'assets/images/image-product-3.jpg',
  'assets/images/image-product-4.jpg',
];

const ProductPage = () => {
  const [curImage, setCurImage] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const handleNextImage = () => {
    setCurImage(prev => (prev >= MainImages.length - 1 ? 0 : prev + 1));
  };
  const handlePrevImage = () => {
    setCurImage(prev => (prev <= 0 ? MainImages.length - 1 : prev - 1));
  };
  const handleThumbnail = (index: number) => {
    setCurImage(index);
  };

  return (
    <>
      <div className="flex-row lg:mt-20 lg:flex lg:px-12">
        <div className="relative lg:grid lg:max-h-[600px] lg:max-w-[400px] lg:grid-cols-4 lg:grid-rows-3 lg:gap-6">
          <MainImage onClick={() => setIsModal(true)} curImage={MainImages[curImage]} />
          <div className="lg:hidden">
            <ImageNavButton onClick={() => handlePrevImage()} direction="left" />
            <ImageNavButton onClick={() => handleNextImage()} direction="right" />
          </div>

          {THUMBNAILS.map((src, i) => (
            <ProductThumbnail
              key={i}
              src={`assets/images/${src}`}
              alt={`sneakers thumbnail ${i + 1}`}
              index={i}
              onClick={handleThumbnail}
              isActive={curImage === i}
            />
          ))}
        </div>

        {isModal && (
          <ImageModal
            images={MainImages}
            thumbnails={THUMBNAILS}
            currentIndex={curImage}
            onClose={() => setIsModal(false)}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
            onSelectThumbnail={handleThumbnail}
          />
        )}

        <div className="text-dark-grayish-blue mx-auto max-w-[500px] px-6 pt-5 md:px-0 lg:ml-24 lg:max-w-[430px] lg:pt-10">
          <h4 className="">Sneaker Company</h4>
          <h1 className="text-very-dark-blue mt-2 mb-8">Fall Limited Edition Sneakers</h1>
          <p className="mb-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable
            rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <ProductPrice />
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="bg-light-grayish-blue flex items-center justify-between rounded-xl px-3 py-3 lg:mr-4 lg:w-34">
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
