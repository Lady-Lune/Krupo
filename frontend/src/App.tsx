import '@mantine/core/styles.css';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { BrowserRouter , Routes , Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserProfile from './components/UserProfile';
import { ACCESS_TOKEN } from './constants';
import api from '@/api';
import { useEffect } from 'react';


function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await api.post("/api/logout/");
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        // Only remove auth-related items
        localStorage.removeItem(ACCESS_TOKEN);
        navigate("/login");
      }
    };

    performLogout();
  }, [navigate]);

  return null; // Return null while logout processes
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The following route is protected - unauthorized users can't access it */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes> 
    </BrowserRouter>
  );
}


