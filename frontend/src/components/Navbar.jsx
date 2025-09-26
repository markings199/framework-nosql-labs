import { NavLink } from "react-router-dom";
import { getToken, logout } from "../lib/auth";

export default function Navbar() {
  const token = getToken();
  const linkClass = ({ isActive }) => 
    `px-4 py-2 rounded-md font-medium transition-colors ${
      isActive 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              ShopHub
            </NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            
            {token ? (
              <>
                <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                <NavLink to="/reports" className={linkClass}>Reports</NavLink>
                <button 
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClass}>Login</NavLink>
                <NavLink to="/signup" className={linkClass}>Signup</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}