import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/index";
import AuthGuard from "./components/Auth/AuthGuard";
import Books from "./pages/BookList";
import Owners from "./pages/OwnerList";
import BookUpload from "./pages/BookUpload";
import AdminDashboard from "./components/Dashboard/Admin";
import OwnerDashboard from "./components/Dashboard/Owner";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Unauthorized from "./pages/UnAuthorized";
import UpdateBook from "./pages/UpdateBook";

function App() {
  const role = localStorage.getItem("role");

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
          <Route
            index
            element={
              <ProtectedRoute
                action="read"
                subject="dashboard"
                element={
                  role === "admin" ? <AdminDashboard /> : <OwnerDashboard />
                }
              />
            }
          />

          <Route
            path="books"
            element={
              <ProtectedRoute
                action="read"
                subject="books"
                element={<Books />}
              />
            }
          />
          <Route path="books/:bookId" element={<UpdateBook />} />
          <Route
            path="owners"
            element={
              <ProtectedRoute
                action="read"
                subject="owners"
                element={<Owners />}
              />
            }
          />
          <Route
            path="bookUpload"
            element={
              <ProtectedRoute
                action="read"
                subject="bookUpload"
                element={<BookUpload />}
              />
            }
          />
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />

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
