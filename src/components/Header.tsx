import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import CartDropdown, { type CartItem } from './CartDropdown';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import CartIcon from './CartIcon';
import Avatar from './Avatar';

const Header = () => {
  const [isSidebarModal, setIsSideBarModal] = useState(false);
  const [isCartModal, setIsCartBarModal] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Fall Limited Edition Sneakers',
      unitPrice: 125.0,
      quantity: 3,
      image: 'assets/images/image-product-1.jpg',
    },
  ]);
  const NAV_LINKS = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <>
      <header className="border-light-grayish-blue flex w-screen items-center justify-between px-4 py-4 lg:border-b-3">
        <div className="flex items-center">
          <MobileMenuButton onClose={() => setIsSideBarModal(true)} />
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
        <div className="flex items-center">
          <CartIcon onToggle={() => setIsCartBarModal(!isCartModal)} />
          <Avatar />
        </div>

        <CartDropdown
          isOpen={isCartModal}
          onClose={() => setIsCartBarModal(false)}
          items={cartItems}
        />
      </header>
    </>
  );
};

export default Header;
