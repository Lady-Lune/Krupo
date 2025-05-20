import '@mantine/core/styles.css';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserProfile from './components/UserProfile';


function Logout() {
  localStorage.clear()
  return (
    <Navigate to="/login" />
  ) 
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
