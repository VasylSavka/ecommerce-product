import type { MouseEventHandler } from 'react';
const MainImage = ({ curImage, onClick }: { curImage: string; onClick?: MouseEventHandler }) => (
  <img
    onClick={onClick}
    className="pointer-events-none col-span-4 row-span-2 lg:pointer-events-auto lg:rounded-2xl"
    src={curImage}
    alt="sneakers front big"
  />
);

export default MainImage;
