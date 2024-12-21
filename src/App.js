import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./features/auth/authComponent/Signup";
import Login from "./features/auth/authComponent/Login";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./pages/Footer";
import Verification from "./features/auth/authComponent/Verification";
import ProductForm from "./features/admin/AdminComponent/ProductForm";
import Sidebar from "./features/admin/AdminComponent/Sidebar";
import Default from "./features/admin/AdminComponent/Default";
import AdminPanelLayout from "./features/admin/AdminComponent/AdminPanelLayout";
import Cart from "./features/cart/Cart";
import Checkout from "./features/checkout/Checkout";
import OrderConfirmation from "./features/checkout/OrderConfirmation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./features/profile/Profile";
import Wishlist from "./features/wishlist/Wishlist";
import SearchResults from "./features/search/SearchResults";
import CategoryPage from "./pages/CategoryPage";
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={`App min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className={`dark:bg-dark transition-colors duration-200`}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? 'dark' : 'colored'}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/productDetail/:id/:slug" element={<ProductDetail />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminPanelLayout />}>
              <Route index element={<Default />} />
              <Route path="productForm" element={<ProductForm />} />
              <Route path="sidebar" element={<Sidebar />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
