type Props = {
  src: string;
  alt: string;
  index: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void;
  isActive: boolean;
};

const ProductThumbnail = ({ src, alt, index, isActive, onClick }: Props) => {
  return (
    <div
      className={`img-effect hidden aspect-square lg:block ${isActive ? 'img-active-effect' : ''}`}
      onClick={() => onClick(index)}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProductThumbnail;
