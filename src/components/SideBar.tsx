import { useEffect } from 'react';

type SideBarProps = {
  onClose: () => void;
};

const SideBar = ({ onClose }: SideBarProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-40 flex">
      <div className="fixed inset-0 bg-black/75" onClick={onClose}></div>

      <div className="relative z-50 w-4/5 bg-white p-6 transition-discrete duration-300 ease-in-out">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClose}
          className="cursor-pointer"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
        <nav className="text-very-dark-blue mt-12 flex flex-col gap-y-6 font-bold">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
