import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute";
import Events from "./pages/Events";
import Rules from "./pages/Rules";
import Contact from "./pages/Contact";
import EventDetail from './components/EventDetail';
import Footer from "./components/Footer";
import Payment from "./components/Payment";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* Protected routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
             {/* Protect Payment */}
          </Route>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </Router>
    </>
  );
}
