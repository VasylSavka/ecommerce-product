import ImageNavButton from './ImageNavButton';
import ProductThumbnail from './ProductThumbnail';
import MainImage from './MainImage';
import { useEffect } from 'react';

interface ImageModalProps {
  images: string[];
  thumbnails: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  // eslint-disable-next-line no-unused-vars
  onSelectThumbnail: (index: number) => void;
}

const ImageModal = ({
  images,
  thumbnails,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectThumbnail,
}: ImageModalProps) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
    >
      <div onClick={e => e.stopPropagation()} className="relative w-full max-w-xl px-4">
        <button
          onClick={onClose}
          className="absolute -top-8 right-4 cursor-pointer"
          aria-label="Close"
        >
          <svg
            className="hover:text-orange text-white"
            width="13"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className="relative">
          <MainImage curImage={images[currentIndex]} />

          <ImageNavButton
            direction="left"
            onClick={onPrev}
            className="absolute top-1/2 left-[-30px] hidden -translate-y-1/2 lg:flex"
          />

          <ImageNavButton
            direction="right"
            onClick={onNext}
            className="absolute top-1/2 right-[-30px] hidden -translate-y-1/2 lg:flex"
          />
        </div>

        <div className="mt-6 flex justify-center gap-x-10 gap-y-4 px-6">
          {thumbnails.map((src, i) => (
            <ProductThumbnail
              key={i}
              src={`assets/images/${src}`}
              alt={`thumbnail ${i + 1}`}
              index={i}
              onClick={onSelectThumbnail}
              isActive={currentIndex === i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
