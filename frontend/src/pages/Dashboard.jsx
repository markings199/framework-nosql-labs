import { getUserFromToken } from "../lib/user";

export default function Dashboard() {
  const me = getUserFromToken();
  
  const getRoleBadge = (role) => {
    const styles = {
      admin: 'bg-purple-100 text-purple-800',
      seller: 'bg-blue-100 text-blue-800',
      user: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${styles[role] || styles.user}`}>
        {role}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">Welcome back, {me?.email}</p>
          {getRoleBadge(me?.role)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-2">
            <li>
              <a href="/catalog" className="text-blue-600 hover:text-blue-800 hover:underline">
                Browse Products
              </a>
            </li>
            <li>
              <a href="/reports" className="text-blue-600 hover:text-blue-800 hover:underline">
                View Reports
              </a>
            </li>
            {me?.role === "seller" && (
              <li>
                <a href="/seller" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Manage My Products
                </a>
              </li>
            )}
            {me?.role === "admin" && (
              <li>
                <a href="/admin" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Admin Panel
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Role Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Access</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Browse and search products in Catalog</li>
            <li>• View analytics and reports</li>
            {me?.role === "seller" && <li>• Create and manage product listings</li>}
            {me?.role === "admin" && <li>• Manage users and system statistics</li>}
          </ul>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Backend API:</span>
              <span className="text-green-600 font-medium">Online</span>
            </div>
            <div className="flex justify-between">
              <span>Database:</span>
              <span className="text-green-600 font-medium">Connected</span>
            </div>
            <div className="flex justify-between">
              <span>Last Login:</span>
              <span className="text-gray-600">Just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}