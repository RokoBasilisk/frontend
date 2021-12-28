import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import NotFound from "./components/layout/NotFound";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import Dashboard from "./views/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import NavbarMenu from "./components/layout/NavbarMenu";

function App() {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Auth authRoute="login" />} />
            <Route path="register" element={<Auth authRoute="register" />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <NavbarMenu activate="dashboard" />
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </ProductContextProvider>
  );
}

export default App;
