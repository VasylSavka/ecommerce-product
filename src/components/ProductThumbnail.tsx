const ProductThumbnail = ({ src, alt }: { src: string; alt: string }) => (
  <div className="img-hover-effect hidden aspect-square lg:block">
    <img src={src} alt={alt} />
  </div>
);

export default ProductThumbnail;
