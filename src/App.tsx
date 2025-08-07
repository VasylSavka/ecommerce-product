import AppRoutes from './routes';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <AppRoutes />;
    </CartProvider>
  );
};

export default App;
