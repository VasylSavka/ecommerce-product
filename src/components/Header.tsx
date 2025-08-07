import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import CartDropdown from './CartDropdown';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import CartIcon from './CartIcon';
import Avatar from './Avatar';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isSidebarModal, setIsSideBarModal] = useState(false);
  const [isCartModal, setIsCartBarModal] = useState(false);
  const { items } = useCart();
  const NAV_LINKS = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <>
      <header className="border-light-grayish-blue flex w-screen items-center justify-between px-4 py-4 lg:border-b-3">
        <div className="flex items-center">
          <MobileMenuButton onOpen={() => setIsSideBarModal(true)} />
          {isSidebarModal && <SideBar onClose={() => setIsSideBarModal(false)} />}

          <Link to={'/product'}>
            <Logo />
          </Link>
          <nav className="text-dark-grayish-blue ml-12 hidden space-x-5 lg:block">
            {NAV_LINKS.map(label => (
              <a key={label} className="link-underline-hover" href="#">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="relative flex items-center">
          <CartIcon onToggle={() => setIsCartBarModal(!isCartModal)} />
          <span className="bg-orange bold absolute -top-0.5 left-3 rounded-lg px-2 text-[10px] text-white md:top-1.5 md:left-2.5">
            {items.map(item => item.quantity)}
          </span>
          <Avatar />
        </div>

        <CartDropdown isOpen={isCartModal} onClose={() => setIsCartBarModal(false)} items={items} />
      </header>
    </>
  );
};

export default Header;
