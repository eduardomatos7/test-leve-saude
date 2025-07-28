import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import NotFound from "../components/notFound";
import { ProtectedRoute } from "../components/protectedRoute";
import HomeScreen from "../pages/Home/homeScreen";
import Login from "../pages/Login/loginScreen";

export default function RouterLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to={"/admin"} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
