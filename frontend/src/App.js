import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import AddProduct from "./screens/AddProduct";
import Product from "./screens/Product";
import Account from "./screens/Account";
import Login from "./components/Login";
import Register from "./components/Register"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/" element={<ProtectedRoute> element={<Home />}</ProtectedRoute>}></Route> */}
          <Route path="/addproduct" element={<ProtectedRoute> element={<AddProduct />} </ProtectedRoute>}></Route>

          <Route path="/forgot-password" element={<ForgotPassword />}></Route>

          <Route path="/reset-password" element={<ResetPassword />}></Route>



          <Route
            path="/products"
            element={<ProtectedRoute> element={<Product />} </ProtectedRoute>}
          ></Route>
          <Route path="/account" element={<Account />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
