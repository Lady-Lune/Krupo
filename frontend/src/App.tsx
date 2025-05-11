import '@mantine/core/styles.css';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MessageBoard from './pages/LandingPost';
import { BrowserRouter , Routes , Route, useNavigate } from 'react-router-dom';


function Logout() {
  const navigate = useNavigate();

  localStorage.clear()
  return (
    navigate("/login")
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
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />*/}
        <Route path="/login" element={<Login />} />
        {/*<Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/page" element={<MessageBoard />} />
      </Routes> 
    </BrowserRouter>
  );
}
