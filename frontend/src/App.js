import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./context/AuthContext";

// Lazy load all components
const Home = lazy(() => import('./screens/Home'));
const AddProduct = lazy(() => import('./screens/AddProduct'));
const Product = lazy(() => import('./screens/Product'));
const Account = lazy(() => import('./screens/Account'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const ResetPassword = lazy(() => import('./components/ResetPassword'));
const ForgotPassword = lazy(() => import('./components/ForgotPassword'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
            <Route path="/account" element={<Account />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
