import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../contexts/CartContext';

export type CartItem = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  image: string;
};

type CartDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
};

const CartDropdown = ({ isOpen, onClose, items }: CartDropdownProps) => {
  const { removeItem } = useCart();
  const total = useMemo(() => items.reduce((s, it) => s + it.unitPrice * it.quantity, 0), [items]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="absolute top-18 right-4 flex w-2xs max-w-full flex-col rounded-xl bg-white shadow-2xl lg:top-16 lg:right-2 lg:w-xs"
      aria-label="cart dropdown"
    >
      <div className="border-light-grayish-blue flex items-center justify-between border-b-3 px-4 py-4">
        <h4 className="text-very-dark-blue font-bold">Cart</h4>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 items-center justify-center px-4 py-6">
          <p className="text-dark-grayish-blue text-center text-sm font-bold">
            Your Cart is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4 px-4 pt-6 lg:pb-6">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-x-3 text-sm">
              <img className="h-12 w-12 rounded-sm" src={item.image} alt={item.name} />
              <div className="flex flex-1 flex-col">
                <p className="text-dark-grayish-blue">{item.name}</p>
                <p className="mt-1">
                  ${item.unitPrice.toFixed(2)} x {item.quantity}{' '}
                  <span className="text-very-dark-blue ml-2 font-bold">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                aria-label="remove item"
                className="ml-auto"
              >
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    fill="#C3CAD9"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </div>
          ))}
          <div className="mt-2">
            <div className="mb-4 flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="bg-orange hover:bg-orange/40 shadow-orange/50 mb-4 flex w-full cursor-pointer justify-center rounded-xl py-2 shadow-lg lg:m-0">
              <span className="text-very-dark-blue text-md font-bold">Checkout</span>
            </button>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};

export default CartDropdown;
