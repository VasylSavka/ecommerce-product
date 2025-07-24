import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/Layout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ProductPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
