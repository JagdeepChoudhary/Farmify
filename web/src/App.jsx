import { ThemeProvider } from "next-themes";
import "./App.css";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import EquipmentPage from "./components/Equipments";
import SellersPage from "./components/Seller";
import ProductsPage from "./components/Products";
import FarmerResourcesPage from "./components/Resourse";
import WeatherForecastPage from "./components/Weather";
import BlogPage from "./components/Blog";
import TalkToExpertPage from "./components/TalkToExpert";
import CartPage from "./components/CArt";
import CheckoutPage from "./components/CheckOut";
import FAQPage from "./components/FAQ";
import PrivacyPolicyPage from "./components/Policy";
import ReturnPolicyPage from "./components/ReturnPolicy";
import AboutUsPage from "./components/AboutUs";
import CropPricesPage from "./components/Crop-prices";
import AdminPage from "./components/Admin";
import ProductDetailPage from "./components/ProductDetails";
import ForgotPasswordPage from "./components/PasswordReset";
import ContactPage from "./components/Contact";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/equipment", element: <EquipmentPage /> },
  { path: "/sellers", element: <SellersPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/weather", element: <WeatherForecastPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/expert-talk", element: <TalkToExpertPage /> },
  { path: "/lease", element: <FarmerResourcesPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/policy", element: <PrivacyPolicyPage /> },
  { path: "/returns", element: <ReturnPolicyPage /> },
  { path: "/about", element: <AboutUsPage /> },
  { path: "/cropprices", element: <CropPricesPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/admins", element: <AdminPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/forgotpassword", element: <ForgotPasswordPage /> },
  { path: "/productdetails", element: <ProductDetailPage /> },
]);
function App() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RouterProvider router={browserRouter} />
      </ThemeProvider>
    </>
  );
}
export default App;
