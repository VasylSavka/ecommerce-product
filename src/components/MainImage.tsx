const MainImage = ({ curImage }: { curImage: string }) => (
  <img className="col-span-4 row-span-2 lg:rounded-2xl" src={curImage} alt="sneakers front big" />
);

export default MainImage;
