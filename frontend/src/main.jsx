import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./auth/LoginPage";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/PrivateRoute";
import SignupPage from "./auth/SignupPage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="itm" element={<ItemPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </StrictMode>
);
