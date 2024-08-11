import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/index";
import AuthGuard from "./components/AuthGuard";
import Books from "./pages/BookList";
import Owners from "./pages/OwnerList";
import BookUpload from "./pages/BookUpload";
import AdminDashboard from "./components/Dashboard/Admin";
import OwnerDashboard from "./components/Dashboard/Owner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        >
          <Route path="" element={<AdminDashboard />} />
          <Route path="Owner" element={<OwnerDashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="owners" element={<Owners />} />
          <Route path="bookUpload" element={<BookUpload />} />
        </Route>

        {/* Redirect to Dashboard if logged in, otherwise to Signup */}
        <Route
          path="*"
          element={
            <Navigate
              to={localStorage.getItem("token") ? "/dashboard" : "/signup"}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
