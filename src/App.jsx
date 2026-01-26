import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/RegisterPage";
// import MenuPage from "./pages/MenuPage";
import CategoryFood from "./pages/CategoryFood";
import FoodDrinks from "./pages/FoodDrinks";
import SideCart from "./components/SideCart";
import { cartIndex } from "../store";
import ProductDetails from "./ProductDetails";


export default function App() {
 const { value }= cartIndex();

  return (
    <div className="w-full h-dvh overflow-hidden bg-creamy text-black">
      <Toaster position="top-center" reverseOrder={false} />
      { 
        value && <SideCart/>
      }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<Dashboard/>} />
            <Route path="FoodDrinks" element={<FoodDrinks/>} />
            <Route path="FoodDrinks/:catId" element={<CategoryFood/>} />
            <Route path="FoodDrinks/:catId/:productId" element={<ProductDetails/>} />
            {/* <Route path="order" element={<h1>Food & Drinks Page</h1>} /> */}
            <Route path="invoices" element={<h1>All Invoices Page</h1>} />
            <Route path="messages" element={<h1>Messages Page</h1>} />
            <Route path="settings" element={<h1>settings Page</h1>} />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage/>} />

          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Protected Route (protected )
// Static Route  /dashboard =>
// Dyanimc Route /:productId => useParams()
// Nested Route

// 2 Layouts
// Home App
// Login/Register/404 Page
