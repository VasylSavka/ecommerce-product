import type { MouseEventHandler } from 'react';

const ImageNavButton = ({
  direction,
  onClick,
  className = '',
}: {
  direction: 'left' | 'right';
  onClick: MouseEventHandler;
  className?: string;
}) => {
  const isLeft = direction === 'left';
  return (
    <button
      className={`absolute top-1/2 ${isLeft ? 'left-3' : 'right-3'} flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white md:h-14 md:w-14 ${className}`}
      aria-label={`${isLeft ? 'previous' : 'next'} image`}
      onClick={onClick}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d={isLeft ? 'M11 1 3 9l8 8' : 'm2 1 8 8-8 8'}
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ImageNavButton;
